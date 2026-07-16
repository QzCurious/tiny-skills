import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { parseDocument } from "yaml";

const skillsDirectory = path.resolve("skills");
const skillNamePattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const stableFrontmatterFields = new Set([
  "compatibility",
  "description",
  "license",
  "metadata",
  "name",
]);

async function parseYaml(source: string, file: string): Promise<unknown> {
  const document = parseDocument(source);

  if (document.errors.length > 0) {
    throw new Error(`${file}: ${document.errors.map((error) => error.message).join("; ")}`);
  }

  return document.toJS();
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
  const unsupportedKeys = keys.filter((key) => !stableFrontmatterFields.has(key));

  if (unsupportedKeys.length > 0) {
    throw new Error(
      `${skillFile}: unsupported or non-stable frontmatter fields: ${unsupportedKeys.join(", ")}`,
    );
  }

  if (record.name !== skillName) {
    throw new Error(`${skillFile}: name must match its directory (${skillName})`);
  }

  if (skillName.length > 64 || !skillNamePattern.test(skillName)) {
    throw new Error(
      `${skillFile}: name must be at most 64 characters and use lowercase letters, digits, and single hyphens`,
    );
  }

  if (
    typeof record.description !== "string" ||
    record.description.trim() === "" ||
    record.description.length > 1024
  ) {
    throw new Error(`${skillFile}: description must be a non-empty string of at most 1024 characters`);
  }

  if (
    record.license !== undefined &&
    (typeof record.license !== "string" || record.license.trim() === "")
  ) {
    throw new Error(`${skillFile}: license must be a non-empty string when provided`);
  }

  if (
    record.compatibility !== undefined &&
    (typeof record.compatibility !== "string" ||
      record.compatibility.trim() === "" ||
      record.compatibility.length > 500)
  ) {
    throw new Error(
      `${skillFile}: compatibility must be a non-empty string of at most 500 characters when provided`,
    );
  }

  if (record.metadata !== undefined) {
    if (!record.metadata || typeof record.metadata !== "object" || Array.isArray(record.metadata)) {
      throw new Error(`${skillFile}: metadata must be a string-to-string mapping when provided`);
    }

    const invalidMetadataKeys = Object.entries(record.metadata).filter(
      ([key, value]) => key.length === 0 || typeof value !== "string",
    );

    if (invalidMetadataKeys.length > 0) {
      throw new Error(`${skillFile}: metadata must be a string-to-string mapping when provided`);
    }
  }

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
