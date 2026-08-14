---
name: maintain-continuation-state
description: Project an evolving topic into its canonical Continuation State and keep that state synchronized with current effective conclusions for an Intended Continuation. Use when the User wants a topic to remain Continuable across conversations, Agents, time, ownership, or other processing boundaries.
---

# Maintain Continuation State

當現有脈絡不足以可靠理解主題時, 先使用 `Ground in Context`

## Establish Intended Continuation

辨識要延續的主題與 Intended Continuation, 包括 Continuation Boundary, 預期接續者, 邊界後可取得的脈絡與權限, 以及 Intended Work。若可低後果地由現有脈絡推定, 直接採用; 當不同理解會實質改變所需狀態或接續方式時, 使用 `Align Intent`

## Initialize

此 Skill 可以在主題進行途中啟動。從既有脈絡投影出 `Continuable` 所定義的 Continuation State, 只保留目前仍會影響接續的內容

不要複製完整對話, activity history 或 discussion process。歷史內容只有在仍具有 current governing force, 或必須保留 supersession fact 才能避免恢復已失效方向時才納入

## Reconcile

當討論, 修正, 決定或方向改變使接續狀態發生變化時, reconcile canonical Continuation State:

- 納入新成立且仍影響接續的結果
- 更新 Continuation Direction 與 Current State
- 重新分類 Open Matters
- 更新 Valid Next Moves 與 Possible End States
- 移除或明確取代已失效內容

維護 `Continuable` 定義的 semantic coverage, 但不要求固定 heading 或 schema

## Preserve Authority

區分 Decisions, assumptions, Open Proposals, Open Matters 與 Agent inference。只有經 User 明確確認的內容才能記錄為 Decision; 不得將沉默, 繼續討論, 部分同意或 Agent 推導視為完整定案

不要為了形成完整敘述而自行解決未決事項。保留仍會影響接續的歧義, blocker 與 competing directions, 並準確表達其目前狀態

## Materialize

以 Intended Continuation 的接續者在邊界後可取得的 Context Artifacts 承載 canonical Continuation State

首次建立或寫入前, 依 repository rules 與 User 對齊內容種類, 範圍與 Artifact Carrier。取得共識後可在既定範圍內持續維護; 擴大內容種類或範圍, 或更換 Artifact Carrier 前, 應重新對齊。需要 local carrier 時, 使用 `Use a Local Artifact Carrier`

避免建立彼此競爭的 current-state copies。若存在多個 surfaces, 明確其 authority 與用途, 並維持一個可辨識的 canonical current state

## Retire

當主題進入 Possible End State 時, reconcile 最後的 Continuation State, 並依已定 Exit Conditions 完成, 終止, 封存, 取代或轉移到 successor topic。若 end state 或後續處理仍不明確, 使用 `Align Intent`

每次維護循環在 canonical Continuation State 已反映目前有效結論, 且 Intended Continuation 的接續者能從邊界後可取得的 Context Artifacts 不失真地繼續 Intended Work 時完成。持續維護在主題退休或 User 終止維護時結束
