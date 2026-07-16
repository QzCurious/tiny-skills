---
name: continue-from-context-artifacts
description: 讀取先前保存的 Context Artifacts，還原主題目前的狀態並接續處理。當目前對話缺少完整前文，而延續工作所需的內容已保存在 Context Artifacts 時使用。
---

# Continue from Context Artifacts

使用 `Ground in Context` 定位並讀取代表主題的 Context Artifacts；只在可靠還原主題所需時追蹤相關 artifacts。

檢查 artifacts 所指的主題、authority、freshness、實質不確定性與衝突。還原原始意圖、current state、重要理由與限制、未決問題、有效下一步及可能終止狀態，不假設 artifacts 屬於任何特定 conversation。

當還原結果存在會實質影響後續的歧義，或 User 可能正在改變主題的方向時，使用 `Align Intent`。

若還原的主題可能已到達終止狀態，指出此情況並使用 `Align Intent`，決定要結束、封存、取代或繼續。否則從還原的狀態繼續，並使用 `Maintain Continuable Context` 維持後續 context；當維護的狀態會被其他人依賴時，再組合 `Coordinate Shared Context`。

當主題已沿還原的方向恢復、被有意重新定向，或因缺少可靠還原所需的 context 而明確停止時，即完成 continuation。
