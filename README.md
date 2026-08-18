# Tiny Skills

Tiny Skills 是一組可組合的 Agent Skills, 用於發展個人 agent operating model

本 repository 同時是 Codex plugin marketplace 與 `tiny-skills` plugin 的來源。安裝 `tiny-skills` plugin 時, plugin root 是 distribution boundary; `.codex-plugin/plugin.json` 的 `skills` 指定 `skills/` 作為 Skill discovery path, `CONTEXT.md`, `properties/` 與其他 plugin-level files 仍屬同一 plugin

## 安裝至 Codex

先註冊 GitHub repository 作為 marketplace:

```bash
codex plugin marketplace add QzCurious/tiny-skills --ref main
```

再安裝 Tiny Skills plugin:

```bash
codex plugin add tiny-skills@tiny-skills-marketplace
```

完成後重新啟動 Codex 或刷新 plugin data

## 更新

此 marketplace 固定追蹤最新的 `main`。需要取得更新時執行:

```bash
codex plugin marketplace upgrade tiny-skills-marketplace
```

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
├── properties/
│   └── <property-name>.md
├── skills/
│   └── <skill-name>/SKILL.md
├── AGENTS.md
├── CONTEXT.md
└── OPERATING-MODEL.md
```

- `AGENTS.md`: repository 使用與開發指引
- `CONTEXT.md`: 共享語言, general shared term canonical definitions 與 Property registry
- `drafts/`: 尚未納入正式共同語言, canonical definition 或 Skill 的非權威提案
- `OPERATING-MODEL.md`: Agent 運作與 Skill 編寫原則
- `properties/`: Property canonical definitions
- `skills/`: Codex discovery 與使用的正式 Skills

## 本地驗證

```bash
nub run validate
nub run typecheck
```
