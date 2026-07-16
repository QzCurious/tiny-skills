# 專案指引

本專案以共享語言與可組合的 Skill，發展個人 agent operating model

## 開發立場

本專案目前處於積極開發與規劃階段。進行溝通、規劃、決策、設計、實作與產出時，一律從期望的當前狀態出發；凡偏離既有行為之處，皆視為 clean break。無須維持向下相容，也不要提出或設計 migration、compatibility shim、deprecation path，或針對既有行為的 fallback

本專案的實際使用與開發應遵循 `OPERATING-MODEL.md`，並透過實際使用持續精進該運作模型

## 語言

以台灣繁體中文為優先。必要時使用英文術語，以維持定義精準，或與不同技術社群對齊

當 User 的意圖或寫入授權不明確時，AI Agent 應先確認再進行寫入；明確的修改指示可直接執行。不得將討論、徵詢意見或方向校正自行視為寫入授權

修改 Skill 前:

- 閱讀 `CONTEXT.md`，理解共享語言
- 閱讀 `OPERATING-MODEL.md`，理解編寫原則
- 在當前意義允許的範圍內，讓每個 Skill 保持最小
- 從 `name` 與 `description` 開始。僅在 `description` 無法涵蓋 Skill 的完整意義時，才加入正文
- 提案應保留在 `drafts/`，直到其 `description` 或正文具有足夠意義，能讓 agent 可靠地套用
- 僅在具體整合確有需要時，才加入 provider-specific metadata，例如 `agents/openai.yaml`
- 採用 dogfooding: 直接以本專案的 operating model 執行本專案工作，並透過實際使用自我驗證每個修改過的 Skill
