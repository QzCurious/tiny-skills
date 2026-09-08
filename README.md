# Tiny Skills

Tiny Skills 是一組可組合的 Agent Skills, 用於發展個人 agent operating model

Skills 位於 `skills/<skill-name>/SKILL.md`

## Codex 插件

此 repository 同時是 `tiny-skills` 插件與 `tiny-skills-marketplace` marketplace, 直接提供 `skills/` 下的正式 Skills

### 安裝

```sh
codex plugin marketplace add QzCurious/tiny-skills
codex plugin add tiny-skills@tiny-skills-marketplace
```

安裝後開啟新的 Codex task, 依 Skill 名稱要求使用, 例如「使用 coarse-to-well-specified 細化這項工作的預期結果與邊界」

插件以 repository 根目錄為來源, 一併保留 `CONTEXT.md`, `OPERATING-MODEL.md` 與 `predicates/` 的參考內容。這些文件不會因插件安裝而自動成為其他專案的全域指引; 需要套用共同語言時, 請明示 Agent 讀取插件根目錄的 `CONTEXT.md` 與相關 canonical definitions。`drafts/` 不在 Skills 載入路徑中

### 更新

Codex 安裝的是快取副本。先更新 marketplace 取得 GitHub 上已推送的版本, 再重新安裝插件:

```sh
codex plugin marketplace upgrade tiny-skills-marketplace
codex plugin add tiny-skills@tiny-skills-marketplace
```

更新後開啟新的 Codex task 使用

發布新版本時更新 `.codex-plugin/plugin.json` 的 `version`

封裝格式參考 [Codex 插件文件](https://developers.openai.com/codex/plugins/build)

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

- `skills/`: 可組合的 Agent 行為定義
- `.codex-plugin/plugin.json`: Codex 插件 metadata 與 Skills 載入路徑
- `.agents/plugins/marketplace.json`: 此 repository 提供的插件目錄
- `CONTEXT.md`: 共享語言, general shared term canonical definitions 與 Predicate registry
- `predicates/`: Predicate 的 canonical definitions
- `OPERATING-MODEL.md`: Agent 運作與 Skill 編寫原則
- `AGENTS.md`: 專案指引
- `drafts/`: 尚未納入正式共同語言, canonical definition 或 Skill 的非權威提案
