# Well-Specified

## Meaning

`Well-Specified` 是一個對象相對於 Intended Work 的一種 Property: 對該工作而言, 會實質改變結果的意義, 範圍, 條件與允許的選擇空間已足夠明確, 使工作能在既定意義內可靠進行, 而不必以猜測補足實質缺口

## Applies To

適用於說明程度會影響後續解讀, 決策或執行的對象, 例如 requirement, proposal, plan, task, behavior, interface 或其他可被進一步處理的主題

## Evaluation Context

`Intended Work` 是目前預期由該對象支援的下一個有界工作範圍, 例如探索, 決策, 設計, 實作, review 或交接。它不是下一個 atomic action, 而是判斷哪些資訊與選擇會實質影響此次工作的 evaluation context

Well-Specified 必須相對於明確或可合理推定的 Intended Work 判斷。同一個對象可以足以支援某項工作, 但不足以支援另一項工作。當不同 Intended Work interpretation 會改變所需的明確程度, 允許結果或工作邊界時, 應先釐清 Intended Work; 不得在缺少工作範圍時宣稱對象普遍 Well-Specified

## Satisfaction

對 Intended Work 而言, 對象應足以使執行者:

- 理解相關意圖, 預期結果與邊界
- 辨識會實質影響結果的限制, 假設, 依賴與衝突
- 區分已定內容, 刻意保留或授權的選擇, 以及仍會阻礙工作的未決事項
- 判斷採取的行動與產出是否仍符合既定意義和允許的選擇空間
- 不必自行選擇未被支持, 且會實質改變結果的解讀

未知事項或多種可能解法本身不違反此 Property。只要它們不影響 Intended Work, 或其保留方式與選擇權限已足夠明確, 對象仍可為 Well-Specified

## Boundaries

`Well-Specified` 不等同於 exhaustive specification, 完整細節, 最終定案, 單一解法, 無彈性, 已取得共識, 已獲批准, 正確或可行

`Well-Specified` 與 `Continuable` 不同: `Continuable` 關心跨處理邊界後能否不失真地還原如何繼續; `Well-Specified` 關心 Intended Work 能否在不補足實質意義的情況下可靠進行

此 Property 不規定細化, 研究, 對齊或決策的特定方法
