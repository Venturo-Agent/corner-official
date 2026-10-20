# 給本地模型的專案簡介（派工單開頭一律先貼這份）

> 目的：本地模型沒參與過這個專案。不先給它這份，它會照一般網站常識加框架、複製整段 CSS、用斜體和 emoji、把內部註記寫上線。

## 這個專案是什麼
角落旅行社（CORNER TRAVEL）對外官網。純靜態 HTML／CSS／JS，**沒有框架、沒有建置步驟**，不要引入 React、Tailwind、npm 套件。
前端獨立於一棧 ERP，不共用它的畫面元件。另有 `chat-widget.js` 可呼叫 `/api/website/chat` 接頭；目前首頁未引用該檔，不能因此宣稱客服已上線或完全無跨案依賴。

## 可以直接用、不要重寫的
- `corner.css` 全站設計系統；`corner.js` 共用互動；`corner-gsap.js` 首頁 GSAP 動態
- **新子頁**（像 `about.html`、`tailor.html`、`corporate.html`）：同時引用 `corner.css` ＋ `corner-sub.css`，**不要把 CSS 複製進頁面**。子頁骨架（霧林底圖 `.page-bg`／`.pb-forest`／`.pb-fog`、玻璃導覽 `liquid-glass`、段落 `.sec`）都在 `corner-sub.css`
- 色票變數：`--bg --bg-warm --ink --ink-dim --gold --gold-deep --gold-bright --paper --paper-dim`，不要寫死色碼
- 字體：拉丁 `Cormorant Garamond`、中文 `Noto Serif TC`
- 照片在 `assets/photos/`（各團子資料夾如 `fukuoka/`、`hokkaido/`），客服圖示 `assets/chat-icon.svg`
- 地圖加城市點用固定公式（viewBox 1010×666）：**x = 2.8108×經度 + 474.29，y = −2.9564×緯度 + 463.38**，不要自己估座標

## 規矩
1. **全站不准斜體**（William 明令）：`font-style:normal`，不要用 `italic`。
2. **不准用 emoji 當圖示**（客服鈕曾用 💬 被換成線條 SVG）。
3. 改了 `corner.css` 要把各頁引用的版本號往上加（目前 `corner.css?v=3`），不然客人看到舊版。
4. 七個目的地：越南、峇里（印尼）、日本、泰國、韓國、中國、埃及。首頁寫「七個國度」。
5. 聯絡資訊固定：cornertravelagency@gmail.com、sales@cornertravel.com.tw、電話 +886 2 7751 6051、台北市重慶北路一段67號8樓之2、IG @cornertravel.w。不要編其他的。
6. **這個 repo 是公開的**：內部策略、報價成本、給自己看的註記（如「（飯店介紹可再補充）」「待補」）都不准寫進頁面或檔案。
7. 不放假價格卡、假見證、假資料；沒有真資料就不要放那一塊。
8. 給特定客戶的私人行程頁放在 `p-<團號>-<亂碼>/index.html`，要加 `<meta name="robots" content="noindex, nofollow">`，不放導覽列。
9. 頁面內連結寫 `xxx.html`；線上網址不帶 `.html`（例 `/tour-fukuoka`）。
10. `tour-penang.html` 刻意維持 demo 原樣（用 `assets/cis.css`），不要套官網樣式。

## 踩過的坑
- 圖片副檔名寫錯（`.jpg` 實際是 `.webp`）→ 破圖。引用前先確認檔案真的存在。
- 截圖前要把 `img` 的 `loading` 改成 `eager`，不然下半頁是空的。
- 「沒報錯」不等於版面對；改版後一定截圖親眼看。
- 行程頁每日行程要寫逐時刻表（幾點做什麼、怎麼移動），航班去程／回程分兩行。

## 派工流程
給它**可驗收的清單**（改哪個檔、哪個 class、哪段文字），不給開放題；交件後由 Claude 在本機 `python3 -m http.server 8801` 截圖逐項驗。
