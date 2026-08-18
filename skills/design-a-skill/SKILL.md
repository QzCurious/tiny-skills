---
name: design-a-skill
description: 將建立或修改 Skill 的意圖設計成 AI Agent 可可靠套用的 authored meaning，並判斷其是否應作為獨立 Skill。當提議、設計或修訂 Skill，且尚未進入 packaging 實作時使用。
---

# Design a Skill

先判斷意圖是否值得成為獨立 Skill。獨立 Skill 應有可辨識的使用時機、完整而可組合的行為責任，以及自身允許的結果或終止狀態。若意圖只補充另一個 Skill 的責任，將其併入該 Skill；若目前意義仍不足以可靠判斷，保留為 Skill Draft

進入會 material 決定 Skill responsibility, boundary 或 result 的 Governed Action 前, 所需的預期行為與相關脈絡必須足以可靠判斷; 不以猜測補足會改變設計結果的 intent, scope 或 condition

從 name 與 description 開始設計。讓 description 說明 Skill 定義的行為，以及應觸發它的各種實質情境；只有當 AI Agent 仍需要額外的步驟、判斷、約束或完成條件才能可靠套用時，才加入正文

辨識 Skill 所擁有的 material Governed Actions, 以及會實質約束各 Governed Action 的 Precondition 與定義成功完成的 material Postcondition。Precondition 與 Postcondition 分別依自身意義設計，不要求成對存在，也不要求固定 heading。當 Precondition 未成立或尚無法判定時, 先辨識真正缺少的 condition; 依運作模型由目前 Skill 已明確擁有的 behavior 建立, 使用 `Prepare for Next Step`, 或組合 authored meaning 能建立或釐清該 condition 的正式 Skill; 不以固定 Skill sequence 取代 condition-level reasoning

讓產出的 authored meaning 具有 `Clear Reading Path`。從 name 與 description 建立整體 orientation，再依概念關係安排必要正文; 不依固定模板或機械的執行順序編排。正文可以依賴 name 與 description 已建立的意義，不必為了自成一體而重述它們

當 Skill 具有明確 lifecycle, conditional branching, recovery loop, cross-turn interaction, interactive pause 或多種 terminal result 時, 依 `OPERATING-MODEL.md` 優先考慮以 state machine 作為 control-flow backbone; 讓 diagram 承載主要 control flow, 正文沿已建立的 reading path 補充 state 與 transition semantics

釐清並使 authored meaning 內部一致：

- 什麼情況應使用此 Skill
- 它擁有與不擁有的行為責任
- 哪些 material Governed Actions 受到此 authored meaning 規範
- 哪些 material Preconditions 約束哪些 Governed Actions
- unresolved Precondition 如何建立, 或在何種 condition 下停止於受影響 Governed Action 前
- 哪些 material Postconditions 定義成功完成
- 它允許哪些其他結果與終止狀態
- 哪些既有正式 Skills 能建立或釐清所需 conditions
- 它能否獨立被使用，或應留在另一個 Skill 內

將 packaging, provider-specific metadata 與其他整合決定留到 authored meaning 已對齊之後

當預期行為、邊界、material conditions、組合方式與終止狀態已對齊，name、description 與必要正文足以讓 AI Agent 可靠套用，且已明確決定成為獨立 Skill、併入既有 Skill，或維持為 Skill Draft 時，即完成設計
