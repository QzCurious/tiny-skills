# Repository Guidance

This repository develops a personal agent operating model from a shared language and composable Skills.

Before changing a Skill:

- Read `CONTEXT.md` for the shared language.
- Read `OPERATING-MODEL.md` for authoring principles.
- Treat a Skill's title and body as its authored meaning.
- Keep each Skill as small as its current meaning allows.
- Do not add behavior that has not been aligned with the user.
- Keep title-only proposals in `drafts/`.
- Promote a draft to `skills/` only after it has a meaningful body.
- Treat `name` and `description` as standard discovery metadata derived from the Skill's title and body.
- Add provider-specific metadata, such as `agents/openai.yaml`, only when a concrete integration requires it.
- Validate every changed Skill.
