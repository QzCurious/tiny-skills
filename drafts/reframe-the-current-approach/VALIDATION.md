# Reframe the Current Approach — Validation

Use this protocol to validate the candidate Skill without contaminating the result with the design discussion that produced it.

## Isolation rule

Run each motivating example in a fresh, independent chat.

The validation chat must not read or rely on:

- Tiny Skills issue #3
- the conversation that designed this Skill
- summaries or memories of the expected reframing
- the target commit or any later repository history before the User has evaluated the Skill output

The validation chat may read:

- `QzCurious/tiny-skills` `main`: `AGENTS.md`, `CONTEXT.md`, `OPERATING-MODEL.md`, relevant canonical Property definitions, and `drafts/reframe-the-current-approach/SKILL.md`
- `QzCurious/seamless-cors` at the specified **base commit**, including its `AGENTS.md`, `CONTEXT.md`, relevant docs, tests, and source files

For the validation only, treat `drafts/reframe-the-current-approach/SKILL.md` as explicitly invoked candidate behavior. Its Draft status does not make it project authority outside the test.

Do not inspect the target commit until after the User has given a validation verdict for the case.

## Common launch prompt

Copy this into a new chat, replacing `<BASE_SHA>` and `<CASE_FOCUS>` with one case below:

```text
This is an isolated validation of a candidate Tiny Skills Skill.

Repositories:
- https://github.com/QzCurious/tiny-skills
- https://github.com/QzCurious/seamless-cors

First read Tiny Skills `main`:
- AGENTS.md
- CONTEXT.md
- OPERATING-MODEL.md
- relevant canonical Property definitions
- drafts/reframe-the-current-approach/SKILL.md

For this validation only, explicitly invoke the candidate `Reframe the Current Approach` behavior from that Draft. Do not read Tiny Skills issue #3 or infer expected behavior from prior conversations, memory, or project history.

Inspect `QzCurious/seamless-cors` at commit `<BASE_SHA>` only. Read its AGENTS.md, CONTEXT.md, relevant documentation, tests, and source code as needed. Do not inspect later commits, commit history after this SHA, or any known target commit before I have evaluated your result.

Reframe this current approach:
<CASE_FOCUS>

Apply the candidate Skill as written. Exercise design judgment internally, but use progressive disclosure with me. Recommend a positive target approach when warranted, surface only material decisions that genuinely need my authority, and leave implementation-level choices within Agent authority. Do not implement the change.

Continue until the Skill reaches one of its defined terminal states. After the reframing interaction reaches a terminal state, ask me to evaluate only these four validation dimensions:
1. Was the reframing behavior appropriate?
2. Was the recommendation reasonable?
3. Were the surfaced decisions necessary and appropriately scoped?
4. Was the mental load appropriate?

Do not inspect or compare against later history until I have given that validation verdict.
```

## Case 1 — Observation responsibility

Base commit:

`aff4743a16e5c7d90cd48a33d7d350420bde1ffc`

Case focus:

```text
Re-evaluate the `fileobservation` approach around repeated observations of unchanged file contents. Consider what responsibility this component should own, what semantics downstream code actually requires, and whether the current approach is the best fit.
```

Historical target commit, for post-verdict comparison only:

`eed6972e61964de11b0d18fa0b6e559e10941c8d`

## Case 2 — Selector recognition and validation

Base commit:

`7de90b8ffa835b3362050b1111b250c41fd79ef9`

Case focus:

```text
Re-evaluate Upstream List selector recognition and validation, including how an active line is classified or recognized and how invalid syntax becomes a user-facing warning. Preserve unrelated accepted-language decisions unless reframing them is materially necessary.
```

Historical target commit, for post-verdict comparison only:

`f8a11a1e8258a0716440762700dd11d6ee829186`

## Case 3 — PAC route derivation

Base commit:

`b450ee4e39b8b6ab662ecb0f5708813a9d651fb4`

Case focus:

```text
Re-evaluate PAC route derivation, especially the transformation used to derive, deduplicate, and order routes. Determine which result or intermediate properties are actually required and whether the current approach fits them well. Treat local allocation and helper-shape choices as implementation details unless they become material to the reframing.
```

Historical target commit, for post-verdict comparison only:

`815cc77e4690680f1cf0d3af4ca5328a07932a31`

## Passing a case

A case passes only when the User explicitly confirms all four validation dimensions are acceptable. If a material weakness is found, feed that finding back into the candidate authored meaning before rerunning the affected case in another fresh chat.

The historical target commit is evidence about the motivating example, not the answer key. A candidate result may differ from that commit and still pass if the User confirms the Skill behavior and recommendation better satisfy the intended operating model.
