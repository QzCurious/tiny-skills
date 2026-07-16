# Operating Model

- Interpret shared terms according to `CONTEXT.md`.
- Prefer the most specific known term over a broad parent term.
- Author Skills against the stable Agent Skills specification by default.
- Keep provider-specific behavior and metadata outside standard Skill fields, and add them only when a concrete integration requires them.
- Start a Skill with a name and description. Add a body only when the description does not cover its complete meaning.
- Compose Skills when the current Skill requires them or when its stated conditions make them necessary.
- Do not create or update a Context Artifact until the user is aligned with its intended content.
- Choose or recommend an Artifact Carrier according to the artifact's audience, authority, collaboration needs, history requirements, and available environment while preserving the artifact's meaning across carriers.
- Preserve the user's original direction when refining underspecified input.
