---
name: add-dependency-source
description: 依使用者意圖確定 dependency 的目標版本與 upstream commit，將 repository 固定於該 commit 加入專案，供 Agent 作為參考原始碼。當需要新增 dependency 的本地原始碼參考，或將既有參考重新對齊目標版本時使用。
---

# Add Dependency Source

加入的原始碼供 Agent 作為唯讀參考，應用程式仍從正常 package dependency import。此 Skill 不包含安裝或升級 dependency, editor setup，或產生 pattern 文件

## 確定目標

依使用者提供的 dependency 與對話脈絡，主動辨識目標專案, workspace 與 package，依下列順序確定目標:

1. 使用者明確指定的 version, tag, commit 或 branch 優先於專案現況。指定最新版時，查出當下符合要求的版本
2. 未指定時，採用目前工作範圍實際安裝的適用版本
3. 未安裝時，採用 lockfile 中可確定適用的版本

同一 dependency 有多個版本時，依指定 workspace, 使用位置與目前工作脈絡辨識適用版本，不能任選第一個結果。只有 manifest 版本範圍, 缺少版本依據，或仍有多個適用候選時，整理已找到的資訊並詢問尚未確定的目標

只有 repo URL 時，嘗試辨識它與專案 dependency 的關係。同一 upstream repo 提供多個 package 時，確認以哪個 package 的版本決定 commit; 不假設各 package 同步發布，也不宣稱單一 commit 同時對齊所有版本

能確定目標就直接繼續，不要求使用者再次確認。回報採用的版本與依據; 已安裝版本與 lockfile 不一致時，採用已安裝版本並指出差異

未提供 dependency，且對話脈絡也未指明時，提供簡短使用提示並詢問要加入哪個 dependency。提示最少只需提供套件名稱或 upstream repo URL，版本可以省略，例如:

- `effect`: 嘗試採用適用的已安裝版本或 lockfile 版本
- `effect 的 3.14.0`: 採用指定版本，即使尚未安裝
- `Effect-TS/effect 的 main`: 固定該 branch 當下的 commit

## 查證固定的 commit

從套件來源資訊, 發布 metadata, release 紀錄或 tag 查證目標 package 版本與 upstream repository 的關係，再解析為完整 commit SHA。確認該 commit 存在且對應所需原始碼; tag 名稱或原始碼中的版本字串只能作為線索，須檢查其與目標發布版本的關係

使用者指定 tag 或 branch 時，解析其當下的 commit 並固定 SHA。除非另有查證，不將此結果描述成與某個已發布 dependency 版本相符

版本已知但無法可靠對應 commit 時，說明已查到的證據與缺口，詢問下一步。此時不得以近似 tag, 最新版本或預設 branch 代替目標，也不得回報已完成版本對齊

## 加入或重新對齊

使用 `git subtree --squash`，預設放在 `repos/<repo>`; 遵循專案既有的參考原始碼位置慣例。操作以已查證的完整 SHA 為目標，確保實際匯入的 commit 與解析結果一致

操作前檢查 Git 狀態與目標路徑。Subtree 操作會產生 commit，應只納入此次原始碼變更; 工作樹不乾淨時使用適當的隔離工作樹，或說明阻礙。不得自行提交, 丟棄或覆寫使用者既有變更

- 尚未加入時，新增 subtree
- 已有對應 subtree 且 commit 相同時，驗證內容仍符合該 commit，回報已符合
- 已有對應 subtree 但 commit 不同時，依此次目標更新，包含明確指定較舊版本的情況
- 路徑已有其他內容，或 vendored 原始碼存在本地修改時，先釐清衝突，不直接覆寫

## 記錄來源與參考方式

在 vendored 原始碼之外保留可追溯紀錄，沿用專案既有位置，否則使用 `repos/README.md`。記錄 package 與適用 workspace, 目標版本或 ref, 選擇依據, upstream URL, 完整 SHA, 本地路徑，以及版本與 commit 對應的查證來源

更新專案 Agent 指引，標明原始碼位置與適用 dependency，並交代上述唯讀參考與正常 package import 的使用方式

## 完成條件

確認本地 subtree 內容與固定 commit 的來源 tree 一致，對應紀錄與 Agent 指引均反映實際結果後，回報新增, 更新或已符合，以及版本依據, SHA 與路徑

若停在使用提示, 目標歧義, commit 查證缺口或操作阻礙，明確交代尚未完成的部分與需要的資訊
