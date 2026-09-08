import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

function run(command: string, args: string[]): string {
  return execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] }).trim();
}
const git = (...args: string[]) => run("git", args);
function fail(message: string): never {
  throw new Error(message);
}

const args = process.argv.slice(2);
if (args.some((arg) => arg !== "--dry-run")) fail("Usage: nub run release [--dry-run]");
const dryRun = args.includes("--dry-run");
process.chdir(git("rev-parse", "--show-toplevel"));
if (git("branch", "--show-current") !== "main") fail("Switch to main before releasing");
if (git("status", "--porcelain")) fail("Commit or stash all changes, including untracked files, before releasing");

// Read remote refs without changing local branches or tags.
const refs = new Map(run("git", ["ls-remote", "origin"]).split("\n").map((line) => {
  const [sha, ref] = line.split(/\s+/);
  return [ref, sha];
}));
const remoteMain = refs.get("refs/heads/main");
if (!remoteMain) fail("origin/main must exist before releasing");
if (!dryRun) git("fetch", "origin", "main", "--no-tags");
try {
  git("merge-base", "--is-ancestor", remoteMain, "HEAD");
} catch {
  fail("Local main must include origin/main; fetch and integrate remote changes first");
}

const manifestPath = ".codex-plugin/plugin.json";
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.exec(manifest.version);
if (!match) fail("Plugin version must be a stable major.minor.patch version");
const head = git("rev-parse", "HEAD");
const currentTag = `v${manifest.version}`;
const headTags = git("tag", "--points-at", "HEAD").split("\n");
const pending = headTags.includes(currentTag) && git("log", "-1", "--format=%s") === `chore: release ${currentTag}`;
const version = pending ? manifest.version : `${match[1]}.${match[2]}.${BigInt(match[3]) + 1n}`;
const tag = `v${version}`;
const remoteTag = refs.get(`refs/tags/${tag}^{}`) ?? refs.get(`refs/tags/${tag}`);
if (pending && remoteTag === head && refs.get("refs/heads/release") === head) {
  console.log(`${tag} is already published`);
  process.exit(0);
}
if (remoteTag && remoteTag !== head) fail(`${tag} already exists on origin`);
if (!pending && git("tag", "--list", tag)) fail(`${tag} already exists locally`);

console.log(`Validating ${pending ? "pending release" : "new release"} ${tag}`);
console.log(run("nub", ["run", "validate"]));
console.log(run("nub", ["run", "typecheck"]));
const marketplace = JSON.parse(readFileSync(".agents/plugins/marketplace.json", "utf8"));
if (manifest.name !== "tiny-skills" || manifest.skills !== "./skills/" ||
    !marketplace.plugins.some((plugin: { name: string; source: { source: string; path: string } }) =>
      plugin.name === manifest.name && plugin.source.source === "local" && plugin.source.path === ".")) {
  fail("Plugin manifest and marketplace must identify the root tiny-skills plugin");
}
if (dryRun) {
  console.log(`Dry run: would publish ${tag} to origin/main and origin/release; no files or remote refs changed`);
  process.exit(0);
}

if (!pending) {
  manifest.version = version;
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  git("add", "--", manifestPath);
  git("commit", "-m", `chore: release ${tag}`);
  git("tag", tag);
}
// All refs update together. A competing release or divergent branch rejects the push.
// Keep the local commit and tag on failure so the same command can retry publication.
try {
  console.log(git("push", "--atomic", "origin", "HEAD:refs/heads/main", "HEAD:refs/heads/release", `refs/tags/${tag}:refs/tags/${tag}`));
} catch {
  fail(`Publishing ${tag} failed; local commit and tag are retained. Resolve the push failure and rerun nub run release`);
}
console.log(`Published ${tag}. Update Codex with: codex plugin marketplace upgrade tiny-skills-marketplace`);
