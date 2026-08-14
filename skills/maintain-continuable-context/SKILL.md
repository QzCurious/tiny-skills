---
name: maintain-continuable-context
description: 維護一個主題目前有效的 canonical current-state model, 使其對 Intended Continuation 保持 Continuable。當 User 要求建立或持續維護承載此狀態的 Context Artifacts 時使用。
---

# Maintain Continuable Context

當現有脈絡不足以可靠理解主題時, 先使用 `Ground in Context`

辨識需要被延續的主題與 Intended Continuation, 包括預期的 Continuation Boundary, 接續者, 邊界後可取得的脈絡與權限, 以及 Intended Work。若可低後果地由現有脈絡推定, 直接採用; 當不同理解會實質改變所需內容或接續方式時, 使用 `Align Intent`

辨識承載 canonical current-state model 所需的 Context Artifacts。建立或首次接手維護前, 確認 User 已對預定寫入的內容種類, 範圍與 Artifact Carrier 取得共識; 尚未取得共識時, 使用 `Align Intent`。完成對齊本身不構成寫入授權

取得共識後, 可在既定範圍內持續維護, 不必為每次更新重新確認。若要加入新的內容種類, 擴大範圍或更換 Artifact Carrier, 應先重新取得共識。不得將討論或方向校正自行視為寫入授權

此 Skill 可在主題進行途中啟動。首次建立時, 從既有脈絡提煉目前有效的接續狀態; 不以保存 origin 或 process history 為目的

維護使主題對 Intended Continuation 成立 Continuable 的最少內容:

- `Continuation Direction`: 目前有效的接續方向與範圍
- `Current State`: 目前成立並影響後續的結果, Decisions, constraints, assumptions 與必要的 supersession facts
- `Open Matters`: 仍會影響接續的 open questions, open proposals, blockers, deferred branches 與 decision points
- `Valid Next Moves`: 從 Current State 可採取的有效下一步及其必要條件
- `Possible End States`: 目前有效的完成, 終止, 封存, 取代或其他結束狀態, 以及必要的 Exit Conditions

這些是 semantic dimensions, 不要求 Context Artifact 採用固定 heading 或 schema

Open Proposal 是已被提出但尚未定案, 且仍可能影響後續方向的內容; 不得將其表達為 settled fact 或 Decision。只有經 User 明確確認的內容才能記錄為 Decision, 且不得將沉默, 繼續討論, 部分同意或 Agent 推導視為完整定案

當討論, 修正, 決定或方向改變使接續狀態發生變化時, 更新 canonical current-state model, 並移除或明確取代已失效內容。歷史內容只有在仍具有 current governing force, 或必須保留 supersession fact 才能避免錯誤接續時才保留

當主題可能進入 Possible End State, 或其 Exit Conditions 需要確認時, 使用 `Align Intent` 決定要完成, 終止, 封存, 取代或繼續

當 Intended Continuation 的接續者能從邊界後可取得的 Context Artifacts 還原 Continuation Direction, Current State, Open Matters, Valid Next Moves 與 Possible End States, 並在不發生 material distortion 的情況下繼續 Intended Work 時, 即完成維護
