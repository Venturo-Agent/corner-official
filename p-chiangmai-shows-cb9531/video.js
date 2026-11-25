// 本案影片點播：各頁右下角按鈕，點了在原頁全螢幕播放廠商原片（YouTube 嵌入），不另存轉放
;(() => {
  if (new URLSearchParams(location.search).has('static')) return
  const css = document.createElement('style')
  css.textContent = `
#vbar{position:fixed;right:12px;bottom:12px;z-index:9000;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;max-width:calc(100vw - 24px)}
#vbar button{font:600 15px/1.2 "Noto Sans TC",sans-serif;color:#fff;background:#1f6f68;border:0;border-radius:999px;padding:11px 16px;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.35)}
#vbar button::before{content:"";display:inline-block;border-left:10px solid #fff;border-top:6px solid transparent;border-bottom:6px solid transparent;margin-right:8px;vertical-align:-1px}
#vbox{position:fixed;inset:0;z-index:9500;background:rgba(0,0,0,.93);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px}
#vbox iframe{width:min(96vw,calc(82vh * 16 / 9));aspect-ratio:16/9;border:0;background:#000}
#vbox p{margin:0;display:flex;gap:20px;align-items:center;font:15px/1.4 "Noto Sans TC",sans-serif}
#vbox a{color:#cfe}
#vbox button{font:600 15px "Noto Sans TC",sans-serif;background:#fff;color:#111;border:0;border-radius:999px;padding:10px 24px;cursor:pointer}`
  document.head.append(css)
  const bar = document.createElement('div'); bar.id = 'vbar'; document.body.append(bar)
  let box = null
  const close = () => { box?.remove(); box = null }
  const open = v => {
    close()
    box = document.createElement('div'); box.id = 'vbox'
    const player = document.createElement('iframe')
    player.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture'; player.allowFullscreen = true
    player.referrerPolicy = 'strict-origin-when-cross-origin'
    player.src = `https://www.youtube-nocookie.com/embed/${v.yt}?autoplay=1&playsinline=1&rel=0`
    player.title = v.label
    const row = document.createElement('p'), back = document.createElement('button'), link = document.createElement('a')
    back.textContent = '關閉'; back.onclick = close
    link.textContent = '無法播放時開原片'; link.target = '_blank'; link.rel = 'noopener'
    link.href = `https://youtu.be/${v.yt}`
    row.append(back, link); box.append(player, row)
    box.onclick = e => { if (e.target === box) close() }
    document.body.append(box)
  }
  const show = index => {
    close()
    const list = window.DATA.pages[index]?.videos || []
    bar.replaceChildren(...list.map(v => {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = v.label
      b.onclick = e => { e.stopPropagation(); open(v) }
      return b
    }))
  }
  // 播放中方向鍵不翻頁，Esc 只關影片
  addEventListener('keydown', e => { if (!box) return; e.stopImmediatePropagation(); if (e.key === 'Escape') close() }, true)
  addEventListener('masters:page', e => show(e.detail.page))
  show(window.M?.presentation?.current || 0)
})()
