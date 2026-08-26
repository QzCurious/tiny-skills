---
name: design-external-system-boundaries
description: 當建立, 修改或檢視 application 與 third-party HTTP API, operating-system facility, command-line tool, SDK 或其他 external system 之間的 API client, platform client, provider client, wrapper 或 integration facade 時使用
---

# Design External-System Boundaries

`External-System Boundary` 是 application-owned boundary, 以 external system 的 observable semantics expose application 目前需要的 capabilities, 並 contain 與該 system 互動所需的 technical mechanics

Boundary 可以由既有 SDK 或 external-system client 直接構成, 也可以在其上加入 optional `Integration Facade`。Client 或 SDK 忠於 external system 的 operations, values, outcomes 與 failures; Integration Facade 只在 current use 需要時限縮或組合 external operations。這些是 semantic roles, 不要求拆成不同 package, type 或 interface; 一個 logical operation 也不要求只對應一次 HTTP request, command execution 或 SDK call

## Establish the Contract from Evidence

在 material 設計, 修改或判斷 boundary 前, 依目前可取得的最佳證據建立 relevant external contract。證據可以來自 authoritative documentation 或 specification, SDK types 與 documented behavior, 既有 implementation 與 tests, controlled experiments, recorded responses, runtime observations 或其他可重現的 external behavior

缺少文件不表示缺少 contract。既有程式與 tests 所呈現的 behavior 雖不自動成為 external truth, 仍是 material evidence; 不得只因找不到外部文件, 就刪除, 壓縮或重新解釋它所保留的 semantics。當 material evidence 不足而 external system 可被安全測試時, 主動以 controlled observation 建立更多證據。當證據衝突或仍無法確認時, 保留各自的 provenance 與 uncertainty; 不以猜測補足, 也不把未解語意 silent degrade 成較簡單的 contract

## Invariants

### Current-needed surface

只 expose current callers 需要的 capabilities, inputs, values, outcomes, failure distinctions 與 diagnostic facts。不為尚未使用的 endpoints, hypothetical provider replacement, 未確立的平台, SDK 全量 coverage 或 speculative abstraction 預先建模

### External-system semantics

Public operations 與 results 描述 external system 能做什麼, 回報什麼或實際發生了什麼; 不直接 expose raw transport mechanics, 也不將 external facts 翻譯成 application decisions。Operation 可以組合多次 protocol interaction, 只要 resulting semantic 仍是一項 coherent external operation 或 observation

### Client fidelity and use-oriented composition

優先採用已能提供所需 external semantics 的 SDK 或 client。只有在 current use 需要 material restriction, composition, validation, diagnostics 或 test seam 時, 才加入 Integration Facade 或 custom wrapper; 不建立只做 rename 與 delegation 的 pass-through layer

Integration Facade 可以知道 application 目前如何使用 external system, 固定已確立的 integration inputs, 聚合 pagination, 組合多個 external observations 或提供 conditional mutation; 但其結果仍須保留 external-system semantics, 不得決定 external facts 對 application 代表什麼或下一步應如何行動

SDK 已提供適合的 external vocabulary 時可以直接使用其 value, resource 與 error types; 不為形式上的 decoupling 複製等價 local DTO。只有當 current boundary 需要 SDK 無法表示的 composed fact, material outcome, partial effect, capability restriction 或 app-owned stable contract 時, 才建立 local type

### Mechanics contained

Transport, protocol, endpoint, serialization, command execution, stdout, stderr, exit status, platform API, SDK invocation, external representation parsing, contract validation, 以及遵從 external system contract 所需的 authentication mechanics 留在 boundary 內。Caller 不應重複或依賴這些 mechanics

Identity, account 或 tenant 選擇, reauthentication workflow, scope policy, credential consequence 與其他 application-owned authentication decisions 留在 boundary 外

### Material facts are preserved

Normalization 可以移除 representational differences, 但不得遺失或捏造會影響 caller 合法判斷的 external facts。依 current use 需要保留 successful result, documented negative outcome, external rejection, interaction failure, contract violation, absence, conflict, freshness, atomicity, partial effect, follow-up failure, external error code, request identity 與 underlying cause

Error 不得抹除已知已發生的 external effect。Boundary 不將 material outcomes 全部壓成 generic success/error, 也不將 external outcome 預先分類成 domain state, recovery decision 或 workflow consequence

當同一 boundary 具有多個 implementations 時, 只統一 genuinely equivalent semantics; 不以 fabricated default, silent no-op 或遺失 material differences 的方式製造 substitutability

### Application authority and access policies remain outside

Application ownership, domain classification, lifecycle, orchestration, recovery, compensation, fatal/degraded interpretation 與 user-facing consequence 留給 caller

Retry, caching, fallback, circuit breaking, provider routing 與其他 external-access policies 原則上由可獨立組合的 decorator, middleware, coordinator 或 orchestrator 擁有。External protocol 或 SDK 已明確提供的 transparent mechanics 可以保留, 但 boundary 不得暗中加入會改變 application behavior 的 policy

### Material contracts are validated and diagnosable

在 untrusted external representation 形成可信 external fact 的位置, 驗證 current code materially 依賴的 contract。缺少 required field, 無法辨識必要 variant, malformed output 或不允許的 field combination 不得 silent coercion 成 zero value 或已知 outcome; 應形成 explicit contract violation

Failures 應保留足以診斷且可安全揭露的 structured context, 例如 external system, operation, status 或 exit code, provider error code, request identity, validation failure, bounded redacted evidence 與 underlying cause。Boundary 不必決定 log level, alert severity 或 user presentation; 它必須讓擁有 operational consequence 的 caller 能可靠觀測與診斷

### Material outcomes are controllable in tests

Boundary 應提供適當且最小的 test seams, 使 external mechanics 與 boundary-level semantics 都能被 deterministic control。Tests 應能製造 current callers materially 處理的 success, negative outcome, rejection, interaction failure, contract violation, cancellation, conflict 與 partial effect, 而不要求 caller 重建 irrelevant HTTP, CLI, SDK 或 platform details

Test seam 可以是 transport, local test server, command runner, SDK subset, injected function 或 consumer-owned narrow interface; 不為 testability 建立沒有其他 material responsibility 的 broad abstraction。Caller-level test doubles 預設只產生 production boundary 合法可能輸出的 semantics; malformed raw representation 應在 boundary contract tests 中建立

## Postconditions

建立或修改 boundary 只有在以下 resulting state 成立時才算成功:

- current-needed capabilities 與 material semantics 有可辨識的 evidence basis, 或其 uncertainty 已明確保留
- resulting surface 滿足所有 applicable Invariants, 且沒有 unused API coverage, redundant SDK mirror 或 purely pass-through layer
- caller 能從 returned facts, outcomes, failures 與 partial effects 自行進行 application-owned classification 與決策
- relevant external assumptions 受到 contract validation, failures 具有足夠且安全的 diagnostic context
- relevant semantic outcomes 可由 tests 控制, 並由適當 seam 的 tests 保護
- known evidence conflicts, unresolved contract questions 或無法驗證的 material surfaces 已明確揭露

檢視 boundary 只有在 findings 以相同 Invariants 為判準, 並以 concrete evidence 說明 affected semantics, caller 或 operator consequence, 以及最小且 current-use-grounded 的改善方向時才算完成。不因一個 operation 包含多次 external calls, client 與 facade 位於同一 package, 或 public API 使用 SDK types 就自動判定需拆分或重寫; 不因缺少 external documentation 就 degrade 既有程式所呈現的 material behavior。若沒有 material violation, 明確結論為不需改動
