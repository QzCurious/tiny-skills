---
name: use-a-local-artifact-carrier
description: Persist and recover Context Artifacts as local files. Use when a local carrier is selected or when an agent needs to suggest a readily available carrier in the current environment.
---

# Use a Local Artifact Carrier

Use `Ground in Context` to discover existing project conventions and relevant local artifacts before choosing a location or interpreting files.

Prefer an established project location. Otherwise suggest these locations relative to the subject's workspace:

- `.context-artifacts/<subject>.md` when one surface is sufficient;
- `.context-artifacts/<subject>/current.md` and `history.md` when current state and history need separate surfaces.

Realize the Context Artifact's visibility, authority, current-state, and history requirements through its location, permissions, synchronization, file surfaces, and version-control treatment.

Use a descriptive subject name and natural-language content rather than a required schema or metadata. Preserve the artifact's meaning without deriving it from the local layout.

Use `Align Intent` before creating or updating local artifacts so the user is aware of the kind and scope of content and where it will be written.

When recovering local context, inspect the suggested and established locations, then search plausible workspace files by subject and narrative content. Recovery is complete when the relevant Context Artifacts and their surfaces can be identified and read.
