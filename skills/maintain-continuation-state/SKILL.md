---
name: maintain-continuation-state
description: Project an evolving topic into its canonical Continuation State and keep that state synchronized with current effective conclusions for an Intended Continuation. Use when the User wants a topic to remain Continuable across conversations, Agents, time, ownership, or other processing boundaries.
---

# Maintain Continuation State

## Establish Intended Continuation

辨識要延續的主題與 Intended Continuation, 包括 Continuation Boundary, 預期接續者, 邊界後可取得的脈絡與權限, 以及 Intended Work。Intended Continuation 必須足以判斷此次維護需要保存哪些 state 與如何 materialize; 當不同理解會實質改變所需狀態或接續方式, 且 applicable authority 尚未建立 governing interpretation 時, 不自行選擇會 material 改變結果的方向

## Initialize

此 Skill 可以在主題進行途中啟動。從既有脈絡投影出 `Continuable` 所定義的 Continuation State, 只保留目前仍會影響接續的內容

不要複製完整對話, activity history 或 discussion process。歷史內容只有在仍具有 current governing force, 或必須保留 supersession fact 才能避免恢復已失效方向時才納入

## Reconcile

當討論, 修正, 決定, authoritative fact 或方向改變使接續狀態發生變化時, reconcile canonical Continuation State:

- 納入新成立且仍影響接續的 authoritative facts, Decisions 與其他結果
- 更新 Continuation Direction 與 Current State, 使其反映目前 governing state
- 新增, 移除或重新分類 Open Matters
- 從 Current State 推導, 更新或移除 Valid Next Moves
- 推導或更新由目前 governing state 支持的 Possible End States 與 Exit Conditions
- 移除或明確取代已失效內容

維護 `Continuable` 定義的 semantic coverage, 但不要求固定 heading 或 schema

## Preserve Status and Authority

依 `CONTEXT.md` 保留各項內容目前的 status, applicable authority 與 material provenance。只有由 applicable Decision Authority 建立的內容才能記錄為 Decision; 不得把 proposal, assumption, Agent inference, 沉默, 繼續討論或其他未形成 governing Decision 的狀態投影成 Decision

對 user-directed topic, 若沒有其他 Decision Authority 已成立, User 預設具有會改變 intent, scope, priority, acceptance criteria 或 Continuation Direction 等 material choice 的 Decision Authority。不要因此要求 User 再確認 independently authoritative facts, 或把 User 視為所有 domain facts 的 authority

Agent 可以依已成立的 Decisions, authoritative facts 與其他 governing state reconcile Continuation State, 包括重新表達 Continuation Direction, 維護 Open Matters, 推導 Valid Next Moves, Possible End States 與其 Exit Conditions。這些 projection 或 inference 不會自行建立 governing authority

若一項更新會新增或改變尚未由 applicable authority 決定的 material intent, scope, acceptance criteria, governing direction 或其他 material choice, 保持其 open status, 不要為了形成完整敘述自行解決。當該 Decision 成為後續 Governed Action 的 material Precondition 時, 必須先依運作模型建立 readiness, 再進入受影響的 action

## Materialize

使 canonical Continuation State 成為 Intended Continuation 的接續者於邊界後可取得, 且能辨識為目前有效狀態的脈絡

進入 materialization 前, 邊界後可取得的 representation 必須足以承載所需 state, 且 Agent 必須具有必要寫入 authority。若任一 material Precondition 尚未成立, 不以不完整或未授權寫入冒充 materialization; 先依運作模型建立 readiness, 或在 Blocked 時保留明確的阻礙與有效解除路徑

避免建立彼此競爭的 current-state copies。若存在多個 representations, 明確其 authority 與用途, 並維持一個可辨識的 canonical current state

## Retire

當主題進入 Possible End State 時, reconcile 最後的 Continuation State, 並依目前有效的 Exit Conditions 完成, 終止, 封存, 取代或轉移到 successor topic。若是否進入 end state 仍取決於未決的 material choice, 保持其 open status 並交由 applicable Decision Authority 決定

每次維護循環在 canonical Continuation State 已反映目前有效結論, 且 Intended Continuation 的接續者能從邊界後可取得的脈絡不失真地繼續 Intended Work 時完成。持續維護在主題退休或 User 終止維護時結束
