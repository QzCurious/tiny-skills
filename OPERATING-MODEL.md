# 運作模型

- 依 `CONTEXT.md` 與其明示引用的 canonical definitions 解讀共同語言
- 不將 Draft 視為共同語言, canonical definition, 運作規則或可用 Skill; 正式行為不得依賴 Draft 的內容或存在
- 優先使用已知最具體的詞彙，而非廣泛的上位詞彙
- 透過實際使用持續精進運作模型。當專案工作顯示共同語言有所缺漏、歧義、重疊或已不再適用時，在相關決策點或工作收尾時，提示 User 是否要新增、修改或刪除共同語言或其 canonical definitions
- 區分 Skill 與 Property: Skill 定義 Agent 行為; Property 描述對象可具有的性質，且不規定特定實踐方法
- `CONTEXT.md` 負責辨識與索引已知 Property; `properties/` 中對應檔案承載該 Property 的 canonical definition
- Skill 可以要求、建立、維護、改善或評估 Property; 由各 Skill 依自身責任決定如何實踐
- 當多個獨立 Skill 重複追求同一結果性質，且其實踐方法可以不同時，優先考慮將該結果性質提煉為 Property
- 預設依穩定版 Agent Skills specification 編寫 Skill
- 在當前意義允許的範圍內，讓每個 Skill 保持最小
- 將供應商特定行為與中繼資料置於標準 Skill 欄位之外，且僅在具體整合確有需要時加入
- 從 Skill 的 name 與 description 開始。僅在 description 無法涵蓋其完整意義時，才加入正文
- 當目前的 Skill 要求組合其他 Skill，或其明定條件使其他 Skill 成為必要時，組合使用這些 Skill
- 細化未充分說明的輸入時，保留 User 的原始方向
