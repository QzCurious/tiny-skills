# Continuable

## Meaning

`Continuable` 是一個主題相對於 Intended Continuation 的一種 Property: 在預期的暫停或交接邊界後, 接續者仍能從屆時可取得的脈絡還原主題的 `Continuation State`, 並在不發生實質扭曲的情況下繼續 Intended Work

`Continuation State` 是一個主題目前有效, 且足以支援 Intended Continuation 的 canonical current-state model。它只反映仍會影響接續的內容; 不反映已不再影響接續的 origin, process history 或 discussion history

## Applies To

適用於需要跨時間, 對話, Agent, ownership 或其他處理邊界延續的主題。主題可以是溝通主題, 任務, 調查, 文件, 設計工作或其他持續中的關注事項

## Evaluation Context

`Intended Continuation` 是主題預期跨越暫停或交接邊界後的有界接續情境, 包括:

- 預期跨越的 Continuation Boundary
- 預期的接續者
- 邊界後仍可取得的脈絡與權限
- 預期繼續的 Intended Work

Continuable 必須相對於明確或可合理推定的 Intended Continuation 判斷。同一個主題可以對同一 Agent 的新 Thread 成立, 但不足以支援另一個 Agent, 團隊或無法取得相同脈絡與權限的環境

## Continuation State

Continuation State 應提供以下 semantic coverage:

- `Continuation Direction`: 目前有效的接續方向及其範圍
- `Current State`: 目前成立並影響後續的結果, Decisions, constraints, assumptions 與必要的 supersession facts
- `Open Matters`: 仍會影響接續的 open questions, open proposals, blockers, deferred branches 與 decision points
- `Valid Next Moves`: 從 Current State 可採取的有效下一步及其必要條件
- `Possible End States`: 目前有效的完成, 終止, 封存, 取代或其他結束狀態, 以及必要的 Exit Conditions

這些是理解 Continuation State 的 semantic dimensions, 不是互斥欄位, 固定 heading 或必要 schema

## Satisfaction

對 Intended Continuation 而言, 邊界後仍可取得的脈絡應足以使接續者可靠還原 Continuation State, 判斷其目前仍然有效, 並在不改變主題實質意義與接續方向的情況下繼續 Intended Work

當還原後的理解會誤認目前有效的方向或內容, 遺漏會影響接續的 Open Matters, 恢復已失效方向, 或使接續者採取不再有效的下一步時, 即構成 material distortion

## Boundaries

`Continuable` 不要求保存 original intent, 完整對話, activity history, decision history 或 discussion process

歷史內容只有在仍具有 current governing force, 或必須保留 supersession fact 才能避免錯誤接續時, 才屬於 Continuation State

`Continuable` 不要求主題已 resolved, 對最終目標 Well-Specified, self-contained 或只有一個 Valid Next Move

未知事項, 多個候選方向或 blocker 本身不違反此 Property; 只要其目前狀態, 影響與有效接續方式可以可靠還原

依賴接續者無法取得的 private memory, temporary context, history 或權限, 不能使主題對該 Intended Continuation 成立 Continuable

`Continuable` 不規定特定 schema, persistence mechanism, Context Artifact 或 Artifact Carrier。對一項 Intended Continuation 成立, 不表示對所有接續情境皆成立
