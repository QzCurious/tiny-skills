---
name: design-external-system-boundaries
description: 當建立, 修改或檢視 application 對 third-party HTTP API, operating-system facility, command-line tool 或其他 external system 的 API client, platform client, provider client, SDK integration, wrapper 或 integration facade 時使用
---

# Design External-System Boundaries

`External-System Boundary` 是 application-owned boundary, 以 external system 的 semantics expose application 目前需要的 capabilities, 並 contain 與該 system 互動所需的 technical mechanics

Boundary 可以由既有 SDK 或 external-system client 直接構成, 也可以在其上加入 optional `Integration Facade`。Client 或 SDK 忠於 external system 的 operations, values, outcomes 與 failures; Integration Facade 只在 current use 需要時限縮或組合 external operations。這些是 semantic roles, 不要求拆成不同 package, type 或 interface; 一個 logical operation 也不要求只對應一次 HTTP request, command execution 或 SDK call

User 的 request 決定此次工作是建立, 修改或檢視 boundary; 本 Skill 規範 resulting architecture 與 responsibility boundary, 不規定固定的 discovery, implementation 或 review workflow

依 Intended Work 目前可取得的 applicable evidence 理解 external-system semantics。既有 implementation, tests 與 caller reliance 是不得忽略的 current evidence; 缺少 external documentation 不構成移除或壓縮既有 material behavior 的理由。當目前 evidence 不足以支撐某項 public semantic 或 guarantee 時, 保留 uncertainty, 不以猜測補足或誇大 boundary contract。本 Skill 不主動擁有 external-system contract research, controlled probing 或 production behavior characterization; 當缺少的 evidence material 阻礙 boundary design 時, 揭露受影響的 design claim

## Invariants

### Current-needed capability surface

只 expose current use 需要的 operations, inputs, values, outcomes 與 failure distinctions。不為尚未使用的 endpoints, hypothetical provider replacement, 未確立的平台, SDK 全量 coverage 或 speculative abstraction 預先建模

### External-semantic fidelity

Exposed operations, values, outcomes 與 failures 描述 external system 能做什麼, 回報什麼或實際發生了什麼; 不直接 expose raw transport mechanics, 也不將 external facts 翻譯成 application decisions

Exposed semantic 必須符合其實際 observation 或 mutation 所建立的範圍與 guarantee。不得在沒有足夠 basis 時將 stored configuration 表達成 effective state, 將 mutation acknowledgement 表達成 completed effect, 或將局部 scope 表達成整個 external system 的 current state

Integration Facade 可以將多次 external interactions 組成一項 coherent operation, 但 composition 不得自行增強 external system 所提供的 guarantees。Observe-then-mutate 不等同 atomic conditional mutation, 多步驟 operation 不等同 transaction; 當 race window, partial application 或 effect uncertainty 會影響 current caller 時, boundary contract 必須保留它們

### Purposeful client and facade roles

優先採用已能提供所需 external semantics 的 SDK 或 client。只有在 current use 需要 material capability restriction, composition 或 independently useful test seam 時, 才加入 Integration Facade 或 custom wrapper; 不建立只做 rename 與 delegation 的 pass-through layer

Integration Facade 可以固定已確立的 integration inputs, 聚合 pagination, 組合多個 external observations 或提供 coherent conditional operation; 但其結果仍須保留 external-system semantics, 不得決定 external facts 對 application 代表什麼或下一步應如何行動

SDK 已提供適合的 external vocabulary 時可以直接使用其 value, resource 與 error types; 不為形式上的 decoupling 複製等價 local DTO。只有當 current boundary 需要 SDK 無法表示的 composed fact, material outcome, partial effect, capability restriction 或 app-owned stable contract 時, 才建立 local type

### Mechanics contained

Transport, protocol, endpoint, serialization, command execution, stdout, stderr, exit status, platform API, SDK invocation, external representation parsing, 以及遵從 external system contract 所需的 authentication mechanics 留在 boundary 內。Caller 不應重複或依賴這些 mechanics

Boundary 將 external representation 轉成 exposed fact 時, 不得把無法可靠解讀的 representation silent 轉換成看似有效的 fact。這項約束不使本 Skill 擁有完整 external contract validation, diagnostics 或 observability design

Identity, account 或 tenant 選擇, reauthentication workflow, scope policy, credential consequence 與其他 application-owned authentication decisions 留在 boundary 外

### Facts preserved, application authority remains outside

Normalization 可以移除 representational differences, 但不得遺失或捏造會影響 caller 合法判斷的 external facts。依 current use 保留 materially distinct outcomes, concrete failures, absence, conflict, partial effect, follow-up failure 與 underlying cause; error 不得抹除已知已發生的 external effect

Application ownership, domain classification, lifecycle, orchestration, recovery, compensation, fatal or degraded interpretation 與 user-facing consequence 留給 caller。Retry, caching, fallback, circuit breaking, provider routing 與其他 external-access policies 由可獨立組合的 decorator, middleware, coordinator 或 orchestrator 擁有; external protocol 或 SDK 已明確提供的 transparent mechanics 不因此被排除

當同一 boundary 具有多個 implementations 時, 只統一 genuinely equivalent semantics; 不以 fabricated default, silent no-op 或遺失 material differences 的方式製造 substitutability

### Controllable seams

Boundary 應 expose 或允許適當且最小的 test seam, 使 caller 能 deterministic control 其賦予不同 material consequence 的 boundary facts, outcomes 與 failures, 而不必重建 irrelevant HTTP, CLI, SDK 或 platform mechanics

Test seam 可以是 transport, local test server, command runner, SDK subset, injected function 或 consumer-owned narrow interface; 不為 testability 建立沒有其他 material responsibility 的 broad abstraction。Caller-level test doubles 預設只產生 production boundary 合法可能輸出的 semantics

## Postconditions

建立或修改 boundary 只有在以下 resulting state 成立時才算成功:

- external system, current-needed capabilities 與 caller 所需的 material semantics 已可辨識
- client, SDK 與 optional Integration Facade 各自承擔 material responsibility, 且不因 semantic roles 不同就進行無價值的 physical separation
- exposed operations, values, outcomes 與 failures 表達 external-system semantics, 不包含 application-owned classification, workflow 或 consequence
- exposed semantics 與 guarantees 受到目前 implementation 與可取得 basis 支持; material uncertainty 或 limitation 已明確揭露
- transport, protocol, command, SDK, platform 與 authentication mechanics 未漏入 caller
- material facts, failures, race limitations 與 partial effects 未被壓成 misleading success, error 或較強 guarantee
- retry, cache, fallback, provider routing 與其他 external-access policies 未混入 boundary responsibility
- caller 能透過適當 seam 控制其具有不同 material consequence 的 boundary outcomes
- 不存在 unused API coverage, redundant SDK mirror, purely pass-through layer 或其他 speculative abstraction

檢視 boundary 只有在 findings 以 architecture, responsibility, semantic fidelity 或 controllable seam 為判準, 並以 concrete structure 說明 caller consequence與最小且 current-use-grounded 的改善方向時才算完成。不因一個 operation 包含多次 external calls, client 與 facade 位於同一 package, exposed API 使用 SDK types, 或 external documentation 不完整就自動判定需拆分, 重寫或展開 external-system behavior research

當 boundary 實際提供的 semantic 或 guarantee 無法支撐 caller 目前依賴的 requirement 時, finding 必須揭露該 caller-owned requirement 仍未成立; 不得只降低 boundary claim 就宣稱整體 design problem 已解決。若沒有 material violation, 明確結論為不需改動
