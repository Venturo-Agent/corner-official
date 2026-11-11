// 遊戲開場介面（docs/發表會版-觀眾動線-20261111.md；舊單 遊戲化分工-20261110.md）
// 動線：載入（進度＋這團小知識）→ 冷開場（main.js 有接 HUD.teaser 才播）→ 漫途工作室標誌 → 角落主選單
//   主選單：角色介紹／公司簡介／行程介紹 可來回逛；開始旅程後前後都能走（11/10 William：要能回上一頁、走得到最後）→ 關卡卡、逐日 HUD、關卡地圖進度
// 不打包、在 data.js 之前載入（一開檔就有載入畫面）。不寫死團名／地名／人名／公司名：全部讀 window.JOURNEY（公司層 J.company、團層 J.story＋行程）。
// main.js 不呼叫也能動：自己看 window.__journey 的 step 與 ready；main.js 要接手時用 window.HUD.*（交件單 docs/交件-ui.md）。
(() => {
  const $ = (id) => document.getElementById(id);
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const q = new URLSearchParams(location.search), direct = q.has('n') || q.has('play');
  const PRO = ['brand', 'why', 'promise', 'hq'];
  let J = null, CO = {}, SCN = [], last = -2, expect = null, state = 'load', cur = 0, proI = 0, tipI = 0, TIPS = [];
  let explicit = false, shown = 0, target = 0.03, cap = 0.3, ready = false, teaserFn = null, onGo = null, stageKey = null, dayKey = null, decorated = false;
  const J_ = () => window.__journey, idx = (k) => SCN.findIndex((s) => s.k === k);
  const goto = (i) => { if (i < 0 || !J_()) return; expect = i; J_().go(i); };
  const body = document.body; body.classList.add('hud');
  const el = (id, cls, html) => { const e = document.createElement('div'); e.id = id; if (cls) e.className = cls; if (html) e.innerHTML = html; body.appendChild(e); return e; };

  // 橫向外殼：每日、公司與回憶版沿原設計；轉向只遮畫面，不重建旅程
  const portraitScreen = matchMedia('(orientation:portrait) and (max-width:1024px) and (any-pointer:coarse)');
  const touchScreen = () => navigator.maxTouchPoints > 0 || matchMedia('(any-pointer:coarse)').matches;
  let landscape = !['daily', 'company', 'memory'].includes(q.get('mode')), rotateWait = null, lockTried = false;
  const ROT = el('hud-rotate', '', '<div class="sheet"><div class="turn" aria-hidden="true"><i></i><b></b></div><p>請把手機轉橫</p><small>轉橫後繼續旅程</small></div>');
  ROT.setAttribute('role', 'dialog'); ROT.setAttribute('aria-label', '請把手機轉橫'); ROT.setAttribute('aria-modal', 'true');
  const rotateBlocked = () => landscape && portraitScreen.matches;
  function orientationUI() {
    const blocked = rotateBlocked(); body.classList.toggle('hud-landscape', landscape); body.classList.toggle('hud-rotated', blocked);
    const viewport = document.querySelector('meta[name=viewport]'), content = `width=device-width,initial-scale=1${landscape ? ',viewport-fit=cover' : ''}`;
    if (viewport && viewport.content !== content) viewport.content = content;
    ROT.hidden = !blocked;
    [...body.children].forEach((e) => { if (e !== ROT && !['SCRIPT', 'STYLE'].includes(e.tagName)) e.inert = blocked; });
    document.dispatchEvent(new CustomEvent('hud:orientation', { detail: { blocked } }));
    if (!blocked && rotateWait) { const fn = rotateWait; rotateWait = null; fn(); }
    if (!blocked && typeof touchHint === 'function') touchHint();
  }
  function inLandscape(fn) { if (rotateBlocked()) rotateWait = fn; else fn(); }
  async function lockLandscape() {
    if (!landscape || lockTried || !/Android/i.test(navigator.userAgent) || !touchScreen()) return;
    lockTried = true;
    try { if (!document.fullscreenElement && document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen(); } catch (x) { }
    try { if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape'); } catch (x) { }
  }
  addEventListener('resize', orientationUI);
  if (portraitScreen.addEventListener) portraitScreen.addEventListener('change', orientationUI);
  else portraitScreen.addListener(orientationUI);
  // 舊版 iOS 的多指手勢也不交給整頁縮放；每日版沿原操作
  addEventListener('gesturestart', (e) => { if (landscape) e.preventDefault(); }, { passive: false });

  // ── 0 載入：一張紙，只有這團的名字、紅線進度條、這團的小知識（先給畫面，不先給公司） ──
  const L = el('hud-load', '', `<div class="fib"></div><div class="in"><p class="nm"><span class="tn"></span><span class="suf"></span></p><p class="dt"></p>
    <div class="row"><span class="st">LOADING</span><span class="pct">0%</span></div><div class="bar"><i></i></div>
    <p class="tip"><b>旅程小知識</b><span class="tx"></span></p></div>`);
  const bar = L.querySelector('.bar i'), pct = L.querySelector('.pct'), st = L.querySelector('.st'), tip = L.querySelector('.tip');
  function nextTip() {
    if (!TIPS.length) return; const [k, v, d] = TIPS[tipI++ % TIPS.length];
    tip.classList.remove('on'); setTimeout(() => { tip.querySelector('.tx').innerHTML = `${d ? `<em>${d}</em>` : ''}<strong>${esc(k)}</strong>${esc(v)}`; tip.classList.add('on'); }, 360);
  }
  const tipTimer = setInterval(nextTip, 4600);
  // 進度：main.js 呼叫 HUD.loading 就照它；沒呼叫就用里程碑（資料到、程式到、預熱完）＋中間慢慢爬
  function tick() {
    if (!explicit) {
      if (window.JOURNEY && cap < 0.62) { cap = 0.62; target = Math.max(target, 0.38); }
      if (J_() && cap < 0.96) { cap = 0.96; target = Math.max(target, 0.66); }
      target += (cap - target) * 0.006;
    }
    if (J_() && J_().ready && !ready) HUD.ready();
    shown += (Math.max(target, ready ? 1 : 0) - shown) * 0.12;
    bar.style.transform = `scaleX(${shown.toFixed(4)})`; pct.textContent = `${Math.min(100, Math.round(shown * 100))}%`;
    if (state === 'load') requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // ── 1 冷開場：上下黑邊＋一句序言（foreword.lead）；鏡頭由 main.js 的 HUD.teaser(fn) 負責，沒接就跳過 ──
  const TZ = el('hud-teaser', '', '<i class="lb t"></i><i class="lb b"></i><p class="cap"></p>');
  // ── 2 工作室標誌：漫途 V 標＋字標（CO.maker），黑底一閃 ──
  const B = el('hud-boot', '', '<div class="mk"><img class="v" alt=""><img class="w" alt=""></div>');
  // ── 3 主選單：角落標誌＋口號＋本次旅程＋四個選項；角色介紹在同一張紙上換內容 ──
  const M = el('hud-menu', '', `<div class="fib"></div><i class="cn tl"></i><i class="cn tr"></i><i class="cn bl"></i><i class="cn br"></i>
    <div class="home"><div class="logo"><img class="clogo" alt=""><p class="pre"></p><h1><div class="sun"><i></i><i></i><i></i></div><span class="main"></span></h1></div>
      <div class="mission"><p class="mk">NEW JOURNEY<i>·</i>本次旅程</p><p class="nm"><span class="tn"></span><span class="suf"></span></p><p class="l2"></p><p class="meta"></p></div>
      <nav class="opts"></nav><p class="hint">← → 選擇　ENTER 確定</p></div>
    <div class="offer"><p class="ttl"><b>OFFER</b>費用與報名</p><div class="rows"></div><p class="hint">ESC 返回</p></div>
    <div class="people"><p class="ttl"><b>CHARACTERS</b>角色介紹</p><div class="cards"></div><p class="hint">移到卡片上看背景　ESC 返回</p></div>
    <p class="credit"><img class="vm" alt=""><span></span></p>`);
  let OPTS = [['people', '角色介紹', 'CHARACTERS'], ['prologue', '公司簡介', 'COMPANY'], ['route', '行程總覽', 'ROUTE'], ['start', '啟程', 'DEPART']];
  const drawOpts = () => { M.querySelector('.opts').innerHTML = OPTS.map(([k, t, e], i) => `<button type="button" data-k="${k}" data-i="${i}" class="${k === 'start' ? 'go' : ''}"><b>${t}</b><small>${e}</small></button>`).join(''); };
  M.querySelector('.opts').addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) pick(b.dataset.k); });
  M.querySelector('.opts').addEventListener('mouseover', (e) => { const b = e.target.closest('button'); if (b) focusOpt(+b.dataset.i); });
  // 返回主選單（角色介紹、公司簡介、行程介紹時在左上角）
  const BK = el('hud-back', '', '<button type="button">返回主選單<small>ESC</small></button>');
  BK.addEventListener('click', () => toMenu());

  function fill() {
    const tt = J.title || {}, ch = (J.story && J.story.chapters) || [], mk = CO.maker || {};
    L.querySelector('.tn').textContent = tt.main || ''; L.querySelector('.tn').style.setProperty('--n', [...(tt.main || 'x')].length); L.querySelector('.suf').textContent = tt.suffix || '';
    L.querySelector('.dt').textContent = [J.client, J.dates && J.dates.range].filter(Boolean).join('　·　'); L.classList.add('named');
    if (CO.logo) M.querySelector('.clogo').src = CO.logo; else M.querySelector('.clogo').remove();
    M.querySelector('.pre').innerHTML = [CO.en, CO.name].filter(Boolean).map((x) => `<span>${esc(x)}</span>`).join('　');
    M.querySelector('.main').textContent = CO.slogan || CO.name || '';
    M.querySelector('.tn').textContent = tt.main || ''; M.querySelector('.mission .suf').textContent = tt.suffix || '';
    M.querySelector('.l2').innerHTML = esc(tt.line2 || '').replace(/\s*×\s*/g, '<i>×</i>');
    M.querySelector('.meta').innerHTML = [J.client, J.dates && J.dates.range, ch.length ? `${ch.length} STAGE${ch.length > 1 ? 'S' : ''}` : '', J.days ? `${J.days.length} DAY${J.days.length > 1 ? 'S' : ''}` : ''].filter(Boolean).map((x) => `<span>${esc(x)}</span>`).join('<i>·</i>');
    M.querySelector('.credit span').textContent = CO.credit || '';
    if (mk.mark && CO.credit) M.querySelector('.credit .vm').src = mk.mark; else M.querySelector('.credit .vm').remove();
    if (mk.mark) B.querySelector('.v').src = mk.mark; else B.querySelector('.v').remove();
    if (mk.logo) B.querySelector('.w').src = mk.logo; else B.querySelector('.w').remove();
    capFill((J.story.foreword && J.story.foreword.lead) || '');
    if (PROP) {   // 提案版：存檔欄改「提案」＋客戶名；選項照觀眾的問題排：為什麼找我們 → 行程亮點 → 費用與報名 → 開始
      M.querySelector('.mk').innerHTML = 'PROPOSAL<i>·</i>提案';
      if (J.client) M.querySelector('.mission .nm').insertAdjacentHTML('beforebegin', `<p class="for">致　${esc(J.client)}</p>`);
      M.querySelector('.meta').innerHTML = [J.dates && J.dates.range, J.days ? `${J.days.length} DAYS` : ''].filter(Boolean).map((x) => `<span>${esc(x)}</span>`).join('<i>·</i>');
      OPTS = [['people', '角色介紹', 'CHARACTERS'], ['prologue', '公司簡介', 'COMPANY'], ['route', '行程總覽', 'ROUTE'], ['offer', '費用與報名', 'OFFER'], ['start', '啟程', 'DEPART']];
      if (!OFFER) OPTS = OPTS.filter((o) => o[0] !== 'offer'); else M.querySelector('.offer .rows').innerHTML = offerRows(true);
    }
    if (COMPANY) companyInit();
    if (MEMO) {   // 回程回憶版：存檔欄改「旅程回憶」；選項只留行程回顧與重溫旅程（不再介紹公司）
      M.querySelector('.mk').innerHTML = 'MEMORIES<i>·</i>旅程回憶';
      OPTS = [['route', '行程回顧', 'ROUTE'], ['start', '重溫旅程', 'REPLAY']];
    }
    introInit(); people(); if (!(CO.people || []).length) OPTS = OPTS.filter((o) => o[0] !== 'people');
    if (!CPAGES.length) OPTS = OPTS.filter((o) => o[0] !== 'prologue');   // 沒有公司故事就不放公司簡介，不出空字卡
    drawOpts(); if (!CO.slogan) { M.querySelector('h1').remove(); M.classList.add('noslogan'); }
    // 小知識只用案件裡已有的字：四大亮點＋每天照片說明（「名稱　·　說明」）
    const seen = new Set();
    (J.highlights || []).forEach((h) => { if (h.k && h.v && !seen.has(h.k)) { seen.add(h.k); TIPS.push([h.k, h.v, '']); } });
    (J.days || []).forEach((d) => { const [k, v] = String(d.cap || '').split(/\s*·\s*/); if (k && v && !seen.has(k.trim())) { seen.add(k.trim()); TIPS.push([k.trim(), v.trim(), `DAY ${pad(d.n)}`]); } });
    nextTip();
  }

  // 角色介紹：CO.people = [{ name, role, en, photo, bio: 字串或字串陣列 }]；沒資料就不出這個選項（11/10 主控：畫面不出現「待補」），不編人
  function people() {
    const P = CO.people || [], box = M.querySelector('.cards');
    box.innerHTML = P.length ? P.map((p, i) => `<button type="button" class="card" aria-expanded="false" style="--i:${i}"><div class="face">
        ${p.photo ? `<img src="${esc(p.photo)}" alt="">` : `<span class="mono">${esc(String(p.name || '').slice(0, 1))}</span>`}
        <p class="role">${esc(p.en || p.role || '')}</p><p class="name">${esc(p.name)}</p>${p.en && p.role ? `<p class="sub">${esc(p.role)}</p>` : ''}</div>
      <div class="back"><p class="name">${esc(p.name)}</p>${[].concat(p.bio || []).map((x) => `<p>${esc(x)}</p>`).join('')}</div></button>`).join('')
      : '';
    box.addEventListener('click', (e) => { const c = e.target.closest('.card'); if (c) c.setAttribute('aria-expanded', String(c.classList.toggle('flip'))); });
    M.querySelector('.people .hint').textContent = touchScreen() ? '點一下看背景　再點收回' : '移到卡片上看背景　ESC 返回';
  }

  // 冷開場字幕：照標點分詞組、詞組內不拆（同逐日標題）；詞組比畫面寬才再照詞切，還放不下就縮字級（William 最在意斷字：「楓紅」不能拆）
  function capFill(t) {
    const c = TZ.querySelector('.cap'); c.innerHTML = `<span class="in">${esc(t).split(/(?<=[，、。；：！？　])/).filter(Boolean).map((x) => `<span class="ph">${x}</span>`).join('')}</span>`; capFit();
  }
  function capFit() {
    const c = TZ.querySelector('.cap'); if (!c || !c.textContent) return; c.style.fontSize = '';
    const W = () => c.clientWidth - 2, wide = () => [...c.querySelectorAll('.ph, .w')].filter((x) => x.getBoundingClientRect().width > W());
    wide().forEach((p) => { if (p.classList.contains('ph') && 'Segmenter' in Intl) p.innerHTML = [...new Intl.Segmenter('zh-Hant', { granularity: 'word' }).segment(p.textContent)].map((g) => `<span class="w">${esc(g.segment)}</span>`).join(''); });
    for (let f = parseFloat(getComputedStyle(c).fontSize), i = 0; wide().length && i < 12; i++) c.style.fontSize = `${(f *= 0.92).toFixed(1)}px`;
  }
  addEventListener('resize', capFit); if (document.fonts) document.fonts.ready.then(capFit);

  // ── 狀態切換 ──
  function setState(s) { state = s; body.dataset.hud = s; sceneAt = Date.now(); post(); if (s === 'run') { if (SCROLL) setTimeout(scrollHint, 1600); setTimeout(touchHint, 0); } }
  function afterReady() {
    if (rotateBlocked()) { rotateWait = afterReady; return; }
    clearInterval(tipTimer);
    if (direct || state === 'run') { [L, B, M, TZ].forEach((x) => x.remove()); setState('run'); if (CPAGES.length && PRO.includes((SCN[J_() && J_().step] || {}).k)) introShow(Math.max(0, cpI), false); return; }
    if (DAILY) { [L, B, M, TZ].forEach((x) => x.remove()); setState('daily'); if (!SCN.length) readScenes(); showDay(todayN(), 0); return; }
    if (teaserFn && !COMPANY) {   // 公司介紹版不播這團的冷開場
      L.classList.add('away'); setState('teaser'); TZ.classList.add('on'); capFit();
      Promise.resolve().then(() => teaserFn(TZ.querySelector('.cap').textContent)).catch(() => {}).then(() => { TZ.classList.remove('on'); inLandscape(boot); });
    } else boot();
  }
  function boot() {
    setState('boot'); B.classList.add('on');
    if (!B.querySelector('img')) { B.remove(); menu(); return; }
    requestAnimationFrame(() => requestAnimationFrame(() => B.classList.add('show')));
    setTimeout(() => inLandscape(() => { L.remove(); menu(); B.classList.add('out'); setTimeout(() => B.remove(), 900); }), 2100);
  }
  function menu() {
    if (state === 'run') return;
    introHide(); setState('menu'); M.classList.add('on'); M.classList.remove('up', 'sub-people', 'sub-offer'); WK.classList.remove('on'); BK.classList.remove('on'); L.remove(); focusOpt(cur);
  }
  function focusOpt(i) { cur = (i + OPTS.length) % OPTS.length; M.querySelectorAll('.opts button').forEach((b, j) => b.classList.toggle('cur', j === cur)); if (typeof post === 'function' && state === 'menu') post(); }
  const toMenu = () => menu();
  function pick(k) {
    if (state === 'run') return;
    focusOpt(OPTS.findIndex((o) => o[0] === k));
    if (k === 'people') { setState('people'); M.classList.add('sub-people'); BK.classList.add('on'); }
    if (k === 'offer') { setState('people'); M.classList.add('sub-offer'); BK.classList.add('on'); }
    if (k === 'prologue') { setState('prologue'); M.classList.add('up'); BK.classList.add('on'); proI = 0; showPro(); }
    if (k === 'route') { introHide(); setState('route'); M.classList.add('up'); BK.classList.add('on'); goto(idx('overview')); }
    if (COMPANY && ['prologue', 'works', 'contact', 'start'].includes(k)) {   // 公司介紹版：一條順序，選項只是從哪裡開始
      tourStart(k === 'works' ? CSEQ.findIndex((x) => CPAGES[x.intro] && CPAGES[x.intro].id === 'portfolio') : k === 'contact' ? CSEQ.length - 1 : 0, k === 'start'); return;
    }
    if (k === 'start') start();
  }
  function showPro() { introShow(proI); }
  function proStep(d) { proI += d; if (proI < 0) proI = 0; else if (proI >= CPAGES.length) toMenu(); else showPro(); }
  function start() {
    introHide();
    setState('run'); M.classList.add('up'); BK.classList.remove('on'); setTimeout(() => M.remove(), 1500);
    if (onGo) onGo(); else goto(idx('depart'));
    document.dispatchEvent(new CustomEvent('hud:start'));
  }

  // ── 鍵盤與點擊：開始前由這裡管（攔在 main.js 前面）；開始後前後都能走（William 11/10 取消只往前）──
  const NEXT = ['ArrowRight', ' ', 'PageDown', 'Enter'], PREV = ['ArrowLeft', 'PageUp', 'Backspace'];
  // 往下一頁；已在最後一幕就切換「Q&A」提示（片尾停住時給主講人一個收尾的點；總檢十名外）
  const QA = el('hud-qa', '', '<b>Q&amp;A</b><span>問題與交流</span>');
  function fwd() { if (introStep(1)) return; const j = J_(); if (!j) return; if (j.step >= SCN.length - 1) { QA.classList.toggle('on'); post(); } else { QA.classList.remove('on'); j.go(j.step + 1); } }
  function back() { if (introStep(-1)) return; const j = J_(); if (!j) return; if (QA.classList.contains('on')) { QA.classList.remove('on'); post(); return; } if (j.step > 0) j.go(j.step - 1); }
  // 左右滑一次一幕；垂直拖曳只捲卡片，多指不翻幕，拖過後吃掉合成點擊
  let sx = null, sy = 0, touchX = null, touchY = 0, suppressTap = 0, swipeAt = 0;
  addEventListener('touchstart', (e) => {
    sx = null;
    if (e.touches.length !== 1 || rotateBlocked()) { touchX = null; if (landscape) suppressTap = Date.now() + 600; return; }
    touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
    if (state === 'run' && !e.target.closest('button, a, input, select, textarea, #dots')) { sx = touchX; sy = touchY; }
  }, { passive: true });
  addEventListener('touchmove', (e) => {
    if (e.touches.length !== 1) { sx = touchX = null; if (landscape && e.cancelable) e.preventDefault(); }
  }, { passive: false });
  addEventListener('touchend', (e) => {
    const t = e.changedTouches[0];
    if (landscape && e.touches.length) suppressTap = Date.now() + 600;
    if (landscape && touchX != null && Math.hypot(t.clientX - touchX, t.clientY - touchY) > 12) suppressTap = Date.now() + 600;
    touchX = null;
    if (state !== 'run' || sx == null || e.touches.length || rotateBlocked()) { sx = null; return; }
    const dx = t.clientX - sx, dy = t.clientY - sy; sx = null;
    const threshold = Math.max(36, Math.min(60, innerWidth * 0.06));
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.5 && Date.now() - swipeAt > 450) { swipeAt = Date.now(); if (dx > 0) back(); else fwd(); }
  }, { passive: true });
  addEventListener('touchcancel', () => { sx = touchX = null; suppressTap = Date.now() + 600; }, { passive: true });
  // ── 手機捲動版（同業標竿第三招）：觀眾自己用手機看時，往上滑（滾輪往下）＝下一幕、反向＝上一幕，一次只走一幕（吸附），3D 照常 go。
  //    ?scroll=1 一開就進入；手機直式在旅程中第一次上下滑自動進入。只多一種本機手勢，鍵盤、點擊、主講人視窗都照舊 ──
  let SCROLL = q.get('scroll') === '1', scrAt = 0, gy = null, gx = 0, gIn = null, gCards = [], gCan = [false, false];
  const phonePortrait = () => !landscape && matchMedia('(orientation:portrait) and (max-width:820px) and (pointer:coarse)').matches;
  const scrollOk = () => !landscape && (['run', 'tour', 'prologue'].includes(state) || (state === 'menu' && SCROLL));
  function scrollStep(d) {
    if (Date.now() - scrAt < 450) return; scrAt = Date.now();
    if (state === 'tour') cstep(d); else if (state === 'prologue') proStep(d); else if (state === 'menu') { if (d > 0) pick('start'); } else (d > 0 ? fwd : back)();
  }
  function scrollOn() { SCROLL = true; body.classList.add('hud-scroll'); }
  // 卡片自己還能往這個方向捲，就先讓卡片捲（同每日版）
  function innerScroller(t) { for (let e = t instanceof Element ? t : null; e && e !== body; e = e.parentElement) { const o = getComputedStyle(e).overflowY; if ((o === 'auto' || o === 'scroll') && e.scrollHeight > e.clientHeight + 2) return e; } return null; }
  const innerCan = (e, d) => e && (d > 0 ? e.scrollTop + e.clientHeight < e.scrollHeight - 2 : e.scrollTop > 2);
  const dragTo = (y, ms) => gCards.forEach((c) => { c.style.transition = ms ? `translate ${ms}ms cubic-bezier(.2,.8,.2,1)` : 'none'; c.style.translate = y ? `0 ${y}px` : ''; });
  addEventListener('touchstart', (e) => {
    if (!scrollOk() || e.touches.length > 1) { gy = null; return; }
    gy = e.touches[0].clientY; gx = e.touches[0].clientX; gIn = innerScroller(e.target); gCards = []; gCan = [innerCan(gIn, 1), innerCan(gIn, -1)];   // 起手時卡片還能捲的方向：這一滑先給卡片捲，下一滑才換幕
  }, { passive: true });
  addEventListener('touchmove', (e) => {   // 卡片跟著手指走一小段（只動 translate），放手再吸附
    if (gy == null || !(SCROLL || phonePortrait())) return; const dy = e.touches[0].clientY - gy, dx = e.touches[0].clientX - gx;
    if (Math.abs(dy) < 8 || Math.abs(dy) < Math.abs(dx) || gCan[dy < 0 ? 0 : 1]) return;
    if (!gCards.length) gCards = [...document.querySelectorAll('.scene')].filter((c) => +getComputedStyle(c).opacity > 0.3);
    dragTo(Math.max(-90, Math.min(90, dy * 0.35)));
  }, { passive: true });
  addEventListener('touchend', (e) => {
    if (gy == null) return; const dy = e.changedTouches[0].clientY - gy, dx = e.changedTouches[0].clientX - gx, d = dy < 0 ? 1 : -1; gy = null;
    const go = Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx) * 1.5 && !gCan[d > 0 ? 0 : 1] && scrollOk() && (SCROLL || (phonePortrait() && state === 'run'));
    if (!go) { if (gCards.length) dragTo(0, 300); gCards = []; return; }
    if (!SCROLL) scrollOn();
    if (gCards.length) { dragTo(d * 46); requestAnimationFrame(() => requestAnimationFrame(() => { dragTo(0, 520); gCards = []; })); }   // 新的一幕從手指走的反方向補上來
    scrollStep(d);
  }, { passive: true });
  addEventListener('wheel', (e) => {
    if (!SCROLL || !scrollOk() || Math.abs(e.deltaY) < 20) return; const d = e.deltaY > 0 ? 1 : -1;
    if (innerCan(innerScroller(e.target), d) || Date.now() - scrAt < 900) return; scrollStep(d);
  }, { passive: true });
  const SH = el('hud-sh', '', '<i></i><span>往上滑　下一幕</span>'); let shown1 = false;   // 捲動版第一次進旅程時提示一次
  function scrollHint() { if (shown1) return; shown1 = true; SH.classList.add('on'); setTimeout(() => SH.classList.remove('on'), 3200); }
  if (SCROLL) scrollOn();
  const TH = el('hud-touch-hint', '', '點右邊下一步、左邊上一步');
  TH.setAttribute('role', 'status');
  let touchHintShown = false;
  function touchHint() {
    if (!landscape || !touchScreen() || rotateBlocked() || state !== 'run' || !SCN[J_() && J_().step] || SCN[J_().step].k !== 'day' || touchHintShown) return;
    touchHintShown = true;
    try { if (localStorage.getItem('journey-touch-hint') === '1') return; localStorage.setItem('journey-touch-hint', '1'); } catch (x) { }
    TH.classList.add('on'); setTimeout(() => TH.classList.remove('on'), 4000);
  }
  // 鍵盤、簡報筆、主講人視窗共用一套：回傳 true＝這裡處理掉了（不再給 main.js）
  function keyCmd(k, remote) {
    if (rotateBlocked()) return true;
    if (k === 'b' || k === 'B' || k === '.') { blackout(); return true; }   // 簡報筆的黑屏鍵（多半送 B 或 .）
    if (k === 'p' || k === 'P') { if (!remote) presenter(); return true; }
    if ((k === 'k' || k === 'K') && ODO.dataset.ok) { odoToggle(); return true; }
    const nav = NEXT.includes(k) || PREV.includes(k) || ['ArrowUp', 'ArrowDown', 'Escape'].includes(k);
    if (state === 'tour') {   // 公司介紹版：前後都能走，Esc 回主選單
      if (NEXT.includes(k)) cstep(1); else if (PREV.includes(k)) cstep(-1); else if (k === 'Escape') toMenu(); else return false;
      return true;
    }
    if (state === 'daily') {   // 每日版：上下（或左右、翻頁）切昨天／明天
      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(k)) showDay(dayN + 1, 1); else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(k)) showDay(dayN - 1, -1); else return false;
      return true;
    }
    if (state === 'run') {
      if (CP.classList.contains('on') && (NEXT.includes(k) || PREV.includes(k))) { (NEXT.includes(k) ? fwd : back)(); return true; }
      if (NEXT.includes(k) && J_() && J_().step >= SCN.length - 1) { fwd(); return true; }   // 最後一幕再按：Q&A 提示
      if (PREV.includes(k) && QA.classList.contains('on')) { QA.classList.remove('on'); post(); return true; }
      if (remote && J_()) { if (NEXT.includes(k)) { fwd(); return true; } if (PREV.includes(k)) { back(); return true; } }
      return false;                                                         // 本機按鍵照舊交給 main.js 翻頁（前後都可）
    }
    if (!nav) return false;
    if (state === 'menu') { if (k === 'ArrowRight' || k === 'ArrowDown') focusOpt(cur + 1); else if (k === 'ArrowLeft' || k === 'ArrowUp') focusOpt(cur - 1); else if (k === 'Enter' || k === ' ') pick(OPTS[cur][0]); }
    else if (state === 'people') { if (k === 'Escape' || k === 'Enter' || k === 'Backspace') toMenu(); }
    else if (state === 'prologue') { if (k === 'Escape') toMenu(); else if (NEXT.includes(k)) proStep(1); else if (PREV.includes(k)) proStep(-1); }
    else if (state === 'route') { if (k === 'Escape' || NEXT.includes(k) || PREV.includes(k)) toMenu(); }
    return true;
  }
  addEventListener('keydown', (e) => { if (e.ctrlKey || e.metaKey || e.altKey) return; if (keyCmd(e.key, false)) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  addEventListener('click', (e) => {
    if (rotateBlocked() || (landscape && Date.now() < suppressTap && e.detail !== 0)) { e.preventDefault(); e.stopImmediatePropagation(); return; }
    const t = e.target.closest ? e.target : e.target.parentElement, onWorld = t && t.closest('#stage, #brand, .scene, #hud-intro');
    if (t && t.closest('#hud-menu .opts button')) lockLandscape();
    if (state === 'run') {
      if (CP.classList.contains('on') && onWorld && !t.closest('button, a')) { e.stopImmediatePropagation(); if (e.clientX < innerWidth * .2) back(); else fwd(); return; }
      if (landscape && touchScreen() && J_() && onWorld && !t.closest('button, a')) {
        e.stopImmediatePropagation(); if (e.clientX < innerWidth / 2) back(); else fwd(); return;
      }
      // 開始後：點卡片也能翻（手機點到的多半是卡片，不是畫布；總檢 #1）。左側 20%＝上一幕，其餘＝下一幕；畫布的點擊 main.js 自己會翻
      const onCard = t && t.closest('.scene') && !t.closest('button, a, #stage'), left = e.clientX < innerWidth * 0.2;
      if (J_() && onCard) { e.stopImmediatePropagation(); if (left) back(); else fwd(); }
      else if (J_() && onWorld && !left && J_().step >= SCN.length - 1) { e.stopImmediatePropagation(); fwd(); }
      return;
    }
    if (!onWorld) return; e.stopImmediatePropagation();
    if (state === 'prologue') proStep(1); else if (state === 'route') toMenu(); else if (state === 'tour') cstep(1);
  }, true);

  // ── 場景表：直接讀 main.js 的 __journey.sc（場景名陣列；舊版叫 scenes），不自己排順序；章與天照出現順序對到 story.chapters ──
  function readScenes() {
    const j = J_(), names = j && (j.sc || j.scenes); if (!names || !names.length) return false;
    let ci = -1, di = 0; SCN = names.map((x) => { const k = typeof x === 'string' ? x : x.k;
      if (k === 'chapter') { ci++; di = 0; return { k, ci, c: J.story.chapters[ci] }; }
      if (k === 'day') { const c = J.story.chapters[ci] || {}; return { k, ci, c, n: (c.days || [])[di++] }; }
      return { k }; });
    return true;
  }

  // ── 關卡卡：STAGE 01 京都・滋賀 ──
  const S = el('hud-stage', 'scene left');
  function stage(ch) {
    if (typeof ch === 'number') ch = Object.assign({ ci: ch }, J.story.chapters[ch]);
    if (!ch || !ch.days) return; const ci = ch.ci != null ? ch.ci : J.story.chapters.findIndex((c) => c.name === ch.name);
    if (stageKey === ci) return; stageKey = ci;
    const d0 = ch.days[0], d1 = ch.days[ch.days.length - 1];
    S.scrollTop = 0;   // 同一張卡換天：從頂端開始（手機卡片可捲，上一天捲到哪不帶過來）
    S.innerHTML = `<div class="ghost">${pad(ci + 1)}</div>
      <div class="no"><span>STAGE</span>${pad(ci + 1)}</div><div class="k">${esc(ch.en)}</div><h2>${esc(ch.name)}</h2><i class="rule"></i>
      <p class="range">DAY ${pad(d0)}${ch.days.length > 1 ? ' — ' + pad(d1) : ''}<i>·</i>${ch.days.length} DAYS</p>
      <ol>${ch.days.map((n, i) => `<li style="--i:${i}"><b>DAY ${pad(n)}</b><span>${phr(J.days[n - 1].title)}</span></li>`).join('')}</ol>`;
    replay(S);
  }

  // ── 逐日 HUD：天數、今日路線、今日亮點（任務清單，最多三個）、今日美食（days[].food 紙雕立牌，標「示意」：AI 插畫不是餐廳實拍）、住 ──
  const D = el('hud-day', 'scene left');
  // 依實際內容高度收合，保住照片與主文字，不把內容藏到捲軸後面
  function fitDay() {
    if (!D.children.length || D.classList.contains('mem')) { delete D.dataset.fit; return; }
    // 飯店名保持完整單行，先用可用寬度縮字；不拆日文詞組
    const name = D.querySelector('.hn, .stay-name');
    if (name) {
      name.style.fontSize = '';
      const min = matchMedia('(min-width:901px)').matches ? 14 : 12;
      for (let size = parseFloat(getComputedStyle(name).fontSize); name.scrollWidth > name.clientWidth && size > min; size -= .5) name.style.fontSize = Math.max(min, size - .5) + 'px';
    }
    if (!matchMedia('(min-width:901px)').matches) { delete D.dataset.fit; return; }
    const css = getComputedStyle(D), space = D.clientHeight - parseFloat(css.paddingTop) - parseFloat(css.paddingBottom);
    const height = () => [...D.children].reduce((n, e) => {
      const c = getComputedStyle(e);
      return n + e.offsetHeight + parseFloat(c.marginTop) + parseFloat(c.marginBottom);
    }, 0);
    D.dataset.fit = '0';
    for (let n = 1; n <= 3 && height() > space; n++) D.dataset.fit = String(n);
  }
  addEventListener('resize', fitDay);
  D.addEventListener('load', fitDay, true);
  if (document.fonts) document.fonts.ready.then(fitDay);
  function day(d) {
    if (typeof d === 'number') d = J.days[d - 1];
    if (!d || dayKey === d.n) return; dayKey = d.n;
    const mm = MEMO && memOf(d.n); D.classList.toggle('mem', !!mm);
    if (mm) {   // 回憶版：這天有團員照片就換成拍立得（照片＋一句＋提供者）；沒有就照一般逐日卡
      D.scrollTop = 0;
      D.innerHTML = `<div class="pol"><i class="tape"></i><p class="tag">DAY ${pad(d.n)}<i>·</i>${esc(d.date)}</p><figure><img src="${esc(mm.photo)}" alt=""></figure>
        ${mm.caption ? `<p class="cap">${esc(mm.caption)}</p>` : ''}${mm.by ? `<p class="by">${esc(mm.by)}</p>` : ''}</div><p class="ttl">${phr(d.title)}</p>`;
      replay(D); return;
    }
    const ci = J.story.chapters.findIndex((c) => c.days.includes(d.n)), ch = J.story.chapters[ci] || {};
    const legs = String(d.legs || '').split(/\s*→\s*/).filter(Boolean);
    const spots = (d.spots || []).slice(0, 3).map((x) => { const [a, ...b] = String(x).split(/　+/); return [a, b.join(' ')]; });
    D.scrollTop = 0;
    D.innerHTML = `<div class="chip"><b>STAGE ${pad(ci + 1)}</b>${esc(ch.name)}</div>
      ${d.img ? `<figure class="ph${d.imgSize && d.imgSize[1] > d.imgSize[0] ? ' tall' : ''}"><img src="${d.img}" alt=""></figure>` : ''}
      <div class="dn"><span>DAY</span><strong>${pad(d.n)}</strong><em>/ ${pad(J.days.length)}</em><time>${esc(d.date)}</time></div>
      ${legs.length ? `<ol class="route">${legs.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      <h2>${phr(d.title)}</h2>
      ${spots.length ? `<div class="quest"><p class="qh">今日亮點</p><ul>${spots.map(([a, b], i) => `<li style="--i:${i}"><i></i><span>${esc(a)}${b ? `<small>${esc(b)}</small>` : ''}</span></li>`).join('')}</ul></div>` : ''}
      <div class="day-tail">${(d.food || []).length ? `<div class="food"><p class="qh">今日美食</p><ul>${d.food.map((f, i) => `<li style="--i:${i}"><figure><img src="${esc(f.card)}" alt=""><i>示意</i></figure><span>${esc(f.zh)}</span></li>`).join('')}</ul></div>` : ''}
      ${hotelHTML(d, 'meta')}</div>`;
    fitDay();
    replay(D);
  }
  // 標題按逗號分成詞組，每組不拆（窄螢幕才不會把「會／發光」這種詞切開）
  const phr = (t) => esc(t).split(/(?<=[，、])/).map((x) => `<span class="ph">${x}</span>`).join('');
  // 住：第一晚展開成小飯店卡（名字、英文、地區、連住幾晚、一句介紹；days[].hotel 是行程檔原文），連住第二晚起只寫「續住」
  function hotelHTML(d, cls) {
    const h = d.hotel, pv = J.days[d.n - 2];
    const name = (text) => cls === 'meta' ? `<span class="stay-name">${esc(text)}</span>` : esc(text);
    if (!h || !h.name) return d.stay ? `<p class="${cls}"><b>住</b>${name(d.stay)}</p>` : '';
    if (pv && pv.hotel && pv.hotel.name === h.name) return `<p class="${cls} cont"><b>住</b>${name(h.name)}<span>續住</span></p>`;
    return `<div class="hotel"><b>住</b><div><p class="hn">${esc(h.name)}</p>${h.en ? `<p class="he">${esc(h.en)}</p>` : ''}
      ${h.area || h.small ? `<p class="ha">${[h.area, h.small].filter(Boolean).map(esc).join('<i>·</i>')}</p>` : ''}${h.desc ? `<p class="hd">${esc(h.desc)}</p>` : ''}</div></div>`;
  }
  const replay = (e) => { if (!e) return; e.classList.remove('hud-in'); void e.offsetWidth; e.classList.add('hud-in'); };

  // ── 提案版（story.mode = 'proposal'）：費用、報價期限、名額、聯絡顧問全讀 story，沒有的欄位就不印、不編數字 ──
  //   price：字串，或 { amount, unit, note, includes: [], excludes: [] }；validUntil：YYYY-MM-DD；seats：數字或字串；
  //   cta：字串，或 { text, name, title, tel, email, line, url }
  let PROP = false, OFFER = null;
  function offerOf(st) {
    const o = {}, pr = st.price, c = st.cta;
    if (pr) o.price = typeof pr === 'object' ? pr : { amount: String(pr) };
    if (st.validUntil) o.validUntil = String(st.validUntil);
    if (st.seats != null && st.seats !== '') o.seats = String(st.seats);
    if (c) o.cta = typeof c === 'object' ? c : { text: String(c) };
    return Object.keys(o).length ? o : null;
  }
  function daysLeft(d) { const t = Date.parse(String(d).replace(/\//g, '-') + 'T23:59:59'); return isNaN(t) ? null : Math.ceil((t - Date.now()) / 864e5); }
  function offerRows(full) {
    const o = OFFER, r = [], pr = o.price;
    if (pr && (pr.amount || pr.note)) r.push(`<div class="row price"><b>費用</b><p><strong>${esc(pr.amount || '')}</strong>${pr.unit ? `<small>${esc(pr.unit)}</small>` : ''}</p>${pr.note ? `<small class="note">${esc(pr.note)}</small>` : ''}</div>`);
    if (full && pr && (pr.includes || []).length) r.push(`<div class="row"><b>包含</b><ul>${pr.includes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`);
    if (full && pr && (pr.excludes || []).length) r.push(`<div class="row"><b>不含</b><ul class="ex">${pr.excludes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`);
    if (o.validUntil) { const n = daysLeft(o.validUntil);
      r.push(`<div class="row"><b>報價有效至</b><p>${esc(o.validUntil.replace(/-/g, '.'))}${n == null ? '' : n >= 0 ? `<small>還有 ${n} 天</small>` : '<small class="late">已過期</small>'}</p></div>`); }
    if (o.seats) r.push(`<div class="row"><b>名額</b><p>${esc(o.seats)}</p></div>`);
    const c = o.cta;
    if (c) r.push(`<div class="row consult"><b>${esc(c.title || '聯絡顧問')}</b><p>${c.name ? `<strong>${esc(c.name)}</strong>` : ''}${c.text ? `<span>${esc(c.text)}</span>` : ''}</p>
      <p class="ways">${[c.tel, c.email, c.line && `LINE ${c.line}`, c.url].filter(Boolean).map((x) => `<span>${esc(x)}</span>`).join('')}</p></div>`);
    return r.join('');
  }

  // 公司段：八種資料頁，映射既有四幕；同幕先翻 HUD，再換 3D。
  let CPAGES = [], cpI = -1;
  const CP = el('hud-intro', '', '<div class="intro-head"></div><div class="intro-details"></div><footer></footer>');
  CP.setAttribute('role', 'region'); CP.setAttribute('aria-label', '公司簡介');
  const introScene = { origin: 'brand', philosophy: 'why', history: 'why', services: 'promise', team: 'promise', offices: 'hq', info: 'hq', portfolio: 'hq' };
  function introInit() {
    const old = CPAGES[cpI], pages = [];
    (CO.introduction || []).forEach((p) => {
      let rows = [];
      if (p.id === 'origin') rows = [{ body: [CO.lead, CO.body].filter(Boolean).join('\n') }];
      if (p.id === 'philosophy') rows = [{ body: CO.pillarBody }];
      if (p.id === 'history') { const h = CO.history || []; if (!h.length || h.some((x) => !x.year)) return; rows = h.map((x) => ({ title: [x.year, x.title].join('　'), body: x.body })); }
      if (p.id === 'services') rows = CO.serviceItems || [];
      if (p.id === 'team') { if (!(CO.people || []).length) return; rows = CO.people.map((x) => ({ title: [x.name, x.role].filter(Boolean).join('　'), body: [].concat(x.bio || []).join('　'), photo: x.photo })); }
      if (p.id === 'offices') rows = (CO.offices || []).map((x) => ({ title: x.name, body: [x.address, x.phone].filter(Boolean).join('\n') }));
      if (p.id === 'info') rows = [['統一編號', CO.taxId], ['旅行業執照', CO.license], ['品保協會', CO.assoc]].filter((x) => x[1]).map(([title, body]) => ({ title, body }));
      if (p.id === 'portfolio') rows = (CO.portfolio || []).filter((x) => x.title).map((x) => ({ title: x.title, body: [x.country, x.month && x.month.replace('-', '.')].filter(Boolean).join('　') }));
      rows = rows.filter((x) => x.title || x.body); if (!rows.length) return;
      const per = p.id === 'portfolio' ? (innerHeight <= 600 ? 6 : 24) : rows.length;
      for (let at = 0; at < rows.length; at += per) pages.push({ ...p, scene: introScene[p.id], rows: rows.slice(at, at + per), part: Math.floor(at / per), parts: Math.ceil(rows.length / per) });
    });
    CPAGES = pages; cpI = old ? Math.max(0, pages.findIndex((p) => p.id === old.id && p.part === Math.min(old.part, p.parts - 1))) : -1;
  }
  function introHide() { CP.classList.remove('on'); body.classList.remove('intro-visible'); }
  function introShow(i, move = true) {
    const p = CPAGES[i]; if (!p) return introHide(); cpI = i;
    CP.dataset.page = p.id;
    CP.querySelector('.intro-head').innerHTML = `<p class="intro-en">${esc(p.en)}</p><h2>${esc(p.title)}</h2><p class="intro-focus">${esc(p.focus)}</p>`;
    CP.querySelector('.intro-details').innerHTML = p.rows.map((x) => `<article>${x.photo ? `<img src="${esc(x.photo)}" alt="${esc(x.title)}">` : ''}${x.title ? `<h3>${esc(x.title)}</h3>` : ''}${x.body ? `<p>${esc(x.body)}</p>` : ''}</article>`).join('');
    CP.querySelector('footer').textContent = `${CO.name || ''}　·　${i + 1} / ${CPAGES.length}${p.parts > 1 ? `　執行實績 ${p.part + 1} / ${p.parts}` : ''}`;
    CP.classList.add('on'); body.classList.add('intro-visible');
    if (move && J_() && J_().step !== idx(p.scene)) goto(idx(p.scene));
    sceneAt = Date.now(); post();
  }
  function introStep(d) {
    if (!CP.classList.contains('on')) {
      if (d < 0 && SCN[J_() && J_().step - 1] && PRO.includes(SCN[J_().step - 1].k) && CPAGES.length) { introShow(CPAGES.length - 1); return true; }
      return false;
    }
    const i = cpI + d;
    if (i >= 0 && i < CPAGES.length) { introShow(i); return true; }
    if (i < 0) return true;
    introHide(); goto(idx('hq') + 1); return true;
  }
  function introInfo(p) {
    if (!p) return { label: '', notes: [] };
    const notes = (CO.presenterNotes || {})[p.id];
    return { label: `公司簡介　${p.title}${p.parts > 1 ? ` ${p.part + 1}/${p.parts}` : ''}`, notes: notes || [p.focus, ...p.rows.map((x) => [x.title, x.body].filter(Boolean).join('　'))].filter(Boolean), own: !!notes };
  }
  addEventListener('resize', () => { if (!J) return; const on = CP.classList.contains('on'); introInit(); if (COMPANY) CSEQ = CPAGES.map((p, intro) => ({ k: p.scene, intro })).concat([{ k: 'close' }]); if (on) { if (state === 'prologue') proI = cpI; if (state === 'tour') ci2 = cpI; introShow(cpI, false); } });

  // ── 公司簡介：公司四幕改成序章字卡，一句一句推進；第四幕換成「據點」卡（CO.offices，有幾個列幾個） ──
  function decorate() {
    if (decorated || !$('why') || !$('why').children.length) return; decorated = true;
    const ok = $('overview') && $('overview').querySelector('.k');   // 行程介紹與全程回顧用同一個站數（不含機場；總檢 #6）
    if (ok) ok.innerHTML = ok.innerHTML.replace(/\d+\s*STOPS/, `${J.stops.filter((x) => !x.air).length} STOPS`);
    // 片尾：全程回顧（天數、里程、地標、關卡，從資料算）→ 片尾名單（CO.people）＋聯絡、執照（main.js 已放）
    const mem = $('memory'), cl = $('close'), st = J.stops.filter((x) => !x.air);
    mem.classList.add('hud-pro', 'hud-end'); cl.classList.add('hud-pro', 'hud-end');
    mem.insertAdjacentHTML('afterbegin', '<div class="pro"><b>JOURNEY COMPLETE</b><span>全程回顧</span></div>');
    mem.querySelector('h2').insertAdjacentHTML('afterend', `<p class="stats">${[[J.days.length, 'DAYS', '天'], [st.length, 'STOPS', '地標'], [J.story.chapters.length, 'STAGES', '關卡'], MEMO && MEMS.length && [MEMS.length, 'PHOTOS', '張回憶']]
      .filter(Boolean).map(([n, e, c]) => `<span><b>${n}</b><em>${e}</em><small>${c}</small></span>`).join('')}</p>`);
    cl.insertAdjacentHTML('afterbegin', '<div class="pro"><b>ENDING</b><span>片尾</span></div>');
    const h2 = cl.querySelector('h2'); if (h2) h2.innerHTML = h2.innerHTML.split(/<br\s*\/?>/).map((x) => `<span>${x}</span>`).join('');   // 一句一行、各自平衡斷行（避免單字落行）
    if (COMPANY) {   // 公司介紹版片尾：結語換成公司口號（這團的結語不適用），留聯絡清單
      cl.querySelector('.pro').innerHTML = '<b>CONTACT</b><span>聯絡我們</span>';
      const hh = cl.querySelector('h2'); if (hh) hh.innerHTML = CO.slogan ? `<span>${esc(CO.slogan)}</span>` : ''; const sg = cl.querySelector('.sign'); if (sg) sg.remove();
    }
    if (PROP && OFFER) {   // 提案版片尾＝行動呼籲：費用、報價期限、名額、聯絡顧問；原本的聯絡清單收起，只留執照字號
      cl.classList.add('hud-cta'); cl.querySelector('.pro').innerHTML = '<b>NEXT STEP</b><span>下一步</span>';
      cl.querySelector('.co').insertAdjacentHTML('beforebegin', `<div class="cta">${offerRows(false)}</div>`);
    }
    const BY = MEMO ? [...new Set(MEMS.map((m) => m.by).filter(Boolean))] : [];   // 片尾名單：照片提供的團員（本人同意才會在資料裡）
    if (BY.length) cl.querySelector('.co').insertAdjacentHTML('beforebegin', `<div class="credits by"><small>照片提供</small><p>${BY.map((x) => `<span>${esc(x)}</span>`).join('')}</p></div>`);
    const P = CO.people || [];
    if (P.length) cl.querySelector('.co').insertAdjacentHTML('beforebegin', `<ul class="credits">${P.map((x) => `<li><small>${esc(x.role || x.en || '')}</small><b>${esc(x.name)}</b></li>`).join('')}</ul>`);
    seq(mem); seq(cl);
  }
  // 依序編號：有分句（span）的一句一號、清單一項一號，其餘一塊一號；CSS 用 --i 排出場時間
  function seq(root) {
    let n = 0; [...root.children].forEach((x) => { if (x.classList.contains('logo')) return;
      const sp = x.matches('p, h1, h2') ? [...x.children].filter((y) => y.tagName === 'SPAN') : x.matches('ul') ? [...x.children] : [];
      (sp.length ? sp : [x]).forEach((y) => { y.classList.add('sq'); y.style.setProperty('--i', n++); }); });
  }

  // ── 關卡地圖進度（main.js 做的 #dots：加章號、走過的路染紅、提示字）；開始旅程前藏起來 ──
  function mapInit() {
    const bs = [...$('dots').children]; if (!bs.length || bs[0].dataset.hud) return;
    bs.forEach((b, i) => { const sc = SCN[i]; if (!sc) return; b.dataset.hud = 1;
      if (sc.k === 'chapter') { b.insertAdjacentHTML('beforeend', `<span>${pad(sc.ci + 1)}</span>`); b.title = `STAGE ${pad(sc.ci + 1)}　${sc.c.name}`; }
      else if (sc.k === 'day') b.title = `DAY ${pad(sc.n)}　${J.days[sc.n - 1].title}`;
      else b.title = ''; });
    $('dots').classList.add('map');
    document.querySelectorAll('#labels .ch small').forEach((s, i) => { s.textContent = `STAGE ${pad(i + 1)}`; });
  }
  function map(step) {
    const nav = $('dots');
    [...nav.children].forEach((b, i) => { b.classList.toggle('done', i < step); b.classList.toggle('on', i === step); });
    const b = nav.children[step];
    if (landscape && touchScreen() && b && nav.scrollWidth > nav.clientWidth) nav.scrollLeft = b.offsetLeft - (nav.clientWidth - b.offsetWidth) / 2;
  }

  // ── 跟著 main.js 走：換幕時讀 __journey.step。不是這裡叫的換幕（截圖工具、?n=）→ 直接進「開始後」狀態 ──
  function sync() {
    const j = J_(); if (!j || !J || (!SCN.length && !readScenes())) return; mapInit(); decorate(); const s = j.step; if (s === last || s < 0) return;
    const changed = last >= 0, ext = changed && s !== expect; last = s;
    if (changed && landscape && !rotateBlocked() && ['run', 'prologue', 'route'].includes(state) && /Android/i.test(navigator.userAgent) && navigator.vibrate) { try { navigator.vibrate(10); } catch (x) { } }
    if (ext && state === 'tour') return;
    if (ext && state === 'daily') { const sc = SCN[s]; if (sc && sc.k === 'day' && sc.n !== dayN) showDay(sc.n, 0, true); return; }
    if (ext && state !== 'run') { [L, B, M, TZ].forEach((x) => x.remove()); BK.classList.remove('on'); setState('run'); }
    const sc = SCN[s]; if (!sc) return; map(s);
    if (PRO.includes(sc.k)) {
      if (!CPAGES[cpI] || CPAGES[cpI].scene !== sc.k) cpI = CPAGES.findIndex((p) => p.scene === sc.k);
      if (cpI >= 0 && ['run', 'prologue', 'tour'].includes(state)) introShow(cpI, false);
      else introHide();
    } else introHide();
    if (sc.k === 'chapter') stage(sc.ci); if (sc.k === 'day') day(sc.n);
    if (sc.k === 'day') touchHint();
    if (PRO.includes(sc.k) || sc.k === 'memory' || sc.k === 'close') replay($(sc.k));
    sceneAt = Date.now(); odoLive = false; odoStatic(s); post();
  }

  // ── 主講人模式（按 P）：第二個視窗 presenter.html 顯示目前這幕、下一幕、計時、講稿；兩邊用 BroadcastChannel 同步，
  //    另外用 window.postMessage 備援（file:// 開的時候有些瀏覽器不讓 BroadcastChannel 跨視窗）。主講人視窗送來的按鍵走同一套 keyCmd ──
  const BCH = 'BroadcastChannel' in window ? new BroadcastChannel('journey-presenter') : null;
  let PW = null, sceneAt = Date.now(), dark = false; const seenIds = new Set();
  const BLK = el('hud-black', '');
  function blackout(v) { dark = v == null ? !dark : !!v; BLK.classList.toggle('on', dark); post(); }
  function presenter() { PW = window.open('presenter.html', 'journey-presenter', 'width=1180,height=760'); setTimeout(post, 400); }
  function send(m) { if (BCH) BCH.postMessage(m); if (PW && !PW.closed) PW.postMessage(m, '*'); }
  function onMsg(m) {
    if (!m || m.src !== 'presenter' || seenIds.has(m.id)) return; seenIds.add(m.id);
    if (m.t === 'key') keyCmd(m.key, true); else if (m.t === 'hello') post();
  }
  if (BCH) BCH.onmessage = (e) => onMsg(e.data);
  addEventListener('message', (e) => onMsg(e.data));
  // 這一幕叫什麼、講稿（story.notes[鍵]，鍵＝場景名；逐日用 day:3、關卡用 chapter:2）；沒寫就列這幕資料裡已有的重點，不編
  function sceneInfo(sc) {
    if (!sc || !J) return { label: '', notes: [] };
    const N = (J.story && J.story.notes) || {}, key = sc.k === 'day' ? `day:${sc.n}` : sc.k === 'chapter' ? `chapter:${sc.ci + 1}` : sc.k;
    const own = N[key] || N[sc.k === 'day' ? `day${sc.n}` : key]; const fl = J.flights || [];
    const flight = (f) => f ? [f.leg, f.carrier, f.time, f.date].filter(Boolean) : [];
    const d = sc.k === 'day' ? J.days[sc.n - 1] : null, c = sc.c || (sc.k === 'chapter' ? J.story.chapters[sc.ci] : null);
    const auto = {
      brand: [CO.lead, CO.body], why: [...(CO.whyBody || [])], promise: [CO.pillarBody],
      hq: [...(CO.offices || []).map((o) => [o.name, o.address].filter(Boolean).join('　')), (CO.services || []).join('・')],
      overview: [J.routeTitle, ...(J.meta || [])], depart: flight(fl[0]), return: flight(fl[fl.length - 1]),
      memory: (J.highlights || []).map((h) => `${h.k}　${h.v}`),
      close: [J.story.closing && J.story.closing.lead, J.story.closing && J.story.closing.body, ...(OFFER ? [OFFER.price && OFFER.price.amount, OFFER.validUntil && `報價有效至 ${OFFER.validUntil}`, OFFER.seats && `名額 ${OFFER.seats}`] : [])],
      chapter: c ? c.days.map((n) => `DAY ${pad(n)}　${J.days[n - 1].title}`) : [],
      day: d ? [d.legs, ...(d.spots || []), d.meals && `餐　${d.meals}`, d.stay && `住　${d.stay}`] : [],
    }[sc.k] || [];
    const pl = '公司簡介　';   // 標題用資料裡的句子，講稿就不再重複
    const label = { brand: pl + (CO.slogan || CO.name || ''), why: pl + (CO.why || ''), promise: pl + (CO.pillar || ''), hq: pl + '據點', overview: '行程總覽',
      depart: '去程班機', return: '回程班機', memory: '全程回顧', close: PROP && OFFER ? '片尾　下一步' : '片尾',
      chapter: c ? `STAGE ${pad(sc.ci + 1)}　${c.name}` : '', day: d ? `DAY ${pad(d.n)}　${d.title}` : '' }[sc.k] || sc.k;
    return { label, notes: [].concat(own || auto).filter(Boolean).map(String), own: !!own };
  }
  function post() {
    const j = J_(), s = j ? j.step : -1, sc = SCN[s];
    let cur = sceneInfo(sc), next = sceneInfo(SCN[s + 1]);
    if (state === 'menu' || state === 'people') {
      cur = { label: state === 'people' ? (M.classList.contains('sub-offer') ? '費用與報名' : '角色介紹') : '主選單', notes: OPTS.map((o) => o[1]).concat(J && J.title ? [`${J.title.main}${J.title.suffix || ''}`] : []) };
      next = { label: '回主選單' };
    }
    if (CP.classList.contains('on')) { cur = introInfo(CPAGES[cpI]); next = introInfo(CPAGES[cpI + 1]); if (!CPAGES[cpI + 1]) next = state === 'run' ? sceneInfo(SCN[idx('hq') + 1]) : { label: COMPANY ? '聯絡我們' : '回主選單' }; }
    if (state === 'route') next = { label: '回主選單' };
    if (state === 'run' && j && s >= SCN.length - 1) next = { label: QA.classList.contains('on') ? 'Q&A 進行中（再按一次收起）' : '片尾停住：再按一次出「Q&A」' };
    if (state === 'tour') { const it = CSEQ[ci2], nx = CSEQ[ci2 + 1]; const lab = (x) => x ? (x.k === 'works' ? { label: `我們走過的路　${pad(x.p + 1)} / ${pad(PAGES.length)}`, notes: (PAGES[x.p] || []).map((w) => [w.month && w.month.replace('-', '.'), w.country, w.title].filter(Boolean).join('　')) } : sceneInfo({ k: x.k })) : { label: '最後一幕' };
      if (!CP.classList.contains('on')) { cur = lab(it); next = lab(nx); } }
    if (state === 'daily') { cur = sceneInfo({ k: 'day', n: dayN }); next = dayN < J.days.length ? sceneInfo({ k: 'day', n: dayN + 1 }) : { label: '最後一天' }; }
    if (state === 'menu') next = { label: `按 Enter 進「${(OPTS[cursor()] || [])[1] || ''}」` };
    if (['load', 'teaser', 'boot'].includes(state)) { cur = { label: { load: '載入中', teaser: '冷開場', boot: '工作室標誌' }[state], notes: state === 'teaser' && J ? [(J.story.foreword || {}).lead] : [] }; next = { label: '主選單' }; }
    send({ src: 'deck', t: 'state', state, step: s, total: SCN.length, dark, sceneAt, cur, next,
      title: J ? `${J.title.main}${J.title.suffix || ''}` : '', client: J ? J.client : '', run: state === 'run' });
  }
  const cursor = () => cur;

  // ── 回程回憶版（story.mode = 'memory' 或 ?mode=memory；觀眾：剛回國的團員）──
  //    story.memories = [{ day, photo, caption, by }]：團員照片要本人同意，由顧問填；沒有就整個不顯示（那天照一般逐日卡）。photo 是相對 index.html 的路徑或 data URI
  let MEMO = false, MEMS = [];
  const memOf = (n) => MEMS.find((m) => +m.day === n && m.photo);

  // ── 公司介紹版（story.mode = 'company' 或 ?mode=company；觀眾：新客人、合作夥伴，不帶團）──
  //    漫途標誌 → 角落標題（主選單）→ 公司簡介四張 → 我們走過的路（J.portfolio，分頁）→ 片尾聯絡。
  //    CO.portfolio（_company.json；沒有再退回 J.portfolio）= [{ title, country, month: 'YYYY-MM'／'YYYY'／'' }]；不放客戶名，空的欄位不印
  let COMPANY = false, CSEQ = [], PAGES = [], ci2 = 0;
  const WK = el('hud-works', '', '<div class="in"><p class="ttl"><b>OUR JOURNEYS</b>我們走過的路<em></em></p><div class="grid"></div><p class="pg"></p></div>');
  function works() {   // 同團名同月份（不同梯次）併成一張，標梯數；新的在前
    const m = new Map();
    (CO.portfolio || J.portfolio || []).forEach((w) => { if (!w || !w.title) return; const k = `${w.title}|${w.month || ''}`; const o = m.get(k); if (o) o.n++; else m.set(k, { ...w, n: 1 }); });
    return [...m.values()].sort((a, b) => String(b.month || '').localeCompare(String(a.month || '')));
  }
  function companyInit() {
    introInit(); const W = works(), per = matchMedia('(max-width:900px)').matches ? 4 : 8;
    PAGES = []; for (let i = 0; i < W.length; i += per) PAGES.push(W.slice(i, i + per));
    CSEQ = CPAGES.map((p, intro) => ({ k: p.scene, intro })).concat([{ k: 'close' }]);
    const cs = new Set(W.map((w) => w.country).filter(Boolean)), ys = W.map((w) => String(w.month || '').slice(0, 4)).filter(Boolean).sort();
    M.querySelector('.mk').innerHTML = 'COMPANY<i>·</i>公司介紹';
    M.querySelector('.tn').textContent = CO.name || ''; M.querySelector('.mission .suf').remove();
    M.querySelector('.l2').innerHTML = (CO.services || []).map(esc).join('<i>×</i>');
    M.querySelector('.meta').innerHTML = [W.length && `${W.length} 個行程`, cs.size && `${cs.size} 個國家`, ys.length && (ys[0] === ys[ys.length - 1] ? ys[0] : `${ys[0]}–${ys[ys.length - 1]}`)].filter(Boolean).map((x) => `<span>${x}</span>`).join('<i>·</i>');
    OPTS = [['prologue', '公司簡介', 'COMPANY'], ['works', '執行實績', 'TRACK RECORD'], ['contact', '聯絡我們', 'CONTACT'], ['start', '開始介紹', 'START']];
    if (!PAGES.length) OPTS = OPTS.filter((o) => o[0] !== 'works');
  }
  function tourStart(i, fromStart) { setState('tour'); M.classList.add('up'); BK.classList.toggle('on', !fromStart); ci2 = -1; cshow(Math.max(0, i), 1); }
  function cstep(d) { const i = ci2 + d; if (i < 0) return; if (i >= CSEQ.length) return toMenu(); cshow(i, d); }
  function cshow(i, d) {
    ci2 = i; const it = CSEQ[i];
    if (it.intro != null) { introShow(it.intro); post(); return; }
    introHide();
    if (it.k === 'works') {
      const P = PAGES[it.p] || [];
      WK.querySelector('.ttl em').textContent = PAGES.length > 1 ? `${pad(it.p + 1)} / ${pad(PAGES.length)}` : '';
      WK.querySelector('.grid').innerHTML = P.map((w, j) => `<div class="tk" style="--i:${j}">${w.month ? `<p class="mo">${esc(String(w.month).replace('-', '.'))}</p>` : ''}
        ${w.country ? `<span class="ct">${esc(w.country)}</span>` : ''}<p class="tt">${phr(w.title)}</p>${w.n > 1 ? `<small>${w.n} 梯</small>` : ''}</div>`).join('');
      WK.querySelector('.pg').innerHTML = PAGES.length > 1 ? PAGES.map((_, j) => `<i class="${j === it.p ? 'on' : ''}"></i>`).join('') : '';
      WK.classList.remove('back'); if (d < 0) WK.classList.add('back'); WK.classList.add('on'); replay(WK);
      const ov = idx('overview'); if (J_() && J_().step !== ov) goto(ov);   // 3D 先停在全程總覽；飛過多條路線待 cine
    } else {
      WK.classList.remove('on'); const k = idx(it.k);
      if (J_() && J_().step === k) replay($(it.k)); else goto(k);
    }
    post();
  }

  // ── 旅途中每日版（story.mode = 'daily' 或網址 ?mode=daily）：手機直式為主，只放「今天」──
  //    今天＝裝置日期對 days[].date（年份取 dates.range 開頭，跨年自動進位）；對不到用 ?day=N，再沒有就第 1 天。測試可用 ?date=YYYY-MM-DD 假裝今天
  let DAILY = false, dayN = 1;
  const DY = el('hud-daily', '', '<div class="grip"></div><div class="body"></div>');
  function dayDate(d) {
    const r = String((J.dates && J.dates.range) || '').match(/(\d{4})\.(\d{1,2})\.(\d{1,2})/), m = String(d.date || '').match(/(\d{1,2})[./](\d{1,2})/);   // 「11.16 MON」或官網頁的「2/7 日」
    if (!r || !m) return null; const y = +r[1] + (+m[1] < +r[2] ? 1 : 0); return `${y}-${pad(+m[1])}-${pad(+m[2])}`;
  }
  const todayISO = () => { const f = q.get('date'); if (f) return f; const t = new Date(); return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`; };
  function todayN() {
    const hit = J.days.find((d) => dayDate(d) === todayISO()); if (hit) return hit.n;
    const n = +q.get('day'); return n >= 1 && n <= J.days.length ? n : 1;
  }
  function showDay(n, dir, fromMain) {
    n = Math.max(1, Math.min(J.days.length, n)); if (n === dayN && DY.dataset.n) return; dayN = n; DY.dataset.n = n;
    const d = J.days[n - 1], ci = J.story.chapters.findIndex((c) => c.days.includes(n)), ch = J.story.chapters[ci] || {}, isToday = dayDate(d) === todayISO();
    const legs = String(d.legs || '').split(/\s*→\s*/).filter(Boolean);
    const fl = (J.flights || []).filter((f) => f.date && String(d.date || '').startsWith(f.date));
    const meet = fl.map((f) => f.terminal).filter((t) => t && /集合/.test(t));   // 集合時間：只用行程檔班機 terminal 欄裡寫了「集合」的（要 build.py 帶進來）
    const spots = (d.spots || []).map((x) => { const [a, ...b] = String(x).split(/　+/); return [a, b.join(' ')]; });
    DY.querySelector('.body').innerHTML = `<div class="dtop">${isToday ? '<b class="today">TODAY<i>今天</i></b>' : `<b class="nth">行程第 ${n} 天</b>`}<time>${esc(d.date)}</time></div>
      <div class="dn"><span>DAY</span><strong>${pad(n)}</strong><em>/ ${pad(J.days.length)}</em>${ch.name ? `<small>STAGE ${pad(ci + 1)}　${esc(ch.name)}</small>` : ''}</div>
      <h2>${phr(d.title)}</h2>
      ${legs.length ? `<ol class="route">${legs.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>` : ''}
      ${meet.map((t) => `<p class="row meet"><b>集合</b>${esc(t)}</p>`).join('')}
      ${fl.map((f) => `<p class="row"><b>航班</b>${esc([f.carrier, f.time].filter(Boolean).join('　'))}<small>${esc(f.leg || '')}</small></p>`).join('')}
      ${spots.length ? `<div class="quest"><p class="qh">今日行程</p><ul>${spots.map(([a, b], i) => `<li style="--i:${i}"><i></i><span>${esc(a)}${b ? `<small>${esc(b)}</small>` : ''}</span></li>`).join('')}</ul></div>` : ''}
      ${(d.food || []).length ? `<div class="food"><p class="qh">今日美食</p><ul>${d.food.map((f, i) => `<li style="--i:${i}"><figure><img src="${esc(f.card)}" alt=""><i>示意</i></figure><span>${esc(f.zh)}</span></li>`).join('')}</ul></div>` : ''}
      ${d.meals ? `<p class="row"><b>餐</b>${esc(d.meals)}</p>` : ''}${hotelHTML(d, 'row')}
      <nav class="dnav"><button type="button" data-d="-1"${n <= 1 ? ' disabled' : ''}>前一天</button><span>上下滑動切換</span><button type="button" data-d="1"${n >= J.days.length ? ' disabled' : ''}>後一天</button></nav>`;
    DY.classList.remove('up', 'down'); if (dir) DY.classList.add(dir > 0 ? 'up' : 'down'); replay(DY); DY.querySelector('.body').scrollTop = 0;
    if (!fromMain) { const i = SCN.findIndex((x) => x.k === 'day' && x.n === n); if (i >= 0) goto(i); }
    odoStatic(SCN.findIndex((x) => x.k === 'day' && x.n === n));
    post();
  }
  DY.addEventListener('click', (e) => { const b = e.target.closest('.dnav button'); if (b) showDay(dayN + +b.dataset.d, +b.dataset.d); });
  // 上下滑：卡片內容還能捲的方向先給捲動，捲到底（或在 3D 畫面上）才換天
  let ty = null, tx = 0, tScroll = null;
  addEventListener('touchstart', (e) => { if (state !== 'daily') return; ty = e.touches[0].clientY; tx = e.touches[0].clientX; const b = DY.querySelector('.body'); tScroll = e.target instanceof Node && DY.contains(e.target) ? b : null; }, { passive: true });
  addEventListener('touchend', (e) => {
    if (state !== 'daily' || ty == null) return; const dy = e.changedTouches[0].clientY - ty, dx = e.changedTouches[0].clientX - tx; ty = null;
    if (Math.abs(dy) < 60 || Math.abs(dy) < Math.abs(dx) * 1.5) return;
    const b = tScroll; if (b && b.scrollHeight > b.clientHeight + 2) { if (dy < 0 && b.scrollTop + b.clientHeight < b.scrollHeight - 2) return; if (dy > 0 && b.scrollTop > 2) return; }
    showDay(dayN + (dy < 0 ? 1 : -1), dy < 0 ? 1 : -1);
  }, { passive: true });
  let wheelAt = 0;
  addEventListener('wheel', (e) => { if (state !== 'daily' || (e.target instanceof Node && DY.contains(e.target)) || Math.abs(e.deltaY) < 20 || Date.now() - wheelAt < 900) return; wheelAt = Date.now(); showDay(dayN + (e.deltaY > 0 ? 1 : -1), e.deltaY > 0 ? 1 : -1); }, { passive: true });

  // ── 里程紙票：K 或票根開關，今日數字平滑追上路線里程 ──
  // main.js 呼叫 HUD.odometer(今日已走, 今日總, 全程累計, 'air' 或 'ground')；缺里程整張收起
  const ODO = el('hud-odo', '', `<button type="button" class="ico" aria-controls="hud-odo-panel" aria-expanded="false" aria-label="展開里程">
    <svg class="car" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 10 2-5h10l2 5M4 10h16v8H4zM7 18v2m10-2v2M7 13h2m6 0h2"/></svg>
    <svg class="air" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 9V4a2 2 0 0 1 4 0v5l7 5v2l-7-2v5l2 2v1l-4-1-4 1v-1l2-2v-5l-7 2v-2z"/></svg><span>KM</span></button>
    <div class="pn" id="hud-odo-panel"><p class="r"><b class="today-label">今日</b><strong class="num" data-k="t">0</strong><small>km</small></p>
      <p class="cum">全程累計 <span class="num" data-k="c">0</span> km</p>
      <div class="track" role="progressbar" aria-label="今日路線進度" aria-valuemin="0" aria-valuemax="100"><i></i></div>
      <div class="foot"><small>依路線估算</small><button type="button" class="more" aria-controls="hud-odo-table" aria-expanded="false">每天里程<span aria-hidden="true">＋</span></button></div>
      <ol class="tbl" id="hud-odo-table" aria-label="每天里程"></ol></div>`);
  const odoButton = ODO.querySelector('.ico'), odoMore = ODO.querySelector('.more'), odoTrack = ODO.querySelector('.track');
  const odoToday = ODO.querySelector('[data-k=t]'), odoCum = ODO.querySelector('[data-k=c]');
  const odoMotion = matchMedia('(prefers-reduced-motion:reduce)');
  let odoLive = false, odoFrame = 0, odoTime = 0, odoDay = null;
  const odoNow = [0, 0, 0], odoTarget = [0, 0, 0], odoKey = 'journey-odometer';
  function odoToggle(v) {
    const on = v == null ? !ODO.classList.contains('on') : v;
    ODO.classList.toggle('on', on); odoButton.setAttribute('aria-expanded', String(on)); odoButton.setAttribute('aria-label', on ? '收起里程' : '展開里程');
    try { localStorage.setItem(odoKey, on ? '1' : '0'); } catch (x) { }
  }
  odoButton.addEventListener('click', () => odoToggle());
  odoMore.addEventListener('click', () => {
    const full = ODO.classList.toggle('full'); odoMore.setAttribute('aria-expanded', String(full)); odoMore.lastElementChild.textContent = full ? '−' : '＋';
  });
  function odoPaint() {
    [odoToday, odoCum].forEach((e, i) => { const text = String(Math.round(odoNow[i])); if (e.textContent !== text) e.textContent = text; });
    odoTrack.firstElementChild.style.transform = `scaleX(${odoNow[2]})`;
    odoTrack.setAttribute('aria-valuenow', String(Math.round(odoNow[2] * 100)));
  }
  // 一個動畫迴圈追目標，main.js 每格更新也不重啟 tween；降低動態效果時直接呈現
  function odoTween(time) {
    const dt = Math.max(0, time - odoTime); odoTime = time;
    const ease = odoMotion.matches ? 1 : 1 - Math.exp(-dt / 130);
    let moving = false;
    odoNow.forEach((v, i) => {
      const gap = odoTarget[i] - v;
      odoNow[i] = Math.abs(gap) < (i === 2 ? .001 : .05) || ease === 1 ? odoTarget[i] : v + gap * ease;
      if (odoNow[i] !== odoTarget[i]) moving = true;
    });
    odoPaint(); odoFrame = moving ? requestAnimationFrame(odoTween) : 0;
  }
  function odoHide() {
    delete ODO.dataset.ok; cancelAnimationFrame(odoFrame); odoFrame = 0;
    odoNow.fill(0); odoTarget.fill(0);
  }
  function kmList() {
    const k = J_() && J_().km, a = Array.isArray(k) ? k : k && (k.days || k.perDay);
    const rows = a && a.length ? a : J && J.days.some((d) => d.km != null) ? J.days : null;
    return rows && rows.map((v) => ({ km: Math.max(0, +(typeof v === 'object' && v ? v.km : v) || 0), mode: v && v.mode === 'air' ? 'air' : 'ground' }));
  }
  function odoShow(today, todayTotal, cum, mode = 'ground') {
    if (!Number.isFinite(today) || !Number.isFinite(cum) || (todayTotal != null ? !(todayTotal > 0) : !(today > 0))) { odoHide(); return; }
    const air = mode === 'air'; ODO.dataset.ok = '1'; ODO.dataset.mode = air ? 'air' : 'ground';
    const label = ODO.querySelector('.today-label'), text = air ? '今日飛行' : '今日';
    if (label.textContent !== text) label.textContent = text;
    odoTarget[0] = Math.max(0, today); odoTarget[1] = Math.max(0, cum);
    odoTarget[2] = todayTotal > 0 ? Math.min(1, Math.max(0, today / todayTotal)) : 1;
    if (odoMotion.matches) { cancelAnimationFrame(odoFrame); odoFrame = 0; odoTarget.forEach((v, i) => { odoNow[i] = v; }); odoPaint(); }
    else if (!odoFrame && odoNow.some((v, i) => v !== odoTarget[i])) { odoTime = performance.now(); odoFrame = requestAnimationFrame(odoTween); }
  }
  // 靜態備援同時支援公里陣列及 cine 的 {km, mode} 陣列；章節等非逐日幕不顯示
  function odoStatic(s) {
    const L = kmList(), sc = SCN[s] || {}, n = sc.k === 'day' ? sc.n : state === 'daily' ? dayN : 0;
    if (n !== odoDay) { odoDay = n; odoNow[0] = odoNow[2] = 0; }
    if (!L || !n) { odoHide(); return; }
    ODO.querySelector('.tbl').innerHTML = L.map((v, i) => `<li class="${i + 1 === n ? 'on' : ''}"><b>DAY ${i + 1}</b><span>${v.km ? `${Math.round(v.km)} km` : '無里程'}</span></li>`).join('')
      + `<li class="sum"><b>全程</b><span>${Math.round(L.reduce((a, b) => a + b.km, 0))} km</span></li>`;
    if (!odoLive) { const d = L[n - 1]; odoShow(d ? d.km : 0, d ? d.km : 0, L.slice(0, n).reduce((a, b) => a + b.km, 0), d && d.mode); }
  }
  try { if (localStorage.getItem(odoKey) === '1') odoToggle(true); } catch (x) { }

  window.HUD = {
    loading(p, text) { explicit = true; target = Math.max(target, Math.min(1, +p || 0)); if (text) st.textContent = text; },
    ready() { if (ready) return; ready = true; target = 1; st.textContent = 'READY'; setTimeout(afterReady, 600); },
    teaser(fn) { teaserFn = fn; },
    start(fn) { onGo = fn; },
    stage, day, map, sync,
    odometer(today, todayTotal, cum, mode = 'ground') { odoLive = true; odoShow(today, todayTotal, cum, mode); },
    get landscapeBlocked() { return rotateBlocked(); },
    get state() { return state; },
  };

  addEventListener('DOMContentLoaded', () => {
    J = window.JOURNEY; if (!J) return; CO = Object.assign({}, J.agency, J.company);
    DAILY = (J.story && J.story.mode) === 'daily' || q.get('mode') === 'daily'; if (DAILY) body.classList.add('hud-daily');
    MEMO = (J.story && J.story.mode) === 'memory' || q.get('mode') === 'memory'; MEMS = MEMO ? ((J.story && J.story.memories) || []).filter((m) => m && m.photo) : [];
    if (MEMO) body.classList.add('hud-memory');
    COMPANY = (J.story && J.story.mode) === 'company' || q.get('mode') === 'company'; if (COMPANY) body.classList.add('hud-company');
    landscape = !DAILY && !MEMO && !COMPANY; if (landscape) { SCROLL = false; body.classList.remove('hud-scroll'); } orientationUI();
    PROP = (J.story && J.story.mode) === 'proposal'; OFFER = PROP ? offerOf(J.story) : null; if (PROP) body.classList.add('hud-proposal'); fill();   // 公司資料沒建（例如同業團）時至少有承辦旅行社的名稱
    new MutationObserver(sync).observe(body, { attributes: true, attributeFilter: ['data-mode'] });
    new MutationObserver(sync).observe($('dots'), { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    // 紙纖維：main.js 給的是白底淡褐纖維、原本用色彩增值疊上去。改成「黑＋透明度（1 − 亮度）」用一般疊法，畫面一樣，但手機不必每格多做全螢幕混合
    const g = setInterval(() => {
      const u = $('grain').style.backgroundImage.match(/url\("?(.*?)"?\)$/); if (!u) return; clearInterval(g);
      const im = new Image(); im.onload = () => {
        const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const x = c.getContext('2d'); x.drawImage(im, 0, 0);
        const d = x.getImageData(0, 0, c.width, c.height), a = d.data;
        for (let i = 0; i < a.length; i += 4) { a[i + 3] = 255 - (a[i] + a[i + 1] + a[i + 2]) / 3; a[i] = a[i + 1] = a[i + 2] = 0; }
        x.putImageData(d, 0, 0); const v = `url(${c.toDataURL()})`;
        [$('grain'), ...document.querySelectorAll('#hud-load .fib, #hud-menu .fib')].forEach((f) => { f.style.backgroundImage = v; f.classList.add('a'); });
      }; im.src = u[1];
    }, 200);
  });
  orientationUI();
  setState('load');
})();
