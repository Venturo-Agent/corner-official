# CORNER 角落旅行社 — 對外行銷官網

純靜態網站（HTML / CSS / JS，無框架）。這是真實客戶 **角落旅行社 CORNER TRAVEL** 的對外行銷官網，與「一棧 ERP（yizhan-erp）」專案**完全分開、互不相干**。

## 部署（唯一方式）
- 這個資料夾本身就是 git repo，連到 **github.com/Venturo-Agent/corner-official**（PUBLIC、main 分支）。
- 改完即部署：`git add <你改的檔案> && git commit -m "..." && git push origin main` → **Coolify 自動建置**（約 2–3 分鐘）。
- 線上網址：**https://www.cornertravel.com.tw/**（子頁例：`/tour-fukuoka`，網址不帶 `.html`）
- 驗收：`curl -sL -o /dev/null -w "%{http_code}\n" https://www.cornertravel.com.tw/tour-fukuoka`，**再抓一次內文確認是新版**——換版當下會有短暫期間網頁已 200、大圖仍 404，等 20 秒再驗一次。
- ⚠️ **絕不要**把這個站推進 yizhan-erp repo（那個 repo 一 push 就會觸發 ERP 正式環境部署，客戶在用）。

> ⚠️ **2026-09-14 更正**：上面原本寫「GitHub Pages 自動建置，線上網址 venturo-agent.github.io/corner-official」。
> **那是舊的。** 實際線上站是 www.cornertravel.com.tw，走 Coolify（見 `guild/INFRA.md` 第 21 行），
> 當天實測 push 後該網域確實換版。照舊敘述去驗 GitHub Pages 的網址，會以為自己沒部署成功。
> 而且生態鐵律第 1 條已明令禁止新開 GitHub Pages，這份文件卻還把它寫成「唯一方式」。

> ⚠️ **`git add -A` 在這個 repo 會出事**：repo 曾被整包 chmod（644→755），
> `git status` 會把上千個檔案列為已修改。已於 2026-09-14 設 `core.fileMode false`（本機設定，不進 git），
> 但**換一台機器 clone 下來還是會重現**。一律只 add 自己真正改到的檔案。

## 檔案結構
- `index.html` — 首頁：深色「貫穿森林」固定底圖 + 飄霧 + GSAP 捲動動態；封面＝左文字＋右地圖（七國輪播、每國自己的國家地圖＋城市定位點，5 秒自動換＋圓點手動）；收藏的角落（寬窄錯落七國卡、hover 各國窗花紋樣）；關於角落 / 訂製行程（斜切手風琴）；正在出發（行程卡）；見證；聯絡
- `moments.html` — 目的地影片格牆
- `destination-vietnam.html` — 越南產品頁
- `tour-fuji.html` — 富士山登頂 5 天 4 夜行程頁（Day by day D1–D5）
- `corner.css` 共用設計系統｜`corner.js` 共用互動｜`corner-gsap.js` 首頁 GSAP 動態層（含封面輪播 controller）
- `assets/photos/` — 照片素材
- `_archive/` — 探索用 demo 版本（不影響 live，僅備份）
- `首頁捲動放映-概念.md` — **新首頁方向總綱（2026-07-18 拍板走 C 路線）**：捲動＝放映旅程電影＋章節節點互動層。體驗架構、圖片序列引擎、首尾幀接龍 SOP、提示詞鐵律、轉場文法庫、分鏡現況與待辦全在裡面；動新首頁前先讀這份。試看頁 `/_archive/film-demo.html`。

## 設計重點 / 慣例
- 風格參考 domitur.pt + fitzroy-travel.com + izanami-official.com（精品、襯線編輯、慢捲動、電影感）。
- 配色 morandi 暖金 + 深色貫穿；字體 **Cormorant Garamond**（拉丁）+ **Noto Serif TC**（中文）。
- 七國：越南 / 峇里（印尼）/ 日本 / 泰國 / 韓國 / 中國 / 埃及。
- 地圖城市點經緯度→座標投影公式（@svg-maps/world，viewBox 1010×666）：**x = 2.8108·lon + 474.29，y = −2.9564·lat + 463.38**（加新城市點用這個，誤差 1–2px）。
- 聯絡信箱：**cornertravelagency@gmail.com** + **sales@cornertravel.com.tw**；電話 +886 2 7751 6051；地址 台北市重慶北路一段67號8樓之2；IG @cornertravel.w。
- 白霧＝霧林照片 `.pb-forest` 緩漂 + 免費柔霧圖 `.pb-fog` screen 疊加（非程序噪聲）。

## 驗證（截圖）
用 Playwright（Chromium）截圖檢查。**本機的 Python 版 Playwright 直接可用**（2026-09-14 實測）：

```python
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={"width":1440,"height":1000})
    pg.on("pageerror", lambda e: print("JS 錯誤:", e))
    pg.goto("http://localhost:8801/tour-fukuoka.html", wait_until="networkidle")
    pg.evaluate("document.querySelectorAll('img').forEach(i=>i.loading='eager')")  # 不然截到一半是空的
    pg.screenshot(path="out.png", full_page=True); b.close()
```

本地起站：`python3 -m http.server 8801`（在本資料夾內）。**截圖出來一定要用 Read 工具親眼看**——
回 0、沒紅字、沒例外，三件加起來都不等於版面是對的。

> ⚠️ **2026-09-14 更正**：原本寫「Playwright 裝在 ERP 專案，
> `require('/Users/williamchien/Projects/未命名檔案夾/yizhan-erp/node_modules/playwright')`」。
> 那是舊 Mac 主力機的路徑，**這台 Linux 上不存在**（2026-08-08 已單機收斂）。照著做會直接找不到模組。

## 待辦
- 全站深淺統一（首頁深色、內頁仍淺色）。
- 其餘各國專屬產品頁（目前只有越南）。
- 全站手機版走查。


## 模型編排（全局規矩，本專案適用）

> 本專案遵循 `~/Projects/CLAUDE.md` 的「模型編排」章節（SSOT，規則以那份為準）。
> 口訣：**會後悔的題找 Fable，日常的題找 Opus，動手的活丟 MiniMax。**
> 開工先判斷這題的錯誤成本：拆錯全盤重來的決策 → 編排者用 Fable 5（effort 拉高）；日常改版面/研究功能/修 bug → Opus 編排；機械執行照工單丟 MiniMax（走 venturo-dispatch）；高風險決策用 Opus 平行出第二意見。
