---
name: maintain-continuable-context
description: 維護一個主題有意義的 current context，使其能跨 conversation 繼續。當個人或共享的主題需要 persistent、recoverable 的 current state 時使用。
---

# Maintain Continuable Context

當目前 conversation 與可用的 Context Artifacts 不足以可靠理解主題時，先使用 `Ground in Context`。

辨識主題，以及使其 Continuable 所需的最少 Context Artifacts。依 artifact 的 audience、authority、collaboration needs、history requirements 與可用環境選擇或建議 Artifact Carrier，同時維持 artifact 跨 carrier 的意義。

建立或更新 Context Artifact 前，使用 `Align Intent` 與 User 對齊預定寫入的內容種類、範圍與 Artifact Carrier。

將 Context Artifacts 維持為主題最新且有意義的 current state，保留還原原始意圖、理解目前狀態、採取有效下一步與辨識可能終止狀態所需的內容。把 conversation、comments 與其他 activity history 視為可取材的過程脈絡，只將持續影響主題解讀或後續行動的內容納入 Context Artifacts。

當主題可能已到達終止狀態時，指出此情況並使用 `Align Intent`，決定要結束、封存、取代或繼續。

當另一個 conversation 能從 Context Artifacts 還原主題的原始意圖、有效的繼續方式與可能終止狀態，且不會產生實質扭曲時，即完成維護。
