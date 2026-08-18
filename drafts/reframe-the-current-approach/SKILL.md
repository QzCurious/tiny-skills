---
name: reframe-the-current-approach
description: 僅在 User 明確要求, 或 active caller Skill 的 authored meaning 明確要求此 Skill 時使用。重新檢視既有或提議中的 approach 是否仍適合目前的 authoritative problem; 在需要時透過 grounding, intent alignment 與 User decision 補足 material condition; 保留 authoritative ends, still-valid observable contracts 與 required semantic properties; 重新考慮可修改的 solution choices; 在有充分理由時提出 coherent, better-fitting approach; 並持續互動直到建立明確 target approach, 或確認此次 invocation 無法再可靠繼續後明確結束。
---

# Reframe the Current Approach

此 Skill 只在明確 invocation 後執行; 不因 code smell, complexity, disagreement, Agent 發現其他方案, 或推測可能適用而自行觸發

一次 invocation 可以跨越多個 Agent/User turn。缺少 material basis, 存在 intent ambiguity, 或需要 material decision 都不等於 invocation 結束; 只要相關 condition 仍可建立，就應先補足並繼續。Agent 向 User 請求必要資訊或決策後可以形成 interactive pause; 當前 response 可以結束，但 Skill lifecycle 尚未結束

此 Skill 以以下 state machine 作為 canonical control-flow backbone。Transition label 採 UML-style notation `trigger [guard] / effect`; 未需要 trigger 或 effect 時可以省略。正文說明各 state 內應如何判斷與行動; 不另行建立與 state machine 衝突的 control flow

所有 `<<choice>>` state 的 outgoing guards 在 relevant material scope 內必須 mutually exclusive 且 collectively exhaustive; 任一時點只能選擇一條有效 transition，且所有有效情況都必須有可走的 transition

## State Machine

```mermaid
stateDiagram-v2
    state "建立評估基礎" as EstablishBasis
    state "補足評估基礎" as AcquireBasis
    state "評估目前做法" as EvaluateApproach
    state "處理採用狀態" as ResolveAdoption
    state "取得必要決策" as AcquireDecision
    state "收束" as Conclude

    state BasisCheck <<choice>>
    state EvaluationCheck <<choice>>
    state AdoptionCheck <<choice>>

    [*] --> EstablishBasis: invoke [已明確授權]

    EstablishBasis --> BasisCheck: 完成 basis assessment

    BasisCheck --> EvaluateApproach: [authoritative problem 足以支援此次 reframing]
    BasisCheck --> AcquireBasis: [缺少 material basis 且可以建立]
    BasisCheck --> Conclude: [缺少 material basis 且無法建立] / result = Blocked

    AcquireBasis --> EstablishBasis: 所需 basis 已取得或由 User 補足
    AcquireBasis --> Conclude: User 明確停止, redirect 或 defer / result = Deferred

    EvaluateApproach --> EvaluationCheck: 完成 material evaluation

    EvaluationCheck --> AcquireBasis: [發現新的 material uncertainty]
    EvaluationCheck --> Conclude: [不需要 material reframing] / result = Reaffirmed current approach
    EvaluationCheck --> ResolveAdoption: [存在 better-fitting revised approach]

    ResolveAdoption --> AdoptionCheck: 完成 adoption assessment

    AdoptionCheck --> Conclude: [所有 material adoption decisions 已解決] / result = Aligned target approach
    AdoptionCheck --> AcquireDecision: [需要 material decision 且 proper Decision Authority 可互動]
    AdoptionCheck --> Conclude: [需要 material decision 且 proper Decision Authority 無法取得] / result = Blocked

    AcquireDecision --> ResolveAdoption: authority 決定 [Decision 只影響 adoption]
    AcquireDecision --> EvaluateApproach: authority 決定 [Decision 改變 evaluation basis]
    AcquireDecision --> Conclude: User 明確停止, redirect 或 defer / result = Deferred

    Conclude --> [*]: 明確表達 result
```

## 建立評估基礎

進入 material evaluation 前，先建立足以可靠進行此次 reframing 的 authoritative basis

此次 Intended Work 是重新評估目前 approach 並判斷是否需要建立不同的 target approach。相對於這項 Intended Work，authoritative problem 應足以符合 `properties/well-specified.md`: 不需要 Agent 以猜測補足會實質改變 evaluation result 的意義, scope, condition 或 allowed choice

從目前可取得的 conversation, 明示來源, 文件與紀錄, settled Decisions, project conventions 與 environment 中辨識 relevant intent 與 expected outcome, requirements 與 invariants, constraints 與 assumptions, observable contracts, required semantic properties, settled Decisions 與其 Decision Authority, 以及此次允許重新考慮的 scope

不要要求特定 process history 才承認 condition 已成立; 判斷所需 current state 是否已經存在即可

若 condition 尚不足，但仍有合理路徑可以建立，進入 `補足評估基礎`

若 material basis 無法可靠建立，也不存在可行的補足路徑，進入 `收束`

## 補足評估基礎

只補足可能實質改變 reframing result 的缺口

需要從既有脈絡還原資訊時使用 `Ground in Context`。Grounding 後若仍有會實質改變 outcome, scope 或 allowed change 的 intent ambiguity，使用 `Align Intent`

優先從可取得的 context 建立 condition，不要求 User 重複已可取得的資訊

當 material gap 無法由現有來源解決，但 User 可能補足時，向 User surface 最小必要問題。User 的回答是正常的 state transition trigger，不視為新的 Skill invocation; 在等待回答期間形成 interactive pause，而不是 terminal state

取得新 basis 後回到 `建立評估基礎`，重新判斷 condition 是否足夠; 不因已經做過 grounding 或 alignment 就假設 condition 必然成立

Recovery loop 只在新的 context, clarification 或 User input 仍可能實質改變下一次 guard 判斷時繼續。不要因為仍可提出更多問題就無限延長 invocation; 若已不存在能建立必要 condition 的有效路徑，必須進入 `收束`

## 評估目前做法

以已建立的 authoritative basis 評估 current approach

保留仍具 authority 的 ends, observable contracts, required semantic properties 與 settled Decisions。只重新考慮實際可修改的部分，例如 framing, assumptions, decision procedure, responsibility placement, conclusion placement, maintained intermediate properties, mechanisms, decomposition, seams 與 trade-offs

目前 implementation 維持某項 property，不代表該 property 本身具有 authority

評估既有 mechanism 或 maintained property 時，重新確認它在 adjacent mechanisms, downstream semantics 與 existing guarantees 已存在後，現在仍實際負責什麼工作; 不因它過去曾解決某個問題就預設現在仍應保留

探索足夠 materially distinct 的 alternatives，以避免只在 current framing 內做 local optimization。只使用與實際問題有關的 reframing perspectives; 移除明顯 dominated alternatives，只比較會實質區分 viable approaches 的 trade-offs

最後形成 material evaluation:

- 若 current approach 仍然 better-fitting，或不存在值得採用的 material reframing，進入 `收束`
- 若存在 coherent, better-fitting revised approach，進入 `處理採用狀態`
- 若 evaluation 過程暴露新的 material uncertainty，回到 `補足評估基礎`

## 處理採用狀態

Agent 的 recommendation 不自動授權 recommendation 所隱含的所有 changed Decisions

辨識 revised approach 要成為 current aligned direction 所必須解決的 material adoption decisions。只處理此次 reframing 真正需要的 decision boundary; 不為未來 implementation 漸進展開完整 Decision Dependency Graph

若所有 required material decisions 已由 proper Decision Authority 解決，進入 `收束`

若仍有 material decision，而 proper Decision Authority 在目前 interaction 中可取得，進入 `取得必要決策`

若 proper Decision Authority 目前無法取得，且因此無法可靠建立 aligned target approach，進入 `收束`

## 取得必要決策

只向 proper Decision Authority surface 下一個會阻礙 aligned target approach 的最小 material decision

提供足以決策的資訊:

- 必須決定什麼
- Agent 推薦的 choice
- 使這個 decision material 的 decisive rationale 或 trade-off
- 只有在另一個 viable alternative 對 decision 本身有實質意義時才一起呈現

不預設 User 必須閱讀 exhaustive before/after delta, evidence chain, alternative matrix 或 implementation plan 才能決策

Decision Authority 做出決定後，將該 Decision 視為新的 authoritative current state。若 Decision 只解決 adoption，回到 `處理採用狀態`; 若 Decision 改變 authoritative problem, constraints, scope 或 allowed solution space，回到 `評估目前做法`

Proper Decision Authority 可以選擇不同於 Agent recommendation 的方向。此時應依新的 authoritative state 繼續，不把「authority 決定保留原方向」誤寫成「Agent 評估後 reaffirm 原方向」

等待 Decision Authority 回應時可以形成 interactive pause，但不能因此把 `decision required` 當成 result 或視為 Skill 已經結束

## 收束

每次 invocation 必須經由此 state transition 到 final state `[*]`; 只有 `Conclude --> [*]` 才是此 Skill lifecycle 的 end point

只有在以下任一情況成立時進入 `收束`:

- 已建立明確且 coherent 的 target approach
- material continuation condition 已確認無法建立
- User 明確停止, redirect 或 defer 此次 reframing

每次收束只產生一個 result

### Reaffirmed current approach

Agent 的 material evaluation 判斷 current approach 仍然 better-fitting，或不存在值得採用的 material reframing

只表達足以支持這項 conclusion 的 decisive rationale

### Aligned target approach

已建立 coherent target approach，且此次 reframing scope 內所有必要 material adoption decisions 均由 proper Decision Authority 解決

Target approach 可能是 Agent recommendation，也可能反映 Decision Authority 所選擇的其他方向

以 positive target state 表達結果，使 downstream AI Agent 能直接依此繼續工作

### Blocked

此次 reframing 的 material condition 無法建立，因此不能可靠完成

明確指出哪個 condition 未成立, 為何目前無法建立, 它如何阻礙 reliable continuation, 以及什麼改變可以使後續 invocation 再次有效進入流程

不得將 `Blocked` 宣稱為成功完成

### Deferred

User 明確停止, redirect 或 defer 仍可繼續的 reframing

保留目前已建立的 material conclusion 與仍未解決的 condition，使之後重新 invocation 時不需要不必要地重建已知 state

不得將 `Deferred` 宣稱為成功完成

`Reaffirmed current approach` 與 `Aligned target approach` 是 success results; `Blocked` 與 `Deferred` 是合法 terminal results，但不滿足成功完成的 Postcondition

表達 result 後立即 transition 到 `[*]`; 不讓 Skill 維持隱性的 waiting state

## 互動與揭露

整個 invocation 使用 progressive disclosure

Agent 可以在內部充分比較 current approach 與 alternatives，但對 User 優先說明 resulting responsibilities, semantics, observable consequences, decisive trade-offs, 以及目前真正需要 User 處理的 material question 或 decision

Supporting evidence 預設作為內部 evaluation basis。只有在 evidence 本身會影響 User decision, 需要它才能解除 material uncertainty, User 明確要求, 或需要回應對 evaluation basis 的 challenge 時才 surface 個別 evidence

不要要求 User 吸收與目前 transition 無關的 exhaustive rationale, alternative matrix, implementation plan 或 downstream implementation decisions

此 Skill 不負責 implementation，也不負責在 adoption 所需範圍之外逐步探索 downstream Decision Dependency Graph
