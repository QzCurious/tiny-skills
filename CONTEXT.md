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

**Property**:
對一個對象可被辨識的性質或條件，不規定建立、維護或改善該性質的特定方法。Skill 可以要求、建立、維護、改善或評估 Property。

已知的 Property:

- **Continuable**: 主題目前有效的接續狀態可在 Intended Continuation 中被不失真地還原並延續; canonical definition 見 `properties/continuable.md`
- **Clear Reading Path**: 結構化內容能讓預期讀者依理解所需逐步建立脈絡; canonical definition 見 `properties/clear-reading-path.md`
- **Well-Specified**: 對象的相關工作能可靠繼續, 而不需要猜測會實質改變結果的資訊; canonical definition 見 `properties/well-specified.md`
