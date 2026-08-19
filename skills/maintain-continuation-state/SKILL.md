---
name: maintain-continuation-state
description: Project an evolving topic into its canonical Continuation State and keep that state synchronized with current effective conclusions for a Continuation Scenario. Use when the User wants a topic to remain Continuable across conversations, Agents, time, ownership, or other processing boundaries.
---

# Maintain Continuation State

## Establish Continuation Scenario

辨識要延續的主題與 Continuation Scenario, 包括 Continuation Boundary, 預期接續者, 邊界後可取得的脈絡與 capabilities 或 permissions, 以及 Intended Work。Continuation Scenario 必須足以判斷此次維護需要保存哪些 state 與如何 materialize; 可由邊界後穩定可取得的脈絡可靠推定的部分不要求重述。當不同理解會實質改變所需 state 或接續方式, 且 applicable authority 尚未建立 governing interpretation 時, 不自行選擇會 material 改變結果的方向

## Initialize

此 Skill 可以在主題進行途中啟動。從既有脈絡投影出 `Continuable` 所定義的 Continuation State, 只保留目前仍會影響接續的內容

先建立 Orientation 所需的 governing framing: subject, current motivation 或 starting point, intended outcome, 以及有 material relevance 時的 scope 或 non-goals。不要把目前 workflow, 下一步或已無 governing force 的 historical origin 當成 Orientation

不要複製完整對話, activity history 或 discussion process。歷史內容只有在仍具有 current governing force, 或必須保留 supersession fact 才能避免恢復已失效方向時才納入

## Reconcile

當討論, 修正, 決定, authoritative fact, governing framing 或 unresolved state 改變使接續狀態發生變化時, reconcile canonical Continuation State:

- 納入新成立且仍影響接續的 authoritative facts, Decisions, validation 或 investigation results 與其他 settled results
- 更新 Orientation, 使其反映目前有效的 subject, motivation, intended outcome 與 material scope
- 更新 Current State, 使其反映目前 governing state
- 將新辨識且仍會影響接續的 unsettled matters 納入 Unresolved
- 更新各 Unresolved item 的 resolution status, 已知 resolution path, 必要條件或目前沒有有效 resolution path 的事實
- 當 Unresolved item resolved 時, 將仍具 continuation relevance 的結果 reconcile 到 Current State; 若結果已不再 relevant, 直接 retire 該 item
- 推導或更新由目前 governing state 支持的 Possible End States 與 Exit Conditions
- 移除或明確取代已失效內容

Unresolved 不要求每個 item 都已有 next move, 也不建立與 Unresolved 競爭的獨立 action list。當某個 resolution path 會實質影響接續時, 將它與對應 item 一起維護

若 Continuation Scenario 發生 material change, 重新判斷原 Continuation State 是否仍足以支援新的 scenario, 並依新的 evaluation context 完整 reconcile

維護 `Continuable` 定義的 semantic coverage, 但不要求固定 heading 或 schema

## Preserve Status and Authority

依 `CONTEXT.md` 保留各項內容目前的 status, applicable authority 與 material provenance。只有由 applicable Decision Authority 建立的內容才能記錄為 Decision; 不得把 proposal, assumption, Agent inference, 沉默, 繼續討論或其他未形成 governing Decision 的狀態投影成 Decision

對 user-directed topic, 若沒有其他 Decision Authority 已成立, User 預設具有會改變 intent, scope, priority, acceptance criteria 或其他由 Orientation 反映的 material governing framing 的 Decision Authority。不要因此要求 User 再確認 independently authoritative facts, 或把 User 視為所有 domain facts 的 authority

Agent 可以依已成立的 Decisions, authoritative facts 與其他 governing state reconcile Continuation State, 包括維護 Orientation, Current State, Unresolved 與 Possible End States。Agent 也可以更新 Unresolved item 的 resolution status 或從目前 state 推導可行 resolution path; 這些 projection 或 inference 不會自行建立 governing authority

若一項更新會新增或改變尚未由 applicable authority 決定的 material intent, scope, acceptance criteria, governing framing 或其他 material choice, 將它保持在 Unresolved, 不要為了形成完整敘述自行解決。當該 Decision 成為後續 Governed Action 的 material Precondition 時, 必須先依運作模型建立 readiness, 再進入受影響的 action

## Materialize

使 canonical Continuation State 成為 Continuation Scenario 的接續者於邊界後可取得, 且能辨識為目前有效狀態的脈絡

Materialized representation 應具有 `Clear Reading Path`: 在主要理解路徑上先使接續者建立 Orientation, 再要求其理解 detailed Current State, Unresolved 與 end-state information。若 surrounding context 已可靠建立部分 Orientation, 不必機械重複; 但接續者不應先讀大量 current workflow, authority metadata 或 implementation detail 才能理解主題是什麼, 為何存在與希望達成什麼

Continuation Scenario 不要求作為 representation 的開頭或固定 section。若 scenario 中會實質影響接續的 boundary, context, capability 或 permission 無法由邊界後脈絡可靠辨識, materialize 足以避免錯誤接續的條件

進入 materialization 前, 邊界後可取得的 representation 必須足以承載所需 state, 且 Agent 必須具有必要寫入 authority。若任一 material Precondition 尚未成立, 不以不完整或未授權寫入冒充 materialization; 先依運作模型建立 readiness, 或在 Blocked 時保留明確的阻礙與有效解除路徑

避免建立彼此競爭的 current-state copies。若存在多個 representations, 明確其 authority 與用途, 並維持一個可辨識的 canonical current state

## Retire

當主題進入 Possible End State 時, reconcile 最後的 Continuation State, 並依目前有效的 Exit Conditions 完成, 終止, 封存, 取代或轉移到 successor topic。若是否進入 end state 仍取決於 unresolved material choice 或其他 unsettled matter, 將其保留在 Unresolved, 並由 applicable authority 或對應 resolution path 繼續處理

每次維護循環在 canonical Continuation State 已反映目前有效結論, 且 Continuation Scenario 的接續者能從邊界後可取得的脈絡先理解 Orientation, 再不失真地繼續 Intended Work 時完成。持續維護在主題退休或 User 終止維護時結束
