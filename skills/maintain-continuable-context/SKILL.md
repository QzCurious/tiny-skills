---
name: maintain-continuable-context
description: 維護一個主題經精煉的 canonical current state，使其能跨對話被可靠理解與接續。當 User 要求建立或持續維護承載此狀態的 Context Artifacts 時使用。
---

# Maintain Continuable Context

當現有脈絡不足以可靠理解主題時，先使用 `Ground in Context`。

辨識需要被延續的主題，以及承載其 canonical current state 所需的 Context Artifacts。建立或首次接手維護前，確認 User 已對預定寫入的內容種類、範圍與 Artifact Carrier 取得共識；尚未取得共識時，先使用 `Align Intent`。完成對齊本身不構成寫入授權。

取得共識後，可在既定範圍內持續維護，不必為每次更新重新確認。若要加入新的內容種類、擴大範圍或更換 Artifact Carrier，應先重新取得共識。不得將討論或方向校正自行視為寫入授權。

提煉使主題得以延續的最少內容，包括 original intent、current intent、current state、仍有效的 Decisions、open questions、open proposals、valid next moves，以及 possible terminal states。

Open Proposal 是已被提出但尚未定案，且仍可能影響後續方向的內容；不得將其表達為 settled fact 或 Decision。只有經 User 明確確認的內容才能記錄為 Decision，且不得將沉默、繼續討論、部分同意或 Agent 推導視為完整定案。

當這些內容發生變化時，更新 canonical current state，並移除或明確取代已失效的內容；不以保存完整對話或 activity history 為目的。

當主題可能已到達終止狀態時，指出此情況並使用 `Align Intent`，決定要結束、封存、取代或繼續。

當後續 Agent 能還原 original intent、辨識 current intent、理解 current state 與 Decisions，並找出 open questions、open proposals、valid next moves 與 possible terminal states，且不會產生實質扭曲時，即完成維護。
