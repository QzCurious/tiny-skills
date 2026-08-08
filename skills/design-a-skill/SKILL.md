---
name: design-a-skill
description: 將建立或修改 Skill 的意圖設計成 AI Agent 可可靠套用的 authored meaning，並判斷其是否應作為獨立 Skill。當提議、設計或修訂 Skill，且尚未進入 packaging 實作時使用。
---

# Design a Skill

當目前輸入不足以可靠理解預期行為時，先使用 `Ground in Context`；當預期行為、邊界或結果尚未形成共同理解時，使用 `Align Intent`。

先判斷意圖是否值得成為獨立 Skill。獨立 Skill 應有可辨識的使用時機、完整而可組合的行為責任，以及自身允許的結果或終止狀態。若意圖只補充另一個 Skill 的責任，將其併入該 Skill；若目前意義仍不足以可靠判斷，保留為 Skill Draft。

從 name 與 description 開始設計。讓 description 說明 Skill 定義的行為，以及應觸發它的各種實質情境；只有當 AI Agent 仍需要額外的步驟、判斷、約束或完成條件才能可靠套用時，才加入正文。

組織 authored meaning 時，讓較廣泛的意圖、責任或判斷框架先為較局部的步驟、規則與約束建立解讀脈絡。依概念關係安排內容，而非機械地依執行順序或固定模板編排；正文可以依賴 name 與 description 已建立的意義，不必為了自成一體而重述它們。

釐清並使 authored meaning 內部一致：

- 什麼情況應使用此 Skill
- 它擁有與不擁有的行為責任
- 它允許哪些結果與終止狀態
- 它在什麼條件下組合哪些既有 Skills
- 它能否獨立被使用，或應留在另一個 Skill 內

將 packaging, provider-specific metadata 與其他整合決定留到 authored meaning 已對齊之後。

當預期行為、邊界、組合方式與終止狀態已對齊，name、description 與必要正文足以讓 AI Agent 可靠套用，且已明確決定成為獨立 Skill、併入既有 Skill，或維持為 Skill Draft 時，即完成設計。
