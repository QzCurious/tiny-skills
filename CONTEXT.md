# 個人 Agent 運作模型

一套用來描述可組合 Agent 行為及其結果的共同語言。

## 共同語言

**Skill**：
由 `name`、`description` 與選擇性的正文所構成，可組合的 Agent 行為定義。當 `description` 足以讓 Agent 可靠套用時，可以由 `description` 承載其完整的編寫意義；必要時，再由正文延伸該意義。編寫意義可以描述行動、協定、約束、轉換、判斷或終止狀態，並可從小處開始，透過使用逐步演進。

**Skill Draft**：
一項尚未在 `description` 或正文中具備足夠編寫意義，因而無法讓 Agent 可靠套用的 Skill 提案。

**Context Artifact**：
一種可被重新檢視或接續，且不預設儲存機制的持久脈絡表述。當已知更具體的子類型時，優先使用該子類型。

Context Artifact 表述的是某個主題的脈絡，而非附屬於某段對話。多段對話可以建立、查閱或維護同一個 Context Artifact，而一段對話也可以涉及多個 Context Artifact。

已知的候選子類型：

- Knowledge Artifact
- Decision Artifact
- State Artifact
- Handoff Artifact
- Specification Artifact
- Evidence Artifact

僅在 User 已對將寫入的內容取得共識後，才可寫入 Context Artifact。User 必須知悉將寫入內容的種類與範圍，但無須事先列舉產出的每項細節或確切措辭。

**Artifact Carrier**：
用來持久保存及存取 Context Artifact 的儲存、發布或協作機制。Artifact Carrier 可以分別提供目前狀態與歷史紀錄的介面，但不決定 Context Artifact 的意義。

**Continuable**：
主題的一種性質：其原始意圖、有效的接續方式及可能的終止狀態，皆可在不發生實質扭曲的情況下還原。主題可以是文件、溝通主題、任務或其他持續中的關注事項。
