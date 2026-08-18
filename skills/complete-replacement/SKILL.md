---
name: complete-replacement
description: 將已定案的 replacement 以 target-state-only clean break 完整落實到所有受影響範圍, 直接建立 target state, 並移除或改寫所有僅因 replaced state 才存在的 current elements。當既有 state 已被明確取代, 且不應透過 migration, compatibility, fallback, transitional structure 或其他 residue 與 target state 並存時使用。
---

# Complete Replacement

當現有脈絡不足以可靠建立 material Preconditions 時, 先使用 `Ground in Context`; grounding 後若仍存在會實質改變 replacement 結果的 intent ambiguity, 使用 `Align Intent`

## Preconditions

在改變 subject 前, 從目前可取得的脈絡可靠建立:

- replacement 有 current governing Decision 作為依據
- replacement 對此次 Intended Work 為 `Well-Specified`, 包括 target state, replaced state, full affected scope, material exclusions 與 retention obligations
- Agent 具有執行 replacement 所需的 authority
- subject 與必要的 material surfaces 可被存取到足以完成並驗證 replacement

若缺少 governing Decision 或 execution authority, 在 replacement action 前停止; 不得把 proposal, assumption 或 Agent inference 當成 current Decision

## Complete the Replacement

將 replacement 視為一個 target-state-only operation, 而不是先引入 target state, 再於之後 retire replaced state

只從 target state 判斷 full affected scope 內每個 material element 是否應存在。既有 element 只有在 target state 中具有獨立且明確的 current reason, 或具有明確 retention obligation 時才保留; 否則移除或改寫

直接建立 target state 所要求的內容, 行為, 結構與安排。不要建立或維持 migration, compatibility shim, deprecation path, fallback, transitional coexistence, transitional distinction, duplicate enforcement 或其他只為 replaced state 繼續存在而需要的結構

與 replaced state 有關的歷史, 稽核或 record-keeping 內容可以保留, 但只能以該用途存在; 不得作為 current authority, 也不得繼續影響 current behavior, interpretation 或 downstream action

不要因 target state 難以實作, 發現衝突或出現新的 material Decision Point, 就自行恢復或保留 replaced state。當既有 Decision 不足以可靠決定下一步時, 在受影響 action 前停止並提出真正缺少的 Decision, authority 或 specification

## Verify Completion

驗證 subject 已在 full affected scope 的 material surfaces 符合 target state, 並檢查是否仍有任何 element 僅因 replaced state 才存在或仍具有 current effect。檢查不只限於主要 implementation, 也應涵蓋會實質影響 current behavior 或後續理解的 rules, guards, exceptions, tests, documentation, names, workflows, arrangements 與其他相關 surfaces

對仍與 replaced state 有關的 retained elements, 驗證其獨立 current reason 或 retention obligation。明確揭露任何已知 residue, 無法存取或尚未驗證的 material surface; 不得以局部完成推定 full affected scope 已完成

## Postcondition

Replacement 只有在 subject 已於 full affected scope 符合 target state, 且不存在任何僅因 replaced state 才存在或仍具有 current effect 的 element 時, 才能被視為成功完成

明確保留的歷史, 稽核或 record-keeping 內容若只以該用途存在, 且不具有 current governing effect, 不違反此 Postcondition

若此 Postcondition 尚未成立, 可以因 blocker, 新的 Decision Point, authority gap, access limitation 或 User 終止而停止, 但不得宣稱 replacement 已完成
