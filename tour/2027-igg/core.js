/* 投影母片核心（2026-10-07）
   版本＝一個小檔（variants/<頁型>/<名稱>.js）呼叫 M.add(頁型, 名稱, {name, range:[最少,最多], html(ctx)})。
   html(ctx) 依 ctx.n（這一頁有幾項）算出每一塊的位置——不是畫死的圖。規格見 CONTRACT.md。
   這支負責：讀 DATA、決定每頁用哪個版本、編輯面板（換版／加減項目／改字）、翻頁與平滑轉場。 */
(function () {
  const TYPES = { cover: '封面', toc: '目錄', flight: '航班資訊', route: '航線聚焦', overview: '每日總覽', day: '每日行程', spot: '景點介紹', stay: '住宿', food: '餐食', notice: '注意事項', qa: '常見問題', end: '結尾', company: '公司介紹', proposal: '方案比較' }
  const REG = {}
  const M = window.M = { TYPES, REG, add(type, id, def) { (REG[type] = REG[type] || {})[id] = { id, range: [0, 99], ...def } } }

  // ── 共用小工具（版本檔都用這些，不要各寫一套）──
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
  const len = s => [...String(s ?? '')].reduce((a, c) => a + (/[\x00-\xff]/.test(c) ? .55 : 1), 0)
  const fit = (s, w, base, min = 18) => Math.max(min, Math.min(base, Math.floor(w / (Math.max(1, len(s)) * 1.06))))
  const no = i => String(i + 1).padStart(2, '0')
  function sector(cx, cy, r0, r1, a, b) {
    const p = (r, d) => [cx + r * Math.cos(d * Math.PI / 180), cy + r * Math.sin(d * Math.PI / 180)], lg = b - a > 180 ? 1 : 0
    const [x0, y0] = p(r1, a), [x1, y1] = p(r1, b), [x2, y2] = p(r0, b), [x3, y3] = p(r0, a)
    return `M${x0},${y0}A${r1},${r1} 0 ${lg} 1 ${x1},${y1}L${x2},${y2}A${r0},${r0} 0 ${lg} 0 ${x3},${y3}Z`
  }
  const arcEdge = (reach, R, cyk) => { const cx = 1920 * reach - R, cy = 1080 * cyk; return y => cx + Math.sqrt(Math.max(0, R * R - (y - cy) ** 2)) }
  const arcPanel = (reach, R, cyk) => { const e = arcEdge(reach, R, cyk); let d = 'M-10,-40'; for (let y = -40; y <= 1120; y += 20) d += ` L${e(y).toFixed(1)},${y}`; return d + ' L-10,1120 Z' }
  const arcLine = (reach, R, cyk, sh) => { const e = arcEdge(reach, R, cyk); let d = ''; for (let y = -40; y <= 1120; y += 20) d += `${d ? ' L' : 'M'}${(e(y) + sh).toFixed(1)},${y}`; return d }
  M.util = { esc, len, fit, no, sector, arcPanel, arcLine }

  // Swiss shared baseline: reduce excess type sizes without enlarging a box or
  // rewriting any content. Three contiguous bands, chosen by least log-size loss.
  // Grid/negative space/palette are measured by verify.py, never forced over photos.
  M.swiss = { columns: 6, margin: 120, levels: 3, families: 2 }
  const swissStyle = document.createElement('style')
  swissStyle.textContent = '.slide{--sw-columns:6;--sw-margin:120px;--sw-column:280px;--sw-small:24px;--sw-body:40px;--sw-title:96px}'
  document.head.append(swissStyle)
  M.applySwiss = root => {
    const els = [...root.querySelectorAll('*')].filter(e =>
      !e.closest('style,script,svg') && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()))
    const original = els.map(e => ({e, size:parseFloat(getComputedStyle(e).fontSize), family:getComputedStyle(e).fontFamily}))
    const sizes = [...new Set(original.map(x => x.size))].sort((a,b) => a-b)
    if (sizes.length > M.swiss.levels) {
      const count=sizes.length, memo=new Map()
      function best(start, groups) {
        if (start === count) return {cost:groups === 0 ? 0 : Infinity, cuts:[]}
        if (!groups) return {cost:Infinity,cuts:[]}
        const key=start+':'+groups; if(memo.has(key)) return memo.get(key)
        let answer={cost:Infinity,cuts:[]}, cost=0
        for(let end=start;end<=count-groups;end++) {
          cost+=Math.log(sizes[end]/sizes[start])**2
          // Last group, or recursively allocate remaining groups.
          const rest=groups===1 ? {cost:end===count-1?0:Infinity,cuts:[]} : best(end+1,groups-1)
          if(cost+rest.cost<answer.cost) answer={cost:cost+rest.cost,cuts:[[start,end],...rest.cuts]}
        }
        memo.set(key,answer); return answer
      }
      const bands=best(0,M.swiss.levels).cuts
      for(const x of original) {
        const band=bands.find(([a,b])=>x.size>=sizes[a]&&x.size<=sizes[b])
        if(band) x.e.style.fontSize=sizes[band[0]]+'px'
      }
      root.dataset.swissTypeBefore=sizes.join(',')
      root.dataset.swissTypeAfter=bands.map(([a])=>sizes[a]).join(',')
    }
    // Align the primary horizontal heading inside its existing column. Vertical
    // type keeps its geometry and remains an explicit manual/failed audit item.
    for(const e of root.querySelectorAll('[data-k]')) {
      const cs=getComputedStyle(e)
      if(/:(title|h)$/.test(e.dataset.k||'') && cs.writingMode==='horizontal-tb' && cs.color!=='rgba(0, 0, 0, 0)' && ['center','right','end'].includes(cs.textAlign)) {
        root.dataset.swissAlignBefore=(root.dataset.swissAlignBefore||'')+e.dataset.k+';'
        e.style.textAlign='left'; e.style.display='block'; e.style.width='100%'
      }
    }
    const families=[...new Set(original.map(x=>x.family))]
    if(families.length>M.swiss.families) for(const x of original)
      x.e.style.fontFamily=/serif|garamond|playfair|bodoni|times/i.test(x.family.replace(/sans-serif/gi,'')) && !/sans|helvetica|arial/i.test(x.family) ? 'var(--serif)' : 'var(--sans)'
  }

  // ── 狀態：資料＋每頁選的版本＋改過的字（存在這台瀏覽器）──
  const D = JSON.parse(JSON.stringify(window.DATA)), P0 = JSON.parse(JSON.stringify(D.pages))
  const S = { page: 0, v: {}, text: {}, extra: {}, pages: null }
  const PREVIEW = new URLSearchParams(location.search).has('preview')
  const KEY = 'masters:' + D.meta.code
  try { if (!PREVIEW) Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')) } catch (e) {}
  if (S.pages) D.pages = S.pages
  // T04: DOM is rebuilt on every render; playback belongs to an immutable page ID.
  const played = new Set()
  let slideSerial = 0
  function ensurePageIds() {
    const seen = new Set()
    for (const p of D.pages) {
      if (typeof p._slideId !== 'string' || !p._slideId || seen.has(p._slideId)) {
        do { p._slideId = 'slide-' + (globalThis.crypto?.randomUUID?.() || Date.now() + '-' + ++slideSerial) } while (seen.has(p._slideId))
      }
      seen.add(p._slideId)
    }
  }
  // 照片改動（換圖、焦點）另存一個 key：{ '頁號:原圖路徑': { d: 換上去的圖(縮過的 dataURL), pos: 'x% y%' } }
  const IKEY = KEY + ':img'
  let IMG = {}
  try { if (!PREVIEW) IMG = JSON.parse(localStorage.getItem(IKEY) || '{}') || {} } catch (e) { IMG = {} }
  // 新增投影片：插在目前這頁後面。內容先借同一種頁的第一張（沒有就給三個空項目），使用者再改字。
  // 頁的設定（選的版本、改的字、加減的項目）都綁頁號，插入／刪除時一起位移。
  const shift = (from, d) => {
    ['v', 'extra'].forEach(k => { const o = {}; for (const [i, v] of Object.entries(S[k])) o[+i >= from ? +i + d : +i] = v; S[k] = o })
    const sk = o => Object.fromEntries(Object.entries(o).map(([k, v]) => { const [i, r] = k.split(/:(.*)/s); return [(+i >= from ? +i + d : +i) + ':' + r, v] }))
    S.text = sk(S.text); IMG = sk(IMG); saveImg()
  }
  const BLANK = /^(t|title|sub|body|kick|en|time|date)$/
  const blank = o => { if (Array.isArray(o)) return o.map(x => typeof x === 'string' ? '點此輸入' : blank(x)); if (o && typeof o === 'object') { for (const k in o) { if (BLANK.test(k) && typeof o[k] === 'string') o[k] = '點此輸入'; else if (o[k] && typeof o[k] === 'object') o[k] = blank(o[k]) } } return o }
  M.addSlide = type => { const like = P0.find(p => p.type === type), np = like ? blank(JSON.parse(JSON.stringify(like))) : { type, title: '點此輸入', items: [{ t: '點此輸入' }, { t: '點此輸入' }, { t: '點此輸入' }] }
    delete np._slideId; if (type === 'day') np.n = D.pages.filter(p => p.type === 'day').length + 1
    shift(S.page + 1, 1); D.pages.splice(S.page + 1, 0, np); S.pages = D.pages; S.page++; render() }
  M.delSlide = () => { if (D.pages.length <= 1) return; dropPage(S.page); D.pages.splice(S.page, 1); shift(S.page + 1, -1); delete S.v[S.page]; S.pages = D.pages; render() }
  const save = () => { if (PREVIEW) return; try { localStorage.setItem(KEY, JSON.stringify(S)) } catch (e) {} }
  const saveImg = () => { if (PREVIEW) return true; try { localStorage.setItem(IKEY, JSON.stringify(IMG)); return true } catch (e) { return false } }
  // 加減項目：在原資料後面接「新項目」（複製最後一項的照片），減到原資料以下就截掉
  const pageItems = (p, pi) => { const base = p.items || [], add = S.extra[pi] ?? 0; if (add < 0) return base.slice(0, Math.max(0, base.length + add)); const out = base.slice(); for (let k = 0; k < add; k++) out.push({ t: '新項目 ' + (base.length + k + 1), img: (base[base.length - 1] || {}).img || D.meta.pool[k % D.meta.pool.length] }); return out }
  // 目錄每一章 → 那一章第一頁（點目錄跳過去、轉場用）
  const CH = { '航班與集合': 'flight', '每日行程': 'overview', '景點介紹': 'spot', '住宿安排': 'stay', '在地餐食': 'food', '注意事項': 'notice', '常見問題': 'qa' }
  const chapterPage = t => D.pages.findIndex(p => p.type === CH[t])

  // 自動挑版本：能排下這個數量的版本裡，同一頁型連續出現就輪流（每天都長一樣很無聊）
  // 版本可宣告 order（數字小的先輪到）；沒宣告的排後面、照名稱。中山國小每日頁的順序就是靠這個：S 曲線→波浪→圓弧→斜切
  function variantsFor(pi) { const p = D.pages[pi], n = pageItems(p, pi).length, all = Object.values(REG[p.type] || {}).sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.id.localeCompare(b.id)); return all.map(v => ({ v, ok: (!v.accepts || v.accepts(p)) && (!p.items || (n >= v.range[0] && n <= v.range[1])) })) }
  function chosen(pi) {
    const list = variantsFor(pi), okl = list.filter(x => x.ok).map(x => x.v)
    if (S.v[pi] && okl.find(v => v.id === S.v[pi])) return okl.find(v => v.id === S.v[pi])
    // Explicit source layout: company numbers/records must not rotate into a different meaning.
    if (D.pages[pi].variant && okl.find(v => v.id === D.pages[pi].variant)) return okl.find(v => v.id === D.pages[pi].variant)
    const automatic = okl.filter(v => v.auto !== false)
    const nth = D.pages.slice(0, pi).filter(p => p.type === D.pages[pi].type).length
    return automatic[nth % Math.max(1, automatic.length)] || okl[0] || null
  }

  const stage = document.getElementById('stage'), BOX = []
  function fitStage() { const v = stage.parentElement, k = Math.min(v.clientWidth / 1920, v.clientHeight / 1080); stage.style.transform = `translate(-50%,-50%) scale(${k})` }
  addEventListener('resize', () => { cancelTransition(); if (!activePage) render(); fitStage() })
  function ctxFor(pi) {
    const p = D.pages[pi], items = pageItems(p, pi)
    const ed = (k, def, extra = '') => `<span contenteditable="${!PRESENT}" spellcheck="false" data-k="${pi}:${k}" ${extra}>${esc(S.text[pi + ':' + k] ?? def)}</span>`
    const tx = (k, def) => S.text[pi + ':' + k] ?? def
    const related = page => page < 0 ? null : { page, p: D.pages[page], items: pageItems(D.pages[page], page) }
    return { p, pi, items, n: items.length, meta: D.meta, ed, tx, BOX, util: M.util,
      first: type => related(D.pages.findIndex(q => q.type === type)),
      destination: i => related(p.type === 'toc' ? chapterPage(items[i]?.t) : p.type === 'overview' ? D.pages.findIndex(q => q.type === 'day' && q.n === i + 1) : -1),
      // 目錄的第 i 格會跳到哪一頁（轉場時那一格放大成那頁的大圖）
      target: i => p.type === 'toc' ? chapterPage(items[i]?.t) : p.type === 'overview' ? D.pages.findIndex(q => q.type === 'day' && q.n === i + 1) : -1 }
  }
  function html(pi) { const v = chosen(pi); BOX.length = 0; return v ? `<div class="slide t-${D.pages[pi].type} v-${v.id}">${v.html(ctxFor(pi))}</div>` : `<div class="slide"><div class="ab" style="left:120px;top:480px;font-size:40px;color:#b3372b">這一頁（${TYPES[D.pages[pi].type]}）還沒有排得下 ${pageItems(D.pages[pi], pi).length} 項的版本</div></div>` }

  // ── 編輯面板 ──
  const $ = id => document.getElementById(id)
  let routeCleanup = null, entrance = null, activePage = null
  // T06: one owner per rendered page; dispose before async navigation preparation.
  function leavePage() {
    const active = activePage; activePage = null
    if (active) {
      active.controller.abort()
      active.cleanup?.()
      active.variant?.onLeave?.(active.root, active.context)
    }
    entrance?.cleanup?.(); entrance = null
    routeCleanup?.(); routeCleanup = null
    stage.querySelectorAll('video,audio').forEach(v => { v.pause(); v.removeAttribute('src'); v.querySelectorAll('source').forEach(s => s.removeAttribute('src')); v.load() })
    stage.querySelectorAll('.slide').forEach(root => root.getAnimations({subtree:true}).forEach(a => { a.onfinish = null; a.cancel() }))
  }
  addEventListener('pagehide', leavePage)
  addEventListener('pageshow', e => { if (e.persisted) render() })
  document.addEventListener('visibilitychange', () => { if (document.hidden) stage.querySelectorAll('video,audio').forEach(v => v.pause()) })
  function render(enterDelay = 0) {
    cancelTransition()
    leavePage()
    ensurePageIds()
    S.page = Math.max(0, Math.min(D.pages.length - 1, Number.isInteger(S.page) ? S.page : 0))
    const pi = S.page, p = D.pages[pi], cur = chosen(pi)
    stage.innerHTML = html(pi); applyImgs(stage, pi); M.applySwiss(stage.querySelector('.slide')); drawSel()
    $('pages').innerHTML = D.pages.map((q, k) => `<button type="button" data-p="${k}" aria-current="${k === pi}"><i>${String(k + 1).padStart(2, '0')}</i>${TYPES[q.type]}${q.title ? '・' + esc(q.title).slice(0, 10) : q.type === 'day' ? '' : ''}<small>${(chosen(k) || {}).name || '—'}</small></button>`).join('')
    const vs = variantsFor(pi)
    $('vars').innerHTML = vs.length ? `<button type="button" id="vPrev" aria-label="上一個版面">‹</button><select id="vSel" aria-label="版面">${vs.map(({ v, ok }) => `<option value="${v.id}" ${ok ? '' : 'disabled'} ${cur && cur.id === v.id ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select><button type="button" id="vNext" aria-label="下一個版面">›</button>` : '<p>這種頁還沒有版本</p>'
    $('cntBlk').hidden = !p.items; $('n').textContent = pageItems(p, pi).length
    $('plus').disabled = p.type === 'proposal' && pageItems(p, pi).length >= 2
    $('minus').disabled = p.type === 'proposal' && pageItems(p, pi).length <= 1
    $('cntLab').textContent = p.type === 'toc' ? '章節數（目錄只放大標題，3～8 章）' : '這一頁的項目數'
    $('pos').textContent = `${pi + 1} / ${D.pages.length}`
    save(); fitStage()
    const root = stage.querySelector('.slide')
    root.dataset.pageId = p._slideId
    const context = ctxFor(pi), controller = new AbortController()
    activePage = { root, context, variant: cur, controller }
    activePage.cleanup = cur?.onEnter?.(root, context, { signal: controller.signal, presenting: PRESENT && !EDIT, reducedMotion: STATIC || motion.matches })
    if (cur?.mount) routeCleanup = cur.mount(root, ctxFor(pi), { delay: enterDelay })
    if (cur?.enter) {
      const key = JSON.stringify([p._slideId, cur.id])
      const settled = played.has(key) || STATIC || motion.matches || EDIT || !Element.prototype.animate
      played.add(key) // also interrupted pages return fully visible, as in the source deck
      entrance = cur.enter(root, ctxFor(pi), { settled, pageId: p._slideId, delay: enterDelay })
    }
    dispatchEvent(new CustomEvent('masters:page', { detail: { page: pi, total: D.pages.length } }))
  }
  $('pages').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (b) go(+b.dataset.p) })
  const vStep = d => { const o = [...$('vSel').options]; let i = $('vSel').selectedIndex; do { i += d } while (o[i] && o[i].disabled); if (o[i]) { S.v[S.page] = o[i].value; render() } }
  $('vars').addEventListener('click', e => { if (e.target.id === 'vPrev') vStep(-1); if (e.target.id === 'vNext') vStep(1) })
  $('vars').addEventListener('change', e => { if (e.target.id === 'vSel') { S.v[S.page] = e.target.value; render() } })
  $('print').onclick = () => { const box = document.createElement('div'), keep = BOX.slice(); box.id = 'printAll'
    D.pages.forEach((_, i) => { const s = document.createElement('section'); s.innerHTML = html(i); applyImgs(s, i); M.applySwiss(s.querySelector('.slide')); box.appendChild(s) })
    BOX.splice(0, BOX.length, ...keep); document.body.appendChild(box); addEventListener('afterprint', () => box.remove(), { once: true }); print() }
  $('plus').onclick = () => { const p = D.pages[S.page]; if (pageItems(p, S.page).length < (p.type === 'toc' ? 8 : p.type === 'proposal' ? 2 : 20)) { S.extra[S.page] = (S.extra[S.page] || 0) + 1; render() } }
  $('minus').onclick = () => { const p = D.pages[S.page]; if (pageItems(p, S.page).length > 1) { S.extra[S.page] = (S.extra[S.page] || 0) - 1; render() } }
  $('reset').onclick = () => { played.clear(); IMG = {}; saveImg(); SEL = null; S.v = {}; S.text = {}; S.extra = {}; S.pages = null; D.pages = JSON.parse(JSON.stringify(P0)); render() }
  $('addType').innerHTML = Object.entries(TYPES).filter(([k]) => REG[k]).map(([k, t]) => `<option value="${k}">${t}</option>`).join('')
  $('add').onclick = () => M.addSlide($('addType').value)
  $('del').onclick = () => M.delSlide()
  stage.addEventListener('input', e => { const k = e.target.dataset?.k; if (k) { S.text[k] = e.target.textContent; save() } })
  stage.addEventListener('blur', e => { if (e.target.dataset?.k) render() }, true)

  // T02: stable keys, multiple photos/text, continuous corner/crop interpolation.
  // Sources: _kit/kit.js:58–91; jinyang-zs115013/index.html:1098–1124; aomori/flow.html:1–200.
  const motion = matchMedia('(prefers-reduced-motion: reduce)')
  let transition = null, transitionEpoch = 0, pendingPage = null
  function cancelTransition() {
    transitionEpoch++; pendingPage = null
    if (!transition) return
    transition.animations.forEach(a => { a.onfinish = null; a.cancel() })
    transition.hidden.forEach(([el, value]) => { el.style.visibility = value })
    transition.nodes.forEach(el => el.remove()); transition = null
  }
  motion.addEventListener('change', e => { if (e.matches) { entrance?.finish?.(); const to = pendingPage; cancelTransition(); if (to !== null) { S.page = to; render() } } })
  const navigationPage = () => pendingPage ?? S.page
  function sharedSnapshot(root) {
    const out = new Map(), duplicate = new Set(), sr = stage.getBoundingClientRect(), k = sr.width / 1920
    for (const el of root.querySelectorAll('[data-shared]')) {
      const key = el.dataset.shared
      if (!key || el.parentElement.closest('[data-shared]')) continue
      if (out.has(key)) { duplicate.add(key); continue }
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el)
      if (!r.width || !r.height || cs.display === 'none') continue
      const w = r.width / k, h = r.height / k
      const radius = name => {
        const v = cs[name].split(' '), x = v[0], y = v[1] || x
        return `${Math.min(w / 2, parseFloat(x) * (x.endsWith('%') ? w / 100 : 1))}px ${Math.min(h / 2, parseFloat(y) * (y.endsWith('%') ? h / 100 : 1))}px`
      }
      const frame = { left: (r.left - sr.left) / k + 'px', top: (r.top - sr.top) / k + 'px', width: w + 'px', height: h + 'px',
        borderTopLeftRadius: radius('borderTopLeftRadius'), borderTopRightRadius: radius('borderTopRightRadius'),
        borderBottomRightRadius: radius('borderBottomRightRadius'), borderBottomLeftRadius: radius('borderBottomLeftRadius'),
        objectPosition: cs.objectPosition, fontSize: cs.fontSize, lineHeight: cs.lineHeight, color: cs.color }
      out.set(key, { el, frame, css: cs.cssText, font: cs.fontFamily, weight: cs.fontWeight, spacing: cs.letterSpacing,
        fit: cs.objectFit, src: el.tagName === 'IMG' ? el.currentSrc || el.src : null, text: el.textContent })
    }
    duplicate.forEach(key => out.delete(key))
    return out
  }
  async function go(to) {
    if (!Number.isInteger(to)) return
    to = Math.max(0, Math.min(D.pages.length - 1, to))
    cancelTransition()
    if (to === S.page) { if (!activePage) render(); return }
    leavePage()
    const box = BOX.find(b => b && b.to === to)
    if (motion.matches || STATIC || EDIT || !Element.prototype.animate) { S.page = to; render(); return }
    // Prepare/decode the destination while the current page remains visible.
    const epoch = transitionEpoch, ghost = document.createElement('div')
    pendingPage = to
    ghost.style.cssText = 'position:absolute;inset:0;visibility:hidden;pointer-events:none'
    const boxes = BOX.slice()
    ghost.innerHTML = html(to); BOX.splice(0, BOX.length, ...boxes); applyImgs(ghost, to)
    ghost.querySelectorAll('*').forEach(el => { el.style.animation = 'none' })
    stage.appendChild(ghost)
    transition = { animations: [], hidden: [], nodes: [ghost] }
    let timer
    await Promise.race([Promise.all([...ghost.querySelectorAll('img')].map(im => im.decode().catch(() => {}))), new Promise(resolve => { timer = setTimeout(resolve, 1200) })])
    clearTimeout(timer)
    if (epoch !== transitionEpoch) return
    // Showreel opt-in: reuse the shared transition owner/cancellation and the page enter hook.
    const tricolor = q.get('transition') === 'showreel-tricolor' || chosen(to)?.chapterTransition === 'showreel-tricolor' || chosen(S.page)?.chapterTransition === 'showreel-tricolor'
    if (tricolor && M.showreel && D.pages[S.page].type !== D.pages[to].type) {
      const outgoing = stage.querySelector('.slide').cloneNode(true)
      outgoing.setAttribute('aria-hidden', 'true'); outgoing.inert = true
      outgoing.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:20'
      outgoing.querySelectorAll('*').forEach(el => { el.style.animation = 'none' })
      S.page = to; render(8000 / 30)
      const overlay = document.createElement('div')
      overlay.dataset.showreelWipe = 'true'
      overlay.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:21'
      const state = transition = { animations: [], hidden: [], nodes: [outgoing, overlay] }
      stage.append(outgoing, overlay)
      const start = document.timeline.currentTime, duration = 16000 / 30
      const old = outgoing.animate([{visibility:'visible',offset:0},{visibility:'visible',offset:.4999},{visibility:'hidden',offset:.5},{visibility:'hidden',offset:1}], {duration,fill:'both'})
      old.startTime=start; state.animations.push(old)
      ;['var(--acc3)','var(--acc2)','var(--acc)'].forEach((color,i) => {
        const band = document.createElement('div')
        band.style.cssText = `position:absolute;left:0;top:-40%;height:180%;width:150%;background:${color}`
        overlay.appendChild(band)
        const a = band.animate(M.showreel.wipeFrames(i), {duration,easing:'linear',fill:'both'})
        a.startTime=start;state.animations.push(a)
      })
      state.animations.at(-1).onfinish = () => { if (transition === state) cancelTransition() }
      return
    }
    const old = stage.querySelector('.slide'), from = sharedSnapshot(old), destination = sharedSnapshot(ghost)
    const pairs = [...destination].filter(([key, b]) => {
      const a = from.get(key)
      return a && a.el.tagName === b.el.tagName && (a.src ? a.src === b.src : a.text === b.text)
    }).map(([key, b]) => [from.get(key), b, key])
    // Unmarked legacy versions retain BOX → hero, including SVG-based layouts.
    if (!pairs.length && box && !chosen(to)?.enter && (!from.size || !destination.size)) {
      const hero = ghost.querySelector('img.hero')
      if (hero) {
        hero.dataset.shared = '__legacy'
        const b = sharedSnapshot(ghost).get('__legacy')
        if (b) pairs.push([{ ...b, frame: { ...b.frame, left: box.x + 'px', top: box.y + 'px', width: box.w + 'px', height: box.h + 'px', borderTopLeftRadius:'8px', borderTopRightRadius:'8px', borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px' } }, b, '__legacy'])
      }
    }
    const outgoing = old.cloneNode(true)
    outgoing.setAttribute('aria-hidden', 'true'); outgoing.inert = true
    outgoing.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:10'
    outgoing.querySelectorAll('*').forEach(el => { el.style.animation = 'none' })
    // Hide only paired old elements; unpaired photos remain until the new page is visible.
    outgoing.querySelectorAll('[data-shared]').forEach(el => { if (pairs.some(p => p[2] === el.dataset.shared)) el.style.visibility = 'hidden' })
    S.page = to; render() // cancels the preparation and mounts the real destination once
    if (!pairs.length) return
    const incoming = stage.querySelector('.slide'), actual = sharedSnapshot(incoming)
    const state = transition = { animations: [], hidden: [], nodes: [outgoing] }
    stage.appendChild(outgoing)
    const animate = (el, frames, options) => { const a = el.animate(frames, options); state.animations.push(a); return a }
    const timing = { duration: 900, easing: 'cubic-bezier(.45,0,.2,1)', fill: 'both' }
    animate(outgoing, [{ opacity: 1 }, { opacity: 0 }], { duration: 650, fill: 'both' })
    outgoing.querySelectorAll('[data-shared-copy], [data-shared]:not(img)').forEach(el => {
      animate(el, [{opacity:1}, {opacity:0}], {duration:180, fill:'both'})
    })
    for (const [a, b, key] of pairs) {
      const target = key === '__legacy' ? incoming.querySelector('img.hero') : actual.get(key)?.el
      if (!target) continue
      state.hidden.push([target, target.style.visibility]); target.style.visibility = 'hidden'
      const fly = a.el.cloneNode(true)
      fly.removeAttribute('id'); fly.removeAttribute('data-shared'); fly.setAttribute('aria-hidden', 'true'); fly.inert = true
      fly.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'))
      fly.style.cssText = 'position:absolute;margin:0;padding:0;border:0;max-width:none;max-height:none;pointer-events:none;overflow:hidden;transform:none;animation:none;visibility:visible'
      Object.assign(fly.style, a.frame, { zIndex: a.src ? 11 : 12, objectFit: a.fit, fontFamily: a.font, fontWeight: a.weight, letterSpacing: a.spacing })
      fly.dataset.transitionKey = key
      state.nodes.push(fly); stage.appendChild(fly)
      animate(fly, [a.frame, b.frame], timing)
    }
    // Independent incoming text; never fade the whole page to white.
    incoming.querySelectorAll('[data-shared-copy]').forEach(el => {
      if (!el.querySelector('[data-shared]') && !el.closest('[data-shared]')) animate(el, [{opacity:0, transform:'translateY(18px)'}, {opacity:1, transform:'none'}], {duration:300, delay:200, fill:'both'})
    })
    const last = state.animations.find(a => a.effect.getTiming().duration === 900)
    if (last) last.onfinish = () => { if (transition === state) cancelTransition() }
    else cancelTransition()
  }
  M.box = (i, x, y, w, h, to, img) => { BOX[i] = { x, y, w, h, to, img } }
  addEventListener('keydown', e => { if (e.target.isContentEditable || e.target.closest('video,audio,input,select')) return; if (['ArrowRight', 'PageDown'].includes(e.key)) go(navigationPage() + 1); if (['ArrowLeft', 'PageUp'].includes(e.key)) go(navigationPage() - 1) })
  stage.addEventListener('click', e => { if (e.target.isContentEditable || e.target.closest('video,audio,button')) return
    const r = stage.getBoundingClientRect(), k = r.width / 1920, x = (e.clientX - r.left) / k, y = (e.clientY - r.top) / k
    if (EDIT) return
    const b = BOX.find(b => b && b.to >= 0 && x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h); if (b) go(b.to) })

  // 網址參數（驗收程式用）：?page=頁號&v=版本&n=項目數&static=1
  const q = new URLSearchParams(location.search), STATIC = PREVIEW || q.has('static')
  let PRESENT = PREVIEW || !(q.has('studio') || q.has('edit'))  // 客戶連結預設純放映；內部編輯加 ?studio=1
  $('presentTog').onclick = () => { if (EDIT) setEdit(false); PRESENT = !PRESENT; syncMode(); render() }
  function syncMode() { $('presentTog').textContent = PRESENT ? '回到編輯' : '開始放映'; $('presentTog').setAttribute('aria-pressed', PRESENT); document.body.classList.toggle('present', PRESENT); document.querySelector('.hint').textContent = PRESENT ? '翻頁 ← →　·　S 講者視窗　·　O 總覽　·　Esc 回到編輯' : '翻頁 ← →　·　點字修改　·　目錄／總覽點一格＝跳到那頁' }
  syncMode()
  $('motionTog').textContent = STATIC ? '開啟頁面動畫' : '收起頁面動畫'
  $('motionTog').onclick = () => { leavePage(); cancelTransition(); const u = new URL(location.href); if (STATIC) u.searchParams.delete('static'); else u.searchParams.set('static','1'); u.searchParams.set('page', S.page); ['fresh','v','n','continuity','storyboard','edit'].forEach(k => u.searchParams.delete(k)); if(PRESENT) u.searchParams.set('present','1'); else u.searchParams.delete('present'); location.href = u.href }
  if (STATIC) document.head.insertAdjacentHTML('beforeend', '<style>.slide *{animation:none!important;transition:none!important}</style>')
  if (q.has('fresh')) { IMG = {}; S.v = {}; S.text = {}; S.extra = {}; S.pages = null; D.pages = JSON.parse(JSON.stringify(P0)) }
  if (q.has('storyboard')) D.pages.forEach((p, i) => { if (['cover', 'day', 'stay'].includes(p.type)) S.v[i] = 'storyboard' })
  if (q.has('continuity') || !q.has('classic')) D.pages.forEach((p, i) => { if (['cover', 'toc', 'overview', 'day', 'spot'].includes(p.type) && (q.has('continuity') || !S.v[i])) S.v[i] = 'continuity' })
  if (q.has('page')) S.page = +q.get('page')
  if (q.has('n')) { const p = D.pages[S.page]; S.extra[S.page] = +q.get('n') - (p.items || []).length }
  if (q.has('v')) S.v[S.page] = q.get('v')

  // ══ 全編輯模式（2026-10-11）：點照片選取 → 換圖（選檔／拖進來）、在照片上拖曳＝調焦點（object-position）；
  //    改動都存這台瀏覽器（localStorage），可還原、可匯出／匯入 JSON。照片是 DOM 裡的真 <img>／SVG <image>。 ══
  const OK_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], MAX_FILE = 20 * 1024 * 1024, MAX_PX = 60e6, MAX_SIDE = 1920, MAX_OUT = 1.5 * 1024 * 1024
  let EDIT = false, SEL = null   // SEL＝選到的照片鍵 '頁號:原圖路徑'
  const msg = (t, bad) => { const m = $('msg'); if (m) { m.textContent = t; m.dataset.bad = bad ? '1' : '' } }
  const srcOf = el => el.tagName === 'image' ? (el.getAttribute('href') || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href')) : el.getAttribute('src')
  const imgEls = root => [...root.querySelectorAll('img, image')]
  const keyOf = (pi, el) => pi + ':' + el.dataset.orig
  function applyImgs(root, pi) {
    for (const el of imgEls(root)) {
      if (el.dataset.orig == null) el.dataset.orig = srcOf(el) ?? ''
      const o = IMG[keyOf(pi, el)]; if (!o) continue
      if (o.d) { if (el.tagName === 'image') el.setAttribute('href', o.d); else el.src = o.d }
      if (o.pos && el.tagName !== 'image') el.style.objectPosition = o.pos
    }
    if (root === stage) imgEls(root).forEach(el => { el.draggable = false })
  }
  const dropPage = pi => { for (const k of Object.keys(IMG)) if (k.startsWith(pi + ':')) delete IMG[k]; for (const k of Object.keys(S.text)) if (k.startsWith(pi + ':')) delete S.text[k]; saveImg() }
  const selEl = () => SEL && imgEls(stage).find(el => keyOf(S.page, el) === SEL)
  function drawSel() {
    document.getElementById('selbox')?.remove()
    const el = EDIT && selEl(); if (!el) { if (!el) $('imgTools') && ($('imgTools').hidden = true); return }
    const r = el.getBoundingClientRect(), s = stage.getBoundingClientRect(), k = s.width / 1920
    const d = document.createElement('div'); d.id = 'selbox'
    d.style.cssText = `position:absolute;pointer-events:none;z-index:50;left:${(r.left - s.left) / k}px;top:${(r.top - s.top) / k}px;width:${r.width / k}px;height:${r.height / k}px;outline:6px solid #c9921c;outline-offset:-6px`
    stage.appendChild(d); $('imgTools').hidden = false
    const o = IMG[SEL]; $('imgRst').disabled = !o; $('focusInfo').textContent = el.tagName === 'image' ? '（這張是向量框裡的圖，只能換圖，不能調焦點）' : '在照片上拖曳＝調整要露出哪一塊。目前焦點：' + (el.style.objectPosition || getComputedStyle(el).objectPosition)
  }
  // 點到哪張照片：先看最上層（跳過沒有 pointer 的疊色層），文字優先
  function imgAt(cx, cy) {
    const top = document.elementsFromPoint(cx, cy)
    for (const el of top) { if (el.isContentEditable) return null; if (el.tagName === 'img' || el.tagName === 'IMG' || el.tagName === 'image') return stage.contains(el) ? el : null }
    const hit = imgEls(stage).filter(el => { const r = el.getBoundingClientRect(); return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom })
    return hit.sort((a, b) => a.getBoundingClientRect().width * a.getBoundingClientRect().height - b.getBoundingClientRect().width * b.getBoundingClientRect().height)[0] || null
  }
  function setEdit(on) {
    if (on) { PRESENT = false; syncMode(); entrance?.finish?.(); cancelTransition() }
    EDIT = on; document.body.classList.toggle('edit', on); $('editTog').textContent = on ? '結束編輯（回到簡報）' : '開始編輯照片'
    $('editTog').setAttribute('aria-pressed', on); if (!on) SEL = null; drawSel()
    render()
    msg(on ? '編輯中：點照片選取；拖曳調焦點；點選後按「換這張圖」，或把圖檔直接拖到照片上。' : '')
  }
  // 檢查＋縮圖：擋非圖片、太大、打不開、像素爆量；輸出控制在 1.5MB 內
  async function prep(file) {
    if (!file) throw new Error('沒有收到檔案')
    if (!OK_TYPES.includes(file.type)) throw new Error('這不是可用的圖片（只收 JPG／PNG／WebP／GIF）：' + (file.name || '') + (file.type ? '（' + file.type + '）' : ''))
    if (file.size > MAX_FILE) throw new Error('檔案太大（' + (file.size / 1048576).toFixed(1) + 'MB），上限 20MB，請先縮小再放進來')
    if (file.size < 100) throw new Error('檔案幾乎是空的，打不開')
    let bmp; try { bmp = await createImageBitmap(file) } catch (e) { throw new Error('這個檔案打不開，可能副檔名是圖片但內容不是') }
    if (bmp.width * bmp.height > MAX_PX) { bmp.close?.(); throw new Error('圖的像素太多（' + bmp.width + '×' + bmp.height + '），請先縮小') }
    let side = MAX_SIDE, q = .86, out
    for (let t = 0; t < 4; t++) {
      const k = Math.min(1, side / Math.max(bmp.width, bmp.height)), c = document.createElement('canvas')
      c.width = Math.max(1, Math.round(bmp.width * k)); c.height = Math.max(1, Math.round(bmp.height * k))
      c.getContext('2d').drawImage(bmp, 0, 0, c.width, c.height)
      out = file.type === 'image/png' && t === 0 ? c.toDataURL('image/png') : ''
      if (!out || out.length * .75 > MAX_OUT) out = c.toDataURL('image/jpeg', q)
      if (out.length * .75 <= MAX_OUT) break
      side = Math.round(side * .75); q -= .08
    }
    bmp.close?.()
    if (out.length * .75 > MAX_OUT * 1.6) throw new Error('縮過之後還是太大，請換一張')
    return out
  }
  async function putImage(el, file) {
    const key = keyOf(S.page, el)
    try {
      const d = await prep(file), old = IMG[key]
      IMG[key] = { ...(old || {}), d }
      if (!saveImg()) { if (old) IMG[key] = old; else delete IMG[key]; saveImg(); throw new Error('瀏覽器存不下了（已存太多圖）。先「還原」幾張，或匯出 JSON 備份') }
      SEL = key; render(); msg('已換圖（' + Math.round(d.length * .75 / 1024) + ' KB，已自動縮到合適大小）')
    } catch (e) { msg(e.message, true) }
  }
  function pickFor() { const el = selEl(); if (!el) return msg('先點一張照片', true); $('file').value = ''; $('file').onchange = () => { const f = $('file').files[0]; if (f) putImage(el, f) }; $('file').click() }
  $('editTog').onclick = () => setEdit(!EDIT)
  $('imgPick').onclick = pickFor
  $('imgRst').onclick = () => { if (SEL && IMG[SEL]) { delete IMG[SEL]; saveImg(); render(); msg('這張照片已還原') } }
  $('pageRst').onclick = () => { dropPage(S.page); render(); msg('這一頁的字與照片已還原') }
  // 拖曳＝調焦點；沒移動就是選取（雙擊＝直接開選檔）
  let DRAG = null
  stage.addEventListener('pointerdown', e => {
    if (!EDIT || e.button !== 0) return
    const el = imgAt(e.clientX, e.clientY); if (!el) { if (!e.target.isContentEditable) { SEL = null; drawSel() } return }
    e.preventDefault(); const key = keyOf(S.page, el), cs = getComputedStyle(el), pp = (el.style.objectPosition || cs.objectPosition).split(/\s+/).map(v => parseFloat(v))
    DRAG = { el, key, x: e.clientX, y: e.clientY, px: isNaN(pp[0]) ? 50 : pp[0], py: isNaN(pp[1]) ? 50 : pp[1], moved: false, cover: cs.objectFit === 'cover' && el.tagName !== 'image' }
  })
  addEventListener('pointermove', e => {
    if (!DRAG) return; const D0 = DRAG, dx = e.clientX - D0.x, dy = e.clientY - D0.y
    if (!D0.moved && Math.hypot(dx, dy) < 5) return; D0.moved = true
    if (!D0.cover) return
    const k = stage.getBoundingClientRect().width / 1920, w = D0.el.clientWidth, h = D0.el.clientHeight, nw = D0.el.naturalWidth, nh = D0.el.naturalHeight
    if (!nw || !nh) return
    const sc = Math.max(w / nw, h / nh), ox = nw * sc - w, oy = nh * sc - h, cl = v => Math.max(0, Math.min(100, v))
    const px = ox > 1 ? cl(D0.px - dx / k / ox * 100) : D0.px, py = oy > 1 ? cl(D0.py - dy / k / oy * 100) : D0.py
    D0.pos = px.toFixed(1) + '% ' + py.toFixed(1) + '%'; D0.el.style.objectPosition = D0.pos
  })
  addEventListener('pointerup', () => {
    if (!DRAG) return; const D0 = DRAG; DRAG = null
    if (D0.moved) {
      if (!D0.cover) { msg('這張圖的排法不是填滿式，不能調焦點（可以換圖）', true); render(); return }
      if (D0.pos) { IMG[D0.key] = { ...(IMG[D0.key] || {}), pos: D0.pos }; if (!saveImg()) msg('瀏覽器存不下了', true) }
    }
    SEL = D0.key; drawSel()
  })
  stage.addEventListener('dblclick', e => { if (!EDIT) return; const el = imgAt(e.clientX, e.clientY); if (el) { SEL = keyOf(S.page, el); drawSel(); pickFor() } })
  // 拖檔案進來：丟在哪張照片上就換哪張
  addEventListener('dragover', e => { if (EDIT && e.dataTransfer?.types?.includes('Files')) { e.preventDefault(); const el = stage.contains(e.target) || e.target === stage ? imgAt(e.clientX, e.clientY) : null; e.dataTransfer.dropEffect = el ? 'copy' : 'none' } })
  addEventListener('drop', e => {
    if (!EDIT || !e.dataTransfer?.files?.length) return; e.preventDefault()
    const el = imgAt(e.clientX, e.clientY); if (!el) return msg('請把圖檔丟在簡報裡的某張照片上', true)
    SEL = keyOf(S.page, el); putImage(el, e.dataTransfer.files[0])
  })
  // 貼上文字一律純文字（不帶進網頁的字型與顏色）
  stage.addEventListener('paste', e => { if (!e.target.isContentEditable) return; e.preventDefault(); document.execCommand('insertText', false, (e.clipboardData.getData('text/plain') || '').replace(/\s*\n\s*/g, ' ')) })
  // 匯出／匯入
  $('exp').onclick = () => {
    const blob = new Blob([JSON.stringify({ format: 'masters-edit-v1', code: D.meta.code, saved: new Date().toISOString(), S, IMG })], { type: 'application/json' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'masters-' + D.meta.code + '-edit.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); msg('已匯出（含換上去的照片）')
  }
  $('imp').onclick = () => { $('file').value = ''; $('file').onchange = async () => {
    const f = $('file').files[0]; if (!f) return
    try {
      if (f.size > 60 * 1024 * 1024) throw new Error('匯入檔太大')
      const j = JSON.parse(await f.text())
      if (j.format !== 'masters-edit-v1' || j.code !== D.meta.code || typeof j.S !== 'object' || typeof j.IMG !== 'object') throw new Error('這不是這份簡報的匯出檔')
      for (const [k, v] of Object.entries(j.IMG)) if (!/^\d+:/.test(k) || (v.d && !/^data:image\/(jpeg|png|webp|gif);base64,/.test(v.d)) || (v.pos && !/^[\d.]+% [\d.]+%$/.test(v.pos))) throw new Error('匯入檔裡有不合格的照片資料')
      const keep = { ...IMG }; IMG = j.IMG; if (!saveImg()) { IMG = keep; saveImg(); throw new Error('瀏覽器存不下這個匯入檔') }
      played.clear(); Object.assign(S, { v: {}, text: {}, extra: {}, pages: null }, j.S); D.pages = S.pages || JSON.parse(JSON.stringify(P0)); render(); msg('已匯入')
    } catch (e) { msg(e.message || '匯入失敗', true) }
  }; $('file').click() }
  if (q.has('edit')) { EDIT = true; PRESENT = false; document.body.classList.add('edit'); syncMode(); $('editTog').textContent = '結束編輯（回到簡報）'; $('editTog').setAttribute('aria-pressed','true') }
  M.edit = { get on() { return EDIT }, imgs: () => IMG, prep }
  // T05: narrow presentation adapter; preview frames never read/write editor storage.
  M.presentation = {
    get preview() { return PREVIEW },
    get current() { return S.page },
    get total() { return D.pages.length },
    go, step: d => go(navigationPage() + d),
    present(on = true) { if (EDIT) setEdit(false); PRESENT = on; syncMode(); render() },
    subscribe(fn) { addEventListener('masters:page', fn); return () => removeEventListener('masters:page', fn) },
    page(pi) {
      if (!D.pages[pi]) return null
      const boxes = BOX.slice(), root = document.createElement('div')
      try { root.innerHTML = html(pi); applyImgs(root, pi) } finally { BOX.splice(0, BOX.length, ...boxes) }
      const p = D.pages[pi], text = [...root.querySelectorAll('[data-k]')].map(e => e.textContent.trim()).filter(Boolean)
      const explicit = Array.isArray(p.notes) ? p.notes.filter(x => typeof x === 'string' && x.trim()) : typeof p.notes === 'string' && p.notes.trim() ? [p.notes] : null
      const im = root.querySelector('img, image')
      return { title: String(S.text[pi + ':title'] ?? p.title ?? TYPES[p.type]), notes: explicit || [...new Set(text)], image: im ? srcOf(im) : null }
    },
    snapshot(pi) {
      if (pi < 0 || pi >= D.pages.length) return null
      return JSON.parse(JSON.stringify({ mastersPreview: true, D, S: { ...S, page: pi }, IMG }))
    }
  }
  if (PREVIEW) {
    document.body.classList.add('preview')
    addEventListener('message', e => {
      if (e.source !== parent || e.origin !== (location.protocol === 'file:' ? 'null' : location.origin) || !e.data?.mastersPreview) return
      const data = e.data
      if (!Array.isArray(data.D?.pages) || !Number.isInteger(data.S?.page)) return
      D.pages = data.D.pages; D.meta = data.D.meta; Object.assign(S, data.S); IMG = data.IMG || {}; render()
    })
    addEventListener('keydown', e => e.stopImmediatePropagation(), true)
  }
  M.start = () => {
    $('addType').innerHTML = Object.entries(TYPES).filter(([k]) => REG[k]).map(([k,t]) => `<option value="${k}">${t}</option>`).join('')
    render()
  }
  M.info = () => D.pages.map((p, k) => ({ page: k, type: p.type, n: pageItems(p, k).length, variants: variantsFor(k).map(x => ({ id: x.v.id, ok: x.ok, range: x.v.range })) }))
})()
