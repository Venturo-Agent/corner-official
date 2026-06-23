# 角落旅行社 CORNER TRAVEL — 官網

角落旅行社的對外行銷官網（純靜態，HTML/CSS/JS）。

🌐 **線上：** https://venturo-agent.github.io/corner-travel-preview/

## 開發 / 部署
這個資料夾就是 GitHub repo，改完直接推就上線：

```bash
git add -A
git commit -m "你的說明"
git push origin main      # → GitHub Pages 自動部署
```

本機預覽：用瀏覽器直接開 `index.html` 即可（或 `python3 -m http.server` 起本地伺服器）。

## 結構
| 檔案 | 說明 |
|---|---|
| `index.html` | 首頁 |
| `moments.html` | 目的地影片格牆 |
| `destination-vietnam.html` | 越南產品頁 |
| `tour-fuji.html` | 富士山登頂 5D4N 行程頁 |
| `corner.css` / `corner.js` / `corner-gsap.js` | 共用樣式 / 互動 / GSAP 動態 |
| `assets/photos/` | 照片 |
| `_archive/` | 探索用 demo（不上線） |

詳見 `CLAUDE.md`。
