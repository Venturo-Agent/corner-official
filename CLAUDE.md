# CORNER 角落旅行社 — 對外行銷官網

純靜態網站（HTML / CSS / JS，無框架）。這是真實客戶 **角落旅行社 CORNER TRAVEL** 的對外行銷官網，與「一棧 ERP（yizhan-erp）」專案**完全分開、互不相干**。

## 部署（唯一方式）
- 這個資料夾本身就是 git repo，連到 **github.com/Venturo-Agent/corner-official**（PUBLIC、main 分支）。
- 改完即部署：`git add -A && git commit -m "..." && git push origin main` → GitHub Pages 自動建置（約 10–30 秒）。
- 線上網址：**https://venturo-agent.github.io/corner-official/**
- ⚠️ **絕不要**把這個站推進 yizhan-erp repo（那個 repo 一 push 就會觸發 ERP 正式環境部署，客戶在用）。

## 檔案結構
- `index.html` — 首頁：深色「貫穿森林」固定底圖 + 飄霧 + GSAP 捲動動態；封面＝左文字＋右地圖（七國輪播、每國自己的國家地圖＋城市定位點，5 秒自動換＋圓點手動）；收藏的角落（寬窄錯落七國卡、hover 各國窗花紋樣）；關於角落 / 訂製行程（斜切手風琴）；正在出發（行程卡）；見證；聯絡
- `moments.html` — 目的地影片格牆
- `destination-vietnam.html` — 越南產品頁
- `tour-fuji.html` — 富士山登頂 5 天 4 夜行程頁（Day by day D1–D5）
- `corner.css` 共用設計系統｜`corner.js` 共用互動｜`corner-gsap.js` 首頁 GSAP 動態層（含封面輪播 controller）
- `assets/photos/` — 照片素材
- `_archive/` — 探索用 demo 版本（不影響 live，僅備份）

## 設計重點 / 慣例
- 風格參考 domitur.pt + fitzroy-travel.com + izanami-official.com（精品、襯線編輯、慢捲動、電影感）。
- 配色 morandi 暖金 + 深色貫穿；字體 **Cormorant Garamond**（拉丁）+ **Noto Serif TC**（中文）。
- 七國：越南 / 峇里（印尼）/ 日本 / 泰國 / 韓國 / 中國 / 埃及。
- 地圖城市點經緯度→座標投影公式（@svg-maps/world，viewBox 1010×666）：**x = 2.8108·lon + 474.29，y = −2.9564·lat + 463.38**（加新城市點用這個，誤差 1–2px）。
- 聯絡信箱：**cornertravelagency@gmail.com** + **sales@cornertravel.com.tw**；電話 +886 2 7751 6051；地址 台北市重慶北路一段67號8樓之2；IG @cornertravel.w。
- 白霧＝霧林照片 `.pb-forest` 緩漂 + 免費柔霧圖 `.pb-fog` screen 疊加（非程序噪聲）。

## 驗證（截圖）
用 Playwright（Chromium）跑 `.cjs` 腳本截圖檢查。Playwright 目前裝在 ERP 專案：`require('/Users/williamchien/Projects/未命名檔案夾/yizhan-erp/node_modules/playwright')`。若要本資料夾自帶，`npm i -D playwright && npx playwright install chromium`。

## 待辦
- 全站深淺統一（首頁深色、內頁仍淺色）。
- 其餘各國專屬產品頁（目前只有越南）。
- 全站手機版走查。


## 模型編排（全局規矩，本專案適用）

> 本專案遵循 `~/Projects/CLAUDE.md` 的「模型編排」章節（SSOT，規則以那份為準）。
> 口訣：**會後悔的題找 Fable，日常的題找 Opus，動手的活丟 MiniMax。**
> 開工先判斷這題的錯誤成本：拆錯全盤重來的決策 → 編排者用 Fable 5（effort 拉高）；日常改版面/研究功能/修 bug → Opus 編排；機械執行照工單丟 MiniMax（走 venturo-dispatch）；高風險決策用 Opus 平行出第二意見。
