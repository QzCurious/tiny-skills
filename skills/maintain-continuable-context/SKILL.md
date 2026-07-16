---
name: maintain-continuable-context
description: 維護一個主題經精煉的 canonical current state，使其能跨對話被可靠理解與接續。當 User 要求建立或更新承載此狀態的 Context Artifacts 時使用。
---

# Maintain Continuable Context

當現有脈絡不足以可靠理解主題時，先使用 `Ground in Context`。

辨識需要被延續的主題，以及承載其 canonical current state 所需的 Context Artifacts。建立或更新前，確認 User 已對齊預定寫入的內容種類、範圍與 Artifact Carrier；尚未對齊時，使用 `Align Intent`。

提煉使主題得以延續的最少內容，包括 original intent、current intent、仍會影響後續行動的理解與決定、open questions、valid next moves，以及 possible terminal states。這些內容發生變化時，更新 Context Artifacts 中的 canonical current state，並移除或明確取代已失效的內容；不以保存完整對話或 activity history 為目的。

當 current state 會被多人共同依賴時，更新前先辨識 authority、concurrent changes、既有決定與未解分歧。只將已確認且仍有效的內容表達為 settled facts；只在 attribution 仍會影響解讀或後續行動時保留它。

當主題可能已到達終止狀態時，指出此情況並使用 `Align Intent`，決定要結束、封存、取代或繼續。

當後續 Agent 能從 Context Artifacts 還原 original intent、辨識 current intent、理解 current state、找出 valid next move 並辨識 possible terminal states，且不會產生實質扭曲時，即完成維護。
