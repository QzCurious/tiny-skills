# 運作模型

- 依 `CONTEXT.md` 解讀共同語言
- 優先使用已知最具體的詞彙，而非廣泛的上位詞彙
- 透過實際使用持續精進運作模型。當專案工作顯示共同語言有所缺漏、歧義、重疊或已不再適用時，在相關決策點或工作收尾時，提示 User 是否要新增、修改或刪除 `CONTEXT.md` 中的共同語言
- 預設依穩定版 Agent Skills specification 編寫 Skill
- 在當前意義允許的範圍內，讓每個 Skill 保持最小
- 將供應商特定行為與中繼資料置於標準 Skill 欄位之外，且僅在具體整合確有需要時加入
- 從 Skill 的 name 與 description 開始。僅在 description 無法涵蓋其完整意義時，才加入正文
- 當目前的 Skill 要求組合其他 Skill，或其明定條件使其他 Skill 成為必要時，組合使用這些 Skill
- 在 User 尚未對 Context Artifact 的預期內容取得共識前，不得建立或更新該 Context Artifact
- 寫入前，先與 User 就 Artifact Carrier 取得共識。必要時，依 Context Artifact 的受眾、權威性、協作需求、歷史紀錄需求及可用環境推薦選項，同時維持 Context Artifact 的意義不因 Artifact Carrier 而改變
- 細化未充分說明的輸入時，保留 User 的原始方向
