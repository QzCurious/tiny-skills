# 專案指引

本專案以共享語言與可組合的 Skill，發展個人 agent operating model

共同語言以 `CONTEXT.md` 與其明示引用的 canonical definitions 為準; Agent 的運作與 Skill 編寫原則以 `OPERATING-MODEL.md` 為準

## 開發立場

本專案目前處於積極開發與規劃階段。進行溝通, 規劃, 決策, 設計, 實作與產出時，一律從期望的當前狀態出發; 凡偏離既有行為之處，皆視為 clean break。當 current Decision 取代既有 state 時, 直接以 target state 作為唯一 current, operative state; 在 relevant scope 內不保留其存在, 意義或行為只由 replaced state 支持的 current element。無須維持向下相容，也不要提出或設計 migration, compatibility shim, deprecation path，或針對既有行為的 fallback。必要的歷史, 稽核或 record-keeping 內容可以保留, 但不得繼續作為 current authority 或影響 current behavior

本專案的實際使用與開發應遵循 `OPERATING-MODEL.md`

## 語言與寫入授權

以台灣繁體中文為優先。必要時使用英文術語，以維持定義精準，或與不同技術社群對齊

撰寫時:

- 列舉項目以 `, ` 取代 `、`
- 分隔相關句意時以 `; ` 取代 `；`
- 引出後續內容時以 `: ` 取代 `：`
- 不過度使用標點符號; 當語意與結構已清楚時，不加入非必要的 `。`

當 User 的意圖或寫入授權不明確時，AI Agent 應先確認再進行寫入; 明確的修改指示可直接執行。不得將討論, 徵詢意見或方向校正自行視為寫入授權

## Repository workflow

目前 `tiny-skills` 以 Codex plugin root 作為 distribution boundary; `.codex-plugin/plugin.json` 的 `skills` 只指定 Skill discovery path, 不把 `skills/` 視為唯一的 plugin content。共同語言與 canonical definitions 維持在 plugin root 的單一 authority 位置; 不為 individual Skill packaging 複製 shared definitions

當正式內容需要明示同一 plugin 內的 canonical file 時, 使用 plugin-root-relative path, 例如 `CONTEXT.md`, `properties/well-specified.md`; 不使用以 Skill directory 為基準的 `../../...`

不為 shared semantics 建立 dependency manifest 或其他 dependency system; Agent 依共同語言, canonical references 與可取得脈絡辨識所需 definitions

處理 Draft 時:

- 尚未成為正式共同語言, canonical definition 或 Skill 的提案存放於 `drafts/`
- Draft 僅供設計與評估; 共同語言, canonical definitions, `OPERATING-MODEL.md` 與 `skills/` 不得依賴 Draft 的內容或存在

修改 Skill 前:

- 閱讀 `CONTEXT.md`，理解共享語言
- 閱讀與該 Skill 實質相關的 canonical Property definitions
- 閱讀 `OPERATING-MODEL.md`，理解編寫原則

修改 Property 前:

- 閱讀 `CONTEXT.md`，確認 Property 在共同語言中的定位
- 閱讀 `OPERATING-MODEL.md`，理解 Property 與 Skill 的分工
- 以 `properties/` 中對應檔案作為該 Property 的 canonical definition
