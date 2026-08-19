# 個人 Agent 運作模型

一套用來描述可組合 Agent 行為及其結果的共同語言。

## 共同語言

**Skill**:
由 `name`、`description` 與選擇性的正文所構成，可組合的 Agent 行為定義。當 `description` 足以讓 Agent 可靠套用時，可以由 `description` 承載其完整的編寫意義；必要時，再由正文延伸該意義。編寫意義可以描述行動、協定、約束、轉換、判斷或終止狀態，並可從小處開始，透過使用逐步演進。

**Draft**:
尚未納入正式共同語言, canonical definition 或可用 Skill 的提案。Draft 僅供設計與評估, 不具正式 authority; 共同語言, canonical definitions, 運作模型與正式 Skills 不得依賴 Draft 的內容或存在。

**Skill Draft**:
一項尚未在 `description` 或正文中具備足夠編寫意義, 因而無法讓 Agent 可靠套用的 Skill 提案, 是 Draft 的一種。

**Predicate**:
一個 first-class shared semantic abstraction, 用來表達 reusable named semantic condition。Predicate 的 authored meaning 指定它適用的 subject 與 material evaluation context, 並描述在具體 evaluation 中該 condition 何時成立或不成立。

Evaluation context 可以包含 evaluation inputs, basis 與 relevant current state。這些是 semantic dependencies, 不要求以 implementation-level function signature, fixed schema 或 method interface 表達。

Predicate 定義 what condition is true; 不規定該 condition 何時必須成立, 也不規定如何建立, 維護或改善。Precondition, Postcondition, Invariant 可以使用 named Predicate, 也可以直接使用 ordinary material condition。

當同一 semantic condition 需要在多個獨立 Skill, Governed Action, contract 或其他 authored meaning 中重複辨識, 或其名稱本身對共同語言具有持續價值時, 優先考慮將它提煉為 Predicate。只在局部脈絡中有意義的 condition 保持 ordinary material condition。

已知的 Predicate:

- **Clear Reading Path**: 結構化內容能讓預期讀者依理解所需逐步建立脈絡; canonical definition 見 `predicates/clear-reading-path.md`
- **Well-Specified**: 對象的相關工作能可靠繼續, 而不需要猜測會實質改變結果的資訊; canonical definition 見 `predicates/well-specified.md`

**Governed Action**:
一項其實質執行受到目前有效 authored meaning 規範的 action。相對於該 Governed Action 的 Precondition 描述進入實質執行前必須成立的 current state; Postcondition 描述該 action 可被視為成功完成時必須成立的 resulting state。

一個 Skill 可以包含一項或多項 Governed Actions。Tool call, implementation step 或其他操作不因被執行就自動成為 Governed Action; 只有當 authored meaning 對該 action 的進入, 執行或完成具有 material governing effect 時才屬之。

**Precondition**:
一項相對於特定 Governed Action 的必要 condition; 在該 Governed Action 進入實質執行前, 此 condition 必須成立。Precondition 描述該 action 所要求的 current state, 不規定如何建立該狀態。Named Predicate 所描述的 condition, authoritative fact, Decision, permission, capability, resource, environmental state 或其他 material condition 都可以作為 Precondition。

**Postcondition**:
一項相對於特定 Governed Action 的結果 condition; 該 Governed Action 只有在此 condition 成立時, 才能被視為成功完成。Postcondition 描述成功完成所要求的 resulting state, 不規定如何建立或驗證該狀態。Named Predicate 所描述的 condition 或其他 material condition 都可以作為 Postcondition。

**Invariant**:
一項相對於明確 governed lifecycle 或 subject 的必要 condition; authored meaning 指定為 applicable 的所有 states 都必須滿足該 condition。Invariant 可以使用 named Predicate 或 ordinary material condition, 不限定於單一 Governed Action, 也不採「可以暫時違反再修回」的 authored meaning。

**Intended Work**:
目前預期進行的下一個有界工作範圍, 例如探索, 決策, 設計, 實作, review 或交接。它不是下一個 atomic action; 當一個對象或主題需要支援後續工作時, Intended Work 界定此次工作中哪些意義, 資訊, 條件與選擇會實質影響能否可靠進行。

**Continuation Basis**:
為可靠繼續某項 Intended Work 需要取得, 依據或具備的 declarative basis。它描述 reliable continuation 所依賴的 material context, 不規定 Agent 如何取得該 context, 也不要求固定 schema 或單一 representation。

Intended Work 是 Continuation Basis 的 constituent semantic。Repository, issue, document, conversation context, source identity, revision, authority, capability, permission 或其他 context 只有在 materially 影響 reliable continuation 時才需要成為 Basis 的一部分。Source identity, version, revision 或 reference point 若本身具有 material reference semantics, 可以直接成為 Basis; Agent resolve mutable source 時得到的普通當下 observation 預設只是 ephemeral execution context。

**Continuation State**:
一個 topic 為支援 applicable Continuation Basis 與 Intended Work 所需的 canonical current-state semantic model。它不等同於承載它的整份 representation, 並只反映仍具有 continuation effect 的內容。

Continuation State 具有三個 primitive semantic dimensions:

- `Motivation`: 目前處理 topic 的 governing reason 與 intended outcome。Topic identity 本身不屬於 Motivation
- `Established State`: 目前已形成, 仍 materially relevant, 且接續工作應據此理解或行動的內容。Decision, authoritative fact, assumption, Agent inference, validation result, constraint, scope, non-goal, supersession fact 或其他 current semantics 依其實際 status 存在; Established State 不表示其中每項內容都已證明為 true 或具有相同 authority
- `Unresolved`: 目前仍 materially relevant, 且其 resolution 本身仍需要被處理的 matters, 例如 open question, decision point, pending validation, blocker, deferred matter 或尚未完成的 material work。已建立的 scope 或 non-goal 屬於 Established State; 尚未決定而其 resolution 仍會影響接續時屬於 Unresolved

這些是理解 Continuation State 的 semantic dimensions, 不是互斥欄位, 固定 heading 或必要 schema。

Continuation State 也必須在會影響接續時保留各項內容目前的 status, applicable authority 與 material provenance。這些資訊橫跨上述 semantic dimensions, 不是額外 primitive dimension, classification 或固定欄位。

一項內容只有在由 applicable Decision Authority 建立時才能作為 Decision。對 user-directed topic, 若沒有其他 Decision Authority 已成立, User 預設具有會改變 intent, scope, priority, acceptance criteria 或其他 material governing framing 的 Decision Authority; 此預設不使 User 成為 independently authoritative facts 的 authority。

Completion, termination, supersession, archive, transfer 或其他 topic lifecycle semantics 不形成固定 Continuation State dimension。當它們 materially 影響接續時, 依其 semantic role 投影到 Motivation, Established State 或 Unresolved。

Continuation State 不保存已無 continuation effect 的 origin, process history, activity history 或 discussion history。過去形成的內容只有在仍具有 current governing force, 或必須作為 supersession fact 防止恢復失效方向時才保留。

Issue, 文件, 對話脈絡或其他 representation 都可以承載 Continuation State, 也可以由多個可取得來源共同承載。額外 supporting rationale, reference examples, provenance 或 history 可以存在; 只要 current Continuation State 能從 applicable Continuation Basis 被可靠還原, 額外內容不形成 competing current state 或 material distortion。

`Continuable` 是正式 Skill, 其 authored behavior 見 `skills/continuable/SKILL.md`。目前不另建立同名或替代名稱的 continuability Predicate。若實際使用顯示該 semantic condition 在多個獨立 Governed Actions 或 Skills 中形成 reusable need, 再另行評估是否提煉為 Predicate。
