---
name: complete-replacement
description: 將已由 current Decision 要求的 clean-break replacement 直接完成為唯一有效的 Target State, 並在 relevant scope 內移除或改寫其存在, 意義或行為只由 Replaced State 支持的 current elements。當既有 state 已被明確取代, 且不應保留 migration, compatibility, fallback, transitional coexistence 或其他 old-state residue 時使用。
---

# Complete Replacement

當現有脈絡不足以可靠建立 material Preconditions 時, 先使用 `Ground in Context`; grounding 後若仍存在會實質改變 replacement 結果的 intent ambiguity, 使用 `Align Intent`

## Preconditions

在改變 Subject 前, 從目前可取得的脈絡可靠建立:

- 具有 governing force 的 current Decision 已取代可辨識的既有 state, 並足以辨識 Target State
- Target State, Replaced State, relevant scope, material exclusions 與 retention obligations 對此次 Intended Work 為 `Well-Specified`
- Agent 具有 relevant scope 內執行 replacement 所需的 authority
- Subject 與必要的 material surfaces 可被存取到足以完成 replacement 與 meaningful verification

若缺少 governing Decision 或 execution authority, 在 replacement action 前停止; 不得把 proposal, assumption 或 Agent inference 當成 current Decision

## Complete the Replacement

只從 Target State 判斷 relevant scope 內的 current elements 是否應存在, 不以保留既有形狀為預設

直接建立 Target State 所要求的內容, 行為, 結構與安排, 並移除或改寫其存在, 意義或行為只由 Replaced State 支持的 current elements。不要為了保留 Replaced State 而建立或維持 migration, compatibility shim, deprecation path, fallback, transitional coexistence, transitional distinction 或重複 enforcement

與 Replaced State 有關的 element 只有在具有獨立且明確的 current basis, 或具有明確 retention obligation 時才保留。歷史, 稽核或 record-keeping 內容可以存在, 但不得作為 current authority 或繼續影響 current behavior, interpretation 或 downstream action

不要因 Target State 難以實作, 發現衝突或出現新的 material Decision Point, 就自行恢復或保留 Replaced State。當既有 Decision 不足以可靠決定下一步時, 在受影響 action 前停止並提出真正缺少的 Decision, authority 或 specification

## Verify Completion

驗證 Target State 已在 relevant scope 的 material surfaces 成立, 並檢查 Replaced State 是否仍透過直接或間接的 current expression 發揮作用。檢查不只限於主要 implementation, 也應涵蓋會實質影響 current behavior 或後續理解的 rules, guards, exceptions, tests, documentation, names, workflows, arrangements 與其他相關 surfaces

對仍與 Replaced State 有關的 retained elements, 驗證其 current basis 或 retention obligation。明確揭露任何已知 residue, 無法存取或尚未驗證的 material surface; 不得以局部完成推定全域 absence

## Postcondition

Replacement 只有在 relevant scope 內的 Subject 已直接符合 Target State, 且不存在其 current existence, meaning 或 behavior 只由 Replaced State 支持的 element 時, 才能被視為成功完成。明確保留且不具 current operative effect 的歷史, 稽核或 record-keeping 內容不違反此 Postcondition

若此 Postcondition 尚未成立, 可以因 blocker, 新的 Decision Point, authority gap, access limitation 或 User 終止而停止, 但不得宣稱 replacement 已完成
