---
name: design-a-skill
description: 將建立或修改 Skill 的意圖設計成 AI Agent 可可靠套用的 authored meaning，並判斷其是否應作為獨立 Skill。當提議、設計或修訂 Skill，且尚未進入 packaging 實作時使用。
---

# Design a Skill

當目前輸入不足以可靠理解預期行為時，先使用 `Ground in Context`；當預期行為、邊界或結果尚未形成共同理解時，使用 `Align Intent`。

先判斷意圖是否值得成為獨立 Skill。獨立 Skill 應有可辨識的使用時機、完整而可組合的行為責任，以及自身允許的結果或終止狀態。若意圖只補充另一個 Skill 的責任，將其併入該 Skill；若目前意義仍不足以可靠判斷，保留為 Skill Draft。

從 name 與 description 開始設計。讓 description 說明 Skill 定義的行為，以及應觸發它的各種實質情境；只有當 AI Agent 仍需要額外的步驟、判斷、約束或完成條件才能可靠套用時，才加入正文。

辨識 Skill 所擁有的 actions, 以及會實質約束這些 actions 的 Precondition 與定義成功完成的 material Postcondition。Precondition 與 Postcondition 分別依自身意義設計，不要求成對存在，也不要求固定 heading。當 Precondition 未成立或尚無法判定時，先辨識缺少的 condition，再決定由目前 Skill 建立、組合能處理該 condition 的正式 Skill，或在 governed action 前停止；不要以固定 Skill sequence 取代 condition-level reasoning。

讓產出的 authored meaning 具有 `Clear Reading Path`。從 name 與 description 建立整體 orientation，再依概念關係安排必要正文; 不依固定模板或機械的執行順序編排。正文可以依賴 name 與 description 已建立的意義，不必為了自成一體而重述它們。

釐清並使 authored meaning 內部一致：

- 什麼情況應使用此 Skill
- 它擁有與不擁有的行為責任
- 哪些 material Precondition 約束哪些 owned actions
- Precondition 未成立或尚無法判定時如何處理
- 哪些 material Postcondition 定義成功完成
- 它允許哪些其他結果與終止狀態
- 哪些既有正式 Skills 能建立或釐清所需 conditions
- 它能否獨立被使用，或應留在另一個 Skill 內

將 packaging, provider-specific metadata 與其他整合決定留到 authored meaning 已對齊之後。

當預期行為、邊界、material conditions、組合方式與終止狀態已對齊，name、description 與必要正文足以讓 AI Agent 可靠套用，且已明確決定成為獨立 Skill、併入既有 Skill，或維持為 Skill Draft 時，即完成設計。
