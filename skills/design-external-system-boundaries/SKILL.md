---
name: design-external-system-boundaries
description: 當建立, 修改或檢視 application 對 third-party HTTP API, operating-system facility, command-line tool, SDK 或其他 external system 的 API client, platform client, provider client 或其他直接 interaction boundary 時使用
---

# Design External-System Boundaries

`External-System Boundary` 是 application 對單一 external system 直接依賴的最低 semantic boundary。它 expose application 目前需要的 external capabilities, 並 contain 使用這些 capabilities 所需的 technical mechanics

Boundary 可以由既有 SDK 或 external-system client 直接構成, 也可以是其上的 minimal wrapper。它是一項 semantic responsibility, 不要求對應獨立 package, type 或 interface。Application integration, feature coordination 與 domain service 不屬於此 boundary

User 的 request 決定此次工作是建立, 修改或檢視 boundary; 本 Skill 規範 resulting architecture 與 responsibility boundary, 不規定固定的 discovery, implementation 或 review workflow

依 Intended Work 目前可取得的 applicable evidence 理解 external-system semantics。既有 implementation, tests 與 caller reliance 是不得忽略的 current evidence; 缺少 external documentation 不構成移除或壓縮既有 material behavior 的理由。當目前 evidence 不足以支撐某項 exposed semantic 或 guarantee 時, 保留 uncertainty, 不以猜測補足或誇大 boundary contract。本 Skill 不主動擁有 external-system contract research, controlled probing 或 production behavior characterization; 當缺少的 evidence material 阻礙 boundary design 時, 揭露受影響的 design claim

## Invariants

### Current-needed external capability surface

只 expose current use 需要的 external operations, observations, mutations, inputs, values, outcomes 與 failure distinctions。Application needs 決定 surface 範圍, 但不改寫 exposed semantics 的 owner

不為尚未使用的 endpoints, hypothetical provider replacement, 未確立的平台, SDK 全量 coverage 或 speculative abstraction 預先建模。除非 external system 本身提供 generic execution capability, 不以 `Run`, `Call` 或 `Do` 之類的 generic operation 取代可辨識的 external capabilities

### External-semantic fidelity

Exposed operations, values, outcomes 與 failures 描述 external system 能做什麼, 回報什麼或實際發生了什麼; 不將 external facts 翻譯成 application goals, classifications, decisions 或 workflows

Exposed semantic 必須符合實際 observation 或 mutation 所建立的 scope, status 與 guarantee。不得在沒有足夠 basis 時將 stored configuration 表達成 effective state, 將 mutation acknowledgement 表達成 completed effect, 將局部 scope 表達成整個 external system 的 current state, 或以其他方式增強 external system 實際提供的 semantics

一個 boundary operation 不要求只對應一次 HTTP request, command execution, SDK call 或 platform API call; 判準是它是否仍忠於一項 coherent external-system capability, 而不是 underlying interaction count

### Composition follows semantic ownership

Boundary 可以組合多次 external interactions, 但該 composition 的存在理由必須來自 external-system operation semantics, protocol ceremony, representation mechanics 或其他 external-owned behavior

若 composition 的存在理由來自 application intent, invariant, desired state, ownership or domain classification, workflow, lifecycle, recovery, compensation 或 access policy, 該 coordination 留給 caller; boundary expose 組成它所需的 external observations, mutations, outcomes 與 failures。Boundary 不得將 application-owned coordination 呈現為 external system 自身提供的 capability

將 interactions 組成一項 operation 不得自行產生 atomicity, transactionality, exclusivity, completion 或其他 external system 未建立的 guarantee。當 race window, partial application 或 effect uncertainty 會影響 current caller 時, boundary contract 必須保留它們

Application-owned coordination 留在 boundary 外不表示 external calls 必須散落或 inline 於 domain 主流程; caller 可以用 feature-private function, type 或 service 組織該 coordination

### Purposeful implementation

優先直接採用已能提供所需 external semantics 的 SDK 或 client。只有在 current boundary 需要 material capability restriction, representation or error adaptation, external-owned composition, mechanics containment 或其他獨立責任時, 才加入 custom wrapper; 不建立只做 rename 與 delegation 的 pass-through layer

SDK 已提供適合的 external vocabulary 時可以直接使用其 value, resource 與 error types; 不為形式上的 decoupling 複製等價 local DTO。只有當 current boundary 需要 SDK 無法表示的 material external fact, outcome, partial effect, capability restriction 或 app-owned stable contract 時, 才建立 local type

為限縮 caller dependency 或建立 controllable seam 時, 優先由 consumer 定義 narrow interface, injected function 或 SDK subset; 不只為 mocking 建立 production pass-through wrapper

### Mechanics contained

Transport, protocol, endpoint, serialization, command execution, stdout, stderr, exit status, platform API, SDK invocation, external representation parsing, 以及遵從 external system contract 所需的 authentication mechanics 留在 boundary 內。Caller 不應重複或依賴這些 mechanics

Boundary 將 external representation 轉成 exposed fact 時, 不得把無法可靠解讀的 representation silent 轉換成看似有效的 fact。這項約束不使本 Skill 擁有完整 external contract characterization, diagnostics 或 observability design

Identity, account 或 tenant 選擇, reauthentication workflow, scope policy, credential consequence 與其他 application-owned authentication decisions 留在 boundary 外

### Facts preserved, application authority remains outside

Normalization 可以移除 representational differences, 但不得遺失或捏造會影響 caller 合法判斷的 external facts。依 current use 保留 materially distinct outcomes, concrete failures, absence, conflict, partial effect, follow-up failure 與 underlying cause; error 不得抹除已知已發生的 external effect

Application ownership, domain classification, lifecycle, orchestration, recovery, compensation, fatal or degraded interpretation 與 user-facing consequence 留給 caller。Retry, caching, fallback, circuit breaking, provider routing 與其他 external-access policies 由可獨立組合的 decorator, middleware, coordinator 或 orchestrator 擁有; external protocol 或 SDK 已明確提供的 transparent mechanics 不因此被排除

當同一 boundary 具有多個 implementations 時, 只統一 genuinely equivalent semantics; 不以 fabricated default, silent no-op 或遺失 material differences 的方式製造 substitutability

### Controllable seams

Boundary 應 expose 或允許適當且最小的 test seam, 使 caller 能 deterministic control 其賦予不同 material consequence 的 boundary facts, outcomes 與 failures, 而不必重建 irrelevant HTTP, CLI, SDK 或 platform mechanics

Test seam 可以是 transport, local test server, command runner, SDK subset, injected function 或 consumer-owned narrow interface; 不為 testability 建立沒有其他 material responsibility 的 broad abstraction。Caller-level test doubles 預設只產生 production boundary 合法可能輸出的 semantics, 且不得賦予 production boundary 不具備的 atomicity 或其他 guarantee

## Postconditions

建立或修改 boundary 只有在以下 resulting state 成立時才算成功:

- external system, current-needed capabilities 與 caller 所需的 material external semantics 已可辨識
- boundary expose external-system capabilities; application-owned coordination 與 decisions 留在 caller
- 每項 composed operation 的 semantic owner 可辨識, 且只有 external-owned composition 留在 boundary
- exposed operations, values, outcomes, failures 與 guarantees 受到目前 implementation 與可取得 basis 支持; material uncertainty 或 limitation 已明確揭露
- transport, protocol, command, SDK, platform 與 authentication mechanics 未漏入 caller
- material facts, failures, race limitations 與 partial effects 未被壓成 misleading success, error 或較強 guarantee
- retry, cache, fallback, provider routing, ownership classification, workflow 與其他 application-owned policy 未混入 boundary responsibility
- existing SDK 或 client 在足以承擔 boundary 時被直接採用; custom wrapper 具有 material responsibility
- caller 能透過適當 seam 控制其具有不同 material consequence 的 boundary outcomes
- 不存在 unused API coverage, redundant SDK mirror, purely pass-through layer 或其他 speculative abstraction

檢視 boundary 只有在 findings 以 architecture, semantic ownership, responsibility, external-semantic fidelity 或 controllable seam 為判準, 並以 concrete structure 說明 caller consequence 與最小且 current-use-grounded 的改善方向時才算完成。Review 必須 materially 判斷 composed operation 是由 external-system semantics 擁有, 還是由 application intent 或 policy 擁有

不因一個 operation 包含多次 external calls, boundary 與 caller coordination 位於同一 package, exposed API 使用 SDK types, 或 external documentation 不完整就自動判定需拆分, 重寫或展開 external-system behavior research。Semantic responsibility 不清楚時才提出 separation; physical separation 只有在具有 material design value 時才要求

當 boundary 實際提供的 semantic 或 guarantee 無法支撐 caller 目前依賴的 requirement 時, finding 必須揭露該 caller-owned requirement 仍未成立; 不得只降低 boundary claim 或移動 coordination 就宣稱整體 design problem 已解決。若沒有 material violation, 明確結論為不需改動
