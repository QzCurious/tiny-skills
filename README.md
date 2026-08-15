# Tiny Skills

Tiny Skills 是一組可組合的 Agent Skills, 用於發展個人 agent operating model

本 repository 同時是 Codex plugin marketplace 與 `tiny-skills` plugin 的來源。安裝後, Codex 會取得 `skills/` 中的完整 skill set

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
├── skills/
│   └── <skill-name>/SKILL.md
├── CONTEXT.md
└── OPERATING-MODEL.md
```

- `CONTEXT.md`: 共享語言與 canonical definitions
- `OPERATING-MODEL.md`: Agent 運作與 Skill 編寫原則
- `skills/`: 可由 Codex 安裝與使用的 skills

## 本地驗證

```bash
nub run validate
nub run typecheck
```
