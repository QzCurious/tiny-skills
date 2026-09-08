# Tiny Skills

Tiny Skills 是一組可組合的 Agent Skills, 用於發展個人 agent operating model

Skills 位於 `skills/<skill-name>/SKILL.md`

## Repository 結構

```text
.
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
- `CONTEXT.md`: 共享語言的 registry 與 canonical definition index
- `predicates/`: Predicate 的 canonical definitions
- `OPERATING-MODEL.md`: Agent 運作與 Skill 編寫原則
- `AGENTS.md`: 專案指引
- `drafts/`: 尚未納入正式共同語言, canonical definition 或 Skill 的非權威提案
