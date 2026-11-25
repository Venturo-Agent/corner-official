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
    // This one audited recipe measures its editable copy at its authored roles.
    // Collapsing 28/36/72/160 into three bands would shrink its body below the
    // projection floor. Other variants retain the existing normalization.
    if(root.matches?.('.t-overview.v-six-column-press')&&root.querySelector?.('[data-typography="six-column-press"][data-capacity]'))return
    // Capsule measures the full text stack at its own projection-safe sizes.
    if(root.matches?.('.t-spot.v-capsule')&&root.querySelector?.('[data-typography="capsule"][data-capacity]'))return
    if(root.matches?.('.t-spot.v-window-preserve')&&root.querySelector?.('[data-typography="window-preserve"][data-capacity]'))return
    if(root.matches?.('.t-stay.v-screen')&&root.querySelector?.('[data-typography="screen"][data-capacity]'))return
    const els = [...root.querySelectorAll('*')].filter(e => {
      if (e.closest('style,script,svg,button,.user-layer') || ![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return false
      // Match the audit's structural visibility, but keep opacity-zero entrance
      // text in the same type bands as static mode. aria-hidden alone is not visual hiding.
      if (!e.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true })) return false
      const cs = getComputedStyle(e)
      return cs.color !== 'rgba(0, 0, 0, 0)' || !!parseFloat(cs.webkitTextStrokeWidth)
    })
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
    // Alignment belongs to the authored composition (references/design.md,
    // 2026-11-04). An audit must not expand an inline title or move its axis.
    // Keep type-band normalization separate from the template's geometry.
    const families=[...new Set(original.map(x=>x.family))]
    if(families.length>M.swiss.families) for(const x of original)
      if(!x.e.closest('[data-font-preserve]'))x.e.style.fontFamily=/serif|garamond|playfair|bodoni|times/i.test(x.family.replace(/sans-serif/gi,'')) && !/sans|helvetica|arial/i.test(x.family) ? 'var(--serif)' : 'var(--sans)'
  }
  // 置中＋字距：最後一個字後面也多一格字距，整行看起來偏左；字前補同寬，字回到正中（2026-11-04 William：「謝謝觀看」沒置中）
  M.centerSpacing = root => {
    for (const e of root.querySelectorAll('*')) {
      if (e.closest('style,script,svg') || ![...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) || e.parentElement.closest('[data-cs]')) continue
      const cs = getComputedStyle(e), ls = parseFloat(cs.letterSpacing), pc = getComputedStyle(e.parentElement)
      const centered = cs.textAlign === 'center' || (pc.display.includes('flex') && (pc.flexDirection.startsWith('column') ? pc.alignItems : pc.justifyContent) === 'center')
      if (ls > 0 && centered && cs.writingMode === 'horizontal-tb') { e.style.paddingLeft = `calc(${cs.paddingLeft} + ${ls}px)`; e.dataset.cs = 1 }
    }
  }

  // HISTORY_FACTORY_BEGIN — pure, structurally shared snapshots; strings (including data URLs) stay primitives.
  function createMastersHistory({ read, restore, notify = () => {}, limit = 40, byteLimit = 24 * 1024 * 1024, now = Date.now }) {
    const share = (value, old) => {
      if (!value || typeof value !== 'object') return value
      const array = Array.isArray(value), keys = Object.keys(value)
      const compatible = old && typeof old === 'object' && Array.isArray(old) === array
      let same = compatible && Object.keys(old).length === keys.length
      const copy = array ? [] : {}
      for (const key of keys) { copy[key] = share(value[key], compatible ? old[key] : undefined); if (!compatible || copy[key] !== old[key]) same = false }
      return same ? old : copy
    }
    let entries = [], cursor = 0, group = '', stamp = 0
    const capture = old => { const value = read(); return { ...value, content: share(value.content, old?.content) } }
    entries.push(capture())
    const trim = () => {
      const size = () => { const strings = new Set(), nodes = new Set(); let bytes = 0
        const visit = value => { if (typeof value === 'string') { if (!strings.has(value)) { strings.add(value); bytes += value.length * 2 } } else if (value && typeof value === 'object' && !nodes.has(value)) { nodes.add(value); Object.values(value).forEach(visit) } }
        entries.forEach(visit); return bytes
      }
      while (entries.length > 1 && (entries.length > limit + 1 || size() > byteLimit)) { entries.shift(); cursor-- }
    }
    const api = {
      get canUndo() { return cursor > 0 }, get canRedo() { return cursor < entries.length - 1 },
      record(key = '') {
        const snapshot = capture(entries[cursor])
        if (snapshot.content === entries[cursor].content) { entries[cursor].page = snapshot.page; return false }
        const time = now(), merge = key && key === group && time - stamp < 900 && cursor === entries.length - 1 && cursor > 0
        entries.splice(cursor + 1)
        if (merge) entries[cursor] = snapshot
        else { entries.push(snapshot); cursor++ }
        group = key; stamp = time; trim(); notify(); return true
      },
      undo() { return travel(-1) }, redo() { return travel(1) }
    }
    function travel(direction) {
      const target = cursor + direction
      if (target < 0 || target >= entries.length) return false
      // restore owns persistence and rollback; never hand the mutable application our snapshots.
      const snapshot = entries[target], mutable = share(snapshot)
      if (restore(mutable) === false) return false
      cursor = target; group = ''; stamp = 0; notify(); return true
    }
    return api
  }
  // HISTORY_FACTORY_END

  // ── 狀態：資料＋每頁選的版本＋改過的字（存在這台瀏覽器）──
  const D = JSON.parse(JSON.stringify(window.DATA)), P0 = JSON.parse(JSON.stringify(D.pages))
  const S = { page: 0, v: {}, text: {}, extra: {}, pages: null }
  const PREVIEW = new URLSearchParams(location.search).has('preview')
  const KEY = 'masters:' + D.meta.code
  try { if (!PREVIEW) Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')) } catch (e) {}
  if (S.pages) D.pages = S.pages
  const visiblePages = () => D.pages.map((p,i) => p.hidden ? -1 : i).filter(i => i >= 0)
  function adjacentPage(from, direction) {
    for (let i=from+direction; i>=0 && i<D.pages.length; i+=direction) if (!D.pages[i].hidden) return i
    return -1
  }
  M.toggleSlideVisibility = i => {
    const p=D.pages[i]; if (!p) return false
    if (!p.hidden && visiblePages().length<=1) { msg('至少保留一張投影片顯示',true); return false }
    const old=p.hidden, previous=S.pages; p.hidden=!p.hidden; S.pages=D.pages
    if (!save()) { if(old===undefined) delete p.hidden; else p.hidden=old; S.pages=previous; msg('未能儲存，已保留原狀',true); return false }
    render(); return true
  }
  // T04: DOM is rebuilt on every render; playback belongs to an immutable page ID.
  const played = new Set()
  let slideSerial = 0
  function ensurePageIds() {
    const seen = new Set(), counts = new Map()
    D.pages.forEach(p => { if (typeof p._slideId === 'string' && p._slideId) counts.set(p._slideId, (counts.get(p._slideId) || 0) + 1) })
    const referenced = new Set(D.pages.filter(p => p.type === 'overview').flatMap(p => (Array.isArray(p.items) ? p.items : []).map(item => item?._daySlideId)).filter(id => typeof id === 'string' && id))
    const ambiguous = new Set([...referenced].filter(id => counts.get(id) > 1))
    for (const p of D.pages) {
      const invalidReference = ambiguous.has(p._slideId)
      if (typeof p._slideId !== 'string' || !p._slideId || seen.has(p._slideId) || invalidReference) {
        // A referenced collision has no trustworthy winner. Re-ID every collision
        // and leave the old reference unresolved, including after save/reopen.
        do { p._slideId = 'slide-' + (globalThis.crypto?.randomUUID?.() || Date.now() + '-' + ++slideSerial) } while (seen.has(p._slideId) || ambiguous.has(p._slideId) || invalidReference && counts.has(p._slideId))
      }
      seen.add(p._slideId)
    }
  }
  // 照片改動（換圖、焦點）另存一個 key：{ '頁號:原圖路徑': { d: 換上去的圖(縮過的 dataURL), pos: 'x% y%' } }
  const IKEY = KEY + ':img'
  let IMG = {}
  try { if (!PREVIEW) IMG = JSON.parse(localStorage.getItem(IKEY) || '{}') || {} } catch (e) { IMG = {} }
  // MOTION_MIGRATION_BEGIN — no storage writes; the normal save/history owner persists pages.
  const continuityLayouts = {cover:'photo-duet',toc:'photo-chapters',overview:'photo-circles',day:'photo-notes',spot:'photo-portrait'}
  const cameraModes = ['atlas','continuous','cut','follow','split']
  function legacyChoice(type, id) {
    if(type==='route' && cameraModes.includes(id)) return {id:'atlas',option:'routeCamera',value:id}
    if(id==='continuity' && continuityLayouts[type]) return {id:continuityLayouts[type],option:'continuity',value:true}
    if(id==='storyboard' && ['day','stay'].includes(type)) return {id:type==='day'?'panorama-rail':'panorama-keycard',option:'storyboard',value:true}
    if(type==='spot' && id==='twin-reveal') return {id:'compare',option:'compareReveal',value:true}
    return null
  }
  function normalizeMotion() {
    D.pages.forEach((p,i)=>{
      const oldId=S.v[i] || p.variant
      const source=legacyChoice(p.type,p.variant), saved=legacyChoice(p.type,S.v[i]), effective=saved || (!S.v[i] && source)
      if(effective) { p.motion={...p.motion}; if(p.motion[effective.option]===undefined)p.motion[effective.option]=effective.value }
      if(source)p.variant=source.id
      if(saved)S.v[i]=saved.id
      // Only the selected legacy layout supplies geometry/hidden slots. Combining
      // all five camera namespaces would leak another camera's edits into this one.
      const aliases = effective && oldId!==effective.id ? [[oldId,effective.id]] : []
      for(const [old,id] of aliases) {
        for(const key of ['layoutPositions','layoutStyles','lineStyles','lineColors','layerOrder'])if(p[key]?.[old]) {
          p[key][id] = p[key][old]
        }
        for(const [key,image] of Object.entries(IMG))if(key.startsWith(i+':') && image.hidden) {
          for(const slot of Object.keys(image.hidden))if(slot.startsWith(id+':'))delete image.hidden[slot]
          for(const slot of Object.keys(image.hidden))if(slot.startsWith(old+':')) {
            image.hidden[id+slot.slice(old.length)]=image.hidden[slot];delete image.hidden[slot]
          }
        }
      }
    })
    S.pages=D.pages
  }
  // MOTION_MIGRATION_END
  // 新增投影片：插在目前這頁後面。沿同頁型結構建立空白文字頁，保留原案照片供替換；不複製舊頁文案。
  // 頁的設定（選的版本、改的字、加減的項目）都綁頁號，插入／刪除時一起位移。
  const shift = (from, d) => {
    ['v', 'extra'].forEach(k => { const o = {}; for (const [i, v] of Object.entries(S[k])) o[+i >= from ? +i + d : +i] = v; S[k] = o })
    const sk = o => Object.fromEntries(Object.entries(o).map(([k, v]) => { const [i, r] = k.split(/:(.*)/s); return [(+i >= from ? +i + d : +i) + ':' + r, v] }))
    S.text = sk(S.text); IMG = sk(IMG); saveImg()
  }
  const BLANK = /^(t|title|sub|body|kick|en|time|date)$/
  const blank = o => { if (Array.isArray(o)) return o.map(x => typeof x === 'string' ? '點此輸入' : blank(x)); if (o && typeof o === 'object') { for (const k in o) { if (BLANK.test(k) && typeof o[k] === 'string') o[k] = '點此輸入'; else if (o[k] && typeof o[k] === 'object') o[k] = blank(o[k]) } } return o }
  M.addSlide = type => { const like = P0.find(p => p.type === type), np = type === 'proposal' ? { type, title: '方案比較', items: [{ t: '方案一' }, { t: '方案二' }] } : like ? blank(JSON.parse(JSON.stringify(like))) : { type, title: '新的一頁', items: [{ t: '項目一' }, { t: '項目二' }, { t: '項目三' }] }
    delete np._slideId; if (type === 'day') np.n = Math.max(0,...D.pages.filter(p=>p.type==='day').map(p=>Number(p.n)).filter(n=>Number.isInteger(n)&&n>0)) + 1
    shift(S.page + 1, 1); D.pages.splice(S.page + 1, 0, np); S.pages = D.pages; S.page++; render() }
  M.delSlide = () => { if (D.pages.length <= 1) return; if(!D.pages[S.page].hidden && visiblePages().length<=1) return msg('請先顯示另一張投影片，再刪除這張',true); dropPage(S.page); delete S.v[S.page]; delete S.extra[S.page]; D.pages.splice(S.page, 1); shift(S.page + 1, -1); S.pages = D.pages; render() }
  // VARIANT_SAVE_BEGIN — pin the visible default on the first successful edit.
  // render clears activePage before saving; navigation must not become an edit.
  function pinActiveVariant() {
    const pi = activePage?.context?.pi, id = activePage?.variant?.id
    if (historySuspended || !Number.isInteger(pi) || pi !== S.page || !id || S.v[pi]
      || activePage.context.p !== D.pages[pi]) return null
    const pin = { pi, had: Object.prototype.hasOwnProperty.call(S.v, pi), old: S.v[pi] }
    S.v[pi] = id
    return pin
  }
  function undoVariantPin(pin) { if (pin) { if (pin.had) S.v[pin.pi] = pin.old; else delete S.v[pin.pi] } }
  const save = () => {
    const pin = pinActiveVariant()
    if (PREVIEW) { queueHistory(); return true }
    try { localStorage.setItem(KEY, JSON.stringify(S)) }
    catch (e) { undoVariantPin(pin); const info = document.getElementById('saveInfo'); if (info) info.textContent = '儲存失敗，請先下載編輯檔'; return false }
    queueHistory(); const info = document.getElementById('saveInfo'); if (info) info.textContent = '已儲存在此瀏覽器'; return true
  }
  const saveImg = () => {
    const pin = pinActiveVariant()
    if (PREVIEW) { queueHistory(); return true }
    let previousState, stateWritten = false
    try {
      const images = JSON.stringify(IMG), state = pin ? JSON.stringify(S) : null
      // Write the small layout record first. A failed image setItem leaves the old
      // image value intact; restore the prior layout record before reporting failure.
      if (pin) { previousState = localStorage.getItem(KEY); localStorage.setItem(KEY, state); stateWritten = true }
      localStorage.setItem(IKEY, images)
    } catch (e) {
      if (stateWritten) { try { if (previousState === null) localStorage.removeItem(KEY); else localStorage.setItem(KEY, previousState) } catch (restoreError) { const info = document.getElementById('saveInfo'); if (info) info.textContent = '儲存失敗，請先下載編輯檔'; } }
      undoVariantPin(pin); return false
    }
    queueHistory(); return true
  }
  // VARIANT_SAVE_END
  // 加減項目：在原資料後面接「新項目」（複製最後一項的照片），減到原資料以下就截掉
  const pageItems = (p, pi, add = S.extra[pi] ?? 0) => { const base = p.items || []; if (add < 0) return base.slice(0, Math.max(0, base.length + add)); const out = base.slice(); for (let k = 0; k < add; k++) out.push({ t: '新項目 ' + (base.length + k + 1), img: (base[base.length - 1] || {}).img || D.meta.pool[k % D.meta.pool.length] }); return out }
  // 目錄每一章 → 那一章第一頁（點目錄跳過去、轉場用）
  const CH = { '航班與集合': 'flight', '每日行程': 'overview', '景點介紹': 'spot', '住宿安排': 'stay', '在地餐食': 'food', '注意事項': 'notice', '常見問題': 'qa' }
  const chapterPage = t => D.pages.findIndex(p => p.type === CH[t])

  // 自動挑版本：先保留明確選版，再按內容挑已核對的配方；其餘版型沿原輪替。
  // 版本可宣告 order（數字小的先輪到）；沒宣告的排後面、照名稱。中山國小每日頁的順序就是靠這個：S 曲線→波浪→圓弧→斜切
  // CONTENT_CHOICE_BEGIN — read-only defaults; geometry estimates are not a visual/overflow certification.
  function variantsFor(pi, items = pageItems(D.pages[pi], pi)) { const p = D.pages[pi], n = items.length, all = Object.values(REG[p.type] || {}).sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.id.localeCompare(b.id)); return all.map(v => { const why = v.needs ? v.needs(p, D.meta, items) || '' : ''; return { v, why, ok: !why && (!v.accepts || v.accepts(p)) && (!p.items || (n >= v.range[0] && n <= v.range[1])) } }) }
  function contentChoice(pi, automatic, nth) {
    const p = D.pages[pi], items = pageItems(p, pi), n = items.length, avoid = new Set()
    const photo = value => typeof value === 'string' && !!value.trim() && !/^(undefined|null)$/i.test(value.trim())
    // Some authored versions use tN, others itN. Honour edits and take the longer
    // stored alternative conservatively; choosing a layout must never rewrite copy.
    const text = (keys, fallback) => {
      const edits = keys.map(key => S.text[pi + ':' + key]).filter(value => value != null)
      return (edits.length ? edits : [fallback ?? '']).map(String).sort((a, b) => len(b) - len(a))[0]
    }
    const label = (it, i) => text(['it' + i, 't' + i], it.t)
    const lines = (value, width, size, factor = 1.08) => String(value).split('\n').reduce((sum, line) => sum + Math.max(1, Math.ceil(len(line) * size * factor / width)), 0)
    const pick = ids => ids.map(id => automatic.find(v => v.id === id && !avoid.has(id))).find(Boolean)
    let preferred
    if (p.type === 'day') {
      const short = n > 0 && n <= 4 && items.every((it, i) => lines(label(it, i) + (it.time ? '  ' + it.time : ''), 700, 34) <= 2)
        && lines(text(['h'], p.title), 820, 58) <= 2
      if (!short || !photo(p.img || D.meta.hero)) avoid.add('bignum')
      // continuity's actual text column is 546px, with 610px for the list.
      // Do not recommend it if the list needs type below 28px or has no main photo.
      const gap = n <= 4 ? 24 : 16
      const height = items.reduce((sum, it, i) => sum + lines(label(it, i), 546, 28, 1.04) * 28 * 1.45 + 24, 0) + gap * Math.max(0, n - 1)
      if (n > 6 || !photo(p.img) || height > 610 || lines(text(['h'], p.title), 650, 62) > 2) avoid.add('photo-notes')
      // A quiet photo spread between sparse opening days preserves rhythm;
      // longer lists use the wider existing timeline rather than a large numeral.
      preferred = pick(short && nth % 3 === 0 ? ['bignum', 'photo-notes', 'timeline'] : ['photo-notes', 'bignum', 'timeline'])
    } else if (p.type === 'toc') {
      const cols = n > 6 ? 2 : 1, per = Math.ceil(n / cols), width = (940 - 52 * (cols - 1)) / cols - 108
      if (items.some((it, i) => lines(label(it, i), width, 24) * 30 > 680 / per)) avoid.add('editorial-index')
      // Number columns are only a brief, photo-backed pause, never the dense index.
      if (!photo(D.meta.hero) || n > 4 || items.some((it, i) => len(label(it, i)) > 12 || lines(label(it, i), 1920 / n - 48, 36) > 2)) avoid.add('numerals')
      preferred = pick(nth % 2 ? ['numerals', 'editorial-index'] : ['editorial-index', 'numerals'])
    } else if (p.type === 'overview') {
      // Match photo-ledger's title/body/date roles at their authored sizes.
      const imageWidth = n <= 4 ? 216 : 172
      const height = items.reduce((sum, it, i) => {
        const width = 1020 - 106 - (photo(it.img) ? imageWidth + 20 : 0)
        const body = text(['body' + i, 'b' + i], it.body), sub = text(['sub' + i, 's' + i], it.sub)
        const copy = lines(label(it, i), width, 32) * 40 + (body ? 8 + lines(body, width, 24) * 33.6 : 0)
        const date = 32 + (sub ? 8 + lines(sub, 86, 24) * 31.2 : 0)
        return sum + Math.max(copy, date) + 16
      }, 0)
      if (height > 744) avoid.add('photo-ledger')
      preferred = pick(['photo-ledger'])
    }
    return { preferred, automatic: automatic.filter(v => !avoid.has(v.id)), avoid }
  }
  function chosen(pi) {
    const list = variantsFor(pi), okl = list.filter(x => x.ok).map(x => x.v)
    if (S.v[pi] && okl.find(v => v.id === S.v[pi])) return okl.find(v => v.id === S.v[pi])
    // Explicit source layout: company numbers/records must not rotate into a different meaning.
    if (D.pages[pi].variant && okl.find(v => v.id === D.pages[pi].variant)) return okl.find(v => v.id === D.pages[pi].variant)
    const automatic = okl.filter(v => v.auto !== false)
    const nth = D.pages.slice(0, pi).filter(p => p.type === D.pages[pi].type).length
    const p = D.pages[pi], prefix = pi + ':'
    const edited = Object.keys(S.text).some(key => key.startsWith(prefix)) || Object.keys(IMG).some(key => key.startsWith(prefix))
      || !!S.extra[pi] || ['elements', 'layoutPositions', 'layoutStyles', 'lineColors', 'lineStyles', 'layerOrder'].some(key => p[key] && Object.keys(p[key]).length)
    // Older saves did not always pin their layout. Reconstruct their original
    // ordered default rather than hiding edits stored under another variant's keys.
    if (edited) return automatic[nth % Math.max(1, automatic.length)] || okl[0] || null
    const choice = contentChoice(pi, automatic, nth)
    return choice.preferred || choice.automatic[nth % Math.max(1, choice.automatic.length)] || (!automatic.length && okl.find(v => !choice.avoid.has(v.id))) || null
  }
  // CONTENT_CHOICE_END

  const stage = document.getElementById('stage'), BOX = []
  function fitStage() { const v = stage.parentElement, pad = document.body.classList.contains('present') ? 0 : 64, k = Math.min(v.clientWidth / 1920, Math.max(1,v.clientHeight-pad) / 1080); stage.style.transform = `translate(-50%,-50%) scale(${k})` }
  addEventListener('resize', () => { cancelTransition(); if (!activePage) render(); fitStage() })
  function ctxFor(pi) {
    const p = D.pages[pi], items = pageItems(p, pi)
    const names = globalThis.MastersNames?.vocabulary(p,D.meta,D.pages)
    const ed = (k, def, extra = '') => {
      const source = names?.field(k,def), binding = source && !/data-morph=/.test(extra) ? `data-morph="${esc(source.name)}" data-morph-index="${source.index}" data-morph-bound="true"` : ''
      return `<span contenteditable="${!PRESENT}" spellcheck="false" data-k="${pi}:${k}" ${binding} ${extra}>${esc(S.text[pi + ':' + k] ?? def)}</span>`
    }
    const tx = (k, def) => S.text[pi + ':' + k] ?? def
    const related = page => page < 0 ? null : { page, p: D.pages[page], items: pageItems(D.pages[page], page) }
    const target = i => {
      if (p.type === 'toc') return chapterPage(items[i]?.t)
      if (p.type !== 'overview') return -1
      const item = items[i]
      if (item && Object.prototype.hasOwnProperty.call(item, '_daySlideId')) {
        if (typeof item._daySlideId !== 'string' || !item._daySlideId) return -1
        const matches = D.pages.flatMap((page, index) => page._slideId === item._daySlideId ? [index] : [])
        return matches.length === 1 && D.pages[matches[0]].type === 'day' ? matches[0] : -1
      }
      // Unsplit legacy overviews still use their original local day ordinal.
      return D.pages.findIndex(q => q.type === 'day' && q.n === i + 1)
    }
    return { p, pi, items, n: items.length, meta: D.meta, ed, tx, BOX, util: M.util,
      first: type => related(D.pages.findIndex(q => q.type === type)),
      destination: i => related(target(i)),
      // 目錄的第 i 格會跳到哪一頁（轉場時那一格放大成那頁的大圖）
      target }
  }
  function html(pi, forPrint = false) { const v = chosen(pi); BOX.length = 0; return v ? `<div class="slide t-${D.pages[pi].type} v-${v.id}">${D.pages[pi].motion?.storyboard && M.storyboard?.shots[D.pages[pi].type]?.[v.id] ? M.storyboard.html(D.pages[pi].type,v.id,ctxFor(pi)) : v.html(ctxFor(pi))}${M.editor?.html(D.pages[pi], PRESENT || forPrint) || ''}</div>` : `<div class="slide"><div class="ab" style="left:120px;top:480px;font-size:40px;color:#b3372b">這一頁（${TYPES[D.pages[pi].type]}）還沒有排得下 ${pageItems(D.pages[pi], pi).length} 項的版本</div></div>` }

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
  let previousPageMarkup;
  function render(enterDelay = 0, alreadySaved = false, capturing = false) {
    if (!capturing) cancelTransition()
    leavePage()
    normalizeMotion()
    ensurePageIds()
    S.page = Math.max(0, Math.min(D.pages.length - 1, Number.isInteger(S.page) ? S.page : 0))
    if (PRESENT && D.pages[S.page].hidden) S.page = adjacentPage(S.page,1)>=0 ? adjacentPage(S.page,1) : (adjacentPage(S.page,-1)>=0 ? adjacentPage(S.page,-1) : S.page)
    const pi = S.page, p = D.pages[pi], cur = chosen(pi)
    stage.innerHTML = html(pi); applyImgs(stage, pi); M.applySwiss(stage.querySelector('.slide')); M.centerSpacing(stage.querySelector('.slide')); M.editor?.decorate(stage.querySelector('.slide'), pi); drawSel()
    refreshPagination()
    const pageMarkup = D.pages.map((q, k) => `<div class="page-row${q.hidden ? ' is-hidden' : ''}"><button type="button" data-p="${k}" draggable="true" title="雙擊標題重新命名；拖曳排序；Alt＋方向鍵移動${q.hidden ? '；已隱藏' : ''}" aria-keyshortcuts="Alt+ArrowUp Alt+ArrowDown" aria-current="false"><i>${String(k + 1).padStart(2, '0')}</i><span class="page-title">${esc(q.sidebarTitle || q.kick || (q.type === 'day' ? '第 ' + q.n + ' 天' : TYPES[q.type]))}</span></button><button type="button" class="page-eye" data-hide="${k}" aria-label="${q.hidden ? '顯示' : '隱藏'}第 ${k+1} 張投影片" title="${q.hidden ? '顯示' : '隱藏'}投影片" aria-pressed="${!!q.hidden}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>${q.hidden ? '<path d="m3 3 18 18" stroke-width="2"/>' : ''}</svg></button></div>`).join('')
    if(pageMarkup!==previousPageMarkup){$('pages').innerHTML=pageMarkup;previousPageMarkup=pageMarkup;}
    $('pages').querySelectorAll('[data-p]').forEach(b=>b.setAttribute('aria-current',String(+b.dataset.p===pi)));
    const vs = variantsFor(pi)
    $('vars').innerHTML = vs.length ? `<button type="button" id="vPrev" aria-label="上一個版面">‹</button><select id="vSel" aria-label="版面">${vs.map(({ v, ok, why }) => `<option value="${v.id}" ${ok ? '' : 'disabled'} ${cur && cur.id === v.id ? 'selected' : ''}>${esc(v.name)}${why ? `（缺：${esc(why)}）` : ""}</option>`).join('')}</select><button type="button" id="vNext" aria-label="下一個版面">›</button>` : '<p>這種頁還沒有版本</p>'
    if($('vSel')){const opts=[...$('vSel').options],idx=$('vSel').selectedIndex;$('vPrev').disabled=!opts.some((o,i)=>!o.disabled&&i<idx);$('vNext').disabled=!opts.some((o,i)=>!o.disabled&&i>idx)}
    motionSettings(pi,cur)
    $('del').disabled = D.pages.length <= 1 || (!p.hidden && visiblePages().length<=1)
    $('pos').textContent = `${pi + 1} / ${D.pages.length}`
    if(!alreadySaved)save(); fitStage()
    const root = stage.querySelector('.slide')
    if(capturing)root.classList.add('morph-settled')
    root.dataset.pageId = p._slideId
    const context = ctxFor(pi), controller = new AbortController()
    activePage = { root, context, variant: cur, controller }
    activePage.cleanup = cur?.onEnter?.(root, context, { signal: controller.signal, presenting: PRESENT && !EDIT, reducedMotion: STATIC || motion.matches || capturing })
    if (cur?.mount) routeCleanup = cur.mount(root, ctxFor(pi), { delay: enterDelay, settled: capturing, reducedMotion: STATIC || motion.matches || capturing })
    const shots=M.storyboard?.shots[p.type]?.[cur?.id], enter=p.motion?.storyboard && shots ? (root,c,state)=>M.storyboard.enter(root,state,shots) : cur?.enter
    if (enter) {
      const key = JSON.stringify([p._slideId, cur.id, !!p.motion?.storyboard])
      const settled = played.has(key) || STATIC || motion.matches || EDIT || capturing || !Element.prototype.animate
      played.add(key) // also interrupted pages return fully visible, as in the source deck
      entrance = enter(root, ctxFor(pi), { settled, pageId: p._slideId, delay: enterDelay })
    }
    window.MastersNames?.annotate(root,p,D.meta,D.pages)
    if(capturing)root.getAnimations({subtree:true}).forEach(a => { if(Number.isFinite(a.effect.getComputedTiming().endTime))a.finish();else a.cancel() })
    dispatchEvent(new CustomEvent('masters:page', { detail: { page: pi, total: D.pages.length } }))
  }
  M.renameSlide=(index,value)=>{
    const p=D.pages[index],name=String(value||'').trim().slice(0,120);if(!p||!name)return false;
    const old=p.sidebarTitle;p.sidebarTitle=name;S.pages=D.pages;
    if(!save()){if(old===undefined)delete p.sidebarTitle;else p.sidebarTitle=old;msg('名稱未儲存，已保留原名稱',true);return false;}
    previousPageMarkup=undefined;return true;
  };
  function renamePage(button){
    if(!button||PRESENT)return;
    const index=+button.dataset.p,label=button.querySelector('.page-title'),original=label.textContent;
    const host=document.createElement('div'),input=document.createElement('input');host.className='page-renaming';
    const number=button.querySelector('i').cloneNode(true);input.value=original;input.maxLength=120;input.setAttribute('aria-label','投影片名稱');
    host.append(number,input);button.replaceWith(host);let done=false;
    const finish=commit=>{if(done)return;done=true;if(commit&&M.renameSlide(index,input.value))label.textContent=D.pages[index].sidebarTitle;host.replaceWith(button);button.focus();};
    input.addEventListener('keydown',event=>{event.stopPropagation();if(event.isComposing)return;if(event.key==='Enter'){event.preventDefault();finish(true)}if(event.key==='Escape'){event.preventDefault();finish(false)}});
    input.addEventListener('blur',()=>finish(true));input.focus();input.select();
  }
  $('pages').addEventListener('dblclick',e=>{const title=e.target.closest('.page-title');if(title){e.preventDefault();renamePage(title.closest('[data-p]'))}});
  $('pages').addEventListener('click', e => { if(e.target.closest('.page-renaming'))return;const eye=e.target.closest('[data-hide]'); if(eye){ const i=+eye.dataset.hide; M.toggleSlideVisibility(i); $('pages').querySelector(`[data-hide="${i}"]`)?.focus(); return } const b = e.target.closest('[data-p]'); if(b){const to=+b.dataset.p;if(to===S.page)return;go(to)} })

  // Reorder every page-indexed store together; page objects retain their stable IDs.
  M.moveSlide = (from, to) => {
    const n = D.pages.length;
    if (![from,to].every(i => Number.isInteger(i) && i >= 0 && i < n) || from === to) return false;
    const order = Array.from({length:n}, (_,i) => i);
    order.splice(to, 0, order.splice(from, 1)[0]);
    const indices = Object.fromEntries(order.map((old,i) => [old,i]));
    const remap = (obj, compound=false) => Object.fromEntries(Object.entries(obj).map(([key,value]) => {
      const split = compound ? key.indexOf(':') : -1;
      const page = split < 0 ? key : key.slice(0,split);
      return [indices[page] + (split < 0 ? '' : key.slice(split)), value];
    }));
    // Default variants depend on order; pin the currently visible choices first.
    const variants = Object.fromEntries(D.pages.map((_,i) => [i,chosen(i)?.id]).filter(([,id]) => id));
    const before = {pages:D.pages, page:S.page, v:S.v, extra:S.extra, text:S.text, img:IMG, savedPages:S.pages};
    D.pages = order.map(i => before.pages[i]); S.pages = D.pages; S.page = indices[S.page];
    S.v = remap(variants); S.extra = remap(S.extra); S.text = remap(S.text,true); IMG = remap(IMG,true);
    if (!saveImg() || !save()) {
      D.pages=before.pages; S.pages=before.savedPages; S.page=before.page; S.v=before.v; S.extra=before.extra; S.text=before.text; IMG=before.img;
      saveImg(); save(); msg('排序未儲存，請先下載編輯檔',true); return false;
    }
    SEL=null; render(); msg('已調整投影片順序'); return true;
  };
  // PAGINATION_UI_BEGIN — an explicit edit; capacity is supplied by the original recipe.
  function paginationInput() {
    const context=ctxFor(S.page);
    return {pages:D.pages,meta:D.meta,state:S,images:IMG,index:S.page,variant:chosen(S.page)?.id,resolvedVariants:D.pages.map((_,i)=>chosen(i)?.id),
      ...(context.p.type==='overview'?{overviewTargets:context.items.map((_,i)=>context.destination(i)?.p._slideId??null)}:{})};
  }
  function capacityFor(context,variant) {
    const box=document.createElement('div'),keep=BOX.slice();
    try{box.innerHTML=variant.html({...context,BOX:[]});return box.querySelector('[data-capacity]')?.dataset.capacity;}
    finally{BOX.splice(0,BOX.length,...keep);}
  }
  function refreshPagination() {
    const button=$('splitPage'),info=$('capacityInfo'),variant=chosen(S.page);
    if(!button||!variant)return;
    const exceeded=capacityFor(ctxFor(S.page),variant)==='exceeded',support=M.pagination?.inspect(paginationInput());
    if(info)info.hidden=!exceeded;
    button.disabled=!exceeded||!support?.ok;
    button.title=!exceeded?'這頁不需要分頁':support?.ok?'依完整項目分頁，保留文字與照片':support?.message||'分頁尚未載入';
  }
  M.splitSlide = () => {
    flushHistory();const input=paginationInput(),variant=chosen(S.page);
    if(!variant||!M.pagination)return false;
    const result=M.pagination.plan({...input,fits:part=>{
      const tx=(key,fallback)=>part.edits[key]??fallback;
      const ed=(key,fallback)=>`<span>${esc(tx(key,fallback))}</span>`;
      const current=ctxFor(S.page),navigation=current.p.type==='overview'?{
        target:i=>current.target(part.sourceIndices[i]),destination:i=>current.destination(part.sourceIndices[i])
      }:{};
      return capacityFor({...current,...part,...navigation,tx,ed},variant)==='fit';
    }});
    if(!result.ok){msg(result.message,true);return false;}
    const before={pages:D.pages,state:{...S},images:IMG};let stored,ok=false;
    try{if(!PREVIEW)stored=[localStorage.getItem(KEY),localStorage.getItem(IKEY)];}
    catch{msg('無法讀取存檔，原頁保留',true);return false;}
    const suspended=historySuspended;historySuspended=true;
    try{
      Object.keys(S).forEach(key=>delete S[key]);Object.assign(S,result.next.state);D.pages=result.next.pages;IMG=result.next.images;
      ensurePageIds();S.pages=D.pages;
      if(!saveImg()||!save())throw Error('分頁未儲存，原頁保留');
      ok=true;
    }catch(error){
      Object.keys(S).forEach(key=>delete S[key]);Object.assign(S,before.state);D.pages=before.pages;IMG=before.images;
      if(stored)try{[KEY,IKEY].forEach((key,i)=>{if(stored[i]===null)localStorage.removeItem(key);else localStorage.setItem(key,stored[i]);});}
      catch{msg('分頁未完成，原內容仍在；儲存空間不足',true);return false;}
      msg(error.message||'分頁未完成，原頁保留',true);
    }finally{historySuspended=suspended;}
    if(ok){SEL=null;SEL_SLOT=null;render(0,true);queueHistory();msg('已分為 '+result.segments.length+' 頁，可復原');}
    return ok;
  };
  if($('splitPage'))$('splitPage').onclick=M.splitSlide;
  addEventListener('masters:history',refreshPagination);
  // PAGINATION_UI_END
  const pageList=$('pages'); let pageDrag=null, scrollFrame=0;
  const clearDrop=()=>pageList.querySelectorAll('.drop-before,.drop-after').forEach(el=>el.classList.remove('drop-before','drop-after'));
  const endPageDrag=()=>{cancelAnimationFrame(scrollFrame);scrollFrame=0;pageDrag=null;clearDrop();pageList.querySelectorAll('.dragging').forEach(el=>el.classList.remove('dragging'));};
  const dropTarget=(x,y)=>{
    const rows=[...pageList.querySelectorAll('[data-p]')], horizontal=getComputedStyle(pageList).display==='flex';
    const coord=horizontal?x:y;
    const row=rows.find(el=>{const r=el.getBoundingClientRect();return coord<(horizontal?r.right:r.bottom);}) || rows.at(-1);
    if(!row)return;
    const r=row.getBoundingClientRect(),after=coord>(horizontal?r.left+r.width/2:r.top+r.height/2);
    clearDrop(); row.classList.add(after?'drop-after':'drop-before');
    return +row.dataset.p+(after?1:0);
  };
  const autoScroll=()=>{
    if(!pageDrag)return;
    const horizontal=getComputedStyle(pageList).display==='flex', host=horizontal?pageList:pageList.closest('.rail'),r=host.getBoundingClientRect();
    const c=horizontal?pageDrag.x:pageDrag.y,start=horizontal?r.left:r.top,end=horizontal?r.right:r.bottom;
    const speed=c<start+44?-10:c>end-44?10:0;
    if(speed){host.scrollBy(horizontal?{left:speed}:{top:speed});pageDrag.slot=dropTarget(pageDrag.x,pageDrag.y);}
    scrollFrame=requestAnimationFrame(autoScroll);
  };
  pageList.addEventListener('dragstart',e=>{
    const b=e.target.closest('[data-p]');if(!b||PRESENT)return e.preventDefault();
    pageDrag={from:+b.dataset.p,x:e.clientX,y:e.clientY,slot:null};
    e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',b.dataset.p);b.classList.add('dragging');autoScroll();
  });
  pageList.addEventListener('dragover',e=>{if(!pageDrag)return;e.preventDefault();e.dataTransfer.dropEffect='move';pageDrag.x=e.clientX;pageDrag.y=e.clientY;pageDrag.slot=dropTarget(e.clientX,e.clientY);});
  pageList.addEventListener('drop',e=>{
    if(!pageDrag)return;e.preventDefault();e.stopPropagation();
    const {from}=pageDrag,slot=dropTarget(e.clientX,e.clientY);endPageDrag();
    if(slot!=null)M.moveSlide(from,slot>from?slot-1:slot);
  });
  addEventListener('dragend',endPageDrag); addEventListener('drop',endPageDrag);
  pageList.addEventListener('keydown',e=>{
    const b=e.target.closest('[data-p]');
    if(b&&e.key==='F2'){e.preventDefault();renamePage(b);return;}
    if(!b||!e.altKey||!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))return;
    e.preventDefault();e.stopPropagation();const from=+b.dataset.p,to=from+(['ArrowUp','ArrowLeft'].includes(e.key)?-1:1);
    if(M.moveSlide(from,to)){const moved=pageList.querySelector(`[data-p="${to}"]`);moved.focus();moved.scrollIntoView({block:'nearest',inline:'nearest'});}
  });
  // Scrolling under a stationary pointer must not flash hover on every passing row.
  document.querySelectorAll('.rail,.insp').forEach(panel=>{
    panel.addEventListener('scroll',()=>panel.classList.add('scrolling'),true);
    panel.addEventListener('pointermove',()=>panel.classList.remove('scrolling'));
    panel.addEventListener('pointerleave',()=>panel.classList.remove('scrolling'));
  });
  // TRANSITION_SETTINGS_BEGIN — page data uses the existing save/export/history owner.
  const transitionChoices = [['auto','沿用原設定'],['none','直接換頁'],['fade','淡入淡出'],['morph','轉化'],['showreel-tricolor','三色換章']]
  const validTransition = value => transitionChoices.some(([id])=>id===value)
  function transitionChoice(pi) {
    const p=D.pages[pi]
    return validTransition(p?.transition) ? p.transition : p?.motion?.continuity===true ? 'morph' : p?.motion?.continuity===false ? 'none' : 'auto'
  }
  function transitionMode(from,to) {
    const override=q.get('transition'), selected=validTransition(override)?override:transitionChoice(from)
    if(selected!=='auto')return selected
    if(D.pages[to]?.motion?.continuity===false)return 'none'
    if(chosen(to)?.chapterTransition==='showreel-tricolor'||chosen(from)?.chapterTransition==='showreel-tricolor')return D.pages[from].type!==D.pages[to].type?'showreel-tricolor':'auto'
    return D.pages[to]?.motion?.continuity===true?'morph':'auto'
  }
  M.setTransition = (value,all=false) => {
    if(!validTransition(value))return false
    const pages=all?D.pages:[D.pages[S.page]],before=pages.map(p=>({p,value:p.transition}))
    pages.forEach(p=>{p.transition=value});S.pages=D.pages
    if(!save()) {
      before.forEach(({p,value})=>{if(value===undefined)delete p.transition;else p.transition=value})
      msg('未能儲存，已保留原狀',true);motionSettings(S.page,chosen(S.page));return false
    }
    render(0,true);return true
  }
  function transitionDuration(pi) {
    const value=Number(D.pages[pi]?.motion?.morphDuration)
    return [1,1.4,2].includes(value)?value:1.4
  }
  M.setMorphDuration = value => {
    value=Number(value);if(![1,1.4,2].includes(value))return false
    const p=D.pages[S.page],before=p.motion
    p.motion={...before,morphDuration:value};S.pages=D.pages
    if(!save()){if(before===undefined)delete p.motion;else p.motion=before;motionSettings(S.page,chosen(S.page));return false}
    render(0,true);return true
  }
  // TRANSITION_SETTINGS_END
  function motionSettings(pi,variant) {
    const p=D.pages[pi],settings=p.motion||{},host=$('pageMotion')
    const select=(p.type==='spot' && variant?.id==='hero' ? `<label>照片動法<select data-motion="photoCamera">${[['still','靜止'],['slowPush','緩慢推近'],['tallPan','長圖上下帶看']].map(([id,label])=>`<option value="${id}" ${(settings.photoCamera||'still')===id?'selected':''}>${label}</option>`).join('')}</select></label>` : '') + (p.type==='route' && variant?.id==='atlas' ? `<label>鏡頭動法<select data-motion="routeCamera">${[['atlas','全線巡覽'],['continuous','一路拉近'],['cut','全景切近'],['follow','飛行跟拍'],['split','雙端合流']].map(([id,label])=>`<option value="${id}" ${(settings.routeCamera||'atlas')===id?'selected':''}>${label}</option>`).join('')}</select></label>` : '')
    const checks=[...(M.storyboard?.shots[p.type]?.[variant?.id]?[['storyboard','逐頁分鏡']]:[]),...(p.type==='spot'&&variant?.id==='compare'?[['compareReveal','對向揭幕']]:[])]
    host.innerHTML=select+checks.map(([key,label])=>`<label><input type="checkbox" data-motion="${key}" ${settings[key]===true?'checked':''}>${label}</label>`).join('')+`<label>轉場<select data-transition aria-label="這一頁換到下一頁的轉場">${transitionChoices.filter(([id])=>id!=='showreel-tricolor'||M.showreel).map(([id,label])=>`<option value="${id}" ${transitionChoice(pi)===id?'selected':''}>${label}</option>`).join('')}</select></label><label>轉化時長<select data-morph-duration aria-label="轉化時長">${[1,1.4,2].map(value=>`<option value="${value}" ${transitionDuration(pi)===value?'selected':''}>${value.toFixed(1)} 秒</option>`).join('')}</select></label><button type="button" data-transition-all>套用到全部頁</button><small>這一頁換到下一頁時使用</small>`
    host.hidden=false
  }
  $('pageMotion').addEventListener('change',e=>{
    if(e.target.hasAttribute('data-morph-duration')){M.setMorphDuration(e.target.value);return}
    if(e.target.dataset.transition!==undefined){M.setTransition(e.target.value);return}
    const key=e.target.dataset.motion;if(!key)return
    const p=D.pages[S.page],before=p.motion,oldVariant=S.v[S.page]
    p.motion={...before,[key]:e.target.type==='checkbox'?e.target.checked:e.target.value};S.v[S.page]=chosen(S.page)?.id;S.pages=D.pages
    if(!save()){p.motion=before;if(oldVariant===undefined)delete S.v[S.page];else S.v[S.page]=oldVariant;msg('未能儲存，已保留原狀',true);motionSettings(S.page,chosen(S.page));return}
    played.clear();render(0,true)
  })
  const vStep = d => { const o = [...$('vSel').options]; let i = $('vSel').selectedIndex; do { i += d } while (o[i] && o[i].disabled); if (o[i]) { S.v[S.page] = o[i].value; render() } }
  $('pageMotion').addEventListener('click',e=>{if(e.target.hasAttribute('data-transition-all'))M.setTransition($('pageMotion').querySelector('[data-transition]').value,true)})
  $('vars').addEventListener('click', e => { if (e.target.id === 'vPrev') vStep(-1); if (e.target.id === 'vNext') vStep(1) })
  $('vars').addEventListener('change', e => { if (e.target.id === 'vSel') { S.v[S.page] = e.target.value; render() } })
  // PRINT_BEGIN — the same authored layout and saved edits used by playback.
  async function preparePrint() {
    document.getElementById('printAll')?.remove();
    const box = document.createElement('div'), keep = BOX.slice(); box.id = 'printAll';
    try {
      D.pages.forEach((p, i) => { if(p.hidden)return; const section = document.createElement('section'); section.className='page'; section.dataset.page=i; section.innerHTML = html(i,true); applyImgs(section, i); box.appendChild(section) });
    } finally { BOX.splice(0, BOX.length, ...keep); }
    document.body.appendChild(box);
    try {
      const crowded=[...box.children].filter(section=>section.querySelector('[data-capacity="exceeded"]')).map(section=>+section.dataset.page+1);
      if(crowded.length)throw Error('第 '+crowded.join('、')+' 頁內容超出版面，請先分頁或換版');
      await document.fonts.ready;
      const images=[...box.querySelectorAll('img')].filter(img=>img.dataset.photoHidden!=='true');
      const loaded=await Promise.all(images.map(img => img.decode().then(()=>true,()=>false)));
      const failed=loaded.filter(ok=>!ok).length;
      if(failed)throw Error(failed+' 張照片無法載入，請修正後再輸出');
      [...box.children].forEach(section => { const root=section.querySelector('.slide'); M.applySwiss(root); M.centerSpacing(root); M.editor?.decorate(root,+section.dataset.page) });
      // The exported document is read-only; editor affordances never enter print DOM.
      box.querySelectorAll('[contenteditable]').forEach(el=>{el.removeAttribute('contenteditable');el.removeAttribute('spellcheck')});
      return box;
    } catch(error) { box.remove();throw error; }
  }
  $('print').onclick = async () => {
    try {
      const box=await preparePrint();
      msg('在列印視窗選「另存為 PDF」；PDF 是靜態頁面，不含動畫。');
      addEventListener('afterprint', () => box.remove(), { once: true }); window.print();
    } catch(error) { msg(error.message||'列印準備失敗，請稍後重試',true); }
  }
  // PRINT_END
  $('guideTog').onclick = () => {
    const on = $('guideTog').getAttribute('aria-pressed') !== 'true'
    $('guideTog').setAttribute('aria-pressed', on)
    $('guideTog').textContent = '智慧參考線'; if(!on) stage.querySelectorAll('.snap-guide').forEach(el=>el.remove())
  }
  $('reset').onclick = () => { played.clear(); IMG = {}; saveImg(); SEL = null; S.v = {}; S.text = {}; S.extra = {}; S.pages = null; D.pages = JSON.parse(JSON.stringify(P0)); render() }
  $('addType').innerHTML = Object.entries(TYPES).filter(([k]) => REG[k]).map(([k, t]) => `<option value="${k}">${t}</option>`).join('')
  $('add').onclick = () => M.addSlide($('addType').value)
  $('del').onclick = () => M.delSlide()
  stage.addEventListener('keydown', e => {
    if (e.key !== 'Enter' || e.isComposing || !e.target.isContentEditable) return;
    e.preventDefault(); document.execCommand('insertLineBreak');
  });
  stage.addEventListener('input', e => { const k = e.target.dataset?.k; if (k) { S.text[k] = e.target.innerText; historyInputKey = 'text:' + k; save(); historyInputKey = '' } })
  // Text input already saves; rebuilding on blur detaches the drag target under the pointer.

  // T02: stable keys, multiple photos/text, continuous corner/crop interpolation.
  const motion = matchMedia('(prefers-reduced-motion: reduce)')
  let transition = null, transitionEpoch = 0, pendingPage = null
  function cancelTransition() {
    transitionEpoch++; pendingPage = null
    if (!transition) return
    const state=transition;transition=null
    state.hidden.forEach(([el, value]) => { el.style.visibility = value })
    state.nodes.forEach(el => el.remove())
    // Detach the overlay before cancelling its opacity fill; otherwise the compositor
    // can briefly repaint its opaque backdrop while cancellation restores base styles.
    state.animations.forEach(a => { a.onfinish = null; a.cancel() })
  }
  addEventListener('pagehide',cancelTransition)
  addEventListener('beforeprint',cancelTransition)
  motion.addEventListener('change', e => { if (e.matches) { entrance?.finish?.(); const to = pendingPage; cancelTransition(); if (to !== null) { S.page = to; render() } } })
  const navigationPage = () => pendingPage ?? S.page
  function sharedSnapshot(root) {
    const out = new Map(), duplicate = new Set(), sr = stage.getBoundingClientRect(), k = sr.width / 1920
    for (const [el,key] of [...root.querySelectorAll('[data-shared]')].map(el=>[el,el.dataset.shared])) {
      if (!key || el.dataset.photoHidden==='true' || el.parentElement.closest('[data-shared]')) continue
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
        objectPosition: cs.objectPosition, fontSize: cs.fontSize, lineHeight: cs.lineHeight, color: cs.color, backgroundColor: cs.backgroundColor }
      out.set(key, { el, frame, css: cs.cssText, font: cs.fontFamily, weight: cs.fontWeight, spacing: cs.letterSpacing,
        fit: cs.objectFit, src: el.tagName === 'IMG' ? el.currentSrc || el.src : null, text: el.textContent })
    }
    duplicate.forEach(key => out.delete(key))
    return out
  }
  function objectMorph(to) {
    const engine=window.MastersMorph,old=stage.querySelector('.slide')
    if(!engine){cancelTransition();S.page=to;render();return}
    const duration=transitionDuration(S.page)*1000
    old.classList.add('morph-settled')
    const from=engine.capture(old,D.pages[S.page],D.meta,stage)
    cancelTransition();S.page=to;render(0,false,true)
    const incoming=stage.querySelector('.slide'),destination=engine.capture(incoming,D.pages[to],D.meta,stage)
    const layer=document.createElement('div')
    layer.dataset.morphOverlay='true';layer.setAttribute('aria-hidden','true');layer.inert=true
    layer.style.cssText='position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:20;background:'+from.background
    const state=transition={animations:[],hidden:[[incoming,incoming.style.visibility]],nodes:[layer]}
    // The opaque morph overlay owns the cover; keep the real slide paintable
    // throughout so removing the finished overlay never exposes a hidden page.
    stage.appendChild(layer)
    try {
      const backdrop=layer.animate([{backgroundColor:from.background},{backgroundColor:destination.background}],{duration,easing:engine.EASING,fill:'both'})
      state.animations.push(backdrop)
      const run=engine.play(from,destination,layer,state,duration)
      backdrop.startTime=state.animations[1]?.startTime??document.timeline.currentTime
      run.finished.then(()=>{if(transition===state)cancelTransition()})
    } catch(error) { cancelTransition();console.error('Morph:',error) }
  }
  async function go(to) {
    if (!Number.isInteger(to)) return
    to = Math.max(0, Math.min(D.pages.length - 1, to))
    if (PRESENT && D.pages[to].hidden) { const next=adjacentPage(to,to<S.page?-1:1); if(next<0)return; to=next }
    cancelTransition()
    if (to === S.page) { if (!activePage) render(); return }
    leavePage()
    const box = BOX.find(b => b && b.to === to)
    const mode=transitionMode(S.page,to),isMorph=mode==='morph'
    if (motion.matches || STATIC || EDIT || matchMedia('print').matches || mode==='none' || !Element.prototype.animate) { S.page = to; render(); return }
    // Prepare/decode the destination while the current page remains visible.
    const epoch = transitionEpoch, ghost = document.createElement('div')
    pendingPage = to
    ghost.style.cssText = 'position:absolute;inset:0;visibility:hidden;pointer-events:none'
    const boxes = BOX.slice()
    ghost.innerHTML = html(to); BOX.splice(0, BOX.length, ...boxes); applyImgs(ghost, to)
    ghost.querySelectorAll('*').forEach(el => { el.style.animation = 'none' })
    stage.appendChild(ghost)
    M.applySwiss(ghost.querySelector('.slide')); M.centerSpacing(ghost.querySelector('.slide')); M.editor?.decorate(ghost.querySelector('.slide'),to)
    transition = { animations: [], hidden: [], nodes: [ghost] }
    let timer
    await Promise.race([Promise.all([document.fonts.ready,...[...ghost.querySelectorAll('img')].map(im => im.decode().catch(() => {}))]), new Promise(resolve => { timer = setTimeout(resolve, 1200) })])
    clearTimeout(timer)
    if (epoch !== transitionEpoch) return
    if(isMorph){objectMorph(to);return}
    // Showreel opt-in: reuse the shared transition owner/cancellation and the page enter hook.
    if (mode==='showreel-tricolor' && M.showreel) {
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
      return mode!=='fade' && a && a.el.tagName === b.el.tagName && (a.src ? a.src === b.src : a.text === b.text)
    }).map(([key, b]) => [from.get(key), b, key])
    // Unmarked legacy versions retain BOX → hero, including SVG-based layouts.
    if (mode==='auto' && !pairs.length && box && !chosen(to)?.enter && (!from.size || !destination.size)) {
      const hero = ghost.querySelector('img.hero:not([data-photo-hidden="true"])')
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
    cancelTransition();S.page = to; render(0,false,mode==='fade')
    if (!pairs.length && mode==='auto') return
    const incoming = stage.querySelector('.slide'), actual = sharedSnapshot(incoming)
    const state = transition = { animations: [], hidden: [], nodes: [outgoing] }
    stage.appendChild(outgoing)
    const animate = (el, frames, options) => { const a = el.animate(frames, options); state.animations.push(a); return a }
    const timing = { duration:900, easing:'cubic-bezier(.45,0,.2,1)', fill: 'both' }
    if(mode==='fade')animate(incoming,[{opacity:0},{opacity:1}],{duration:400,fill:'both'})
    const fadeOut=animate(outgoing, [{ opacity: 1 }, { opacity: 0 }], { duration:650, fill: 'both' })
    outgoing.querySelectorAll('[data-shared-copy], [data-shared]:not(img)').forEach(el => {
      animate(el, [{opacity:1}, {opacity:0}], {duration:180, fill:'both'})
    })
    for (const [a, b, key] of pairs) {
      const target = key === '__legacy' ? incoming.querySelector('img.hero:not([data-photo-hidden="true"])') : actual.get(key)?.el
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
    const last = state.animations.find(a => a.effect.getTiming().duration === timing.duration)||fadeOut
    if (last) last.onfinish = () => { if (transition === state) cancelTransition() }
    else cancelTransition()
  }
  M.box = (i, x, y, w, h, to, img) => { BOX[i] = { x, y, w, h, to, img } }
  addEventListener('keydown', e => { if (e.target.isContentEditable || e.target.closest('video,audio,input,select,textarea')) return; if (['ArrowRight', 'PageDown'].includes(e.key)) go(navigationPage() + 1); if (['ArrowLeft', 'PageUp'].includes(e.key)) go(navigationPage() - 1) })
  stage.addEventListener('click', e => { if (e.target.isContentEditable || e.target.closest('video,audio,button')) return
    const r = stage.getBoundingClientRect(), k = r.width / 1920, x = (e.clientX - r.left) / k, y = (e.clientY - r.top) / k
    if (EDIT) return
    const b = BOX.find(b => b && b.to >= 0 && x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h); if (b) go(b.to) })

  // 網址參數（驗收程式用）：?page=頁號&v=版本&n=項目數&static=1
  const q = new URLSearchParams(location.search)
  let STATIC = PREVIEW || q.has('static')
  // 放到網站的客戶連結預設純放映，內部編輯加 ?studio=1（沿 IGG 北海道 11/04）；本機開檔／localhost 維持編輯
  let PRESENT = PREVIEW || q.has('present') || (/^https?:$/.test(location.protocol) && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && !(q.has('studio') || q.has('edit')))
  $('presentTog').onclick = () => { if (EDIT) setEdit(false); PRESENT = !PRESENT; syncMode(); render() }
  function syncMode() { $('presentTog').textContent = PRESENT ? '回到編輯' : '開始放映'; $('presentTog').setAttribute('aria-pressed', PRESENT); document.body.classList.toggle('present', PRESENT); document.querySelector('.hint').textContent = PRESENT ? '翻頁 ← →　·　S 講者視窗　·　O 總覽　·　Esc 回到編輯' : '翻頁 ← →　·　空白拖框選 · Shift 多選 · 雙擊改字' }
  syncMode()
  const staticMotionStyle = document.createElement('style')
  staticMotionStyle.id = 'masters-static-motion'
  staticMotionStyle.textContent = '.slide *{animation:none!important;transition:none!important}'
  document.head.appendChild(staticMotionStyle)
  function syncStaticMotion() {
    staticMotionStyle.disabled = !(STATIC || motion.matches)
    $('motionTog').textContent = STATIC ? '開啟頁面動畫' : '收起頁面動畫'
    $('motionTog').setAttribute('aria-pressed', String(!STATIC && !motion.matches))
  }
  syncStaticMotion()
  motion.addEventListener('change', syncStaticMotion)
  $('motionTog').onclick = () => {
    leavePage(); cancelTransition()
    STATIC = !STATIC; syncStaticMotion()
    if (!STATIC) played.delete(JSON.stringify([D.pages[S.page]?._slideId, chosen(S.page)?.id, !!D.pages[S.page]?.motion?.storyboard]))
    render(0, true) // Motion is a view setting; preserve imported state and storage/history.
  }
  if (q.has('fresh')) { IMG = {}; S.v = {}; S.text = {}; S.extra = {}; S.pages = null; D.pages = JSON.parse(JSON.stringify(P0)) }
  if (q.has('storyboard')) D.pages.forEach((p, i) => { if (['day', 'stay'].includes(p.type)) { S.v[i] = p.type==='day'?'panorama-rail':'panorama-keycard'; p.motion={...p.motion,storyboard:true} } })
  if (q.has('continuity')) D.pages.forEach((p, i) => { if (continuityLayouts[p.type]) p.motion={...p.motion,continuity:true} })
  if (q.has('page')) S.page = +q.get('page')
  if (q.has('n')) { const p = D.pages[S.page]; S.extra[S.page] = +q.get('n') - (p.items || []).length }
  if (q.has('v')) S.v[S.page] = q.get('v')

  // ══ 全編輯模式（2026-10-11）：點照片選取 → 換圖（選檔／拖進來）、在照片上拖曳＝調焦點（object-position）；
  //    改動都存這台瀏覽器（localStorage），可還原、可匯出／匯入 JSON。照片是 DOM 裡的真 <img>／SVG <image>。 ══
  const OK_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], MAX_FILE = 20 * 1024 * 1024, MAX_PX = 60e6, MAX_SIDE = 1920, MAX_OUT = 1.5 * 1024 * 1024
  let EDIT = false, SEL = null, SEL_SLOT = null   // source edits are shared; selection/deletion identify one rendered slot
  const msg = (t, bad) => { const m = $('msg'); if (m) { m.textContent = t; m.dataset.bad = bad ? '1' : '' } }
  const srcOf = el => el.tagName === 'image' ? (el.getAttribute('href') || el.getAttributeNS('http://www.w3.org/1999/xlink', 'href')) : el.getAttribute('src')
  const imgEls = root => [...root.querySelectorAll('img, image')].filter(el=>!el.closest('.user-layer'))
  const keyOf = (pi, el) => pi + ':' + el.dataset.orig
  const visibleImgEls = root => imgEls(root).filter(el=>el.dataset.photoHidden!=='true'&&getComputedStyle(el).display!=='none'&&getComputedStyle(el).visibility!=='hidden')
  const selectPhoto = el => { SEL=keyOf(S.page,el);SEL_SLOT=el.dataset.photoSlot; }
  function applyImgs(root, pi) {
    const counts=new Map(),variant=chosen(pi)?.id||''
    for (const el of imgEls(root)) {
      if (el.dataset.orig == null) el.dataset.orig = srcOf(el) ?? ''
      const count=counts.get(el.dataset.orig)||0;counts.set(el.dataset.orig,count+1);el.dataset.photoSlot=variant+':'+count;el.dataset.photoLayout='photo:'+encodeURIComponent(el.dataset.orig)+':'+count
      if(D.pages[pi]?.layoutStyles?.[variant]?.[el.dataset.photoLayout]?.hidden){el.dataset.photoHidden='true';el.style.visibility='hidden';el.style.pointerEvents='none'}
      const o = IMG[keyOf(pi, el)]; if (!o) continue
      if (o.d) { if (el.tagName === 'image') el.setAttribute('href', o.d); else el.src = o.d }
      if (o.pos && el.tagName !== 'image') el.style.objectPosition = o.pos
      if(o.hidden?.[el.dataset.photoSlot]===true){el.dataset.photoHidden='true';el.style.visibility='hidden';el.style.pointerEvents='none'}
    }
    if (root === stage) imgEls(root).forEach(el => { el.draggable = false })
    const enabled=D.pages[pi]?.motion?.continuity===true
    root.querySelectorAll('[data-shared]').forEach(el=>{if(!enabled)el.removeAttribute('data-shared')})
    if(enabled)root.querySelectorAll('img:not([data-photo-hidden="true"]):not(.user-layer img)').forEach(el=>{el.dataset.shared='photo:'+(el.getAttribute('src')||'')})

  }
  const dropPage = pi => { for (const k of Object.keys(IMG)) if (k.startsWith(pi + ':')) delete IMG[k]; for (const k of Object.keys(S.text)) if (k.startsWith(pi + ':')) delete S.text[k]; saveImg() }
  const selEl = () => SEL && visibleImgEls(stage).find(el => keyOf(S.page, el) === SEL&&(!SEL_SLOT||el.dataset.photoSlot===SEL_SLOT))
  const selectedPhoto = () => selEl() || M.editor?.framePhoto?.()
  function drawSel() {
    document.getElementById('selbox')?.remove()
    const el = EDIT && selEl();
    for(const image of imgEls(stage))image.classList?.toggle('photo-cropping',image===el);
    syncPhotoTools();dispatchEvent(new CustomEvent('masters:selection',{detail:{kind:el?'photo':'page'}})); if (!el) return
    const r = el.getBoundingClientRect(), s = stage.getBoundingClientRect(), k = s.width / 1920
    const d = document.createElement('div'); d.id = 'selbox'
    d.style.cssText = `position:absolute;pointer-events:none;z-index:50;left:${(r.left - s.left) / k}px;top:${(r.top - s.top) / k}px;width:${r.width / k}px;height:${r.height / k}px;outline:6px solid #c9921c;outline-offset:-6px`
    stage.appendChild(d)
  }
  function syncPhotoTools(){
    const custom=EDIT&&M.editor?.photoState?.(),el=EDIT&&selectedPhoto(),hasImages=visibleImgEls(stage).length||M.editor?.hasPhotos?.();
    const crop=el&&el.tagName!=='image'&&getComputedStyle(el).objectFit==='cover',pos=el&&(el.style.objectPosition||getComputedStyle(el).objectPosition);
    $('imgPick').disabled=!custom&&!el;
    $('imgRst').disabled=custom?!custom.canReset:!el||!(IMG[keyOf(S.page,el)]?.d||IMG[keyOf(S.page,el)]?.pos);
    $('focusRst').disabled=custom?!custom.canCenter:!crop||pos==='50% 50%';
    $('editTog').disabled=!hasImages||(EDIT&&(custom?!custom.canEdit:(!el||!crop)));
    $('editTog').setAttribute('aria-pressed',String(!!(EDIT&&(custom?.cropping||selEl()))));
    $('editTog').title=EDIT?'調整選取照片的取景；Esc 返回物件操作':'進入編輯模式';
    $('focusInfo').textContent=custom?custom.hint:el?(crop?(el.dataset.photoObject==='true'&&!selEl()?'拖曳移動；雙擊或「編輯」調整取景':'拖曳調整取景，自動儲存'):'此照片可更換，無取景調整'):hasImages?'選取圖片後調整':'此頁沒有可編輯圖片';
  }
  // 點到哪張照片：先看最上層（跳過沒有 pointer 的疊色層），文字優先
  function imgAt(cx, cy) {
    const top = document.elementsFromPoint(cx, cy)
    for (const el of top) { if (el.closest('.user-layer,.object-resize')||(el.closest('[data-layout]')&&el.dataset.photoObject!=='true')) return null; if (el.isContentEditable) return null; if (el.tagName === 'img' || el.tagName === 'IMG' || el.tagName === 'image') return stage.contains(el)&&visibleImgEls(stage).includes(el) ? el : null }
    const hit = visibleImgEls(stage).filter(el => { const r = el.getBoundingClientRect(); return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom })
    return hit.sort((a, b) => a.getBoundingClientRect().width * a.getBoundingClientRect().height - b.getBoundingClientRect().width * b.getBoundingClientRect().height)[0] || null
  }
  function setEdit(on) {
    if (on) { PRESENT = false; syncMode(); entrance?.finish?.(); cancelTransition() }
    EDIT = on; document.body.classList.toggle('edit', on); $('editTog').textContent = '編輯'
    $('layoutEditTog').setAttribute('aria-pressed', on); $('layoutEditTog').textContent='編輯'; $('editTog').setAttribute('aria-pressed', on); if (!on) SEL = null; drawSel()
    render()
    msg(on ? '空白拖框選 · Shift 多選 · 雙擊改字' : '')
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
  const photoRequests=new Map()
  async function putImage(el, file) {
    const page=D.pages[S.page], key = keyOf(S.page, el),request=Symbol();photoRequests.set(key,request)
    try {
      const d = await prep(file);if(photoRequests.get(key)!==request)return;if(D.pages[S.page]!==page || !stage.contains(el)) return msg('頁面已切換，請重新選取照片',true); const old = IMG[key]
      IMG[key] = { ...(old || {}), d }
      if (!saveImg()) { if (old) IMG[key] = old; else delete IMG[key]; throw new Error('瀏覽器存不下了（已存太多圖）。先「還原」幾張，或匯出 JSON 備份') }
      if(el.dataset.photoObject!=='true'||selEl()===el)selectPhoto(el); render(); msg('已換圖（' + Math.round(d.length * .75 / 1024) + ' KB，已自動縮到合適大小）')
    } catch (e) { msg(e.message, true) } finally {if(photoRequests.get(key)===request)photoRequests.delete(key)}
  }
  function pickFor() { if(M.editor?.photoAction?.('replace'))return;const el = selectedPhoto(); if (!el) return msg('先點一張照片', true); $('file').value = ''; $('file').onchange = () => { const f = $('file').files[0]; if (f) putImage(el, f) }; $('file').click() }
  function editPhoto(el=selectedPhoto()){
    if(!EDIT)return setEdit(true);
    if(M.editor?.photoAction?.('edit'))return;
    if(!el)return msg('先選取一張照片');
    if(el.tagName==='image'||getComputedStyle(el).objectFit!=='cover')return msg('此照片完整顯示，無取景調整');
    cancelPhotoDrag();if(selEl()===el&&el.dataset.photoObject==='true'){SEL=null;SEL_SLOT=null;drawSel();M.editor?.selectPhotoFrame?.(el);return;}
    selectPhoto(el);drawSel();msg('拖曳調整取景；Esc 返回物件操作');
  }
  $('editTog').onclick = () => editPhoto()
  $('layoutEditTog').onclick = () => setEdit(!EDIT)
  $('imgPick').onclick = pickFor
  function changePhoto(key, value, redraw=true) {
    photoRequests.delete(key)
    const old=IMG[key]; if(value) IMG[key]=value; else delete IMG[key];
    if(!saveImg()){if(old) IMG[key]=old;else delete IMG[key];msg('儲存失敗，請先下載編輯檔',true);if(redraw)render();return false;}
    if(redraw)render();return true;
  }
  function removePhoto(){const el=selEl();if(!EDIT||!el)return false;cancelPhotoDrag();const old=IMG[SEL]||{};if(!changePhoto(SEL,{...old,hidden:{...old.hidden,[el.dataset.photoSlot]:true}}))return false;msg('已刪除，可復原');return true;}
  $('imgRst').onclick = () => {if(M.editor?.photoAction?.('reset'))return;const el=selectedPhoto(),key=el&&keyOf(S.page,el);if(key&&(IMG[key]?.d||IMG[key]?.pos)){const next={...IMG[key]};delete next.d;delete next.pos;if(changePhoto(key,Object.keys(next).length?next:null))msg('已還原')} }
  $('focusRst').onclick = () => {if(M.editor?.photoAction?.('center'))return;const el=selectedPhoto(); if (!el || el.tagName==='image'||getComputedStyle(el).objectFit!=='cover') return;const key=keyOf(S.page,el); if(changePhoto(key,{...(IMG[key] || {}),pos:'50% 50%'})) msg('已置中，自動儲存') }
  function resetPage(){
    cancelPhotoDrag();flushHistory();
    const p=D.pages[S.page],before={page:{...p},text:S.text,images:IMG,pages:S.pages},prefix=S.page+':';let stored;
    try{if(!PREVIEW)stored=[localStorage.getItem(KEY),localStorage.getItem(IKEY)];}catch{msg('無法讀取存檔，未還原這一頁',true);return false;}
    const suspended=historySuspended;historySuspended=true;let ok=false;
    try{
      for(const key of ['layoutPositions','layoutStyles','lineStyles','elements','lineColors','noticeDetail','layerOrder','motion'])delete p[key];
      S.text=Object.fromEntries(Object.entries(S.text).filter(([key])=>!key.startsWith(prefix)));
      IMG=Object.fromEntries(Object.entries(IMG).filter(([key])=>!key.startsWith(prefix)));S.pages=D.pages;
      if(!saveImg()||!save())throw Error('還原未儲存，已保留原內容');ok=true;
    }catch(error){
      Object.assign(p,before.page);S.text=before.text;IMG=before.images;S.pages=before.pages;
      if(stored)try{[KEY,IKEY].forEach((key,i)=>{if(stored[i]===null)localStorage.removeItem(key);else localStorage.setItem(key,stored[i]);});}catch{msg('還原未完成，原內容仍在；請先下載編輯檔',true);return false;}
      msg(error.message,true);
    }finally{historySuspended=suspended;}
    if(ok){SEL=null;SEL_SLOT=null;queueHistory();render();msg('這一頁的字與照片已還原');}return ok;
  }
  $('pageRst').onclick = resetPage
  // 拖曳＝調焦點；沒移動就是選取（雙擊＝直接開選檔）
  let DRAG = null
  stage.addEventListener('pointerdown', e => {
    if (!EDIT || e.button !== 0) return
    const el = imgAt(e.clientX, e.clientY); if (!el) { if (!e.target.isContentEditable) { SEL = null; drawSel() } return }
    e.preventDefault();stage.focus?.({preventScroll:true});const key = keyOf(S.page, el), cs = getComputedStyle(el), pp = (el.style.objectPosition || cs.objectPosition).split(/\s+/).map(v => parseFloat(v))
    DRAG = { el, key, slot:el.dataset.photoSlot, page:D.pages[S.page], pointer:e.pointerId, originalPosition:el.style.objectPosition, x: e.clientX, y: e.clientY, px: isNaN(pp[0]) ? 50 : pp[0], py: isNaN(pp[1]) ? 50 : pp[1], moved: false, cover: cs.objectFit === 'cover' && el.tagName !== 'image' }
  })
  addEventListener('pointermove', e => {
    if (!DRAG||DRAG.pointer!==e.pointerId) return; const D0 = DRAG, dx = e.clientX - D0.x, dy = e.clientY - D0.y
    if (!D0.moved && Math.hypot(dx, dy) < 5) return; D0.moved = true
    if (!D0.cover) return
    const k = stage.getBoundingClientRect().width / 1920, w = D0.el.clientWidth, h = D0.el.clientHeight, nw = D0.el.naturalWidth, nh = D0.el.naturalHeight
    if (!nw || !nh) return
    const sc = Math.max(w / nw, h / nh), ox = nw * sc - w, oy = nh * sc - h, cl = v => Math.max(0, Math.min(100, v))
    const px = ox > 1 ? cl(D0.px - dx / k / ox * 100) : D0.px, py = oy > 1 ? cl(D0.py - dy / k / oy * 100) : D0.py
    D0.pos = px.toFixed(1) + '% ' + py.toFixed(1) + '%'; D0.el.style.objectPosition = D0.pos
  })
  addEventListener('pointerup', e => {
    if (!DRAG||DRAG.pointer!==e.pointerId) return; const D0 = DRAG; DRAG = null
    if(D0.page!==D.pages[S.page]||!stage.contains(D0.el)){D0.el.style.objectPosition=D0.originalPosition;return}
    SEL = D0.key;SEL_SLOT=D0.slot;
    if (D0.moved) {
      if (!D0.cover) { msg('此照片可更換，無取景調整');drawSel();return }
      if (D0.pos&&!changePhoto(D0.key,{...(IMG[D0.key] || {}),pos:D0.pos},false))D0.el.style.objectPosition=D0.originalPosition
      else if(D0.pos)applyImgs(stage,S.page)
    }
    drawSel()
  })
  const cancelPhotoDrag=()=>{if(!DRAG)return;DRAG.el.style.objectPosition=DRAG.originalPosition;DRAG=null;};
  addEventListener('pointercancel',cancelPhotoDrag);addEventListener('blur',cancelPhotoDrag);
  addEventListener('masters:page',()=>{cancelPhotoDrag();if(SEL&&!selEl()){SEL=null;SEL_SLOT=null;drawSel();}});
  addEventListener('keydown',e=>{if(e.key==='Escape'){cancelPhotoDrag();if(SEL){const el=selEl();SEL=null;SEL_SLOT=null;drawSel();M.editor?.selectPhotoFrame?.(el);}}});
  stage.addEventListener('dblclick', e => { if (!EDIT) return; const el = imgAt(e.clientX, e.clientY); if (el) { selectPhoto(el); drawSel(); pickFor() } })
  // 拖檔案進來：丟在哪張照片上就換哪張
  addEventListener('dragover', e => { if (EDIT && e.dataTransfer?.types?.includes('Files')) { e.preventDefault(); const el = stage.contains(e.target) || e.target === stage ? imgAt(e.clientX, e.clientY) : null; e.dataTransfer.dropEffect = el ? 'copy' : 'none' } })
  addEventListener('drop', e => {
    if (!EDIT || !e.dataTransfer?.files?.length) return; e.preventDefault()
    const el = imgAt(e.clientX, e.clientY); if (!el) return msg('請把圖檔丟在簡報裡的某張照片上', true)
    selectPhoto(el); putImage(el, e.dataTransfer.files[0])
  })
  // 貼上文字一律純文字（不帶進網頁的字型與顏色）
  stage.addEventListener('paste', e => { if (!e.target.isContentEditable) return; e.preventDefault(); document.execCommand('insertText', false, (e.clipboardData.getData('text/plain') || '').replace(/\r\n?/g, '\n')) })
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
      const record=x=>x && typeof x==='object' && !Array.isArray(x);
      if (j.format !== 'masters-edit-v1' || j.code !== D.meta.code || !record(j.S) || !record(j.IMG)) throw new Error('這不是這份簡報的匯出檔');
      if(!['v','text','extra'].every(k=>record(j.S[k])) || (j.S.pages!=null && (!Array.isArray(j.S.pages)||!j.S.pages.length||!j.S.pages.some(p=>p&&!p.hidden)||!j.S.pages.every(p=>record(p)&&REG[p.type]&&(!p.items||Array.isArray(p.items)))))) throw new Error('編輯檔的頁面資料不完整');
      for (const [k, v] of Object.entries(j.IMG)) if (!/^\d+:/.test(k) || !record(v) || (v.d && !/^data:image\/(jpeg|png|webp|gif);base64,/.test(v.d)) || (v.pos && !/^[\d.]+% [\d.]+%$/.test(v.pos)) || (v.hidden&&(!record(v.hidden)||!Object.values(v.hidden).every(x=>x===true)))) throw new Error('匯入檔裡有不合格的照片資料');
      const previous={state:{...S},images:IMG,pages:D.pages};
      IMG=j.IMG;Object.assign(S,{page:0,v:{},text:{},extra:{},pages:null},j.S);D.pages=S.pages||JSON.parse(JSON.stringify(P0));normalizeMotion();
      if(!saveImg()||!save()){
        IMG=previous.images;Object.keys(S).forEach(k=>delete S[k]);Object.assign(S,previous.state);D.pages=previous.pages;saveImg();save();
        throw new Error('瀏覽器存不下這個編輯檔，原內容已保留');
      }
      SEL=null;played.clear();render();msg('已開啟');
    } catch (e) { msg(e.message || '匯入失敗', true) }
  }; $('file').click() }
  if (q.has('edit')) { EDIT = true; PRESENT = false; document.body.classList.add('edit'); syncMode(); $('editTog').textContent = '編輯'; $('editTog').setAttribute('aria-pressed','true'); $('layoutEditTog').setAttribute('aria-pressed','true'); $('layoutEditTog').textContent='編輯' }
  M.edit = { get on() { return EDIT }, imgs: () => IMG, prep }
  // T05: narrow presentation adapter; preview frames never read/write editor storage.
  M.presentation = {
    get preview() { return PREVIEW },
    get current() { return S.page },
    get total() { return D.pages.length },
    get visible() { return visiblePages() },
    adjacent: adjacentPage,
    go, step: d => go(navigationPage() + d),
    hit(cx, cy) { const r = stage.getBoundingClientRect(), k = r.width / 1920, x = (cx - r.left) / k, y = (cy - r.top) / k; return !!BOX.find(b => b && b.to >= 0 && x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) },
    present(on = true) { if (EDIT) setEdit(false); PRESENT = on; syncMode(); render() },
    subscribe(fn) { addEventListener('masters:page', fn); return () => removeEventListener('masters:page', fn) },
    page(pi) {
      if (!D.pages[pi]) return null
      const boxes = BOX.slice(), root = document.createElement('div')
      try { root.innerHTML = html(pi); applyImgs(root, pi) } finally { BOX.splice(0, BOX.length, ...boxes) }
      const p = D.pages[pi], text = [...root.querySelectorAll('[data-k]')].map(e => e.textContent.trim()).filter(Boolean)
      const explicit = Array.isArray(p.notes) ? p.notes.filter(x => typeof x === 'string' && x.trim()) : typeof p.notes === 'string' && p.notes.trim() ? [p.notes] : null
      const im = [...root.querySelectorAll('img, image')].find(el=>el.dataset.photoHidden!=='true')
      return { hidden: !!p.hidden, title: String(S.text[pi + ':title'] ?? p.title ?? TYPES[p.type]), notes: explicit || [...new Set(text)], image: im ? srcOf(im) : null }
    },
    snapshot(pi) {
      if (pi < 0 || pi >= D.pages.length) return null
      return JSON.parse(JSON.stringify({ mastersPreview: true, D, S: { ...S, page: pi }, IMG }))
    }
  }
  if (PREVIEW) {
    document.body.classList.add('preview')
    $('saveInfo').textContent = '隔離預覽・不寫入本機存檔'
    addEventListener('message', e => {
      if (e.source !== parent || e.origin !== (location.protocol === 'file:' ? 'null' : location.origin) || !e.data?.mastersPreview) return
      const data = e.data
      if (!Array.isArray(data.D?.pages) || !Number.isInteger(data.S?.page)) return
      historySuspended = true
      try {
        D.pages = data.D.pages; D.meta = data.D.meta
        Object.keys(S).forEach(key => delete S[key])
        Object.assign(S, { page: 0, v: {}, text: {}, extra: {}, pages: null }, data.S)
        IMG = data.IMG || {}; render()
      } finally { historySuspended = false; resetHistoryBaseline() }
    })
    if (!q.has('edit')) addEventListener('keydown', e => e.stopImmediatePropagation(), true)
  }
  M.editAPI = {
    page: (i=S.page) => D.pages[i], variant: (i=S.page) => chosen(i)?.id || '',
    presenting: () => PRESENT, prepareImage: prep, message: msg, selectedPhoto: () => selEl(),
    syncPhotoTools, removePhoto, editPhoto, isCropping:el=>!!SEL&&selEl()===el,
    clearPhotoSelection: () => { cancelPhotoDrag();SEL=null;SEL_SLOT=null;drawSel() },
    save: () => { S.pages=D.pages; return save() },
    commit: () => { S.pages=D.pages; if (!save()) { msg('瀏覽器空間不足，請先下載編輯檔再減少圖片',true); return false } render(0,true); return true }
  }
  let history = null, historyPending = false, historySuspended = false, historyInputKey = '', historyQueuedKey = ''
  const historyRead = () => {
    const { page, pages, ...state } = S
    return { page, content: { pages: D.pages, state, images: IMG } }
  }
  function historyAllowed() { return !PREVIEW || q.has('edit') }
  function queueHistory() {
    if (!history || historySuspended || !historyAllowed()) return
    historyQueuedKey = historyInputKey
    if (historyPending) return
    historyPending = true
    queueMicrotask(flushHistory)
  }
  function flushHistory() {
    if (!historyPending) return
    historyPending = false
    const key = historyQueuedKey; historyQueuedKey = ''
    if (!historySuspended) history?.record(key)
  }
  function restoreHistory(snapshot) {
    const previous = historyRead()
    const apply = value => { Object.keys(S).forEach(key => delete S[key]); Object.assign(S, value.content.state, {page:value.page, pages:value.content.pages}); D.pages = value.content.pages; IMG = value.content.images }
    historySuspended = true
    try {
      apply(snapshot)
      if (!saveImg() || !save()) throw new Error('儲存空間不足，無法復原；已保留目前內容')
      SEL = null; render(); return true
    } catch (error) {
      apply(previous); saveImg(); save(); render(); msg(error.message || '無法復原；已保留目前內容', true); return false
    } finally { historySuspended = false }
  }
  const emitHistory = () => dispatchEvent(new CustomEvent('masters:history', {detail:{canUndo:!!history?.canUndo,canRedo:!!history?.canRedo}}))
  function resetHistoryBaseline() {
    historyPending = false; historyQueuedKey = ''; historyInputKey = ''
    history = historyAllowed() ? createMastersHistory({read:historyRead,restore:restoreHistory,notify:emitHistory}) : null
    emitHistory()
  }
  M.history = {
    undo() { flushHistory(); return history?.undo() || false },
    redo() { flushHistory(); return history?.redo() || false },
    get canUndo() { flushHistory(); return !!history?.canUndo },
    get canRedo() { flushHistory(); return !!history?.canRedo }
  }
  addEventListener('keydown', event => {
    if (!historyAllowed() || event.isComposing || !(event.ctrlKey || event.metaKey) || event.altKey || event.target.isContentEditable || event.target.closest?.('input,textarea,select,[contenteditable=true]')) return
    const key = event.key.toLowerCase(), undo = key === 'z' && !event.shiftKey, redo = key === 'y' || (key === 'z' && event.shiftKey)
    if (!undo && !redo) return
    event.preventDefault(); undo ? M.history.undo() : M.history.redo()
  })
  M.start = () => {
    $('addType').innerHTML = Object.entries(TYPES).filter(([k]) => REG[k]).map(([k,t]) => `<option value="${k}">${t}</option>`).join('')
    render()
    if (historyAllowed() && !history) resetHistoryBaseline()
  }
  M.info = () => D.pages.map((p, k) => ({ page: k, type: p.type, n: pageItems(p, k).length, variants: variantsFor(k).map(x => ({ id: x.v.id, ok: x.ok, why: x.why, range: x.v.range })) }))
})()
