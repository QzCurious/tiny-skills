# 專案指引

本專案以共享語言與可組合的 Skill，發展個人 agent operating model

共同語言以 `CONTEXT.md` 為準；Agent 的運作與 Skill 編寫原則以 `OPERATING-MODEL.md` 為準

## 開發立場

本專案目前處於積極開發與規劃階段。進行溝通、規劃、決策、設計、實作與產出時，一律從期望的當前狀態出發；凡偏離既有行為之處，皆視為 clean break。無須維持向下相容，也不要提出或設計 migration、compatibility shim、deprecation path，或針對既有行為的 fallback

本專案的實際使用與開發應遵循 `OPERATING-MODEL.md`

## 語言與寫入授權

以台灣繁體中文為優先。必要時使用英文術語，以維持定義精準，或與不同技術社群對齊

當 User 的意圖或寫入授權不明確時，AI Agent 應先確認再進行寫入；明確的修改指示可直接執行。不得將討論、徵詢意見或方向校正自行視為寫入授權

## Repository workflow

修改 Skill 前：

- 閱讀 `CONTEXT.md`，理解共享語言
- 閱讀 `OPERATING-MODEL.md`，理解編寫原則
- 尚屬 Skill Draft 的提案存放於 `drafts/`；是否構成 Skill Draft，依 `CONTEXT.md` 的定義判斷
