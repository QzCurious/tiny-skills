# Personal Agent Operating Model

A shared language for describing composable agent behavior and its outcomes.

## Language

**Skill**:
A composable definition of agent behavior consisting of a title and a body. Its body may describe an action, protocol, constraint, transformation, judgment, or terminal state, and may begin small and evolve through use.

**Skill Draft**:
A proposed Skill that has a title but does not yet have a body with enough meaning for an agent to apply reliably.

**Context Artifact**:
A persistent representation of context that can be revisited or continued without prescribing a storage mechanism. Prefer a more specific subtype whenever one is known.

Known candidate subtypes:

- Knowledge Artifact
- Decision Artifact
- State Artifact
- Handoff Artifact
- Specification Artifact
- Evidence Artifact

Only write to a Context Artifact after the user is aligned with what will be written.

**Continuable**:
A property of a subject for which the original intent, a valid way to continue, and possible terminal states can be recovered without material distortion. A subject may be a document, communication topic, task, or other ongoing concern.
