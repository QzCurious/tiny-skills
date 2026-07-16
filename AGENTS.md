# Repository Guidance

This repository develops a personal agent operating model from a shared language and composable Skills.

Before changing a Skill:

- Read `CONTEXT.md` for the shared language.
- Read `OPERATING-MODEL.md` for authoring principles.
- Keep each Skill as small as its current meaning allows.
- Start with a name and description. Add a body only when the description does not cover the Skill's complete meaning.
- Do not add behavior that has not been aligned with the user.
- Keep proposals in `drafts/` until their description or body has enough meaning for an agent to apply reliably.
- Add provider-specific metadata, such as `agents/openai.yaml`, only when a concrete integration requires it.
- Validate every changed Skill.
