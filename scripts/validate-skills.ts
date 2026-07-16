import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseDocument } from "yaml";

const skillsDirectory = path.resolve("skills");
const skillNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

async function parseYaml(source: string, file: string): Promise<unknown> {
  const document = parseDocument(source);

  if (document.errors.length > 0) {
    throw new Error(`${file}: ${document.errors.map((error) => error.message).join("; ")}`);
  }

  return document.toJS();
}

async function validateOptionalOpenAiMetadata(skillDirectory: string): Promise<void> {
  const file = path.join(skillDirectory, "agents", "openai.yaml");
  let source: string;

  try {
    source = await readFile(file, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return;
    }

    throw error;
  }

  await parseYaml(source, file);
}

async function validateSkill(skillName: string): Promise<void> {
  const skillDirectory = path.join(skillsDirectory, skillName);
  const skillFile = path.join(skillDirectory, "SKILL.md");
  const source = await readFile(skillFile, "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error(`${skillFile}: missing or malformed YAML frontmatter`);
  }

  const metadata = await parseYaml(match[1], skillFile);

  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    throw new Error(`${skillFile}: frontmatter must be a mapping`);
  }

  const record = metadata as Record<string, unknown>;
  const keys = Object.keys(record).sort();

  if (keys.join(",") !== "description,name") {
    throw new Error(`${skillFile}: frontmatter must contain only name and description`);
  }

  if (record.name !== skillName) {
    throw new Error(`${skillFile}: name must match its directory (${skillName})`);
  }

  if (!skillNamePattern.test(skillName)) {
    throw new Error(`${skillFile}: name must use lowercase letters, digits, and hyphens`);
  }

  if (typeof record.description !== "string" || record.description.trim() === "") {
    throw new Error(`${skillFile}: description must be a non-empty string`);
  }

  if (match[2].trim() === "") {
    throw new Error(`${skillFile}: body must not be empty`);
  }

  await validateOptionalOpenAiMetadata(skillDirectory);
  console.log(`valid: ${path.relative(process.cwd(), skillDirectory)}`);
}

const entries = await readdir(skillsDirectory, { withFileTypes: true });
const skillNames = entries
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (skillNames.length === 0) {
  throw new Error("No skills found");
}

await Promise.all(skillNames.map(validateSkill));
console.log(`${skillNames.length} skills valid`);
