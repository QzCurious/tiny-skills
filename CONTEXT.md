# 個人 Agent 運作模型

一套用來描述可組合 Agent 行為及其結果的共同語言。

## 共同語言

**Skill**:
由 `name`、`description` 與選擇性的正文所構成，可組合的 Agent 行為定義。當 `description` 足以讓 Agent 可靠套用時，可以由 `description` 承載其完整的編寫意義；必要時，再由正文延伸該意義。編寫意義可以描述行動、協定、約束、轉換、判斷或終止狀態，並可從小處開始，透過使用逐步演進。

**Draft**:
尚未納入正式共同語言, canonical definition 或可用 Skill 的提案。Draft 僅供設計與評估, 不具正式 authority; 共同語言, canonical definitions, 運作模型與正式 Skills 不得依賴 Draft 的內容或存在。

**Skill Draft**:
一項尚未在 `description` 或正文中具備足夠編寫意義, 因而無法讓 Agent 可靠套用的 Skill 提案, 是 Draft 的一種。

**Precondition**:
一項相對於特定 action 的必要 condition; 在該 action 進入實質執行前, 此 condition 必須成立。Precondition 描述 action 所要求的 current state, 不規定如何建立該狀態。Property assertion, authoritative fact, Decision, permission, capability, resource, environmental state 或其他 material condition 都可以作為 Precondition。

**Postcondition**:
一項相對於特定 action 的結果 condition; 該 action 只有在此 condition 成立時, 才能被視為成功完成。Postcondition 描述成功完成所要求的 resulting state, 不規定如何建立或驗證該狀態。Property assertion 或其他 material condition 都可以作為 Postcondition。

**Intended Work**:
目前預期進行的下一個有界工作範圍, 例如探索, 決策, 設計, 實作, review 或交接。它不是下一個 atomic action; 當一個對象或主題需要支援後續工作時, Intended Work 界定此次工作中哪些意義, 資訊, 條件與選擇會實質影響能否可靠進行。

**Intended Continuation**:
一個主題預期跨越暫停或交接邊界後的有界接續情境, 包括預期跨越的 Continuation Boundary, 預期接續者, 邊界後仍可取得的脈絡與權限, 以及預期繼續的 Intended Work。

**Continuation State**:
一個主題目前有效, 且足以支援 Intended Continuation 的 canonical current-state semantic model。它不等同於承載它的整份 representation, 並只反映仍會影響接續的內容。

Continuation State 應提供以下 semantic coverage:

- `Continuation Direction`: 目前有效的接續方向及其範圍
- `Current State`: 目前成立並影響後續的結果, Decisions, constraints, assumptions 與必要的 supersession facts
- `Open Matters`: 仍會影響接續的 open questions, open proposals, blockers, deferred branches 與 decision points
- `Valid Next Moves`: 從 Current State 可採取的有效下一步及其必要條件
- `Possible End States`: 目前有效的完成, 終止, 封存, 取代或其他結束狀態, 以及必要的 Exit Conditions

這些是理解 Continuation State 的 semantic dimensions, 不是互斥欄位, 固定 heading 或必要 schema。Continuation State 也必須保留各項內容目前的 authority status, 包括哪些內容是 Decisions, assumptions, Open Proposals, Open Matters 或 Agent inference; Authority status 橫跨上述 semantic dimensions, 不是獨立欄位或固定 schema。

Continuation State 不保存對 Intended Continuation 已無 operative effect 的 origin, process history 或 discussion history。過去形成的內容只有在仍具有 current governing force, 或必須作為 supersession fact 防止恢復失效方向時才保留。

Issue, 文件, 對話脈絡或其他 representation 都可以承載 Continuation State, 也可以同時包含 supporting rationale, reference examples, provenance 或 history; 只要 Continuation State 可被明確辨識, 額外內容不形成 competing current state, 也不造成 material distortion。

**Property**:
對一個對象可被辨識的性質或條件，不規定建立、維護或改善該性質的特定方法。Skill 可以要求、建立、維護、改善或評估 Property。

已知的 Property:

- **Continuable**: 主題目前有效的接續狀態可在 Intended Continuation 中被不失真地還原並延續; canonical definition 見 `properties/continuable.md`
- **Clear Reading Path**: 結構化內容能讓預期讀者依理解所需逐步建立脈絡; canonical definition 見 `properties/clear-reading-path.md`
- **Well-Specified**: 對象的相關工作能可靠繼續, 而不需要猜測會實質改變結果的資訊; canonical definition 見 `properties/well-specified.md`
