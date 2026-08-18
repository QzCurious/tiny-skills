---
name: reframe-the-current-approach
description: Use only when explicitly invoked by the User or by another Skill whose authored meaning explicitly calls this Skill. Re-evaluate an existing or proposed approach against a sufficiently grounded authoritative problem; preserve authoritative ends, still-valid observable contracts, and required semantic properties; reconsider revisable solution choices; exercise design judgment to recommend a coherent better-fitting approach when warranted; and surface only the material adoption decisions that require the proper decision authority before treating a revised direction as aligned.
---

# Reframe the Current Approach

Do not invoke this Skill from inferred applicability, code smells, complexity, disagreement, or the mere existence of an alternative. Invocation must be explicitly authorized by the User or explicitly delegated by the authored meaning of the active caller Skill.

After invocation, establish enough authoritative basis to evaluate the approach without guessing material requirements. Recover relevant intent, requirements, invariants, constraints, observable contracts, required semantic properties, and settled decisions from available context; use `Ground in Context` when material context must be recovered, and `Align Intent` when the intended outcome or allowed scope of change is materially ambiguous. If the authoritative problem still cannot be established reliably, stop rather than make a material recommendation.

Evaluate the current approach against that basis. Reconsider only what is actually revisable: framing, assumptions, decision procedures, responsibility or conclusion placement, maintained intermediate properties, mechanisms, decomposition, seams, and trade-offs. A property preserved by the current implementation is not authoritative merely because the implementation preserves it. When evaluating an existing mechanism or maintained property, determine what work it still performs after adjacent mechanisms, downstream semantics, and existing guarantees are accounted for; do not preserve it merely because it once addressed a problem now substantially handled elsewhere. Use only the reframing perspectives relevant to the actual problem.

Explore enough materially distinct alternatives to avoid merely optimizing inside the current framing. Prune dominated alternatives, compare only trade-offs that materially distinguish viable approaches, and recommend the better-fitting approach when the authoritative basis supports one. Do not default to an option menu.

Invocation authorizes reframing analysis, not adoption of every resulting decision change. When the recommendation changes a settled decision that is not already covered by the available decision authority, surface only the minimum material adoption decision, the recommendation, and the decisive rationale or trade-off needed to decide it. Include another viable alternative only when it is materially relevant to that decision.

Use progressive disclosure with the User. Compare current and alternative approaches as deeply as needed internally, but prefer explaining the recommendation through the resulting responsibilities, semantics, observable consequences, and decisive trade-offs rather than an evidentiary proof chain. Treat supporting evidence as internal basis by default; surface individual evidence only when it is itself material to a User decision, needed to resolve material uncertainty, requested by the User, or needed to answer a challenge to the basis. Do not require the User to absorb an exhaustive before/after delta, rationale, alternative matrix, implementation plan, or implementation decisions already within Agent authority. Once the necessary material decisions are resolved, express the result as a positive target approach and leave the remaining realization to downstream AI Agent work.

The Skill may complete with one of these results:

- **Reaffirmed current approach**: the current approach remains better-fitting or no material reframing is warranted; give only the decisive rationale needed to support that conclusion.
- **Aligned revised approach**: the recommended direction is better-fitting and all material changed decisions required by it are resolved by the proper decision authority; provide a positive target approach sufficient for downstream work.
- **Revised approach awaiting decision**: the recommendation is clear but adoption still requires material decision authority; surface only the minimum decision and decision-relevant rationale.
- **Insufficient authoritative basis**: material evaluation would require guessing; state the missing basis and what would unblock reliable continuation.

This Skill does not own implementation or progressive discovery of a downstream Decision Dependency Graph.
