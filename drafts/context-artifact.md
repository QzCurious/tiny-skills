# Context Artifact

> Draft: 本文件整合 Context Artifact 相關候選概念與行為。它不構成正式共同語言, canonical definition, 運作規則或可用 Skill; 正式內容不得依賴本文件的內容或存在

## Context Artifact

`Context Artifact` 是一種可被重新檢視或接續, 且不預設儲存機制的持久脈絡表述。當已知更具體的子類型時, 優先使用該子類型

Context Artifact 表述的是某個主題的脈絡, 而非附屬於某段對話。多段對話可以建立, 查閱或維護同一個 Context Artifact; 一段對話也可以涉及多個 Context Artifacts

候選子類型:

- Knowledge Artifact
- Decision Artifact
- State Artifact
- Handoff Artifact
- Specification Artifact
- Evidence Artifact

## Write Authorization

僅在 User 已對將寫入的內容取得共識後, 才可建立或更新 Context Artifact。User 必須知悉內容種類與範圍, 但無須事先列舉產出的每項細節或確切措辭

取得共識後可在既定內容種類與範圍內持續維護; 擴大種類或範圍前, 應重新對齊

## Artifact Carrier

`Artifact Carrier` 是用來持久保存及存取 Context Artifact 的儲存, 發布或協作機制。Artifact Carrier 可以分別提供目前狀態與歷史紀錄的介面, 但不決定 Context Artifact 的意義

寫入前, 先與 User 對齊 Artifact Carrier。依 Context Artifact 的受眾, authority, 協作需求, 歷史紀錄需求與可用環境推薦選項, 同時維持 Context Artifact 的意義不因 Artifact Carrier 而改變

## Local Artifact Carrier

選擇位置或解讀既有檔案前, 先使用 `Ground in Context` 探索既有專案慣例與相關 local artifacts

優先使用既有專案位置。若沒有適合的位置, 可建議以下相對於主題 workspace 的路徑:

- `.context-artifacts/<subject>.md`: 一個 surface 足以承載目前狀態與必要歷史時使用
- `.context-artifacts/<subject>/current.md` 與 `history.md`: 目前狀態與歷史紀錄需要分開時使用

透過位置, 權限, synchronization, file surfaces 與 version-control treatment 實現 Context Artifact 的 visibility, authority, current-state 與 history requirements

使用可辨識主題的名稱與 natural-language content, 不要求固定 schema 或 metadata。Context Artifact 的意義不得由 local layout 推導

建立或更新 local files 前, 使用 `Align Intent` 使 User 知悉內容種類, 範圍與寫入位置

還原 local context 時, 先檢查建議與既有位置, 再依主題名稱與敘述內容搜尋可能的 workspace files。當相關 Context Artifacts 與其 surfaces 可被辨識並讀取時, 即完成 recovery
