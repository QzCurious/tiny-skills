# Tiny Skills

Tiny Skills 是一組可組合的 Agent Skills, 用於發展個人 agent operating model

本 repository 同時是 Codex plugin marketplace 與 `tiny-skills` plugin 的來源。安裝 `tiny-skills` plugin 時, plugin root 是 distribution boundary; `.codex-plugin/plugin.json` 的 `skills` 指定 `skills/` 作為 Skill discovery path, `CONTEXT.md`, `predicates/` 與其他 plugin-level files 仍屬同一 plugin

## 安裝至 Codex

先註冊 GitHub repository 作為 marketplace:

```bash
codex plugin marketplace add QzCurious/tiny-skills --ref release
```

再安裝 Tiny Skills plugin:

```bash
codex plugin add tiny-skills@tiny-skills-marketplace
```

完成後重新啟動 Codex 或刷新 plugin data

## 更新

此 marketplace 固定追蹤最新的 `release`。需要取得更新時執行:

```bash
codex plugin marketplace upgrade tiny-skills-marketplace
```

## 發布

在 `main` 完成修改並 commit 後執行:

```bash
nub run release
```

Script 會驗證 Skills, TypeScript 與 plugin 配置, 自動將 plugin 版本增加一個 patch, 建立版本 commit 與 `v<version>` tag, 再以 atomic push 一起更新 `origin/main`, `origin/release` 與 tag。第一次成功發布會建立 `release` 分支; 此後可依上方指令安裝與更新

發布前必須保持工作目錄乾淨, 包含未追蹤檔案, 且本機 `main` 必須包含遠端 `main`。需要已安裝專案依賴的 `nub` 環境, 以及對 `origin` 的 push 權限; 遠端分支規則必須允許這些更新

可先驗證並預覽, 不修改檔案或遠端 refs:

```bash
nub run release --dry-run
```

推送失敗時會保留本機版本 commit 與 tag; 排除原因後執行相同指令即可重試。相同版本已發布時直接結束, 不重複升版。`release` 與版本 tag 由 script 管理, 不手動修改

此流程由本機指令觸發, 不會在每次 commit 時自動執行, 也不需要 GitHub Actions 或 GitHub Release 頁面

## 移除

移除 plugin:

```bash
codex plugin remove tiny-skills@tiny-skills-marketplace
```

若不再需要此 marketplace, 可一併移除:

```bash
codex plugin marketplace remove tiny-skills-marketplace
```

## Repository 結構

```text
.
├── .agents/plugins/marketplace.json
├── .codex-plugin/plugin.json
├── drafts/
│   └── <proposal>.md
├── predicates/
│   └── <predicate-name>.md
├── skills/
│   └── <skill-name>/SKILL.md
├── AGENTS.md
├── CONTEXT.md
└── OPERATING-MODEL.md
```

- `AGENTS.md`: repository 使用與開發指引
- `CONTEXT.md`: 共享語言, general shared term canonical definitions 與 Predicate registry
- `drafts/`: 尚未納入正式共同語言, canonical definition 或 Skill 的非權威提案
- `OPERATING-MODEL.md`: Agent 運作與 Skill 編寫原則
- `predicates/`: Predicate canonical definitions
- `skills/`: Codex discovery 與使用的正式 Skills

## 本地驗證

```bash
nub run validate
nub run typecheck
```
