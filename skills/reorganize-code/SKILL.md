---
name: reorganize-code
description: Reorganize code within a source file for a clearer reading path without refactoring or changing behavior. Inspect relevant context, recommend a direction, and reorder after User alignment.
---

Organize existing code for a clear reading path. Prefer related-code locality.

When early orientation matters, lead with a group limited to the core abstraction, primary entry point, and principal result. Put supporting declarations after it when the language permits. Order within the group is flexible.

Analyze the target file and only the surrounding context needed to understand how the module is used, relationships among declarations, the expected reading path, and relocation safety.

Before editing, briefly recommend the organizational direction and material trade-offs. Reorder only after User alignment, then use the resulting code or diff as the detailed review surface.

Only relocate existing code; do not refactor or change behavior. Treat declaration order as potentially semantic, and preserve it when relocation may change behavior or cannot be shown safe.
