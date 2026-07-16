# Personal Agent Operating Model

A shared language for describing composable agent behavior and its outcomes.

## Language

**Skill**:
A composable definition of agent behavior consisting of a name, a description, and an optional body. Its description may carry its complete authored meaning when that is enough for an agent to apply it reliably. Its body extends that meaning when necessary. Its authored meaning may describe an action, protocol, constraint, transformation, judgment, or terminal state, and may begin small and evolve through use.

**Skill Draft**:
A proposed Skill that does not yet have enough authored meaning in its description or body for an agent to apply reliably.

**Context Artifact**:
A persistent representation of context that can be revisited or continued without prescribing a storage mechanism. Prefer a more specific subtype whenever one is known.

A Context Artifact represents context about a subject rather than belonging to a conversation. Multiple conversations may create, consult, or maintain it, and one conversation may involve multiple Context Artifacts.

Known candidate subtypes:

- Knowledge Artifact
- Decision Artifact
- State Artifact
- Handoff Artifact
- Specification Artifact
- Evidence Artifact

Only write to a Context Artifact after the user is aligned with what will be written. The user must be aware of the kind and scope of content that will be written, without requiring every resulting detail or exact wording to be enumerated in advance.

**Artifact Carrier**:
The storage, publication, or collaboration mechanism through which a Context Artifact is persisted and accessed. A carrier may provide separate surfaces for current state and history, but does not determine the artifact's meaning.

**Continuable**:
A property of a subject for which the original intent, a valid way to continue, and possible terminal states can be recovered without material distortion. A subject may be a document, communication topic, task, or other ongoing concern.
