# 個人 Agent 運作模型

一套用來描述可組合 Agent 行為及其結果的共同語言。

## 共同語言

**Skill**:
由 `name`、`description` 與選擇性的正文所構成，可組合的 Agent 行為定義。當 `description` 足以讓 Agent 可靠套用時，可以由 `description` 承載其完整的編寫意義；必要時，再由正文延伸該意義。編寫意義可以描述行動、協定、約束、轉換、判斷或終止狀態，並可從小處開始，透過使用逐步演進。

**Draft**:
尚未納入正式共同語言, canonical definition 或可用 Skill 的提案。Draft 僅供設計與評估, 不具正式 authority; 共同語言, canonical definitions, 運作模型與正式 Skills 不得依賴 Draft 的內容或存在。

**Skill Draft**:
一項尚未在 `description` 或正文中具備足夠編寫意義, 因而無法讓 Agent 可靠套用的 Skill 提案, 是 Draft 的一種。

**Governed Action**:
一項其實質執行受到目前有效 authored meaning 規範的 action。相對於該 Governed Action 的 Precondition 描述進入實質執行前必須成立的 current state; Postcondition 描述該 action 可被視為成功完成時必須成立的 resulting state。

一個 Skill 可以包含一項或多項 Governed Actions。Tool call, implementation step 或其他操作不因被執行就自動成為 Governed Action; 只有當 authored meaning 對該 action 的進入, 執行或完成具有 material governing effect 時才屬之。

**Precondition**:
一項相對於特定 Governed Action 的必要 condition; 在該 Governed Action 進入實質執行前, 此 condition 必須成立。Precondition 描述該 action 所要求的 current state, 不規定如何建立該狀態。Property assertion, authoritative fact, Decision, permission, capability, resource, environmental state 或其他 material condition 都可以作為 Precondition。

**Postcondition**:
一項相對於特定 Governed Action 的結果 condition; 該 Governed Action 只有在此 condition 成立時, 才能被視為成功完成。Postcondition 描述成功完成所要求的 resulting state, 不規定如何建立或驗證該狀態。Property assertion 或其他 material condition 都可以作為 Postcondition。

**Intended Work**:
目前預期進行的下一個有界工作範圍, 例如探索, 決策, 設計, 實作, review 或交接。它不是下一個 atomic action; 當一個對象或主題需要支援後續工作時, Intended Work 界定此次工作中哪些意義, 資訊, 條件與選擇會實質影響能否可靠進行。

**Continuation Scenario**:
一個主題跨越暫停或交接邊界後的有界接續情境, 作為判斷 `Continuable` 的 evaluation context。它包括預期跨越的 Continuation Boundary, 預期接續者, 邊界後仍可取得的脈絡與 capabilities 或 permissions, 以及預期繼續的 Intended Work。

Continuation Scenario 只需要明確到足以判斷此次接續需要哪些 state 與 materialization 條件。若其中某項條件可由邊界後穩定可取得的脈絡可靠推定, 不要求另外重述。

**Continuation State**:
一個主題目前有效, 且足以支援 Continuation Scenario 的 canonical current-state semantic model。它不等同於承載它的整份 representation, 並只反映仍會影響接續的內容。

Continuation State 應提供以下 semantic coverage:

- `Orientation`: 目前仍有效、足以讓接續者理解這是什麼主題, 為什麼正在處理, 希望達成什麼的 governing framing; 包括 subject, current motivation 或 starting point, intended outcome, 以及有 material relevance 時的 scope 或 non-goals。Orientation 不保存已無 current governing force 的 historical origin
- `Current State`: 目前成立並影響後續的結果, authoritative facts, Decisions, constraints, assumptions 與必要的 supersession facts
- `Open Matters`: 仍會影響接續的 open questions, open proposals, blockers, deferred branches 與 decision points
- `Valid Next Moves`: 從 Current State 可採取的有效下一步及其必要條件
- `Possible End States`: 目前有效的完成, 終止, 封存, 取代或其他結束狀態, 以及必要的 Exit Conditions

這些是理解 Continuation State 的 semantic dimensions, 不是互斥欄位, 固定 heading 或必要 schema。

Continuation State 也必須在會影響接續時保留各項內容目前的 status, applicable authority 與 material provenance。Status 包括 Decision, assumption, Open Proposal, Open Matter, Agent inference 或其他 relevant state; applicable authority 表示能使該內容成立, 改變或失效的 actor, source, process 或 governing representation; material provenance 表示判斷, 還原或 reconcile 該內容所需的來源或 derivation。這些資訊橫跨上述 semantic dimensions, 不是額外 classification, 獨立欄位或固定 schema。

一項內容只有在由 applicable Decision Authority 建立時才能作為 Decision。對 user-directed topic, 若沒有其他 Decision Authority 已成立, User 預設具有會改變 intent, scope, priority, acceptance criteria 或其他由 Orientation 反映的 material governing framing 的 Decision Authority; 此預設不使 User 成為 independently authoritative facts 的 authority。

Continuation State 不保存對 Continuation Scenario 已無 operative effect 的 origin, process history 或 discussion history。過去形成的內容只有在仍具有 current governing force, 或必須作為 supersession fact 防止恢復失效方向時才保留。

Issue, 文件, 對話脈絡或其他 representation 都可以承載 Continuation State, 也可以同時包含 supporting rationale, reference examples, provenance 或 history; 只要 Continuation State 可被明確辨識, 額外內容不形成 competing current state, 也不造成 material distortion。

**Property**:
對一個對象可被辨識的性質或條件，不規定建立、維護或改善該性質的特定方法。Skill 可以要求、建立、維護、改善或評估 Property。

已知的 Property:

- **Continuable**: 主題目前有效的 Continuation State 可在 Continuation Scenario 中被不失真地還原並延續; canonical definition 見 `properties/continuable.md`
- **Clear Reading Path**: 結構化內容能讓預期讀者依理解所需逐步建立脈絡; canonical definition 見 `properties/clear-reading-path.md`
- **Well-Specified**: 對象的相關工作能可靠繼續, 而不需要猜測會實質改變結果的資訊; canonical definition 見 `properties/well-specified.md`
