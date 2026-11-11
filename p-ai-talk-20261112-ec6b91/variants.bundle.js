/* variants/chapter/_paper-ink-grays.js */
M.paperInkGrays = {
  "img/hokkaido-igg-canal.jpg": "img/paper-ink/gray-58af4f5e2e72f3dd.jpg",
  "img/hokkaido-igg-odori.jpg": "img/paper-ink/gray-5b1b9fd2cbcd724d.jpg"
};

/* variants/chapter/_paper-ink.js */
// 紙墨共用零件；源自 William 2026-09-18 選定的青森構成，2026-11-10 轉為本團資料。
{ const U=M.util
M.paperInk={
  lines:(text,width,size)=>String(text||'').split('\n').reduce((n,line)=>n+Math.max(1,Math.ceil(U.len(line)*size*1.06/width)),0),
  titleMotion(root,delay=0){
    const el=root.querySelector('.pi-reveal>[contenteditable]')
    return el?[el.animate([{transform:'translateY(105%)'},{transform:'none'}],{duration:780,easing:'cubic-bezier(.22,1,.36,1)',delay,fill:'backwards'})]:[]
  },
  motion(animations){return {cleanup:()=>animations.forEach(a=>a.cancel()),finish:()=>animations.forEach(a=>a.finish())}},
  photo:p=>p.img || p.items?.find(x=>x.img)?.img || '',
  art:c=>c.p.paperInk ?? c.meta.paperInk ?? {},
  decoration(c,kind,css){
    const a=this.art(c), names={wave:'deco-seigaiha.png',mountain:'deco-mountain.png',stream:'ico-stream.png',aomori:'seal-aomori.png'}
    const key=kind==='seal'?a.seal:kind==='icon'?a.icon:a[kind]?kind:''
    return names[key]?`<img class="pi-decoration" aria-hidden="true" src="img/paper-ink/${names[key]}" alt="" style="${css}">`:''
  },
  style:`<style>
  :is(.t-cover,.t-toc,.t-chapter).v-paper-ink{--paper:#EAE4D6;--ink:#1B211A;--acc:#C9A227;--acc2:#5C6E54;--acc3:#A63B26;--pi-deep:#101509;--pi-moss:#38452F;--serif:"Noto Serif CJK TC","Noto Serif CJK JP",serif;--sans:"Noto Sans CJK TC",sans-serif;background:var(--paper);color:var(--ink);font-family:var(--sans)}
  .v-paper-ink .pi-serif{font-family:var(--serif);font-weight:600}
  .v-paper-ink .pi-copy{position:absolute;z-index:6;line-height:1.55;white-space:pre-wrap;overflow-wrap:anywhere}
  .v-paper-ink [contenteditable]{max-width:100%;white-space:pre-wrap;overflow-wrap:anywhere}
  .v-paper-ink .pi-decoration{position:absolute;object-fit:contain;pointer-events:none;z-index:5}
  .v-paper-ink .pi-title{letter-spacing:.06em;line-height:1.15;text-wrap:balance}
  .v-paper-ink .pi-title:before{content:"";position:absolute;left:-28px;top:12px;bottom:12px;width:2px;background:linear-gradient(var(--acc),transparent)}
  .v-paper-ink .pi-reveal{overflow:hidden}
  .v-paper-ink .pi-reveal>[contenteditable]{display:block;text-wrap:balance}
  </style>`
}
}

/* variants/chapter/paper-ink.js */
// 章節・紙墨斜光：同照灰階底＋彩色單斜帶；內外反向位移抵消，無大圖 CSS 濾鏡。
{const U=M.util,H=M.paperInk
M.TYPES.chapter='章節頁'
M.add('chapter','paper-ink',{name:'紙墨斜光',auto:false,
needs:p=>{const src=H.photo(p);return !src||M.paperInkGrays?.[src]?'':'此照片的灰階副本（prepare_paper_ink.py）'},
html:c=>{
  const src=H.photo(c.p),gray=M.paperInkGrays?.[src],title=c.p.title||''
  const fs=U.fit(c.tx('h',title),960*2,102,48)
  return H.style+`<style>
  .t-chapter.v-paper-ink{background:var(--pi-deep);color:var(--paper)}
  .t-chapter.v-paper-ink .pi-base,.t-chapter.v-paper-ink .pi-band,.t-chapter.v-paper-ink .pi-edge{position:absolute;inset:0}
  .t-chapter.v-paper-ink .pi-base img,.t-chapter.v-paper-ink .pi-band img{width:100%;height:100%;object-fit:cover}
  .t-chapter.v-paper-ink .pi-band{clip-path:polygon(56% 0,84% 0,71% 100%,43% 100%)}
  .t-chapter.v-paper-ink .pi-counter{position:absolute;inset:0}
  .t-chapter.v-paper-ink .pi-edge{clip-path:polygon(56% 0,56.16% 0,43.16% 100%,43% 100%);background:#f2eee280;pointer-events:none}
  .t-chapter.v-paper-ink .pi-veil{position:absolute;inset:0;background:linear-gradient(103deg,#12160fe0,#12160fa8 30%,#12160f1a 56%,#12160f14 78%,#12160f6b)}
  </style>
  ${src&&gray?`<div class="pi-base"><img src="${U.esc(gray)}" alt=""></div>
  <div class="pi-band"><div class="pi-counter"><img class="hero" src="${U.esc(src)}" alt=""></div></div><div class="pi-edge"></div><div class="pi-veil"></div>`:''}
  <div class="pi-copy pi-serif" style="left:150px;bottom:178px;width:${src?960:1500}px">
    ${c.p.en?`<div style="font:28px/1.5 var(--sans);letter-spacing:.2em;color:#C9D3BE;margin-bottom:24px">${c.ed('en',c.p.en)}</div>`:''}
    <div class="pi-reveal" style="font-size:${fs}px;line-height:1.24;letter-spacing:.06em">${c.ed('h',title)}</div>
    ${c.p.sub?`<div style="font:28px/1.7 var(--sans);color:#dedbcc;margin-top:30px">${c.ed('k',c.p.sub)}</div>`:''}
    ${c.p.body?`<div style="font:28px/1.7 var(--sans);color:#dedbcc;margin-top:20px">${c.ed('b',c.p.body)}</div>`:''}
  </div>`+H.decoration(c,'icon','right:150px;bottom:184px;width:88px;height:88px;filter:brightness(0) invert(.9)')
},enter(root,c,{settled,delay=0}){
  if(settled)return
  const opts={duration:900,easing:'cubic-bezier(.22,1,.36,1)',delay,fill:'backwards'}
  const animations=[['.pi-band',-46],['.pi-counter',46],['.pi-edge',-46]].flatMap(([q,x])=>{
    const el=root.querySelector(q);return el?[el.animate([{transform:`translateX(${x}%)`},{transform:'none'}],opts)]:[]
  })
  return H.motion([...animations,...H.titleMotion(root,delay+180)])
}})
}

/* variants/chapter/photo-halftone-duo.js */
M.TYPES.chapter='章節頁'
M.add('chapter','photo-halftone-duo',{ needs: (p, m) => (p.coverArt || M.coverRecipes?.[m.code] || {}).halftone ? '' : '這團的網點疊印素材',name:'章節・藍色網點疊印',auto:false,html:c=>M.coverArt.halftone(c,true)})

/* variants/chapter/photo-map-overlay.js */
// Chapter divider: explicit source title, same geographic layers and editable type.
M.TYPES.chapter='章節頁'
M.add('chapter','photo-map-overlay',{ needs: (p, m) => (p.coverArt || M.coverRecipes?.[m.code] || {}).map ? '' : '這團的地圖疊層素材',name:'章節・地圖透明疊層',auto:false,html:c=>M.coverArt.map(c,true)})

/* variants/company/_company.js */
// T07: engine/tpl/lib/pages.mjs:601–700. Shared typography; no invented company facts.
M.company = {
  text: value => String(value ?? '').replace(/[，。,.；;]+$/u, ''),
  photo: value => typeof value === 'string' && !/^(?:[a-z]+:|\/\/)/i.test(value) ? value : '',
  style: `<style>
    .co-page{position:absolute;inset:0;background:var(--paper);color:var(--ink)}
    .co-page:before{content:'';position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent 0 7px,color-mix(in srgb,var(--ink) 2%,transparent) 7px 8px)}
    .co-page h2,.co-page h3,.co-page p{margin:0;font-weight:inherit}
    .co-page h2,.co-page h3{font-family:var(--serif);font-weight:700;line-height:1.35;overflow-wrap:anywhere}
    .co-page p{line-height:1.75;white-space:pre-line;text-wrap:pretty;overflow-wrap:anywhere}
    .co-page img{width:100%;height:100%;object-fit:cover;display:block}
    .co-page footer{position:absolute;left:120px;right:120px;bottom:54px;padding-top:20px;border-top:1px solid var(--line);font-size:20px;color:var(--mute)}
    .co-page .co-sub{font-size:24px;color:var(--acc);line-height:1.5}
  </style>`,
  title(c, fallback, width=1680) {
    const text=c.tx('h',c.p.title || fallback)
    return `<h2 style="font-size:${M.util.fit(text,width,76,32)}px">${c.ed('h',c.p.title || fallback)}</h2>`
  },
  footer: c => `<footer>${c.ed('company',c.p.companyName || '')}</footer>`,
  body(c,key,text,width,base=28) {
    const value=c.tx(key,text || '')
    const size=Math.max(18,Math.min(base,Math.floor(Math.sqrt(width*260/(Math.max(1,M.util.len(value) + Math.max(0, value.split('\n').length - 1) * width / Math.max(18,base))*1.75)))))
    return value ? `<p style="font-size:${size}px">${c.ed(key,M.company.text(text))}</p>` : ''
  }
}

/* variants/company/_media.js */
M.media = {
  source(value) {
    const src = typeof value === 'string' ? value : value?.src
    if (typeof src !== 'string' || !src.trim() || /[\u0000-\u0020\\]/.test(src)) return ''
    try { const u = new URL(src, location.href); return ['http:', 'https:', 'file:'].includes(u.protocol) && /\.(mp4|webm|ogv)$/i.test(u.pathname) ? src : '' } catch { return '' }
  },
  html(c, wide = false) {
    const U = M.util, p = c.p, src = M.media.source(p.video)
    const poster = p.video?.poster || p.img || c.items.find(i => i.img)?.img
    const title = c.tx('h', p.title || ''), body = c.tx('b', p.body || '')
    const x = wide ? 320 : 120, y = wide ? 230 : 180, w = wide ? 1280 : 1184, h = w * 9 / 16
    return `<style>
      .t06-film{overflow-wrap:anywhere;background:var(--ink);color:var(--paper)}
      .t06-film:before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0 7px,color-mix(in srgb,var(--paper) 3%,transparent) 7px 8px);pointer-events:none}
      .t06-frame{position:absolute;overflow:hidden;border-radius:14px;border:1px solid color-mix(in srgb,var(--paper) 18%,transparent);background:var(--ink)}
      .t06-frame img,.t06-frame video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
      .t06-frame video{background:var(--ink)}
      .t06-play{position:absolute;left:40px;bottom:36px;border:1px solid var(--paper);border-radius:999px;padding:20px 36px;background:var(--ink);color:var(--paper);font:500 24px var(--sans);cursor:pointer}
      .t06-play:disabled{pointer-events:none;opacity:.7}
      .t06-play:focus-visible{outline:4px solid var(--acc3);outline-offset:6px}
      .t06-status{position:absolute;left:40px;top:28px;font-size:24px;background:var(--ink);color:var(--paper);padding:12px 20px}
      .t06-status[hidden],.t06-frame video[hidden],.t06-play[hidden]{display:none}
    </style>
    <div class="ab t06-film" style="inset:0"></div>
    <div class="ab in" style="left:120px;top:65px;font-size:20px;color:var(--acc3);letter-spacing:.14em">${c.ed('k', p.sub || (wide ? c.meta.agency || '' : p.en || ''))}</div>
    ${wide ? `<div class="ab serif in" style="left:120px;top:105px;width:1680px;font-size:${U.fit(title,1680,72,32)}px;color:var(--paper)">${c.ed('h',p.title || '')}</div>` : ''}
    <div class="t06-frame in" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;--i:1">
      ${poster ? `<img class="hero" src="${U.esc(poster)}" alt="">` : ''}
      ${src ? `<video preload="none" playsinline controls hidden data-src="${U.esc(src)}"></video><button type="button" class="t06-play" data-play>${c.ed('play','播放影片')}</button><div class="t06-status" data-media-error role="status" hidden>${c.ed('mediaError','影片暫時無法播放')}</div>` : ''}
    </div>
    ${wide ? (body ? `<div class="ab in" style="left:120px;top:980px;width:1680px;font-size:26px;line-height:1.55;color:var(--paper);--i:2">${c.ed('b',body.replace(/[，。,.]+$/u,''))}</div>` : '') : `<div class="ab in" style="left:1368px;top:180px;width:432px;height:666px;display:flex;flex-direction:column;justify-content:space-between;color:var(--paper);--i:2"><div class="serif" style="font-size:${U.fit(title,432,68,32)}px;line-height:1.35">${c.ed('h',p.title || '')}</div>${body ? `<div style="font-size:26px;line-height:1.8">${c.ed('b',body.replace(/[，。,.]+$/u,''))}</div>` : ''}</div><div class="ab" style="left:120px;top:952px;width:1680px;border-top:1px solid var(--acc3);padding-top:24px;color:var(--paper);font-size:20px">${c.ed('agency',c.meta.agency || '')}</div>`}`
  },
  onEnter(root, c, { signal, presenting }) {
    const v = root.querySelector('video'), button = root.querySelector('[data-play]'), error = root.querySelector('[data-media-error]')
    if (!v) return
    button.disabled = !presenting
    let attempt = 0
    const reset = (failed = false) => { attempt++; v.pause(); v.hidden = true; button.hidden = false; error.hidden = !failed }
    const fail = () => { if (!signal.aborted) reset(true) }
    const play = async e => {
      e.stopPropagation()
      if (!presenting || signal.aborted || e.target.isContentEditable) return
      const token = ++attempt
      error.hidden = true; button.hidden = true; v.hidden = false
      if (!v.hasAttribute('src')) v.src = v.dataset.src
      try { await v.play(); if (signal.aborted) v.pause() } catch { if (!signal.aborted && token === attempt) fail() }
    }
    button.addEventListener('click', play, { capture:true, signal })
    v.addEventListener('error', fail, { signal })
    v.addEventListener('ended', () => reset(), { signal })
    return () => reset()
  }
}

/* variants/company/about.js */
// 公司／公司能力：coAbout/coServices, pages.mjs:601–631；花沁 build.py:18–36 的介紹與服務分區
{ const U=M.util, K=M.company
M.add('company','about',{name:'公司能力',auto:false,order:100,accepts:p=>!p.video,range:[0,3],html:c=>{
  const photo=K.photo(c.p.img), hasItems=c.n>0, left=photo?890:120, width=photo?910:1680
  return `${K.style}<section class="co-page">
    ${photo?`<div class="ab" style="left:120px;top:100px;width:680px;height:826px"><img class="hero" src="${U.esc(photo)}" alt=""></div>`:''}
    <div class="ab" style="left:${left}px;top:100px;width:${width}px;height:826px;display:flex;flex-direction:column;justify-content:${hasItems?'space-between':'center'};gap:64px">
      <div>${K.title(c,'公司介紹',width)}${c.p.sub?`<div class="co-sub" style="margin-top:24px">${c.ed('sub',K.text(c.p.sub))}</div>`:''}</div>
      ${K.body(c,'b',c.p.body,width,photo?36:42)}
      ${hasItems?`<div style="display:flex;flex-direction:column;justify-content:space-evenly;flex:1;gap:24px">${c.items.map((it,i)=>`<article style="border-top:1px solid var(--line);padding-top:20px;display:grid;grid-template-columns:${photo?'250':'430'}px 1fr;gap:34px"><h3 style="font-size:${U.fit(c.tx('t'+i,it.t),photo?250:430,34,22)}px;color:var(--acc)">${c.ed('t'+i,K.text(it.t))}</h3>${K.body(c,'b'+i,it.body,width-(photo?284:464),26)}</article>`).join('')}</div>`:''}
    </div>${K.footer(c)}</section>`
}}) }

/* variants/company/record.js */
// 公司／實績照片：coRecord, engine/tpl/lib/pages.mjs:646–661；照片與年份／客戶／案例名各有位置
{ const U=M.util, K=M.company
M.add('company','record',{name:'實績照片',auto:false,order:100,accepts:p=>!p.video,range:[1,3],html:c=>{
  const single=c.n===1, w=(1680-48*(c.n-1))/Math.max(1,c.n)
  return `${K.style}<section class="co-page">
    <div class="ab" style="left:120px;top:90px;width:1680px">${K.title(c,'代表實績')}</div>
    <div class="ab" style="left:120px;top:250px;width:1680px;height:676px;display:grid;grid-template-columns:repeat(${Math.max(1,c.n)},minmax(0,1fr));gap:48px">
      ${c.items.map((it,i)=>{const photo=K.photo(it.img);return `<article style="display:flex;${single&&photo?'flex-direction:row;gap:64px':'flex-direction:column;justify-content:space-between;gap:30px'};min-width:0">
        ${photo?`<div style="${single?'width:1040px;height:676px;flex-shrink:0':'height:400px;flex-shrink:0'}"><img ${i===0?'class="hero"':''} style="object-fit:contain;object-position:center center" src="${U.esc(photo)}" alt=""></div>`:''}
        <div style="${single&&photo?'flex:1;display:flex;flex-direction:column;justify-content:center;gap:32px':'display:flex;flex-direction:column;gap:22px;'+(!photo?'height:100%;justify-content:space-between;border-top:2px solid var(--acc);padding-top:40px':'')}">
          ${it.sub?`<div class="co-sub">${c.ed('sub'+i,K.text(it.sub))}</div>`:''}
          <h3 style="font-size:${U.fit(c.tx('t'+i,it.t),single&&photo?576:w,single?56:38,24)}px">${c.ed('t'+i,K.text(it.t))}</h3>
          ${K.body(c,'b'+i,it.body,single&&photo?576:w,26)}
        </div>
      </article>`}).join('')}
    </div>${K.footer(c)}</section>`
}}) }

/* variants/cover/_continuity.js */
{ const U = M.util
M.continuity = {
  clean: s => String(s || '').replace(/[，。；、,.!?！？：:]+$/u, ''),
  photo: (src, x, y, w, h, radius = 0, hero = false) => src ? `<img ${hero ? 'class="hero"' : ''} data-shared="${U.esc('photo:' + src)}" src="${U.esc(src)}" alt="" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${radius}px;object-fit:cover">` : '',
  title: (c, key, value, shared, x, y, w, size, color = 'var(--ink)') => {
    const text = String(c.tx(key, M.continuity.clean(value))), comma = text.indexOf('，')
    const lines = comma >= 0 ? [text.slice(0, comma + 1), text.slice(comma + 1)] : null
    const fs = lines ? Math.min(...lines.map(line => U.fit(line, w, size, 16))) : U.fit(text, w * 2, size, 16)
    const editable = c.ed(key, M.continuity.clean(value))
    const content = lines ? editable.replace(/>[^<]*<\/span>$/, `>${lines.map(line => `<span style="display:block;white-space:nowrap">${U.esc(line)}</span>`).join('')}</span>`) : editable
    return `<div ${shared ? `data-shared="${U.esc(shared)}"` : 'data-shared-copy'} class="serif" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.3;color:${color};text-wrap:balance">${content}</div>`
  },
  style: `<style>:is(.v-photo-duet,.v-photo-chapters,.v-photo-circles,.v-photo-notes,.v-photo-portrait){background:var(--paper)}:is(.v-photo-duet,.v-photo-chapters,.v-photo-circles,.v-photo-notes,.v-photo-portrait) [contenteditable]{display:inline-block;max-width:100%;overflow-wrap:anywhere}:is(.v-photo-duet,.v-photo-chapters,.v-photo-circles,.v-photo-notes,.v-photo-portrait) .ct-copy{position:absolute;line-height:1.65}:is(.v-photo-duet,.v-photo-chapters,.v-photo-circles,.v-photo-notes,.v-photo-portrait) .ct-row{border-top:1px solid var(--line)}</style>`
}
}

// 疊字封面的特殊編輯終態：讓可編輯字面離開去背與互斥遮罩。
{ const style = document.createElement('style')
  style.textContent = `.edit .v-behind .cut{opacity:.2;pointer-events:none}
.edit .v-behind .ttl{z-index:3;color:#fff;background:none;-webkit-text-fill-color:#fff}
.edit .v-seam .pan{clip-path:none;mix-blend-mode:normal;background:transparent;pointer-events:none}
.edit .v-seam .pan .tt{color:#fff!important;pointer-events:auto;text-shadow:0 2px 12px #000}
.edit .v-seam [aria-hidden="true"]{visibility:hidden}`
  document.head.append(style)
}

/* variants/cover/_s21.js */
// S21 — photo / geographic lines / halftone are separate assets; every label is editable.
// Recipe source: William's S21 card + cover-studio samples, 2026-11-03.
{ const U=M.util
  const local = value => typeof value==='string' && /^img\/[\w./\-\u0080-\uffff]+\.(?:png|jpe?g|webp)$/i.test(value) && !value.split('/').includes('..') ? value : ''
  const color=(v,f)=>/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(v||'')?v:f
  const tuple=(v,n,f)=>Array.isArray(v)&&v.length===n&&v.every(x=>typeof x==='number'&&Number.isFinite(x))?v:f
  const focus=v=>/^\d{1,3}% \d{1,3}%$/.test(v||'')?v:'50% 50%'
  const unit=v=>typeof v==='number'&&Number.isFinite(v)?Math.max(0,Math.min(1,v)):0
  const css=`<style>
  @font-face{font-family:S21Playfair;src:url('img/s21-reference/playfair.ttf')}@font-face{font-family:S21Cormorant;src:url('img/s21-reference/cormorant.ttf')}@font-face{font-family:S21CormorantItalic;src:url('img/s21-reference/cormorant-italic.ttf')}
  .s21{position:absolute;inset:0;background:#F8F2E7;color:#1756A9;--s21-serif:S21Playfair,'Noto Serif CJK TC',serif}
  .s21 img{position:absolute;object-fit:cover}.s21 [contenteditable]{display:inline-block;max-width:100%}.s21-label{position:absolute;white-space:nowrap;line-height:1.25;font-family:var(--serif);font-weight:400}
  .s21-copy{position:absolute;left:1080px;width:720px;top:710px;text-align:left}.s21-copy .title{font:400 56px/1.2 var(--s21-serif);letter-spacing:.06em}.s21-copy .sub{font:400 28px/1.5 var(--s21-serif);margin-top:16px;overflow-wrap:anywhere}.s21-copy .meta{font:400 22px/1.5 var(--sans);margin-top:20px}
  .s21-map-copy{position:absolute;left:120px;right:120px;bottom:70px;color:var(--ink);text-align:left;text-shadow:0 1px 8px #fff}.s21-map-copy .title{font:600 48px/1.35 var(--serif)}.s21-map-copy .sub{font:400 24px/1.6 var(--sans);margin-top:18px}
  </style>`
  const recipe=c=>c.p.coverArt || M.coverRecipes?.[c.meta.code] || {}
  const img=(src,style,cls='')=>local(src)?`<img class="${cls}" src="${U.esc(src)}" alt="" style="${style}">`:''
  const text=(c,key,value,style,cls='')=>value===undefined||value===null||value===''?'':`<div class="s21-label ${cls}" style="${style}">${c.ed(key,value)}</div>`
  const square=(x,y,w)=>`<div aria-hidden="true" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${w}px;background:#FFD21F;opacity:.9"></div>`
  const yellow=(sx,sy,w,h)=>[[-.12,.05,.30],[.86,-.04,.09],[.80,.42,.20],[-.05,.78,.07],[.66,.80,.17]].map(([x,y,s])=>square(sx+Math.trunc(w*x),sy+Math.trunc(h*y),Math.trunc(w*s))).join('')
  M.coverArt={local,recipe,
    map(c,chapter=false){
      const a=recipe(c), m=a.map||{}, reference=a.reference===true, lineColor=color(m.color,'#3A4A5A'), copyColor=color(m.copyColor,'#1d2124')
      const photo=local(m.photo || (chapter?c.p.img:null) || c.meta.hero)
      const box=tuple(m.box,4,[1152,64,648,420]), [x,y,w,h]=box.map((v,i)=>Math.max(i<2?0:1,Math.min(i%2?1080:1920,v)))
      const labels=(Array.isArray(m.labels)?m.labels:[]).filter(l=>l&&typeof l==='object').map((l,i)=>text(c,'map-label-'+i,l.text,`left:${x+unit(l.x)*w}px;top:${y+unit(l.y)*h}px;transform:translate(-50%,-50%);font-size:${reference?20:24}px;color:${lineColor};font-family:${reference?'S21Cormorant,var(--serif)':'var(--serif)'};letter-spacing:${l.spaced?'.18em':'0'};${l.italic?'font-style:italic;':''}`)).join('')
      const title=chapter?(c.p.title||''):(c.p.title||c.meta.title), dates=c.p.date||c.meta.dates, agency=c.meta.agency
      return `${css}<section class="s21" data-art-kind="map">${img(photo,'inset:0;width:1920px;height:1080px;object-position:'+focus(m.focus),'hero')}${img(m.src,`left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:contain`)}${labels}${reference?img('img/s21-reference/grain.png','inset:0;width:1920px;height:1080px;pointer-events:none'):''}
      ${reference?text(c,'title',title,'left:76px;top:989px;font-size:24px;color:#fff;letter-spacing:5px;text-shadow:0 1px 8px #0006'):`<div class="s21-map-copy" style="color:${copyColor};text-shadow:0 1px 6px ${copyColor==='#fff'?'#0009':'#fff'}"><div class="title">${c.ed('title',title)}</div><div class="sub">${c.ed('client',a.client||c.meta.sub||'')}<br>${c.ed('dates',dates||'')}${dates&&agency?'　／　':''}${c.ed('agency',agency||'')}</div></div>`}
      ${!reference&&m.source?text(c,'map-source',m.source,`right:120px;bottom:24px;font-size:16px;text-shadow:0 1px 5px #0009;color:${copyColor}`):''}</section>`
    },
    halftone(c,chapter=false){
      const a=recipe(c), h=a.halftone||{}, reference=a.reference===true
      const photo=local(h.photo||c.p.img||c.meta.hero), subject=local(h.src), dims=tuple(h.size,2,[576,511]), sc=Math.min(576/Math.max(1,dims[0]),540/Math.max(1,dims[1]),1), w=Math.max(1,dims[0]*sc), ht=Math.max(1,dims[1]*sc)
      const sx=960+(960-w)/2, sy=129+(540-ht)/2
      const title=chapter?(c.p.en||c.p.title||''):(c.p.en||c.meta.en||c.p.title||c.meta.title)
      const sub=chapter?(c.p.en?c.p.title:''):(c.p.title||c.meta.title)
      return `${css}<section class="s21" data-art-kind="halftone">${img(photo,'left:0;top:0;width:960px;height:1080px;object-position:'+focus(h.focus),'hero')}
      ${subject?yellow(sx,sy,w,ht)+img(subject,`left:${sx}px;top:${sy}px;width:${w}px;height:${ht}px;object-fit:contain`):''}
      ${reference?text(c,'en',title,'left:960px;top:756px;width:960px;text-align:center;font-family:var(--s21-serif);font-size:65px;letter-spacing:16px')+text(c,'sub',sub,'left:960px;top:850px;width:960px;text-align:center;font-family:var(--s21-serif);font-size:22px;letter-spacing:5px')+text(c,'agency',c.meta.agency,'left:960px;top:1004px;width:960px;text-align:center;font-size:13px;font-family:var(--sans);letter-spacing:4px'):
      `<div class="s21-copy"><div class="title" style="font-size:${U.fit(c.tx(chapter&&!c.p.en?'title':chapter?'chapter-en':'en',title),720,56,24)}px">${c.ed(chapter&&!c.p.en?'title':chapter?'chapter-en':'en',title)}</div>${sub?`<div class="sub" style="font-size:${U.fit(c.tx('title',sub),720,28,22)}px">${c.ed('title',sub)}</div>`:''}<div class="meta">${c.ed('client',a.client||c.meta.sub||'')}<br>${c.ed('dates',c.p.date||c.meta.dates||'')}<br>${c.ed('agency',c.meta.agency||'')}</div></div>`}</section>`
    }
  }
}

/* variants/cover/_s21_recipes.js */
// Generated by prepare_s21.py; assets are keyed by company/case, never borrowed across trips.
M.coverRecipes={"SEL261216A": {"company": "勁揚國際旅行社", "code": "SEL261216A", "version": "S21-20261103", "map": {"photo": "img/kr-roof.jpg", "src": "img/s21-SEL261216A/map-lines.png", "box": [100.0, 80.0, 650.0, 516.0], "color": "#FFFFFF", "copyColor": "#fff", "focus": "50% 0%", "labels": [{"text": "景福宮一帶", "x": 0.7083333333333477, "y": 0.5586884557979447}], "source": "© OpenStreetMap contributors · Natural Earth", "marker": {"name": "景福宮", "lat": 37.5796, "lng": 126.977, "label": "right", "note": "第 3 天　穿韓服入宮", "id": "s4", "pos": [218.29475555555553, 99.12483176976698], "kind": "area"}, "segments": [], "bounds": [217.5882808888889, 98.75361463250736, 0.9973759999999173, 0.7920338823528756], "sourceMap": "img/route-SEL261216A/local.jpg"}, "halftone": {"photo": "img/kr-geunjeongjeon.jpg", "src": "img/s21-SEL261216A/halftone.png", "size": [576, 256]}, "inputs": {"data": "/home/william/Projects/.work/認真學-20261103/驗收-單-00-今天指定的封面風格與瑞士排版底線進母片/before/data.js", "subject": "img/kr-geunjeongjeon.jpg", "mapPhoto": "img/kr-roof.jpg", "sourceTool": "/home/william/Projects/studio/cover-studio/tools/venturo_styles/halftone_duo.py"}}, "TYO261104A": {"company": "角落旅行社", "code": "TYO261104A", "version": "S21-20261103", "map": {"photo": "img/bccf5f8bfa28.jpg", "src": "img/s21-TYO261104A/map-lines.png", "box": [120.0, 260.0, 680.0, 540.0], "color": "#FFFFFF", "copyColor": "#fff", "focus": "50% 50%", "labels": [{"text": "江之島・七里濱一帶", "x": 0.2916666666666667, "y": 0.758756462167003}], "source": "© OpenStreetMap contributors · Natural Earth", "marker": {"name": "江之島・七里濱", "lat": 35.302, "lng": 139.495, "label": "left", "note": "第 2 天　兒玉神社、稻村崎", "id": "s2", "pos": [227.19644444444444, 101.13839048160922], "kind": "area"}, "segments": [{"day": "01", "from": "s0", "to": "s1", "mode": "unknown"}, {"day": "03", "from": "s4", "to": "s3", "mode": "unknown", "source": "days.legs"}], "bounds": [226.74948977777777, 100.32456831179572, 1.532416000000012, 1.2169185882353035], "sourceMap": "img/route-TYO261104A/local.jpg"}, "halftone": {"photo": "img/4bf4e3da38c4.jpg", "src": "img/s21-TYO261104A/halftone.png", "size": [576, 492]}, "inputs": {"data": "/home/william/Projects/studio/book-studio/decks/_masters/data.js", "subject": "img/4bf4e3da38c4.jpg", "mapPhoto": "img/bccf5f8bfa28.jpg", "sourceTool": "/home/william/Projects/studio/cover-studio/tools/venturo_styles/halftone_duo.py"}}};

/* variants/cover/_s22_contract.js */
// Future factory parts only. This module does not draw a blueprint or brocade.
// Missing or invalid inputs return a reason; no stock/fake substitute is generated.
M.coverArt.component = (c, kind) => {
  if(!['blueprint','brocade'].includes(kind)) return {ready:false,reason:'unsupported-kind'}
  const part=M.coverArt.recipe(c)[kind]
  if(!part) return {ready:false,reason:'awaiting-cover-studio-part'}
  if(!M.coverArt.local(part.src)) return {ready:false,reason:'local-image-required'}
  if(part.producer!=='cover-studio'||part.textFree!==true||!part.source||!part.license) return {ready:false,reason:'provenance-and-no-text-required'}
  if(!Number.isFinite(part.width)||!Number.isFinite(part.height)||part.width<1||part.height<1) return {ready:false,reason:'pixel-size-required'}
  const r=part.calmArea
  if(!Array.isArray(r)||r.length!==4||!r.every(Number.isFinite)||r[0]<0||r[1]<0||r[2]<=0||r[3]<=0||r[0]+r[2]>1||r[1]+r[3]>1) return {ready:false,reason:'normalized-calm-area-required'}
  if(kind==='blueprint'&&(!M.coverArt.local(part.photo)||!/^#[0-9a-f]{6}$/i.test(part.lineColor||''))) return {ready:false,reason:'photo-and-single-line-color-required'}
  if(kind==='brocade'&&(!['crimson','indigo','aged-paper'].includes(part.palette)||!['full','corner-left','corner-right','border-left','border-right'].includes(part.placement)||!Number.isFinite(part.goldRatio)||part.goldRatio<0||part.goldRatio>=.03)) return {ready:false,reason:'one-palette-placement-gold-limit-required'}
  return {...part,valid:true,ready:false,reason:'asset-not-loaded',kind,labels:Array.isArray(part.labels)?part.labels:[]}
}

M.coverArt.loadComponent = async (c,kind) => {
  const part=M.coverArt.component(c,kind)
  if(!part.valid) return part
  const image=new Image(); image.src=part.src
  try { await image.decode() } catch { return {...part,ready:false,reason:'asset-not-found-or-unreadable'} }
  if(image.naturalWidth!==part.width||image.naturalHeight!==part.height) return {...part,ready:false,reason:'pixel-size-mismatch'}
  return {...part,ready:true,reason:null}
}

/* variants/cover/_showreel-extra.js */
// 單06：原作地理點、短時間軸與 WebGL 照片鏡射；只供新增三版，不改既有版本
M.srExtra={
 clean:s=>String(s||'').replace(/[，。,.；;]+$/u,''),
 land:[[-54.5,-71.22],[-54.5,-68.63],[-53.0,-72.5],[-53.0,-70.0],[-51.5,-73.69],[-51.5,-71.28],[-50.0,-72.47],[-50.0,-70.13],[-48.5,-73.58],[-48.5,-71.32],[-48.5,-69.06],[-48.5,-66.79],[-47.0,-72.44],[-47.0,-70.24],[-47.0,-68.05],[-45.5,-72.86],[-45.5,-70.71],[-45.5,-68.57],[-45.5,167.14],[-45.5,169.29],[-44.0,-71.79],[-44.0,-69.71],[-44.0,-67.63],[-44.0,-65.55],[-44.0,169.6],[-44.0,171.68],[-42.5,-72.2],[-42.5,-70.17],[-42.5,-68.14],[-42.5,-66.1],[-42.5,-64.07],[-42.5,145.42],[-42.5,147.46],[-42.5,171.86],[-41.0,-72.6],[-41.0,-70.61],[-41.0,-68.62],[-41.0,-66.63],[-41.0,148.18],[-41.0,174.03],[-41.0,176.02],[-39.5,-72.97],[-39.5,-71.03],[-39.5,-69.08],[-39.5,-67.14],[-39.5,-65.19],[-39.5,-63.24],[-39.5,174.16],[-39.5,176.11],[-38.0,-73.33],[-38.0,-71.43],[-38.0,-69.52],[-38.0,-67.62],[-38.0,-65.71],[-38.0,-63.81],[-38.0,-61.9],[-38.0,-60.0],[-38.0,-58.1],[-38.0,141.9],[-38.0,143.81],[-38.0,145.71],[-38.0,147.62],[-38.0,176.19],[-38.0,178.1],[-36.5,-71.81],[-36.5,-69.95],[-36.5,-68.08],[-36.5,-66.22],[-36.5,-64.35],[-36.5,-62.49],[-36.5,-60.62],[-36.5,-58.76],[-36.5,-56.89],[-36.5,140.83],[-36.5,142.69],[-36.5,144.56],[-36.5,146.42],[-36.5,148.29],[-35.0,-72.18],[-35.0,-70.36],[-35.0,-68.53],[-35.0,-66.7],[-35.0,-64.87],[-35.0,-63.05],[-35.0,-61.22],[-35.0,-59.39],[-35.0,117.87],[-35.0,139.8],[-35.0,141.62],[-35.0,143.45],[-35.0,145.28],[-35.0,147.11],[-35.0,148.93],[-35.0,150.76],[-33.5,-70.2],[-33.5,-68.4],[-33.5,-66.6],[-33.5,-64.8],[-33.5,-63.0],[-33.5,-61.2],[-33.5,-59.4],[-33.5,-57.6],[-33.5,-55.8],[-33.5,-54.0],[-33.5,19.8],[-33.5,21.6],[-33.5,23.4],[-33.5,25.2],[-33.5,27.0],[-33.5,117.0],[-33.5,118.8],[-33.5,120.6],[-33.5,122.4],[-33.5,135.0],[-33.5,136.8],[-33.5,138.6],[-33.5,140.4],[-33.5,142.2],[-33.5,144.0],[-33.5,145.8],[-33.5,147.6],[-33.5,149.4],[-33.5,151.2],[-32.0,-70.59],[-32.0,-68.82],[-32.0,-67.06],[-32.0,-65.29],[-32.0,-63.53],[-32.0,-61.76],[-32.0,-60.0],[-32.0,-58.24],[-32.0,-56.47],[-32.0,-54.71],[-32.0,-52.94],[-32.0,19.41],[-32.0,21.18],[-32.0,22.94],[-32.0,24.71],[-32.0,26.47],[-32.0,28.24],[-32.0,116.47],[-32.0,118.24],[-32.0,120.0],[-32.0,121.76],[-32.0,123.53],[-32.0,125.29],[-32.0,127.06],[-32.0,132.35],[-32.0,134.12],[-32.0,135.88],[-32.0,137.65],[-32.0,139.41],[-32.0,141.18],[-32.0,142.94],[-32.0,144.71],[-32.0,146.47],[-32.0,148.24],[-32.0,150.0],[-32.0,151.76],[-30.5,-70.43],[-30.5,-68.7],[-30.5,-66.96],[-30.5,-65.22],[-30.5,-63.48],[-30.5,-61.74],[-30.5,-60.0],[-30.5,-58.26],[-30.5,-56.52],[-30.5,-54.78],[-30.5,-53.04],[-30.5,-51.3],[-30.5,18.26],[-30.5,20.0],[-30.5,21.74],[-30.5,23.48],[-30.5,25.22],[-30.5,26.96],[-30.5,28.7],[-30.5,30.43],[-30.5,115.65],[-30.5,117.39],[-30.5,119.13],[-30.5,120.87],[-30.5,122.61],[-30.5,124.35],[-30.5,126.09],[-30.5,127.83],[-30.5,129.57],[-30.5,131.3],[-30.5,133.04],[-30.5,134.78],[-30.5,136.52],[-30.5,138.26],[-30.5,140.0],[-30.5,141.74],[-30.5,143.48],[-30.5,145.22],[-30.5,146.96],[-30.5,148.7],[-30.5,150.43],[-30.5,152.17],[-29.0,-70.29],[-29.0,-68.57],[-29.0,-66.86],[-29.0,-65.14],[-29.0,-63.43],[-29.0,-61.71],[-29.0,-60.0],[-29.0,-58.29],[-29.0,-56.57],[-29.0,-54.86],[-29.0,-53.14],[-29.0,-51.43],[-29.0,-49.71],[-29.0,17.14],[-29.0,18.86],[-29.0,20.57],[-29.0,22.29],[-29.0,24.0],[-29.0,25.71],[-29.0,27.43],[-29.0,29.14],[-29.0,30.86],[-29.0,114.86],[-29.0,116.57],[-29.0,118.29],[-29.0,120.0],[-29.0,121.71],[-29.0,123.43],[-29.0,125.14],[-29.0,126.86],[-29.0,128.57],[-29.0,130.29],[-29.0,132.0],[-29.0,133.71],[-29.0,135.43],[-29.0,137.14],[-29.0,138.86],[-29.0,140.57],[-29.0,142.29],[-29.0,144.0],[-29.0,145.71],[-29.0,147.43],[-29.0,149.14],[-29.0,150.86],[-29.0,152.57],[-27.5,-70.14],[-27.5,-68.45],[-27.5,-66.76],[-27.5,-65.07],[-27.5,-63.38],[-27.5,-61.69],[-27.5,-60.0],[-27.5,-58.31],[-27.5,-56.62],[-27.5,-54.93],[-27.5,-53.24],[-27.5,-51.55],[-27.5,-49.86],[-27.5,16.06],[-27.5,17.75],[-27.5,19.44],[-27.5,21.13],[-27.5,22.82],[-27.5,24.51],[-27.5,26.2],[-27.5,27.89],[-27.5,29.58],[-27.5,31.27],[-27.5,114.08],[-27.5,115.77],[-27.5,117.46],[-27.5,119.15],[-27.5,120.85],[-27.5,122.54],[-27.5,124.23],[-27.5,125.92],[-27.5,127.61],[-27.5,129.3],[-27.5,130.99],[-27.5,132.68],[-27.5,134.37],[-27.5,136.06],[-27.5,137.75],[-27.5,139.44],[-27.5,141.13],[-27.5,142.82],[-27.5,144.51],[-27.5,146.2],[-27.5,147.89],[-27.5,149.58],[-27.5,151.27],[-27.5,152.96],[-26.0,-70.0],[-26.0,-68.33],[-26.0,-66.67],[-26.0,-65.0],[-26.0,-63.33],[-26.0,-61.67],[-26.0,-60.0],[-26.0,-58.33],[-26.0,-56.67],[-26.0,-55.0],[-26.0,-53.33],[-26.0,-51.67],[-26.0,-50.0],[-26.0,15.0],[-26.0,16.67],[-26.0,18.33],[-26.0,20.0],[-26.0,21.67],[-26.0,23.33],[-26.0,25.0],[-26.0,26.67],[-26.0,28.33],[-26.0,30.0],[-26.0,31.67],[-26.0,115.0],[-26.0,116.67],[-26.0,118.33],[-26.0,120.0],[-26.0,121.67],[-26.0,123.33],[-26.0,125.0],[-26.0,126.67],[-26.0,128.33],[-26.0,130.0],[-26.0,131.67],[-26.0,133.33],[-26.0,135.0],[-26.0,136.67],[-26.0,138.33],[-26.0,140.0],[-26.0,141.67],[-26.0,143.33],[-26.0,145.0],[-26.0,146.67],[-26.0,148.33],[-26.0,150.0],[-26.0,151.67],[-24.5,-69.36],[-24.5,-67.71],[-24.5,-66.06],[-24.5,-64.4],[-24.5,-62.75],[-24.5,-61.1],[-24.5,-59.45],[-24.5,-57.8],[-24.5,-56.15],[-24.5,-54.5],[-24.5,-52.84],[-24.5,-51.19],[-24.5,-49.54],[-24.5,-47.89],[-24.5,14.86],[-24.5,16.51],[-24.5,18.17],[-24.5,19.82],[-24.5,21.47],[-24.5,23.12],[-24.5,24.77],[-24.5,26.42],[-24.5,28.07],[-24.5,29.72],[-24.5,31.38],[-24.5,33.03],[-24.5,34.68],[-24.5,44.59],[-24.5,46.24],[-24.5,113.94],[-24.5,115.6],[-24.5,117.25],[-24.5,118.9],[-24.5,120.55],[-24.5,122.2],[-24.5,123.85],[-24.5,125.5],[-24.5,127.16],[-24.5,128.81],[-24.5,130.46],[-24.5,132.11],[-24.5,133.76],[-24.5,135.41],[-24.5,137.06],[-24.5,138.72],[-24.5,140.37],[-24.5,142.02],[-24.5,143.67],[-24.5,145.32],[-24.5,146.97],[-24.5,148.62],[-24.5,150.28],[-24.5,151.93],[-23.0,-69.23],[-23.0,-67.6],[-23.0,-65.97],[-23.0,-64.34],[-23.0,-62.71],[-23.0,-61.09],[-23.0,-59.46],[-23.0,-57.83],[-23.0,-56.2],[-23.0,-54.57],[-23.0,-52.94],[-23.0,-51.31],[-23.0,-49.68],[-23.0,-48.05],[-23.0,-46.43],[-23.0,-44.8],[-23.0,15.48],[-23.0,17.1],[-23.0,18.73],[-23.0,20.36],[-23.0,21.99],[-23.0,23.62],[-23.0,25.25],[-23.0,26.88],[-23.0,28.51],[-23.0,30.14],[-23.0,31.76],[-23.0,33.39],[-23.0,35.02],[-23.0,44.8],[-23.0,46.43],[-23.0,114.84],[-23.0,116.47],[-23.0,118.1],[-23.0,119.73],[-23.0,121.36],[-23.0,122.99],[-23.0,124.62],[-23.0,126.24],[-23.0,127.87],[-23.0,129.5],[-23.0,131.13],[-23.0,132.76],[-23.0,134.39],[-23.0,136.02],[-23.0,137.65],[-23.0,139.28],[-23.0,140.9],[-23.0,142.53],[-23.0,144.16],[-23.0,145.79],[-23.0,147.42],[-23.0,149.05],[-23.0,150.68],[-21.5,-68.61],[-21.5,-67.0],[-21.5,-65.38],[-21.5,-63.77],[-21.5,-62.15],[-21.5,-60.54],[-21.5,-58.92],[-21.5,-57.31],[-21.5,-55.7],[-21.5,-54.08],[-21.5,-52.47],[-21.5,-50.85],[-21.5,-49.24],[-21.5,-47.62],[-21.5,-46.01],[-21.5,-44.39],[-21.5,-42.78],[-21.5,-41.17],[-21.5,15.34],[-21.5,16.95],[-21.5,18.57],[-21.5,20.18],[-21.5,21.79],[-21.5,23.41],[-21.5,25.02],[-21.5,26.64],[-21.5,28.25],[-21.5,29.87],[-21.5,31.48],[-21.5,33.09],[-21.5,34.71],[-21.5,44.39],[-21.5,46.01],[-21.5,47.62],[-21.5,117.04],[-21.5,118.65],[-21.5,120.27],[-21.5,121.88],[-21.5,123.5],[-21.5,125.11],[-21.5,126.73],[-21.5,128.34],[-21.5,129.96],[-21.5,131.57],[-21.5,133.18],[-21.5,134.8],[-21.5,136.41],[-21.5,138.03],[-21.5,139.64],[-21.5,141.26],[-21.5,142.87],[-21.5,144.48],[-21.5,146.1],[-21.5,147.71],[-21.5,149.33],[-21.5,165.47],[-20.0,-70.09],[-20.0,-68.5],[-20.0,-66.9],[-20.0,-65.31],[-20.0,-63.72],[-20.0,-62.12],[-20.0,-60.53],[-20.0,-58.94],[-20.0,-57.35],[-20.0,-55.75],[-20.0,-54.16],[-20.0,-52.57],[-20.0,-50.97],[-20.0,-49.38],[-20.0,-47.79],[-20.0,-46.19],[-20.0,-44.6],[-20.0,-43.01],[-20.0,-41.42],[-20.0,14.34],[-20.0,15.93],[-20.0,17.52],[-20.0,19.12],[-20.0,20.71],[-20.0,22.3],[-20.0,23.89],[-20.0,25.49],[-20.0,27.08],[-20.0,28.67],[-20.0,30.27],[-20.0,31.86],[-20.0,33.45],[-20.0,44.6],[-20.0,46.19],[-20.0,47.79],[-20.0,121.06],[-20.0,122.65],[-20.0,124.25],[-20.0,125.84],[-20.0,127.43],[-20.0,129.03],[-20.0,130.62],[-20.0,132.21],[-20.0,133.81],[-20.0,135.4],[-20.0,136.99],[-20.0,138.58],[-20.0,140.18],[-20.0,141.77],[-20.0,143.36],[-20.0,144.96],[-20.0,146.55],[-20.0,148.14],[-18.5,-69.47],[-18.5,-67.89],[-18.5,-66.32],[-18.5,-64.74],[-18.5,-63.16],[-18.5,-61.58],[-18.5,-60.0],[-18.5,-58.42],[-18.5,-56.84],[-18.5,-55.26],[-18.5,-53.68],[-18.5,-52.11],[-18.5,-50.53],[-18.5,-48.95],[-18.5,-47.37],[-18.5,-45.79],[-18.5,-44.21],[-18.5,-42.63],[-18.5,-41.05],[-18.5,12.63],[-18.5,14.21],[-18.5,15.79],[-18.5,17.37],[-18.5,18.95],[-18.5,20.53],[-18.5,22.11],[-18.5,23.68],[-18.5,25.26],[-18.5,26.84],[-18.5,28.42],[-18.5,30.0],[-18.5,31.58],[-18.5,33.16],[-18.5,34.74],[-18.5,36.32],[-18.5,44.21],[-18.5,45.79],[-18.5,47.37],[-18.5,48.95],[-18.5,123.16],[-18.5,124.74],[-18.5,126.32],[-18.5,127.89],[-18.5,129.47],[-18.5,131.05],[-18.5,132.63],[-18.5,134.21],[-18.5,135.79],[-18.5,137.37],[-18.5,138.95],[-18.5,140.53],[-18.5,142.11],[-18.5,143.68],[-18.5,145.26],[-17.0,-72.0],[-17.0,-70.43],[-17.0,-68.87],[-17.0,-67.3],[-17.0,-65.74],[-17.0,-64.17],[-17.0,-62.61],[-17.0,-61.04],[-17.0,-59.48],[-17.0,-57.91],[-17.0,-56.35],[-17.0,-54.78],[-17.0,-53.22],[-17.0,-51.65],[-17.0,-50.09],[-17.0,-48.52],[-17.0,-46.96],[-17.0,-45.39],[-17.0,-43.83],[-17.0,-42.26],[-17.0,-40.7],[-17.0,12.52],[-17.0,14.09],[-17.0,15.65],[-17.0,17.22],[-17.0,18.78],[-17.0,20.35],[-17.0,21.91],[-17.0,23.48],[-17.0,25.04],[-17.0,26.61],[-17.0,28.17],[-17.0,29.74],[-17.0,31.3],[-17.0,32.87],[-17.0,34.43],[-17.0,36.0],[-17.0,37.57],[-17.0,45.39],[-17.0,46.96],[-17.0,48.52],[-17.0,125.22],[-17.0,126.78],[-17.0,128.35],[-17.0,129.91],[-17.0,131.48],[-17.0,133.04],[-17.0,134.61],[-17.0,136.17],[-17.0,137.74],[-17.0,142.43],[-17.0,144.0],[-17.0,145.57],[-15.5,-74.03],[-15.5,-72.47],[-15.5,-70.91],[-15.5,-69.35],[-15.5,-67.79],[-15.5,-66.23],[-15.5,-64.68],[-15.5,-63.12],[-15.5,-61.56],[-15.5,-60.0],[-15.5,-58.44],[-15.5,-56.88],[-15.5,-55.32],[-15.5,-53.77],[-15.5,-52.21],[-15.5,-50.65],[-15.5,-49.09],[-15.5,-47.53],[-15.5,-45.97],[-15.5,-44.42],[-15.5,-42.86],[-15.5,-41.3],[-15.5,-39.74],[-15.5,13.25],[-15.5,14.81],[-15.5,16.36],[-15.5,17.92],[-15.5,19.48],[-15.5,21.04],[-15.5,22.6],[-15.5,24.16],[-15.5,25.71],[-15.5,27.27],[-15.5,28.83],[-15.5,30.39],[-15.5,31.95],[-15.5,33.51],[-15.5,35.06],[-15.5,36.62],[-15.5,38.18],[-15.5,39.74],[-15.5,47.53],[-15.5,49.09],[-15.5,125.45],[-15.5,127.01],[-15.5,128.57],[-15.5,130.13],[-15.5,131.69],[-15.5,133.25],[-15.5,134.81],[-15.5,142.6],[-15.5,144.16],[-14.0,-74.94],[-14.0,-73.39],[-14.0,-71.85],[-14.0,-70.3],[-14.0,-68.76],[-14.0,-67.21],[-14.0,-65.67],[-14.0,-64.12],[-14.0,-62.58],[-14.0,-61.03],[-14.0,-59.48],[-14.0,-57.94],[-14.0,-56.39],[-14.0,-54.85],[-14.0,-53.3],[-14.0,-51.76],[-14.0,-50.21],[-14.0,-48.67],[-14.0,-47.12],[-14.0,-45.58],[-14.0,-44.03],[-14.0,-42.49],[-14.0,-40.94],[-14.0,-39.4],[-14.0,13.13],[-14.0,14.68],[-14.0,16.22],[-14.0,17.77],[-14.0,19.31],[-14.0,20.86],[-14.0,22.4],[-14.0,23.95],[-14.0,25.49],[-14.0,27.04],[-14.0,28.58],[-14.0,30.13],[-14.0,31.67],[-14.0,33.22],[-14.0,34.76],[-14.0,36.31],[-14.0,37.85],[-14.0,39.4],[-14.0,48.67],[-14.0,130.56],[-14.0,132.1],[-14.0,133.65],[-14.0,135.19],[-14.0,136.74],[-14.0,142.92],[-12.5,-75.38],[-12.5,-73.85],[-12.5,-72.31],[-12.5,-70.77],[-12.5,-69.23],[-12.5,-67.69],[-12.5,-66.15],[-12.5,-64.62],[-12.5,-63.08],[-12.5,-61.54],[-12.5,-60.0],[-12.5,-58.46],[-12.5,-56.92],[-12.5,-55.38],[-12.5,-53.85],[-12.5,-52.31],[-12.5,-50.77],[-12.5,-49.23],[-12.5,-47.69],[-12.5,-46.15],[-12.5,-44.62],[-12.5,-43.08],[-12.5,-41.54],[-12.5,-40.0],[-12.5,-38.46],[-12.5,13.85],[-12.5,15.38],[-12.5,16.92],[-12.5,18.46],[-12.5,20.0],[-12.5,21.54],[-12.5,23.08],[-12.5,24.62],[-12.5,26.15],[-12.5,27.69],[-12.5,29.23],[-12.5,30.77],[-12.5,32.31],[-12.5,33.85],[-12.5,35.38],[-12.5,36.92],[-12.5,38.46],[-12.5,40.0],[-12.5,49.23],[-12.5,130.77],[-12.5,132.31],[-12.5,133.85],[-12.5,135.38],[-12.5,143.08],[-11.0,-76.27],[-11.0,-74.75],[-11.0,-73.22],[-11.0,-71.69],[-11.0,-70.17],[-11.0,-68.64],[-11.0,-67.12],[-11.0,-65.59],[-11.0,-64.07],[-11.0,-62.54],[-11.0,-61.02],[-11.0,-59.49],[-11.0,-57.97],[-11.0,-56.44],[-11.0,-54.92],[-11.0,-53.39],[-11.0,-51.86],[-11.0,-50.34],[-11.0,-48.81],[-11.0,-47.29],[-11.0,-45.76],[-11.0,-44.24],[-11.0,-42.71],[-11.0,-41.19],[-11.0,-39.66],[-11.0,-38.14],[-11.0,15.25],[-11.0,16.78],[-11.0,18.31],[-11.0,19.83],[-11.0,21.36],[-11.0,22.88],[-11.0,24.41],[-11.0,25.93],[-11.0,27.46],[-11.0,28.98],[-11.0,30.51],[-11.0,32.03],[-11.0,33.56],[-11.0,35.08],[-11.0,36.61],[-11.0,38.14],[-11.0,39.66],[-9.5,-78.23],[-9.5,-76.71],[-9.5,-75.19],[-9.5,-73.67],[-9.5,-72.15],[-9.5,-70.63],[-9.5,-69.11],[-9.5,-67.59],[-9.5,-66.08],[-9.5,-64.56],[-9.5,-63.04],[-9.5,-61.52],[-9.5,-60.0],[-9.5,-58.48],[-9.5,-56.96],[-9.5,-55.44],[-9.5,-53.92],[-9.5,-52.41],[-9.5,-50.89],[-9.5,-49.37],[-9.5,-47.85],[-9.5,-46.33],[-9.5,-44.81],[-9.5,-43.29],[-9.5,-41.77],[-9.5,-40.25],[-9.5,-38.73],[-9.5,-37.22],[-9.5,-35.7],[-9.5,14.43],[-9.5,15.95],[-9.5,17.47],[-9.5,18.99],[-9.5,20.51],[-9.5,22.03],[-9.5,23.54],[-9.5,25.06],[-9.5,26.58],[-9.5,28.1],[-9.5,29.62],[-9.5,31.14],[-9.5,32.66],[-9.5,34.18],[-9.5,35.7],[-9.5,37.22],[-9.5,38.73],[-9.5,119.24],[-9.5,148.1],[-9.5,160.25],[-8.0,-78.66],[-8.0,-77.14],[-8.0,-75.63],[-8.0,-74.12],[-8.0,-72.61],[-8.0,-71.09],[-8.0,-69.58],[-8.0,-68.07],[-8.0,-66.55],[-8.0,-65.04],[-8.0,-63.53],[-8.0,-62.02],[-8.0,-60.5],[-8.0,-58.99],[-8.0,-57.48],[-8.0,-55.97],[-8.0,-54.45],[-8.0,-52.94],[-8.0,-51.43],[-8.0,-49.92],[-8.0,-48.4],[-8.0,-46.89],[-8.0,-45.38],[-8.0,-43.87],[-8.0,-42.35],[-8.0,-40.84],[-8.0,-39.33],[-8.0,-37.82],[-8.0,-36.3],[-8.0,13.61],[-8.0,15.13],[-8.0,16.64],[-8.0,18.15],[-8.0,19.66],[-8.0,21.18],[-8.0,22.69],[-8.0,24.2],[-8.0,25.71],[-8.0,27.23],[-8.0,28.74],[-8.0,30.25],[-8.0,31.76],[-8.0,33.28],[-8.0,34.79],[-8.0,36.3],[-8.0,37.82],[-8.0,39.33],[-8.0,110.42],[-8.0,111.93],[-8.0,113.45],[-8.0,139.16],[-8.0,140.67],[-8.0,142.18],[-8.0,143.7],[-8.0,146.72],[-6.5,-80.17],[-6.5,-78.66],[-6.5,-77.14],[-6.5,-75.63],[-6.5,-74.12],[-6.5,-72.61],[-6.5,-71.09],[-6.5,-69.58],[-6.5,-68.07],[-6.5,-66.55],[-6.5,-65.04],[-6.5,-63.53],[-6.5,-62.02],[-6.5,-60.5],[-6.5,-58.99],[-6.5,-57.48],[-6.5,-55.97],[-6.5,-54.45],[-6.5,-52.94],[-6.5,-51.43],[-6.5,-49.92],[-6.5,-48.4],[-6.5,-46.89],[-6.5,-45.38],[-6.5,-43.87],[-6.5,-42.35],[-6.5,-40.84],[-6.5,-39.33],[-6.5,-37.82],[-6.5,-36.3],[-6.5,13.61],[-6.5,15.13],[-6.5,16.64],[-6.5,18.15],[-6.5,19.66],[-6.5,21.18],[-6.5,22.69],[-6.5,24.2],[-6.5,25.71],[-6.5,27.23],[-6.5,28.74],[-6.5,30.25],[-6.5,31.76],[-6.5,33.28],[-6.5,34.79],[-6.5,36.3],[-6.5,37.82],[-6.5,105.88],[-6.5,107.39],[-6.5,139.16],[-6.5,140.67],[-6.5,142.18],[-6.5,143.7],[-6.5,145.21],[-6.5,146.72],[-6.5,155.8],[-5.0,-80.59],[-5.0,-79.08],[-5.0,-77.57],[-5.0,-76.07],[-5.0,-74.56],[-5.0,-73.05],[-5.0,-71.55],[-5.0,-70.04],[-5.0,-68.54],[-5.0,-67.03],[-5.0,-65.52],[-5.0,-64.02],[-5.0,-62.51],[-5.0,-61.0],[-5.0,-59.5],[-5.0,-57.99],[-5.0,-56.49],[-5.0,-54.98],[-5.0,-53.47],[-5.0,-51.97],[-5.0,-50.46],[-5.0,-48.95],[-5.0,-47.45],[-5.0,-45.94],[-5.0,-44.44],[-5.0,-42.93],[-5.0,-41.42],[-5.0,-39.92],[-5.0,-38.41],[-5.0,-36.9],[-5.0,12.8],[-5.0,14.31],[-5.0,15.82],[-5.0,17.32],[-5.0,18.83],[-5.0,20.33],[-5.0,21.84],[-5.0,23.35],[-5.0,24.85],[-5.0,26.36],[-5.0,27.87],[-5.0,29.37],[-5.0,30.88],[-5.0,32.38],[-5.0,33.89],[-5.0,35.4],[-5.0,36.9],[-5.0,38.41],[-5.0,104.69],[-5.0,119.75],[-5.0,137.82],[-5.0,139.33],[-5.0,140.84],[-5.0,142.34],[-5.0,143.85],[-5.0,145.36],[-5.0,151.38],[-3.5,-79.5],[-3.5,-78.0],[-3.5,-76.5],[-3.5,-75.0],[-3.5,-73.5],[-3.5,-72.0],[-3.5,-70.5],[-3.5,-69.0],[-3.5,-67.5],[-3.5,-66.0],[-3.5,-64.5],[-3.5,-63.0],[-3.5,-61.5],[-3.5,-60.0],[-3.5,-58.5],[-3.5,-57.0],[-3.5,-55.5],[-3.5,-54.0],[-3.5,-52.5],[-3.5,-51.0],[-3.5,-49.5],[-3.5,-48.0],[-3.5,-46.5],[-3.5,-45.0],[-3.5,-43.5],[-3.5,-42.0],[-3.5,-40.5],[-3.5,-39.0],[-3.5,12.0],[-3.5,13.5],[-3.5,15.0],[-3.5,16.5],[-3.5,18.0],[-3.5,19.5],[-3.5,21.0],[-3.5,22.5],[-3.5,24.0],[-3.5,25.5],[-3.5,27.0],[-3.5,28.5],[-3.5,30.0],[-3.5,31.5],[-3.5,33.0],[-3.5,34.5],[-3.5,36.0],[-3.5,37.5],[-3.5,39.0],[-3.5,102.0],[-3.5,103.5],[-3.5,105.0],[-3.5,115.5],[-3.5,120.0],[-3.5,121.5],[-3.5,130.5],[-3.5,133.5],[-3.5,135.0],[-3.5,136.5],[-3.5,138.0],[-3.5,139.5],[-3.5,141.0],[-3.5,142.5],[-2.0,-79.5],[-2.0,-78.0],[-2.0,-76.5],[-2.0,-75.0],[-2.0,-73.5],[-2.0,-72.0],[-2.0,-70.5],[-2.0,-69.0],[-2.0,-67.5],[-2.0,-66.0],[-2.0,-64.5],[-2.0,-63.0],[-2.0,-61.5],[-2.0,-60.0],[-2.0,-58.5],[-2.0,-57.0],[-2.0,-55.5],[-2.0,-54.0],[-2.0,-52.5],[-2.0,-51.0],[-2.0,-49.5],[-2.0,-48.0],[-2.0,-46.5],[-2.0,-45.0],[-2.0,10.5],[-2.0,12.0],[-2.0,13.5],[-2.0,15.0],[-2.0,16.5],[-2.0,18.0],[-2.0,19.5],[-2.0,21.0],[-2.0,22.5],[-2.0,24.0],[-2.0,25.5],[-2.0,27.0],[-2.0,28.5],[-2.0,30.0],[-2.0,31.5],[-2.0,33.0],[-2.0,34.5],[-2.0,36.0],[-2.0,37.5],[-2.0,39.0],[-2.0,40.5],[-2.0,102.0],[-2.0,103.5],[-2.0,111.0],[-2.0,112.5],[-2.0,114.0],[-2.0,115.5],[-2.0,120.0],[-2.0,124.5],[-2.0,133.5],[-2.0,138.0],[-2.0,147.0],[-0.5,-79.5],[-0.5,-78.0],[-0.5,-76.5],[-0.5,-75.0],[-0.5,-73.5],[-0.5,-72.0],[-0.5,-70.5],[-0.5,-69.0],[-0.5,-67.5],[-0.5,-66.0],[-0.5,-64.5],[-0.5,-63.0],[-0.5,-61.5],[-0.5,-60.0],[-0.5,-58.5],[-0.5,-57.0],[-0.5,-55.5],[-0.5,-54.0],[-0.5,-52.5],[-0.5,-49.5],[-0.5,10.5],[-0.5,12.0],[-0.5,13.5],[-0.5,15.0],[-0.5,16.5],[-0.5,18.0],[-0.5,19.5],[-0.5,21.0],[-0.5,22.5],[-0.5,24.0],[-0.5,25.5],[-0.5,27.0],[-0.5,28.5],[-0.5,30.0],[-0.5,31.5],[-0.5,33.0],[-0.5,34.5],[-0.5,36.0],[-0.5,37.5],[-0.5,39.0],[-0.5,40.5],[-0.5,42.0],[-0.5,100.5],[-0.5,102.0],[-0.5,109.5],[-0.5,111.0],[-0.5,112.5],[-0.5,114.0],[-0.5,115.5],[-0.5,117.0],[-0.5,120.0],[-0.5,127.5],[-0.5,130.5],[1.0,-79.5],[1.0,-78.0],[1.0,-76.5],[1.0,-75.0],[1.0,-73.5],[1.0,-72.0],[1.0,-70.5],[1.0,-69.0],[1.0,-67.5],[1.0,-66.0],[1.0,-64.5],[1.0,-63.0],[1.0,-61.5],[1.0,-60.0],[1.0,-58.5],[1.0,-57.0],[1.0,-55.5],[1.0,-54.0],[1.0,-52.5],[1.0,-51.0],[1.0,10.5],[1.0,12.0],[1.0,13.5],[1.0,15.0],[1.0,16.5],[1.0,18.0],[1.0,19.5],[1.0,21.0],[1.0,22.5],[1.0,24.0],[1.0,25.5],[1.0,27.0],[1.0,28.5],[1.0,30.0],[1.0,31.5],[1.0,33.0],[1.0,34.5],[1.0,36.0],[1.0,37.5],[1.0,39.0],[1.0,40.5],[1.0,42.0],[1.0,43.5],[1.0,97.5],[1.0,99.0],[1.0,100.5],[1.0,102.0],[1.0,109.5],[1.0,111.0],[1.0,112.5],[1.0,114.0],[1.0,115.5],[1.0,117.0],[1.0,118.5],[1.0,121.5],[1.0,124.5],[1.0,127.5],[2.5,-78.0],[2.5,-76.5],[2.5,-75.0],[2.5,-73.5],[2.5,-72.0],[2.5,-70.5],[2.5,-69.0],[2.5,-67.5],[2.5,-66.0],[2.5,-64.5],[2.5,-63.0],[2.5,-61.5],[2.5,-60.0],[2.5,-58.5],[2.5,-57.0],[2.5,-55.5],[2.5,-54.0],[2.5,-52.5],[2.5,-51.0],[2.5,10.5],[2.5,12.0],[2.5,13.5],[2.5,15.0],[2.5,16.5],[2.5,18.0],[2.5,19.5],[2.5,21.0],[2.5,22.5],[2.5,24.0],[2.5,25.5],[2.5,27.0],[2.5,28.5],[2.5,30.0],[2.5,31.5],[2.5,33.0],[2.5,34.5],[2.5,36.0],[2.5,37.5],[2.5,39.0],[2.5,40.5],[2.5,42.0],[2.5,43.5],[2.5,45.0],[2.5,99.0],[2.5,102.0],[2.5,103.5],[2.5,112.5],[2.5,114.0],[2.5,115.5],[2.5,117.0],[4.0,-76.07],[4.0,-74.56],[4.0,-73.05],[4.0,-71.55],[4.0,-70.04],[4.0,-68.54],[4.0,-67.03],[4.0,-65.52],[4.0,-64.02],[4.0,-62.51],[4.0,-61.0],[4.0,-59.5],[4.0,-57.99],[4.0,-56.49],[4.0,-54.98],[4.0,-53.47],[4.0,-51.97],[4.0,9.79],[4.0,11.3],[4.0,12.8],[4.0,14.31],[4.0,15.82],[4.0,17.32],[4.0,18.83],[4.0,20.33],[4.0,21.84],[4.0,23.35],[4.0,24.85],[4.0,26.36],[4.0,27.87],[4.0,29.37],[4.0,30.88],[4.0,32.38],[4.0,33.89],[4.0,35.4],[4.0,36.9],[4.0,38.41],[4.0,39.92],[4.0,41.42],[4.0,42.93],[4.0,44.44],[4.0,45.94],[4.0,47.45],[4.0,97.15],[4.0,101.67],[4.0,103.18],[4.0,113.72],[4.0,115.23],[4.0,116.74],[5.5,-76.07],[5.5,-74.56],[5.5,-73.05],[5.5,-71.55],[5.5,-70.04],[5.5,-68.54],[5.5,-67.03],[5.5,-65.52],[5.5,-64.02],[5.5,-62.51],[5.5,-61.0],[5.5,-59.5],[5.5,-57.99],[5.5,-56.49],[5.5,-54.98],[5.5,-53.47],[5.5,-8.28],[5.5,-6.78],[5.5,-5.27],[5.5,-3.77],[5.5,-2.26],[5.5,-0.75],[5.5,5.27],[5.5,6.78],[5.5,8.28],[5.5,9.79],[5.5,11.3],[5.5,12.8],[5.5,14.31],[5.5,15.82],[5.5,17.32],[5.5,18.83],[5.5,20.33],[5.5,21.84],[5.5,23.35],[5.5,24.85],[5.5,26.36],[5.5,27.87],[5.5,29.37],[5.5,30.88],[5.5,32.38],[5.5,33.89],[5.5,35.4],[5.5,36.9],[5.5,38.41],[5.5,39.92],[5.5,41.42],[5.5,42.93],[5.5,44.44],[5.5,45.94],[5.5,47.45],[5.5,95.65],[5.5,101.67],[5.5,116.74],[5.5,118.24],[7.0,-77.14],[7.0,-75.63],[7.0,-74.12],[7.0,-72.61],[7.0,-71.09],[7.0,-69.58],[7.0,-68.07],[7.0,-66.55],[7.0,-65.04],[7.0,-63.53],[7.0,-62.02],[7.0,-60.5],[7.0,-58.99],[7.0,-10.59],[7.0,-9.08],[7.0,-7.56],[7.0,-6.05],[7.0,-4.54],[7.0,-3.03],[7.0,-1.51],[7.0,0.0],[7.0,1.51],[7.0,3.03],[7.0,4.54],[7.0,6.05],[7.0,7.56],[7.0,9.08],[7.0,10.59],[7.0,12.1],[7.0,13.61],[7.0,15.13],[7.0,16.64],[7.0,18.15],[7.0,19.66],[7.0,21.18],[7.0,22.69],[7.0,24.2],[7.0,25.71],[7.0,27.23],[7.0,28.74],[7.0,30.25],[7.0,31.76],[7.0,33.28],[7.0,34.79],[7.0,36.3],[7.0,37.82],[7.0,39.33],[7.0,40.84],[7.0,42.35],[7.0,43.87],[7.0,45.38],[7.0,46.89],[7.0,48.4],[7.0,80.17],[7.0,81.68],[7.0,93.78],[7.0,99.83],[7.0,124.03],[8.5,-82.78],[8.5,-81.27],[8.5,-78.23],[8.5,-76.71],[8.5,-75.19],[8.5,-73.67],[8.5,-72.15],[8.5,-70.63],[8.5,-69.11],[8.5,-67.59],[8.5,-66.08],[8.5,-64.56],[8.5,-63.04],[8.5,-61.52],[8.5,-60.0],[8.5,-12.91],[8.5,-11.39],[8.5,-9.87],[8.5,-8.35],[8.5,-6.84],[8.5,-5.32],[8.5,-3.8],[8.5,-2.28],[8.5,-0.76],[8.5,0.76],[8.5,2.28],[8.5,3.8],[8.5,5.32],[8.5,6.84],[8.5,8.35],[8.5,9.87],[8.5,11.39],[8.5,12.91],[8.5,14.43],[8.5,15.95],[8.5,17.47],[8.5,18.99],[8.5,20.51],[8.5,22.03],[8.5,23.54],[8.5,25.06],[8.5,26.58],[8.5,28.1],[8.5,29.62],[8.5,31.14],[8.5,32.66],[8.5,34.18],[8.5,35.7],[8.5,37.22],[8.5,38.73],[8.5,40.25],[8.5,41.77],[8.5,43.29],[8.5,44.81],[8.5,46.33],[8.5,47.85],[8.5,49.37],[8.5,99.49],[8.5,123.8],[8.5,125.32],[10.0,-85.42],[10.0,-83.9],[10.0,-74.75],[10.0,-73.22],[10.0,-70.17],[10.0,-68.64],[10.0,-67.12],[10.0,-65.59],[10.0,-64.07],[10.0,-62.54],[10.0,-13.73],[10.0,-12.2],[10.0,-10.68],[10.0,-9.15],[10.0,-7.63],[10.0,-6.1],[10.0,-4.58],[10.0,-3.05],[10.0,-1.53],[10.0,0.0],[10.0,1.53],[10.0,3.05],[10.0,4.58],[10.0,6.1],[10.0,7.63],[10.0,9.15],[10.0,10.68],[10.0,12.2],[10.0,13.73],[10.0,15.25],[10.0,16.78],[10.0,18.31],[10.0,19.83],[10.0,21.36],[10.0,22.88],[10.0,24.41],[10.0,25.93],[10.0,27.46],[10.0,28.98],[10.0,30.51],[10.0,32.03],[10.0,33.56],[10.0,35.08],[10.0,36.61],[10.0,38.14],[10.0,39.66],[10.0,41.19],[10.0,42.71],[10.0,44.24],[10.0,45.76],[10.0,47.29],[10.0,48.81],[10.0,50.34],[10.0,76.27],[10.0,77.8],[10.0,99.15],[10.0,105.25],[10.0,123.56],[11.5,-85.02],[11.5,-72.77],[11.5,-69.7],[11.5,-14.55],[11.5,-13.02],[11.5,-11.49],[11.5,-9.96],[11.5,-8.43],[11.5,-6.89],[11.5,-5.36],[11.5,-3.83],[11.5,-2.3],[11.5,-0.77],[11.5,0.77],[11.5,2.3],[11.5,3.83],[11.5,5.36],[11.5,6.89],[11.5,8.43],[11.5,9.96],[11.5,11.49],[11.5,13.02],[11.5,14.55],[11.5,16.09],[11.5,17.62],[11.5,19.15],[11.5,20.68],[11.5,22.21],[11.5,23.74],[11.5,25.28],[11.5,26.81],[11.5,28.34],[11.5,29.87],[11.5,31.4],[11.5,32.94],[11.5,34.47],[11.5,36.0],[11.5,37.53],[11.5,39.06],[11.5,40.6],[11.5,42.13],[11.5,75.83],[11.5,77.36],[11.5,78.89],[11.5,98.81],[11.5,103.4],[11.5,104.94],[11.5,106.47],[11.5,108.0],[13.0,-86.15],[13.0,-84.62],[13.0,-15.38],[13.0,-13.85],[13.0,-12.31],[13.0,-10.77],[13.0,-9.23],[13.0,-7.69],[13.0,-6.15],[13.0,-4.62],[13.0,-3.08],[13.0,-1.54],[13.0,0.0],[13.0,1.54],[13.0,3.08],[13.0,4.62],[13.0,6.15],[13.0,7.69],[13.0,9.23],[13.0,10.77],[13.0,12.31],[13.0,13.85],[13.0,15.38],[13.0,16.92],[13.0,18.46],[13.0,20.0],[13.0,21.54],[13.0,23.08],[13.0,24.62],[13.0,26.15],[13.0,27.69],[13.0,29.23],[13.0,30.77],[13.0,32.31],[13.0,33.85],[13.0,35.38],[13.0,36.92],[13.0,38.46],[13.0,40.0],[13.0,41.54],[13.0,44.62],[13.0,75.38],[13.0,76.92],[13.0,78.46],[13.0,80.0],[13.0,100.0],[13.0,101.54],[13.0,103.08],[13.0,104.62],[13.0,106.15],[13.0,107.69],[13.0,109.23],[13.0,123.08],[14.5,-91.55],[14.5,-90.0],[14.5,-88.45],[14.5,-86.9],[14.5,-85.34],[14.5,-83.79],[14.5,-17.07],[14.5,-15.52],[14.5,-13.97],[14.5,-12.41],[14.5,-10.86],[14.5,-9.31],[14.5,-7.76],[14.5,-6.21],[14.5,-4.66],[14.5,-3.1],[14.5,-1.55],[14.5,0.0],[14.5,1.55],[14.5,3.1],[14.5,4.66],[14.5,6.21],[14.5,7.76],[14.5,9.31],[14.5,10.86],[14.5,12.41],[14.5,13.97],[14.5,15.52],[14.5,17.07],[14.5,18.62],[14.5,20.17],[14.5,21.72],[14.5,23.28],[14.5,24.83],[14.5,26.38],[14.5,27.93],[14.5,29.48],[14.5,31.03],[14.5,32.59],[14.5,34.14],[14.5,35.69],[14.5,37.24],[14.5,38.79],[14.5,40.34],[14.5,43.45],[14.5,45.0],[14.5,46.55],[14.5,48.1],[14.5,74.48],[14.5,76.03],[14.5,77.59],[14.5,79.14],[14.5,99.31],[14.5,100.86],[14.5,102.41],[14.5,103.97],[14.5,105.52],[14.5,107.07],[14.5,108.62],[14.5,121.03],[16.0,-97.4],[16.0,-95.84],[16.0,-92.73],[16.0,-91.17],[16.0,-89.61],[16.0,-16.36],[16.0,-14.81],[16.0,-13.25],[16.0,-11.69],[16.0,-10.13],[16.0,-8.57],[16.0,-7.01],[16.0,-5.45],[16.0,-3.9],[16.0,-2.34],[16.0,-0.78],[16.0,0.78],[16.0,2.34],[16.0,3.9],[16.0,5.45],[16.0,7.01],[16.0,8.57],[16.0,10.13],[16.0,11.69],[16.0,13.25],[16.0,14.81],[16.0,16.36],[16.0,17.92],[16.0,19.48],[16.0,21.04],[16.0,22.6],[16.0,24.16],[16.0,25.71],[16.0,27.27],[16.0,28.83],[16.0,30.39],[16.0,31.95],[16.0,33.51],[16.0,35.06],[16.0,36.62],[16.0,38.18],[16.0,42.86],[16.0,44.42],[16.0,45.97],[16.0,47.53],[16.0,49.09],[16.0,50.65],[16.0,74.03],[16.0,75.58],[16.0,77.14],[16.0,78.7],[16.0,80.26],[16.0,98.96],[16.0,100.52],[16.0,102.08],[16.0,103.64],[16.0,105.19],[16.0,106.75],[16.0,120.78],[17.5,-99.83],[17.5,-98.25],[17.5,-96.68],[17.5,-95.11],[17.5,-93.54],[17.5,-91.97],[17.5,-90.39],[17.5,-88.82],[17.5,-14.93],[17.5,-13.36],[17.5,-11.79],[17.5,-10.22],[17.5,-8.65],[17.5,-7.07],[17.5,-5.5],[17.5,-3.93],[17.5,-2.36],[17.5,-0.79],[17.5,0.79],[17.5,2.36],[17.5,3.93],[17.5,5.5],[17.5,7.07],[17.5,8.65],[17.5,10.22],[17.5,11.79],[17.5,13.36],[17.5,14.93],[17.5,16.51],[17.5,18.08],[17.5,19.65],[17.5,21.22],[17.5,22.79],[17.5,24.37],[17.5,25.94],[17.5,27.51],[17.5,29.08],[17.5,30.66],[17.5,32.23],[17.5,33.8],[17.5,35.37],[17.5,36.94],[17.5,38.52],[17.5,43.23],[17.5,44.8],[17.5,46.38],[17.5,47.95],[17.5,49.52],[17.5,51.09],[17.5,52.66],[17.5,54.24],[17.5,74.67],[17.5,76.24],[17.5,77.82],[17.5,79.39],[17.5,80.96],[17.5,82.53],[17.5,95.11],[17.5,96.68],[17.5,98.25],[17.5,99.83],[17.5,101.4],[17.5,102.97],[17.5,104.54],[17.5,106.11],[17.5,121.83],[19.0,-103.88],[19.0,-102.29],[19.0,-100.7],[19.0,-99.12],[19.0,-97.53],[19.0,-91.19],[19.0,-89.6],[19.0,-88.02],[19.0,-72.16],[19.0,-70.57],[19.0,-68.99],[19.0,-15.07],[19.0,-13.48],[19.0,-11.89],[19.0,-10.31],[19.0,-8.72],[19.0,-7.14],[19.0,-5.55],[19.0,-3.96],[19.0,-2.38],[19.0,-0.79],[19.0,0.79],[19.0,2.38],[19.0,3.96],[19.0,5.55],[19.0,7.14],[19.0,8.72],[19.0,10.31],[19.0,11.89],[19.0,13.48],[19.0,15.07],[19.0,16.65],[19.0,18.24],[19.0,19.82],[19.0,21.41],[19.0,23.0],[19.0,24.58],[19.0,26.17],[19.0,27.75],[19.0,29.34],[19.0,30.93],[19.0,32.51],[19.0,34.1],[19.0,35.68],[19.0,37.27],[19.0,42.03],[19.0,43.61],[19.0,45.2],[19.0,46.78],[19.0,48.37],[19.0,49.96],[19.0,51.54],[19.0,53.13],[19.0,54.71],[19.0,56.3],[19.0,73.74],[19.0,75.33],[19.0,76.92],[19.0,78.5],[19.0,80.09],[19.0,81.67],[19.0,83.26],[19.0,94.36],[19.0,95.95],[19.0,97.53],[19.0,99.12],[19.0,100.7],[19.0,102.29],[19.0,103.88],[19.0,105.46],[19.0,110.22],[20.5,-104.8],[20.5,-103.2],[20.5,-101.6],[20.5,-100.0],[20.5,-98.4],[20.5,-90.4],[20.5,-88.8],[20.5,-76.0],[20.5,-15.2],[20.5,-13.6],[20.5,-12.0],[20.5,-10.4],[20.5,-8.8],[20.5,-7.2],[20.5,-5.6],[20.5,-4.0],[20.5,-2.4],[20.5,-0.8],[20.5,0.8],[20.5,2.4],[20.5,4.0],[20.5,5.6],[20.5,7.2],[20.5,8.8],[20.5,10.4],[20.5,12.0],[20.5,13.6],[20.5,15.2],[20.5,16.8],[20.5,18.4],[20.5,20.0],[20.5,21.6],[20.5,23.2],[20.5,24.8],[20.5,26.4],[20.5,28.0],[20.5,29.6],[20.5,31.2],[20.5,32.8],[20.5,34.4],[20.5,36.0],[20.5,40.8],[20.5,42.4],[20.5,44.0],[20.5,45.6],[20.5,47.2],[20.5,48.8],[20.5,50.4],[20.5,52.0],[20.5,53.6],[20.5,55.2],[20.5,56.8],[20.5,58.4],[20.5,74.4],[20.5,76.0],[20.5,77.6],[20.5,79.2],[20.5,80.8],[20.5,82.4],[20.5,84.0],[20.5,85.6],[20.5,93.6],[20.5,95.2],[20.5,96.8],[20.5,98.4],[20.5,100.0],[20.5,101.6],[20.5,103.2],[20.5,104.8],[20.5,106.4],[22.0,-104.13],[22.0,-102.51],[22.0,-100.9],[22.0,-99.28],[22.0,-79.91],[22.0,-78.3],[22.0,-15.34],[22.0,-13.72],[22.0,-12.11],[22.0,-10.49],[22.0,-8.88],[22.0,-7.26],[22.0,-5.65],[22.0,-4.04],[22.0,-2.42],[22.0,-0.81],[22.0,0.81],[22.0,2.42],[22.0,4.04],[22.0,5.65],[22.0,7.26],[22.0,8.88],[22.0,10.49],[22.0,12.11],[22.0,13.72],[22.0,15.34],[22.0,16.95],[22.0,18.57],[22.0,20.18],[22.0,21.79],[22.0,23.41],[22.0,25.02],[22.0,26.64],[22.0,28.25],[22.0,29.87],[22.0,31.48],[22.0,33.09],[22.0,34.71],[22.0,36.32],[22.0,39.55],[22.0,41.17],[22.0,42.78],[22.0,44.39],[22.0,46.01],[22.0,47.62],[22.0,49.24],[22.0,50.85],[22.0,52.47],[22.0,54.08],[22.0,55.7],[22.0,57.31],[22.0,58.92],[22.0,70.22],[22.0,71.84],[22.0,73.45],[22.0,75.07],[22.0,76.68],[22.0,78.3],[22.0,79.91],[22.0,81.52],[22.0,83.14],[22.0,84.75],[22.0,86.37],[22.0,87.98],[22.0,89.6],[22.0,92.83],[22.0,94.44],[22.0,96.05],[22.0,97.67],[22.0,99.28],[22.0,100.9],[22.0,102.51],[22.0,104.13],[22.0,105.74],[22.0,107.35],[22.0,108.97],[22.0,110.58],[22.0,112.2],[23.5,-109.64],[23.5,-106.36],[23.5,-104.73],[23.5,-103.09],[23.5,-101.45],[23.5,-99.82],[23.5,-98.18],[23.5,-14.73],[23.5,-13.09],[23.5,-11.45],[23.5,-9.82],[23.5,-8.18],[23.5,-6.55],[23.5,-4.91],[23.5,-3.27],[23.5,-1.64],[23.5,0.0],[23.5,1.64],[23.5,3.27],[23.5,4.91],[23.5,6.55],[23.5,8.18],[23.5,9.82],[23.5,11.45],[23.5,13.09],[23.5,14.73],[23.5,16.36],[23.5,18.0],[23.5,19.64],[23.5,21.27],[23.5,22.91],[23.5,24.55],[23.5,26.18],[23.5,27.82],[23.5,29.45],[23.5,31.09],[23.5,32.73],[23.5,34.36],[23.5,39.27],[23.5,40.91],[23.5,42.55],[23.5,44.18],[23.5,45.82],[23.5,47.45],[23.5,49.09],[23.5,50.73],[23.5,52.36],[23.5,54.0],[23.5,55.64],[23.5,57.27],[23.5,68.73],[23.5,70.36],[23.5,72.0],[23.5,73.64],[23.5,75.27],[23.5,76.91],[23.5,78.55],[23.5,80.18],[23.5,81.82],[23.5,83.45],[23.5,85.09],[23.5,86.73],[23.5,88.36],[23.5,90.0],[23.5,91.64],[23.5,93.27],[23.5,94.91],[23.5,96.55],[23.5,98.18],[23.5,99.82],[23.5,101.45],[23.5,103.09],[23.5,104.73],[23.5,106.36],[23.5,108.0],[23.5,109.64],[23.5,111.27],[23.5,112.91],[23.5,114.55],[23.5,116.18],[23.5,121.09],[25.0,-110.64],[25.0,-107.34],[25.0,-105.69],[25.0,-104.04],[25.0,-102.39],[25.0,-100.73],[25.0,-99.08],[25.0,-13.21],[25.0,-11.56],[25.0,-9.91],[25.0,-8.26],[25.0,-6.61],[25.0,-4.95],[25.0,-3.3],[25.0,-1.65],[25.0,0.0],[25.0,1.65],[25.0,3.3],[25.0,4.95],[25.0,6.61],[25.0,8.26],[25.0,9.91],[25.0,11.56],[25.0,13.21],[25.0,14.86],[25.0,16.51],[25.0,18.17],[25.0,19.82],[25.0,21.47],[25.0,23.12],[25.0,24.77],[25.0,26.42],[25.0,28.07],[25.0,29.72],[25.0,31.38],[25.0,33.03],[25.0,34.68],[25.0,37.98],[25.0,39.63],[25.0,41.28],[25.0,42.94],[25.0,44.59],[25.0,46.24],[25.0,47.89],[25.0,49.54],[25.0,51.19],[25.0,56.15],[25.0,67.71],[25.0,69.36],[25.0,71.01],[25.0,72.66],[25.0,74.31],[25.0,75.96],[25.0,77.61],[25.0,79.27],[25.0,80.92],[25.0,82.57],[25.0,84.22],[25.0,85.87],[25.0,87.52],[25.0,89.17],[25.0,90.83],[25.0,92.48],[25.0,94.13],[25.0,95.78],[25.0,97.43],[25.0,99.08],[25.0,100.73],[25.0,102.39],[25.0,104.04],[25.0,105.69],[25.0,107.34],[25.0,108.99],[25.0,110.64],[25.0,112.29],[25.0,113.94],[25.0,115.6],[25.0,117.25],[25.0,118.9],[26.5,-108.0],[26.5,-106.33],[26.5,-104.65],[26.5,-102.98],[26.5,-101.3],[26.5,-99.63],[26.5,-97.95],[26.5,-81.21],[26.5,-12.56],[26.5,-10.88],[26.5,-9.21],[26.5,-7.53],[26.5,-5.86],[26.5,-4.19],[26.5,-2.51],[26.5,-0.84],[26.5,0.84],[26.5,2.51],[26.5,4.19],[26.5,5.86],[26.5,7.53],[26.5,9.21],[26.5,10.88],[26.5,12.56],[26.5,14.23],[26.5,15.91],[26.5,17.58],[26.5,19.26],[26.5,20.93],[26.5,22.6],[26.5,24.28],[26.5,25.95],[26.5,27.63],[26.5,29.3],[26.5,30.98],[26.5,32.65],[26.5,37.67],[26.5,39.35],[26.5,41.02],[26.5,42.7],[26.5,44.37],[26.5,46.05],[26.5,47.72],[26.5,49.4],[26.5,57.77],[26.5,59.44],[26.5,61.12],[26.5,62.79],[26.5,64.47],[26.5,66.14],[26.5,67.81],[26.5,69.49],[26.5,71.16],[26.5,72.84],[26.5,74.51],[26.5,76.19],[26.5,77.86],[26.5,79.53],[26.5,81.21],[26.5,82.88],[26.5,84.56],[26.5,86.23],[26.5,87.91],[26.5,89.58],[26.5,91.26],[26.5,92.93],[26.5,94.6],[26.5,96.28],[26.5,97.95],[26.5,99.63],[26.5,101.3],[26.5,102.98],[26.5,104.65],[26.5,106.33],[26.5,108.0],[26.5,109.67],[26.5,111.35],[26.5,113.02],[26.5,114.7],[26.5,116.37],[26.5,118.05],[26.5,119.72],[28.0,-113.77],[28.0,-110.38],[28.0,-108.68],[28.0,-106.98],[28.0,-105.28],[28.0,-103.58],[28.0,-101.89],[28.0,-100.19],[28.0,-98.49],[28.0,-81.51],[28.0,-11.89],[28.0,-10.19],[28.0,-8.49],[28.0,-6.79],[28.0,-5.09],[28.0,-3.4],[28.0,-1.7],[28.0,0.0],[28.0,1.7],[28.0,3.4],[28.0,5.09],[28.0,6.79],[28.0,8.49],[28.0,10.19],[28.0,11.89],[28.0,13.58],[28.0,15.28],[28.0,16.98],[28.0,18.68],[28.0,20.38],[28.0,22.08],[28.0,23.77],[28.0,25.47],[28.0,27.17],[28.0,28.87],[28.0,30.57],[28.0,32.26],[28.0,33.96],[28.0,35.66],[28.0,37.36],[28.0,39.06],[28.0,40.75],[28.0,42.45],[28.0,44.15],[28.0,45.85],[28.0,47.55],[28.0,52.64],[28.0,54.34],[28.0,56.04],[28.0,57.74],[28.0,59.43],[28.0,61.13],[28.0,62.83],[28.0,64.53],[28.0,66.23],[28.0,67.92],[28.0,69.62],[28.0,71.32],[28.0,73.02],[28.0,74.72],[28.0,76.42],[28.0,78.11],[28.0,79.81],[28.0,81.51],[28.0,83.21],[28.0,84.91],[28.0,86.6],[28.0,88.3],[28.0,90.0],[28.0,91.7],[28.0,93.4],[28.0,95.09],[28.0,96.79],[28.0,98.49],[28.0,100.19],[28.0,101.89],[28.0,103.58],[28.0,105.28],[28.0,106.98],[28.0,108.68],[28.0,110.38],[28.0,112.08],[28.0,113.77],[28.0,115.47],[28.0,117.17],[28.0,118.87],[28.0,120.57],[29.5,-114.55],[29.5,-111.1],[29.5,-109.38],[29.5,-107.66],[29.5,-105.93],[29.5,-104.21],[29.5,-102.49],[29.5,-100.77],[29.5,-99.04],[29.5,-97.32],[29.5,-95.6],[29.5,-90.43],[29.5,-81.82],[29.5,-9.47],[29.5,-7.75],[29.5,-6.03],[29.5,-4.31],[29.5,-2.58],[29.5,-0.86],[29.5,0.86],[29.5,2.58],[29.5,4.31],[29.5,6.03],[29.5,7.75],[29.5,9.47],[29.5,11.2],[29.5,12.92],[29.5,14.64],[29.5,16.36],[29.5,18.09],[29.5,19.81],[29.5,21.53],[29.5,23.25],[29.5,24.98],[29.5,26.7],[29.5,28.42],[29.5,30.14],[29.5,31.87],[29.5,33.59],[29.5,35.31],[29.5,37.03],[29.5,38.76],[29.5,40.48],[29.5,42.2],[29.5,43.92],[29.5,45.65],[29.5,47.37],[29.5,50.81],[29.5,52.54],[29.5,54.26],[29.5,55.98],[29.5,57.7],[29.5,59.43],[29.5,61.15],[29.5,62.87],[29.5,64.59],[29.5,66.32],[29.5,68.04],[29.5,69.76],[29.5,71.48],[29.5,73.21],[29.5,74.93],[29.5,76.65],[29.5,78.37],[29.5,80.1],[29.5,81.82],[29.5,83.54],[29.5,85.26],[29.5,86.99],[29.5,88.71],[29.5,90.43],[29.5,92.15],[29.5,93.88],[29.5,95.6],[29.5,97.32],[29.5,99.04],[29.5,100.77],[29.5,102.49],[29.5,104.21],[29.5,105.93],[29.5,107.66],[29.5,109.38],[29.5,111.1],[29.5,112.82],[29.5,114.55],[29.5,116.27],[29.5,117.99],[29.5,119.71],[29.5,121.44],[31.0,-115.34],[31.0,-111.84],[31.0,-110.1],[31.0,-108.35],[31.0,-106.6],[31.0,-104.85],[31.0,-103.11],[31.0,-101.36],[31.0,-99.61],[31.0,-97.86],[31.0,-96.12],[31.0,-94.37],[31.0,-92.62],[31.0,-90.87],[31.0,-89.13],[31.0,-87.38],[31.0,-85.63],[31.0,-83.88],[31.0,-82.14],[31.0,-8.74],[31.0,-6.99],[31.0,-5.24],[31.0,-3.5],[31.0,-1.75],[31.0,0.0],[31.0,1.75],[31.0,3.5],[31.0,5.24],[31.0,6.99],[31.0,8.74],[31.0,10.49],[31.0,12.23],[31.0,13.98],[31.0,15.73],[31.0,17.48],[31.0,20.97],[31.0,22.72],[31.0,24.47],[31.0,26.21],[31.0,27.96],[31.0,29.71],[31.0,31.46],[31.0,33.2],[31.0,34.95],[31.0,36.7],[31.0,38.45],[31.0,40.19],[31.0,41.94],[31.0,43.69],[31.0,45.44],[31.0,47.18],[31.0,48.93],[31.0,50.68],[31.0,52.43],[31.0,54.17],[31.0,55.92],[31.0,57.67],[31.0,59.42],[31.0,61.17],[31.0,62.91],[31.0,64.66],[31.0,66.41],[31.0,68.16],[31.0,69.9],[31.0,71.65],[31.0,73.4],[31.0,75.15],[31.0,76.89],[31.0,78.64],[31.0,80.39],[31.0,82.14],[31.0,83.88],[31.0,85.63],[31.0,87.38],[31.0,89.13],[31.0,90.87],[31.0,92.62],[31.0,94.37],[31.0,96.12],[31.0,97.86],[31.0,99.61],[31.0,101.36],[31.0,103.11],[31.0,104.85],[31.0,106.6],[31.0,108.35],[31.0,110.1],[31.0,111.84],[31.0,113.59],[31.0,115.34],[31.0,117.09],[31.0,118.83],[31.0,120.58],[32.5,-115.84],[32.5,-114.06],[32.5,-112.28],[32.5,-110.5],[32.5,-108.71],[32.5,-106.93],[32.5,-105.15],[32.5,-103.37],[32.5,-101.58],[32.5,-99.8],[32.5,-98.02],[32.5,-96.24],[32.5,-94.46],[32.5,-92.67],[32.5,-90.89],[32.5,-89.11],[32.5,-87.33],[32.5,-85.54],[32.5,-83.76],[32.5,-81.98],[32.5,-8.91],[32.5,-7.13],[32.5,-5.35],[32.5,-3.56],[32.5,-1.78],[32.5,0.0],[32.5,1.78],[32.5,3.56],[32.5,5.35],[32.5,7.13],[32.5,8.91],[32.5,10.69],[32.5,12.48],[32.5,14.26],[32.5,21.39],[32.5,35.64],[32.5,37.43],[32.5,39.21],[32.5,40.99],[32.5,42.77],[32.5,44.55],[32.5,46.34],[32.5,48.12],[32.5,49.9],[32.5,51.68],[32.5,53.47],[32.5,55.25],[32.5,57.03],[32.5,58.81],[32.5,60.59],[32.5,62.38],[32.5,64.16],[32.5,65.94],[32.5,67.72],[32.5,69.5],[32.5,71.29],[32.5,73.07],[32.5,74.85],[32.5,76.63],[32.5,78.42],[32.5,80.2],[32.5,81.98],[32.5,83.76],[32.5,85.54],[32.5,87.33],[32.5,89.11],[32.5,90.89],[32.5,92.67],[32.5,94.46],[32.5,96.24],[32.5,98.02],[32.5,99.8],[32.5,101.58],[32.5,103.37],[32.5,105.15],[32.5,106.93],[32.5,108.71],[32.5,110.5],[32.5,112.28],[32.5,114.06],[32.5,115.84],[32.5,117.62],[32.5,119.41],[32.5,130.1],[34.0,-118.49],[34.0,-116.68],[34.0,-114.87],[34.0,-113.07],[34.0,-111.26],[34.0,-109.45],[34.0,-107.64],[34.0,-105.83],[34.0,-104.02],[34.0,-102.21],[34.0,-100.4],[34.0,-98.59],[34.0,-96.78],[34.0,-94.97],[34.0,-93.17],[34.0,-91.36],[34.0,-89.55],[34.0,-87.74],[34.0,-85.93],[34.0,-84.12],[34.0,-82.31],[34.0,-80.5],[34.0,-78.69],[34.0,-6.33],[34.0,-4.52],[34.0,-2.71],[34.0,-0.9],[34.0,0.9],[34.0,2.71],[34.0,4.52],[34.0,6.33],[34.0,8.14],[34.0,9.95],[34.0,37.09],[34.0,38.89],[34.0,40.7],[34.0,42.51],[34.0,44.32],[34.0,46.13],[34.0,47.94],[34.0,49.75],[34.0,51.56],[34.0,53.37],[34.0,55.18],[34.0,56.98],[34.0,58.79],[34.0,60.6],[34.0,62.41],[34.0,64.22],[34.0,66.03],[34.0,67.84],[34.0,69.65],[34.0,71.46],[34.0,73.27],[34.0,75.08],[34.0,76.88],[34.0,78.69],[34.0,80.5],[34.0,82.31],[34.0,84.12],[34.0,85.93],[34.0,87.74],[34.0,89.55],[34.0,91.36],[34.0,93.17],[34.0,94.97],[34.0,96.78],[34.0,98.59],[34.0,100.4],[34.0,102.21],[34.0,104.02],[34.0,105.83],[34.0,107.64],[34.0,109.45],[34.0,111.26],[34.0,113.07],[34.0,114.87],[34.0,116.68],[34.0,118.49],[34.0,120.3],[34.0,131.16],[34.0,132.96],[35.5,-120.92],[35.5,-119.08],[35.5,-117.23],[35.5,-115.38],[35.5,-113.54],[35.5,-111.69],[35.5,-109.85],[35.5,-108.0],[35.5,-106.15],[35.5,-104.31],[35.5,-102.46],[35.5,-100.62],[35.5,-98.77],[35.5,-96.92],[35.5,-95.08],[35.5,-93.23],[35.5,-91.38],[35.5,-89.54],[35.5,-87.69],[35.5,-85.85],[35.5,-84.0],[35.5,-82.15],[35.5,-80.31],[35.5,-78.46],[35.5,-0.92],[35.5,0.92],[35.5,2.77],[35.5,4.62],[35.5,6.46],[35.5,8.31],[35.5,10.15],[35.5,34.15],[35.5,36.0],[35.5,37.85],[35.5,39.69],[35.5,41.54],[35.5,43.38],[35.5,45.23],[35.5,47.08],[35.5,48.92],[35.5,50.77],[35.5,52.62],[35.5,54.46],[35.5,56.31],[35.5,58.15],[35.5,60.0],[35.5,61.85],[35.5,63.69],[35.5,65.54],[35.5,67.38],[35.5,69.23],[35.5,71.08],[35.5,72.92],[35.5,74.77],[35.5,76.62],[35.5,78.46],[35.5,80.31],[35.5,82.15],[35.5,84.0],[35.5,85.85],[35.5,87.69],[35.5,89.54],[35.5,91.38],[35.5,93.23],[35.5,95.08],[35.5,96.92],[35.5,98.77],[35.5,100.62],[35.5,102.46],[35.5,104.31],[35.5,106.15],[35.5,108.0],[35.5,109.85],[35.5,111.69],[35.5,113.54],[35.5,115.38],[35.5,117.23],[35.5,119.08],[35.5,128.31],[35.5,135.69],[35.5,137.54],[35.5,139.38],[37.0,-121.88],[37.0,-120.0],[37.0,-118.12],[37.0,-116.25],[37.0,-114.38],[37.0,-112.5],[37.0,-110.62],[37.0,-108.75],[37.0,-106.88],[37.0,-105.0],[37.0,-103.12],[37.0,-101.25],[37.0,-99.38],[37.0,-97.5],[37.0,-95.62],[37.0,-93.75],[37.0,-91.88],[37.0,-90.0],[37.0,-88.12],[37.0,-86.25],[37.0,-84.38],[37.0,-82.5],[37.0,-80.62],[37.0,-78.75],[37.0,-76.88],[37.0,-5.62],[37.0,-3.75],[37.0,7.5],[37.0,9.38],[37.0,15.0],[37.0,22.5],[37.0,30.0],[37.0,31.88],[37.0,33.75],[37.0,35.62],[37.0,37.5],[37.0,39.38],[37.0,41.25],[37.0,43.12],[37.0,45.0],[37.0,46.88],[37.0,48.75],[37.0,54.38],[37.0,56.25],[37.0,58.12],[37.0,60.0],[37.0,61.88],[37.0,63.75],[37.0,65.62],[37.0,67.5],[37.0,69.38],[37.0,71.25],[37.0,73.12],[37.0,75.0],[37.0,76.88],[37.0,78.75],[37.0,80.62],[37.0,82.5],[37.0,84.38],[37.0,86.25],[37.0,88.12],[37.0,90.0],[37.0,91.88],[37.0,93.75],[37.0,95.62],[37.0,97.5],[37.0,99.38],[37.0,101.25],[37.0,103.12],[37.0,105.0],[37.0,106.88],[37.0,108.75],[37.0,110.62],[37.0,112.5],[37.0,114.38],[37.0,116.25],[37.0,118.12],[37.0,120.0],[37.0,121.88],[37.0,127.5],[37.0,129.38],[37.0,136.88],[37.0,138.75],[37.0,140.62],[38.5,-122.55],[38.5,-120.64],[38.5,-118.72],[38.5,-116.81],[38.5,-114.89],[38.5,-112.98],[38.5,-111.06],[38.5,-109.15],[38.5,-107.23],[38.5,-105.32],[38.5,-103.4],[38.5,-101.49],[38.5,-99.57],[38.5,-97.66],[38.5,-95.74],[38.5,-93.83],[38.5,-91.91],[38.5,-90.0],[38.5,-88.09],[38.5,-86.17],[38.5,-84.26],[38.5,-82.34],[38.5,-80.43],[38.5,-78.51],[38.5,-76.6],[38.5,-7.66],[38.5,-5.74],[38.5,-3.83],[38.5,-1.91],[38.5,21.06],[38.5,22.98],[38.5,28.72],[38.5,30.64],[38.5,32.55],[38.5,34.47],[38.5,36.38],[38.5,38.3],[38.5,40.21],[38.5,42.13],[38.5,44.04],[38.5,45.96],[38.5,47.87],[38.5,55.53],[38.5,57.45],[38.5,59.36],[38.5,61.28],[38.5,63.19],[38.5,65.11],[38.5,67.02],[38.5,68.94],[38.5,70.85],[38.5,72.77],[38.5,74.68],[38.5,76.6],[38.5,78.51],[38.5,80.43],[38.5,82.34],[38.5,84.26],[38.5,86.17],[38.5,88.09],[38.5,90.0],[38.5,91.91],[38.5,93.83],[38.5,95.74],[38.5,97.66],[38.5,99.57],[38.5,101.49],[38.5,103.4],[38.5,105.32],[38.5,107.23],[38.5,109.15],[38.5,111.06],[38.5,112.98],[38.5,114.89],[38.5,116.81],[38.5,126.38],[38.5,128.3],[38.5,139.79],[40.0,-123.26],[40.0,-121.3],[40.0,-119.35],[40.0,-117.39],[40.0,-115.43],[40.0,-113.48],[40.0,-111.52],[40.0,-109.57],[40.0,-107.61],[40.0,-105.65],[40.0,-103.7],[40.0,-101.74],[40.0,-99.78],[40.0,-97.83],[40.0,-95.87],[40.0,-93.91],[40.0,-91.96],[40.0,-90.0],[40.0,-88.04],[40.0,-86.09],[40.0,-84.13],[40.0,-82.17],[40.0,-80.22],[40.0,-78.26],[40.0,-76.3],[40.0,-74.35],[40.0,-7.83],[40.0,-5.87],[40.0,-3.91],[40.0,-1.96],[40.0,0.0],[40.0,3.91],[40.0,21.52],[40.0,23.48],[40.0,25.43],[40.0,27.39],[40.0,29.35],[40.0,31.3],[40.0,33.26],[40.0,35.22],[40.0,37.17],[40.0,39.13],[40.0,41.09],[40.0,43.04],[40.0,45.0],[40.0,46.96],[40.0,48.91],[40.0,54.78],[40.0,56.74],[40.0,58.7],[40.0,60.65],[40.0,62.61],[40.0,64.57],[40.0,66.52],[40.0,68.48],[40.0,70.43],[40.0,72.39],[40.0,74.35],[40.0,76.3],[40.0,78.26],[40.0,80.22],[40.0,82.17],[40.0,84.13],[40.0,86.09],[40.0,88.04],[40.0,90.0],[40.0,91.96],[40.0,93.91],[40.0,95.87],[40.0,97.83],[40.0,99.78],[40.0,101.74],[40.0,103.7],[40.0,105.65],[40.0,107.61],[40.0,109.57],[40.0,111.52],[40.0,113.48],[40.0,115.43],[40.0,117.39],[40.0,119.35],[40.0,123.26],[40.0,125.22],[40.0,127.17],[40.0,140.87],[41.5,-124.0],[41.5,-122.0],[41.5,-120.0],[41.5,-118.0],[41.5,-116.0],[41.5,-114.0],[41.5,-112.0],[41.5,-110.0],[41.5,-108.0],[41.5,-106.0],[41.5,-104.0],[41.5,-102.0],[41.5,-100.0],[41.5,-98.0],[41.5,-96.0],[41.5,-94.0],[41.5,-92.0],[41.5,-90.0],[41.5,-88.0],[41.5,-86.0],[41.5,-84.0],[41.5,-82.0],[41.5,-80.0],[41.5,-78.0],[41.5,-76.0],[41.5,-74.0],[41.5,-72.0],[41.5,-8.0],[41.5,-6.0],[41.5,-4.0],[41.5,-2.0],[41.5,0.0],[41.5,2.0],[41.5,14.0],[41.5,20.0],[41.5,22.0],[41.5,24.0],[41.5,26.0],[41.5,28.0],[41.5,32.0],[41.5,34.0],[41.5,36.0],[41.5,42.0],[41.5,44.0],[41.5,46.0],[41.5,48.0],[41.5,56.0],[41.5,58.0],[41.5,60.0],[41.5,62.0],[41.5,64.0],[41.5,66.0],[41.5,68.0],[41.5,70.0],[41.5,72.0],[41.5,74.0],[41.5,76.0],[41.5,78.0],[41.5,80.0],[41.5,82.0],[41.5,84.0],[41.5,86.0],[41.5,88.0],[41.5,90.0],[41.5,92.0],[41.5,94.0],[41.5,96.0],[41.5,98.0],[41.5,100.0],[41.5,102.0],[41.5,104.0],[41.5,106.0],[41.5,108.0],[41.5,110.0],[41.5,112.0],[41.5,114.0],[41.5,116.0],[41.5,118.0],[41.5,120.0],[41.5,122.0],[41.5,124.0],[41.5,126.0],[41.5,128.0],[43.0,-122.73],[43.0,-120.68],[43.0,-118.64],[43.0,-116.59],[43.0,-114.55],[43.0,-112.5],[43.0,-110.45],[43.0,-108.41],[43.0,-106.36],[43.0,-104.32],[43.0,-102.27],[43.0,-100.23],[43.0,-98.18],[43.0,-96.14],[43.0,-94.09],[43.0,-92.05],[43.0,-90.0],[43.0,-87.95],[43.0,-85.91],[43.0,-83.86],[43.0,-81.82],[43.0,-79.77],[43.0,-77.73],[43.0,-75.68],[43.0,-73.64],[43.0,-71.59],[43.0,-8.18],[43.0,-6.14],[43.0,-4.09],[43.0,-2.05],[43.0,0.0],[43.0,2.05],[43.0,12.27],[43.0,18.41],[43.0,20.45],[43.0,22.5],[43.0,24.55],[43.0,26.59],[43.0,42.95],[43.0,45.0],[43.0,47.05],[43.0,53.18],[43.0,55.23],[43.0,57.27],[43.0,59.32],[43.0,61.36],[43.0,63.41],[43.0,65.45],[43.0,67.5],[43.0,69.55],[43.0,71.59],[43.0,73.64],[43.0,75.68],[43.0,77.73],[43.0,79.77],[43.0,81.82],[43.0,83.86],[43.0,85.91],[43.0,87.95],[43.0,90.0],[43.0,92.05],[43.0,94.09],[43.0,96.14],[43.0,98.18],[43.0,100.23],[43.0,102.27],[43.0,104.32],[43.0,106.36],[43.0,108.41],[43.0,110.45],[43.0,112.5],[43.0,114.55],[43.0,116.59],[43.0,118.64],[43.0,120.68],[43.0,122.73],[43.0,124.77],[43.0,126.82],[43.0,128.86],[43.0,130.91],[43.0,132.95],[43.0,141.14],[43.0,143.18],[44.5,-123.16],[44.5,-121.05],[44.5,-118.95],[44.5,-116.84],[44.5,-114.74],[44.5,-112.63],[44.5,-110.53],[44.5,-108.42],[44.5,-106.32],[44.5,-104.21],[44.5,-102.11],[44.5,-100.0],[44.5,-97.89],[44.5,-95.79],[44.5,-93.68],[44.5,-91.58],[44.5,-89.47],[44.5,-87.37],[44.5,-85.26],[44.5,-83.16],[44.5,-81.05],[44.5,-78.95],[44.5,-76.84],[44.5,-74.74],[44.5,-72.63],[44.5,-70.53],[44.5,-68.42],[44.5,-1.05],[44.5,1.05],[44.5,3.16],[44.5,5.26],[44.5,7.37],[44.5,9.47],[44.5,11.58],[44.5,15.79],[44.5,17.89],[44.5,20.0],[44.5,22.11],[44.5,24.21],[44.5,26.32],[44.5,28.42],[44.5,38.95],[44.5,41.05],[44.5,43.16],[44.5,45.26],[44.5,51.58],[44.5,53.68],[44.5,55.79],[44.5,57.89],[44.5,60.0],[44.5,62.11],[44.5,64.21],[44.5,66.32],[44.5,68.42],[44.5,70.53],[44.5,72.63],[44.5,74.74],[44.5,76.84],[44.5,78.95],[44.5,81.05],[44.5,83.16],[44.5,85.26],[44.5,87.37],[44.5,89.47],[44.5,91.58],[44.5,93.68],[44.5,95.79],[44.5,97.89],[44.5,100.0],[44.5,102.11],[44.5,104.21],[44.5,106.32],[44.5,108.42],[44.5,110.53],[44.5,112.63],[44.5,114.74],[44.5,116.84],[44.5,118.95],[44.5,121.05],[44.5,123.16],[44.5,125.26],[44.5,127.37],[44.5,129.47],[44.5,131.58],[44.5,133.68],[44.5,135.79],[44.5,142.11],[46.0,-123.95],[46.0,-121.8],[46.0,-119.64],[46.0,-117.49],[46.0,-115.33],[46.0,-113.17],[46.0,-111.02],[46.0,-108.86],[46.0,-106.71],[46.0,-104.55],[46.0,-102.4],[46.0,-100.24],[46.0,-98.08],[46.0,-95.93],[46.0,-93.77],[46.0,-91.62],[46.0,-89.46],[46.0,-87.31],[46.0,-85.15],[46.0,-82.99],[46.0,-80.84],[46.0,-78.68],[46.0,-76.53],[46.0,-74.37],[46.0,-72.22],[46.0,-70.06],[46.0,-67.9],[46.0,-65.75],[46.0,-61.44],[46.0,-1.08],[46.0,1.08],[46.0,3.23],[46.0,5.39],[46.0,7.54],[46.0,9.7],[46.0,11.86],[46.0,14.01],[46.0,16.17],[46.0,18.32],[46.0,20.48],[46.0,22.63],[46.0,24.79],[46.0,26.95],[46.0,29.1],[46.0,39.88],[46.0,42.04],[46.0,44.19],[46.0,46.35],[46.0,48.5],[46.0,54.97],[46.0,57.13],[46.0,59.28],[46.0,61.44],[46.0,63.59],[46.0,65.75],[46.0,67.9],[46.0,70.06],[46.0,72.22],[46.0,74.37],[46.0,76.53],[46.0,78.68],[46.0,80.84],[46.0,82.99],[46.0,85.15],[46.0,87.31],[46.0,89.46],[46.0,91.62],[46.0,93.77],[46.0,95.93],[46.0,98.08],[46.0,100.24],[46.0,102.4],[46.0,104.55],[46.0,106.71],[46.0,108.86],[46.0,111.02],[46.0,113.17],[46.0,115.33],[46.0,117.49],[46.0,119.64],[46.0,121.8],[46.0,123.95],[46.0,126.11],[46.0,128.26],[46.0,130.42],[46.0,132.57],[46.0,134.73],[46.0,136.89],[47.5,-122.22],[47.5,-120.0],[47.5,-117.78],[47.5,-115.56],[47.5,-113.33],[47.5,-111.11],[47.5,-108.89],[47.5,-106.67],[47.5,-104.44],[47.5,-102.22],[47.5,-100.0],[47.5,-97.78],[47.5,-95.56],[47.5,-93.33],[47.5,-91.11],[47.5,-88.89],[47.5,-86.67],[47.5,-84.44],[47.5,-82.22],[47.5,-80.0],[47.5,-77.78],[47.5,-75.56],[47.5,-73.33],[47.5,-71.11],[47.5,-68.89],[47.5,-66.67],[47.5,-55.56],[47.5,-53.33],[47.5,-2.22],[47.5,0.0],[47.5,2.22],[47.5,4.44],[47.5,6.67],[47.5,8.89],[47.5,11.11],[47.5,13.33],[47.5,15.56],[47.5,17.78],[47.5,20.0],[47.5,22.22],[47.5,24.44],[47.5,26.67],[47.5,28.89],[47.5,31.11],[47.5,33.33],[47.5,35.56],[47.5,37.78],[47.5,40.0],[47.5,42.22],[47.5,44.44],[47.5,46.67],[47.5,48.89],[47.5,51.11],[47.5,53.33],[47.5,55.56],[47.5,57.78],[47.5,60.0],[47.5,62.22],[47.5,64.44],[47.5,66.67],[47.5,68.89],[47.5,71.11],[47.5,73.33],[47.5,75.56],[47.5,77.78],[47.5,80.0],[47.5,82.22],[47.5,84.44],[47.5,86.67],[47.5,88.89],[47.5,91.11],[47.5,93.33],[47.5,95.56],[47.5,97.78],[47.5,100.0],[47.5,102.22],[47.5,104.44],[47.5,106.67],[47.5,108.89],[47.5,111.11],[47.5,113.33],[47.5,115.56],[47.5,117.78],[47.5,120.0],[47.5,122.22],[47.5,124.44],[47.5,126.67],[47.5,128.89],[47.5,131.11],[47.5,133.33],[47.5,135.56],[47.5,137.78],[47.5,142.22],[49.0,-122.68],[49.0,-120.38],[49.0,-118.09],[49.0,-115.8],[49.0,-113.5],[49.0,-111.21],[49.0,-108.92],[49.0,-106.62],[49.0,-104.33],[49.0,-102.04],[49.0,-99.75],[49.0,-97.45],[49.0,-95.16],[49.0,-92.87],[49.0,-90.57],[49.0,-88.28],[49.0,-85.99],[49.0,-83.69],[49.0,-81.4],[49.0,-79.11],[49.0,-76.82],[49.0,-74.52],[49.0,-72.23],[49.0,-69.94],[49.0,-65.35],[49.0,-58.47],[49.0,-56.18],[49.0,-53.89],[49.0,-1.15],[49.0,1.15],[49.0,3.44],[49.0,5.73],[49.0,8.03],[49.0,10.32],[49.0,12.61],[49.0,14.9],[49.0,17.2],[49.0,19.49],[49.0,21.78],[49.0,24.08],[49.0,26.37],[49.0,28.66],[49.0,30.96],[49.0,33.25],[49.0,35.54],[49.0,37.83],[49.0,40.13],[49.0,42.42],[49.0,44.71],[49.0,47.01],[49.0,49.3],[49.0,51.59],[49.0,53.89],[49.0,56.18],[49.0,58.47],[49.0,60.76],[49.0,63.06],[49.0,65.35],[49.0,67.64],[49.0,69.94],[49.0,72.23],[49.0,74.52],[49.0,76.82],[49.0,79.11],[49.0,81.4],[49.0,83.69],[49.0,85.99],[49.0,88.28],[49.0,90.57],[49.0,92.87],[49.0,95.16],[49.0,97.45],[49.0,99.75],[49.0,102.04],[49.0,104.33],[49.0,106.62],[49.0,108.92],[49.0,111.21],[49.0,113.5],[49.0,115.8],[49.0,118.09],[49.0,120.38],[49.0,122.68],[49.0,124.97],[49.0,127.26],[49.0,129.55],[49.0,131.85],[49.0,134.14],[49.0,136.43],[49.0,138.73],[50.5,-123.53],[50.5,-121.18],[50.5,-118.82],[50.5,-116.47],[50.5,-114.12],[50.5,-111.76],[50.5,-109.41],[50.5,-107.06],[50.5,-104.71],[50.5,-102.35],[50.5,-100.0],[50.5,-97.65],[50.5,-95.29],[50.5,-92.94],[50.5,-90.59],[50.5,-88.24],[50.5,-85.88],[50.5,-83.53],[50.5,-81.18],[50.5,-78.82],[50.5,-76.47],[50.5,-74.12],[50.5,-71.76],[50.5,-69.41],[50.5,-67.06],[50.5,-64.71],[50.5,-62.35],[50.5,-60.0],[50.5,-3.53],[50.5,3.53],[50.5,5.88],[50.5,8.24],[50.5,10.59],[50.5,12.94],[50.5,15.29],[50.5,17.65],[50.5,20.0],[50.5,22.35],[50.5,24.71],[50.5,27.06],[50.5,29.41],[50.5,31.76],[50.5,34.12],[50.5,36.47],[50.5,38.82],[50.5,41.18],[50.5,43.53],[50.5,45.88],[50.5,48.24],[50.5,50.59],[50.5,52.94],[50.5,55.29],[50.5,57.65],[50.5,60.0],[50.5,62.35],[50.5,64.71],[50.5,67.06],[50.5,69.41],[50.5,71.76],[50.5,74.12],[50.5,76.47],[50.5,78.82],[50.5,81.18],[50.5,83.53],[50.5,85.88],[50.5,88.24],[50.5,90.59],[50.5,92.94],[50.5,95.29],[50.5,97.65],[50.5,100.0],[50.5,102.35],[50.5,104.71],[50.5,107.06],[50.5,109.41],[50.5,111.76],[50.5,114.12],[50.5,116.47],[50.5,118.82],[50.5,121.18],[50.5,123.53],[50.5,125.88],[50.5,128.24],[50.5,130.59],[50.5,132.94],[50.5,135.29],[50.5,137.65],[50.5,140.0],[50.5,142.35],[52.0,-175.14],[52.0,-126.49],[52.0,-124.05],[52.0,-121.62],[52.0,-119.19],[52.0,-116.76],[52.0,-114.32],[52.0,-111.89],[52.0,-109.46],[52.0,-107.03],[52.0,-104.59],[52.0,-102.16],[52.0,-99.73],[52.0,-97.3],[52.0,-94.86],[52.0,-92.43],[52.0,-90.0],[52.0,-87.57],[52.0,-85.14],[52.0,-82.7],[52.0,-77.84],[52.0,-75.41],[52.0,-72.97],[52.0,-70.54],[52.0,-68.11],[52.0,-65.68],[52.0,-63.24],[52.0,-60.81],[52.0,-58.38],[52.0,-55.95],[52.0,-9.73],[52.0,-4.86],[52.0,-2.43],[52.0,0.0],[52.0,4.86],[52.0,7.3],[52.0,9.73],[52.0,12.16],[52.0,14.59],[52.0,17.03],[52.0,19.46],[52.0,21.89],[52.0,24.32],[52.0,26.76],[52.0,29.19],[52.0,31.62],[52.0,34.05],[52.0,36.49],[52.0,38.92],[52.0,41.35],[52.0,43.78],[52.0,46.22],[52.0,48.65],[52.0,51.08],[52.0,53.51],[52.0,55.95],[52.0,58.38],[52.0,60.81],[52.0,63.24],[52.0,65.68],[52.0,68.11],[52.0,70.54],[52.0,72.97],[52.0,75.41],[52.0,77.84],[52.0,80.27],[52.0,82.7],[52.0,85.14],[52.0,87.57],[52.0,90.0],[52.0,92.43],[52.0,94.86],[52.0,97.3],[52.0,99.73],[52.0,102.16],[52.0,104.59],[52.0,107.03],[52.0,109.46],[52.0,111.89],[52.0,114.32],[52.0,116.76],[52.0,119.19],[52.0,121.62],[52.0,124.05],[52.0,126.49],[52.0,128.92],[52.0,131.35],[52.0,133.78],[52.0,136.22],[52.0,138.65],[52.0,141.08],[52.0,158.11],[52.0,177.57],[53.5,-132.17],[53.5,-129.65],[53.5,-127.13],[53.5,-124.62],[53.5,-122.1],[53.5,-119.58],[53.5,-117.06],[53.5,-114.55],[53.5,-112.03],[53.5,-109.51],[53.5,-106.99],[53.5,-104.48],[53.5,-101.96],[53.5,-99.44],[53.5,-96.92],[53.5,-94.41],[53.5,-91.89],[53.5,-89.37],[53.5,-86.85],[53.5,-84.34],[53.5,-76.78],[53.5,-74.27],[53.5,-71.75],[53.5,-69.23],[53.5,-66.71],[53.5,-64.2],[53.5,-61.68],[53.5,-59.16],[53.5,-56.64],[53.5,-8.81],[53.5,-6.29],[53.5,-1.26],[53.5,8.81],[53.5,11.33],[53.5,13.85],[53.5,16.36],[53.5,18.88],[53.5,21.4],[53.5,23.92],[53.5,26.43],[53.5,28.95],[53.5,31.47],[53.5,33.99],[53.5,36.5],[53.5,39.02],[53.5,41.54],[53.5,44.06],[53.5,46.57],[53.5,49.09],[53.5,51.61],[53.5,54.13],[53.5,56.64],[53.5,59.16],[53.5,61.68],[53.5,64.2],[53.5,66.71],[53.5,69.23],[53.5,71.75],[53.5,74.27],[53.5,76.78],[53.5,79.3],[53.5,81.82],[53.5,84.34],[53.5,86.85],[53.5,89.37],[53.5,91.89],[53.5,94.41],[53.5,96.92],[53.5,99.44],[53.5,101.96],[53.5,104.48],[53.5,106.99],[53.5,109.51],[53.5,112.03],[53.5,114.55],[53.5,117.06],[53.5,119.58],[53.5,122.1],[53.5,124.62],[53.5,127.13],[53.5,129.65],[53.5,132.17],[53.5,134.69],[53.5,137.2],[53.5,139.72],[53.5,157.34],[53.5,159.86],[55.0,-133.04],[55.0,-130.43],[55.0,-127.83],[55.0,-125.22],[55.0,-122.61],[55.0,-120.0],[55.0,-117.39],[55.0,-114.78],[55.0,-112.17],[55.0,-109.57],[55.0,-106.96],[55.0,-104.35],[55.0,-101.74],[55.0,-99.13],[55.0,-96.52],[55.0,-93.91],[55.0,-91.3],[55.0,-88.7],[55.0,-86.09],[55.0,-83.48],[55.0,-78.26],[55.0,-75.65],[55.0,-73.04],[55.0,-70.43],[55.0,-67.83],[55.0,-65.22],[55.0,-62.61],[55.0,-60.0],[55.0,-7.83],[55.0,-2.61],[55.0,23.48],[55.0,26.09],[55.0,28.7],[55.0,31.3],[55.0,33.91],[55.0,36.52],[55.0,39.13],[55.0,41.74],[55.0,44.35],[55.0,46.96],[55.0,49.57],[55.0,52.17],[55.0,54.78],[55.0,57.39],[55.0,60.0],[55.0,62.61],[55.0,65.22],[55.0,67.83],[55.0,70.43],[55.0,73.04],[55.0,75.65],[55.0,78.26],[55.0,80.87],[55.0,83.48],[55.0,86.09],[55.0,88.7],[55.0,91.3],[55.0,93.91],[55.0,96.52],[55.0,99.13],[55.0,101.74],[55.0,104.35],[55.0,106.96],[55.0,109.57],[55.0,112.17],[55.0,114.78],[55.0,117.39],[55.0,120.0],[55.0,122.61],[55.0,125.22],[55.0,127.83],[55.0,130.43],[55.0,133.04],[55.0,156.52],[55.0,159.13],[55.0,161.74],[56.5,-158.18],[56.5,-133.64],[56.5,-130.91],[56.5,-128.18],[56.5,-125.45],[56.5,-122.73],[56.5,-120.0],[56.5,-117.27],[56.5,-114.55],[56.5,-111.82],[56.5,-109.09],[56.5,-106.36],[56.5,-103.64],[56.5,-100.91],[56.5,-98.18],[56.5,-95.45],[56.5,-92.73],[56.5,-90.0],[56.5,-76.36],[56.5,-73.64],[56.5,-70.91],[56.5,-68.18],[56.5,-65.45],[56.5,-62.73],[56.5,-2.73],[56.5,8.18],[56.5,13.64],[56.5,21.82],[56.5,24.55],[56.5,27.27],[56.5,30.0],[56.5,32.73],[56.5,35.45],[56.5,38.18],[56.5,40.91],[56.5,43.64],[56.5,46.36],[56.5,49.09],[56.5,51.82],[56.5,54.55],[56.5,57.27],[56.5,60.0],[56.5,62.73],[56.5,65.45],[56.5,68.18],[56.5,70.91],[56.5,73.64],[56.5,76.36],[56.5,79.09],[56.5,81.82],[56.5,84.55],[56.5,87.27],[56.5,90.0],[56.5,92.73],[56.5,95.45],[56.5,98.18],[56.5,100.91],[56.5,103.64],[56.5,106.36],[56.5,109.09],[56.5,111.82],[56.5,114.55],[56.5,117.27],[56.5,120.0],[56.5,122.73],[56.5,125.45],[56.5,128.18],[56.5,130.91],[56.5,133.64],[56.5,136.36],[56.5,158.18],[56.5,160.91],[58.0,-157.32],[58.0,-134.65],[58.0,-131.81],[58.0,-128.98],[58.0,-126.14],[58.0,-123.31],[58.0,-120.47],[58.0,-117.64],[58.0,-114.8],[58.0,-111.97],[58.0,-109.13],[58.0,-106.3],[58.0,-103.46],[58.0,-100.63],[58.0,-97.8],[58.0,-94.96],[58.0,-75.12],[58.0,-72.28],[58.0,-69.45],[58.0,-66.61],[58.0,-63.78],[58.0,-4.25],[58.0,12.76],[58.0,15.59],[58.0,26.93],[58.0,29.76],[58.0,32.6],[58.0,35.43],[58.0,38.27],[58.0,41.1],[58.0,43.94],[58.0,46.77],[58.0,49.61],[58.0,52.44],[58.0,55.28],[58.0,58.11],[58.0,60.94],[58.0,63.78],[58.0,66.61],[58.0,69.45],[58.0,72.28],[58.0,75.12],[58.0,77.95],[58.0,80.79],[58.0,83.62],[58.0,86.46],[58.0,89.29],[58.0,92.13],[58.0,94.96],[58.0,97.8],[58.0,100.63],[58.0,103.46],[58.0,106.3],[58.0,109.13],[58.0,111.97],[58.0,114.8],[58.0,117.64],[58.0,120.47],[58.0,123.31],[58.0,126.14],[58.0,128.98],[58.0,131.81],[58.0,134.65],[58.0,137.48],[58.0,140.31],[58.0,160.16],[59.5,-159.34],[59.5,-156.39],[59.5,-138.69],[59.5,-135.74],[59.5,-132.79],[59.5,-129.84],[59.5,-126.89],[59.5,-123.93],[59.5,-120.98],[59.5,-118.03],[59.5,-115.08],[59.5,-112.13],[59.5,-109.18],[59.5,-106.23],[59.5,-103.28],[59.5,-100.33],[59.5,-97.38],[59.5,-76.72],[59.5,-73.77],[59.5,-70.82],[59.5,-64.92],[59.5,5.9],[59.5,8.85],[59.5,11.8],[59.5,14.75],[59.5,17.7],[59.5,26.56],[59.5,29.51],[59.5,32.46],[59.5,35.41],[59.5,38.36],[59.5,41.31],[59.5,44.26],[59.5,47.21],[59.5,50.16],[59.5,53.11],[59.5,56.07],[59.5,59.02],[59.5,61.97],[59.5,64.92],[59.5,67.87],[59.5,70.82],[59.5,73.77],[59.5,76.72],[59.5,79.67],[59.5,82.62],[59.5,85.57],[59.5,88.52],[59.5,91.48],[59.5,94.43],[59.5,97.38],[59.5,100.33],[59.5,103.28],[59.5,106.23],[59.5,109.18],[59.5,112.13],[59.5,115.08],[59.5,118.03],[59.5,120.98],[59.5,123.93],[59.5,126.89],[59.5,129.84],[59.5,132.79],[59.5,135.74],[59.5,138.69],[59.5,141.64],[59.5,144.59],[59.5,147.54],[59.5,153.44],[59.5,162.3],[61.0,-164.48],[61.0,-161.38],[61.0,-158.28],[61.0,-155.17],[61.0,-152.07],[61.0,-148.97],[61.0,-145.86],[61.0,-142.76],[61.0,-139.66],[61.0,-136.55],[61.0,-133.45],[61.0,-130.34],[61.0,-127.24],[61.0,-124.14],[61.0,-121.03],[61.0,-117.93],[61.0,-114.83],[61.0,-111.72],[61.0,-108.62],[61.0,-105.52],[61.0,-102.41],[61.0,-99.31],[61.0,-96.21],[61.0,-77.59],[61.0,-74.48],[61.0,-71.38],[61.0,-46.55],[61.0,-43.45],[61.0,6.21],[61.0,9.31],[61.0,12.41],[61.0,15.52],[61.0,21.72],[61.0,24.83],[61.0,27.93],[61.0,31.03],[61.0,34.14],[61.0,37.24],[61.0,40.34],[61.0,43.45],[61.0,46.55],[61.0,49.66],[61.0,52.76],[61.0,55.86],[61.0,58.97],[61.0,62.07],[61.0,65.17],[61.0,68.28],[61.0,71.38],[61.0,74.48],[61.0,77.59],[61.0,80.69],[61.0,83.79],[61.0,86.9],[61.0,90.0],[61.0,93.1],[61.0,96.21],[61.0,99.31],[61.0,102.41],[61.0,105.52],[61.0,108.62],[61.0,111.72],[61.0,114.83],[61.0,117.93],[61.0,121.03],[61.0,124.14],[61.0,127.24],[61.0,130.34],[61.0,133.45],[61.0,136.55],[61.0,139.66],[61.0,142.76],[61.0,145.86],[61.0,148.97],[61.0,152.07],[61.0,155.17],[61.0,164.48],[61.0,167.59],[61.0,170.69],[62.5,-163.78],[62.5,-160.54],[62.5,-157.3],[62.5,-154.05],[62.5,-150.81],[62.5,-147.57],[62.5,-144.32],[62.5,-141.08],[62.5,-137.84],[62.5,-134.59],[62.5,-131.35],[62.5,-128.11],[62.5,-124.86],[62.5,-121.62],[62.5,-118.38],[62.5,-115.14],[62.5,-111.89],[62.5,-108.65],[62.5,-105.41],[62.5,-102.16],[62.5,-98.92],[62.5,-95.68],[62.5,-82.7],[62.5,-50.27],[62.5,-47.03],[62.5,-43.78],[62.5,8.11],[62.5,11.35],[62.5,14.59],[62.5,24.32],[62.5,27.57],[62.5,30.81],[62.5,34.05],[62.5,37.3],[62.5,40.54],[62.5,43.78],[62.5,47.03],[62.5,50.27],[62.5,53.51],[62.5,56.76],[62.5,60.0],[62.5,63.24],[62.5,66.49],[62.5,69.73],[62.5,72.97],[62.5,76.22],[62.5,79.46],[62.5,82.7],[62.5,85.95],[62.5,89.19],[62.5,92.43],[62.5,95.68],[62.5,98.92],[62.5,102.16],[62.5,105.41],[62.5,108.65],[62.5,111.89],[62.5,115.14],[62.5,118.38],[62.5,121.62],[62.5,124.86],[62.5,128.11],[62.5,131.35],[62.5,134.59],[62.5,137.84],[62.5,141.08],[62.5,144.32],[62.5,147.57],[62.5,150.81],[62.5,154.05],[62.5,157.3],[62.5,160.54],[62.5,167.03],[62.5,170.27],[62.5,173.51],[64.0,-159.43],[64.0,-156.0],[64.0,-152.57],[64.0,-149.14],[64.0,-145.71],[64.0,-142.29],[64.0,-138.86],[64.0,-135.43],[64.0,-132.0],[64.0,-128.57],[64.0,-125.14],[64.0,-121.71],[64.0,-118.29],[64.0,-114.86],[64.0,-111.43],[64.0,-108.0],[64.0,-104.57],[64.0,-101.14],[64.0,-97.71],[64.0,-94.29],[64.0,-90.86],[64.0,-84.0],[64.0,-70.29],[64.0,-66.86],[64.0,-49.71],[64.0,-46.29],[64.0,-42.86],[64.0,-22.29],[64.0,-18.86],[64.0,12.0],[64.0,15.43],[64.0,18.86],[64.0,25.71],[64.0,29.14],[64.0,32.57],[64.0,36.0],[64.0,39.43],[64.0,42.86],[64.0,46.29],[64.0,49.71],[64.0,53.14],[64.0,56.57],[64.0,60.0],[64.0,63.43],[64.0,66.86],[64.0,70.29],[64.0,73.71],[64.0,77.14],[64.0,80.57],[64.0,84.0],[64.0,87.43],[64.0,90.86],[64.0,94.29],[64.0,97.71],[64.0,101.14],[64.0,104.57],[64.0,108.0],[64.0,111.43],[64.0,114.86],[64.0,118.29],[64.0,121.71],[64.0,125.14],[64.0,128.57],[64.0,132.0],[64.0,135.43],[64.0,138.86],[64.0,142.29],[64.0,145.71],[64.0,149.14],[64.0,152.57],[64.0,156.0],[64.0,159.43],[64.0,162.86],[64.0,166.29],[64.0,169.71],[64.0,173.14],[64.0,176.57],[65.5,-180.0],[65.5,-172.8],[65.5,-165.6],[65.5,-162.0],[65.5,-158.4],[65.5,-154.8],[65.5,-151.2],[65.5,-147.6],[65.5,-144.0],[65.5,-140.4],[65.5,-136.8],[65.5,-133.2],[65.5,-129.6],[65.5,-126.0],[65.5,-122.4],[65.5,-118.8],[65.5,-115.2],[65.5,-111.6],[65.5,-108.0],[65.5,-104.4],[65.5,-100.8],[65.5,-97.2],[65.5,-93.6],[65.5,-90.0],[65.5,-72.0],[65.5,-68.4],[65.5,-64.8],[65.5,-50.4],[65.5,-46.8],[65.5,-43.2],[65.5,-21.6],[65.5,-18.0],[65.5,-14.4],[65.5,14.4],[65.5,18.0],[65.5,21.6],[65.5,28.8],[65.5,32.4],[65.5,43.2],[65.5,46.8],[65.5,50.4],[65.5,54.0],[65.5,57.6],[65.5,61.2],[65.5,64.8],[65.5,68.4],[65.5,72.0],[65.5,75.6],[65.5,79.2],[65.5,82.8],[65.5,86.4],[65.5,90.0],[65.5,93.6],[65.5,97.2],[65.5,100.8],[65.5,104.4],[65.5,108.0],[65.5,111.6],[65.5,115.2],[65.5,118.8],[65.5,122.4],[65.5,126.0],[65.5,129.6],[65.5,133.2],[65.5,136.8],[65.5,140.4],[65.5,144.0],[65.5,147.6],[65.5,151.2],[65.5,154.8],[65.5,158.4],[65.5,162.0],[65.5,165.6],[65.5,169.2],[65.5,172.8],[65.5,176.4],[67.0,-180.0],[67.0,-176.17],[67.0,-160.85],[67.0,-157.02],[67.0,-153.19],[67.0,-149.36],[67.0,-145.53],[67.0,-141.7],[67.0,-137.87],[67.0,-134.04],[67.0,-130.21],[67.0,-126.38],[67.0,-122.55],[67.0,-118.72],[67.0,-114.89],[67.0,-111.06],[67.0,-107.23],[67.0,-103.4],[67.0,-99.57],[67.0,-95.74],[67.0,-91.91],[67.0,-88.09],[67.0,-84.26],[67.0,-72.77],[67.0,-68.94],[67.0,-65.11],[67.0,-53.62],[67.0,-49.79],[67.0,-45.96],[67.0,-42.13],[67.0,-38.3],[67.0,-34.47],[67.0,15.32],[67.0,19.15],[67.0,22.98],[67.0,26.81],[67.0,30.64],[67.0,34.47],[67.0,38.3],[67.0,49.79],[67.0,53.62],[67.0,57.45],[67.0,61.28],[67.0,65.11],[67.0,68.94],[67.0,76.6],[67.0,80.43],[67.0,84.26],[67.0,88.09],[67.0,91.91],[67.0,95.74],[67.0,99.57],[67.0,103.4],[67.0,107.23],[67.0,111.06],[67.0,114.89],[67.0,118.72],[67.0,122.55],[67.0,126.38],[67.0,130.21],[67.0,134.04],[67.0,137.87],[67.0,141.7],[67.0,145.53],[67.0,149.36],[67.0,153.19],[67.0,157.02],[67.0,160.85],[67.0,164.68],[67.0,168.51],[67.0,172.34],[67.0,176.17],[68.5,-180.0],[68.5,-163.64],[68.5,-159.55],[68.5,-155.45],[68.5,-151.36],[68.5,-147.27],[68.5,-143.18],[68.5,-139.09],[68.5,-135.0],[68.5,-130.91],[68.5,-126.82],[68.5,-122.73],[68.5,-118.64],[68.5,-114.55],[68.5,-81.82],[68.5,-73.64],[68.5,-69.55],[68.5,-49.09],[68.5,-45.0],[68.5,-40.91],[68.5,-36.82],[68.5,-32.73],[68.5,-28.64],[68.5,20.45],[68.5,24.55],[68.5,28.64],[68.5,32.73],[68.5,36.82],[68.5,45.0],[68.5,53.18],[68.5,57.27],[68.5,61.36],[68.5,65.45],[68.5,69.55],[68.5,81.82],[68.5,85.91],[68.5,90.0],[68.5,94.09],[68.5,98.18],[68.5,102.27],[68.5,106.36],[68.5,110.45],[68.5,114.55],[68.5,118.64],[68.5,122.73],[68.5,126.82],[68.5,130.91],[68.5,135.0],[68.5,139.09],[68.5,143.18],[68.5,147.27],[68.5,151.36],[68.5,155.45],[68.5,159.55],[68.5,163.64],[68.5,167.73],[68.5,171.82],[68.5,175.91],[70.0,-162.44],[70.0,-158.05],[70.0,-153.66],[70.0,-149.27],[70.0,-127.32],[70.0,-114.15],[70.0,-109.76],[70.0,-105.37],[70.0,-100.98],[70.0,-92.2],[70.0,-83.41],[70.0,-79.02],[70.0,-74.63],[70.0,-70.24],[70.0,-48.29],[70.0,-43.9],[70.0,-39.51],[70.0,-35.12],[70.0,-30.73],[70.0,-26.34],[70.0,21.95],[70.0,26.34],[70.0,70.24],[70.0,74.63],[70.0,79.02],[70.0,83.41],[70.0,87.8],[70.0,92.2],[70.0,96.59],[70.0,100.98],[70.0,105.37],[70.0,109.76],[70.0,114.15],[70.0,118.54],[70.0,122.93],[70.0,127.32],[70.0,131.71],[70.0,136.1],[70.0,140.49],[70.0,144.88],[70.0,149.27],[70.0,153.66],[70.0,158.05],[70.0,171.22],[71.5,-123.16],[71.5,-113.68],[71.5,-108.95],[71.5,-94.74],[71.5,-80.53],[71.5,-75.79],[71.5,-52.11],[71.5,-47.37],[71.5,-42.63],[71.5,-37.89],[71.5,-33.16],[71.5,-28.42],[71.5,-23.68],[71.5,52.11],[71.5,71.05],[71.5,80.53],[71.5,85.26],[71.5,90.0],[71.5,94.74],[71.5,99.47],[71.5,104.21],[71.5,108.95],[71.5,113.68],[71.5,118.42],[71.5,123.16],[71.5,127.89],[71.5,132.63],[71.5,137.37],[71.5,142.11],[71.5,146.84],[73.0,-123.43],[73.0,-118.29],[73.0,-108.0],[73.0,-97.71],[73.0,-92.57],[73.0,-87.43],[73.0,-82.29],[73.0,-77.14],[73.0,-51.43],[73.0,-46.29],[73.0,-41.14],[73.0,-36.0],[73.0,-30.86],[73.0,-25.71],[73.0,82.29],[73.0,87.43],[73.0,92.57],[73.0,97.71],[73.0,102.86],[73.0,108.0],[73.0,113.14],[73.0,118.29],[73.0,123.43],[73.0,128.57],[74.5,-112.5],[74.5,-56.25],[74.5,-50.62],[74.5,-45.0],[74.5,-39.38],[74.5,-33.75],[74.5,-28.12],[74.5,-22.5],[74.5,56.25],[74.5,90.0],[74.5,95.62],[74.5,101.25],[74.5,106.88],[74.5,112.5],[76.0,-117.93],[76.0,-99.31],[76.0,-55.86],[76.0,-49.66],[76.0,-43.45],[76.0,-37.24],[76.0,-31.03],[76.0,-24.83],[76.0,62.07],[76.0,93.1],[76.0,99.31],[76.0,105.52],[76.0,111.72],[77.5,-110.77],[77.5,-90.0],[77.5,-83.08],[77.5,-69.23],[77.5,-62.31],[77.5,-55.38],[77.5,-48.46],[77.5,-41.54],[77.5,-34.62],[77.5,-27.69],[77.5,-20.77],[77.5,103.85]],
 animate(root,state,duration,draw){
  let dead=false,raf=0;const media=matchMedia('(prefers-reduced-motion: reduce)'),q=new URLSearchParams(location.search),fixed=q.get('sx');
  const finish=()=>{cancelAnimationFrame(raf);if(!dead){draw(duration);root.dataset.sx='complete'}};
  const change=()=>{if(media.matches)finish()};media.addEventListener('change',change);
  if(state.settled||media.matches||q.has('static'))finish();else if(fixed!==null&&Number.isFinite(+fixed)){draw(Math.max(0,Math.min(duration,+fixed)));root.dataset.sx='seek'}else{
   const start=performance.now()+(state.delay||0);const tick=now=>{if(dead)return;const t=Math.max(0,now-start);draw(Math.min(duration,t));root.dataset.sxTime=String(t);if(t<duration)raf=requestAnimationFrame(tick);else root.dataset.sx='complete'};raf=requestAnimationFrame(tick)
  }
  return {finish,cleanup(){dead=true;cancelAnimationFrame(raf);media.removeEventListener('change',change)}}
 },
 globe(canvas,from,to){
  const x=canvas.getContext('2d');if(!x)return ()=>{};
  const W=canvas.width,H=canvas.height,R=390,cx=W/2,cy=H/2,rad=Math.PI/180;
  const rgb=getComputedStyle(canvas).getPropertyValue('--acc').trim()||'#c15636';
  const coords=(p,lon,lat)=>{const a=p[0]*rad,b=(p[1]-lon)*rad,l=lat*rad;const X=Math.cos(a)*Math.sin(b),Y=Math.sin(a)*Math.cos(l)-Math.cos(a)*Math.cos(b)*Math.sin(l),Z=Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(b)*Math.cos(l);return [cx+R*X,cy-R*Y,Z]};
  return t=>{
   const p=Math.min(1,t/3600),ease=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;
   const delta=((to.lng-from.lng+540)%360)-180,lon=from.lng+delta*ease,lat=from.lat+(to.lat-from.lat)*ease;
   canvas.dataset.center=JSON.stringify({lat,lng:lon});x.clearRect(0,0,W,H);
   const halo=x.createRadialGradient(cx,cy,R*.85,cx,cy,R*1.12);halo.addColorStop(0,'rgba(145,178,199,0)');halo.addColorStop(.65,'rgba(145,178,199,.2)');halo.addColorStop(1,'rgba(145,178,199,0)');x.fillStyle=halo;x.beginPath();x.arc(cx,cy,R*1.12,0,Math.PI*2);x.fill();
   const g=x.createRadialGradient(cx-R*.35,cy-R*.4,0,cx,cy,R);g.addColorStop(0,'#263c4b');g.addColorStop(.7,'#142431');g.addColorStop(1,'#08131d');x.fillStyle=g;x.beginPath();x.arc(cx,cy,R,0,Math.PI*2);x.fill();
   for(const dot of M.srExtra.land){const v=coords(dot,lon,lat);if(v[2]>.015){x.fillStyle=`rgba(215,228,230,${.25+.65*v[2]})`;x.beginPath();x.arc(v[0],v[1],1.1+v[2]*.65,0,Math.PI*2);x.fill()}}
   for(const [i,pt] of [from,to].entries()){const v=coords([pt.lat,pt.lng],lon,lat);if(v[2]>0){x.fillStyle=i?rgb:'#edf1ed';x.beginPath();x.arc(v[0],v[1],i?7:4,0,Math.PI*2);x.fill();if(i){x.strokeStyle=rgb;x.lineWidth=2;x.beginPath();x.arc(v[0],v[1],15,0,Math.PI*2);x.stroke()}}}
   // Short great-circle interpolation uses the exact flight endpoints; no invented routes.
   if(from!==to){const vec=p=>{const a=p.lat*rad,b=p.lng*rad;return [Math.cos(a)*Math.cos(b),Math.cos(a)*Math.sin(b),Math.sin(a)]},a=vec(from),b=vec(to);x.strokeStyle=rgb;x.lineWidth=2.5;x.beginPath();let pen=false;for(let i=0;i<=Math.floor(100*Math.min(1,t/2400));i++){const u=i/100,v=a.map((k,j)=>k*(1-u)+b[j]*u),n=Math.hypot(...v),pt=[Math.asin(v[2]/n)/rad,Math.atan2(v[1],v[0])/rad],s=coords(pt,lon,lat);if(s[2]>0){const lift=1+Math.sin(Math.PI*u)*.035,X=cx+(s[0]-cx)*lift,Y=cy+(s[1]-cy)*lift;pen?x.lineTo(X,Y):x.moveTo(X,Y);pen=true}else pen=false}x.stroke()}
  }
 },
 kaleido(canvas,img){
  const gl=canvas.getContext('webgl',{alpha:false,preserveDrawingBuffer:true});if(!gl)return null;
  const shader=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
  const vs=shader(gl.VERTEX_SHADER,'attribute vec2 pos;varying vec2 uv;void main(){uv=(pos+1.0)*.5;gl_Position=vec4(pos,0.,1.);}');
  const fs=shader(gl.FRAGMENT_SHADER,`precision mediump float;uniform sampler2D tex;uniform float t,k,zoom;uniform vec2 crop;varying vec2 uv;
  vec3 sampleMirror(vec2 q){return texture2D(tex,abs(mod(q,2.0)-1.0)).rgb;}
  void main(){vec2 p=(uv-.5)*vec2(1.7777778,1.);float r=length(p),a=atan(p.y,p.x)+t,s=6.28318/6.,m=mod(a,s),fa=abs(m-s*.5);vec2 q=vec2(cos(fa),sin(fa))*r*zoom+vec2(.52,.42);vec3 col=sampleMirror(q);float edge=1.-smoothstep(0.,.006,min(m,s-m)*r);col+=vec3(1.,.75,.55)*edge*.55;col=pow(col,vec3(.92))*1.18;float lum=dot(col,vec3(.299,.587,.114));col=mix(vec3(lum),col,1.15);col*=1.-r*.5;vec3 plain=texture2D(tex,.5+(uv-.5)*crop).rgb;gl_FragColor=vec4(mix(col,plain,k),1.);}`);
  const pr=gl.createProgram();gl.attachShader(pr,vs);gl.attachShader(pr,fs);gl.linkProgram(pr);if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(pr));gl.useProgram(pr);
  const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const pos=gl.getAttribLocation(pr,'pos');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
  const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,img);for(const n of [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER])gl.texParameteri(gl.TEXTURE_2D,n,gl.LINEAR);for(const n of [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T])gl.texParameteri(gl.TEXTURE_2D,n,gl.CLAMP_TO_EDGE);
  const aspect=img.naturalWidth/img.naturalHeight,screen=16/9;gl.uniform2f(gl.getUniformLocation(pr,'crop'),Math.min(1,screen/aspect),Math.min(1,aspect/screen));
  const draw=ms=>{const f=ms*.03,p=Math.max(0,Math.min(1,(f-40)/14)),k=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;gl.uniform1f(gl.getUniformLocation(pr,'t'),f*.03);gl.uniform1f(gl.getUniformLocation(pr,'zoom'),1.6-.7*Math.min(1,f/50));gl.uniform1f(gl.getUniformLocation(pr,'k'),k);gl.drawArrays(gl.TRIANGLES,0,6);canvas.dataset.unfold=String(k);canvas.style.opacity=f>=54?'0':'1'};
  return {draw,dispose(){gl.deleteTexture(tex);gl.deleteBuffer(b);gl.deleteProgram(pr);gl.deleteShader(vs);gl.deleteShader(fs);gl.getExtension('WEBGL_lose_context')?.loseContext()}}
 }
};

/* variants/cover/_showreel-motion.js */
// 宣傳片研究共用：原片 outExpo(.16,1,.3,1)、TriWipe(.7,0,.3,1)，不修改既有 storyboard
M.showreel = {
 enter(root,state,shots){
  let animations=[],dead=false
  const release=()=>{animations.forEach(a=>{a.onfinish=null;a.cancel()});animations=[]}
  const finish=()=>{if(!dead){release();root.dataset.showreel='complete'}}
  root.dataset.showreel=state.settled?'complete':'playing'
  if(!state.settled){
   const fixed=new URLSearchParams(location.search).get('sr'),start=document.timeline.currentTime
   for(const shot of shots)for(const el of root.querySelectorAll(shot.selector)){
    const a=el.animate(shot.frames,{duration:shot.duration,delay:shot.at+(state.delay||0),easing:'cubic-bezier(.16,1,.3,1)',fill:'both'})
    if(fixed!==null&&Number.isFinite(+fixed)){a.pause();a.currentTime=+fixed;root.dataset.showreel='seek'}else a.startTime=start
    animations.push(a)
   }
   if(fixed===null&&animations.length)animations.reduce((a,b)=>a.effect.getComputedTiming().endTime>b.effect.getComputedTiming().endTime?a:b).onfinish=finish
  }
  return {finish,cleanup(){dead=true;release()}}
 },
 wipeFrames(i){
  const bez=t=>{let lo=0,hi=1,u=.5;for(let k=0;k<18;k++){u=(lo+hi)/2;const x=3*(1-u)*(1-u)*u*.7+3*(1-u)*u*u*.3+u*u*u;if(x<t)lo=u;else hi=u}return 3*(1-u)*u*u+u*u*u}
  const mix=(f,a,b,x,y)=>x+(y-x)*bez(Math.max(0,Math.min(1,(f-a)/(b-a))))
  return Array.from({length:65},(_,n)=>{const f=n/4,x=f<8?mix(f,i*1.5,8,-175,-20):mix(f,8+i*1.2,16,-20,150);return {offset:n/64,transform:`translateX(${(x+i*6)*19.2}px) skewX(-20deg)`}})
 }
}

/* variants/cover/_storyboard.js */
// Reuse the existing composition; only this opt-in version owns the entrance.
M.storyboard = {
  shots: {
    day:{'panorama-rail':[{selector:'.pr-head,.pr-day',at:0,duration:600},{selector:'.pr-photos',at:300,duration:850,cut:true},{selector:'.pr-stop',at:950,stagger:100},{selector:'.pr-foot',at:1550}]},
    stay:{'panorama-keycard':[{selector:'header',at:0,duration:600},{selector:'.pk-scene',at:300,duration:850,stagger:180,cut:true},{selector:'section .pk-copy',at:1000,stagger:180},{selector:':scope > .pk-copy:not(header)',at:1400}]}
  },
  html(type, base, c) {
    return `<style>.t-${type}.v-${base} *{animation:none!important}</style>` + M.REG[type][base].html(c)
      .replace(/class="([^"]*)"/g, (_, value) => `class="${value.split(/\s+/).filter(k => k !== 'in').join(' ')}"`)
  },
  enter(root, state, shots) {
    let animations = [], disposed = false
    const release = () => { for (const a of animations) { a.onfinish = null; a.cancel() }; animations = [] }
    const finish = () => { if (!disposed) { release(); root.dataset.storyboard = 'complete' } }
    const cleanup = () => { disposed = true; release() }
    root.dataset.storyboard = state.settled ? 'complete' : 'playing'
    if (state.settled) return { finish, cleanup }
    const seek = new URLSearchParams(location.search).get('st')
    const fixed = seek !== null && seek.trim() !== '' && Number.isFinite(Number(seek))
    const start = document.timeline.currentTime
    for (const shot of shots) {
      root.querySelectorAll(shot.selector).forEach((el, i) => {
        const frames = shot.cut
          ? [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0)' }]
          : [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }]
        const a = el.animate(frames, { duration: shot.duration || 550, delay: shot.at + i * (shot.stagger || 0), easing: 'cubic-bezier(.16,.8,.24,1)', fill: 'both' })
        if (fixed) { a.pause(); a.currentTime = Math.max(0, Number(seek)) }
        else a.startTime = start
        animations.push(a)
      })
    }
    if (fixed) root.dataset.storyboard = 'seek'
    else if (animations.length) {
      const last = animations.reduce((a, b) => a.effect.getComputedTiming().endTime > b.effect.getComputedTiming().endTime ? a : b)
      last.onfinish = finish
    } else finish()
    return { finish, cleanup }
  }
}

/* variants/cover/arc.js */
// cover／arc：圓弧切照片（中山國小封面）
{ const U = M.util
M.add('cover', 'arc', { name: '圓弧切照片', range: [0, 99], html: c => `
    <img class="ab hero" src="${c.meta.hero}" alt="" style="left:700px;top:0;width:1220px;height:930px;object-fit:cover">
    <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px"><path d="${U.arcPanel(.49, 1500, .43)}" fill="#fbfaf7"/><path d="${U.arcLine(.49, 1500, .43, 34)}" fill="none" stroke="var(--acc)" stroke-width="3"/></svg>
    <div class="ab in" style="left:120px;top:150px;width:820px;--i:1">
      <div class="serif" style="font-size:${U.fit(c.tx('sub', c.meta.sub), 800, 30)}px;color:#4b5257;letter-spacing:.1em">${c.ed('sub', c.meta.sub)}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('title', c.meta.title), 800, 120)}px;line-height:1.15;margin-top:24px;letter-spacing:.06em">${c.ed('title', c.meta.title)}</div>
      <div class="serif" style="font-size:30px;margin-top:30px">${c.ed('dates', c.meta.dates)}</div>
</div>
    <div class="ab" style="left:0;top:930px;width:1920px;height:150px;background:#fff;border-top:1px solid var(--line);display:flex;align-items:center;padding:0 120px">
      <div class="serif" style="font-size:36px;letter-spacing:.08em">${c.ed('agency', c.meta.agency)}</div></div>` }) }

/* variants/cover/behind.js */
// cover／behind：大字躲在主體後面（破格）。學自小紅書 68ba6a8d、6a6b3a5a（東京塔：字插在天際線後面），去背改用 cutout.py 已判定能用的主角
// 三層：照片 → 實白大標 → 同一張照片的去背主角（同框同裁切，所以完全對齊）。主角壓住標題的一角＝字在景後面。
// 去背圖：資料若有 meta.cuts（照片 → 去背 PNG）就用；否則查下面的對照（img/.cutout-cache 裡 ok 的那幾張）。沒有能用的去背就只疊字、不破格。
{ const U = M.util
// prof：去背主角每 1/20 高度的「最左緣」（佔照片寬的比例），用來算標題可以排多寬、從哪裡開始被主角蓋住
const KNOWN = {}   // 去背改由 build_data.mjs 帶在 meta.cuts（複製進 img/、算好輪廓），不再寫死外層路徑（2026-10-07）
const cutOf = (c, src) => src && ((c.meta.cuts || {})[src] || KNOWN[String(src).split('/').pop()])
M.coverCut = c => { const list = [c.meta.hero, ...(c.meta.pool || [])]; const src = list.find(s => cutOf(c, s)); return src ? { src, cut: cutOf(c, src) } : { src: c.meta.hero, cut: null } }
// 照片以 cover 方式鋪滿 1920×1080（對齊點 50% 30%）時，畫面上 y0～y1 這一段主角的最左緣 x
function edgeAt(cut, y0, y1) {
  const k = Math.max(1920 / cut.w, 1080 / cut.h), oy = (1080 - cut.h * k) * .3, ox = (1920 - cut.w * k) / 2, N = cut.prof.length
  let e = 1920
  cut.prof.forEach((f, i) => { const a = oy + i * cut.h / N * k, b = oy + (i + 1) * cut.h / N * k; if (b > y0 && a < y1) e = Math.min(e, ox + f * cut.w * k) })
  return e
}
// 標題排法：沒有去背＝左上大字；有去背＝找一個高度，讓每一行的最後約半個字躲進主角後面，字級取能放得下的最大
function plan(n, cut) {
  const lines = n <= 4 ? 1 : n <= 8 ? 2 : 3, per = Math.ceil(n / lines), LH = 1.04
  if (!cut || !cut.prof) return { lines, per, size: Math.min(300, Math.floor(700 / (lines * LH)), Math.floor(1640 / (Math.max(2, per) * 1.02))), left: 120, top: 64, right: null }
  let best = null
  for (let top = 60; top <= 560; top += 20) for (let size = 300; size >= 90; size -= 6) {
    const h = lines * size * LH
    if (top + h > 800) continue
    const edge = edgeAt(cut, top, top + h), right = edge + size * .5, left = right - per * size * 1.02
    if (left >= 120) { if (!best || size > best.size) best = { lines, per, size, left, top, right }; break }
  }
  return best && best.size >= 110 ? best : { ...plan(n, null), noCut: true }
}
M.add('cover', 'behind', { needs: (p, m) => Object.values(m.cuts || {}).some(v => v && v.png) ? '' : '去背照片', name: '大字在主角後面（破格）', html: c => {
  const { src, cut: cut0 } = M.coverCut(c), title = c.tx('title', c.meta.title), n = Math.max(1, Math.round(U.len(title)))
  const P = plan(n, cut0), cut = P.noCut ? null : cut0, size = P.size, per = P.per
  const fit = 'position:absolute;inset:0;width:1920px;height:1080px;object-fit:cover;object-position:50% 30%'
  return `<style>
  .t-cover.v-behind .ttl{position:absolute;font-family:var(--serif);font-weight:900;line-height:1.02;letter-spacing:.02em;
    color:#fff;filter:drop-shadow(0 6px 30px rgba(0,20,40,.35))}
  .t-cover.v-behind .ttl [contenteditable]{caret-color:#fff;display:block}
  .t-cover.v-behind .ttl [contenteditable]:focus{color:#fff}
  .t-cover.v-behind .cut.in{animation:cbRise 1.1s cubic-bezier(.16,.8,.24,1) both;animation-delay:.25s}
  @keyframes cbRise{from{transform:translateY(60px) scale(1.04);opacity:0}}
  .t-cover.v-behind .ttl.in{animation:cbDrop 1s cubic-bezier(.16,.8,.24,1) both}
  @keyframes cbDrop{from{transform:translateY(-50px);opacity:0}}
  </style>
  <img class="hero" src="${src}" alt="" style="${fit}">
  <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(6,18,30,.5),rgba(6,18,30,.08) 55%,rgba(6,18,30,.55))"></div>
  <div class="ab" style="left:${Math.round(P.left + per * size * .5 - 360)}px;top:${Math.round(P.top + P.lines * size * .5 - 300)}px;width:720px;height:720px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,196,120,.55),rgba(255,170,90,.18) 60%,rgba(255,170,90,0));mix-blend-mode:screen"></div>
  <div class="ttl in" style="left:${Math.round(P.left)}px;top:${P.top}px;width:${Math.ceil(per * size * 1.02) + 8}px;font-size:${size}px;text-align:${cut ? 'right' : 'left'};text-wrap:balance">${c.ed('title', c.meta.title)}</div>
  ${cut ? `<img class="cut in" src="${cut.png}" alt="" style="${fit};filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))">` : ''}
  <div class="ab" style="left:0;right:0;bottom:0;height:300px;background:linear-gradient(0deg,rgba(6,14,22,.82),rgba(6,14,22,0))"></div>
  <div class="ab in" style="left:120px;bottom:90px;width:1100px;color:#fff;--i:3">
    ${c.meta.en ? `<div style="font:600 22px var(--sans);letter-spacing:.5em;opacity:.8">${c.ed('en', c.meta.en)}</div>` : ''}
    <div class="serif" style="margin-top:14px;font-size:${U.fit(c.tx('sub', c.meta.sub), 1080, 34, 22)}px;letter-spacing:.06em">${c.ed('sub', c.meta.sub)}</div>
    <div style="margin-top:10px;font-size:26px;opacity:.85">${c.ed('dates', c.meta.dates)}</div></div>
  <div class="ab in" style="right:120px;bottom:94px;width:420px;text-align:right;color:#fff;font:700 ${U.fit(c.tx('agency',c.meta.agency),420,30,18)}px var(--serif);letter-spacing:.1em;--i:4">${c.ed('agency', c.meta.agency)}</div>`
} }) }

/* variants/cover/brush.js */
// cover／brush：毛筆大字＋斜切透光片（封神開場）。學自小紅書 6a5eed52（瑞士開場）、6a5cce76（京都賞楓）的網頁重做版
// 標題拆成單字：一行或兩行，每行頭尾大、中間小、輕微左右傾，從畫面外飛入拼成一句；四角三層透光片填同一張照片（錯位）。
// 字數 2～12 都由下面的規則算位置與字級，不是畫死的座標。
{ const U = M.util
const FONT = `<style>@font-face{font-family:'MasaFont';src:url('fonts/masafont/MasaFont-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:block}</style><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@700&display=swap">`
// 一個字一格：回傳 [{ch,x,y,s,r,fx,fy}]，以及整塊的外框
function layout(title, box, one = 3) {
  const T = [...String(title).replace(/\s+/g, '')], n = T.length
  if (!n) return { chars: [], s: 0, bb: { x: box.x, y: box.y, w: box.w, h: 0 } }
  const rows = n <= one ? [T] : [T.slice(0, Math.ceil(n / 2)), T.slice(Math.ceil(n / 2))]
  const wt = row => row.length === 1 ? [1.25] : row.map((_, i) => i === 0 ? 1.25 : i === row.length - 1 ? 1.12 : (i % 2 ? .64 : .74))
  const ADV = .9, ROT = [-3, 2, -2, 3, -1, 2]           // 字距略咬合；輕微左右傾
  // 先用字級 1 排：第一行小字貼上緣、第二行小字貼下緣，大字往中間咬合（原作的錯落感）
  const raw = []
  rows.forEach((row, ri) => {
    const w = wt(row), top = Math.max(...w)
    let x = ri ? .14 : 0
    row.forEach((ch, i) => {
      const big = w[i] >= 1, edge = rows.length === 1 ? (i % 2 ? 1 : -1) : (ri ? 1 : -1)
      const y = big ? 0 : edge * (top - w[i]) / 2 * .92
      raw.push({ ch, x: x + w[i] * ADV / 2, y, s: w[i], r: ROT[(i + ri * 3) % ROT.length], ri, i })
      x += w[i] * ADV
    })
  })
  // 第二行往下放到「上下疊在同一欄的兩個字不打架」為止：只有小字對大字的地方才咬合
  if (rows.length > 1) {
    const A = raw.filter(o => !o.ri), B = raw.filter(o => o.ri)
    let D = .6
    for (const a of A) for (const b of B) {
      const ov = Math.min(a.x + a.s / 2, b.x + b.s / 2) - Math.max(a.x - a.s / 2, b.x - b.s / 2)
      if (ov > .2 * Math.min(a.s, b.s)) D = Math.max(D, (a.s + b.s) / 2 * .97 + a.y - b.y)
    }
    B.forEach(o => { o.y += D })
  }
  const bx = a => [Math.min(...raw.map(o => o[a] - o.s / 2)), Math.max(...raw.map(o => o[a] + o.s / 2))]
  const [x0, x1] = bx('x'), [y0, y1] = bx('y')
  const s = Math.min(box.w / (x1 - x0), box.h / (y1 - y0), 470)
  const ox = box.x + (box.w - (x1 - x0) * s) / 2 - x0 * s, oy = box.y + (box.h - (y1 - y0) * s) / 2 - y0 * s
  const chars = raw.map(o => ({ ch: o.ch, x: ox + o.x * s, y: oy + o.y * s, s: o.s * s, r: o.r,
    fx: (o.x - (x0 + x1) / 2) * s * .45, fy: (rows.length === 1 ? (o.i % 2 ? 1 : -1) : (o.ri ? 1 : -1)) * (780 + o.i * 30) }))
  return { chars, s, bb: { x: ox + x0 * s, y: oy + y0 * s, w: (x1 - x0) * s, h: (y1 - y0) * s } }
}
// 透光片的終點（右上三層、左下三層）＋起點（斜跨全畫面）；照片錯位 [dx,dy,縮放]
const PAN = [
  { a: [[150, 0], [1920, 0], [1920, 1080], [1920, 885]], b: [[1700, 0], [1920, 0], [1920, 1080], [1830, 1080]], im: [36, 0, 1.04] },
  { a: [[330, 0], [1920, 0], [1920, 1080], [1920, 795]], b: [[1752, 0], [1920, 0], [1920, 1080], [1868, 1080]], im: [70, 10, 1.07] },
  { a: [[480, 0], [1920, 0], [1920, 1080], [1920, 720]], b: [[1806, 0], [1920, 0], [1920, 1080], [1900, 1080]], im: [100, 16, 1.1] },
  { a: [[0, 0], [30, 0], [1920, 945], [0, 1080]], b: [[0, 0], [60, 0], [262, 1080], [0, 1080]], im: [-40, 0, 1.04] },
  { a: [[0, 0], [240, 0], [1920, 840], [0, 1080]], b: [[0, 0], [26, 0], [206, 1080], [0, 1080]], im: [-70, -10, 1.07] },
  { a: [[0, 0], [410, 0], [1920, 755], [0, 1080]], b: [[0, 90], [0, 90], [150, 1080], [0, 1080]], im: [-100, -16, 1.1] }]
const poly = p => `polygon(${p.map(([x, y]) => `${x}px ${y}px`).join(',')})`
// 共用場景（結尾 end/brush 也用這一套）：底圖調色＋透光片＋毛筆字＋可編輯的透明字層。sc＝這一頁的 class 前綴（.t-頁型.v-版本）
function scene(c, { sc, key, def, box, one }) {
  const title = c.tx(key, def), img = c.meta.hero, L = layout(title, box, one)
  return { L, html: `${FONT}<style>
  ${sc}{background:#08121c;color:#fff}
  ${sc} .bg{position:absolute;inset:0;width:1920px;height:1080px;object-fit:cover;filter:brightness(.6) contrast(1.2) saturate(1.05)}
  ${sc} .grade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,26,44,.55),rgba(8,26,44,.25) 42%,rgba(4,12,22,.78));mix-blend-mode:multiply}
  ${sc} .pw{position:absolute;inset:0;pointer-events:none;filter:drop-shadow(0 0 22px rgba(0,6,20,.7))}
  ${sc} .pn{position:absolute;inset:0;overflow:hidden;opacity:.93}
  ${sc} .pn img{position:absolute;inset:0;width:1920px;height:1080px;object-fit:cover;filter:brightness(.72) contrast(1.15)}
  ${sc} .tint{position:absolute;inset:0;background:rgba(30,70,130,.24);mix-blend-mode:color}
  ${sc} .pn i{position:absolute;inset:0;background:linear-gradient(115deg,rgba(200,220,255,.2),rgba(200,220,255,.04) 60%)}
  ${sc} .pn.in{animation:cbPan .9s cubic-bezier(.65,0,.35,1) both;animation-delay:calc(var(--i)*30ms)}
  @keyframes cbPan{from{clip-path:var(--a)}}
  ${sc} .ch{position:absolute;font-family:'MasaFont','Noto Serif TC',serif;line-height:1;white-space:nowrap;font-weight:700;text-shadow:0 6px 14px rgba(2,16,40,.5);transform:translate(-50%,-50%) rotate(var(--r));pointer-events:none}
  ${sc} .ch.in{animation:cbFly .85s cubic-bezier(.65,0,.35,1) both;animation-delay:calc(var(--i)*25ms)}
  @keyframes cbFly{from{transform:translate(calc(-50% + var(--fx)),calc(-50% + var(--fy))) rotate(var(--r))}}
  ${sc} .ed{position:absolute;color:transparent;caret-color:#fff;font-family:'MasaFont',serif;line-height:1.1;display:flex;align-items:center;justify-content:center;text-align:center}
  ${sc} .ed:focus{color:#fff;background:rgba(0,0,0,.55)}
  ${sc} .ed:focus~.chars{opacity:0}
  .edit ${sc} .ed{color:#fff;background:rgba(0,0,0,.45);z-index:4}
  .edit ${sc} .chars{visibility:hidden}
  ${sc} .ol{position:absolute;left:120px;top:56px;font:600 104px/1 var(--sans);letter-spacing:.06em;color:transparent;-webkit-text-stroke:1.8px rgba(230,240,255,.8);white-space:nowrap}
  </style>
  <img class="bg hero" src="${img}" alt="">
  <div class="grade"></div><div class="tint"></div>
  ${c.meta.en ? `<div class="ol in" style="--i:6">${c.ed('en', c.meta.en)}</div>` : ''}
  ${PAN.map((p, k) => `<div class="pw"><div class="pn in" style="clip-path:${poly(p.b)};--a:${poly(p.a)};--i:${k}"><img src="${img}" alt="" style="transform:translate(${p.im[0]}px,${p.im[1]}px) scale(${p.im[2]})"><div class="grade"></div><div class="tint"></div><i></i></div></div>`).join('')}
  ${c.ed(key, def, `data-font-preserve class="ed" style="left:${L.bb.x}px;top:${L.bb.y}px;width:${L.bb.w}px;height:${L.bb.h}px;font-size:${Math.round(Math.min(L.bb.h * .8, L.bb.w / Math.max(1, U.len(title)) * .95))}px"`)}
  <div class="chars" data-font-preserve aria-hidden="true">${L.chars.map((o, k) => `<span class="ch in" style="left:${o.x.toFixed(0)}px;top:${o.y.toFixed(0)}px;font-size:${o.s.toFixed(0)}px;--r:${o.r}deg;--fx:${o.fx.toFixed(0)}px;--fy:${o.fy.toFixed(0)}px;--i:${k % 4}">${U.esc(o.ch)}</span>`).join('')}</div>` }
}
M.brushKit = { layout, PAN, poly, FONT, scene }
M.add('cover', 'brush', { name: '毛筆大字＋透光片（開場）', html: c => {
  const { L, html } = scene(c, { sc: '.t-cover.v-brush', key: 'title', def: c.meta.title, box: { x: 230, y: 150, w: 1460, h: 690 }, one: 4 })
  const sub = c.tx('sub', c.meta.sub), left = Math.round(Math.min(420, Math.max(160, L.bb.x)))
  return `${html}
  <div class="ab in" style="left:${left}px;top:880px;width:${1400 - left}px;--i:7">
    <div style="font:700 ${U.fit(sub, 1000, 38, 24)}px/1.2 'LXGW WenKai TC',var(--serif);letter-spacing:.12em;text-shadow:0 2px 12px rgba(0,10,30,.7)">${c.ed('sub', c.meta.sub)}</div>
    <div style="margin-top:16px;font:300 27px/1 var(--sans);letter-spacing:.08em;opacity:.8">${c.ed('dates', c.meta.dates)}</div></div>
  <div class="ab in" style="right:120px;top:984px;font:400 28px/1 var(--sans);letter-spacing:.14em;--i:8">${c.ed('agency', c.meta.agency)}</div>`
} }) }

/* variants/cover/cinema-masthead.js */
// cover／cinema-masthead：大地名刊頭、橫幅實景、中文片名落款
// 封面無 items，依 CONTRACT 不宣告 range；欄寬及字級由可用版心、實際文字計算
{ const U = M.util
M.add('cover', 'cinema-masthead', { name: '橫幅電影刊頭', html: c => {
  const title = c.p.title || c.meta.title || '', src = c.p.img || c.meta.hero || c.meta.pool?.[0]
  const W = 1920 - 120 * 2, gap = 72, left = Math.round(W * .64), right = W - left - gap
  const en = c.meta.en || '', sub = c.meta.sub || '', dates = c.meta.dates || '', agency = c.meta.agency || ''
  return `<style>
  .t-cover.v-cinema-masthead{background:var(--ink);color:var(--paper)}
  .t-cover.v-cinema-masthead::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent 0 3px,color-mix(in srgb,var(--paper) 3%,transparent) 3px 4px)}
  .t-cover.v-cinema-masthead .cm-head{position:absolute;left:120px;right:120px;top:22px;height:204px;display:grid;grid-template-columns:${left}px ${right}px;gap:${gap}px;align-items:center}
  .t-cover.v-cinema-masthead .cm-en{font-family:var(--sans);font-weight:700;line-height:1;letter-spacing:-.045em;white-space:nowrap}
  .t-cover.v-cinema-masthead [contenteditable]{display:block}
  .t-cover.v-cinema-masthead .cm-meta{display:flex;flex-direction:column;gap:20px}
  .t-cover.v-cinema-masthead .cm-sub{line-height:1.6;text-wrap:balance;word-break:keep-all;overflow-wrap:anywhere}
  .t-cover.v-cinema-masthead .hero{position:absolute;left:0;top:250px;width:1920px;height:610px;object-fit:cover;object-position:50% 43%}
  .t-cover.v-cinema-masthead .hero.in{animation:coverCinemaReveal .85s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*70ms)}
  .t-cover.v-cinema-masthead .cm-foot{position:absolute;left:120px;right:120px;top:890px;height:150px;display:grid;grid-template-columns:${left}px ${right}px;gap:${gap}px;align-items:center}
  .t-cover.v-cinema-masthead .cm-title{font-family:var(--serif);font-weight:700;line-height:1.15;white-space:nowrap}
  .t-cover.v-cinema-masthead .cm-agency{justify-self:end;border-top:3px solid var(--acc3);padding-top:20px;line-height:1.4;text-align:right}
  /* 窄螢幕橫向：照片與片名區同步讓出底部提示空間，保留三段構圖 */
  @media(max-width:860px) and (orientation:landscape){
    .t-cover.v-cinema-masthead{--cm-footer-lift:160px}
    .t-cover.v-cinema-masthead .hero{height:calc(610px - var(--cm-footer-lift))}
    .t-cover.v-cinema-masthead .cm-foot{top:calc(890px - var(--cm-footer-lift))}
  }
  @keyframes coverCinemaReveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
  @media(prefers-reduced-motion:reduce){.t-cover.v-cinema-masthead .in{animation:none!important}}
  </style>
  <div class="cm-head">
    ${en ? `<div class="cm-en in" style="font-size:${U.fit(c.tx('en', en), left, 224, 16)}px;--i:0">${c.ed('en', en)}</div>` : '<div></div>'}
    <div class="cm-meta in" style="--i:1">
      ${dates ? `<div style="font-size:${U.fit(c.tx('dates', dates), right, 30, 16)}px;line-height:1.3;color:var(--paper)">${c.ed('dates', dates)}</div>` : ''}
      ${sub ? `<div class="cm-sub" style="font-size:${U.fit(c.tx('sub', sub), right * 2, 26, 16)}px">${c.ed('sub', sub)}</div>` : ''}
    </div>
  </div>
  ${src ? `<img class="hero in" src="${U.esc(src)}" alt="" style="--i:1">` : ''}
  <div class="cm-foot">
    ${title ? `<div class="cm-title in" style="font-size:${U.fit(c.tx('title', title), left, 148, 16)}px;--i:3">${c.ed('title', title)}</div>` : '<div></div>'}
    ${agency ? `<div class="cm-agency in" style="font-size:${U.fit(c.tx('agency', agency), right, 32, 16)}px;--i:4">${c.ed('agency', agency)}</div>` : ''}
  </div>`
} }) }

/* variants/cover/detail-journal.js */
// cover/detail-journal · M001 · 視覺研究 v1（2026-11-03）
// 上方一張場景、下方三個細節，大小有明確主從；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('cover','detail-journal',{name:'旅程主景與三個細節',html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  const hero=p.img||meta.hero, details=[...new Set(meta.pool||[])].filter(src=>src!==hero).slice(0,3)
  const title=p.title||meta.title, en=p.en||meta.en
  return `<div style="position:absolute;inset:0;background:var(--paper)"></div>`+
    T('agency',meta.agency,120,70,600,65,25,'letter-spacing:.12em')+line(120,156,600)+
    T('en',en,120,210,600,100,55,'color:var(--acc);letter-spacing:.12em')+
    T('title',title,120,350,600,360,U.len(title)<=8?U.fit(title,600,112,24):112,'font-family:var(--serif);font-weight:700;line-height:1.18;text-wrap:balance')+
    T('sub',meta.sub,120,760,600,150,30)+T('dates',meta.dates,120,973,600,60,25)+
    I(hero,810,70,990,650)+details.map((src,i)=>I(src,810+i*(990/details.length),750,990/details.length-18,260)).join('')

}}) }

/* variants/cover/frame-escape.js */
// cover／frame-escape：畫框留在後方，真實建築輪廓跨出上緣
// 設計教學來源：小紅書 6a142bc60000000037034fed
// 封面沒有 items，依 CONTRACT 不宣告 range；只用 meta.cuts 中與資料照片配對的去背
{ const U = M.util
M.add('cover', 'frame-escape', { needs: (p, m) => Object.values(m.cuts || {}).some(v => v && v.png) ? '' : '去背照片', name: '屋簷出框・建築海報', html: c => {
  const title = c.p.title || c.meta.title || '', en = c.p.en || c.meta.en || ''
  const candidates = [...new Set([c.p.img, c.meta.hero, ...(c.meta.pool || [])].filter(Boolean))]
  const src = candidates.find(s => { const v = c.meta.cuts?.[s]; return v?.png && v.w > 0 && v.h > 0 }) || candidates[0]
  const cut = c.meta.cuts?.[src], hasCut = !!(cut?.png && cut.w > 0 && cut.h > 0)
  const W = 1920 - 2 * 120, textW = W * .5, imageW = W * .54
  const imageH = hasCut ? Math.min(856, imageW * cut.h / cut.w) : 800
  const actualW = hasCut ? imageH * cut.w / cut.h : imageW
  const ix = 1800 - actualW, iy = 944 - imageH
  const frameX = hasCut ? ix + actualW * .3 : ix, frameY = hasCut ? iy + imageH * .26 : iy
  const frameW = 1800 - frameX, frameH = 944 - frameY
  const value = String(c.tx('title', title)), words = []
  for (const { segment } of new Intl.Segmenter('zh-TW', { granularity: 'word' }).segment(value)) {
    if (U.len(segment) === 1 && U.len(words.at(-1) || '') === 1) words[words.length - 1] += segment
    else words.push(segment)
  }
  // 在完整詞之間換行，保留原編輯鍵及 textContent，不把「跨境」切成兩半
  let split = 0, distance = Infinity, count = 0
  words.slice(0, -1).forEach((word, i) => { count += U.len(word); const d = Math.abs(count - U.len(value) / 2); if (d < distance) { split = i + 1; distance = d } })
  const rows = U.len(value) > 4 && split ? [words.slice(0,split).join(''), words.slice(split).join('')] : [value]
  const size = Math.min(...rows.map(row => U.fit(row, textW * .94, 233, 16)))
  const titleHTML = c.ed('title',title).replace(/>[^<]*<\/span>$/, `>${rows.map(row => `<span style="display:block">${U.esc(row)}</span>`).join('')}</span>`)
  const sub = c.meta.sub || '', dates = c.p.date || c.meta.dates || '', agency = c.meta.agency || ''
  const fit = `width:${actualW}px;height:${imageH}px;object-fit:${hasCut ? 'fill' : 'cover'}`
  return `<style>
  .t-cover.v-frame-escape{background:var(--paper);color:var(--ink)}
  .v-frame-escape::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent 0 3px,color-mix(in srgb,var(--ink) 2%,transparent) 3px 4px)}
  .v-frame-escape [contenteditable]{display:block}
  .v-frame-escape .fe-header{position:absolute;left:120px;top:80px;width:${textW}px;display:flex;align-items:center;justify-content:space-between;gap:40px}
  .v-frame-escape .fe-copy{position:absolute;left:120px;top:288px;width:${textW}px;height:552px;display:flex;flex-direction:column;justify-content:space-between}
  .v-frame-escape .fe-title{font-family:var(--serif);font-weight:900;line-height:1.12;letter-spacing:-.02em;text-wrap:balance;overflow-wrap:anywhere}
  .v-frame-escape .fe-sub{max-width:680px;font-family:var(--serif);line-height:1.7;text-wrap:balance;word-break:keep-all;overflow-wrap:anywhere}
  .v-frame-escape .fe-scene{position:absolute;inset:0;pointer-events:none}
  .v-frame-escape .fe-window{position:absolute;left:${frameX}px;top:${frameY}px;width:${frameW}px;height:${frameH}px;overflow:hidden;box-shadow:0 24px 48px -24px color-mix(in srgb,var(--ink) 38%,transparent)}
  .v-frame-escape .fe-window img{position:absolute;left:${ix-frameX}px;top:${iy-frameY}px;${fit}}
  .v-frame-escape .fe-cut{position:absolute;left:${ix}px;top:${iy}px;${fit}}
  .v-frame-escape .fe-foot{position:absolute;left:120px;right:120px;top:976px;border-top:1px solid var(--acc);padding-top:24px;display:flex;justify-content:space-between;align-items:center}
  .v-frame-escape .fe-scene.in{animation:coverFrameEscape .85s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*70ms)}
  @keyframes coverFrameEscape{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0)}}
  @media(prefers-reduced-motion:reduce){.v-frame-escape .in{animation:none!important}}
  </style>
  <div class="fe-scene in" style="--i:0">
    ${src ? `<div class="fe-window"><img class="hero" src="${U.esc(src)}" alt=""></div>` : ''}
    ${hasCut ? `<img class="fe-cut" src="${U.esc(cut.png)}" alt="">` : ''}
  </div>
  <div class="fe-header in" style="--i:1">
    ${en ? `<div style="font-size:${U.fit(c.tx('en', en),textW*.52,76,16)}px;line-height:1.1;font-weight:700;color:var(--acc)">${c.ed('en',en)}</div>` : ''}
    ${dates ? `<div style="font-size:${U.fit(c.tx('dates',dates),textW*.4,25,16)}px;line-height:1.4">${c.ed('dates',dates)}</div>` : ''}
  </div>
  <div class="fe-copy in" style="--i:2">
    ${title ? `<div class="fe-title" style="font-size:${size}px">${titleHTML}</div>` : ''}
    ${sub ? `<div class="fe-sub" style="font-size:${U.fit(c.tx('sub',sub),1280,31,16)}px">${c.ed('sub',sub)}</div>` : ''}
  </div>
  <div class="fe-foot in" style="--i:3">
    ${agency ? `<div style="font-size:${U.fit(c.tx('agency',agency),textW,25,16)}px">${c.ed('agency',agency)}</div>` : ''}
  </div>`
} }) }

/* variants/cover/frost.js */
// cover／frost：同一張照片，左邊一條霧面玻璃文字欄，右邊保留清晰實景，右緣直排英文地名。學自小紅書 6a6717b6（東山黃昏）
// 霧面欄＝同一張照片的模糊＋顆粒複本（不是色塊），所以顏色永遠跟照片一致。標題直疊：每行 2～3 字，行數依字數算。
{ const U = M.util
M.add('cover', 'frost', { name: '霧面文字欄', html: c => {
  const title = c.tx('title', c.meta.title), n = Math.max(1, Math.round(U.len(title)))
  const k = n <= 4 ? 2 : n <= 9 ? 3 : 4, rows = Math.ceil(n / k)              // 每行最多幾個字、幾行（實際斷行交給 balance，不留孤字）
  const COL = 720, size = Math.floor(Math.min(200, (COL - 160) / (k * 1.16), 470 / (rows * 1.22)))
  const sub = c.tx('sub', c.meta.sub), en = c.meta.en ? c.tx('en', c.meta.en) : ''
  const img = `src="${c.meta.hero}" alt="" style="position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:cover`
  return `<style>
  .t-cover.v-frost .col{position:absolute;left:0;top:0;width:${COL}px;height:1080px;overflow:hidden;box-shadow:24px 0 60px -10px rgba(0,0,0,.45)}
  .t-cover.v-frost .col.in{animation:cfSlide 1.1s cubic-bezier(.7,0,.2,1) both}
  @keyframes cfSlide{from{width:0}}
  .t-cover.v-frost .ttl{font-family:var(--serif);font-weight:700;color:#fff;line-height:1.22;letter-spacing:.16em;text-align:center;text-wrap:balance;margin:0 auto;text-shadow:0 2px 18px rgba(0,0,0,.25)}
  .t-cover.v-frost .ttl [contenteditable]{display:block}
  </style>
  <img class="hero" ${img}">
  <div class="col in">
    <img ${img};filter:blur(40px) brightness(.8) saturate(1.1);transform:scale(1.12)">
    <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(20,24,28,.18),rgba(20,24,28,.42))"></div>
    <svg class="ab" style="inset:0;width:${COL}px;height:1080px;opacity:.32;mix-blend-mode:overlay" aria-hidden="true"><filter id="cover-frost-g"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 1.4 -.2"/></filter><rect width="100%" height="100%" filter="url(#cover-frost-g)"/></svg>
    <div class="ab" style="left:80px;top:0;width:${COL - 160}px;height:1080px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff">
      ${en ? `<div class="in" style="font:500 20px var(--sans);letter-spacing:.42em;opacity:.8;--i:3">${c.ed('en', c.meta.en)}</div>` : ''}
      <div class="ttl in" style="margin-top:34px;font-size:${size}px;width:${Math.ceil(k * size * 1.16) + 6}px;--i:4">${c.ed('title', c.meta.title)}</div>
      <div class="in" style="margin-top:40px;width:${COL - 200}px;text-align:center;text-wrap:balance;word-break:keep-all;overflow-wrap:anywhere;font:500 ${U.fit(sub, (COL - 200) * 2, 26, 20)}px/1.7 var(--sans);opacity:.92;--i:5">${c.ed('sub', c.meta.sub)}</div>
      <div class="in" style="margin-top:22px;font:500 24px var(--sans);letter-spacing:.08em;opacity:.85;--i:6">${c.ed('dates', c.meta.dates)}</div>
      <div class="in" style="margin-top:34px;padding:10px 26px;background:var(--acc2);font:700 22px var(--serif);letter-spacing:.14em;--i:7">${c.ed('agency', c.meta.agency)}</div>
    </div>
  </div>
  ${en ? `<div class="ab in" style="right:60px;top:120px;height:840px;writing-mode:vertical-rl;text-orientation:upright;font:500 22px/1 var(--sans);letter-spacing:.9em;color:#fff;mix-blend-mode:difference;--i:8" aria-hidden="true">${U.esc(en)}</div>` : ''}`
} }) }

/* variants/cover/full.js */
// cover／full：由母片樣品拆出（2026-10-07）
{ const U = M.util
M.add('cover', 'full', { name: '滿版照片＋左下大標', range: [0, 99], html: c => `
    <img class="ab" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover">
    <div class="ab" style="inset:0;background:linear-gradient(20deg,rgba(10,14,16,.82) 0%,rgba(10,14,16,.35) 45%,rgba(10,14,16,0) 70%)"></div>
    <div class="ab in" style="left:120px;bottom:120px;width:1200px;color:#fff;--i:1">
      <div style="font-size:24px;letter-spacing:.5em;opacity:.8">${c.ed('en', c.meta.en)}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('title', c.meta.title), 1100, 150)}px;line-height:1.1;margin-top:18px">${c.ed('title', c.meta.title)}</div>
      <div style="font-size:28px;margin-top:24px;opacity:.9">${c.ed('sub', c.meta.sub)}　${c.ed('dates', c.meta.dates)}</div></div>
    <div class="ab" style="right:120px;bottom:126px;width:420px;text-align:right;color:#fff;font:700 ${U.fit(c.tx('agency',c.meta.agency),420,28,18)}px var(--serif);letter-spacing:.1em">${c.ed('agency', c.meta.agency)}</div>` }) }

/* variants/cover/knock.js */
// cover／knock：白板挖字，照片從大字裡透出來。學自小紅書 68a93212（上方白塊剪掉大字）、6a3680db（字形裡露出原照片）
// 做法：白板＋黑字設成「濾色」疊在照片上 → 白的地方全白、黑字的地方剛好露出底下的照片，字仍可直接點來改。
// 字裡透出的是同一張照片「主體那一段」（壓暗一階），亮天空的照片字也看得清楚。字數 2～7 一行、8 字以上兩行，字級照行長算。
{ const U = M.util
M.add('cover', 'knock', { name: '白板挖字・照片入字', html: c => {
  const title = c.tx('title', c.meta.title), n = Math.max(1, Math.round(U.len(title)))
  const lines = n <= 7 ? 1 : 2, per = Math.ceil(n / lines)
  const size = Math.min(lines === 1 ? (n <= 3 ? 400 : 330) : 250, Math.floor(1680 / (per * 1.04)))
  const top = 150, H = Math.round(top + lines * size * 1.05 + 40)        // 白板高度跟著標題長
  const sub = c.tx('sub', c.meta.sub)
  return `<style>
  .t-cover.v-knock .ko{position:absolute;left:0;top:0;width:1920px;background:#fff;mix-blend-mode:screen}
  .t-cover.v-knock .ko>div{position:absolute;left:112px;width:1700px;font-family:var(--serif);font-weight:900;color:#000;line-height:1.05;letter-spacing:.02em;text-wrap:balance}
  .t-cover.v-knock .ko [contenteditable]{display:block;caret-color:var(--acc)}
  .t-cover.v-knock .ko.in{animation:ckWipe 1.1s cubic-bezier(.7,0,.2,1) both}
  @keyframes ckWipe{from{clip-path:inset(0 0 100% 0)}}
  .t-cover.v-knock .dk{position:absolute;left:0;top:0;width:1920px;overflow:hidden}
  </style>
  <img class="ab hero" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover">
  <div class="dk" style="height:${H}px"><img src="${c.meta.hero}" alt="" style="position:absolute;left:0;top:${top - 20}px;width:1920px;height:${H - top + 20}px;object-fit:cover;object-position:50% 58%;filter:brightness(.62) contrast(1.3) saturate(1.25)"></div>
  <div class="ko in" style="height:${H}px"><div style="top:${top}px;font-size:${size}px">${c.ed('title', c.meta.title)}</div></div>
  <div class="ab in" style="left:120px;top:64px;display:flex;align-items:center;gap:22px;--i:2">
    <div class="serif" style="font-size:${U.fit(sub, 1300, 30, 20)}px;letter-spacing:.1em;color:var(--ink)">${c.ed('sub', c.meta.sub)}</div></div>
  <div class="ab" style="left:0;top:${H}px;width:1920px;height:1px;background:var(--acc)"></div>
  <div class="ab" style="left:0;right:0;bottom:0;height:260px;background:linear-gradient(0deg,rgba(8,14,20,.72),rgba(8,14,20,0))"></div>
  <div class="ab in" style="left:120px;bottom:84px;color:#fff;--i:4">
    ${c.meta.en ? `<div style="font:600 22px var(--sans);letter-spacing:.5em;opacity:.85">${c.ed('en', c.meta.en)}</div>` : ''}
    <div class="serif" style="font-size:34px;margin-top:10px;letter-spacing:.06em">${c.ed('dates', c.meta.dates)}</div></div>
  <div class="ab in" style="right:120px;bottom:90px;color:#fff;font:700 32px var(--serif);letter-spacing:.1em;--i:5">${c.ed('agency', c.meta.agency)}</div>`
} }) }

/* variants/cover/paper-ink.js */
// 封面・紙墨色塊：青森封面 A，44% 深色塊／右照片／苔綠窄條／破線金柱。
{const U=M.util,H=M.paperInk
M.add('cover','paper-ink',{name:'紙墨色塊',auto:false,html:c=>{
  const title=c.p.title||c.meta.title||'', sub=c.p.sub??c.meta.sub??'', photo=c.p.img??c.meta.hero
  const fs=U.fit(c.tx('title',title),610*2,152,48)
  const subTop=255+H.lines(c.tx('title',title),610,fs)*fs*1.15+28
  const dateTop=subTop+H.lines(c.tx('sub',sub),610,28)*44+80
  return H.style+`<style>
  .t-cover.v-paper-ink .pi-photo{position:absolute;left:44%;top:0;width:56%;height:100%;object-fit:cover}
  .t-cover.v-paper-ink .pi-shade{position:absolute;left:44%;right:0;inset-block:0;background:linear-gradient(258deg,#1015096b,#1015090d 34%,#10150957)}
  </style>
  ${photo?`<img class="pi-photo hero" src="${U.esc(photo)}" alt=""><div class="pi-shade"></div>`:''}
  <div class="ab" style="inset:0 auto 0 0;width:44%;background:var(--pi-deep)"></div>
  <div class="ab" style="left:44%;top:0;width:78px;height:1080px;background:var(--pi-moss)"></div>
  <div class="ab" style="left:calc(44% + 78px);top:180px;width:7px;height:720px;background:var(--acc)"></div>
  <div class="pi-copy" style="left:120px;top:132px;width:620px;font-size:28px;color:var(--acc);letter-spacing:.18em">${c.ed('en',c.meta.en||'')}</div>
  <div class="pi-copy pi-serif pi-title pi-reveal" data-shared="trip:title" style="left:120px;top:255px;width:610px;font-size:${fs}px;color:var(--paper)">${c.ed('title',title)}</div>
  <div class="pi-copy" style="left:120px;top:${subTop}px;width:610px;font-size:28px;color:#d5d2c4">${c.ed('sub',sub)}</div>
  <div class="ab" style="left:120px;top:${dateTop-30}px;width:440px;height:1px;background:#f1ecde3d"></div>
  <div class="pi-copy" style="left:${dateTop>770?300:120}px;top:${dateTop}px;width:${dateTop>770?430:610}px;font-size:28px;color:#d5d2c4">${c.ed('dates',c.meta.dates||'')}</div>
  <div class="pi-copy" style="left:120px;top:974px;width:610px;font-size:28px;color:#b9baaa">${c.ed('agency',c.meta.agency||'')}</div>`
  +H.decoration(c,'wave','left:-50px;bottom:34px;width:300px;opacity:.055')
  +H.decoration(c,'mountain','right:238px;top:104px;width:196px;opacity:.3')
  +H.decoration(c,'seal','left:120px;bottom:150px;width:124px')
},enter:(root,c,{settled,delay=0})=>settled?undefined:H.motion(H.titleMotion(root,delay))})
}

/* variants/cover/paper.js */
// cover／paper：左側剪紙層疊波浪邊＋直排大字（第一字壓一顆夕陽圓），右側滿版照片。學自小紅書 69d4f6c7（京都・東山）
// 波浪邊是兩組正弦疊出來的不規則曲線，同一條複製四層、逐層右移＋加深＋陰影＝剪紙層次。
// 標題直排：4 字以內一欄、5 字以上兩欄（右欄先讀），字級由欄高算；副標直排在標題右邊。
{ const U = M.util
const wave = (base, sh, ph) => { let d = 'M-20,-20'; for (let y = -20; y <= 1100; y += 20) { const x = base + sh + 34 * Math.sin(y / 150 + ph) + 16 * Math.sin(y / 53 + ph * 2.3); d += ` L${x.toFixed(1)},${y}` } return d + ' L-20,1100 Z' }
M.add('cover', 'paper', { name: '剪紙層疊・直排大字', html: c => {
  const title = c.tx('title', c.meta.title), n = Math.max(1, Math.round(U.len(title)))
  const cols = n <= 4 ? 1 : 2, perCol = Math.ceil(n / cols)
  const BASE = 740, s = Math.floor(Math.min(cols === 1 ? 260 : 220, 700 / (perCol * 1.04), (BASE - 300) / (cols * 1.12)))
  const tw = Math.ceil(cols * s * 1.12), sw = 96, total = tw + 56 + sw
  const x0 = Math.round(60 + (BASE - 60 - total) / 2), top = Math.round(540 - perCol * s * 1.04 / 2 - 40)
  const LAY = [['#5e3f27', 54, 1.9], ['#87603d', 36, 1.2], ['#b58b5d', 18, .55], ['var(--paper)', 0, 0]]
  return `<style>
  .t-cover.v-paper .lay.in{animation:cpIn 1s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*80ms)}
  @keyframes cpIn{from{transform:translateX(-260px)}}
  .t-cover.v-paper .vt{writing-mode:vertical-rl;font-family:var(--serif);font-weight:900;color:var(--ink);line-height:1.12;letter-spacing:.04em}
  .t-cover.v-paper .vt [contenteditable]{display:block}
  </style>
  <img class="ab hero" src="${c.meta.hero}" alt="" style="left:520px;top:0;width:1400px;height:1080px;object-fit:cover;object-position:55% 50%">
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">${LAY.map(([f, sh, ph], i) => `<path class="lay in" style="--i:${3 - i};filter:drop-shadow(6px 0 10px rgba(40,20,5,.35))" d="${wave(BASE, sh, ph)}" fill="${f}"/>`).join('')}</svg>
  <div class="ab vt in" style="left:${x0}px;top:${top}px;height:${Math.ceil(perCol * s * 1.04) + 4}px;width:${tw}px;font-size:${s}px;--i:3">${c.ed('title', c.meta.title)}</div>
  <div class="ab in" style="left:${x0 + tw + 56}px;top:${top + 20}px;height:${Math.max(420, Math.round(perCol * s * .9))}px;width:${sw}px;writing-mode:vertical-rl;font:600 ${U.fit(c.tx('sub', c.meta.sub), 2 * Math.max(420, Math.round(perCol * s * .9)) * .9, 26, 18)}px/1.8 var(--serif);letter-spacing:.08em;word-break:keep-all;overflow-wrap:anywhere;color:#4b3a2c;--i:4">${c.ed('sub', c.meta.sub)}</div>
  ${c.meta.en ? `<div class="ab in" style="left:${x0}px;top:${top + Math.ceil(perCol * s * 1.04) + 40}px;width:${tw}px;text-align:center;font:500 26px var(--serif);letter-spacing:.42em;color:#b3372b;--i:5">${c.ed('en', c.meta.en)}</div>` : ''}
  <div class="ab in" style="left:120px;bottom:70px;width:${BASE - 200}px;font:500 20px var(--sans);letter-spacing:.1em;color:#5b4a3b;--i:6">${c.ed('agency', c.meta.agency)}　·　${c.ed('dates', c.meta.dates)}</div>`
} }) }

/* variants/cover/photo-duet.js */
// cover/continuity: wide photograph and a second portrait continue into the index.
{ const U = M.util, H = M.continuity
M.add('cover', 'photo-duet', { name: '雙景序幕', order: 1000, html: c => {
  const spot = c.first('spot'), secondary = spot?.p.img || spot?.items.find(x => x.img)?.img
  return H.style + H.photo(c.p.img || c.meta.hero, 820, 0, 1100, 1080, 0, true) + H.photo(secondary, 120, 710, 360, 250, 125)
    + H.title(c, 'title', c.p.title || c.meta.title || '', 'trip:title', 120, 250, 620, U.fit(c.tx('title', c.p.title || c.meta.title || ''), 620, 112, 16))
    + `<div class="ct-copy" data-shared-copy style="left:120px;top:110px;width:620px;font-size:26px;color:var(--acc)">${c.ed('en', c.meta.en || '')}</div>
    <div class="ct-copy" data-shared-copy style="left:120px;top:520px;width:620px;font-size:28px">${c.ed('sub', H.clean(c.meta.sub))}</div>
    <div class="ct-copy" data-shared-copy style="left:120px;top:630px;width:620px;font-size:25px">${c.ed('dates', c.meta.dates || '')}</div>
    <div class="ct-copy" data-shared-copy style="left:120px;top:1000px;width:620px;font-size:22px">${c.ed('agency', c.meta.agency || '')}</div>`
} }) }

/* variants/cover/photo-halftone-duo.js */
// S21: source photo + separately prepared cobalt halftone; editable type.
M.add('cover','photo-halftone-duo',{ needs: (p, m) => (p.coverArt || M.coverRecipes?.[m.code] || {}).halftone ? '' : '這團的網點疊印素材',name:'照片・藍色網點疊印',auto:false,html:c=>M.coverArt.halftone(c)})

/* variants/cover/photo-map-overlay.js */
// S21: genuine map lines over the negative space of a genuine photo.
M.add('cover','photo-map-overlay',{ needs: (p, m) => (p.coverArt || M.coverRecipes?.[m.code] || {}).map ? '' : '這團的地圖疊層素材',name:'照片・地圖透明疊層',auto:false,html:c=>M.coverArt.map(c)})

/* variants/cover/quiet-field.js */
// cover／quiet-field：雪地巨字，讓照片的安靜處成為標題的留白
// 學自 收藏庫創意下一批-20261103／單-05／使用說明.md：左 35%、上 28%、下 25% 三種安全區
// 封面無 items，依 CONTRACT 不宣告 range。只標註本團看過的照片；陌生圖退回獨立文字區
{ const U = M.util
M.add('cover', 'quiet-field', { needs: (p, m) => p.safeZone || /^(kr-roof|ski-b|gbg-snow)\.jpg$/.test(String(p.img || m.hero || m.pool?.[0] || '').split('/').pop()) ? '' : '標好照片的留白位置（safeZone）', name: '靜域・雪地巨字', html: c => {
  const src = c.p.img || c.meta.hero || c.meta.pool?.[0]
  const file = String(src || '').split('/').pop()
  // 圖片配方是人工看過原圖後的構圖選擇，並非自動辨識地標
  const zone = ['left', 'top', 'bottom'].includes(c.p.safeZone) ? c.p.safeZone : file === 'kr-roof.jpg' ? 'left' : file === 'ski-b.jpg' ? 'top' : 'bottom'
  const snow = zone === 'bottom' && file === 'gbg-snow.jpg'
  const W = 1920, H = 1080, margin = 120, inner = W - margin * 2
  const vertical = zone === 'left', reserve = vertical ? W * .35 : H * (zone === 'top' ? .28 : .25)
  const copyW = vertical ? reserve - margin - 40 : inner
  const title = c.p.title || c.meta.title || '', sub = c.meta.sub || ''
  const en = c.p.en || c.meta.en || '', dates = c.p.date || c.meta.dates || '', agency = c.meta.agency || ''
  const value = String(c.tx('title', title))
  // 直幅安全區按完整詞排成三行；橫幅保留一行並按實際字長算字級
  const words = [...new Intl.Segmenter('zh-TW', {granularity:'word'}).segment(value)].map(w => w.segment)
  const rows = ['']
  const target = Math.max(2, Math.ceil(U.len(value) / 3))
  words.forEach(word => {
    if (vertical && rows.length < 3 && U.len(rows.at(-1)) >= target) rows.push('')
    rows[rows.length - 1] += word
  })
  const size = Math.min(...rows.map(row => U.fit(row, copyW, vertical ? 162 : snow ? 210 : zone === 'bottom' ? 164 : 188, 16)))
  const titleHTML = c.ed('title',title).replace(/>[^<]*<\/span>$/, `>${rows.map(row => `<span style="display:block">${U.esc(row)}</span>`).join('')}</span>`)
  const fallback = zone === 'bottom' && !snow
  const photoX = vertical ? reserve : 0, photoY = zone === 'top' ? reserve + 90 : fallback ? 140 : 0
  const photoW = W - photoX, photoH = snow ? 937 : zone === 'top' ? H - photoY : H - (vertical ? 0 : reserve) - photoY
  const copyY = vertical ? 292 : zone === 'top' ? 112 : H - reserve + (snow ? -45 : 8)
  return `<style>
  .t-cover.v-quiet-field{background:var(--paper);color:var(--ink)}
  .v-quiet-field [contenteditable]{display:block}
  .v-quiet-field .qf-photo{position:absolute;left:${photoX}px;top:${photoY}px;width:${photoW}px;height:${photoH}px;object-fit:${snow || vertical || fallback ? 'contain' : 'cover'};object-position:50% ${zone === 'top' ? '45%' : '50%'}}
  .v-quiet-field .qf-photo.in{animation:coverQuietField .85s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*70ms)}
  .v-quiet-field .qf-head{position:absolute;left:120px;right:${vertical ? W - reserve + 40 : margin}px;top:58px;display:flex;${vertical ? 'flex-direction:column;align-items:flex-start;gap:30px' : 'justify-content:space-between;align-items:baseline;gap:56px'}}
  .v-quiet-field .qf-head>div{min-width:0}
  .v-quiet-field .qf-copy{position:absolute;left:120px;top:${copyY}px;width:${copyW}px}
  .v-quiet-field .qf-title{font-family:var(--serif);font-weight:900;font-size:${size}px;line-height:1.07;letter-spacing:-.035em}
  .v-quiet-field .qf-sub{margin-top:${vertical ? 44 : 26}px;line-height:1.6;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance;font-size:${U.fit(c.tx('sub',sub),copyW * (vertical ? 2 : 1),vertical ? 25 : 27,16)}px}
  .v-quiet-field .qf-agency{${vertical ? 'position:absolute;left:120px;bottom:74px;width:'+copyW+'px;' : ''}font-size:${U.fit(c.tx('agency',agency),vertical ? copyW : inner*.27,25,16)}px;line-height:1.5}
  @keyframes coverQuietField{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}
  @media(prefers-reduced-motion:reduce){.v-quiet-field .in{animation:none!important}}
  </style>
  ${src ? `<img class="qf-photo hero in" src="${U.esc(src)}" alt="" style="--i:0">` : ''}
  <div class="qf-head in" style="--i:1">
    ${en ? `<div style="font-size:${U.fit(c.tx('en',en),vertical ? copyW : inner*.3,38,16)}px;font-weight:700;letter-spacing:.2em;color:var(--acc)">${c.ed('en',en)}</div>` : ''}
    ${dates ? `<div style="font-size:${U.fit(c.tx('dates',dates),vertical ? copyW : inner*.3,25,16)}px;line-height:1.5">${c.ed('dates',dates)}</div>` : ''}
    ${agency && !vertical ? `<div class="qf-agency">${c.ed('agency',agency)}</div>` : ''}
  </div>
  <div class="qf-copy in" style="--i:2">
    ${title ? `<div class="qf-title">${titleHTML}</div>` : ''}
    ${sub ? `<div class="qf-sub">${c.ed('sub',sub)}</div>` : ''}
  </div>
  ${agency && vertical ? `<div class="qf-agency in" style="--i:3">${c.ed('agency',agency)}</div>` : ''}`
} }) }

/* variants/cover/resort-imprint.js */
// cover/resort-imprint · M003 · 視覺研究 v1（2026-11-03）
// 刊頭、地名、章號、頁腳四角固定，照片縱深仍是主角；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('cover','resort-imprint',{name:'旅宿刊物・固定錨點',html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  return `<div style="position:absolute;inset:0;background:var(--ink);color:var(--paper)">`+
    T('agency',meta.agency,120,45,780,60,26,'color:var(--paper);letter-spacing:.14em')+
    T('dates',meta.dates,1120,45,680,60,26,'color:var(--paper);text-align:right')+
    I(p.img||meta.hero,120,135,1680,660,'cover')+
    T('title',p.title||meta.title,120,837,1120,170,87,'font-family:var(--serif);font-weight:700;color:var(--paper);line-height:1.2')+
    T('en',p.en||meta.en,1360,848,440,90,42,'color:var(--paper);text-align:right;letter-spacing:.12em')+
    T('sub',meta.sub,1360,946,440,85,22,'color:var(--paper);text-align:right')+`</div>`

}}) }

/* variants/cover/seam.js */
// cover／seam：S 形白板切開照片，大標橫跨分界——照片那側是白字、白板那側字裡透出照片（互斥）。學自小紅書 689f29e6（期待同行）
// 兩層同位置的標題：白字層只在照片區顯示；白板層是「濾色」白底黑字，只在白板區顯示，黑字處剛好露出底下照片。
// 字數 2～6 一行、7 字以上兩行，字級照行長算；標題中心對準 S 曲線的中段，保證每種長度都跨過分界。
{ const U = M.util
const S = 'M1180,-20 C760,330 1420,700 900,1100'                     // S 曲線（白板左緣）
const PANEL = `${S} L1940,1100 L1940,-20 Z`, REST = `M-20,-20 L1180,-20 C760,330 1420,700 900,1100 L-20,1100 Z`
M.add('cover', 'seam', { name: 'S 形分界・互斥大字', html: c => {
  const title = c.tx('title', c.meta.title), n = Math.max(1, Math.round(U.len(title)))
  const lines = n <= 6 ? 1 : 2, per = Math.ceil(n / lines)
  const size = Math.min(n <= 3 ? 320 : 270, Math.floor(1560 / (per * 1.05)))
  const w = Math.ceil(per * size * 1.05) + 10, h = Math.round(lines * size * 1.08)
  const left = Math.round(Math.min(1800 - w, Math.max(120, 1060 - w / 2))), top = Math.round(470 - h / 2)
  const box = `left:${left}px;top:${top}px;width:${w}px;font-size:${size}px`
  return `<style>
  .t-cover.v-seam .tt{position:absolute;font-family:var(--serif);font-weight:900;line-height:1.08;letter-spacing:.05em;text-align:center;text-wrap:balance}
  .t-cover.v-seam .tt [contenteditable]{display:block}
  .t-cover.v-seam .pan{position:absolute;inset:0;background:#fff;mix-blend-mode:screen;clip-path:path('${PANEL}')}
  .t-cover.v-seam .pan.in{animation:csOpen 1.2s cubic-bezier(.7,0,.2,1) both}
  @keyframes csOpen{from{transform:translateX(900px)}}
  </style>
  <img class="ab hero" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;object-position:30% 50%">
  <div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(10,16,22,.5),rgba(10,16,22,.36))"></div>
  <div class="ab" style="inset:0;clip-path:path('${REST}')" aria-hidden="true"><div class="tt" style="${box};color:#fff;text-shadow:0 4px 30px rgba(0,0,0,.3)">${U.esc(title)}</div></div>
  <div class="pan in"><div class="tt" style="${box};color:#000">${c.ed('title', c.meta.title)}</div></div>
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;pointer-events:none"><path d="${S}" fill="none" stroke="var(--acc)" stroke-width="3" transform="translate(36,0)"/></svg>
  <div class="ab in" style="left:120px;top:96px;color:#fff;font:700 30px var(--serif);letter-spacing:.12em;text-shadow:0 2px 14px rgba(0,0,0,.35);--i:3">${c.ed('agency', c.meta.agency)}</div>
  <div class="ab in" style="right:120px;bottom:96px;width:780px;text-align:right;color:var(--ink);--i:4">
    ${c.meta.en ? `<div style="font:600 20px var(--sans);letter-spacing:.42em;color:var(--acc)">${c.ed('en', c.meta.en)}</div>` : ''}
    <div class="serif" style="margin-top:12px;font-size:${U.fit(c.tx('sub', c.meta.sub), 1400, 28, 20)}px;letter-spacing:.06em;text-wrap:balance;word-break:keep-all;overflow-wrap:anywhere">${c.ed('sub', c.meta.sub)}</div>
    <div style="margin-top:10px;font-size:24px;color:var(--mute);letter-spacing:.06em">${c.ed('dates', c.meta.dates)}</div></div>`
} }) }

/* variants/cover/showreel-reflection.js */
// cover／showreel-reflection：逐鏡學自 BrandIntro＋Extruded（30fps、18層、先收角度再出副標）
{ const U=M.util, clean=s=>String(s||'').replace(/[，。,.；;]+$/u,'')
M.add('cover','showreel-reflection',{name:'宣傳片・立體字倒影',auto:false,chapterTransition:'showreel-tricolor',html:c=>{
 const title=clean(c.p.title||c.meta.title),en=clean(c.meta.en),src=c.p.img||c.meta.hero
 const word=en||title,size=U.fit(c.tx(en?'en':'title',word),1620,en?230:180,32)
 const type=en?'en':'title'
 return `<style>
 .v-showreel-reflection{background:var(--ink);color:var(--paper)}
 .sr-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
 .sr-shade{position:absolute;inset:0;background:linear-gradient(0deg,var(--ink) 2%,transparent 80%),linear-gradient(90deg,color-mix(in srgb,var(--ink) 92%,transparent),color-mix(in srgb,var(--ink) 35%,transparent))}
 .sr-title-wrap{position:absolute;left:150px;right:150px;top:260px;display:flex;justify-content:center;transform-origin:50% 50%}
 .sr-word{position:relative;font:900 ${size}px/1.1 ${en?'var(--sans)':'var(--serif)'};white-space:nowrap;letter-spacing:.02em;transform:perspective(1400px) rotateX(6deg)}
 .sr-depth{position:absolute;inset:0;pointer-events:none;user-select:none;color:color-mix(in srgb,var(--acc) 65%,var(--ink));white-space:nowrap}
 .sr-face{position:relative;color:var(--paper);text-shadow:0 2px 0 color-mix(in srgb,var(--paper) 60%,var(--acc))}
 .sr-reflect{position:absolute;left:0;top:106%;transform:scaleY(-1);color:var(--paper);opacity:.32;mask-image:linear-gradient(0deg,#000,transparent 85%);pointer-events:none;user-select:none}
 .sr-sub{position:absolute;left:150px;right:150px;top:705px;text-align:center;font:700 ${U.fit(c.tx('title',title),1620,64,24)}px/1.4 var(--serif)}
 .sr-meta{position:absolute;left:150px;right:150px;bottom:92px;display:flex;justify-content:space-between;gap:60px;border-top:1px solid color-mix(in srgb,var(--paper) 35%,transparent);padding-top:26px;font-size:26px}
 .sr-agency{position:absolute;left:150px;top:82px;font-size:24px;letter-spacing:.15em}
 </style>${src?`<img class="hero sr-photo" src="${U.esc(src)}" alt="">`:''}<div class="sr-shade"></div>
 <div class="sr-agency">${c.ed('agency',clean(c.meta.agency))}</div>
 <div class="sr-title-wrap"><div class="sr-word">${Array.from({length:18},(_,i)=>{const k=18-i;return `<div class="sr-depth" aria-hidden="true" style="left:${k*.9}px;top:${k*1.5}px;opacity:${.35+i*.035}"></div>`}).join('')}<div class="sr-face">${c.ed(type,word)}</div><div class="sr-reflect" aria-hidden="true"></div></div></div>
 ${en?`<div class="sr-sub">${c.ed('title',title)}</div>`:''}<div class="sr-meta"><div>${c.ed('dates',clean(c.meta.dates))}</div><div>${c.ed('sub',clean(c.meta.sub))}</div></div>`
},enter:(root,c,state)=>{
 const face=root.querySelector('.sr-face'),copies=root.querySelectorAll('.sr-depth,.sr-reflect');const sync=()=>copies.forEach(e=>e.textContent=face.textContent);sync();face.addEventListener('input',sync)
 const sequence=M.showreel.enter(root,state,[
 {selector:'.sr-title-wrap',at:0,duration:533,frames:[{transform:'scale(1.35)'},{transform:'scale(1)'}]},
 {selector:'.sr-word',at:0,duration:733,frames:[{transform:'perspective(1400px) rotateX(34deg)'},{transform:'perspective(1400px) rotateX(6deg)'}]},
 {selector:'.sr-sub',at:467,duration:333,frames:[{opacity:0},{opacity:1}]},
 {selector:'.sr-meta',at:1867,duration:400,frames:[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}]}
 ])
 return {finish:sequence.finish,cleanup(){face.removeEventListener('input',sync);sequence.cleanup()}}
}})
}

/* variants/cover/split.js */
// cover／split：由母片樣品拆出（2026-10-07）
{ const U = M.util
M.add('cover', 'split', { name: '直排大字＋照片窗', range: [0, 99], html: c => `
    <div class="ab" style="left:0;top:0;width:760px;height:1080px;background:var(--acc)"></div>
    <img class="ab in" src="${c.meta.hero}" alt="" style="left:560px;top:120px;width:1240px;height:840px;object-fit:cover;box-shadow:0 40px 80px -30px rgba(0,0,0,.6);--i:1">
    <div class="ab in serif" style="left:150px;top:120px;height:840px;writing-mode:vertical-rl;color:#fff;font-size:${Math.min(150, Math.floor(800 / (Math.max(1, U.len(c.tx('title', c.meta.title))) * 1.16)))}px;letter-spacing:.12em;--i:2">${c.ed('title', c.meta.title)}</div>
    <div class="ab" style="left:360px;top:130px;writing-mode:vertical-rl;color:#ffffffcc;font-size:26px;letter-spacing:.3em;height:820px">${c.ed('dates', c.meta.dates)}</div>
    <div class="ab" style="left:560px;top:990px;font:700 28px var(--serif)">${c.ed('agency', c.meta.agency)}　<span style="font-weight:400;font-size:22px;color:var(--mute)">${c.ed('sub', c.meta.sub)}</span></div>` }) }

/* variants/cover/staggered-strips.js */
// 階梯三幅照片與大字分佔版心，去掉原作漸層、浮球與永久 will-change；照片數量照資料計算
{ const U = M.util
M.add('cover', 'staggered-strips', { name: '階梯三幅・城市開場', html: c => {
  const photos = [...new Set([c.p.img || c.meta.hero, ...(c.meta.pool || [])].filter(Boolean))].slice(0, 3)
  const n = photos.length, gap = 24, w = n ? (840 - gap * (n - 1)) / n : 0
  const clean = s => String(s || '').replace(/[，。；、,.!?！？]+$/u, '')
  const title = clean(c.p.title || c.meta.title), tw = n ? 760 : 1680
  return `<style>
.v-staggered-strips{background:var(--acc);color:var(--paper)}
.v-staggered-strips::before{content:"";position:absolute;inset:0;background:radial-gradient(color-mix(in srgb,var(--paper) 4%,transparent) .8px,transparent 1px);background-size:8px 8px;pointer-events:none}
.v-staggered-strips .ss-image{margin:0;overflow:hidden;border-radius:14px;box-shadow:0 24px 48px color-mix(in srgb,var(--ink) 28%,transparent)}
.v-staggered-strips .ss-image img{width:100%;height:100%;object-fit:cover;display:block}
.v-staggered-strips .ss-image.in{animation:cover-strips-open .85s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--i)*90ms)}
.v-staggered-strips .ss-copy.in{animation:cover-strips-type .55s .18s ease-out both}
@keyframes cover-strips-open{from{clip-path:inset(100% 0 0);transform:translateY(44px)}to{clip-path:inset(0);transform:none}}
@keyframes cover-strips-type{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.v-staggered-strips .in{animation:none!important}}
</style>
<div class="ab" style="left:120px;right:120px;top:66px;display:flex;justify-content:space-between;gap:64px;font-size:24px;line-height:1.5">
${c.meta.agency ? `<span>${c.ed('agency', clean(c.meta.agency))}</span>` : '<span></span>'}
${c.meta.dates ? `<span>${c.ed('dates', clean(c.meta.dates))}</span>` : ''}</div>
<div class="ab ss-copy in" style="left:120px;top:260px;width:${tw}px">
${c.meta.en ? `<div style="font-size:${U.fit(c.tx('en', c.meta.en), tw, 148, 28)}px;line-height:1.05;font-weight:700;letter-spacing:-.025em">${c.ed('en', c.meta.en)}</div>` : ''}
<div class="serif" style="margin-top:44px;font-size:${U.fit(c.tx('title', title), tw * 2, 112, 36)}px;line-height:1.3;text-wrap:balance">${c.ed('title', title)}</div>
${c.meta.sub ? `<div style="margin-top:40px;max-width:700px;font-size:28px;line-height:1.75">${c.ed('sub', clean(c.meta.sub))}</div>` : ''}</div>
${photos.map((src, i) => `<figure class="ab ss-image in" style="left:${960 + i * (w + gap)}px;top:${188 + i * 64}px;width:${w}px;height:${n === 1 ? 720 : 650}px;--i:${i}"><img${i === 0 ? ' class="hero"' : ''} src="${U.esc(src)}" alt=""></figure>`).join('')}`
} }) }

/* variants/cover/strips.js */
// cover／strips：整張照片蒙一層霧，右側幾根錯落圓角長條「擦掉霧」露出清晰原照。學自小紅書 6a6ff810（向天而立的紅磚塔）、6921a9ac
// 長條裡的照片跟底圖同座標（等於開窗），所以條與條之間景物是連續的。（原作還把去背主角疊上來；試過屋簷去背，主角太大把長條全蓋掉，所以這版只開窗。）
// 標題左側直疊：字少一行、字多兩到三行（balance 斷行，不留孤字），字級照最長一行算。
{ const U = M.util
M.add('cover', 'strips', { name: '霧面開窗長條', html: c => {
  const src = c.meta.hero
  const title = c.tx('title', c.meta.title), n = Math.max(1, Math.round(U.len(title)))
  const lines = n <= 4 ? 1 : n <= 8 ? 2 : 3, per = Math.ceil(n / lines)
  const size = Math.floor(Math.min(200, 700 / (per * 1.04), 520 / (lines * 1.12)))
  const full = 'width:1920px;height:1080px;object-fit:cover;object-position:50% 30%'
  // 四根長條：由上而下，左端錯落、右端出血；高度與間距照畫面高平均分
  const BARS = [[1010, 150], [1130, 345], [880, 540], [1060, 735]].map(([x, y]) => ({ x, y, w: 1990 - x, h: 150 }))
  return `<style>
  .t-cover.v-strips .bar{position:absolute;overflow:hidden;border-radius:75px 0 0 75px;box-shadow:0 18px 40px -18px rgba(0,0,0,.35)}
  .t-cover.v-strips .bar img{position:absolute;${full}}
  .t-cover.v-strips .bar.in{animation:csBar 1s cubic-bezier(.7,0,.2,1) both;animation-delay:calc(var(--i)*90ms)}
  @keyframes csBar{from{clip-path:inset(0 0 0 100%)}}
  .t-cover.v-strips .ttl{font-family:var(--serif);font-weight:900;color:var(--ink);line-height:1.12;letter-spacing:.04em;text-wrap:balance}
  .t-cover.v-strips .ttl [contenteditable]{display:block}
  </style>
  <img class="ab hero" src="${src}" alt="" style="inset:0;${full};filter:blur(3px) saturate(.8)">
  <div class="ab" style="inset:0;background:linear-gradient(100deg,rgba(247,243,234,.9) 0%,rgba(247,243,234,.82) 45%,rgba(247,243,234,.6) 100%)"></div>
  ${BARS.map((b, i) => `<div class="bar in" style="left:${b.x}px;top:${b.y}px;width:${b.w}px;height:${b.h}px;--i:${i}"><img src="${src}" alt="" style="left:${-b.x}px;top:${-b.y}px"></div>`).join('')}
  <div class="ab in" style="left:120px;top:${Math.round(540 - (lines * size * 1.12) / 2 - 70)}px;width:780px;--i:2">
    ${c.meta.en ? `<div style="font:600 22px var(--sans);letter-spacing:.42em;color:var(--acc2)">${c.ed('en', c.meta.en)}</div>` : ''}
    <div style="position:relative;margin-top:26px">
      <div class="ttl" style="position:relative;font-size:${size}px;width:${Math.ceil(per * size * 1.04) + 8}px">${c.ed('title', c.meta.title)}</div></div>
    <div style="display:flex;gap:18px;margin-top:40px;align-items:stretch">
      <div><div class="serif" style="font-size:${U.fit(c.tx('sub', c.meta.sub), 1300, 28, 20)}px;line-height:1.5;letter-spacing:.04em;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance;max-width:680px">${c.ed('sub', c.meta.sub)}</div>
      <div style="margin-top:8px;font-size:24px;color:var(--mute)">${c.ed('dates', c.meta.dates)}</div></div></div></div>
  <div class="ab in" style="left:120px;bottom:80px;font:700 26px var(--serif);letter-spacing:.14em;color:var(--ink);--i:5">${c.ed('agency', c.meta.agency)}</div>`
} }) }

/* variants/cover/type-broadsheet.js */
// cover／type-broadsheet：橫跨版心的中文巨字，下方兩幅小景作註腳
// 設計教學來源：小紅書 6946c194000000001e00691b
// 封面無 items，依 CONTRACT 不宣告 range；照片欄數與字級依實際資料計算
{ const U = M.util
M.add('cover', 'type-broadsheet', { name: '巨字海報・雙景落款', html: c => {
  const title = c.p.title || c.meta.title || '', en = c.p.en || c.meta.en || ''
  const sub = c.meta.sub || '', dates = c.meta.dates || '', agency = c.meta.agency || ''
  const hero = c.p.img || c.meta.hero || c.meta.pool?.[0]
  const second = c.p.img2 || c.meta.pool?.find(src => src !== hero)
  const photos = hero ? [hero, ...(second ? [second] : [])] : []
  const W = 1920 - 120 * 2, photoW = Math.round(W * .55), gap = 80, copyW = W - photoW - gap
  const titleSize = U.fit(c.tx('title', title), W, 291, 16)
  // 落款＝朱印：印文取 seal 欄位，沒有就取承辦公司名去掉「旅行社／有限公司」等字尾的前四字；壓在第一張照片左上角
  const seal = c.p.seal || c.meta.seal || agency.replace(/(股份)?有限公司|旅行社|旅遊|國際|整合行銷|\s/g, '').slice(0, 4)
  const sealN = U.len(c.tx('seal', seal)), sealX = 120 + copyW + gap - 70
  return `<style>
  .v-type-broadsheet .tb-seal{left:${sealX}px;top:592px;width:140px;height:140px;display:grid;place-items:center;background:var(--acc2,#b3372b);color:var(--paper);font-family:var(--serif);font-weight:900;font-size:${sealN > 2 ? 46 : 58}px;line-height:1.05;writing-mode:vertical-rl;letter-spacing:.04em;border-radius:6px;box-shadow:inset 0 0 0 6px var(--acc2,#b3372b),inset 0 0 0 9px color-mix(in srgb,var(--paper) 70%,transparent);transform:rotate(-4deg);z-index:3}
  .v-type-broadsheet .tb-seal.in{animation:tbStamp .55s cubic-bezier(.2,.8,.2,1) both;animation-delay:1.1s}
  @keyframes tbStamp{from{opacity:0;transform:scale(1.12) rotate(-7deg)}}
  .t-cover.v-type-broadsheet{background:var(--paper);color:var(--ink)}
  .t-cover.v-type-broadsheet::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent 0 3px,color-mix(in srgb,var(--ink) 3%,transparent) 3px 4px)}
  .v-type-broadsheet [contenteditable]{display:block}
  .v-type-broadsheet .tb-head{position:absolute;left:120px;right:120px;top:96px;display:flex;justify-content:space-between;align-items:baseline;gap:80px}
  .v-type-broadsheet .tb-title{position:absolute;left:120px;right:120px;top:248px;height:320px;display:flex;align-items:center;font-family:var(--serif);font-weight:900;line-height:1.12;white-space:nowrap;letter-spacing:-.025em}
  .v-type-broadsheet .tb-bottom{position:absolute;left:120px;right:120px;top:624px;height:352px;display:grid;grid-template-columns:${copyW}px ${photoW}px;gap:${gap}px}
  .v-type-broadsheet .tb-copy{display:flex;flex-direction:column;justify-content:space-between;gap:32px}
  .v-type-broadsheet .tb-sub{font-family:var(--serif);font-weight:700;line-height:1.65;text-wrap:balance;word-break:keep-all;overflow-wrap:anywhere}
  .v-type-broadsheet .tb-photos{display:grid;grid-template-columns:${photos.length > 1 ? '2fr 1fr' : '1fr'};gap:16px;height:100%;min-width:0}
  .v-type-broadsheet .tb-photos img{width:100%;height:352px;object-fit:cover;min-width:0}
  .v-type-broadsheet .tb-title.in,.v-type-broadsheet .tb-photos.in{animation:coverBroadsheetCut .7s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*90ms)}
  @keyframes coverBroadsheetCut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
  @media(prefers-reduced-motion:reduce){.v-type-broadsheet .in{animation:none!important}}
  </style>
  <div class="tb-head in" style="--i:0">
    ${en ? `<div style="color:var(--acc);font-size:${U.fit(c.tx('en', en), copyW, 49, 16)}px;letter-spacing:.16em;font-weight:700">${c.ed('en', en)}</div>` : ''}
    ${dates ? `<div style="font-size:${U.fit(c.tx('dates', dates), photoW, 31, 16)}px;line-height:1.4">${c.ed('dates', dates)}</div>` : ''}
  </div>
  ${title ? `<div class="tb-title in" style="font-size:${titleSize}px;--i:1">${c.ed('title', title)}</div>` : ''}
  <div class="tb-bottom">
    <div class="tb-copy in" style="--i:2">
      ${sub ? `<div class="tb-sub" style="font-size:${U.fit(c.tx('sub', sub), copyW * 2, 39, 16)}px">${c.ed('sub', sub)}</div>` : ''}
      ${agency ? `<div style="font-size:${U.fit(c.tx('agency', agency), copyW, 25, 16)}px;line-height:1.4;color:var(--acc)">${c.ed('agency', agency)}</div>` : ''}
    </div>
    <div class="tb-photos in" style="--i:2">${photos.map((src, i) => `<img${i === 0 ? ' class="hero"' : ''} src="${U.esc(src)}" alt="">`).join('')}</div>
  </div>
  ${seal && photos.length ? `<div class="ab tb-seal in">${c.ed('seal', seal)}</div>` : ''}`
} }) }

/* variants/cover/wall.js */
// cover／wall：整團照片排成傾斜的照片牆，一行一行錯位滑進來，上下壓深色漸層放標題。學自小紅書 6a584757（京都晚秋五日，劇照牆）
// 照片從 meta.pool 依序取（不夠就循環），行數、每行張數由畫布對角線長度算出，照片多少都鋪得滿。
{ const U = M.util
M.wallKit = function (pool, { rot = -14, h = 250, gap = 16 } = {}) {
  const P = pool && pool.length ? pool : [], W = 2900, rows = Math.ceil(1900 / (h + gap)), out = []
  let k = 0
  for (let r = 0; r < rows; r++) {
    const off = (r % 2 ? -.5 : 0) * 430, y = r * (h + gap)
    let x = off, i = 0
    while (x < W) { const w = [430, 360, 500, 400][(r + i) % 4]; out.push(`<img src="${P[k++ % P.length]}" alt="" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:cover">`); x += w + gap; i++ }
    out.push('')
  }
  // 每一行包成一條，給進場動畫（奇偶行反方向滑入）
  const rowsHtml = []; let buf = []
  for (const s of out) { if (s === '') { rowsHtml.push(buf.join('')); buf = [] } else buf.push(s) }
  return `<div style="position:absolute;left:${(1920 - W) / 2}px;top:${(1080 - rows * (h + gap)) / 2}px;width:${W}px;height:${rows * (h + gap)}px;transform:rotate(${rot}deg)">${rowsHtml.map((r, i) => `<div class="wrow in" style="position:absolute;inset:0;--i:${i};--d:${i % 2 ? 1 : -1}">${r}</div>`).join('')}</div>`
}
M.add('cover', 'wall', { name: '傾斜照片牆', html: c => {
  const title = c.tx('title', c.meta.title), sub = c.tx('sub', c.meta.sub)
  const size = U.fit(title, 1020, 160, 64)
  return `<style>
  .t-cover.v-wall{background:#14100e}
  .t-cover.v-wall .wrow.in{animation:cwRow 1.2s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*60ms)}
  @keyframes cwRow{from{transform:translateX(calc(var(--d)*260px));opacity:0}}
  .t-cover.v-wall .ft{display:flex;justify-content:center;gap:0;color:#fff}
  .t-cover.v-wall .ft>div{padding:0 56px;text-align:center}
  .t-cover.v-wall .ft>div+div{border-left:1px solid rgba(255,255,255,.35)}
  </style>
  <div class="ab" style="inset:0;overflow:hidden">${M.wallKit([c.meta.hero, ...(c.meta.pool || []).filter(s => s !== c.meta.hero)])}</div>
  <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(22,14,10,.94) 0%,rgba(22,14,10,.55) 30%,rgba(22,14,10,.25) 55%,rgba(22,14,10,.6) 78%,rgba(22,14,10,.95) 100%)"></div>
  <div class="ab in" style="left:120px;top:70px;width:1060px;color:#fff;--i:2">
    ${c.meta.en ? `<div style="font:600 20px var(--sans);letter-spacing:.42em;color:#e9c98f">${c.ed('en', c.meta.en)}</div>` : ''}
    <div class="serif" style="margin-top:14px;font-size:${size}px;line-height:1.12;letter-spacing:.04em">${c.ed('title', c.meta.title, 'style="display:block"')}</div></div>
  <div class="ab in" style="right:120px;top:${size > 100 ? 118 : 96}px;width:560px;color:#fff;font-size:${U.fit(sub, 1600, 28, 20)}px;line-height:1.7;opacity:.92;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance;--i:3">${c.ed('sub', c.meta.sub)}</div>
  <div class="ab in ft" style="left:0;right:0;bottom:84px;--i:5">
    <div><div class="serif" style="font-size:40px;color:#e9c98f">${c.ed('dates', c.meta.dates)}</div><small style="display:block;margin-top:8px;font-size:18px;opacity:.7;letter-spacing:.2em">${c.ed('l1', '出發日期')}</small></div>
    <div><div class="serif" style="font-size:40px">${c.ed('agency', c.meta.agency)}</div><small style="display:block;margin-top:8px;font-size:18px;opacity:.7;letter-spacing:.2em">${c.ed('l2', '承辦')}</small></div></div>`
} }) }

/* variants/day/_kit.js */
// day／_kit：每日行程各版本共用的零件（不是版本，不呼叫 M.add）。檔名底線開頭＝接檔時排在最前面。
// 動畫：每個會動的元素都掛 class="in"，驗收的 static 模式（.in{animation:none!important}）就會全部停住。
{ const U = M.util, W = 1920, H = 1080
  const rng = seed => { let a = (seed * 2654435761) >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }
  const f1 = v => v.toFixed(1)
  const smooth = p => { let d = ''; for (let i = 0; i < p.length - 1; i++) { const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2
    d += ` C${f1(p1[0] + (p2[0] - p0[0]) / 6)},${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)},${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])},${f1(p2[1])}` } return d }
  const pts = (edge, side, shift, step = 40) => { const P = []; for (let y = -40; y <= H + 40; y += step) P.push([edge(y) + shift, y]); return side === 'right' ? P.map(p => [W - p[0], p[1]]) : P }
  const panel = (edge, side = 'left', shift = 0) => { const P = pts(edge, side, shift), x0 = side === 'right' ? W + 10 : -10; return `M${x0},${P[0][1]} L${f1(P[0][0])},${P[0][1]}` + smooth(P) + ` L${x0},${P[P.length - 1][1]} Z` }
  const line = (edge, side = 'left', shift = 0) => { const P = pts(edge, side, shift); return `M${f1(P[0][0])},${P[0][1]}` + smooth(P) }
  const EDGE = {
    scurve: (top, bot, bow) => y => { const t = y / H; return W * (top + (bot - top) * t) + bow * Math.sin(t * Math.PI * 2) },
    arc: (reach, R, cyk) => { const cx = W * reach - R, cy = H * cyk; return y => cx + Math.sqrt(Math.max(0, R * R - (y - cy) ** 2)) },
    wave: (base, seed = 3, jit = 0) => { const r = rng(seed), n = Math.ceil((H + 80) / 120) + 1, drift = r() * 6.3, big = 70 + r() * 40
      const ctrl = Array.from({ length: n }, (_, k) => Math.sin(k * .55 + drift) * big * (.5 + r() * .6)), jr = rng(seed + jit), c = ctrl.map(v => v + (jr() - .5) * jit)
      return y => { const t = (y + 40) / 120, k = Math.max(0, Math.min(n - 2, Math.floor(t))), f = t - k, e = f * f * (3 - 2 * f); return W * base + c[k] * (1 - e) + c[k + 1] * e } }
  }
  const ZH = '〇一二三四五六七八九十'
  const zh = n => n <= 10 ? ZH[n] : n < 20 ? '十' + ZH[n - 10] : ZH[Math.floor(n / 10)] + '十' + (n % 10 ? ZH[n % 10] : '')

  // 標題：有逗號就在逗號處斷成兩行（逗號藏起來，改字時還在）；沒有逗號而太長就自然折兩行。回傳 html、字級、行數
  function title(c, w, base = 66, min = 30) {
    const t = c.tx('h', c.p.title || ''), parts = t.split(/[，,、]/).filter(s => s.trim())
    let fs, nl
    if (parts.length > 1) { const L = [parts[0], parts.slice(1).join('，')]; fs = Math.min(base, ...L.map(l => U.fit(l, w, base, 16))); nl = 2 }
    else { fs = U.fit(t, w, base, 16); nl = 1 }
    if (fs < Math.max(min, base * .75)) { fs = Math.max(min, Math.min(base, U.fit(t, w * 1.9, base, 16))); nl = Math.max(1, Math.ceil(U.len(t) * fs * 1.06 / w)) }
    const brk = parts.length > 1 && nl === 2 && fs >= min
    const html = brk ? c.ed('h', c.p.title).replace(/([，,、])/, '<i hidden>$1</i><br>') : c.ed('h', c.p.title)
    return { html, fs, nl, h: nl * fs * 1.26 }
  }
  const kick = (c, color = 'var(--acc)') => `<div class="dk-kick" style="color:${color}">${c.ed('k', '第' + zh(c.p.n || 1) + '天　' + (c.p.date || ''))}</div>`
  // 時間欄：一半以上有時間＝顯示時間（空的留白）；否則顯示序號，有時間的那幾項把時間跟在字後面
  const timed = c => { const k = c.items.filter(it => it.time).length; return k > 0 && k * 2 >= c.n }
  const label = (c, i) => timed(c) ? (c.items[i].time || '') : U.no(i)
  const tail = (c, i) => !timed(c) && c.items[i].time ? `<small class="dk-tm">${U.esc(c.items[i].time)}</small>` : ''
  // 項目清單：依數量與可用高度挑字級（34→19），估每列行數，回傳 html 與實際估高
  function rows(c, x, y, w, maxH, o = {}) {
    const lw = timed(c) ? 92 : 64, gap = 24
    let fs = c.n <= 4 ? 34 : c.n <= 6 ? 30 : 26, pad = 12, est = 0
    const height = size => c.items.reduce((a, it, i) => a + Math.max(1, Math.ceil(U.len(c.tx('it' + i, it.t) + (tail(c, i) ? ' 00:00' : '')) * size * 1.04 / (w - lw - gap))) * size * 1.5 + pad * 2 + 1, 0)
    for (; fs >= 19; fs--) { pad = Math.round(fs * (c.n > 6 ? .3 : .46)); est = height(fs); if (est <= maxH) break }
    fs = Math.max(19, fs)
    // 少項用較大的字與節制的列間留白，不把一整欄硬拉成等高大格。
    pad = Math.min(26, pad + Math.max(0, Math.floor((maxH - height(fs)) / Math.max(1, c.n * 3))))
    est = height(fs)
    const body = c.items.map((it, i) => `<div class="in ${o.cls || ''}" style="padding:${pad}px 0;--i:${i + 3}"><b style="width:${lw}px;font-size:${Math.max(17, fs - 4)}px">${U.esc(label(c, i))}</b><span style="font-size:${fs}px;line-height:1.5">${c.ed('it' + i, it.t)}${tail(c, i)}</span></div>`).join('')
    return { html: `<div class="ab dk-rows${o.dark ? ' dk-dark' : ''}" style="left:${x}px;top:${y}px;width:${w}px;gap:0">${body}</div>`, h: est, fs }
  }
  const hasSnow = c => /雪/.test((c.tx('h', c.p.title || '')) + c.items.map(it => it.t).join(''))
  // 下雪（中山國小 D4）：那天的字提到雪才下；落兩輪就停，不無限循環
  function snow(c) {
    if (!hasSnow(c)) return ''
    const r = rng(17 + (c.p.n || 1)); let s = ''
    for (let k = 0; k < 110; k++) { const d = 9 + r() * 9; s += `<circle class="in" cx="${f1(r() * W)}" cy="${f1(r() * H)}" r="${f1(1.2 + r() * 3)}" style="animation:dk-fall ${f1(d)}s linear ${f1(-r() * d)}s 2 both;--dx:${f1((r() - .5) * 80)}px"/>` }
    return `<svg class="ab dk-snow" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;pointer-events:none" aria-hidden="true"><g fill="#fff" fill-opacity=".85">${s}</g></svg>`
  }
  const card = (src, x, y, w, h, rad, extra = '', cls = '') => src ? `<div class="dk-card ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${rad};${extra}"><img src="${src}" alt=""></div>` : ''
  const CSS = `<style>
.dk-kick{display:flex;align-items:center;gap:16px;font:600 24px var(--serif);letter-spacing:.14em}
.dk-h{font-family:var(--serif);font-weight:700;line-height:1.26;letter-spacing:.04em;text-wrap:balance}
.dk-rows{display:flex;flex-direction:column}
.dk-rows>div{display:flex;gap:24px;align-items:baseline;border-top:1px solid #c9cdd0}
.dk-rows>div:last-child{border-bottom:1px solid #c9cdd0}
.dk-rows b{flex:none;color:var(--acc);font-weight:500;font-variant-numeric:tabular-nums;font-family:var(--sans)}
.dk-tm{margin-left:12px;font-size:.78em;color:var(--acc);font-variant-numeric:tabular-nums}
.dk-dark>div{border-color:#ffffff40!important;color:#fff}.dk-dark b,.dk-dark .dk-tm{color:#f3d58a}
.dk-card{position:absolute;overflow:hidden;border:7px solid #fff;box-shadow:0 34px 60px -18px rgba(0,0,0,.6),0 4px 12px rgba(0,0,0,.18)}
.dk-card img{width:100%;height:100%;object-fit:cover;display:block}
@keyframes dk-fall{from{transform:translate(0,-1120px);opacity:0}6%{opacity:1}to{transform:translate(var(--dx),1120px)}}
@keyframes dk-left{from{transform:translateX(-160px);opacity:0}}
@keyframes dk-paper{from{transform:translateX(220px);opacity:0}}
@keyframes dk-rise{from{transform:translateY(120px);opacity:0}}
@keyframes dk-slideR{from{opacity:0;transform:translateX(-50px)}}
@keyframes dk-wipe{from{clip-path:inset(0 100% 0 0)}}
@keyframes dk-drop{from{opacity:0;transform:translateY(-36px)}}
@keyframes dk-arcin{from{transform:translateX(-500px)}}
@keyframes dk-settle{from{transform:translate(var(--sx),var(--sy)) rotate(var(--sr)) scale(1.1);opacity:0}}
@keyframes dk-soft{from{opacity:0}}
@keyframes dk-draw{from{stroke-dashoffset:1}}
@keyframes dk-sweep{from{background-position:130% 0}to{background-position:-40% 0}}
@keyframes dk-push{from{transform:scale(1.12)}}
@media (prefers-reduced-motion:reduce){.slide .in{animation:none!important}}
</style>`
  M.dayKit = { W, H, rng, smooth, panel, line, EDGE, zh, title, kick, timed, label, tail, rows, snow, hasSnow, card, CSS, f1 }
}

/* variants/day/arcv.js */
// 標題有逗號就排成兩直行；第二張照片做成膠囊卡從四散落回照片那側。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'arcv', { order: 3, name: '圓弧＋直排大字', range: [1, 9], html: c => {
  const k = K(), p = c.p, E = k.EDGE.arc(.53, 1400, .5)
  const t = c.tx('h', p.title || ''), parts = t.split(/[，,、]/).filter(s => s.trim()), cols = parts.length > 1 ? 2 : 1
  const longest = cols > 1 ? Math.max(U.len(parts[0]), U.len(parts.slice(1).join('，'))) : U.len(t)
  const vfs = Math.max(40, Math.min(76, Math.floor(860 / (longest * 1.1)))), vw = Math.ceil(cols * vfs * 1.2)
  const vt = cols > 1 ? c.ed('h', p.title).replace(/([，,、])/, '<i hidden>$1</i><br>') : c.ed('h', p.title)
  const lx = 110 + vw + 56, lw = Math.min(620, 905 - lx), ly = 250
  const L = k.rows(c, lx, ly, lw, 1000 - ly, { cls: 'dk-li' })
  return k.CSS + `<style>
.v-arcv .dk-arc.in{animation:dk-arcin 1.4s cubic-bezier(.7,0,.2,1) both}
.v-arcv .dk-vt.in{animation:dk-wipeD 1.6s .9s cubic-bezier(.7,0,.2,1) both}
@keyframes dk-wipeD{from{clip-path:inset(0 0 100% 0)}}
.v-arcv .dk-li.in{animation:dk-wipe .7s cubic-bezier(.7,0,.2,1) both;animation-delay:calc(1.2s + var(--i)*.1s)}
.v-arcv .dk-c2.in{animation:dk-settle 1.2s 1.1s cubic-bezier(.16,.8,.24,1) both}
.v-arcv .dk-tx.in{animation:dk-soft 1s .6s ease-out both}
</style>
  <img class="ab hero" src="${p.img || c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
  ${k.snow(c)}
  <svg class="ab dk-arc in" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;overflow:visible">
    <path d="${k.panel(E)}" fill="#f5f3ef"/><path d="${k.line(E, 'left', -30)}" fill="none" stroke="var(--acc)" stroke-width="3"/></svg>
  <div class="ab serif dk-vt in" style="left:110px;top:110px;height:880px;writing-mode:vertical-rl;font-size:${vfs}px;letter-spacing:.08em;line-height:1.2;color:var(--acc)">${vt}</div>
  <div class="ab dk-tx in" style="left:${lx}px;top:116px;width:${lw}px">${k.kick(c)}</div>
  ${L.html}
  ${p.img2 ? k.card(p.img2, 1230, 420, 480, 500, '240px 240px 24px 24px', '--sx:120px;--sy:-360px;--sr:10deg', 'in dk-c2') : ''}` } }) }

/* variants/day/bignum.js */
// day／bignum：巨大天數數字，數字筆畫裡填照片（圖入字），右邊主照片做成拱門；學自小紅書 69eb6225（巨數字章節頁・佩尼達島）＋中山國小拱門
// 圖入字用 SVG clipPath＋text＋image，底下墊實心色字當保底（照片沒載到字還在）。數字填 img2，沒有 img2 就填主照片。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'bignum', { name: '巨數字圖入字', range: [1, 7], html: c => {
  const k = K(), p = c.p, n = c.n, N = String(p.n || 1).padStart(2, '0'), id = 'dkbn' + (p.n || 1)
  const T = k.title(c, 820, 58, 30), ty = 360, ly = ty + T.h + 26
  // Projection text wraps in a fixed column; never solve capacity by making it unreadably small.
  const timed = c.items.filter(it => it.time).length * 2 >= n && c.items.some(it => it.time)
  const labelW = timed ? 96 : 64, textW = 820 - labelW - 24, pad = 8
  const text = (it, i) => c.tx('it' + i, it.t) + (!timed && it.time ? '  ' + it.time : '')
  const height = size => c.items.reduce((sum, it, i) => sum + Math.max(1,
    Math.ceil(U.len(text(it, i)) * size * 1.06 / textW)) * size * 1.5 + pad * 2 + (i ? 1 : 0), 0)
  let fs = n <= 4 ? 34 : 32
  while (fs > 28 && height(fs) > 1020 - ly) fs--
  const L = { html: `<div class="ab dk-rows" data-capacity="${height(fs) <= 1020 - ly ? 'fit' : 'exceeded'}" style="left:120px;top:${ly}px;width:820px">${c.items.map((it, i) => `<div class="in dk-li" style="padding:${pad}px 0;--i:${i + 3}"><b style="width:${labelW}px;font-size:24px">${U.esc(timed ? (it.time || '') : U.no(i))}</b><span style="display:block;flex:1;min-width:0;font-size:${fs}px;line-height:1.5;overflow-wrap:anywhere">${c.ed('it' + i, it.t)}${!timed && it.time ? `<small class="dk-tm">${U.esc(it.time)}</small>` : ''}</span></div>`).join('')}</div>` }
  const fill = p.img2 || p.img || c.meta.hero
  return k.CSS + `<style>
/* Three text roles: title, itinerary, and shared auxiliary labels. Rules only separate entries. */
.v-bignum .dk-rows>div{border-top:0}
.v-bignum .dk-rows>div+div{border-top:1px solid var(--line)}
.v-bignum .dk-rows>div:last-child{border-bottom:0}
.v-bignum .dk-rows b,.v-bignum .dk-tm{font-size:24px!important}
.v-bignum .dk-num.in{animation:dk-numIn 1.4s cubic-bezier(.16,.8,.24,1) both}
@keyframes dk-numIn{from{opacity:0;transform:translateY(80px)}}
.v-bignum .dk-numimg.in{animation:dk-numPan 3s .3s ease-out both}
@keyframes dk-numPan{from{transform:scale(1.25) translateX(-60px)}}
.v-bignum .dk-arch.in{animation:dk-archUp 1.3s .2s cubic-bezier(.7,0,.2,1) both}
@keyframes dk-archUp{from{clip-path:inset(100% 0 0 0 round 400px 400px 0 0)}}
.v-bignum .dk-li.in{animation:dk-rise .7s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(1s + var(--i)*.1s)}
.v-bignum .dk-tx.in{animation:dk-soft 1s .7s ease-out both}
</style>
  <div class="ab" style="inset:0;background:linear-gradient(180deg,#f7f3ec,#efe8dc)"></div>
  <img class="ab hero in dk-arch" src="${p.img || c.meta.hero}" alt="" style="left:1040px;top:90px;width:760px;height:920px;object-fit:cover;border-radius:380px 380px 0 0;box-shadow:0 12px 28px -16px rgba(0,0,0,.18)">
  ${k.snow(c)}
  <svg class="ab in dk-num" viewBox="0 0 900 460" style="left:112px;top:28px;width:528px;height:270px;overflow:visible" aria-hidden="true">
    <defs><clipPath id="${id}"><text x="20" y="400" font-family="Noto Serif TC,Noto Serif CJK TC,serif" font-weight="900" font-size="480" letter-spacing="-10">${N}</text></clipPath></defs>
    <text x="20" y="400" font-family="Noto Serif TC,Noto Serif CJK TC,serif" font-weight="900" font-size="480" letter-spacing="-10" fill="var(--acc)">${N}</text>
    <g clip-path="url(#${id})"><image class="in dk-numimg" href="${fill}" x="0" y="0" width="900" height="460" preserveAspectRatio="xMidYMid slice"/></g></svg>
  <div class="ab dk-tx in" style="left:120px;top:${ty - 46}px;width:820px">${k.kick(c)}
    <div class="dk-h" style="font-size:${T.fs}px;margin-top:16px;width:820px">${T.html}</div></div>
  ${L.html}` } }) }

/* variants/day/diagonal-folio.js */
// 取原作直幅／橫幅互補的分區規則，改為文字與照片交錯的跨頁構圖；不用時間軸或卡片底色
{ const U = M.util
M.add('day', 'diagonal-folio', { needs: p => p.img2 ? '' : '這天的第二張照片', name: '對角雙景・行程索引', range: [2, 6], html: c => {
  const p = c.p, main = p.img || c.meta.hero, second = p.img2
  const cols = c.n <= 3 ? c.n : 2, rows = Math.ceil(c.n / cols)
  const width = second ? 1080 : 1680, cellW = (width - 36 * (cols - 1)) / cols
  const title = c.tx('h', p.title || ''), parts = title.split(/[，,、]/).filter(Boolean)
  const longest = parts.reduce((a, b) => U.len(a) > U.len(b) ? a : b, '')
  const fs = U.fit(longest, 670 * (parts.length > 1 ? 1 : 2.7), 68, 36)
  const heading = c.ed('h', p.title || '').replace(/([，,、])/, '<i hidden>$1</i><br>')
  return `<style>
.v-diagonal-folio{background:var(--paper);color:var(--ink)}
.v-diagonal-folio .df-mast{left:120px;top:64px;width:1680px;height:57px;border-bottom:1px solid var(--ink);display:flex;justify-content:space-between;align-items:flex-start;font-size:22px;letter-spacing:.08em}
.v-diagonal-folio .df-heading{left:120px;top:168px;width:670px;height:430px;display:flex;flex-direction:column;justify-content:center}
.v-diagonal-folio .df-kicker{font-size:25px;line-height:1.5;color:var(--acc);letter-spacing:.08em}
.v-diagonal-folio h2{margin:35px 0 0;font-family:var(--serif);font-weight:700;line-height:1.35;letter-spacing:.02em;text-wrap:balance}
.v-diagonal-folio .df-photo{margin:0;overflow:hidden}
.v-diagonal-folio .df-photo img{display:block;width:100%;height:100%;object-fit:cover}
.v-diagonal-folio .df-main{left:860px;top:168px;width:940px;height:430px}
.v-diagonal-folio .df-second{left:120px;top:630px;width:520px;height:360px}
.v-diagonal-folio .df-index{top:630px;height:360px;display:grid;grid-template-columns:repeat(var(--cols),minmax(0,1fr));grid-template-rows:repeat(var(--rows),minmax(0,1fr));gap:20px 36px}
.v-diagonal-folio .df-entry{min-width:0;border-top:1px solid var(--acc);display:flex;flex-direction:column;padding-top:12px}
.v-diagonal-folio .df-label{display:flex;align-items:baseline;justify-content:space-between;gap:16px;color:var(--acc);font-variant-numeric:tabular-nums;font-family:var(--sans)}
.v-diagonal-folio .df-time{font-size:20px;font-weight:500;white-space:nowrap}
.v-diagonal-folio h3{margin:10px 0 0;font-family:var(--serif);font-weight:600;line-height:1.45;overflow-wrap:anywhere;text-wrap:pretty}
.v-diagonal-folio .df-air{padding-top:24px}
.v-diagonal-folio .df-air h3{margin-top:auto;margin-bottom:32px}
.v-diagonal-folio .df-sub{margin:8px 0 0;font-size:20px;line-height:1.4}
.v-diagonal-folio .df-photo.in{animation:df-cut .7s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*70ms)}
.v-diagonal-folio .df-entry.in,.v-diagonal-folio .df-heading.in{animation:df-type .45s ease-out both;animation-delay:calc(var(--i)*70ms)}
@keyframes df-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
@keyframes df-type{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.v-diagonal-folio .in{animation:none!important}}
</style>
<div class="ab df-mast">${c.meta.agency ? `<span>${c.ed('agency', c.meta.agency)}</span>` : '<span></span>'}${c.meta.en ? `<span>${c.ed('en', c.meta.en)}</span>` : ''}</div>
<div class="ab df-heading in" style="--i:1"><div class="df-kicker">${c.ed('k', (p.n ? '第 ' + p.n + ' 天' : '') + (p.date ? '　' + p.date : ''))}</div><h2 style="font-size:${fs}px">${heading}</h2></div>
${main ? `<figure class="ab df-photo df-main in" style="--i:0"><img class="hero" src="${U.esc(main)}" alt=""></figure>` : ''}
${second ? `<figure class="ab df-photo df-second in" style="--i:2"><img src="${U.esc(second)}" alt=""></figure>` : ''}
<div class="ab df-index" style="left:${second ? 720 : 120}px;width:${width}px;--cols:${cols};--rows:${rows}">${c.items.map((it, i) => {
  const text = c.tx('it' + i, it.t || ''), base = rows === 1 ? 38 : rows === 2 ? 31 : 27
  const size = U.fit(text, cellW * (rows === 1 ? 3 : 1.9), base, 24)
  const number = rows === 1 ? 84 : rows === 2 ? 39 : 26
  return `<section class="df-entry in${rows === 1 ? ' df-air' : ''}" style="--i:${i + 3}"><div class="df-label" style="font-size:${number}px;line-height:1.1"><span>${c.ed('seq' + i, U.no(i))}</span>${it.time ? `<span class="df-time">${c.ed('time' + i, it.time)}</span>` : ''}</div><h3 style="font-size:${size}px">${c.ed('it' + i, it.t || '')}</h3>${it.sub ? `<p class="df-sub">${c.ed('sub' + i, it.sub)}</p>` : ''}</section>`
}).join('')}</div>`
} }) }

/* variants/day/number-stage.js */
// day/number-stage · M008 · 視覺研究 v1（2026-11-03）
// 巨大章號把內容分成入口與舞台，亮色只負責指路；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('day','number-stage',{name:'章號舞台・每日分鏡',range:[1, 8],html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  const cols=n>4?2:1, rows=Math.ceil(n/cols), gap=30, cw=(1080-gap*(cols-1))/cols, rh=390/rows
  return `<div style="position:absolute;inset:0;background:var(--ink);color:var(--paper)">`+
    T('n',p.n===undefined?'':String(p.n).padStart(2,'0'),120,65,450,275,230,'font-weight:700;color:var(--acc3);line-height:1')+
    T('h',p.title,120,393,490,360,78,'font-family:var(--serif);font-weight:700;line-height:1.24')+
    T('date',p.date,120,931,490,70,28,'color:var(--paper);letter-spacing:.12em')+
    I(p.img,720,80,1080,460,'cover')+line(720,588,1080,'color-mix(in srgb,var(--paper) 35%,transparent)')+
    c.items.map((it,i)=>{const x=720+(i%cols)*(cw+gap),y=624+Math.floor(i/cols)*rh;return T('time'+i,it.time,x,y,cw,36,23,'color:var(--acc3)')+T('t'+i,it.t,x,y+(it.time?37:0),cw,rh-(it.time?42:8),32,'color:var(--paper)')}).join('')+`</div>`

}}) }

/* variants/day/outline-scene.js */
// 滿版景色＋描邊天數＋逐行片名；下方開放式行程列按項目數重算，無循環推鏡
{ const U = M.util
M.add('day', 'outline-scene', { name: '景中天數・全幅敘事', range: [1, 6], html: c => {
  const p = c.p, main = p.img || c.meta.hero, second = p.img2
  const clean = s => String(s || '').replace(/[，。；、,.!?！？]+$/u, '')
  const title = clean(p.title), cols = c.n <= 3 ? c.n : 3, rows = Math.ceil(c.n / cols)
  const w = (1680 - 40 * (cols - 1)) / cols, railH = rows === 1 ? 180 : 280
  const top = 1040 - railH, headingW = second ? 1060 : 1500
  return `<style>
.v-outline-scene{background:var(--ink);color:var(--paper)}
.v-outline-scene .os-photo{object-fit:cover;width:1920px;height:1080px}
.v-outline-scene .os-photo.in{animation:day-outline-lens 2.4s cubic-bezier(.2,.7,.3,1) both}
.v-outline-scene .os-title.in{animation:day-outline-title .75s .12s cubic-bezier(.22,1,.36,1) both}
.v-outline-scene .os-rail.in{animation:day-outline-rail .5s .45s ease-out both}
.v-outline-scene .os-detail{object-fit:cover;border:7px solid var(--paper);box-shadow:0 24px 50px color-mix(in srgb,var(--ink) 50%,transparent)}
@keyframes day-outline-lens{from{transform:scale(1.055)}to{transform:scale(1)}}
@keyframes day-outline-title{from{clip-path:inset(0 0 100% 0);transform:translateY(24px)}to{clip-path:inset(0);transform:none}}
@keyframes day-outline-rail{from{opacity:0}to{opacity:1}}
@media(prefers-reduced-motion:reduce){.v-outline-scene .in{animation:none!important}}
</style>
${main ? `<img class="ab hero os-photo in" style="inset:0" src="${U.esc(main)}" alt="">` : ''}
<div class="ab" style="inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 90%,transparent),transparent 85%),linear-gradient(0deg,var(--ink) 0%,color-mix(in srgb,var(--ink) 90%,transparent) 25%,transparent 70%)"></div>
${p.n ? `<div class="ab" style="left:120px;top:64px;font-size:240px;font-weight:700;line-height:1;color:transparent;-webkit-text-stroke:2px var(--paper)">${c.ed('day-number', String(p.n).padStart(2, '0'))}</div>` : ''}
${p.date ? `<div class="ab" style="right:120px;top:80px;font-size:28px">${c.ed('date', p.date)}</div>` : ''}
<div class="ab serif os-title in" style="left:120px;top:360px;width:${headingW}px;font-size:${U.fit(c.tx('h', title), headingW * 2, 88, 36)}px;line-height:1.35;text-wrap:balance">${c.ed('h', title)}</div>
${second ? `<img class="ab os-detail" style="right:120px;top:340px;width:440px;height:280px" src="${U.esc(second)}" alt="">` : ''}
<div class="ab os-rail in" style="left:120px;top:${top}px;width:1680px;height:${railH}px;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));grid-template-rows:repeat(${rows},minmax(0,1fr));gap:24px 40px">
${c.items.map((it, i) => `<section style="min-width:0;border-top:1px solid color-mix(in srgb,var(--paper) 55%,transparent);padding-top:18px;display:flex;gap:22px;align-items:flex-start">
<div style="font-size:23px;line-height:1.55;white-space:nowrap;color:var(--paper)">${c.ed(it.time ? 'time' + i : 'seq' + i, it.time || U.no(i))}</div>
<div style="min-width:0"><div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t || ''), (w - 100) * 2, rows === 1 ? 36 : 28, 22)}px;line-height:1.5">${c.ed('it' + i, clean(it.t))}</div>${it.sub ? `<div style="margin-top:8px;font-size:20px;line-height:1.4">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}</div></section>`).join('')}
</div>`
} }) }

/* variants/day/panorama-rail.js */
// day／panorama-rail：寬幅雙照片＋橫向時間欄，學自小紅書 6ab0e795（京都速覽・色欄節奏頁＋年表）
// 把原作的分欄閱讀與獨立橫帶改成「先看今天風景，再由左到右讀行程」；欄寬與字級隨項目數重算
{ const U = M.util
M.add('day', 'panorama-rail', { name: '寬景橫向時間欄', range: [2, 6], html: c => {
  const p = c.p, gap = 32, w = (1680 - gap * (c.n - 1)) / c.n
  const main = p.img || c.meta.hero, second = p.img2
  const title = c.tx('h', p.title || ''), fs = U.fit(title, 1260 * 1.8, 61, 39)
  return `<style>
.v-panorama-rail{background:var(--paper);color:var(--ink)}
.v-panorama-rail .pr-head{left:120px;top:64px;width:1260px;height:192px;display:flex;align-items:center}
.v-panorama-rail .pr-title{margin:0;font-family:var(--serif);font-weight:700;line-height:1.35;letter-spacing:.02em;text-wrap:balance}
.v-panorama-rail .pr-day{left:1480px;top:80px;width:320px;text-align:right;color:var(--acc)}
.v-panorama-rail .pr-day b{display:block;font:700 49px/1.3 var(--serif)}
.v-panorama-rail .pr-date{margin-top:16px;font-size:25px;letter-spacing:.08em;color:var(--ink)}
.v-panorama-rail .pr-photos{left:120px;top:288px;width:1680px;height:352px;display:flex;gap:8px;overflow:hidden}
.v-panorama-rail .pr-photos img{display:block;min-width:0;height:100%;object-fit:cover;flex:2 1 0;width:0}
.v-panorama-rail .pr-photos img+img{flex:1 1 0}
.v-panorama-rail .pr-rail{left:120px;top:688px;width:1680px;height:296px;display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:32px}
.v-panorama-rail .pr-stop{min-width:0;border-top:2px solid var(--acc);padding-top:24px}
.v-panorama-rail .pr-label{font-size:20px;line-height:1.4;color:var(--ink)}
.v-panorama-rail .pr-time{margin-top:8px;font:600 49px/1.15 var(--sans);font-variant-numeric:tabular-nums;color:var(--acc)}
.v-panorama-rail .pr-place{margin:24px 0 0;font-family:var(--serif);font-weight:700;line-height:1.5;overflow-wrap:anywhere;text-wrap:pretty}
.v-panorama-rail .pr-detail{margin:8px 0 0;font-size:20px;line-height:1.5}
.v-panorama-rail .pr-foot{left:120px;top:1024px;width:1680px;display:flex;justify-content:space-between;font-size:20px;color:var(--ink)}
.v-panorama-rail .pr-photos.in{animation:pr-day-reveal .85s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*70ms)}
.v-panorama-rail .pr-stop.in{animation:pr-day-text .55s ease-out both;animation-delay:calc(.3s + var(--i)*60ms)}
@keyframes pr-day-reveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
@keyframes pr-day-text{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.v-panorama-rail .in{animation:none!important}}
</style>
<div class="ab pr-head in" style="--i:0"><h2 class="pr-title" style="font-size:${fs}px">${c.ed('h', p.title || '')}</h2></div>
<div class="ab pr-day in" style="--i:0">${p.n ? `<b>${c.ed('k', '第 ' + p.n + ' 天')}</b>` : ''}${p.date ? `<div class="pr-date">${c.ed('date', p.date)}</div>` : ''}</div>
${main ? `<div class="ab pr-photos in" style="--i:1"><img class="hero" src="${U.esc(main)}" alt="">${second ? `<img src="${U.esc(second)}" alt="">` : ''}</div>` : ''}
<div class="ab pr-rail" style="--n:${c.n}">${c.items.map((it, i) => {
  const text = c.tx('it' + i, it.t || ''), size = U.fit(text, w * 2.2, c.n <= 3 ? 39 : 31, 25)
  return `<section class="pr-stop in" style="--i:${i + 2}"><div class="pr-label">${c.ed('time-label' + i, it.time ? '時間' : '順序')}</div><div class="pr-time">${it.time ? c.ed('time' + i, it.time) : c.ed('seq' + i, U.no(i))}</div><h3 class="pr-place" style="font-size:${size}px">${c.ed('it' + i, it.t || '')}</h3>${it.sub ? `<p class="pr-detail">${c.ed('sub' + i, it.sub)}</p>` : ''}</section>`
}).join('')}</div>
<div class="ab pr-foot">${c.meta.agency ? `<span>${c.ed('agency', c.meta.agency)}</span>` : '<span></span>'}${c.meta.en ? `<span>${c.ed('en', c.meta.en)}</span>` : ''}</div>`
} }) }

/* variants/day/paper-evidence.js */
// day/paper-evidence · M056 · 視覺研究 v1（2026-11-03）
// 不齊的紙邊與一張亮色便條，在規律資訊中製造焦點；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('day','paper-evidence',{name:'照片剪報・旅程便條',range:[1, 6],html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  const rh=680/n,edge='polygon(0 1%,8% 0,17% 1%,28% 0,40% 1%,55% 0,73% 1%,85% 0,100% 1%,100% 99%,87% 100%,73% 99%,55% 100%,40% 99%,22% 100%,10% 99%,0 100%)'
  return `<div style="position:absolute;inset:0;background:color-mix(in srgb,var(--acc3) 18%,var(--paper));background-image:repeating-linear-gradient(3deg,transparent 0 3px,color-mix(in srgb,var(--ink) 3%,transparent) 3px 4px)"></div>`+
    T('h',p.title,120,65,1250,140,64,'font-family:var(--serif);font-weight:700;line-height:1.2')+
    `<div data-layout="date" class="ab" style="left:1440px;top:80px;width:360px;height:100px"><div class="ab" style="left:0;top:0;width:360px;height:100px;background:var(--acc3);box-shadow:5px 8px 16px #0002;transform:rotate(2deg)"></div>`+
    T('date',p.date,20,26,320,65,27,'text-align:center')+'</div>'+
    `<div class="ab" style="left:120px;top:260px;width:875px;height:740px;background:var(--paper);box-shadow:0 12px 20px #0002"></div>`+
    I(p.img,138,278,839,704,'cover')+
    c.items.map((it,i)=>{
      const x=1070+(i%2)*26,h=Math.min(150,rh-20),y=270+i*rh+(rh-h)/2,w=Math.min(730-(i%2)*26,Math.max(560,U.len(it.t)*31+70))
      return `<div data-layout="note-${i}" class="ab" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><div class="ab in" style="left:0;top:0;width:${w}px;height:${h}px;filter:drop-shadow(0 5px 5px #0002);--i:${i}"><div style="position:absolute;inset:0;background:var(--paper);clip-path:${edge}"></div><div style="position:absolute;left:36px;top:-9px;width:95px;height:22px;background:color-mix(in srgb,var(--acc3) 28%,transparent);transform:rotate(-5deg)"></div></div>`+T('time'+i,it.time,25,12,w-50,32,22,'color:var(--acc)')+T('t'+i,it.t,25,(it.time?45:15),w-50,h-(it.time?55:30),31,`font-family:var(--serif);font-weight:700;line-height:1.3;height:${h-(it.time?55:30)}px;display:flex;align-items:center`)+'</div>'
    }).join('')

}}) }

/* variants/day/photo-notes.js */
// day/continuity: the existing wide scene and supporting still keep their composition.
// Short words and time units wrap together; oversized copy remains intact and signals capacity.
{ const U = M.util, H = M.continuity
M.add('day', 'photo-notes', { name: '雙景日誌', range: [1, 8], order: 1000, html: c => {
  const p=c.p,valid=src=>typeof src==='string'&&src.trim()&&!/^(undefined|null)$/i.test(src.trim())
  const primary=valid(p.img)?p.img:valid(p.img2)?p.img2:null,secondary=valid(p.img)&&valid(p.img2)?p.img2:null
  const hasPhoto=!!primary,X=hasPhoto?120:240,W=hasPhoto?650:1440,timeW=88,rowGap=hasPhoto?16:24,bodyW=W-timeW-rowGap
  const segmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh-TW',{granularity:'word'}):null
  const parts=(value,w,size)=>{
    const out=[],append=(text,unit)=>{
      const previous=out.at(-1)
      if(/^[，。；、！？：）」』】]+$/u.test(text)&&previous?.unit&&U.len(previous.text+text)*size*1.06<=w*.75){previous.text+=text;return}
      out.push({text,unit:unit&&U.len(text)*size*1.06<=w*.75})
    }
    const words=text=>{if(segmenter)for(const part of segmenter.segment(text))append(part.segment,part.isWordLike);else append(text,false)}
    let at=0
    for(const match of value.matchAll(/\d+(?:\.\d+)?(?:[–—~-]\d+(?:\.\d+)?)?[ \t]*(?:分鐘|小時|公里|公尺|分|站|天|晚)/g)){
      words(value.slice(at,match.index));append(match[0],true);at=match.index+match[0].length
    }
    words(value.slice(at));return out
  }
  const lineCount=(words,w,size)=>{
    let total=1,used=0
    for(const word of words)for(const chunk of word.unit?[word.text]:[...word.text]){
      if(chunk==='\n'){total++;used=0;continue}if(chunk==='\r')continue
      const width=U.len(chunk)*size*1.06;if(used&&used+width>w){total++;used=0}used+=width
    }
    return total
  }
  const field=(key,def,w,size)=>{const value=String(c.tx(key,def??'')),words=parts(value,w,size);return{key,def:def??'',value,words,lines:value?lineCount(words,w,size):0}}
  const edit=f=>{
    const body=f.words.map(word=>word.unit?`<span class="ct-word">${U.esc(word.text)}</span>`:U.esc(word.text)).join('')
    return c.ed(f.key,f.def).replace('>'+U.esc(f.value)+'</span>',()=> '>'+body+'</span>')
  }
  const dateW=hasPhoto?W:900,date=field('date',p.date||'',dateW,28),day=field('day',p.n?'DAY '+p.n:'',450,28)
  const titleValue=String(c.tx('h',p.title||'')),titleSize=U.fit(titleValue,W*2,62,48),title=field('h',p.title||'',W,titleSize)
  const titleTop=Math.max(160,80+Math.max(date.lines*28*1.4,hasPhoto?0:day.lines*28*1.4)+36)
  const listTop=Math.max(360,titleTop+title.lines*titleSize*1.3+40),available=1000-listTop,gap=c.n<=4?24:16
  const rows=size=>c.items.map((item,i)=>{
    const text=field('t'+i,item.t,bodyW,size),time=field('time'+i,item.time||U.no(i),timeW,28)
    return {text,time,h:Math.max(size*1.45,text.lines*size*1.45,time.lines*28*1.45)+24}
  })
  let fs=c.n<=4?34:c.n<=6?30:28,data=rows(fs)
  const used=()=>data.reduce((sum,row)=>sum+row.h,0)+gap*Math.max(0,c.n-1)
  while(fs>28&&used()>available)data=rows(--fs)
  const exceeded=used()>available||hasPhoto&&835+day.lines*28*1.4>1000
  let top=listTop
  return H.style+`<style>
    .t-day.v-photo-notes .ct-row{border-top:0}
    .t-day.v-photo-notes .ct-row+.ct-row{border-top:1px solid var(--line)}
    .t-day.v-photo-notes .ct-word{display:inline-block;max-width:100%;white-space:pre-wrap;word-break:keep-all;overflow-wrap:anywhere;vertical-align:top}
    .t-day.v-photo-notes .ct-body,.t-day.v-photo-notes .ct-title{white-space:pre-wrap;overflow-wrap:anywhere}
  </style><div data-capacity="${exceeded?'exceeded':'fit'}" data-list-top="${listTop}" data-content-height="${used()}" data-available-height="${available}"></div>`+
    H.photo(primary,850,0,1070,740,0,true)+H.photo(secondary,1390,790,410,220,28)+
    `<div class="serif ct-title" data-shared-copy style="position:absolute;left:${X}px;top:${titleTop}px;width:${W}px;font-size:${titleSize}px;line-height:1.3;text-wrap:balance">${edit(title)}</div>
    <div class="ct-copy" data-shared-copy style="left:${X}px;top:80px;width:${dateW}px;font-size:28px;line-height:1.4;white-space:pre-wrap;color:var(--acc)">${edit(date)}</div>
    <div class="ct-copy" data-shared-copy style="left:${hasPhoto?850:X+W-450}px;top:${hasPhoto?835:80}px;width:450px;font-size:28px;line-height:1.4;white-space:pre-wrap;${hasPhoto?'':'text-align:right;'}color:var(--acc)">${edit(day)}</div>`+
    data.map(row=>{
      const y=top;top+=row.h+gap
      return `<div class="ct-copy ct-row" data-shared-copy style="left:${X}px;top:${y}px;width:${W}px;min-height:${row.h}px;display:flex;align-items:flex-start;padding-top:12px;box-sizing:border-box;gap:${rowGap}px"><div style="width:${timeW}px;flex-shrink:0;font-size:28px;line-height:1.45;white-space:pre-wrap">${edit(row.time)}</div><div class="ct-body" style="width:${bodyW}px;font-size:${fs}px;line-height:1.45">${edit(row.text)}</div></div>`
    }).join('')
} }) }

/* variants/day/ridge.js */
// day／ridge：山稜剪影時間軸——照片切成橫貫畫面的山稜帶，行程上下交錯插在稜線上，學自小紅書 69341fa8（香港四日・山稜時間軸）
// 有 img2 就在山稜帶右段用柔邊遮罩跟主照片交融（中山國小技法庫「mask-image 漸層柔邊交融兩照」）。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'ridge', { name: '山稜時間軸', range: [1, 9], html: c => {
  const k = K(), p = c.p, n = c.n, f = k.f1, s = (p.n || 1) * 1.7
  const yT = x => 545 - 120 * Math.pow(1 - Math.abs(Math.sin(x / 300 + s)), 1.6) - 14 * Math.sin(x / 90 + s * 2.3)
  const yB = x => 850 + 16 * Math.sin(x / 330 + s * .7)
  let top = '', bot = ''
  for (let x = -20; x <= 1940; x += 20) { top += `${top ? ' L' : 'M'}${x},${f(yT(x))}`; bot = ` L${x},${f(yB(x))}` + bot }
  const band = top + bot + ' Z', crest = (() => { let d = ''; for (let x = -20; x <= 1940; x += 20) d += `${d ? ' L' : 'M'}${x},${f(yT(x) - 16)}`; return d })()
  const t = c.tx('h', p.title || ''), hfs = U.fit(t, 1300, 60, 34)
  const slot = 1680 / n, lw = n === 1 ? 640 : Math.min(440, slot * 2 - 36), fs = n <= 4 ? 26 : n <= 6 ? 23 : 21
  let pins = '', labs = ''
  c.items.forEach((it, i) => {
    const x = 120 + (i + .5) * slot, up = n === 1 || i % 2 === 0, yt = yT(x), yb = yB(x)
    const lx = Math.max(110, Math.min(1810 - lw, x - lw / 2))
    pins += up ? `<line class="in dk-pin" x1="${f(x)}" y1="${f(yt - 92)}" x2="${f(x)}" y2="${f(yt - 8)}" pathLength="1" style="--i:${i}"/><circle class="in dk-dot" cx="${f(x)}" cy="${f(yt - 8)}" r="7" style="--i:${i}"/>`
      : `<line class="in dk-pin" x1="${f(x)}" y1="${f(yb + 8)}" x2="${f(x)}" y2="${f(yb + 70)}" pathLength="1" style="--i:${i}"/><circle class="in dk-dot" cx="${f(x)}" cy="${f(yb + 8)}" r="7" style="--i:${i}"/>`
    const lab = `<b style="font:700 ${fs - 2}px var(--serif);color:var(--acc);display:block;margin-bottom:6px">${U.esc(k.label(c, i)) || '&nbsp;'}</b><span style="font-size:${fs}px;line-height:1.45">${c.ed('it' + i, it.t)}${k.tail(c, i)}</span>`
    labs += `<div class="ab in dk-lab" style="left:${f(lx)}px;${up ? `bottom:${f(1080 - (yt - 100))}px` : `top:${f(yb + 78)}px`};width:${lw}px;text-align:center;--i:${i}">${lab}</div>`
  })
  return k.CSS + `<style>
.v-ridge .dk-band.in{animation:dk-band 1.4s cubic-bezier(.7,0,.2,1) both}
@keyframes dk-band{from{opacity:0;transform:scale(1.06)}}
.v-ridge .dk-crest.in{stroke-dasharray:1;animation:dk-draw 1.8s .4s cubic-bezier(.7,0,.2,1) both}
.v-ridge .dk-pin{stroke:var(--acc);stroke-width:2}.v-ridge .dk-pin.in{stroke-dasharray:1;animation:dk-draw .5s both;animation-delay:calc(1.1s + var(--i)*.14s)}
.v-ridge .dk-dot{fill:#fff;stroke:var(--acc);stroke-width:3}.v-ridge .dk-dot.in{animation:dk-soft .4s both;animation-delay:calc(1s + var(--i)*.14s)}
.v-ridge .dk-lab.in{animation:dk-soft .7s ease-out both;animation-delay:calc(1.3s + var(--i)*.14s)}
.v-ridge .dk-tx.in{animation:dk-soft 1s .2s ease-out both}
</style>
  <div class="ab" style="inset:0;background:linear-gradient(180deg,#f6f0e6,#efe6d8)"></div>
  <img class="ab hero in dk-band" src="${p.img || c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover;clip-path:path('${band}')">
  ${p.img2 ? `<img class="ab in dk-band" src="${p.img2}" alt="" style="left:1000px;top:0;width:920px;height:1080px;object-fit:cover;clip-path:path('${band.replace(/(-?[\d.]+),(-?[\d.]+)/g, (m, a, b) => `${f(+a - 1000)},${b}`)}');-webkit-mask-image:linear-gradient(90deg,transparent,#000 45%);mask-image:linear-gradient(90deg,transparent,#000 45%)">` : ''}
  ${k.snow(c)}
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;overflow:visible">
    <path class="in dk-crest" d="${crest}" pathLength="1" fill="none" stroke="var(--acc)" stroke-width="2" stroke-opacity=".55"/>${pins}</svg>
  <div class="ab dk-tx in" style="left:120px;top:70px;width:1680px">${k.kick(c)}
    <div class="serif" style="font-size:${hfs}px;margin-top:14px;line-height:1.25;letter-spacing:.04em">${c.ed('h', p.title)}</div></div>
  ${labs}` } }) }

/* variants/day/road.js */
// day／road：照片當道路——行程沿著一條蛇行路線從畫面下方往遠方走，右邊深色漸層放標題，學自小紅書 68aed061（濟州西岸一日・步道時間軸）
// 路線是貝茲平滑曲線（不是地圖），點位依項目數均分；有 img2 放在右欄下方。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'road', { name: '照片道路時間軸', range: [1, 6], html: c => {
  const k = K(), p = c.p, n = c.n, f = k.f1, ph = (p.n || 1) * .9
  const y0 = 950, y1 = n > 5 ? 150 : 220
  const P = c.items.map((_, i) => [((i + (p.n || 1)) % 2 ? 720 : 430), Math.round(n === 1 ? 640 : y0 - i * (y0 - y1) / (n - 1))])
  const all = [[P[0][0] - 140, 1130], ...P, [P[n - 1][0] + 160, P[n - 1][1] - 160]]
  const d = `M${all[0][0]},${all[0][1]}` + k.smooth(all)
  const fs = n <= 4 ? 30 : n <= 6 ? 26 : 22, lw = 400
  const dots = P.map(([x, y], i) => `<circle class="in dk-dot" cx="${x}" cy="${y}" r="11" style="--i:${i}"/>`).join('')
  const labs = c.items.map((it, i) => { const [x, y] = P[i], tm = k.label(c, i)
    // 蛇行左右交替，標籤一律放外側，路線不會穿過字
    const right = x > 600, w = right ? lw : Math.min(lw, x - 100)
    return `<div class="ab in dk-chip" style="left:${right ? x + 44 : x - 44 - w}px;top:${y}px;width:${w}px;text-align:${right ? 'left' : 'right'};--i:${i}"><div style="transform:translateY(-50%);display:inline-block;max-width:${w}px;background:rgba(10,22,24,.58);padding:8px 16px;border-radius:8px;text-align:left">
      ${tm ? `<b style="display:block;font:700 ${fs - 5}px var(--serif);color:#f3d58a;letter-spacing:.06em">${U.esc(tm)}</b>` : ''}<span style="font-size:${fs}px;line-height:1.4">${c.ed('it' + i, it.t)}${k.tail(c, i)}</span></div></div>` }).join('')
  const T = k.title(c, 560, 70, 34)
  return k.CSS + `<style>
.v-road .dk-route.in{stroke-dasharray:1;animation:dk-draw 2.2s .4s cubic-bezier(.7,0,.2,1) both}
.v-road .dk-dash.in{animation:dk-soft .8s 2.4s both}
.v-road .dk-dot{fill:#fff;stroke:var(--acc3);stroke-width:5}.v-road .dk-dot.in{animation:dk-pop .5s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(.6s + var(--i)*.28s);transform-box:fill-box;transform-origin:center}
@keyframes dk-pop{from{transform:scale(0)}}
.v-road .dk-chip{color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.85),0 0 2px rgba(0,0,0,.9)}.v-road .dk-chip.in{animation:dk-slideR .6s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(.8s + var(--i)*.28s)}
.v-road .dk-tx.in{animation:dk-soft 1.1s .3s ease-out both}
.v-road .dk-c2.in{animation:dk-rise 1s 1.2s cubic-bezier(.16,.8,.24,1) both}
.v-road .hero.in{animation:dk-push 7s ease-out both}
</style>
  <img class="ab hero in" src="${p.img || c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
  <div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(10,20,22,.55),rgba(10,20,22,.15) 45%,rgba(14,38,40,.0) 55%,rgba(14,38,40,.88) 66%,rgba(14,38,40,.96))"></div>
  ${k.snow(c)}
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;overflow:visible">
    <path class="in dk-route" d="${d}" pathLength="1" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="16" stroke-linecap="round"/>
    <path class="in dk-dash" d="${d}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 14" stroke-linecap="round"/>${dots}</svg>
  ${labs}
  <div class="ab dk-tx in" style="left:1270px;top:${p.img2 ? 110 : 340}px;width:560px;color:#fff">${k.kick(c, '#f3d58a')}
    <div class="dk-h" style="font-size:${T.fs}px;margin-top:22px;width:560px">${T.html}</div>
    <div style="margin-top:28px;font-size:20px;letter-spacing:.3em;color:#ffffffb0">${c.ed('stops', n + ' 個行程')}</div></div>
  ${p.img2 ? k.card(p.img2, 1270, 560, 540, 380, '18px', '', 'in dk-c2') : ''}` } }) }

/* variants/day/scurve.js */
// 進場：紙面從左滑進、一道光掃過照片、行程一列一列從左滑入；第二張照片（img2）做成膠囊卡放在照片那側。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'scurve', { order: 1, name: 'S 曲線切照片', range: [1, 9], html: c => {
  const k = K(), p = c.p, E = k.EDGE.scurve(.40, .47, 110)
  const T = k.title(c, 640, 66), ty = 160, ly = ty + T.h + 56
  const L = k.rows(c, 120, ly, 640, 1010 - ly, { cls: 'dk-li' })
  const img2 = p.img2 ? k.card(p.img2, 1380, 650, 420, 280, '140px', '--sx:160px;--sy:200px;--sr:8deg', 'in dk-c2') : ''
  return k.CSS + `<style>
.v-scurve .dk-lay.in{animation:dk-left 1.3s cubic-bezier(.16,.8,.24,1) both}
.v-scurve .dk-sweep.in{background:linear-gradient(105deg,transparent 38%,rgba(190,240,255,.30) 49%,rgba(255,255,255,.45) 50%,transparent 61%);background-size:260% 100%;animation:dk-sweep 2.6s 1.3s ease-in-out both}
.v-scurve .dk-li.in{animation:dk-slideR .6s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(1.1s + var(--i)*.1s)}
.v-scurve .dk-c2.in{animation:dk-settle 1.2s 1.2s cubic-bezier(.16,.8,.24,1) both}
.v-scurve .dk-tx.in{animation:dk-soft 1s .5s ease-out both}
</style>
  <img class="ab hero" src="${p.img || c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
  <div class="ab dk-sweep in" style="inset:0;pointer-events:none"></div>
  ${k.snow(c)}
  <svg class="ab dk-lay in" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
    <path d="${k.panel(E, 'left', 34)}" fill="var(--acc)"/><path d="${k.panel(E)}" fill="#f6f4f0"/>
    <path d="${k.line(E, 'left', 66)}" fill="none" stroke="#fff" stroke-width="3"/></svg>
  ${img2}
  <div class="ab dk-tx in" style="left:120px;top:96px;width:660px">${k.kick(c)}
    <div class="dk-h" style="font-size:${T.fs}px;margin-top:20px;width:660px">${T.html}</div></div>
  ${L.html}` } }) }

/* variants/day/slant.js */
// 進場：紙面從左斜推進、行程一列一列彈落；第二張照片做成橫向膠囊卡壓在照片下方。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'slant', { order: 4, name: '斜切紙面', range: [1, 9], html: c => {
  const k = K(), p = c.p
  const T = k.title(c, 640, 64), ty = 160, ly = ty + T.h + 56
  const L = k.rows(c, 120, ly, 640, 1010 - ly, { cls: 'dk-li' })
  return k.CSS + `<style>
.v-slant .dk-para.in{animation:dk-para 1.2s cubic-bezier(.7,0,.2,1) both}
@keyframes dk-para{from{clip-path:polygon(0 0,0 0,0 100%,0 100%)}to{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}}
.v-slant .dk-li.in{animation:dk-drop .6s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(1.2s + var(--i)*.1s)}
.v-slant .dk-c2.in{animation:dk-rise 1s 1.1s cubic-bezier(.16,.8,.24,1) both}
.v-slant .dk-tx.in{animation:dk-soft 1s .6s ease-out both}
.v-slant .hero.in{animation:dk-push 6s ease-out both}
</style>
  <img class="ab hero in" src="${p.img || c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
  ${k.snow(c)}
  <svg class="ab dk-para in" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px"><polygon points="0,0 900,0 760,1080 0,1080" fill="#f4f5f2"/><line x1="938" y1="0" x2="798" y2="1080" stroke="var(--acc)" stroke-width="3"/></svg>
  <div class="ab dk-tx in" style="left:120px;top:96px;width:660px">${k.kick(c)}
    <div class="dk-h" style="font-size:${T.fs}px;margin-top:20px;width:660px">${T.html}</div></div>
  ${L.html}
  ${p.img2 ? k.card(p.img2, 1040, 610, 460, 290, '145px', '', 'in dk-c2') : ''}` } }) }

/* variants/day/slow-day-score.js */
// day／slow-day-score：三幕慢行長卷；學自「慢旅的一天」單-13 的有序段落、留白停頓與節奏分層
// 只轉譯閱讀節奏，不推定早晚時刻或移動／休息類別；項目按資料順序分成三幕，每幕最多兩項
{ const U = M.util
M.add('day', 'slow-day-score', { name: '三幕慢行長卷', range: [3, 6], html: c => {
  const p = c.p, bands = Math.min(3, c.n), bandH = 240, gap = 16
  const main = p.img || c.meta.hero, second = p.img2 || main
  const title = c.tx('h', p.title || ''), titleSize = U.fit(title, 1360 * 1.8, 61, 39)
  return `<style>
.v-slow-day-score{background:var(--paper);color:var(--ink);background-image:repeating-linear-gradient(0deg,transparent 0 5px,color-mix(in srgb,var(--ink) 2%,transparent) 5px 6px)}
.v-slow-day-score .sd-head{left:120px;top:64px;width:1360px;height:144px;display:flex;align-items:center}
.v-slow-day-score h2{margin:0;font-family:var(--serif);line-height:1.3;letter-spacing:.02em;text-wrap:balance}
.v-slow-day-score .sd-date{left:1536px;top:80px;width:264px;text-align:right;font-size:25px;line-height:1.6;color:var(--acc)}
.v-slow-day-score .sd-date b{display:block;font:600 39px/1.4 var(--serif);margin-bottom:16px}
.v-slow-day-score .sd-band{left:120px;width:1680px;border-top:1px solid color-mix(in srgb,var(--ink) 25%,transparent)}
.v-slow-day-score .sd-photo{position:absolute;top:16px;width:480px;height:224px;margin:0;overflow:hidden}
.v-slow-day-score .sd-photo img{display:block;width:100%;height:100%;object-fit:cover}
.v-slow-day-score .sd-entries{position:absolute;top:16px;height:224px;display:grid;grid-template-columns:repeat(var(--count),minmax(0,1fr));gap:32px;align-items:center}
.v-slow-day-score .sd-entry{display:grid;grid-template-columns:104px minmax(0,1fr);gap:24px;align-items:start;min-width:0}
.v-slow-day-score .sd-number{font:500 76px/1 var(--serif);color:var(--acc);font-variant-numeric:tabular-nums;white-space:nowrap}
.v-slow-day-score .sd-time{display:block;font-size:20px;line-height:1.3;font-variant-numeric:tabular-nums;color:var(--acc);margin-bottom:16px}
.v-slow-day-score h3{margin:0;font-family:var(--serif);line-height:1.45;font-weight:600;text-wrap:pretty;overflow-wrap:anywhere}
.v-slow-day-score .sd-sub{margin:8px 0 0;font-size:20px;line-height:1.4}
.v-slow-day-score .sd-end{color:var(--paper);border-color:transparent}
.v-slow-day-score .sd-end:before{content:"";position:absolute;inset:0 -120px -16px;background:var(--ink)}
.v-slow-day-score .sd-end .sd-number,.v-slow-day-score .sd-end .sd-time{color:var(--paper)}
.v-slow-day-score .sd-footer{left:120px;top:1040px;width:1680px;display:flex;justify-content:space-between;font-size:16px;letter-spacing:.08em}
.v-slow-day-score .sd-photo.in{animation:sd-cut .65s cubic-bezier(.76,0,.24,1) both;animation-delay:calc(var(--i)*80ms)}
.v-slow-day-score .sd-entry.in,.v-slow-day-score .sd-head.in{animation:sd-arrive .45s ease-out both;animation-delay:calc(var(--i)*80ms)}
@keyframes sd-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
@keyframes sd-arrive{from{opacity:0;transform:translateX(-24px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.v-slow-day-score .in{animation:none!important}}
</style>
<header class="ab sd-head in" style="--i:0"><h2 style="font-size:${titleSize}px">${c.ed('h',p.title || '')}</h2></header>
<div class="ab sd-date">${p.n ? `<b>${c.ed('day','第 '+p.n+' 天')}</b>` : ''}${p.date ? `<span>${c.ed('date',p.date)}</span>` : ''}</div>
${Array.from({length:bands},(_,r)=>{
  const start = Math.ceil(r*c.n/bands), end = Math.ceil((r+1)*c.n/bands), count=end-start
  const last=r===bands-1, photo=last ? null : r%2===0 ? main : second
  const textX=photo && r%2 ? 544 : 0, textW=photo ? 1136 : 1680, cellW=(textW-32*(count-1))/count
  return `<section class="ab sd-band${last?' sd-end':''}" style="top:${256+r*(bandH+gap)}px;height:${bandH}px">
  ${photo ? `<figure class="sd-photo in" style="left:${r%2?0:1200}px;--i:${r*3+1}"><img${r===0?' class="hero"':''} src="${U.esc(photo)}" alt=""></figure>` : ''}
  <div class="sd-entries" style="left:${textX}px;width:${textW}px;--count:${count}">${c.items.slice(start,end).map((it,j)=>{
    const i=start+j, text=c.tx('it'+i,it.t||''), fs=U.fit(text,(cellW-128)*2.7,count===1?49:39,25)
    return `<article class="sd-entry in" style="--i:${i+2}"><div class="sd-number">${c.ed('seq'+i,U.no(i))}</div><div>${it.time?`<time class="sd-time">${c.ed('time'+i,it.time)}</time>`:''}<h3 style="font-size:${fs}px">${c.ed('it'+i,it.t||'')}</h3>${it.sub?`<p class="sd-sub">${c.ed('sub'+i,it.sub)}</p>`:''}</div></article>`
  }).join('')}</div></section>`
}).join('')}
<footer class="ab sd-footer">${c.meta.agency?`<span>${c.ed('agency',c.meta.agency)}</span>`:'<span></span>'}${c.meta.en?`<span>${c.ed('en',c.meta.en)}</span>`:''}</footer>`
} }) }

/* variants/day/timeline.js */
// day／timeline：有圖左照片／右時間軸；無圖以居中版心完整呈現行程（1～9 項）。
{ const U = M.util
M.add('day', 'timeline', { name: '左照片＋右時間軸', range: [1, 9], html: c => {
  const p = c.p, K = M.dayKit, photo = p.img || c.meta.hero
  const x = photo ? 920 : 440, width = photo ? 880 : 1040
  const title = K.title(c, width, 60, 32)
  // Keep the established photo composition; a text-only day uses a centered reading column.
  // Long headings must not overlap the first stop, even when edited into extra lines.
  const listY = Math.max(330, 160 + title.h + 32)
  const list = K.rows(c, x, listY, width, Math.max(0, 970 - listY))
  return K.CSS + (photo ? `<img class="ab hero" src="${U.esc(photo)}" alt="" style="left:0;top:0;width:820px;height:1080px;object-fit:cover">` : '') + `
    <div class="ab in" style="left:${x}px;top:110px;width:${width}px;--i:1"><div class="kick">${c.ed('k', '第 ' + p.n + ' 天　' + (p.date || ''))}</div>
      <div class="serif" style="font-size:${title.fs}px;margin-top:12px;line-height:1.26">${title.html}</div></div>` + list.html
} }) }

/* variants/day/wave.js */
// 第二張照片（img2）做成拱門卡從下面升起；沒有 img2 就只留滿版照片。
{ const U = M.util, K = () => M.dayKit
M.add('day', 'wave', { order: 2, name: '紙雕波浪三層', range: [1, 9], html: c => {
  const k = K(), p = c.p, seed = (p.n || 1) + 6
  const E3 = k.EDGE.wave(.46, seed, 0), E2 = k.EDGE.wave(.46, seed, 40), E1 = k.EDGE.wave(.46, seed, 70)
  const T = k.title(c, 640, 64), ty = 160, ly = ty + T.h + 56, x = 1160
  const L = k.rows(c, x, ly, 640, 1010 - ly, { cls: 'dk-li' })
  const sh = `filter="url(#dkw-sh${p.n || 1})"`
  return k.CSS + `<style>
.v-wave .dk-l3.in{animation:dk-paper 1.2s .15s cubic-bezier(.16,.8,.24,1) both}.v-wave .dk-l2.in{animation:dk-paper 1.2s .35s cubic-bezier(.16,.8,.24,1) both}.v-wave .dk-l1.in{animation:dk-paper 1.2s .55s cubic-bezier(.16,.8,.24,1) both}
.v-wave .dk-c2.in{animation:dk-rise 1s 1.1s cubic-bezier(.16,.8,.24,1) both}
.v-wave .dk-li.in{animation:dk-rise .7s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(1.1s + var(--i)*.1s)}
.v-wave .dk-tx.in{animation:dk-soft 1s .8s ease-out both}
.v-wave .hero.in{animation:dk-push 6s ease-out both}
</style>
  <img class="ab hero in" src="${p.img || c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
  ${k.snow(c)}
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;overflow:visible">
    <defs><filter id="dkw-sh${p.n || 1}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="-10" dy="10" stdDeviation="12" flood-opacity=".38"/></filter></defs>
    <path class="dk-l3 in" d="${k.panel(E3, 'right', 110)}" fill="var(--acc2)" ${sh}/>
    <path class="dk-l2 in" d="${k.panel(E2, 'right', 56)}" fill="color-mix(in srgb,var(--acc2) 32%,#fff)" ${sh}/>
    <path class="dk-l1 in" d="${k.panel(E1, 'right', 0)}" fill="#f6f1ea" ${sh}/></svg>
  ${p.img2 ? k.card(p.img2, 130, 420, 340, 470, '170px 170px 0 0', '', 'in dk-c2') : ''}
  <div class="ab dk-tx in" style="left:${x}px;top:96px;width:640px">${k.kick(c)}
    <div class="dk-h" style="font-size:${T.fs}px;margin-top:20px;width:640px">${T.html}</div></div>
  ${L.html}` } }) }

/* variants/end/arc.js */
// end／arc：結尾，跟封面對稱
{ const U = M.util
M.add('end', 'arc', { name: '圓弧收尾', html: c => `
  <img class="ab hero" src="${c.meta.hero}" alt="" style="left:700px;top:0;width:1220px;height:1080px;object-fit:cover">
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px"><path d="${U.arcPanel(.49, 1500, .5)}" fill="#fbfaf7"/><path d="${U.arcLine(.49, 1500, .5, 34)}" fill="none" stroke="var(--acc)" stroke-width="3"/></svg>
  <div class="ab in" style="left:120px;top:300px;width:800px;--i:1"><div class="kick">謝謝聆聽</div>
    <div class="serif" style="font-size:${U.fit(c.tx('b', c.p.body), 800 * 2.2, 80, 40)}px;line-height:1.4;margin-top:30px">${c.ed('b', c.p.body)}</div>
    <div class="serif" style="font-size:34px;margin-top:40px">${c.ed('agency', c.meta.agency)}</div></div>` }) }

/* variants/end/brush.js */
// end／brush：結尾跟封面同一套「毛筆大字＋斜切透光片」，大字換成「謝謝聆聽」（可改），下面接結語。學自小紅書 6a5eed52／6a5cce76 的網頁重做版
// 場景共用 cover/brush.js 的 M.brushKit.scene（接檔時 cover 排在 end 前面，一定先載入）。
{ const U = M.util
M.add('end', 'brush', { name: '毛筆收尾＋透光片', html: c => {
  const body = c.tx('b', c.p.body || '')
  const { html } = M.brushKit.scene(c, { sc: '.t-end.v-brush', fid: 'end-brush-f', key: 'big', def: '謝謝聆聽', box: { x: 260, y: 170, w: 1400, h: body ? 520 : 680 }, one: 4 })
  return `${html}
  ${body ? `<div class="ab in serif" style="left:260px;top:770px;width:1400px;text-align:center;font-size:${U.fit(body, 1400 * 2, 40, 26)}px;line-height:1.6;letter-spacing:.1em;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance;text-shadow:0 2px 14px rgba(0,10,30,.7);--i:7">${c.ed('b', c.p.body)}</div>` : ''}
  <div class="ab in" style="right:120px;top:996px;font:400 26px/1 var(--sans);letter-spacing:.14em;--i:8">${c.ed('agency', c.meta.agency)}</div>`
} }) }

/* variants/end/cloud.js */
// end／cloud：頂部一塊「雲頭／如意」形色塊（中間低、兩側一階一階往上收），下緣錯位一層淺色邊，下方露出整張照片。學自小紅書 6a3a43e8（謝謝聆聽・景福宮）
// 雲頭形狀＝三段水平高度用圓角台階接起來（左右對稱），寬度照畫面寬比例算；大字、英文、結語都放在色塊裡。
{ const U = M.util
// 下緣：兩側高 y0、第二階 y1、中段最低 y2；r＝台階圓角
function cloudPath(y0, y1, y2, r = 34, dy = 0) {
  const a = 330, b = 640, W = 1920, h = v => v + dy
  return `M-10,-10 L1930,-10 L1930,${h(y0)} L${W - a + r},${h(y0)} Q${W - a},${h(y0)} ${W - a},${h(y0) + r} L${W - a},${h(y1) - r} Q${W - a},${h(y1)} ${W - a - r},${h(y1)}
  L${W - b + r},${h(y1)} Q${W - b},${h(y1)} ${W - b},${h(y1) + r} L${W - b},${h(y2) - r} Q${W - b},${h(y2)} ${W - b - r},${h(y2)}
  L${b + r},${h(y2)} Q${b},${h(y2)} ${b},${h(y2) - r} L${b},${h(y1) + r} Q${b},${h(y1)} ${b - r},${h(y1)}
  L${a + r},${h(y1)} Q${a},${h(y1)} ${a},${h(y1) - r} L${a},${h(y0) + r} Q${a},${h(y0)} ${a - r},${h(y0)} L-10,${h(y0)} Z`
}
M.add('end', 'cloud', { name: '如意雲頭色塊', html: c => {
  const body = c.tx('b', c.p.body || ''), y2 = body ? 520 : 440
  const deep = 'color-mix(in srgb,var(--acc2) 62%,#2a0d06)'
  return `<style>
  .t-end.v-cloud .cl.in{animation:ecDrop 1.1s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*90ms)}
  @keyframes ecDrop{from{transform:translateY(-300px)}}
  </style>
  <img class="ab hero" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;object-position:50% 70%">
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
    <path class="cl in" style="--i:0" d="${cloudPath(y2 - 170, y2 - 90, y2, 34, 16)}" fill="#e9c9a3"/>
    <path class="cl in" style="--i:1;filter:drop-shadow(0 10px 18px rgba(0,0,0,.3))" d="${cloudPath(y2 - 170, y2 - 90, y2)}" fill="${deep}"/></svg>
  <div class="ab in" style="left:0;right:0;top:${body ? 92 : 130}px;text-align:center;color:#f6e8d6;--i:2">
    <div class="serif" style="font-size:104px;letter-spacing:.18em;line-height:1.1">${c.ed('k', '謝謝聆聽')}</div>
    <div style="margin-top:16px;font:500 22px var(--sans);letter-spacing:.6em;opacity:.8">${c.ed('ke', 'THANK YOU')}</div>
    ${body ? `<div class="serif" style="margin:26px auto 0;width:1100px;font-size:${U.fit(body, 1100 * 2, 32, 22)}px;line-height:1.6;letter-spacing:.08em;font-weight:600;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance">${c.ed('b', c.p.body)}</div>` : ''}</div>
  <div class="ab" style="left:0;right:0;bottom:0;height:200px;background:linear-gradient(0deg,rgba(10,10,10,.6),transparent)"></div>
  <div class="ab in" style="left:120px;bottom:60px;color:#fff;font:700 28px var(--serif);letter-spacing:.12em;--i:4">${c.ed('agency', c.meta.agency)}</div>
  <div class="ab in" style="right:120px;bottom:64px;color:#fff;font:500 22px var(--sans);letter-spacing:.14em;opacity:.9;--i:5">${c.ed('dates', c.meta.dates)}</div>`
} }) }

/* variants/end/editorial-afterword.js */
// end／editorial-afterword：上方不等寬照片、下方留一封旅途後記；學自小紅書 6946c194 的雜誌直條拼接
{ const U = M.util
M.add('end', 'editorial-afterword', { name: '相簿最後一頁', html: c => {
  // 結尾沒有項目，不宣告 range；有自備項目照片時照實際數量分配，否則取本團前三張照片
  const main = c.p.img || c.meta.hero
  const validPhoto = x => typeof x === 'string' && x.trim() && !/^(undefined|null)$/i.test(x.trim())
  const pool = [...new Set([main, ...(c.meta.pool || [])].filter(validPhoto))]
  const photos = c.n ? c.items.map(x => x.img).filter(validPhoto) : pool.slice(0, 3)
  const count = photos.length, gap = 12, total = 1680 - Math.max(0, count - 1) * gap
  const weight = count > 1 ? count + 1 : 1
  const clean = s => String(s || '').split(/\s+/).map(x => x.replace(/[，。；、！？,.!?;]+$/g, '')).filter(Boolean).join('\n')
  const body = clean(c.p.body), text = c.tx('b', body)
  const lines=(s,w,size)=>String(s??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.08/w)),0)
  const size=U.fit(text,1240*3,58,32),textHeight=text?lines(text,1240,size)*size*1.38:0
  const heading=c.tx('title',c.meta.title||''),english=c.tx('en',c.meta.en||'')
  const headerBottom=Math.max(heading?62+lines(heading,1180,28)*28*1.4:0,english?66+lines(english,400,28)*28*1.4:0)
  const photoTop=Math.max(132,headerBottom+28)
  const photoHeight=Math.max(320,Math.min(552,932-photoTop-textHeight)),bodyTop=count?photoTop+photoHeight+68:Math.max(headerBottom+68,260,(1080-textHeight)/2)
  const capacity=bodyTop+textHeight<=1000?'fit':'exceeded'
  let left = 120
  return `<style>
    .t-end.v-editorial-afterword{background:var(--paper);color:var(--ink)}
    .t-end.v-editorial-afterword .ea-photo.in{animation:eaReveal .95s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--i)*70ms)}
    @keyframes eaReveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.t-end.v-editorial-afterword .ea-photo.in{animation:none}}
  </style>
  ${heading ? `<div class="ab in serif" data-capacity="${capacity}" style="left:120px;top:62px;width:1180px;font-size:28px;line-height:1.4;overflow-wrap:anywhere;--i:0">${c.ed('title', c.meta.title||'')}</div>` : ''}
  ${english ? `<div class="ab in" style="right:120px;top:66px;max-width:400px;text-align:right;font-size:28px;line-height:1.4;overflow-wrap:anywhere;color:var(--acc);--i:0">${c.ed('en', c.meta.en||'')}</div>` : ''}
  ${photos.map((src, i) => {
    const w = total * (i === 0 && count > 1 ? 2 : 1) / weight, x = left
    left += w + gap
    return `<div class="ab ea-photo in" style="left:${x}px;top:${photoTop}px;width:${w}px;height:${photoHeight}px;overflow:hidden;--i:${i}"><img${i === 0 ? ' class="hero"' : ''} src="${U.esc(src)}" alt="" style="display:block;width:100%;height:100%;object-fit:cover"></div>`
  }).join('')}
  ${count?`<div class="ab" style="left:120px;top:${bodyTop-32}px;width:1680px;height:1px;background:var(--line)"></div>`:''}
  ${text ? `<div class="ab in serif" data-capacity="${capacity}" style="left:120px;top:${bodyTop}px;width:1240px;font-size:${size}px;line-height:1.38;letter-spacing:.02em;white-space:pre-line;overflow-wrap:anywhere;text-wrap:balance;--i:${count + 1}">${c.ed('b', body)}</div>` : ''}
  <div class="ab in" style="right:120px;bottom:82px;width:350px;border-left:1px solid var(--line);padding-left:38px;display:flex;flex-direction:column;gap:22px;--i:${count + 2}">
    ${c.meta.agency ? `<div class="serif" style="font-size:28px;line-height:1.4">${c.ed('agency', c.meta.agency)}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:28px;line-height:1.4;color:var(--acc)">${c.ed('dates', c.meta.dates)}</div>` : ''}
  </div>`
} }) }

/* variants/end/film-wipe.js */
// 三色平面帶一刀掃過，落到真照片與平面字；不收原作 3D、倒影、光暈或循環動畫
{ const U = M.util
M.add('end', 'film-wipe', { name: '三色一刀・電影收尾', html: c => {
  const main = c.p.img || c.meta.hero
  const clean = s => String(s || '').replace(/[，。；、,.!?！？]+$/u, '')
  const body = String(c.p.body || '').split(/(?<=[。！？])\s*/u).map(clean).filter(Boolean).join('\n')
  return `<style>
.v-film-wipe{background:var(--ink);color:var(--paper)}
.v-film-wipe .fw-image{object-fit:cover;object-position:center 43%}
.v-film-wipe .fw-band{position:absolute;inset:-220px -360px;background:var(--acc);pointer-events:none;transform:translateX(150%) skewX(-12deg);z-index:5}
.v-film-wipe .fw-band.in{animation:end-film-wipe .95s cubic-bezier(.7,0,.3,1) both;animation-delay:calc(var(--i)*65ms)}
.v-film-wipe .fw-body.in{animation:end-film-settle .45s .55s ease-out both}
@keyframes end-film-wipe{0%{transform:translateX(-150%) skewX(-12deg)}45%{transform:translateX(0) skewX(-12deg)}100%{transform:translateX(150%) skewX(-12deg)}}
@keyframes end-film-settle{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.v-film-wipe .in{animation:none!important}.v-film-wipe .fw-band{display:none}}
</style>
${main ? `<img class="ab hero fw-image" src="${U.esc(main)}" alt="" style="left:0;top:0;width:1920px;height:620px">` : ''}
<div class="ab" style="left:0;top:548px;width:1920px;height:72px;background:var(--ink)"></div>
<div class="ab fw-body in serif" style="left:120px;top:656px;width:1300px;white-space:pre-line;font-size:${U.fit(c.tx('b', body), 1300 * 3, 56, 30)}px;line-height:1.55">${c.ed('b', body)}</div>
<div class="ab" style="right:120px;top:680px;width:300px;text-align:right;font-size:26px;line-height:1.6">
${c.meta.en ? `<div style="font-size:${U.fit(c.tx('en', c.meta.en), 300, 56, 24)}px;font-weight:700;line-height:1.1">${c.ed('en', c.meta.en)}</div>` : ''}
${c.meta.agency ? `<div style="margin-top:32px">${c.ed('agency', clean(c.meta.agency))}</div>` : ''}
${c.meta.dates ? `<div style="margin-top:24px;font-size:22px">${c.ed('dates', clean(c.meta.dates))}</div>` : ''}</div>
<div class="ab" style="left:120px;right:120px;top:1008px;height:4px;display:flex"><i style="flex:1;background:var(--acc)"></i><i style="flex:1;background:var(--acc3)"></i><i style="flex:1;background:var(--acc2)"></i></div>
<div class="fw-band in" style="--i:0" aria-hidden="true"></div><div class="fw-band in" style="--i:1;background:var(--acc3)" aria-hidden="true"></div><div class="fw-band in" style="--i:2;background:var(--acc2)" aria-hidden="true"></div>`
} }) }

/* variants/end/last-frame.js */
// end／last-frame：暗場大景與側欄片尾結語；學自 lab-web 69231238000000000d03ddd2-a 的暗景、巨幅地名與前後景層級
{ const U = M.util
M.add('end', 'last-frame', { name: '旅途最後一幕', html: c => {
  // 結尾沒有項目，不宣告 range；照片來自本頁／本團，文字保留共用編輯鍵
  const main = c.p.img || c.meta.hero
  const photos = (c.n ? c.items.map(x => x.img) : c.meta.pool || []).filter(x => x && x !== main)
  const body = String(c.p.body || '').split(/\s+/).filter(Boolean).map(s => s.replace(/[，。；、！？,.!?;]+$/g, '')).join('\n\n')
  const text = c.tx('b', body), lines = text.split('\n').reduce((n, s) => n + Math.max(1, Math.ceil(U.len(s) / 10)), 0)
  const longest = Math.max(1, ...text.split('\n').map(s => U.len(s)))
  const size = Math.min(U.fit('字'.repeat(Math.ceil(longest)), 480, 49, 25), Math.max(25, Math.floor(464 / (lines * 1.5))))
  return `<style>
    .t-end.v-last-frame{color:var(--paper);background:var(--ink);background-image:repeating-linear-gradient(0deg,transparent 0 3px,#ffffff03 3px 4px)}
    .t-end.v-last-frame .lf-scene.in{animation:lfCut .85s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--i)*70ms)}
    .t-end.v-last-frame .lf-body [contenteditable]{display:block;white-space:pre-line;text-wrap:pretty}
    @keyframes lfCut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.t-end.v-last-frame .in,.t-end.v-last-frame .lf-scene.in{animation:none}}
  </style>
  <div class="ab in" style="left:120px;right:120px;top:64px;display:flex;justify-content:space-between;align-items:center;gap:48px;--i:0">
    ${c.meta.title ? `<div class="serif" style="font-size:31px">${c.ed('title', c.meta.title)}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:25px;letter-spacing:.08em">${c.ed('dates', c.meta.dates)}</div>` : ''}
  </div>
  ${main ? `<div class="ab lf-scene in" style="left:120px;top:160px;width:1104px;height:624px;--i:1"><img class="hero" src="${U.esc(main)}" alt="" style="width:100%;height:100%;object-fit:cover"></div>` : ''}
  <div class="ab" style="left:1272px;top:160px;width:2px;height:624px;background:var(--acc)"></div>
  ${text ? `<div class="ab in serif lf-body" style="left:1320px;top:192px;width:480px;font-size:${size}px;line-height:2.2;--i:3">${c.ed('b', body)}</div>` : ''}
  ${photos.length ? `<div class="ab lf-scene in" style="left:1320px;top:688px;width:480px;height:240px;display:flex;gap:8px;--i:4">${photos.slice(0, c.n ? c.n : 1).map(src => `<img src="${U.esc(src)}" alt="" style="width:0;flex:1;min-width:0;height:100%;object-fit:cover">`).join('')}</div>` : ''}
  ${c.meta.en ? `<div class="ab in" style="left:120px;top:808px;width:1104px;font-size:${U.fit(c.tx('en', c.meta.en), 1104, 149, 49)}px;font-weight:700;line-height:1.1;letter-spacing:.08em;--i:2">${c.ed('en', c.meta.en)}</div>` : ''}
  <div class="ab" style="left:120px;right:120px;top:976px;height:1px;background:color-mix(in srgb,var(--paper) 30%,transparent)"></div>
  ${c.meta.agency ? `<div class="ab in" style="right:120px;top:1000px;font-size:25px;letter-spacing:.08em;--i:5">${c.ed('agency', c.meta.agency)}</div>` : ''}`
} }) }

/* variants/end/mist.js */
// end／mist：照片下半化成一片白霧，結語寫在霧裡。學自小紅書 68b2bca2（照片下緣白霧＋標題內文放霧中）
// 霧＝白色漸層＋幾團模糊的白橢圓（不貼雲朵素材）；文字區高度跟著結語長度往上長，霧也跟著加厚。
{ const U = M.util
M.add('end', 'mist', { name: '白霧收尾', html: c => {
  const body = c.tx('b', c.p.body || ''), fs = U.fit(body, 1300 * 2, 40, 26), lines = Math.min(3, Math.ceil(U.len(body) * fs * 1.1 / 1300) || 0)
  const textH = 140 + (body ? 40 + lines * fs * 1.6 : 0), fogTop = Math.round(1080 - textH - 380)
  return `<style>
  .t-end.v-mist{background:var(--paper)}
  .t-end.v-mist .puff{position:absolute;border-radius:50%;background:var(--paper);filter:blur(40px)}
  .t-end.v-mist .hero.in{animation:emZoom 2.4s cubic-bezier(.16,.8,.24,1) both}
  @keyframes emZoom{from{transform:scale(1.08)}}
  </style>
  <div class="ab" style="left:0;top:0;width:1920px;height:${fogTop + 260}px;overflow:hidden"><img class="hero in" src="${c.meta.hero}" alt="" style="width:1920px;height:100%;object-fit:cover;object-position:50% 55%"></div>
  <div class="ab" style="left:0;top:${fogTop}px;width:1920px;height:${1080 - fogTop}px;background:linear-gradient(180deg,rgba(251,250,247,0),var(--paper) 260px)"></div>
  ${[[-120, -40, 760, 200], [520, -70, 900, 220], [1240, -30, 820, 190], [180, 40, 1500, 160]].map(([x, y, w, h]) => `<div class="puff" style="left:${x}px;top:${fogTop + 120 + y}px;width:${w}px;height:${h}px;opacity:.85"></div>`).join('')}
  <div class="ab in" style="left:0;right:0;top:${fogTop + 220}px;text-align:center;color:var(--ink);--i:2">
    <div class="kick" style="letter-spacing:.5em">${c.ed('ke', 'THANK YOU')}</div>
    <div class="serif" style="margin-top:12px;font-size:92px;letter-spacing:.18em;line-height:1.1">${c.ed('k', '謝謝聆聽')}</div>
    ${body ? `<div class="serif" style="margin:30px auto 0;width:1300px;font-size:${fs}px;line-height:1.6;letter-spacing:.08em;font-weight:600;color:#3a4146;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance">${c.ed('b', c.p.body)}</div>` : ''}</div>
  <div class="ab in" style="left:120px;bottom:52px;font:500 20px var(--sans);letter-spacing:.14em;color:var(--mute);--i:4">${c.ed('agency', c.meta.agency)}</div>
  <div class="ab in" style="right:120px;bottom:52px;font:500 20px var(--sans);letter-spacing:.14em;color:var(--mute);--i:5">${c.ed('dates', c.meta.dates)}</div>`
} }) }

/* variants/end/quiet-strip.js */
// 暖紙左側謝詞＋右側淡照片；不搬原作的聯絡方式，不做大圖即時濾鏡
{ const U=M.util
M.add('end','quiet-strip',{name:'淡景致謝',auto:false,html:c=>{
 const photo=c.p.img!==undefined?c.p.img:c.meta.hero,valid=typeof photo==='string'&&photo.trim()&&!/^(null|undefined)$/i.test(photo.trim())
 const title=c.tx('k',c.p.title||'謝謝聆聽'),body=c.tx('b',c.p.body||''),agency=c.tx('agency',c.meta.agency||''),dates=c.tx('dates',c.meta.dates||''),width=valid?1040:1400
 const lines=(text,size)=>String(text).split('\n').reduce((n,t)=>n+Math.max(1,Math.ceil(U.len(t)*size*1.06/width)),0)
 const size=U.fit(title,width*2,128,48),height=lines(title,size)*size*1.2+(body?40+lines(body,32)*32*1.65:0)+(agency||dates?96:0),top=Math.max(100,(1080-height)/2),capacity=top+height<=980?'fit':'exceeded'
 return `<style>.v-quiet-strip{background:var(--paper);color:var(--ink)}.v-quiet-strip .qs-copy{overflow-wrap:anywhere}.v-quiet-strip [data-k]{white-space:pre-wrap}.v-quiet-strip .qs-photo{position:absolute;right:0;top:0;width:520px;height:1080px}.v-quiet-strip .qs-photo img{width:100%;height:100%;object-fit:cover;opacity:.38}.v-quiet-strip .qs-photo:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--paper),transparent 85%)}</style>
 ${valid?`<div class="qs-photo"><img class="hero" src="${U.esc(photo)}" alt=""></div>`:''}
 <section class="ab qs-copy" data-capacity="${capacity}" style="left:260px;top:${top}px;width:${width}px">
 <h2 class="serif" style="font-size:${size}px;line-height:1.2;margin:0">${c.ed('k',c.p.title||'謝謝聆聽')}</h2>
 ${body?`<div style="margin-top:40px;font-size:32px;line-height:1.65">${c.ed('b',c.p.body||'')}</div>`:''}
 ${agency||dates?`<div style="width:560px;border-top:1px solid var(--line);margin-top:56px;padding-top:24px;display:flex;flex-wrap:wrap;gap:24px;font-size:28px;line-height:1.4">${agency?`<div>${c.ed('agency',c.meta.agency||'')}</div>`:''}${dates?`<div>${c.ed('dates',c.meta.dates||'')}</div>`:''}</div>`:''}</section>`
}}) }

/* variants/end/ring.js */
// 結語照空白斷欄（資料裡用空白分句）；字級依「最長一句的長度」與「欄數要塞得進左半邊」兩個條件取小。
{ const U = M.util
M.add('end', 'ring', { name: '圓窗＋直排結語', html: c => {
  const body = c.tx('b', c.p.body || ''), segs = body.split(/\s+/).filter(Boolean), H = 760, W = 860
  // 有空白分句：最長一句要一欄放得下；沒有空白：照一般斷行（標點不會落到欄首）
  const longest = Math.max(1, ...segs.map(s => U.len(s))), split = segs.length > 1
  let size = Math.min(64, split ? Math.floor(H / (longest * 1.16)) : 64)
  for (; size > 28; size -= 2) {
    const per = Math.floor(H / (size * 1.16)), cols = segs.reduce((a, s) => a + Math.ceil(U.len(s) / per), 0)
    if (cols * size * 1.95 <= W) break
  }
  // 沒分句的長段：欄高改成「平均分配」，最後一欄不會只剩一兩個字
  const L = U.len(body), per = Math.floor(H / (size * 1.16)), nc = Math.ceil(L / per)
  const h = split ? H : Math.ceil(Math.ceil(L / nc) * size * 1.16 + size * .3)
  return `<style>
  .t-end.v-ring .vb{position:absolute;writing-mode:vertical-rl;font-family:var(--serif);font-weight:700;line-height:1.95;letter-spacing:.14em;color:var(--ink)}
  .t-end.v-ring .vb.k{word-break:keep-all;overflow-wrap:anywhere}
  .t-end.v-ring .vb.in{animation:erDown 1.6s ease-out both;animation-delay:.3s}
  @keyframes erDown{from{clip-path:inset(0 0 100% 0)}}
  .t-end.v-ring .rg.in{animation:erPop 1.1s cubic-bezier(.16,.8,.24,1) both}
  @keyframes erPop{from{transform:scale(.86);opacity:0}}
  </style>
  <div class="ab rg in" style="left:1076px;top:136px;width:808px;height:808px;border:2px solid color-mix(in srgb,var(--acc) 45%,#fff);border-radius:50%"></div>
  <div class="ab rg in" style="left:1110px;top:170px;width:740px;height:740px;border-radius:50%;overflow:hidden;box-shadow:0 0 0 6px #fff,0 0 0 8px var(--acc),0 30px 60px -24px rgba(0,0,0,.45)">
    <img class="hero" src="${c.meta.hero}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:50% 55%;transform:scale(1.15)"></div>
  <div class="ab in" style="left:120px;top:100px;display:flex;align-items:center;gap:18px;--i:1"><span class="five"><i></i><i></i><i></i><i></i><i></i></span><span class="kick">${c.ed('k', '謝謝聆聽')}</span></div>
  ${body ? `<div class="vb in${split ? ' k' : ''}" style="right:${1920 - 1000}px;top:200px;height:${h}px;font-size:${size}px">${c.ed('b', c.p.body)}</div>` : ''}
  <div class="ab in" style="left:120px;bottom:64px;font:500 20px var(--sans);letter-spacing:.14em;color:var(--mute);--i:4">${c.ed('agency', c.meta.agency)}　·　${c.ed('dates', c.meta.dates)}</div>`
} }) }

/* variants/end/screen.js */
// end／screen：整團照片接成一條長帶，放進上下緣內凹的「曲面銀幕」裡緩緩滑過一次。學自小紅書 69cfb1d6（京都・秋色五日）
// 照片從 meta.pool 依序取、統一高度；銀幕曲線用二次曲線，上下各內凹 40px，外面再描一圈深色框。
{ const U = M.util
const T = 470, B = 930, D = 40                                         // 銀幕上下緣與內凹量
const EDGE = `M-10,${T} Q960,${T + 2 * D} 1930,${T} L1930,${B} Q960,${B - 2 * D} -10,${B} Z`
M.add('end', 'screen', { name: '曲面銀幕照片帶', html: c => {
  const pool = [c.meta.hero, ...(c.meta.pool || []).filter(s => s !== c.meta.hero)], ws = [520, 380, 600, 440, 560, 400]
  let x = 0, k = 0, imgs = ''
  while (x < 1920 + 420) { const w = ws[k % ws.length]; imgs += `<img src="${pool[k % pool.length]}" alt="" style="position:absolute;left:${x}px;top:0;width:${w - 8}px;height:${B - T}px;object-fit:cover">`; x += w; k++ }
  const body = c.tx('b', c.p.body || '')
  return `<style>
  .t-end.v-screen{background:var(--paper)}
  .t-end.v-screen .belt.in{animation:esPan 2.6s cubic-bezier(.3,0,.2,1) both}
  @keyframes esPan{from{transform:translateX(-380px)}}
  .t-end.v-screen .ln{flex:1;height:2px;background:linear-gradient(90deg,transparent,var(--acc3))}
  </style>
  <div class="ab" style="left:0;top:${T}px;width:1920px;height:${B - T}px;clip-path:path('${EDGE.replace(/(-?\d+),(\d+)/g, (m, a, b) => `${a},${b - T}`)}')">
    <div class="belt in" style="position:absolute;left:-60px;top:0;width:${x}px;height:${B - T}px">${imgs}</div></div>
  <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;pointer-events:none"><path d="${EDGE}" fill="none" stroke="color-mix(in srgb,var(--acc2) 55%,#2a1208)" stroke-width="16"/><path d="${EDGE}" fill="none" stroke="var(--acc3)" stroke-width="2" transform="translate(0,-14)" opacity=".7"/></svg>
  <div class="ab in" style="left:0;right:0;top:96px;display:flex;align-items:center;justify-content:center;gap:34px;--i:1">
    <i class="ln" style="max-width:360px"></i><div class="serif" style="font-size:84px;letter-spacing:.16em;color:color-mix(in srgb,var(--acc2) 60%,#2a1208)">${c.ed('k', '謝謝聆聽')}</div><i class="ln" style="max-width:360px;transform:scaleX(-1)"></i></div>
  <div class="ab in" style="left:0;right:0;top:226px;display:flex;justify-content:center;--i:2"><div style="padding:8px 30px;border-radius:30px;background:color-mix(in srgb,var(--acc2) 60%,#2a1208);color:#fff;font:600 24px var(--sans);letter-spacing:.2em">${c.ed('agency', c.meta.agency)}</div></div>
  ${body ? `<div class="ab in serif" style="left:260px;top:300px;width:1400px;text-align:center;font-size:${U.fit(body, 1400 * 2, 34, 22)}px;line-height:1.55;letter-spacing:.08em;color:var(--ink);font-weight:600;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance;--i:3">${c.ed('b', c.p.body)}</div>` : ''}
  <div class="ab in" style="left:0;right:0;bottom:60px;text-align:center;font:500 22px var(--sans);letter-spacing:.24em;color:var(--mute);--i:4">${c.meta.en ? c.ed('en', c.meta.en) + '　·　' : ''}${c.ed('dates', c.meta.dates)}</div>`
} }) }

/* variants/end/thanks.js */
// end／thanks：電影式閉幕——黑幕收攏，整張照片只剩鏤空大字裡看得到。學自小紅書 69dfa126（THANKS 黑底鏤空大字）
// 做法：黑底白字設成「色彩增值」疊在照片上 → 黑的地方全黑、白字的地方露出照片；大字仍可點來改（改成中文也行）。
// 進場：先看到整張照片，黑幕再浮上來把照片收進字裡（播一次就停）。
{ const U = M.util
const FONT = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap">'
M.add('end', 'thanks', { name: '黑幕鏤空大字', html: c => {
  const big = c.tx('big', 'THANKS'), L = Math.max(1, U.len(big)), cjk = /[^\x00-\xff]/.test(big)
  const size = Math.floor(Math.min(cjk ? 300 : 340, 1680 / (L * (cjk ? 1.08 : .86))))
  const body = c.tx('b', c.p.body || '')
  return `${FONT}<style>
  .t-end.v-thanks{background:#000}
  .t-end.v-thanks .mk{position:absolute;inset:0;background:#000;mix-blend-mode:multiply;display:flex;align-items:center;justify-content:center}
  .t-end.v-thanks .mk.in{animation:etClose 1.6s cubic-bezier(.65,0,.35,1) both;animation-delay:.5s}
  @keyframes etClose{from{background:#fff}}
  .t-end.v-thanks .big{font-family:Montserrat,var(--sans);font-weight:900;color:#fff;line-height:1;letter-spacing:.02em;white-space:nowrap}
  .t-end.v-thanks .big [contenteditable]{display:block}
  </style>
  <img class="ab hero" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;filter:saturate(1.15) contrast(1.05)">
  <div class="mk in"><div class="big" style="font-size:${size}px">${c.ed('big', 'THANKS')}</div></div>
  <div class="ab in" style="left:0;right:0;top:${Math.round(540 + size * .5 + 44)}px;display:flex;flex-direction:column;align-items:center;color:#fff;--i:20">
    <i style="width:90px;height:1px;background:rgba(255,255,255,.55)"></i>
    ${body ? `<div class="serif" style="margin-top:34px;max-width:1300px;text-align:center;font-size:${U.fit(body, 1300 * 2, 40, 26)}px;line-height:1.6;letter-spacing:.1em;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance">${c.ed('b', c.p.body)}</div>` : ''}
    <div style="margin-top:26px;font-size:22px;letter-spacing:.24em;opacity:.7">${c.ed('agency', c.meta.agency)}　·　${c.ed('dates', c.meta.dates)}</div></div>`
} }) }

/* variants/end/wall.js */
// end／wall：整團照片的傾斜照片牆當收尾（跟封面 wall 呼應），中間壓深色光暈放「謝謝聆聽」與結語。學自小紅書 6a584757（劇照牆）
// 照片牆共用 cover/wall.js 的 M.wallKit（接檔時 cover 排在 end 前面）；方向反過來斜，看起來不是同一張。
{ const U = M.util
M.add('end', 'wall', { name: '照片牆收尾', html: c => {
  const body = c.tx('b', c.p.body || '')
  return `<style>
  .t-end.v-wall{background:#14100e}
  .t-end.v-wall .wrow.in{animation:ewRow 1.2s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*60ms)}
  @keyframes ewRow{from{transform:translateX(calc(var(--d)*260px));opacity:0}}
  </style>
  <div class="ab" style="inset:0;overflow:hidden">${M.wallKit([...(c.meta.pool || [])].reverse(), { rot: 12 })}</div>
  <div class="ab" style="inset:0;background:radial-gradient(ellipse 62% 58% at 50% 50%,rgba(22,14,10,.9),rgba(22,14,10,.55) 70%,rgba(22,14,10,.35))"></div>
  <div class="ab in" style="left:260px;top:0;width:1400px;height:1080px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#fff;--i:3">
    ${c.meta.en ? `<div style="font:600 20px var(--sans);letter-spacing:.5em;color:#e9c98f">${c.ed('en', c.meta.en)}</div>` : ''}
    <div class="serif" style="margin-top:18px;font-size:120px;letter-spacing:.16em;line-height:1.1">${c.ed('k', '謝謝聆聽')}</div>
    ${body ? `<div class="serif" style="margin-top:34px;width:1200px;font-size:${U.fit(body, 1200 * 2, 40, 26)}px;line-height:1.6;letter-spacing:.08em;font-weight:600;word-break:keep-all;overflow-wrap:anywhere;text-wrap:balance">${c.ed('b', c.p.body)}</div>` : ''}
    <div style="margin-top:40px;display:flex;gap:28px;align-items:center;font-size:24px;letter-spacing:.14em;opacity:.85"><span class="serif">${c.ed('agency', c.meta.agency)}</span><i style="width:1px;height:24px;background:rgba(255,255,255,.5)"></i><span>${c.ed('dates', c.meta.dates)}</span></div></div>`
} }) }

/* variants/flight/board.js */
// flight／board：機場時刻表——深色看板一列一段航班，起降時間做成翻牌字卡（一個字一片），航廈寫在該列下方
// 學自機場出境大廳的翻牌看板、中山國小 SEL261216A 的航班欄位（日期／航班／起降）。1～4 段；欄位缺就留空列，不編字。
{ const U = M.util
const code = s => ((s || '').match(/\b[A-Z]{3}\b/) || [''])[0], city = s => (s || '').replace(/\s*\b[A-Z]{3}\b\s*/, '').trim()
const flap = (t, fs) => t ? `<div style="display:flex;gap:4px;justify-content:flex-start">${[...t].map(ch => ch === ':' ? `<span style="font:900 ${fs}px/1.25 var(--serif);color:var(--acc3)">:</span>` :
  `<span style="display:inline-block;width:${Math.round(fs * .72)}px;text-align:center;font:900 ${fs}px/1.25 var(--serif);color:var(--acc3);background:linear-gradient(#2c3236 0 49%,#14171a 49% 51%,#262b2f 51%);border-radius:5px">${U.esc(ch)}</span>`).join('')}</div>` : ''
M.add('flight', 'board', { name: '機場時刻表', range: [1, 4], html: c => {
  const n = c.n, rh = n <= 2 ? 210 : n === 3 ? 170 : 140, fs = n <= 2 ? 64 : n === 3 ? 52 : 44, top = 260, cols = '200px 1.25fr 1fr 1fr 290px 290px'
  const head = ['日期', '航班', '出發', '抵達', '起飛', '抵達'].map(t => `<span>${t}</span>`).join('')
  const port = s => `<div><div style="font:900 ${Math.round(fs * .78)}px/1.1 var(--serif);color:#fff">${U.esc(code(s) || city(s))}</div>${code(s) && city(s) ? `<div style="font-size:18px;color:#ffffff99;margin-top:4px">${U.esc(city(s))}</div>` : ''}</div>`
  const rows = c.items.map((f, i) => `<div class="in" style="display:grid;grid-template-columns:${cols};align-items:center;column-gap:24px;min-height:${rh}px;padding:0 50px;border-top:1px solid #ffffff1f;position:relative;--i:${i + 3}">
      <div style="font:700 26px var(--serif);color:#fff">${U.esc(f.sub || '')}</div>
      <div><div class="serif" style="font-size:${U.fit(c.tx('it' + i, f.t), 330, 30, 18)}px;line-height:1.3;color:#fff">${c.ed('it' + i, f.t)}</div>${f.body ? `<div style="font-size:17px;line-height:1.45;color:#ffffff88;margin-top:6px">${U.esc(f.body)}</div>` : ''}</div>
      ${port(f.from)}${port(f.to)}${flap(f.dep, fs)}${flap(f.arr, fs)}</div>`).join('')
  return `<div class="ab in" style="left:120px;top:96px;--i:1"><div class="kick">${c.ed('k', '航班資訊')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', '航班時刻')}</div></div>
    <div class="ab in" style="left:120px;top:${top}px;width:1680px;background:var(--ink);border-radius:10px;box-shadow:0 40px 80px -40px rgba(0,0,0,.6);overflow:hidden;--i:2">
      <div style="display:grid;grid-template-columns:${cols};column-gap:24px;padding:22px 50px;font-size:18px;letter-spacing:.3em;color:#ffffff88;background:#14171a">${head}</div>${rows}
      <div style="height:10px;background:var(--acc3)"></div></div>` } }) }

/* variants/flight/legs.js */
// flight／legs：航班資訊，一段一張大票（1～4 段：去程、回程、轉機）
{ const U = M.util
M.add('flight', 'legs', { name: '大票卡', range: [1, 4], html: c => {
  const n = c.n, gap = 30, H = Math.min(300, (700 - gap * (n - 1)) / n)
  return `<div class="ab in" style="left:120px;top:100px;--i:1"><div class="kick">${c.ed('k', '航班資訊')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', '去程與回程')}</div></div>` +
    c.items.map((f, i) => { const y = 290 + i * (H + gap), city = s => (s || '').replace(/\s*[A-Z]{3}$/, ''), code = s => ((s || '').match(/[A-Z]{3}$/) || [''])[0]
      return `<div class="ab in" style="left:120px;top:${y}px;width:1680px;height:${H}px;background:#fff;box-shadow:0 26px 50px -30px rgba(0,0,0,.45);display:grid;grid-template-columns:300px 1fr 1fr;align-items:center;padding:0 60px;border-left:10px solid ${i ? '#1d2124' : 'var(--acc)'};--i:${i + 2}">
        <div><div style="font-size:20px;letter-spacing:.3em;color:var(--mute)">${i ? '回程' : '去程'}</div><div class="serif" style="font-size:${Math.min(40, H / 5)}px;margin-top:6px">${U.esc(f.sub || '')}</div><div style="font-size:22px;margin-top:8px">${c.ed('it' + i, f.t)}</div></div>
        <div style="text-align:center"><div style="font:900 ${Math.min(96, H / 2.6)}px/1 var(--serif)">${U.esc(f.dep || '')}</div><div style="font-size:26px;margin-top:8px">${U.esc(city(f.from))} <b style="color:var(--acc)">${U.esc(code(f.from))}</b></div></div>
        <div style="text-align:center;position:relative"><div style="position:absolute;left:-40px;top:${Math.min(48, H / 5)}px;width:80px;border-top:3px dashed #c9cdd0"></div><div style="font:900 ${Math.min(96, H / 2.6)}px/1 var(--serif)">${U.esc(f.arr || '')}</div><div style="font-size:26px;margin-top:8px">${U.esc(city(f.to))} <b style="color:var(--acc)">${U.esc(code(f.to))}</b></div></div></div>` }).join('') } }) }

/* variants/flight/panorama-gates.js */
// 2～3 段；欄寬依 c.n 均分，去回程只由資料中的相反航點判定，不把最後一項硬當回程
{ const U = M.util
M.add('flight', 'panorama-gates', { name: '航廈全景', range: [2, 3], html: c => {
  const w = 1680 / c.n, pad = 48, inner = w - pad * 2, portW = (inner - 28) / 2
  const src = c.p.img || (c.meta.pool || []).find(s => /icn-arrival/.test(s)) || c.meta.hero
  const first = c.items[0], clean = s => String(s || '').replace(/[，。,.]+$/u, '')
  const label = (f, i) => f.direction || (i === 0 && f.from && f.to ? '去程' :
    f.from && f.to && f.from === first.to && f.to === first.from ? '回程' : `第 ${i + 1} 段`)
  const port = (f, i, field, time, title) => `<div style="min-width:0">
    <div style="font-size:20px;color:var(--mute)">${c.ed(`it${i}-${field}-label`, title)}</div>
    <div style="font:700 ${U.fit(c.tx(`it${i}-${time}`, f[time] || '未知'), portW, 92, 32)}px/1.2 var(--sans);font-variant-numeric:tabular-nums;letter-spacing:-.045em;margin-top:14px">${c.ed(`it${i}-${time}`, f[time] || '未知')}</div>
    <div style="font-size:${U.fit(c.tx(`it${i}-${field}`, f[field] || '未知'), portW, 29, 18)}px;line-height:1.5;margin-top:14px">${c.ed(`it${i}-${field}`, f[field] || '未知')}</div>
  </div>`
  return `<style>
    .v-panorama-gates .pg-reveal{animation-name:flight-panorama-reveal;animation-duration:.8s}
    @keyframes flight-panorama-reveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-panorama-gates .pg-reveal{animation:none}}
  </style>
  ${src ? `<img class="hero in pg-reveal" src="${U.esc(src)}" alt="" style="position:absolute;inset:0;width:1920px;height:590px;object-fit:cover;object-position:50% 48%;--i:0">` : ''}
  <div class="ab" style="inset:0 0 auto;height:410px;background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 88%,transparent),color-mix(in srgb,var(--ink) 25%,transparent))"></div>
  <div class="ab in" style="left:120px;top:106px;color:var(--paper);--i:1">
    <div style="font-size:24px;letter-spacing:.14em">${c.ed('k', '航班資訊')}</div>
    <div class="serif" style="font-size:${U.fit(c.tx('h', c.p.title || '去程與回程'), 1050, 82, 36)}px;line-height:1.3;margin-top:22px">${c.ed('h', c.p.title || '去程與回程')}</div>
  </div>
  ${c.meta.dates ? `<div class="ab in" style="right:120px;top:126px;font-size:24px;color:var(--paper);--i:1">${c.ed('dates', c.meta.dates)}</div>` : ''}
  <div class="ab in" style="left:120px;top:410px;width:1680px;height:590px;display:grid;grid-template-columns:repeat(${c.n},minmax(0,1fr));background:var(--paper);border:1px solid var(--line);border-radius:14px;box-shadow:0 22px 48px -28px var(--ink);--i:2">
    ${c.items.map((f, i) => `<section class="in" style="position:relative;padding:34px ${pad}px 30px;min-width:0;${i ? 'border-left:1px solid var(--line);' : ''}--i:${i + 3}">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:20px;color:${i ? 'var(--ink)' : 'var(--acc)'}">
        <div class="serif" style="font-size:34px;white-space:nowrap">${c.ed(`it${i}-direction`, label(f, i))}</div>
        ${f.sub ? `<div style="font-size:25px;white-space:nowrap">${c.ed(`it${i}-sub`, clean(f.sub))}</div>` : ''}
      </div>
      <div style="margin-top:28px;border-top:3px solid ${i ? 'var(--ink)' : 'var(--acc)'};padding-top:24px;font-size:${U.fit(c.tx('it' + i, f.t || '未知'), inner, 31, 18)}px;line-height:1.4">${c.ed('it' + i, clean(f.t) || '未知')}</div>
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;margin-top:40px">
        ${port(f, i, 'from', 'dep', '起飛')}${port(f, i, 'to', 'arr', '抵達')}
      </div>
      ${f.body ? `<div style="position:absolute;left:${pad}px;right:${pad}px;bottom:30px;border-top:1px solid var(--line);padding-top:20px;font-size:22px;line-height:1.6;color:var(--mute)">${c.ed(`it${i}-body`, clean(f.body))}</div>` : ''}
    </section>`).join('')}
  </div>`
} }) }

/* variants/flight/pass.js */
// flight／pass：登機證——一段一張票，主票（日期・航班｜出發代碼 → 抵達代碼｜時間）＋虛線撕口＋右側存根，撕口上下各咬一個半圓缺口
// 航班票卡一段一張、時間最大，使用白卡陰影。1～3 段；欄位缺就整塊不放。
{ const U = M.util
const code = s => ((s || '').match(/\b[A-Z]{3}\b/) || [''])[0], city = s => (s || '').replace(/\s*\b[A-Z]{3}\b\s*/, '').trim()
M.add('flight', 'pass', { name: '登機證', range: [1, 3], html: c => {
  const n = c.n, gap = 34, H = n === 1 ? 500 : n === 2 ? 330 : 222, W = 1560, SW = 380, x = 180, y0 = 270 + Math.max(0, (700 - (H * n + gap * (n - 1))) / 2)
  const dir = i => n === 1 || i === 0 ? '去程' : i === n - 1 ? '回程' : '第 ' + (i + 1) + ' 段'
  const cf = Math.round(H * (n === 1 ? .26 : .27)), small = Math.max(16, Math.round(H * .06)), tf = Math.max(22, Math.round(H * .1))
  const end = (s, t, al) => (code(s) || city(s) || t) ? `<div style="text-align:${al}"><div style="font:900 ${cf}px/1 var(--serif);letter-spacing:.02em">${U.esc(code(s) || city(s))}</div>
      <div style="font-size:${small + 2}px;margin-top:${Math.round(H * .03)}px;color:var(--mute)">${U.esc(code(s) ? city(s) : '')}${t ? `　<b style="color:var(--ink);font:700 ${tf}px var(--serif)">${U.esc(t)}</b>` : ''}</div></div>` : '<div></div>'
  const tk = (f, i) => { const y = y0 + i * (H + gap), has = f.from || f.to
    return `<div class="in" style="position:absolute;left:${x}px;top:${y}px;width:${W}px;height:${H}px;--i:${i + 2};filter:drop-shadow(0 22px 26px rgba(0,0,0,.18))">
      <div style="position:absolute;inset:0;background:#fff;-webkit-mask:radial-gradient(circle at ${W - SW}px 0,#0000 22px,#000 23px) top/100% 51% no-repeat,radial-gradient(circle at ${W - SW}px 100%,#0000 22px,#000 23px) bottom/100% 51% no-repeat;mask:radial-gradient(circle at ${W - SW}px 0,#0000 22px,#000 23px) top/100% 51% no-repeat,radial-gradient(circle at ${W - SW}px 100%,#0000 22px,#000 23px) bottom/100% 51% no-repeat"></div>
      <div style="position:absolute;left:0;top:0;width:12px;height:${H}px;background:${i ? 'var(--ink)' : 'var(--acc)'}"></div>
      <div style="position:absolute;left:${W - SW}px;top:30px;height:${H - 60}px;border-left:3px dashed #c9cdd0"></div></div>
    <div class="ab" style="left:${x + 70}px;top:${y}px;width:${W - SW - 130}px;height:${H}px;display:flex;flex-direction:column;justify-content:center;gap:${Math.round(H * .05)}px">
      <div style="display:flex;gap:24px;align-items:baseline;font-size:${small}px;letter-spacing:.2em;color:var(--mute)"><span style="color:${i ? 'var(--ink)' : 'var(--acc)'};font-weight:700">${dir(i)}</span>${U.esc(f.sub || '')}${f.body && n === 1 ? `<span style="letter-spacing:.05em">${U.esc(f.body)}</span>` : ''}</div>
      ${has ? `<div style="display:grid;grid-template-columns:1fr ${Math.round(W * .2)}px 1fr;align-items:center">${end(f.from, f.dep, 'left')}
        <div style="position:relative;height:4px;background:repeating-linear-gradient(90deg,var(--acc) 0 14px,#0000 14px 26px)"><i style="position:absolute;right:-6px;top:-12px;border-left:24px solid var(--acc);border-top:14px solid transparent;border-bottom:14px solid transparent"></i></div>
        ${end(f.to, f.arr, 'right')}</div>` : ''}</div>
    <div class="ab" style="left:${x + W - SW + 50}px;top:${y}px;width:${SW - 90}px;height:${H}px;display:flex;flex-direction:column;justify-content:center;gap:${Math.round(H * .03)}px">
      <div style="font-size:16px;letter-spacing:.3em;color:var(--mute)">航班</div>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, f.t), SW - 90, n === 3 ? 26 : 32, 18)}px;line-height:1.3">${c.ed('it' + i, f.t)}</div>
      ${f.body && n > 1 && H > 300 ? `<div style="font-size:17px;line-height:1.5;color:var(--mute)">${U.esc(f.body)}</div>` : ''}</div>` }
  return `<div class="ab in" style="left:120px;top:100px;--i:1"><div class="kick">${c.ed('k', '航班資訊')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', n === 1 ? '搭這班飛機' : '去程與回程')}</div></div>` + c.items.map(tk).join('') } }) }

/* variants/flight/route.js */
// flight／route：航線弧——一段一列：左邊日期與航班、中間「出發代碼 ⌒ 抵達代碼」用虛線弧連起來，弧頂一個三角形航向記號
{ const U = M.util
const code = s => ((s || '').match(/\b[A-Z]{3}\b/) || [''])[0], city = s => (s || '').replace(/\s*\b[A-Z]{3}\b\s*/, '').trim()
M.add('flight', 'route', { name: '航線弧', range: [1, 3], html: c => {
  const n = c.n, H = n === 1 ? 460 : n === 2 ? 330 : 230, top = 270 + Math.max(0, (700 - H * n) / 2), cf = Math.round(Math.min(130, H * .3))
  const dir = i => n === 1 || i === 0 ? '去程' : i === n - 1 ? '回程' : '第 ' + (i + 1) + ' 段'
  const A = 620, B = 1800, ew = 300
  const row = (f, i) => { const y = top + i * H, yb = y + H * .62, xa = A + ew, xb = B - ew, apex = yb - H * .26
    const end = (s, t, x, al) => `<div class="ab" style="left:${x}px;top:${yb - cf * .62}px;width:${ew}px;text-align:${al}">
      <div style="font:900 ${cf}px/1 var(--serif);color:${al === 'left' ? 'var(--ink)' : 'var(--acc)'}">${U.esc(code(s) || city(s))}</div>
      <div style="font-size:20px;color:var(--mute);margin-top:10px">${U.esc(code(s) ? city(s) : '')}${t ? `　<b style="font:700 ${Math.max(24, cf * .3)}px var(--serif);color:var(--ink)">${U.esc(t)}</b>` : ''}</div></div>`
    const has = f.from || f.to
    return `<div class="in" style="--i:${i + 2}">${i ? `<div style="position:absolute;left:120px;top:${y}px;width:1680px;border-top:1px solid #d9dcd8"></div>` : ''}
      <div class="ab" style="left:120px;top:${y + (H - 150) / 2}px;width:440px">
        <div style="font-size:19px;letter-spacing:.24em;color:${i ? 'var(--ink)' : 'var(--acc)'};font-weight:700">${dir(i)}</div>
        <div class="serif" style="font-size:${n === 3 ? 30 : 36}px;margin-top:6px">${U.esc(f.sub || '')}</div>
        <div style="font-size:${U.fit(c.tx('it' + i, f.t), 440, 22, 17)}px;margin-top:6px">${c.ed('it' + i, f.t)}</div>
        ${f.body && H >= 300 ? `<div style="font-size:17px;line-height:1.5;color:var(--mute);margin-top:6px">${U.esc(f.body)}</div>` : ''}</div>
      ${has ? `<svg style="position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:visible" viewBox="0 0 1920 1080">
        <path d="M${xa + 20},${yb} Q${(xa + xb) / 2},${yb - H * .52} ${xb - 20},${yb}" fill="none" stroke="var(--acc)" stroke-width="3" stroke-dasharray="3 12" stroke-linecap="round"/>
        <circle cx="${xa + 20}" cy="${yb}" r="7" fill="var(--ink)"/><circle cx="${xb - 20}" cy="${yb}" r="7" fill="var(--acc)"/>
        <path d="M${(xa + xb) / 2 + 22},${apex} L${(xa + xb) / 2 - 12},${apex - 15} L${(xa + xb) / 2 - 4},${apex} L${(xa + xb) / 2 - 12},${apex + 15} Z" fill="var(--acc)"/></svg>
        ${end(f.from, f.dep, A, 'left')}${end(f.to, f.arr, B - ew, 'right')}` : ''}</div>` }
  return `<div class="ab in" style="left:120px;top:100px;--i:1"><div class="kick">${c.ed('k', '航班資訊')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', n === 1 ? '搭這班飛機' : '去程與回程')}</div></div>` + c.items.map(row).join('') } }) }

/* variants/flight/split.js */
// flight／split：大代碼過渡頁——滿版目的地照片上壓一個超大斜體機場代碼，代碼右緣接上由透明轉深的面板，面板裡列每段航班
// 學自小紅書 69f35388（超大斜體數字當分界、面板從照片吸色漸深）。1～3 段；沒有代碼時改用整份的英文地名。
{ const U = M.util
const code = s => ((s || '').match(/\b[A-Z]{3}\b/) || [''])[0], city = s => (s || '').replace(/\s*\b[A-Z]{3}\b\s*/, '').trim()
M.add('flight', 'split', { name: '大代碼過渡頁', range: [1, 3], html: c => {
  const n = c.n, f0 = c.items[0], big = code(f0.to) || c.meta.en || '', src = c.p.img || c.meta.hero, PX = 1060, lh = 600 / n
  const dir = i => n === 1 || i === 0 ? '去程' : i === n - 1 ? '回程' : '第 ' + (i + 1) + ' 段'
  const legs = c.items.map((f, i) => `<div class="ab in" style="left:${PX + 80}px;top:${380 + i * lh}px;width:${1800 - PX - 80}px;color:#fff;padding-top:22px;border-top:1px solid #ffffff44;--i:${i + 4}">
      <div style="font-size:18px;letter-spacing:.24em;color:#ffffffaa">${dir(i)}　${U.esc(f.sub || '')}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, f.t), 640, 30, 18)}px;margin-top:6px">${c.ed('it' + i, f.t)}</div>
      ${f.from || f.dep ? `<div style="font:700 ${n === 1 ? 48 : 38}px var(--serif);margin-top:10px;letter-spacing:.02em">${U.esc(code(f.from) || city(f.from))} ${U.esc(f.dep || '')}<span style="color:var(--acc3);margin:0 .4em">→</span>${U.esc(code(f.to) || city(f.to))} ${U.esc(f.arr || '')}</div>` : ''}
      ${f.body && lh >= 280 ? `<div style="font-size:18px;color:#ffffffaa;margin-top:8px">${U.esc(f.body)}</div>` : ''}</div>`).join('')
  return `<img class="hero" src="${src}" alt="" style="position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:cover">
    <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,18,20,.32) 0%,rgba(15,18,20,.32) 30%,color-mix(in srgb,var(--ink) 72%,#0000) ${PX / 19.2}%,color-mix(in srgb,var(--ink) 94%,#0000) 100%)"></div>
    <div class="in" style="position:absolute;left:40px;bottom:-70px;font:italic 900 ${big.length > 4 ? 300 : 470}px/1 var(--serif);color:#ffffffd9;letter-spacing:-.02em;text-shadow:0 10px 60px rgba(0,0,0,.25);--i:1">${U.esc(big)}</div>
    <div class="ab in" style="left:${PX + 80}px;top:120px;color:#fff;--i:2"><div class="kick" style="color:var(--acc3)">${c.ed('k', '航班資訊')}</div>
      <div class="serif" style="font-size:64px;margin-top:12px">${c.ed('h', city(f0.to) ? '飛往' + city(f0.to) : '去程與回程')}</div></div>` + legs } }) }

/* variants/flight/vertical-journal.js */
// flight／vertical-journal：航廈照片旁的直式起降雙軸
// 1～2 航段，欄寬依 c.n 均分；不推算飛行時間、不把未知航段當回程
{ const U = M.util
M.add('flight', 'vertical-journal', { name: '直式航程', range: [1, 2], html: c => {
  const photoW = 960 - 280 * (c.n - 1), left = photoW + 120, area = 1800 - left
  const gap = 64, width = (area - gap * (c.n - 1)) / c.n, inner = width - 46
  const clean = s => String(s || '').replace(/[，。,.]+$/u, '')
  const src = c.p.img || (c.meta.pool || []).find(s => /icn-arrival/.test(s)) || c.meta.hero
  const first = c.items[0] || {}
  const direction = (f, i) => f.direction || (i === 0 && f.from && f.to ? '去程' :
    f.from && f.to && f.from === first.to && f.to === first.from ? '回程' : `第 ${i + 1} 段`)
  const port = (f, i, field, time, label) => `<div class="vj-stop">
    <div style="font-size:20px;color:var(--mute)">${c.ed(`it${i}-${field}-label`, label)}</div>
    <div style="font:700 ${U.fit(c.tx(`it${i}-${time}`, f[time] || '未知'), inner, c.n === 1 ? 118 : 94, 36)}px/1.12 var(--sans);letter-spacing:-.045em;font-variant-numeric:tabular-nums;margin-top:8px">${c.ed(`it${i}-${time}`, f[time] || '未知')}</div>
    <div style="font-size:${U.fit(c.tx(`it${i}-${field}`, f[field] || '未知'), inner, 32, 20)}px;line-height:1.5;margin-top:12px">${c.ed(`it${i}-${field}`, clean(f[field]) || '未知')}</div>
  </div>`
  return `<style>
    .v-vertical-journal [contenteditable]{display:inline-block}
    .v-vertical-journal .vj-photo{animation-name:flight-vj-cut;animation-duration:.8s}
    .v-vertical-journal .vj-rail{position:relative;display:grid;grid-template-rows:1fr 1fr;gap:38px;padding-left:46px;margin-top:32px}
    .v-vertical-journal .vj-rail:before{content:"";position:absolute;left:7px;top:15px;bottom:calc(50% - 34px);width:2px;background:var(--leg)}
    .v-vertical-journal .vj-stop{position:relative}
    .v-vertical-journal .vj-stop:before{content:"";position:absolute;left:-46px;top:8px;width:16px;height:16px;border:3px solid var(--leg);border-radius:50%;background:var(--paper)}
    .v-vertical-journal .vj-stop:last-child:before{background:var(--leg)}
    @keyframes flight-vj-cut{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-vertical-journal .vj-photo{animation:none}}
  </style>
  ${src ? `<img class="hero in vj-photo" src="${U.esc(src)}" alt="" style="position:absolute;left:0;top:0;width:${photoW}px;height:1080px;object-fit:cover;object-position:46% 50%;--i:0">` : ''}
  <div class="ab" style="left:0;bottom:0;width:${photoW}px;height:600px;background:linear-gradient(transparent,var(--ink))"></div>
  <div class="ab in" style="left:120px;bottom:100px;width:440px;color:var(--paper);--i:1">
    ${c.meta.en ? `<div style="font-size:${U.fit(c.tx('en', c.meta.en), 440, 72, 28)}px;letter-spacing:.06em;font-weight:700;margin-bottom:22px">${c.ed('en', c.meta.en)}</div>` : ''}
    ${c.meta.title ? `<div class="serif" style="font-size:36px;line-height:1.5">${c.ed('trip-title', clean(c.meta.title))}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:22px;line-height:1.5;margin-top:28px;padding-top:24px;border-top:1px solid color-mix(in srgb,var(--paper) 45%,transparent)">${c.ed('dates', c.meta.dates)}</div>` : ''}
  </div>
  <header class="ab in" style="left:${left}px;top:96px;width:${area}px;--i:1">
    <div class="kick">${c.ed('k', '航班資訊')}</div>
    <div class="serif" style="font-size:${U.fit(c.tx('h', c.p.title || '去程與回程'), area, 68, 32)}px;line-height:1.3;margin-top:16px">${c.ed('h', c.p.title || '去程與回程')}</div>
  </header>
  <div class="ab" style="left:${left}px;top:296px;width:${area}px;height:684px;display:grid;grid-template-columns:repeat(${c.n},minmax(0,1fr));gap:${gap}px">
    ${c.items.map((f, i) => `<section class="in" style="--leg:${i ? 'var(--acc2)' : 'var(--acc)'};--i:${i + 2};min-width:0;display:flex;flex-direction:column;border-top:4px solid var(--leg);padding-top:22px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:16px">
        <div class="serif" style="font-size:36px;color:var(--leg);white-space:nowrap">${c.ed(`it${i}-direction`, direction(f, i))}</div>
        ${f.sub ? `<div style="font-size:24px;white-space:nowrap">${c.ed(`it${i}-sub`, clean(f.sub))}</div>` : ''}
      </div>
      <div style="font-size:${U.fit(c.tx('it' + i, f.t || '未知'), width, 27, 20)}px;line-height:1.5;margin-top:14px;min-height:42px">${c.ed('it' + i, clean(f.t) || '未知')}</div>
      <div class="vj-rail">${port(f, i, 'from', 'dep', '起飛')}${port(f, i, 'to', 'arr', '抵達')}</div>
      ${f.body ? `<div style="margin-top:auto;padding-top:22px;border-top:1px solid var(--line);font-size:22px;line-height:1.6;color:var(--mute)">${c.ed(`it${i}-body`, clean(f.body))}</div>` : ''}
    </section>`).join('')}
  </div>`
} }) }

/* variants/food/_gallery.js */
// T11 共用圖組：移植 engine/tpl/lib/gallery.mjs:1–18、106–150；保留來源，執行時不依賴舊引擎
{
/**
 * 照片版型大腦：給它 N 張照片和一塊空間，它挑出最合適的排法。
 *
 * 為什麼這樣做（2026-10-05 William）：
 *   「這行程多放一張照片，它會自動切換——五個照片的模板、六個的、七個的、一個的都要。」
 *   承辦人只管「放幾張照片」，版面不用他想。
 *
 * 怎麼挑：
 *   1. 每個張數有 3～5 種排法（下面 LAYOUTS），不對稱的會自動多一個左右鏡像版
 *   2. 用真的照片寬高去算：直的照片塞進橫格子會被裁掉一大半——裁得越多扣越多分
 *      （第一張是主圖，永遠分到最大格；其他按長寬比配對：直圖進直格、橫圖進橫格）
 *   3. 太細的格子（細過 1:2.2）、太小的格子扣分
 *   4. 分數差不多的幾種輪流用（同一份文件裡相鄰兩頁不會長一樣）
 *   超過 7 張：前 7 張排這頁，其餘由頁面模組接到「更多照片」續頁。
 *
 * 承辦人可以手動指定：照片物件寫 focus:"50% 30%"（裁切重心）、hero:true（指定主圖）；
 * 項目上寫 layout:"5b"（固定用某一種）。
 */

// cols/rows 是比例（fr）；areas 每個字母一格，a 不一定是主圖——主圖由面積決定
const LAYOUTS = {
  1: [
    { id: '1a', cols: [1], rows: [1], areas: ['a'] },
  ],
  2: [
    { id: '2a', cols: [1.6, 1], rows: [1], areas: ['a b'] },
    { id: '2b', cols: [1, 1], rows: [1], areas: ['a b'] },
    { id: '2c', cols: [1], rows: [1.5, 1], areas: ['a', 'b'] },
  ],
  3: [
    { id: '3a', cols: [1.5, 1], rows: [1, 1], areas: ['a b', 'a c'] },
    { id: '3b', cols: [1, 1, 1], rows: [1], areas: ['a b c'] },
    { id: '3c', cols: [1, 1], rows: [1.45, 1], areas: ['a a', 'b c'] },
    { id: '3d', cols: [1, 1.35, 1], rows: [1], areas: ['b a c'] },
    { id: '3e', cols: [1.25, 1], rows: [1, 1, 1], areas: ['a b', 'a b', 'c c'] },
  ],
  4: [
    { id: '4a', cols: [2, 1], rows: [1, 1, 1], areas: ['a b', 'a c', 'a d'] },
    { id: '4b', cols: [1, 1], rows: [1, 1], areas: ['a b', 'c d'] },
    { id: '4c', cols: [1, 1, 1], rows: [1.6, 1], areas: ['a a a', 'b c d'] },
    { id: '4d', cols: [1.4, 1, 1], rows: [1, 1], areas: ['a b c', 'a d d'] },
    { id: '4e', cols: [1, 1, 1, 1], rows: [1], areas: ['a b c d'] },
  ],
  5: [
    { id: '5a', cols: [2, 1, 1], rows: [1, 1], areas: ['a b c', 'a d e'] },
    { id: '5b', cols: [1, 1, 1, 1, 1, 1], rows: [1.35, 1], areas: ['a a a b b b', 'c c d d e e'] },
    { id: '5c', cols: [1, 1, 1, 1, 1], rows: [1], areas: ['a b c d e'] },
    { id: '5d', cols: [1, 1.5, 1], rows: [1, 1], areas: ['b a d', 'c a e'] },
    { id: '5e', cols: [1.5, 1], rows: [1, 1, 1, 1], areas: ['a b', 'a c', 'a d', 'a e'] },
  ],
  6: [
    { id: '6a', cols: [1, 1, 1], rows: [1, 1], areas: ['a b c', 'd e f'] },
    { id: '6b', cols: [1, 1, 1], rows: [1, 1, 1], areas: ['a a b', 'a a c', 'd e f'] },
    { id: '6c', cols: [1.6, 1, 1, 1], rows: [1, 1], areas: ['a b c d', 'a e f d'] },
    { id: '6d', cols: [1, 1], rows: [1, 1, 1], areas: ['a b', 'c d', 'e f'] },
    { id: '6e', cols: [1, 1, 1, 1], rows: [1.3, 1], areas: ['a a b b', 'c d e f'] },
  ],
  7: [
    { id: '7a', cols: [1, 1, 1, 1], rows: [1, 1, 1], areas: ['a a b c', 'a a d e', 'f f g g'] },
    { id: '7b', cols: [1.5, 1, 1], rows: [1, 1, 1], areas: ['a b c', 'a d e', 'a f g'] },
    { id: '7c', cols: [1, 1, 1, 1], rows: [1.3, 1], areas: ['a a b c', 'd e f g'] },
    { id: '7d', cols: [1, 1.4, 1], rows: [1, 1, 1], areas: ['b a e', 'c a f', 'd a g'] },
    { id: '7e', cols: [1, 1, 1], rows: [1.2, 1, 1], areas: ['a a b', 'c d b', 'e f g'] },
  ],
}

// 不對稱的排法自動加一個左右鏡像（id 加 m）；對稱的鏡像只是換字母，不算新排法
function norm(areas) {
  const m = new Map()
  return areas.map(r => r.split(' ').map(k => k === '.' ? '.' : (m.has(k) ? m.get(k) : (m.set(k, String.fromCharCode(97 + m.size)), m.get(k)))).join(' ')).join('|')
}
for (const n in LAYOUTS) {
  const extra = []
  for (const L of LAYOUTS[n]) {
    const areas = L.areas.map(r => r.split(' ').reverse().join(' '))
    if (norm(areas) !== norm(L.areas) || [...L.cols].reverse().join() !== L.cols.join()) extra.push({ ...L, id: L.id + 'm', cols: [...L.cols].reverse(), areas })
  }
  LAYOUTS[n].push(...extra)
}

const MAX = 7

// 依 fr 與間距算出每一格的實際寬高（px）
function cells(L, W, H, gap) {
  const grid = L.areas.map(r => r.split(' '))
  const nc = L.cols.length, nr = L.rows.length
  const cw = (W - gap * (nc - 1)) / L.cols.reduce((a, b) => a + b, 0)
  const rh = (H - gap * (nr - 1)) / L.rows.reduce((a, b) => a + b, 0)
  const out = {}
  grid.forEach((row, r) => row.forEach((k, c) => {
    if (k === '.') return
    const o = out[k] ||= { k, c0: c, c1: c, r0: r, r1: r }
    o.c0 = Math.min(o.c0, c); o.c1 = Math.max(o.c1, c); o.r0 = Math.min(o.r0, r); o.r1 = Math.max(o.r1, r)
  }))
  return Object.values(out).map(o => {
    let w = gap * (o.c1 - o.c0), h = gap * (o.r1 - o.r0)
    for (let c = o.c0; c <= o.c1; c++) w += L.cols[c] * cw
    for (let r = o.r0; r <= o.r1; r++) h += L.rows[r] * rh
    return { k: o.k, w, h, ar: w / h, area: w * h, r0: o.r0, c0: o.c0 }
  })
}

const ar = ph => (Number.isFinite(ph.w) && Number.isFinite(ph.h) && ph.w > 0 && ph.h > 0) ? ph.w / ph.h : null // 未知尺寸不猜比例

// 照片配格子：主圖拿最大格，其他依長寬比排序一一對上
function assign(L, phs, W, H, gap) {
  const cs = cells(L, W, H, gap)
  const heroIdx = Math.max(0, phs.findIndex(p => p.hero))
  const big = cs.reduce((m, c) => c.area > m.area ? c : m, cs[0])
  const restC = cs.filter(c => c !== big).sort((a, b) => a.ar - b.ar)
  const restP = phs.map((p, i) => ({ p, i })).filter(x => x.i !== heroIdx).sort((a, b) => ar(a.p) - ar(b.p))
  const pairs = [{ c: big, p: phs[heroIdx], hero: true }]
  restC.forEach((c, i) => pairs.push({ c, p: restP[i].p }))
  return pairs
}

function score(L, phs, W, H, gap, minPx) {
  const pairs = assign(L, phs, W, H, gap)
  const total = pairs.reduce((s, x) => s + x.c.area, 0)
  let s = 0
  for (const { c, p } of pairs) {
    // 裁掉多少：大格子權重大，但小格子也要算（只照面積算，小格裁成一條細縫也不扣分——2026-10-05 企鵝照被裁成細條）
    if (ar(p)) s += (0.55 * c.area / total + 0.45 / pairs.length) * Math.abs(Math.log(c.ar / ar(p)))
    if (c.ar < 0.45 || c.ar > 3.2) s += 0.6                          // 細長條
    if (Math.min(c.w, c.h) < minPx) s += 1                            // 太小看不清
  }
  // 主圖格子要夠大：不到整塊三成，再好看也不是「主圖」
  const heroShare = pairs[0].c.area / total
  if (phs.length > 1 && heroShare < 0.22) s += 0.25
  return { s, pairs }
}

/**
 * 挑排法。ctx.seed：第幾次呼叫（讓相鄰頁輪替）；ctx.pin：指定 id；ctx.avoid：上一頁用過的 id
 */
function choose(phs, W, H, { gap = 16, minPx = 140, seed = 0, pin = null, avoid = null } = {}) {
  if (!phs.length) return null
  const n = Math.min(phs.length, MAX)
  const list = phs.slice(0, n)
  const cand = LAYOUTS[n].map(L => ({ L, ...score(L, list, W, H, gap, minPx) }))
  if (pin) { const c = cand.find(x => x.L.id === pin); if (c) return c }
  cand.sort((a, b) => a.s - b.s)
  const best = cand[0].s
  let pool = cand.filter(c => c.s <= best + 0.12)
  if (avoid && pool.length > 1) {
    const f = pool.filter(c => c.L.id.replace('m', '') !== String(avoid).replace('m', ''))
    if (f.length) pool = f
  }
  return pool[((Math.trunc(seed) || 0) % pool.length + pool.length) % pool.length]
}


const U = M.util, W = 1120, H = 900, gap = 14
const clean = s => String(s ?? '').replace(/[，。；、,.]+$/u, '')
const focus = s => /^(?:100(?:\.0+)?|\d{1,2}(?:\.\d+)?)% (?:100(?:\.0+)?|\d{1,2}(?:\.\d+)?)%$/.test(s || '') ? s : '50% 50%'
const photos = c => c.items.map((p, i) => ({...c.meta.photoSizes?.[p.img], ...p, i})).filter(p => p.img)
const gridStyle = L => `grid-template-columns:${L.cols.map(x => x + 'fr').join(' ')};grid-template-rows:${L.rows.map(x => x + 'fr').join(' ')};grid-template-areas:${L.areas.map(r => "'" + r + "'").join(' ')}`
function html(c) {
  const phs = photos(c), pick = choose(phs, W, H, {gap, seed:c.pi || 0, pin:c.p.galleryLayout})
  const title = clean(c.p.title || (c.p.type === 'stay' ? '住宿安排' : c.p.type === 'food' ? '在地餐食' : ''))
  const labelled = c.items.map((p,i)=>({...p,i})).filter(p=>p.t || p.sub || p.body)
  return `<style>
    .v-auto-gallery{background:var(--paper);color:var(--ink)}
    .v-auto-gallery .ag-grid{position:absolute;left:120px;top:90px;width:${W}px;height:${H}px;display:grid;gap:${gap}px}
    .v-auto-gallery figure{position:relative;margin:0;min-width:0;min-height:0;overflow:hidden;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);background:var(--ink)}
    .v-auto-gallery figure img{width:100%;height:100%;display:block;object-fit:cover}
    .v-auto-gallery .ag-copy{position:absolute;left:1300px;top:90px;width:500px;height:900px;display:flex;flex-direction:column;gap:24px}
    .v-auto-gallery .ag-list{flex:1;min-height:0;display:flex;flex-direction:column;justify-content:space-evenly;gap:12px}
    .v-auto-gallery .ag-entry{border-top:1px solid color-mix(in srgb,var(--ink) 25%,transparent);padding-top:12px}
    .v-auto-gallery .ag-number{position:absolute;left:14px;bottom:14px;padding:4px 10px;background:var(--paper);color:var(--ink);font-size:18px}
  </style>
  ${pick ? `<div class="ag-grid" data-gallery-layout="${pick.L.id}" style="${gridStyle(pick.L)}">${pick.pairs.map(({c:cell,p,hero})=>`<figure data-photo-index="${p.i}" style="grid-area:${cell.k}"><img ${hero?'class="hero"':''} src="${U.esc(p.img)}" alt="" style="object-position:${focus(p.focus)}">${labelled.length ? `<div class="ag-number">${c.ed('ag-no'+p.i,U.no(p.i))}</div>` : ''}</figure>`).join('')}</div>` : ''}
  <div class="ag-copy">
    ${c.p.sub ? `<div style="font-size:20px;color:var(--acc)">${c.ed('k',clean(c.p.sub))}</div>` : ''}
    <div class="serif" style="font-size:${U.fit(c.tx('h',title),920,64,30)}px;line-height:1.25;text-wrap:balance">${c.ed('h',title)}</div>
    ${c.p.body ? `<div style="font-size:24px;line-height:1.7">${c.ed('b',clean(c.p.body))}</div>` : ''}
    <div class="ag-list">${labelled.map(p=>`<section class="ag-entry">
      <div style="font-size:${labelled.length>5?22:28}px;line-height:1.4">${c.ed('ag-label'+p.i,U.no(p.i))} ${c.ed('t'+p.i,clean(p.t))}</div>
      ${p.sub?`<div style="font-size:18px;line-height:1.5;color:var(--acc)">${c.ed('sub'+p.i,clean(p.sub))}</div>`:''}
      ${p.body?`<div style="font-size:${labelled.length>4?18:22}px;line-height:1.5">${c.ed('b'+p.i,clean(p.body))}</div>`:''}
    </section>`).join('')}</div>
    ${c.p.tags?.length?`<div style="border-top:2px solid var(--acc);padding-top:22px;font-size:20px;line-height:1.7">${c.p.tags.map((t,i)=>c.ed('tg'+i,clean(t))).join(' · ')}</div>`:''}
  </div>`
}
// Read actual decoded dimensions after the core applies user image replacements.
// Reassign existing figures only: focus, edited captions and image identity survive.
function onEnter(root,c,{signal}) {
  const grid = root.querySelector('.ag-grid'); if (!grid) return
  const figures = [...grid.querySelectorAll('figure')]
  const update = () => {
    if (signal.aborted) return
    const phs = figures.map(f=>{
      const i=Number(f.dataset.photoIndex), im=f.querySelector('img')
      return {...c.items[i],i,w:im.naturalWidth || null,h:im.naturalHeight || null}
    })
    const pick=choose(phs,W,H,{gap,seed:c.pi || 0,pin:c.p.galleryLayout}); if(!pick) return
    grid.style.cssText=gridStyle(pick.L); grid.dataset.galleryLayout=pick.L.id
    for(const {c:cell,p,hero} of pick.pairs){
      const f=figures.find(f=>Number(f.dataset.photoIndex)===p.i)
      f.style.gridArea=cell.k; f.querySelector('img').classList.toggle('hero',!!hero)
    }
  }
  Promise.all(figures.map(f=>f.querySelector('img').decode().catch(()=>{}))).then(update)
  for(const f of figures) f.querySelector('img').addEventListener('load',update,{signal})
}
M.gallery = {LAYOUTS,cells,assign,score,choose,html,onEnter}
}

/* variants/food/arc.js */
// food／arc：拱形觀景窗——一道半圓拱被放射線切成幾片，一片一道菜的照片，菜名寫在片上；標題坐在拱心
// 學自小紅書 692e9b43（空心弧切 4 片放照片）、69ff31d8／69e3743e（輪盤扇格）。3～6 道。用 U.sector 同一圓心算，圓一定圓。
{ const U = M.util
M.add('food', 'arc', { name: '拱形觀景窗', range: [3, 6], html: c => {
  const n = c.n, cx = 960, cy = 950, r0 = 290, r1 = 740, g = 1.1, rm = (r0 + r1) / 2
  const P = (r, d) => [cx + r * Math.cos(d * Math.PI / 180), cy + r * Math.sin(d * Math.PI / 180)]
  let defs = '', imgs = '', labels = ''
  c.items.forEach((it, i) => { const a = 180 + 180 * i / n + g / 2, b = 180 + 180 * (i + 1) / n - g / 2, d = U.sector(cx, cy, r0, r1, a, b)
    const pts = []; for (let t = 0; t <= 12; t++) { const ang = a + (b - a) * t / 12; pts.push(P(r0, ang), P(r1, ang)) }
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]), x0 = Math.min(...xs), y0 = Math.min(...ys), bw = Math.max(...xs) - x0, bh = Math.max(...ys) - y0
    defs += `<clipPath id="food-arc-c${i}"><path d="${d}"/></clipPath>`
    imgs += it.img ? `<image href="${it.img}" x="${x0}" y="${y0}" width="${bw}" height="${bh}" preserveAspectRatio="xMidYMid slice" clip-path="url(#food-arc-c${i})"/><path d="${d}" fill="rgba(0,0,0,.3)"/>`
      : `<path d="${d}" fill="var(--acc)"/>`
    const m = (a + b) / 2, [lx, ly] = P(rm, m), lw = Math.min(330, 2 * rm * Math.sin((b - a) * Math.PI / 360) * .82)
    labels += `<div class="ab in" style="left:${lx - lw / 2}px;top:${ly - 40}px;width:${lw}px;text-align:center;color:#fff;text-shadow:0 2px 14px rgba(0,0,0,.7);--i:${i + 3}">
      ${it.sub ? `<div style="font-size:17px;letter-spacing:.1em">${U.esc(it.sub)}</div>` : ''}
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), lw, n <= 4 ? 34 : 28, 18)}px;line-height:1.3;margin-top:4px">${c.ed('it' + i, it.t)}</div></div>` })
  return `<svg class="in" viewBox="0 0 1920 1080" style="position:absolute;inset:0;width:1920px;height:1080px;--i:1"><defs>${defs}</defs>${imgs}
      <path d="${U.sector(cx, cy, r1 + 18, r1 + 21, 180, 360)}" fill="var(--acc)"/></svg>` + labels +
    `<div class="ab in" style="left:${cx - 230}px;top:${cy - 190}px;width:460px;text-align:center;--i:2"><div class="kick">${c.ed('k', '在地餐食')}</div>
      <div class="serif" style="font-size:52px;line-height:1.25;margin-top:10px">${c.ed('h', '這趟會吃到的 ' + n + ' 道')}</div></div>` } }) }

/* variants/food/auto-gallery.js */
// food／auto-gallery：依照片真實比例配格；來源 engine/tpl/lib/gallery.mjs:1–18、106–150
M.add('food', 'auto-gallery', { name:'依照片自動配圖', range:[1,5], auto:false, html:c=>M.gallery.html(c), onEnter:(...args)=>M.gallery.onEnter(...args) })

/* variants/food/banquet-spread.js */
// 設計教學來源：小紅書 6946c194000000001e00691b
{ const U = M.util
M.add('food', 'banquet-spread', { name: '餐飲跨頁', range: [3, 5], html: c => {
  const clean = s => String(s || '').replace(/[，。！？；、,.!?;]+$/u, '')
  const main = c.items[0] || {}, rest = c.items.slice(1), rail = 280, gap = 24
  const weights = rest.map(it => it.img ? 2 : 1), total = weights.reduce((a, b) => a + b, 0)
  const unit = (888 - gap * (c.n - 2)) / Math.max(1, total)
  const photo = main.img || c.p.img
  return `<style>
    .v-banquet-spread .bs-photo.in{animation:food-banquet-spread-cut .8s cubic-bezier(.16,1,.3,1) both}
    @keyframes food-banquet-spread-cut{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-banquet-spread .bs-photo.in{animation:none}}
  </style>
  <div class="bs-photo in" style="position:absolute;left:448px;top:0;width:1024px;height:1080px;background:var(--acc);--i:0">
    ${photo ? `<img class="hero" src="${U.esc(photo)}" alt="" style="width:100%;height:100%;object-fit:cover">` : ''}
  </div>
  <div class="ab in" style="left:120px;top:96px;width:${rail}px;height:888px;display:flex;flex-direction:column;justify-content:space-between;--i:1">
    <div class="serif" style="writing-mode:vertical-rl;font-size:${U.fit(c.tx('h', c.p.title || '在地餐食'), 440, 95, 39)}px;line-height:1.15;letter-spacing:.08em;max-height:480px;color:var(--acc)">${c.ed('h', c.p.title || '在地餐食')}</div>
    <article style="border-top:1px solid var(--acc);padding-top:24px">
      ${main.sub ? `<div style="font-size:20px;line-height:1.5;color:var(--acc)">${c.ed('sub0', clean(main.sub))}</div>` : ''}
      ${main.t ? `<div class="serif" style="font-size:${U.fit(c.tx('it0', main.t), rail, 39, 25)}px;line-height:1.4;margin-top:8px">${c.ed('it0', clean(main.t))}</div>` : ''}
      ${main.body ? `<p style="font-size:20px;line-height:1.8;text-wrap:pretty;margin:16px 0 0">${c.ed('body0', clean(main.body))}</p>` : ''}
    </article>
  </div>
  <div class="ab" style="left:1520px;top:96px;width:${rail}px;height:888px;display:flex;flex-direction:column;gap:${gap}px">
    ${rest.map((it, j) => { const i = j + 1, height = unit * weights[j]
      return `<article class="in" style="height:${height}px;flex:none;display:flex;flex-direction:column;justify-content:${it.img ? 'start' : 'center'};border-top:1px solid var(--acc);padding-top:16px;--i:${i + 1}">
        ${it.img ? `<img src="${U.esc(it.img)}" alt="" style="width:100%;height:${height - 104}px;object-fit:cover;display:block;margin-bottom:12px">` : ''}
        ${it.sub ? `<div style="font-size:20px;line-height:1.4;color:var(--acc)">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}
        ${it.t ? `<div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), rail, 31, 22)}px;line-height:1.4;margin-top:4px">${c.ed('it' + i, clean(it.t))}</div>` : ''}
        ${!it.img && c.n <= 4 && it.body ? `<p style="font-size:20px;line-height:1.7;margin:16px 0 0;text-wrap:pretty">${c.ed('body' + i, clean(it.body))}</p>` : ''}
      </article>`
    }).join('')}
  </div>`
} }) }

/* variants/food/bento.js */
// food／bento：便當格——右側一塊大方區照菜數切格（第一道最大，其餘依序對半切），菜名壓在照片下緣；左側標題＋第一道的介紹
// 學自小紅書 6a549d7d（雜誌風便當格）、68bf8158（方格照片拼版）。3～8 道。格子由程式依數量切，不是畫死的座標。
{ const U = M.util
M.add('food', 'bento', { name: '便當格', range: [3, 8], html: c => {
  const n = c.n, gap = 14, A = { x: 700, y: 110, w: 1100, h: 860 }
  const split = (r, L) => { if (L.length === 1) return [{ ...r, i: L[0].i }]
    const tot = L.reduce((s, x) => s + x.w, 0); let acc = 0, k = 0
    while (k < L.length - 1 && acc + L[k].w <= tot / 2) acc += L[k++].w
    if (!k) acc = L[k++].w
    const f = acc / tot, A = L.slice(0, k), B = L.slice(k)
    if (r.w >= r.h) { const wa = (r.w - gap) * f; return [...split({ x: r.x, y: r.y, w: wa, h: r.h }, A), ...split({ x: r.x + wa + gap, y: r.y, w: r.w - wa - gap, h: r.h }, B)] }
    const ha = (r.h - gap) * f; return [...split({ x: r.x, y: r.y, w: r.w, h: ha }, A), ...split({ x: r.x, y: r.y + ha + gap, w: r.w, h: r.h - ha - gap }, B)] }
  const cells = split(A, c.items.map((_, i) => ({ i, w: i ? 1 : 2.2 })))
  const cell = r => { const it = c.items[r.i], i = r.i, fs = U.fit(c.tx('it' + i, it.t), r.w - 48, i ? 30 : 42, 18)
    const face = it.img ? `<img ${i ? '' : 'class="hero"'} src="${it.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`
      : `<div style="position:absolute;inset:0;background:var(--acc);display:grid;place-items:center;color:#ffffff55;font:900 ${Math.round(Math.min(r.w, r.h) * .5)}px var(--serif)">${U.esc([...(it.t || '食')][0])}</div>`
    return `<div class="in" style="position:absolute;left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px;overflow:hidden;--i:${i + 2}">${face}
      <div style="position:absolute;left:0;right:0;bottom:0;height:${Math.min(r.h, 180)}px;background:linear-gradient(#0000,rgba(0,0,0,.66))"></div></div>
      <div class="ab in" style="left:${r.x + 24}px;top:${r.y + r.h - 22 - fs * 1.3 - (it.sub ? 26 : 0)}px;width:${r.w - 48}px;color:#fff;--i:${i + 3}">
        ${it.sub ? `<div style="font-size:17px;letter-spacing:.12em;color:#ffffffcc;height:26px">${U.esc(it.sub)}</div>` : ''}
        <div class="serif" style="font-size:${fs}px;line-height:1.3">${c.ed('it' + i, it.t)}</div></div>` }
  const a = c.items[0]
  return `<div class="ab in" style="left:120px;top:110px;width:480px;--i:1"><div class="kick">${c.ed('k', '在地餐食')}</div>
    <div class="serif" style="font-size:64px;line-height:1.25;margin-top:14px">${c.ed('h', '在地的味道')}</div><div style="font-size:21px;letter-spacing:.2em;color:var(--mute);margin-top:12px">${c.ed('cnt', '這趟會吃到 ' + n + ' 道')}</div>
    ${a.body ? `<p style="font-size:21px;line-height:1.8;color:var(--mute);margin:40px 0 0;padding-top:28px;border-top:3px solid var(--ink)"><b class="serif" style="display:block;font-size:26px;color:var(--ink);margin-bottom:8px">${U.esc(c.tx('it0', a.t))}</b>${U.esc(a.body)}</p>` : ''}</div>` + cells.map(cell).join('') } }) }

/* variants/food/dish-portrait.js */
{ const U = M.util
M.add('food', 'dish-portrait', { name: '一席特寫', range: [1, 1], html: c => {
  const clean = s => String(s || '').replace(/[，。！？；、,.!?;]+$/u, '')
  const photo = c.items[0]?.img || c.p.img
  const gap = 48, width = (1184 - gap * (c.n - 1)) / Math.max(1, c.n)
  return `<style>
    .v-dish-portrait .dp-photo.in{animation:food-dish-portrait-cut .8s cubic-bezier(.16,1,.3,1) both}
    @keyframes food-dish-portrait-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-dish-portrait .in,.v-dish-portrait .dp-photo.in{animation:none}}
  </style>
  <div style="position:absolute;inset:0;background:var(--ink)"></div>
  <div class="dp-photo in" style="position:absolute;inset:0 0 auto;height:936px;background:var(--paper);--i:0">
    ${photo ? `<img class="hero" src="${U.esc(photo)}" alt="" style="display:block;width:100%;height:100%;object-fit:cover">` : ''}
  </div>
  ${c.p.title ? `<div class="ab in" style="left:120px;top:80px;padding:16px 24px;background:var(--paper);font-size:25px;--i:1">${c.ed('h', clean(c.p.title))}</div>` : ''}
  <div class="ab" style="left:120px;bottom:56px;width:1184px;display:grid;grid-template-columns:repeat(${Math.max(1, c.n)},minmax(0,1fr));gap:${gap}px">
    ${c.items.map((it, i) => `<article class="in" style="background:var(--paper);padding:40px;min-height:256px;display:grid;grid-template-columns:${it.body ? '1fr 1.1fr' : '1fr'};gap:48px;align-items:center;border-top:4px solid var(--acc);--i:${i + 1}">
      <div>
        ${it.sub ? `<div style="font-size:20px;line-height:1.5;color:var(--acc);margin-bottom:16px">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}
        ${it.t ? `<div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), (width - 128) / (it.body ? 2.1 : 1), 61, 25)}px;line-height:1.3;text-wrap:balance">${c.ed('it' + i, clean(it.t))}</div>` : ''}
      </div>
      ${it.body ? `<p style="font-size:25px;line-height:1.7;margin:0;text-wrap:pretty">${c.ed('body' + i, clean(it.body))}</p>` : ''}
    </article>`).join('')}
  </div>
  ${c.meta.agency ? `<div class="ab in" style="left:1360px;bottom:56px;width:440px;text-align:right;font-size:20px;line-height:1.5;color:var(--paper);--i:2">${c.ed('agency', clean(c.meta.agency))}</div>` : ''}`
} }) }

/* variants/food/film.js */
// food／film：膠片帶——深色頁面上一條橫貫畫面的底片，上下兩排齒孔，一格一道菜；菜名寫在底片下方
// 學自小紅書 6a13f7da（電影膠片框）、69cfb1d6（多張照片統一高度接成一條帶）。2～5 道（6 道每格太小，交給便當格）；沒有照片的格改主色塊＋菜名第一個字。
{ const U = M.util
M.add('food', 'film', { name: '膠片帶', range: [2, 5], html: c => {
  const n = c.n, gap = 24, w = (1680 - gap * (n - 1)) / n, fh = Math.min(420, w * .74), band = 64, sh = fh + band * 2, y = 260 + Math.max(0, (740 - sh - 210) / 2)
  const holes = t => `<div style="position:absolute;left:0;top:${t}px;width:1920px;height:24px;background:repeating-linear-gradient(90deg,#0000 0 26px,#e9e4da 26px 50px);opacity:.85;border-radius:3px"></div>`
  const frames = c.items.map((it, i) => { const x = 120 + i * (w + gap)
    const face = it.img ? `<img ${i ? '' : 'class="hero"'} src="${it.img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`
      : `<div style="width:100%;height:100%;background:var(--acc);display:grid;place-items:center;color:#fff;font:900 ${Math.round(fh * .45)}px var(--serif)">${U.esc([...(it.t || '食')][0])}</div>`
    return `<div class="in" style="position:absolute;left:${x}px;top:${y + band}px;width:${w}px;height:${fh}px;border-radius:6px;overflow:hidden;--i:${i + 2}">${face}</div>
      <div class="ab in" style="left:${x}px;top:${y + sh + 26}px;width:${w}px;color:#fff;--i:${i + 3}">
        <div style="font-size:18px;letter-spacing:.14em;color:var(--acc3)">${U.esc(it.sub || U.no(i))}</div>
        <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w, n <= 3 ? 38 : 30, 18)}px;line-height:1.3;margin-top:6px">${c.ed('it' + i, it.t)}</div>
        ${it.body && n <= 4 ? `<p style="font-size:18px;line-height:1.6;color:#ffffffaa;margin:8px 0 0">${U.esc(it.body)}</p>` : ''}</div>` }).join('')
  return `<div style="position:absolute;inset:0;background:var(--ink)"></div>
    <div class="ab in" style="left:120px;top:100px;color:#fff;--i:1"><div class="kick" style="color:var(--acc3)">${c.ed('k', '在地餐食')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', '這趟會吃到的 ' + n + ' 道')}</div></div>
    <div class="in" style="position:absolute;left:0;top:${y}px;width:1920px;height:${sh}px;background:#0b0c0d;box-shadow:0 30px 80px rgba(0,0,0,.5);--i:1">${holes(20)}${holes(sh - 44)}</div>` + frames } }) }

/* variants/food/focus.js */
// food／focus：詳略兩級——前 2～3 道給完整卡（照片＋哪天哪餐＋菜名＋介紹），其餘只留編號、菜名、哪天哪餐的名單
// 學自東京官方手冊規則 D／A5 換算表（N=5～8：前 2～3 項完整卡、其餘一行一項）。4～10 道。
{ const U = M.util
M.add('food', 'focus', { name: '主菜＋名單', range: [4, 10], html: c => {
  const n = c.n, k = n <= 5 ? 2 : 3, gap = 30, w = (1680 - gap * (k - 1)) / k, ph = k === 2 ? 360 : 300, top = 260
  const cards = c.items.slice(0, k).map((it, i) => `<div class="ab in" style="left:${120 + i * (w + gap)}px;top:${top}px;width:${w}px;--i:${i + 2}">
      ${it.img ? `<img ${i ? '' : 'class="hero"'} src="${it.img}" alt="" style="width:100%;height:${ph}px;object-fit:cover;display:block">` : `<div style="height:${ph}px;background:var(--acc);display:grid;place-items:center;color:#ffffff66;font:900 ${ph * .5}px var(--serif)">${U.esc([...(it.t || '食')][0])}</div>`}
      <div style="font-size:18px;letter-spacing:.14em;color:var(--acc);margin-top:16px">${U.esc(it.sub || '')}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w, 38, 22)}px;line-height:1.3;margin-top:4px">${c.ed('it' + i, it.t)}</div>
      ${it.body ? `<p style="font-size:19px;line-height:1.6;color:var(--mute);margin:8px 0 0">${U.esc(it.body)}</p>` : ''}</div>`).join('')
  const rest = c.items.slice(k), cols = Math.min(4, rest.length), rows = Math.ceil(rest.length / cols), cw = (1680 - 40 * (cols - 1)) / cols, ly = 870 - (rows - 1) * 40
  const list = rest.map((it, j) => { const i = j + k, x = 120 + (j % cols) * (cw + 40), y = ly + Math.floor(j / cols) * 84
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${cw}px;display:grid;grid-template-columns:52px 1fr;align-items:center;--i:${i + 2}">
      <b style="width:40px;height:40px;border-radius:50%;background:var(--acc);color:#fff;font:700 17px var(--sans);display:grid;place-items:center">${i + 1}</b>
      <div><div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), cw - 52, 28, 18)}px;line-height:1.25">${c.ed('it' + i, it.t)}</div>${it.sub ? `<div style="font-size:17px;color:var(--mute)">${U.esc(it.sub)}</div>` : ''}</div></div>` }).join('')
  return `<div class="ab in" style="left:120px;top:96px;--i:1"><div class="kick">${c.ed('k', '在地餐食')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', '這趟會吃到的 ' + n + ' 道')}</div></div>` + cards +
    `<div class="ab" style="left:120px;top:${ly - 46}px;width:1680px;border-top:1px solid #d9dcd8;padding-top:8px;font-size:17px;letter-spacing:.2em;color:var(--mute)">${c.ed('more', '其他餐食')}</div>` + list } }) }

/* variants/food/grid.js */
// food／grid：照片與餐名的開放網格，2～8 道。缺圖留下文字，不畫假照片。
// 沿餐飲跨頁已映射來源 6946c194… 的圖文分離；照片是內容，閱讀靠字級和間距。
{ const U = M.util
M.add('food', 'grid', { name: '照片格', range: [2, 8], html: c => {
  const lines=(s,w,size)=>String(s??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.06/w)),0)
  const n=c.n, hasPhotos=c.items.some(it=>it.img), cols=hasPhotos?Math.ceil(n/(n>4?2:1)):2, rows=Math.ceil(n/cols)
  const gap=40, rowGap=48, width=(1680-gap*(cols-1))/cols
  const title=c.tx('h',c.p.title||'餐食安排'), note=c.tx('k',c.p.kick||'')
  const headingSize=U.fit(title,1680*2,U.len(title)>28?64:72,44), headingH=lines(title,1680,headingSize)*headingSize*1.2
  const top=Math.max(256,88+headingH+(note?16+lines(note,1680,28)*28*1.4:0)+56), available=1000-top, rowH=Math.max(128,(available-rowGap*(rows-1))/rows)
  const nameSize=hasPhotos?(n<=4?44:36):n>4?40:48, metaSize=28
  const entry=(it,i)=>({it,i,title:c.tx('it'+i,it.t),sub:c.tx('sub'+i,it.sub||'')})
  const data=c.items.map(entry), captionHeight=x=>lines(x.title,width,nameSize)*nameSize*1.3+(x.sub?12+lines(x.sub,width,metaSize)*metaSize*1.45:0)
  const groups=Array.from({length:rows},(_,r)=>data.slice(r*cols,(r+1)*cols))
  let exceeded=available<=0||rows*rowH+rowGap*(rows-1)>available+.01
  const content=groups.map((group,r)=>{
    const caption=Math.max(...group.map(captionHeight)), photoH=group.some(x=>x.it.img)?Math.max(128,Math.min(rows===1?560:260,rowH-caption-20)):0
    if(caption+(photoH?photoH+20:0)>rowH)exceeded=true
    return group.map(x=>{
      const column=x.i%cols,y=top+r*(rowH+rowGap)
      return `<article class="ab fg-item" style="left:${120+column*(width+gap)}px;top:${y}px;width:${width}px;height:${rowH}px">
        ${x.it.img?`<img class="${x.i===data.findIndex(d=>d.it.img)?'hero ':''}fg-photo in" src="${U.esc(x.it.img)}" alt="" style="position:absolute;left:0;top:0;display:block;width:100%;height:${photoH}px;object-fit:cover">`:''}
        <div class="fg-caption" style="position:absolute;left:0;top:${x.it.img?photoH+20:0}px;width:100%">
        <div class="serif fg-name" style="font-size:${nameSize}px;line-height:1.3;overflow-wrap:anywhere;white-space:pre-wrap">${c.ed('it'+x.i,x.it.t)}</div>
        ${x.sub?`<div class="fg-sub" style="font-size:${metaSize}px;line-height:1.45;margin-top:12px;color:var(--mute);overflow-wrap:anywhere;white-space:pre-wrap">${c.ed('sub'+x.i,x.it.sub||'')}</div>`:''}
        </div>
      </article>`
    }).join('')
  }).join('')
  return `<style>
    .v-grid .fg-photo.in{animation:food-grid-reveal .65s cubic-bezier(.16,1,.3,1) both}
    @keyframes food-grid-reveal{from{clip-path:inset(0 0 12% 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-grid .fg-photo.in{animation:none}}
    @media print{.v-grid .fg-photo.in{animation:none!important}}
  </style>
  <header class="ab" style="left:120px;top:88px;width:1680px">
    <div class="serif" style="font-size:${headingSize}px;line-height:1.2;overflow-wrap:anywhere;white-space:pre-wrap">${c.ed('h',c.p.title||'餐食安排')}</div>
    ${note?`<div style="font-size:${metaSize}px;line-height:1.4;margin-top:16px;color:var(--mute)">${c.ed('k',c.p.kick||'')}</div>`:''}
  </header><div class="fg-content" data-capacity="${exceeded?'exceeded':'fit'}" data-row-height="${rowH}">${content}</div>`
} }) }

/* variants/food/menu.js */
// food／menu：菜單表——左側一條照片欄（項目多照片少：最多三張），右側像餐廳菜單一行一道：哪天哪餐｜菜名｜一句介紹
// 學自中山國小 SEL261216A 的三餐表、東京官方手冊規則 E（項目多就改名單、照片退到少數幾張）。4～10 道；6 道以上沿原契約只呈現菜名。
{ const U = M.util
M.add('food', 'menu', { name: '菜單表', range: [4, 10], html: c => {
  const n = c.n, pics = c.items.filter(it => it.img).slice(0, 3), PW = 640
  const ph = pics.length >= 3 ? `<img class="hero" src="${pics[0].img}" alt="" style="position:absolute;left:0;top:0;width:${PW}px;height:640px;object-fit:cover">
      <img src="${pics[1].img}" alt="" style="position:absolute;left:0;top:648px;width:${PW / 2 - 4}px;height:432px;object-fit:cover"><img src="${pics[2].img}" alt="" style="position:absolute;left:${PW / 2 + 4}px;top:648px;width:${PW / 2 - 4}px;height:432px;object-fit:cover">`
    : pics.length === 2 ? pics.map((it,i)=>`<img ${i ? '' : 'class="hero"'} src="${it.img}" alt="" style="position:absolute;left:0;top:${i*544}px;width:${PW}px;height:536px;object-fit:cover">`).join('')
    : pics.length ? `<img class="hero" src="${pics[0].img}" alt="" style="position:absolute;left:0;top:0;width:${PW}px;height:1080px;object-fit:cover">`
    : ''
  const X = pics.length ? PW + 96 : 240, LW = pics.length ? 1800 - X : 1440
  const labelled = c.items.some(it=>it.sub), labelW = labelled ? 148 : 0, gap = labelled ? 28 : 0
  const textW = LW-labelW-gap, long = n<=5, bodySize=28
  const lines=(s,w,size)=>String(s??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.06/w)),0)
  const heading=c.tx('h','這趟的菜單'), customKick=c.tx('k','')
  const headingSize=U.fit(heading,LW*2,72,44)
  const top=Math.max(260,100+lines(heading,LW,headingSize)*headingSize*1.25+(customKick?44:0)+44), available=1000-top
  const heights=size=>c.items.map((it,i)=>Math.max(labelled?lines(it.sub,labelW,bodySize)*bodySize*1.45:0,
    lines(c.tx('it'+i,it.t),textW,size)*size*1.3+(long&&it.body?10+lines(it.body,textW,bodySize)*bodySize*1.45:0))+24)
  let nameSize=n<=5?44:36, hs=heights(nameSize)
  while(nameSize>28&&hs.reduce((a,b)=>a+b,0)>available){nameSize--;hs=heights(nameSize)}
  const used=hs.reduce((a,b)=>a+b,0), extra=Math.max(0,available-used)/Math.max(1,n)
  const rows=c.items.map((it,i)=>`<section class="fm-row in" style="min-height:${hs[i]+extra}px;--i:${i+2}">
    ${labelled?`<div class="fm-label">${U.esc(it.sub||'')}</div>`:''}
    <div style="min-width:0"><div class="serif fm-name">${c.ed('it'+i,it.t)}</div>
    ${long&&it.body?`<p class="fm-body">${U.esc(it.body)}</p>`:''}</div></section>`).join('')
  return `<style>
  .v-menu .fm-row{box-sizing:border-box;display:grid;grid-template-columns:${labelled?labelW+'px ':''}minmax(0,1fr);column-gap:${gap}px;align-items:start;padding:12px 0;border-top:1px solid color-mix(in srgb,var(--ink) 16%,transparent)}
  .v-menu .fm-row:first-child{border-top-color:color-mix(in srgb,var(--ink) 38%,transparent)}
  .v-menu .fm-label{font-size:${bodySize}px;line-height:1.45;color:var(--acc);overflow-wrap:anywhere;white-space:pre-wrap}
  .v-menu .fm-name{font-size:${nameSize}px;line-height:1.3;overflow-wrap:anywhere}
  .v-menu .fm-body{font-size:${bodySize}px;line-height:1.45;margin:10px 0 0;color:var(--mute);white-space:pre-wrap;overflow-wrap:anywhere}
  </style>${ph?`<div class="in" style="--i:1">${ph}</div>`:''}
  <div class="ab in" style="left:${X}px;top:100px;width:${LW}px;--i:1">${customKick?`<div style="font-size:${bodySize}px;margin-bottom:12px">${c.ed('k',customKick)}</div>`:''}<div class="serif" style="font-size:${headingSize}px;line-height:1.25;overflow-wrap:anywhere">${c.ed('h','這趟的菜單')}</div></div>
  <div class="ab fm-list" data-capacity="${used<=available?'fit':'exceeded'}" style="left:${X}px;top:${top}px;width:${LW}px">${rows}</div>`
} }) }

/* variants/food/table-panorama.js */
{ const U = M.util
M.add('food', 'table-panorama', { name: '餐桌橫幅', range: [2, 5], html: c => {
  const n = c.n, gap = 36, cw = (1680 - gap * (n - 1)) / n
  const pics = c.items.map((it, i) => ({ ...it, i })).filter(it => it.img)
  const main = pics[0], extra = pics.slice(1, 3), side = extra.length ? 480 : 0, ph = 720
  const photo = (it, x, y, w, h, hero = false) => `<img ${hero ? 'class="hero"' : ''} src="${U.esc(it.img)}" alt="${U.esc(c.tx('it' + it.i, it.t || ''))}" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:cover">`
  const image = main ? photo(main, 0, 0, 1920 - side, ph, true)
    : c.p.img ? `<img class="hero" src="${U.esc(c.p.img)}" alt="" style="position:absolute;inset:0;width:1920px;height:${ph}px;object-fit:cover">` : ''
  const shots = extra.map((it, j) => { const h = (ph - 12 * (extra.length - 1)) / extra.length
    return photo(it, 1920 - side + 12, j * (h + 12), side - 12, h)
  }).join('')
  const rows = c.items.map((it, i) => `<article class="in" style="position:relative;min-width:0;--i:2">
    ${it.sub ? `<div style="font-size:20px;line-height:1.4;color:var(--acc);margin-bottom:10px">${c.ed('sub' + i, it.sub)}</div>` : ''}
    ${it.t ? `<div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), cw, n <= 3 ? 42 : 32, 22)}px;line-height:1.3;text-wrap:balance">${c.ed('it' + i, it.t)}</div>` : ''}
    ${it.body ? `<p style="font-size:${n <= 3 ? 22 : 20}px;line-height:1.65;margin:14px 0 0;text-wrap:pretty">${c.ed('body' + i, it.body.replace(/[，。！？；、,.!?;]+$/u, ''))}</p>` : ''}
  </article>`).join('')
  return `<style>
    .v-table-panorama .tp-photo.in{animation:food-table-panorama-cut .85s cubic-bezier(.16,1,.3,1) both}
    @keyframes food-table-panorama-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-table-panorama .tp-photo.in{animation:none}}
  </style>
  <div class="tp-photo in" style="position:absolute;inset:0 0 auto;height:${ph}px;background:var(--acc);--i:0">${image}${shots}</div>
  <div class="ab in" style="left:120px;top:80px;max-width:960px;padding:24px 36px 28px;background:var(--paper);--i:1">
    <div class="serif" style="font-size:${U.fit(c.tx('h', c.p.title || '在地餐食'), 888, 72, 32)}px;line-height:1.25;text-wrap:balance">${c.ed('h', c.p.title || '在地餐食')}</div>
  </div>
  <div style="position:absolute;left:0;right:0;top:${ph}px;bottom:0;background:var(--paper)"></div>
  <div class="ab" style="left:120px;top:${ph + (n <= 3 ? 56 : 40)}px;width:1680px;display:grid;grid-template-columns:repeat(${n},minmax(0,1fr));gap:${gap}px">${rows}</div>`
} }) }

/* variants/notice/_titles.js */
// 注意事項標題模式：沿原版本的欄／清單／詳略／刊物構圖，不建立空的細文容器。
// 詳細模式仍由原版本完整排版；所有組名沿 it0… 編輯鍵。
M.noticeTitles = (c, mode) => {
  const U = M.util, n = c.n, photo = c.p.img || c.meta.hero
  const journal = mode === 'field-journal', ribbon = mode === 'stage-ribbon', footer = mode === 'practical-footer'
  const X = journal && photo ? 600 : 120, W = journal && photo ? 1200 : 1680
  const top = ribbon && photo ? 510 : journal ? 260 : 350
  const cols = mode === 'bands' ? (n > 4 ? 3 : 2) : mode === 'checklist' ? (n > 2 ? 2 : 1) : journal ? 1 : footer ? Math.max(1,n-1) : mode === 'tiers' ? 2 : 1
  const rows = Math.ceil(n / cols), gap = 64, cw = (W - gap * (cols - 1)) / cols
  const rowH = Math.min(journal ? 150 : mode === 'deflist' ? 210 : 220, (1000 - top) / rows)
  const header = `<header class="ab in" style="left:${X}px;top:${ribbon && photo ? 290 : 88}px;width:${W}px;--i:1"><div class="kick">${c.ed('k',c.p.kick || '注意事項')}</div><div class="serif" style="font-size:${U.fit(c.tx('h',c.p.title || '出門在外，記得這幾件事'),W,60,32)}px;line-height:1.3;margin-top:12px">${c.ed('h',c.p.title || '出門在外，記得這幾件事')}</div></header>`
  let media = ''
  if (photo && journal) media = `<img class="ab hero" src="${U.esc(photo)}" alt="" style="left:0;top:0;width:480px;height:1080px;object-fit:cover">`
  if (photo && ribbon) media = `<img class="ab hero" src="${U.esc(photo)}" alt="" style="left:0;top:0;width:1920px;height:230px;object-fit:cover">`
  // 實用欄保留第一組的固定頁底位置；其餘組別在上方橫排。
  const items = c.items.map((it,i) => {
    const fixed = footer && i === 0
    const index = footer ? i - 1 : i
    const x = fixed ? 120 : X + Math.max(0,index % cols) * (cw + gap)
    const y = fixed ? 820 : top + Math.floor(Math.max(0,index) / cols) * rowH
    const width = fixed ? 1680 : cw
    const tier = mode === 'tiers' && i >= 2
    const size = U.fit(c.tx('it'+i,it.t), width - 78, fixed ? 64 : tier ? 42 : mode === 'deflist' ? 68 : 56, 28)
    const mark = mode === 'checklist' ? `<i aria-hidden="true" style="width:30px;height:30px;flex:none;border:2px solid var(--acc);margin-top:12px"></i>` : `<span style="flex:none;width:44px;font:500 24px/1.5 var(--sans);color:var(--mute);margin-top:8px">${U.no(i)}</span>`
    return `<section class="ab in" style="left:${x}px;top:${y}px;width:${width}px;display:flex;gap:28px;align-items:flex-start;${fixed ? 'padding-top:32px;border-top:1px solid var(--line);' : ''}--i:${i+2}">${mark}<div class="serif" style="min-width:0;flex:1;font-size:${size}px;line-height:1.35;overflow-wrap:anywhere">${c.ed('it'+i,it.t)}</div></section>`
  }).join('')
  return media + header + items
}

/* variants/notice/bands.js */
// notice／bands：分類色帶格——每組一格、格頂一條實心色帶寫組名（一組一色），4 組排 2×2、5～6 組排 3×2；兩排依條目實際需要的高度分配；最後一排不滿就補一張這團的照片。
// 學自東京官方手冊「分類色帶（每類一色）」＋第 9 招「等寬卡片格＋補空格」。條目一條一行、懸掛縮排對齊。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.12 / w))
M.add('notice', 'bands', { name: '分類色帶格', range: [4, 6], html: c => {
  if (c.p.noticeDetail !== true) return M.noticeTitles(c, 'bands')
  const n = c.n, cols = n <= 4 ? 2 : 3, rows = 2, G = 28, T = 250, H = 1012 - T, w = (1680 - G * (cols - 1)) / cols
  const cl = ['var(--acc)', 'var(--acc2)', 'var(--acc3)', 'var(--ink)', '#6f7a72', 'var(--acc)']
  const need = fs => {
    const group = c.items.map((it, i) => 96 + (it.items || []).reduce((a, x, j) => a + lines(c.tx('s' + i + '_' + j, x), w - 52 - fs * 1.5, fs) * fs * 1.42 + 6, 0))
    return Array.from({ length: rows }, (_, r) => Math.max(96, ...group.slice(r * cols, (r + 1) * cols)))
  }
  let fs = 16, heights = need(fs)
  for (const f of [26, 24, 22, 20, 18, 16]) { const hs = need(f); if (hs.reduce((a, b) => a + b, G) <= H) { fs = f; heights = hs; break } }
  const extra = Math.max(0, (H - G - heights.reduce((a, b) => a + b, 0)) / rows)
  heights = heights.map(h => h + extra)
  const cell = (k, inner, i) => `<div class="ab in" style="left:${120 + (k % cols) * (w + G)}px;top:${T + (k < cols ? 0 : heights[0] + G)}px;width:${w}px;height:${heights[Math.floor(k / cols)]}px;--i:${i}">${inner}</div>`
  const pool = c.meta.pool || [], fill = []
  for (let k = n; k < cols * rows; k++) { const src = pool[(k * 3 + 1) % pool.length] || c.meta.hero; if (src) fill.push(cell(k, `<img src="${src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">`, k + 2)) }
  return `<div class="ab in" style="left:120px;top:80px;--i:1"><div class="kick">${c.ed('k', '注意事項')}</div><div class="serif" style="font-size:56px;margin-top:8px">${c.ed('h', '出門在外，記得這幾件事')}</div></div>` +
    c.items.map((it, i) => cell(i, `<div style="height:100%;background:#fff;box-shadow:0 18px 36px -26px rgba(0,0,0,.4)">
      <div style="height:64px;background:${cl[i % 6]};color:#fff;display:flex;align-items:center;gap:14px;padding:0 24px"><span style="font:700 22px var(--serif);opacity:.75">${c.ed('no' + i, U.no(i))}</span><div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w - 110, Math.max(22, Math.round(fs * 1.3)), 16)}px;white-space:nowrap">${c.ed('it' + i, it.t)}</div></div>
      <div style="padding:16px 26px 0">${(it.items || []).map((x, j) => `<div style="display:flex;gap:${fs * .5}px;margin-top:6px;font-size:${fs}px;line-height:1.42;color:#2c3236"><span style="flex:none;color:${cl[i % 6]};font-weight:700">・</span><div style="flex:1;min-width:0;overflow-wrap:anywhere">${c.ed('s' + i + '_' + j, x.replace(/[，。,.]+$/, ''), 'style="display:block"')}</div></div>`).join('')}</div></div>`, i + 2)).join('') + fill.join('') } }) }

/* variants/notice/checklist.js */
// notice／checklist：核取清單——每條前面一個空白方框（出發前可以一條一條勾），各組依序流進 2～3 欄，組不拆開；5 組以上排不下 16px，交給詳略兩級。
// 學自東京官方手冊的核取清單與「內容多換結構不縮字」：先試大字少欄，排不下才加欄，字級最小 16px。
{ const U = M.util
const LH = 1.45, lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('notice', 'checklist', { name: '核取清單', range: [1, 4], html: c => {
  if (c.p.noticeDetail !== true) return M.noticeTitles(c, 'checklist')
  const n = c.n, T = 262, H = 1010 - T, GAP = 60, cl = ['var(--acc)', 'var(--acc2)', 'var(--acc3)', 'var(--ink)', '#8a8f93', 'var(--acc)']
  // 一組的高度（欄寬 w、字級 fs）
  const gh = (it, i, w, fs, xs = it.items || []) => (lines(c.tx('it' + i, it.t), w, fs * 1.3) * fs * 1.3 * 1.3 + 26) + xs.reduce((a, x) => a + lines(x, w - fs * 1.5, fs) * fs * LH + 12, 0)
  // 單組：條目切兩欄；多組：連續切成 k 欄，找最高那欄最矮的切法
  let best = null
  for (const fs of [36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16]) {
    for (const k of n === 1 ? [2] : n === 2 ? [2] : [2, 3]) {
      const w = (1680 - GAP * (k - 1)) / k
      if (n === 1) { const xs = c.items[0].items || [], half = Math.ceil(xs.length / 2), hh = lines(c.tx('it0', c.items[0].t), 1680, fs * 1.3) * fs * 1.7 + 30
        const col = a => a.reduce((s, x) => s + lines(x, w - fs * 1.5, fs) * fs * LH + 12, 0)
        const h = hh + Math.max(col(xs.slice(0, half)), col(xs.slice(half))); if (h <= H) { best = { fs, k, w, one: half }; break } continue }
      const hs = c.items.map((it, i) => gh(it, i, w, fs)), cuts = []
      const rec = (from, left, acc) => { if (left === 1) { cuts.push([...acc, n]); return } for (let e = from + 1; e <= n - left + 1; e++) rec(e, left - 1, [...acc, e]) }
      rec(0, Math.min(k, n), [])
      for (const cu of cuts) { let s = 0; const cols = cu.map(e => { const g = []; for (; s < e; s++) g.push(s); return g })
        const m = Math.max(...cols.map(g => g.reduce((a, i) => a + hs[i], 0) + 34 * (g.length - 1)))
        if (m <= H && (!best || best.fs < fs || (best.fs === fs && m < best.m))) best = { fs, k: cols.length, w: (1680 - GAP * (cols.length - 1)) / cols.length, cols, m } }
      if (best && best.fs === fs) break
    }
    if (best) break
  }
  best = best || { fs: 16, k: 3, w: (1680 - GAP * 2) / 3, cols: [c.items.map((_, i) => i)] }
  const { fs, w } = best, box = (i, j, x) => `<div style="display:flex;gap:${fs * .5}px;margin-top:12px"><i style="flex:none;width:${fs * .85}px;height:${fs * .85}px;margin-top:${(fs * LH - fs * .85) / 2}px;border:2.5px solid ${cl[i % 6]};border-radius:3px;background:#fff"></i><div style="flex:1;min-width:0;font-size:${fs}px;line-height:${LH};color:#2c3236">${c.ed('s' + i + '_' + j, x.replace(/[，。,.]+$/, ''), 'style="display:block"')}</div></div>`
  const head = i => `<div style="display:flex;align-items:baseline;gap:14px;border-bottom:3px solid ${cl[i % 6]};padding-bottom:10px"><span style="font:700 ${Math.max(16, Math.round(fs * .9))}px var(--serif);color:${cl[i % 6]}">${c.ed('no' + i, U.no(i))}</span><div class="serif" style="font-size:${Math.round(fs * 1.3)}px;line-height:1.3">${c.ed('it' + i, c.items[i].t)}</div></div>`
  const hdr = `<div class="ab in" style="left:120px;top:84px;--i:1"><div class="kick">${c.ed('k', c.p.kick || '注意事項')}</div><div class="serif" style="font-size:58px;margin-top:8px">${c.ed('h', c.p.title || '出發前，一條一條勾起來')}</div></div>`
  if (best.one) { const xs = c.items[0].items || []
    return hdr + `<div class="ab in" style="left:120px;top:${T}px;width:1680px;--i:2">${head(0)}</div>` +
      [xs.slice(0, best.one), xs.slice(best.one)].map((col, k) => `<div class="ab in" style="left:${120 + k * (w + GAP)}px;top:${T + fs * 1.7 + 20}px;width:${w}px;--i:${k + 3}">${col.map((x, j) => box(0, j + k * best.one, x)).join('')}</div>`).join('') }
  return hdr + best.cols.map((g, k) => `<div class="ab" style="left:${120 + k * (w + GAP)}px;top:${T}px;width:${w}px">${g.map((i, q) =>
    `<div class="in" style="margin-top:${q ? 34 : 0}px;--i:${i + 2}">${head(i)}${(c.items[i].items || []).map((x, j) => box(i, j, x)).join('')}</div>`).join('')}</div>`).join('') +
    best.cols.slice(1).map((_, k) => `<div class="ab" style="left:${120 + (k + 1) * (w + GAP) - GAP / 2}px;top:${T}px;width:1px;height:${H}px;background:#d9dcd8"></div>`).join('') } }) }

/* variants/notice/cols.js */
// notice／cols：投影預設只呈現組別標題；noticeDetail:true 才展開完整條目。
// 以欄距和文字層級分組，不用巨型白卡、陰影或分類色帶填滿畫面。
{ const U = M.util
M.add('notice', 'cols', { name: '分組欄', range: [1, 5], html: c => {
  const n = c.n, detail = c.p.noticeDetail === true, gap = n > 3 ? 48 : 72
  const w = (1680 - gap * (n - 1)) / n
  return `<div class="ab in" style="left:120px;top:90px;width:1680px;--i:1"><div class="kick">${c.ed('k', '注意事項')}</div><div class="serif" style="font-size:60px;line-height:1.3;margin-top:10px">${c.ed('h', '出門在外，記得這幾件事')}</div></div>` +
    c.items.map((it, i) => {
      const title = c.tx('it' + i, it.t), entries = it.items || []
      const lineCount = (text, size) => String(text).split('\n').reduce((sum, line) => sum + Math.max(1, Math.ceil(U.len(line) * size * 1.08 / w)), 0)
      // 標題模式允許兩行；明確展開才為內文保留高度。
      const titleSize = U.fit(title, w * (detail ? 1 : 2), detail ? 38 : n > 3 ? 58 : 76, detail ? 24 : 32)
      let fs = 16
      if (detail) for (const size of n > 3 ? [22, 20, 18, 16] : [28, 26, 24, 22, 20, 18, 16]) {
        const height = 50 + lineCount(title, titleSize) * titleSize * 1.3 + 28 + entries.reduce((sum, entry) => sum + lineCount(entry, size) * size * 1.6 + 18, 0)
        if (height <= 650) { fs = size; break }
      }
      return `<section class="ab in" style="left:${120 + i * (w + gap)}px;top:${detail ? 300 : 390}px;width:${w}px;--i:${i + 2}">
      <div style="font:500 24px/1 var(--sans);font-variant-numeric:tabular-nums;color:var(--mute);margin-bottom:${detail ? 22 : 36}px">${U.no(i)}</div>
      <div class="serif" style="font-size:${titleSize}px;line-height:1.3;overflow-wrap:anywhere">${c.ed('it' + i, it.t)}</div>
      ${detail ? `<ul style="list-style:none;padding:0;margin:28px 0 0">${entries.map(x => `<li style="font-size:${fs}px;overflow-wrap:anywhere;line-height:1.6;margin-top:18px;color:var(--mute)">${U.esc(x)}</li>`).join('')}</ul>` : ''}</section>`
    }).join('')
} }) }

/* variants/notice/deflist.js */
// notice／deflist：左標籤定義表——左欄組名、右欄條目（條目多就分兩小欄），列與列細線分隔。
// 學自東京官方手冊第 14 招「左標籤右內容」＋字級六階（內文 1.0／組名 1.4／頁標 2.4）。條目若是「簽證 內容」這種寫法，前面的詞自動變粗體小標籤。
{ const U = M.util
const LH = 1.5, lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
const lab = x => { const m = String(x).match(/^([^\s\d，。、；：！？,.()（）]{1,5}) (.+)$/s); return m ? [m[1], m[2]] : [null, String(x)] }
M.add('notice', 'deflist', { name: '左標籤定義表', range: [1, 3], html: c => {
  if (c.p.noticeDetail !== true) return M.noticeTitles(c, 'deflist')
  const n = c.n, T = 262, B = 1010, LW = n === 1 ? 420 : 360, RX = 120 + LW + 40, RW = 1800 - RX
  const cl = ['var(--acc)', 'var(--acc2)', 'var(--acc3)', 'var(--ink)', '#8a8f93', 'var(--acc)']
  // 每組估高：條目 ≥3 條就分兩小欄（欄序：先左後右）
  const plan = fs => c.items.map(it => {
    const xs = it.items || [], two = xs.length >= 3, cw = two ? (RW - 48) / 2 : RW, half = two ? Math.ceil(xs.length / 2) : xs.length
    const lw = Math.max(0, ...xs.map(x => U.len(lab(x)[0] || ''))) + .8, h = xs.map(x => { const [a, b] = lab(x); return lines(b, cw - 26 - (lw > .8 ? lw * fs + 14 : 0), fs) * fs * LH + 14 })
    const ih = two ? Math.max(h.slice(0, half).reduce((a, b) => a + b, 0), h.slice(half).reduce((a, b) => a + b, 0)) : h.reduce((a, b) => a + b, 0)
    const nh = lines(c.tx('it' + c.items.indexOf(it), it.t), LW - 10, fs * 1.4) * fs * 1.4 * 1.3 + 40
    return { two, half, h: Math.max(ih, nh) + 36 }
  })
  // 字級從大往小挑第一個放得下的（底線 22px）；放不下就該換別的版本，不再縮
  let fs, P; for (fs of [34, 32, 30, 28, 26, 24, 22]) { P = plan(fs); if (P.reduce((a, r) => a + r.h, 0) <= B - T) break }
  const tot = P.reduce((a, r) => a + r.h, 0), add = Math.max(0, (B - T - tot) / n)
  let y = T
  return `<div class="ab in" style="left:120px;top:84px;--i:1"><div class="kick">${c.ed('k', '注意事項')}</div><div class="serif" style="font-size:58px;margin-top:8px">${c.ed('h', '出門在外，記得這幾件事')}</div></div>
    <div class="ab" style="left:120px;top:${T - 2}px;width:1680px;height:3px;background:var(--ink)"></div>` +
    c.items.map((it, i) => { const r = P[i], h = r.h + add, top = y, pad = 18 + add / 2; y += h
      const xs = it.items || [], lw = Math.max(0, ...xs.map(x => U.len(lab(x)[0] || ''))) + .8
      const li = (x, j) => { const [a, b] = lab(x)
        return `<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:14px;break-inside:avoid"><i style="flex:none;width:10px;height:10px;margin-top:${fs * LH / 2 - 5}px;background:${cl[i % 6]}"></i>
          ${a ? `<b style="flex:none;width:${lw}em;font-size:${fs}px;line-height:${LH};font-weight:700;color:var(--ink)">${c.ed('s' + i + '_' + j + 'a', a, 'style="display:block"')}</b>` : ''}<div style="flex:1;min-width:0;font-size:${fs}px;line-height:${LH};color:#2c3236">${c.ed('s' + i + '_' + j + (a ? 'b' : ''), b, 'style="display:block"')}</div></div>` }
      return `<div class="ab in" style="left:120px;top:${top}px;width:1680px;height:${h}px;border-bottom:1px solid #cfd3d0;--i:${i + 2}">
        <div class="ab" style="left:0;top:${pad}px;width:${LW}px"><div style="font:700 ${fs}px var(--serif);color:${cl[i % 6]};letter-spacing:.08em">${U.no(i)}</div>
          <div class="serif" style="font-size:${Math.round(fs * 1.4)}px;line-height:1.3;margin-top:4px">${c.ed('it' + i, it.t)}</div></div>
        <div class="ab" style="left:${LW + 40}px;top:${pad}px;width:${RW}px;display:flex;gap:48px">${(r.two ? [xs.slice(0, r.half), xs.slice(r.half)] : [xs]).map((col, k) => `<div style="flex:1;min-width:0">${col.map((x, j) => li(x, j + (k ? r.half : 0))).join('')}</div>`).join('')}</div></div>` }).join('') } }) }

/* variants/notice/field-journal.js */
// notice／field-journal：照片側欄與開放清單，預設只呈現標題；細節模式保留全部條目。
// 沿原清單字級層次與圖文分離，不用裝飾外框或縮到投影無法讀取來容納內容。
{ const U = M.util
M.add('notice', 'field-journal', { name: '行前資訊刊', range: [1, 5], html: c => {
  const lines=(s,w,size)=>String(s??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.06/w)),0)
  // null is an explicit no-photo choice; an omitted image keeps the deck's existing hero fallback.
  const img=c.p.img===null?null:c.p.img||c.meta.hero||(c.meta.pool||[])[0], title=c.tx('h',c.p.title||'行前提醒'), note=c.tx('k',c.p.kick||'')
  const motion=`<style>
    .v-field-journal .fj-photo.in{animation:notice-field-journal-reveal .65s cubic-bezier(.16,1,.3,1) both}
    @keyframes notice-field-journal-reveal{from{clip-path:inset(0 0 12% 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-field-journal .fj-photo.in{animation:none}}
    @media print{.v-field-journal .fj-photo.in{animation:none!important}}
  </style>`
  if(c.p.noticeDetail!==true){
    const X=img?656:120,W=1800-X,headingSize=U.fit(title,W*2,72,44)
    const top=Math.max(300,88+lines(title,W,headingSize)*headingSize*1.2+(note?16+lines(note,W,28)*28*1.4:0)+56),H=1000-top
    const heights=size=>c.items.map((it,i)=>lines(c.tx('it'+i,it.t),W,size)*size*1.3+48)
    let size=c.n<=3?56:48,hs=heights(size)
    while(size>36&&hs.reduce((a,b)=>a+b,0)>H){size-=2;hs=heights(size)}
    const used=hs.reduce((a,b)=>a+b,0),extra=Math.max(0,Math.min(120,H-used))/Math.max(1,c.n)
    return motion+`${img?`<img class="ab hero fj-photo in" src="${U.esc(img)}" alt="" style="left:0;top:0;width:560px;height:1080px;object-fit:cover">`:''}
      <header class="ab" style="left:${X}px;top:88px;width:${W}px">
        <div class="serif" style="font-size:${headingSize}px;line-height:1.2;white-space:pre-wrap;overflow-wrap:anywhere">${c.ed('h',c.p.title||'行前提醒')}</div>
        ${note?`<div style="font-size:28px;line-height:1.4;margin-top:16px;color:var(--mute)">${c.ed('k',c.p.kick||'')}</div>`:''}
      </header>
      <div class="ab fj-titles" data-capacity="${used<=H?'fit':'exceeded'}" style="left:${X}px;top:${top}px;width:${W}px">
        ${c.items.map((it,i)=>`<section style="box-sizing:border-box;min-height:${hs[i]+extra}px;padding:24px 0;${i?'border-top:1px solid color-mix(in srgb,var(--ink) 18%,transparent);':''}"><div class="serif" style="font-size:${size}px;line-height:1.3;white-space:pre-wrap;overflow-wrap:anywhere">${c.ed('it'+i,it.t)}</div></section>`).join('')}
      </div>`
  }
  const X=img?528:120,W=1800-X,headerW=img?280:1680,headingSize=U.fit(title,headerW*2,img?44:72,36)
  const trip=c.tx('journal-trip',c.meta.title||''),dates=c.tx('journal-dates',c.meta.dates||'')
  const headerH=lines(title,headerW,headingSize)*headingSize*1.25+(note?16+lines(note,headerW,28)*40:0)+(trip?32+lines(trip,headerW,28)*40:0)+(dates?16+lines(dates,headerW,28)*40:0)
  const photoTop=88+headerH+40,photoH=Math.max(160,1000-photoTop),T=img?88:Math.max(260,88+headerH+56),H=1000-T
  const cols=Math.min(c.n,3),gap=40,w=(W-gap*(cols-1))/cols,groupSize=36
  const text=(i,j,s)=>c.tx('s'+i+'_'+j,s)
  const cuts=[],split=(from,left,ends)=>{if(left===1){cuts.push([...ends,c.n]);return}for(let e=from+1;e<=c.n-left+1;e++)split(e,left-1,[...ends,e])};split(0,cols,[])
  let best
  for(const fs of [32,30,28]){
    const hs=c.items.map((it,i)=>24+lines(c.tx('it'+i,it.t),w,groupSize)*groupSize*1.3+24+(it.items||[]).reduce((h,s,j)=>h+lines(text(i,j,s),w,fs)*fs*1.5+12,0))
    let candidate
    for(const ends of cuts){let start=0;const groups=ends.map(end=>{const a=Array.from({length:end-start},(_,k)=>start+k);start=end;return a}),height=Math.max(...groups.map(a=>a.reduce((h,i)=>h+hs[i],0)+(a.length-1)*40));if(!candidate||height<candidate.height)candidate={fs,hs,groups,height}}
    best=candidate;if(best.height<=H)break
  }
  const fits=best.height<=H&&(!img||photoTop+photoH<=1000)
  return motion+`<header class="ab" style="left:120px;top:88px;width:${headerW}px">
      <div class="serif" style="font-size:${headingSize}px;line-height:1.25;white-space:pre-wrap;overflow-wrap:anywhere">${c.ed('h',c.p.title||'行前提醒')}</div>
      ${note?`<div style="font-size:28px;line-height:40px;margin-top:16px">${c.ed('k',c.p.kick||'')}</div>`:''}
      ${trip?`<div style="font-size:28px;line-height:40px;margin-top:32px">${c.ed('journal-trip',c.meta.title||'')}</div>`:''}
      ${dates?`<div style="font-size:28px;line-height:40px;margin-top:16px;color:var(--mute)">${c.ed('journal-dates',c.meta.dates||'')}</div>`:''}
    </header>
    ${img?`<img class="hero ab fj-photo in" src="${U.esc(img)}" alt="" style="left:120px;top:${photoTop}px;width:280px;height:${photoH}px;object-fit:cover">`:''}
    <div class="fj-detail" data-capacity="${fits?'fit':'exceeded'}" data-content-height="${best.height}" data-available-height="${H}">
      ${best.groups.map((group,k)=>`<div class="ab" style="left:${X+k*(w+gap)}px;top:${T}px;width:${w}px;display:flex;flex-direction:column;gap:40px">
        ${group.map((i,q)=>`<section style="box-sizing:border-box;min-height:${best.hs[i]}px;${q?'border-top:1px solid color-mix(in srgb,var(--ink) 18%,transparent);':''}padding-top:24px">
          <div class="serif" style="font-size:${groupSize}px;line-height:1.3;margin-bottom:24px;white-space:pre-wrap;overflow-wrap:anywhere">${c.ed('it'+i,c.items[i].t)}</div>
          ${(c.items[i].items||[]).map((s,j)=>`<div style="font-size:${best.fs}px;line-height:1.5;margin-bottom:12px;white-space:pre-wrap;overflow-wrap:anywhere">${c.ed('s'+i+'_'+j,s,'style="display:block"')}</div>`).join('')}
        </section>`).join('')}
      </div>`).join('')}
    </div>`
} }) }

/* variants/notice/photo.js */
// notice／photo：投影預設只讀各組重點標題；noticeDetail:true 才展開原條目，資料不刪。
// 學自東京官方手冊「交通與實用資訊」頁：一張照片定調、資訊靠字級分層（組名 1.3 倍、內文 1.0），不靠框線。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('notice', 'photo', { name: '照片＋清單', range: [1, 3], html: c => {
  const n = c.n, PW = 680, X = PW + 90, W = 1800 - X, T = 90, B = 1000, cl = ['var(--acc)', 'var(--acc2)', 'var(--acc3)']
  const img = c.p.img || c.meta.hero, detail = c.p.noticeDetail === true
  const need = fs => detail
    ? c.items.reduce((a, it) => a + fs * 1.3 * 1.35 + 22 + (it.items || []).reduce((s, x) => s + lines(x, W - fs - 20, fs) * fs * 1.5 + 8, 0), 0) + (n - 1) * 44
    : c.items.reduce((a, it, i) => a + lines(c.tx('it' + i, it.t), W - fs * 2 - 14, Math.round(fs * 1.3)) * Math.round(fs * 1.3) * 1.35, 0) + (n - 1) * 88
  let fs = 22; for (const f of (detail ? [38, 36, 34, 32, 30, 28, 26, 24, 22] : [48, 46, 44, 42, 40, 36, 32, 28, 24, 22])) if (need(f) <= B - T) { fs = f; break }
  const pad = Math.max(0, (B - T - need(fs)) / 2)
  return `<img class="hero" src="${img}" alt="" style="position:absolute;left:0;top:0;width:${PW}px;height:1080px;object-fit:cover">
    <div class="ab" style="left:0;top:0;width:${PW}px;height:1080px;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.72))"></div>
    <div class="ab in" style="left:64px;bottom:90px;width:${PW - 110}px;color:#fff;--i:1"><div class="kick" style="color:#fff">${c.ed('k', c.p.kick || '注意事項')}</div><div class="serif" style="font-size:${U.fit(c.tx("h", c.p.title || "出門在外，記得這幾件事"), PW - 110, 56, 40)}px;line-height:1.25;margin-top:12px">${c.ed('h', c.p.title || '出門在外，記得這幾件事')}</div></div>
    <div class="ab" style="left:${X}px;top:${T + pad}px;width:${W}px">` +
    c.items.map((it, i) => `<div class="in" style="${i ? `margin-top:${detail ? 22 : 44}px;padding-top:${detail ? 22 : 44}px;border-top:1px solid #d3d7d4;` : ''}--i:${i + 2}">
      <div style="display:flex;align-items:baseline;gap:14px;margin-bottom:${detail ? 12 : 0}px"><span style="font:700 ${fs}px var(--serif);color:${cl[i % 3]}">${U.no(i)}</span><div class="serif" style="font-size:${Math.round(fs * 1.3)}px;line-height:1.35">${c.ed('it' + i, it.t)}</div></div>
      ${(detail ? it.items || [] : []).map((x, j) => `<div style="display:flex;gap:${fs * .7}px;margin-top:8px"><i style="flex:none;width:${fs * .3}px;height:2px;margin-top:${fs * .75}px;background:${cl[i % 3]}"></i><div style="flex:1;min-width:0;font-size:${fs}px;line-height:1.5;color:#2c3236">${c.ed('s' + i + '_' + j, x, 'style="display:block"')}</div></div>`).join('')}</div>`).join('') + '</div>' } }) }

/* variants/notice/practical-footer.js */
// notice／practical-footer：行前刊物＋固定頁底實用欄
// 學自「收藏庫創意下一批／單-08 手冊固定實用欄」：固定資訊位置、圖外文字、欄名與欄值層級
{ const U = M.util
M.add('notice', 'practical-footer', { name: '刊物實用欄', range: [2, 4], html: c => {
  if (c.p.noticeDetail !== true) return M.noticeTitles(c, 'practical-footer')
  const clean = s => String(s ?? '').replace(/[，。,.]+$/, '')
  const entries = (it, i) => (it.items || (it.body ? [it.body] : [])).map((s, j) => ({key:'s' + i + '_' + j, text:clean(s)}))
  const fixed = c.items[0], rest = c.items.slice(1), gap = 40, w = (1280 - gap * (c.n - 2)) / (c.n - 1)
  const lineCount = (s, width, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.08 / width))
  const height = (xs, width, fs) => xs.reduce((h, x) => h + lineCount(c.tx(x.key, x.text), width, fs) * fs * 1.5, 0) + Math.max(0, xs.length - 1) * 14
  let fs = 22
  for (const size of [30, 28, 26, 24, 22]) if (rest.every((it, k) => height(entries(it, k + 1), w - 22, size) <= 400)) { fs = size; break }
  const facts = entries(fixed, 0), fw = (1680 - Math.max(0, facts.length - 1) * 28) / Math.max(1, facts.length)
  let ff = 18
  for (const size of [24, 22, 20, 18]) if (facts.every(x => height([x], fw, size) <= 204)) { ff = size; break }
  const img = c.p.img || c.meta.hero || (c.meta.pool || [])[0], title = clean(c.p.title || '行前備忘')
  return `<style>
    .v-practical-footer .pf-copy{overflow-wrap:anywhere;text-wrap:pretty}
    @media(prefers-reduced-motion:no-preference){.v-practical-footer .in{animation-name:notice-practical-footer-cut;animation-duration:.55s}}
    @keyframes notice-practical-footer-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
  </style>
  <header class="ab in" style="left:120px;top:52px;width:1680px;display:flex;align-items:end;justify-content:space-between;border-bottom:2px solid var(--ink);padding-bottom:22px;--i:0">
    <div class="serif" style="font-size:${U.fit(c.tx('h', title), 1050, 64, 36)}px;line-height:1.2">${c.ed('h', title)}</div>
    ${c.meta.dates ? `<div style="font-size:22px;line-height:1.5">${c.ed('practical-dates', c.meta.dates)}</div>` : ''}
  </header>
  <aside class="ab in" style="left:120px;top:192px;width:340px;height:500px;--i:1">
    ${img ? `<img class="hero" src="${U.esc(img)}" alt="" style="display:block;width:340px;height:350px;object-fit:cover">` : ''}
    ${c.meta.title ? `<div class="serif" style="font-size:${U.fit(c.tx('practical-trip', c.meta.title), 340, 32, 22)}px;line-height:1.4;margin-top:26px">${c.ed('practical-trip', c.meta.title)}</div>` : ''}
    ${c.meta.agency ? `<div style="font-size:20px;line-height:1.5;margin-top:14px;color:var(--acc)">${c.ed('practical-agency', c.meta.agency)}</div>` : ''}
  </aside>
  ${rest.map((it, k) => { const i = k + 1; return `<section class="ab in" style="left:${520 + k * (w + gap)}px;top:186px;width:${w}px;height:516px;display:flex;flex-direction:column;--i:${k + 2}">
    <div style="display:flex;align-items:center;gap:18px;border-top:4px solid var(--acc);padding-top:14px;margin-bottom:22px">
      <span style="font:500 44px var(--serif);color:var(--acc)">${c.ed('no' + i, U.no(k))}</span>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t || ''), w - 82, 32, 22)}px;line-height:1.4">${c.ed('it' + i, clean(it.t))}</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;justify-content:space-between;gap:14px">
      ${entries(it, i).map(x => `<div style="display:flex;gap:14px;font-size:${fs}px;line-height:1.5"><i aria-hidden="true" style="width:8px;height:2px;flex:none;background:var(--acc);margin-top:${fs * .75}px"></i><div class="pf-copy" style="flex:1;min-width:0">${c.ed(x.key, x.text, 'style="display:block"')}</div></div>`).join('')}
    </div>
  </section>` }).join('')}
  <footer class="ab in" style="left:0;top:746px;width:1920px;height:334px;background:var(--ink);color:var(--paper);padding:24px 120px 34px;--i:${c.n + 1}">
    <div class="serif" style="font-size:28px;line-height:1.4;padding-bottom:16px;border-bottom:1px solid color-mix(in srgb,var(--paper) 35%,transparent)">${c.ed('it0', clean(fixed.t))}</div>
    <div style="display:flex;gap:28px;padding-top:18px">
      ${facts.map(x => `<div class="pf-copy" style="width:${fw}px;flex:none;font-size:${ff}px;line-height:1.5">${c.ed(x.key, x.text, 'style="display:block"')}</div>`).join('')}
    </div>
  </footer>`
} }) }

/* variants/notice/stage-ribbon.js */
// notice／stage-ribbon：橫幅實景＋階段閱讀帶；學自單-03「分階段行前清單」的時間順序與空白核取框
// 按原資料組名分類，不新增日期或提醒；不明分類保留在「其他提醒」，編輯鍵沿用 it / s
{ const U = M.util
M.add('notice', 'stage-ribbon', { name: '旅途三階段', range: [3, 5], html: c => {
  if (c.p.noticeDetail !== true) return M.noticeTitles(c, 'stage-ribbon')
  const clean = s => String(s ?? '').replace(/[，。,.]+$/, '')
  const phases = [
    { id: 'before', t: '出發前', groups: [] },
    { id: 'airport', t: '機場', groups: [] },
    { id: 'local', t: '當地', groups: [] },
    { id: 'other', t: '其他提醒', groups: [] }
  ]
  c.items.forEach((it, i) => {
    const t = it.t || '', phase = /行前|基本資訊|出發前|準備/.test(t) ? 0 : /機場|入境|出境|出入境|海關/.test(t) ? 1 : /行程|交通|住宿|飯店|學生團/.test(t) ? 2 : 3
    phases[phase].groups.push({ it, i })
  })
  const active = phases.filter(p => p.groups.length), labelW = c.n > 3 ? 200 : 240, W = 1680 - labelW - 40, H = 788, gap = 28
  const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.08 / w))
  // 連續分欄：不改條目順序，找最高欄最矮的切點
  const split = (xs, cols, height) => {
    let best = { height: Infinity, cols: [] }
    const visit = (start, left, result) => {
      if (left === 1) {
        const parts = [...result, xs.slice(start)], h = Math.max(...parts.map(a => a.reduce((sum, x) => sum + height(x), 0)))
        if (h < best.height) best = { height: h, cols: parts }
        return
      }
      for (let end = start + 1; end <= xs.length - left + 1; end++) visit(end, left - 1, [...result, xs.slice(start, end)])
    }
    if (!xs.length) return { height: 0, cols: [[]] }
    visit(0, Math.min(cols, xs.length), [])
    return best
  }
  const plan = fs => active.map(p => {
    const multi = p.groups.length > 1, cols = multi ? p.groups.length : Math.min(3, Math.max(1, (p.groups[0].it.items || []).length))
    const w = (W - (cols - 1) * gap) / cols
    const entries = g => (g.it.items || []).map((s, j) => ({ s: clean(s), key: 's' + g.i + '_' + j }))
    const itemH = x => lines(clean(c.tx(x.key, x.s)), w - 28, fs) * fs * 1.4 + 8
    if (multi) {
      const groups = p.groups.map(g => ({ ...g, entries: entries(g) }))
      return { ...p, w, cols, groups, height: 26 + Math.max(...groups.map(g => lines(c.tx('it' + g.i, g.it.t), w, 27) * 32 + 12 + g.entries.reduce((s, x) => s + itemH(x), 0))) }
    }
    const g = p.groups[0], parts = split(entries(g), cols, itemH)
    return { ...p, w, cols, parts: parts.cols, height: 26 + 32 + 12 + parts.height }
  })
  // 長篇真資料繼續依可用高度縮排，沿用全版本最低 16px，不裁掉條目。
  let fs = 16, rows
  for (const size of [30, 28, 26, 24, 22, 20, 18, 16]) {
    fs = size; rows = plan(fs)
    if (rows.reduce((s, r) => s + r.height, 0) <= H) break
  }
  const extra = Math.max(0, H - rows.reduce((s, r) => s + r.height, 0)) / rows.length
  const img = c.p.img || c.meta.hero || (c.meta.pool || [])[0]
  const title = c.p.title || '旅途中的每一步', heading = (g, width) => `<div class="serif" style="font-size:${U.fit(c.tx('it' + g.i, g.it.t), width, 27, 20)}px;line-height:32px;margin-bottom:12px">${c.ed('it' + g.i, clean(g.it.t))}</div>`
  const list = xs => xs.map(x => `<div style="display:flex;gap:12px;align-items:flex-start;font-size:${fs}px;line-height:1.4;margin-bottom:8px"><i aria-hidden="true" style="flex:none;width:16px;height:16px;border:1.5px solid var(--acc);margin-top:${(fs * 1.4 - 16) / 2}px"></i><div style="flex:1;min-width:0;overflow-wrap:anywhere;text-wrap:pretty">${c.ed(x.key, x.s, 'style="display:block"')}</div></div>`).join('')
  let y = 220
  return `<style>
    @media(prefers-reduced-motion:no-preference){.v-stage-ribbon .in{animation-name:notice-stage-ribbon-cut;animation-duration:.6s}}
    @keyframes notice-stage-ribbon-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
  </style>
  <div class="ab in" style="left:120px;top:48px;width:680px;--i:0">
    <div style="font-size:20px;letter-spacing:.15em;color:var(--acc)">${c.ed('k', '注意事項')}</div>
    <div class="serif" style="font-size:${U.fit(c.tx('h', title), 680, 52, 32)}px;line-height:1.25;margin-top:16px">${c.ed('h', title)}</div>
    ${c.meta.dates ? `<div style="font-size:22px;margin-top:16px">${c.ed('stage-dates', c.meta.dates)}</div>` : ''}
  </div>
  ${img ? `<img class="hero ab in" src="${U.esc(img)}" alt="" style="left:860px;top:48px;width:940px;height:136px;object-fit:cover;object-position:50% 58%;--i:0">` : ''}
  ${rows.map((r, k) => {
    const h = r.height + extra, top = y; y += h
    return `<section class="ab in" style="left:120px;top:${top}px;width:1680px;height:${h}px;border-top:2px solid var(--acc);display:flex;padding-top:14px;gap:40px;--i:${k + 1}">
      <div style="width:${labelW}px;flex:none;border-left:5px solid var(--acc);padding-left:22px">
        <div style="font:500 36px var(--serif);color:var(--acc)">${c.ed('stage-no-' + r.id, U.no(k))}</div>
        <div class="serif" style="font-size:36px;line-height:1.4;margin-top:10px">${c.ed('stage-label-' + r.id, r.t)}</div>
      </div>
      <div style="width:${W}px;min-width:0">
        ${r.groups.length === 1 ? heading(r.groups[0], W) + `<div style="display:flex;gap:${gap}px">${r.parts.map(part => `<div style="width:${r.w}px">${list(part)}</div>`).join('')}</div>` :
          `<div style="display:flex;gap:${gap}px">${r.groups.map(g => `<div style="width:${r.w}px">${heading(g, r.w)}${list(g.entries)}</div>`).join('')}</div>`}
      </div>
    </section>`
  }).join('')}
  <div class="ab" style="left:120px;top:1018px;width:1680px;height:2px;background:var(--ink)"></div>`
} }) }

/* variants/notice/tiers.js */
// notice／tiers：詳略兩級——前兩組給完整卡（一條一行），其餘各組收進下方淡色框，一組一行、條目接在同一段裡。
// 學自東京官方手冊第 7 招「詳略兩級」（項目多於放得下的完整卡數時，其餘降一級；淡色框＋一句導語）。內容一字不少，只換排法。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('notice', 'tiers', { name: '詳略兩級', range: [3, 6], html: c => {
  if (c.p.noticeDetail !== true) return M.noticeTitles(c, 'tiers')
  const n = c.n, T = 262, B = 1012, D = 2, GAP = 40, dw = (1680 - GAP) / 2, cl = ['var(--acc)', 'var(--acc2)', 'var(--acc3)', 'var(--ink)', '#8a8f93', 'var(--acc)']
  const det = c.items.slice(0, D), rest = c.items.slice(D), LW = 300, BW = 1680 - 80 - LW - 30, SEP = '　／　'
  const runText = it => (it.items || []).map(x => x.replace(/[，。,.]+$/, '')).join(SEP)
  const detH = fs => Math.max(...det.map((it, i) => fs * 1.4 * 1.3 + 40 + (it.items || []).reduce((a, x) => a + lines(x, dw - 64 - fs, fs) * fs * 1.5 + 10, 0))) + 40
  const restH = fb => 34 + 44 + rest.reduce((a, it) => a + Math.max(fb * 1.2 * 1.35, lines(runText(it) || ' ', BW, fb) * fb * 1.5) + 18, 0)
  let fs = 16, fb = 16
  out: for (const a of [28, 26, 24, 22, 20, 18, 16]) for (const b of [24, 22, 20, 18, 16]) if (detH(a) + 30 + restH(b) <= B - T) { fs = a; fb = b; break out }
  const rh = restH(fb), dh = B - T - 30 - rh
  return `<div class="ab in" style="left:120px;top:84px;--i:1"><div class="kick">${c.ed('k', '注意事項')}</div><div class="serif" style="font-size:58px;margin-top:8px">${c.ed('h', '出門在外，記得這幾件事')}</div></div>` +
    `<div class="ab" style="left:120px;top:${T}px;width:1680px;min-height:${B - T}px;display:flex;flex-direction:column;gap:30px"><div style="flex:1 0 auto;display:flex;gap:${GAP}px">` +
    det.map((it, i) => `<div class="in" style="flex:1;min-width:0;background:#fff;border-top:8px solid ${cl[i]};padding:22px 32px;box-shadow:0 20px 40px -28px rgba(0,0,0,.35);--i:${i + 2}">
      <div style="display:flex;align-items:baseline;gap:14px"><span style="font:700 ${fs}px var(--serif);color:${cl[i]}">${c.ed('no' + i, U.no(i))}</span><div class="serif" style="font-size:${Math.round(fs * 1.4)}px;line-height:1.3">${c.ed('it' + i, it.t)}</div></div>
      ${(it.items || []).map((x, j) => `<div style="display:flex;gap:${fs * .6}px;margin-top:10px"><i style="flex:none;width:8px;height:8px;margin-top:${fs * .75 - 4}px;background:${cl[i]}"></i><div style="flex:1;min-width:0;font-size:${fs}px;line-height:1.5;color:#2c3236">${c.ed('s' + i + '_' + j, x.replace(/[，。,.]+$/, ''), 'style="display:block"')}</div></div>`).join('')}</div>`).join('') +
    `</div><div class="in" style="flex:none;background:color-mix(in srgb,var(--acc) 8%,#fff);padding:22px 40px;--i:${D + 2}">
      <div style="font:600 ${Math.max(20, fb)}px var(--serif);letter-spacing:.12em;color:var(--acc);margin-bottom:12px">${c.ed('lead', '其他也要留意')}</div>
      ${rest.map((it, k) => { const i = k + D; return `<div style="display:flex;gap:30px;padding:9px 0;border-top:1px solid color-mix(in srgb,var(--acc) 22%,#fff)">
        <div style="flex:none;width:${LW}px;display:flex;gap:12px;align-items:baseline"><i style="flex:none;width:12px;height:12px;background:${cl[i % 6]}"></i><div class="serif" style="font-size:${Math.round(fb * 1.2)}px;line-height:1.35">${c.ed('it' + i, it.t)}</div></div>
        <div style="flex:1;min-width:0;font-size:${fb}px;line-height:1.5;color:#2c3236">${runText(it) ? c.ed('r' + i, runText(it), 'style="display:block"') : ''}</div></div>` }).join('')}</div></div>` } }) }

/* variants/overview/arches.js */
// overview／arches：一天一扇拱門照片站在同一條墨線上，高度三種輪替（像一排天際線），下半一塊淺主色地面，線下寫 D1 主題＋路線
{ const U = M.util
M.add('overview', 'arches', { name: '拱門一天一個主題（高低輪替）', range: [2, 10], html: c => {
    const n = c.n, gap = n > 7 ? 18 : 28, w = Math.min(n <= 3 ? 420 : 360, (1680 - gap * (n - 1)) / n), X0 = 960 - (w * n + gap * (n - 1)) / 2
    const base = 800, H0 = [440, 500, 540, 500], k = Math.min(1, (w * 3.2) / 470), tf = n <= 5 ? 32 : n <= 7 ? 26 : 22
    let arches = '', labels = ''
    c.items.forEach((it, i) => {
      const x = X0 + i * (w + gap), h = Math.round(Math.max(w * .9, H0[i % 4] * k))
      arches += `<div class="ab in ovar-a" style="left:${x}px;top:${base - h}px;width:${w}px;height:${h}px;border-radius:${w / 2}px ${w / 2}px 0 0;overflow:hidden;background:var(--acc);box-shadow:0 40px 60px -22px rgba(0,0,0,.5),0 6px 16px rgba(0,0,0,.18);animation-delay:${i * 80}ms">
          ${it.img ? `<img src="${it.img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block">` : ''}</div>`
      const t = c.tx('it' + i, it.t)
      labels += `<div class="ab in" style="left:${x}px;top:${base + 22}px;width:${w}px;--i:${i + 4}">
          <div style="font:700 ${n > 7 ? 18 : 22}px var(--serif);color:var(--acc2);letter-spacing:.08em">D${i + 1}${it.sub && w > 220 ? `<span style="color:var(--mute);font-weight:500;font-size:.8em">　${U.esc(it.sub)}</span>` : ''}</div>
          <div class="serif" style="font-size:${Math.max(16, Math.min(tf, Math.floor(w * 2 / Math.max(1, U.len(t)) / 1.08)))}px;line-height:1.35;margin-top:6px;text-wrap:balance">${c.ed('it' + i, it.t)}</div>
          ${it.body && w > 200 ? `<div style="font-size:17px;color:var(--mute);margin-top:6px;line-height:1.5">${U.esc(it.body.replace(/\s*→\s*/g, '・'))}</div>` : ''}</div>`
      M.box(i, x, base - h, w, h, c.target(i), it.img)
    })
    return `<style>.v-arches .ovar-a{animation:ovarUp .9s cubic-bezier(.16,.8,.24,1) both;transform-origin:bottom}@keyframes ovarUp{from{transform:scaleY(.2);opacity:0}}
        @media (prefers-reduced-motion:reduce){.v-arches .ovar-a{animation:none}}</style>
      <div class="ab" style="left:0;top:${base - 250}px;width:1920px;height:${1080 - base + 250}px;background:color-mix(in srgb,var(--acc) 12%,var(--paper))"></div>
      <div class="ab in" style="left:120px;top:96px;--i:0"><div class="kick">${c.ed('k', '行程總覽')}</div><div class="serif" style="font-size:64px;margin-top:12px">${c.ed('h', '一天一個主題')}</div></div>
      ${arches}<div class="ab" style="left:120px;top:${base}px;width:1680px;height:3px;background:var(--ink)"></div>${labels}` } }) }

/* variants/overview/arcpano.js */
// overview／arcpano：一道拱形觀景窗（同心扇環）被放射縫切成 n 片，每片一天的照片；天數沿拱的內緣排開，拱下正中放標題
// 學自小紅書 692e9b43000000001b027474 排版 2（空心弧切多圖）、6a2678e7000000001502720f（用圓弧解鎖多圖排版）
{ const U = M.util
M.add('overview', 'arcpano', { name: '拱形觀景窗（扇環一天一片）', range: [3, 7], html: c => {
    const n = c.n, cx = 960, cy = 1250, r0 = 650, r1 = 1050, a0 = -153, span = 126, gap = 1.1, rl = 745
    const P = (r, d) => [cx + r * Math.cos(d * Math.PI / 180), cy + r * Math.sin(d * Math.PI / 180)]
    const lw = Math.min(300, rl * span * Math.PI / 180 / n * .78), tf = n <= 4 ? 30 : n <= 5 ? 26 : 22
    let defs = '', body = '', labels = ''
    c.items.forEach((it, i) => {
      const s = a0 + span * i / n + gap / 2, e = a0 + span * (i + 1) / n - gap / 2, m = (s + e) / 2, d = U.sector(cx, cy, r0, r1, s, e)
      const pts = [s, m, e].flatMap(a => [P(r0, a), P(r1, a)]), xs = pts.map(p => p[0]), ys = pts.map(p => p[1])
      const bx = Math.min(...xs), by = Math.min(...ys) - 40, bw = Math.max(...xs) - bx, bh = Math.max(...ys) - by
      defs += `<clipPath id="ovap-c${i}"><path d="${d}"/></clipPath>`
      body += it.img ? `<image class="in" href="${it.img}" x="${bx}" y="${by}" width="${bw}" height="${bh}" preserveAspectRatio="xMidYMid slice" clip-path="url(#ovap-c${i})" style="--i:${i + 2}"/>` : `<path d="${d}" fill="var(--acc)"/>`
      body += `<path d="${d}" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>`
      const [lx, ly] = P(rl, m), t = c.tx('it' + i, it.t), fs = Math.max(17, Math.min(tf, Math.floor(lw * 2 / Math.max(1, U.len(t)) / 1.08)))
      labels += `<div class="ab in" style="left:${lx - lw / 2}px;top:${ly}px;width:${lw}px;transform:translateY(-50%);text-align:center;text-shadow:0 2px 10px rgba(0,0,0,.6);color:#fff;--i:${i + 6}">
          <div style="font:700 ${n > 5 ? 16 : 18}px var(--sans);letter-spacing:.16em;color:var(--acc3)">DAY ${i + 1}</div>
          <div class="serif" style="font-size:${fs}px;line-height:1.3;margin-top:6px;text-wrap:balance">${c.ed('it' + i, it.t)}</div>
          ${it.sub && n <= 5 ? `<div style="font-size:16px;letter-spacing:.1em;opacity:.65;margin-top:6px">${U.esc(it.sub)}</div>` : ''}</div>`
      const [mx, my] = P((r0 + r1) / 2, m); M.box(i, mx - 110, my - 140, 220, 280, c.target(i), it.img)
    })
    return `<div class="ab" style="inset:0;background:radial-gradient(90% 80% at 50% 100%,color-mix(in srgb,var(--acc) 45%,#0d1214),#0d1214)"></div>
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px"><defs>${defs}<radialGradient id="ovap-g" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r1}"><stop offset="${r0 / r1}" stop-color="#0a0e10" stop-opacity=".9"/><stop offset="${(r0 + 170) / r1}" stop-color="#0a0e10" stop-opacity=".55"/><stop offset="${(r0 + 330) / r1}" stop-color="#0a0e10" stop-opacity="0"/></radialGradient></defs>
        <circle cx="${cx}" cy="${cy}" r="${r0 - 14}" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="2"/>${body}
        <path d="${U.sector(cx, cy, r0, r1, a0, a0 + span)}" fill="url(#ovap-g)" pointer-events="none"/>
        <circle cx="${cx}" cy="${cy}" r="${r1 + 16}" fill="none" stroke="var(--acc3)" stroke-opacity=".7" stroke-width="2"/></svg>
      <div class="ab in" style="left:${cx - 300}px;top:800px;width:600px;text-align:center;color:#fff;--i:1">
        <div class="kick" style="color:var(--acc3)">${c.ed('k', '行程總覽')}</div>
        <div class="serif" style="font-size:64px;margin-top:14px">${c.ed('h', n + ' 天，一天一扇窗')}</div></div>${labels}` } }) }

/* variants/overview/cards.js */
// overview／cards：每日總覽，一天一張直條卡（2～7 天一排；8～14 天兩排）
{ const U = M.util
M.add('overview', 'cards', { name: '直條卡片，一天一張', range: [2, 14], html: c => {
  const n = c.n, rows = n > 7 ? 2 : 1, per = Math.ceil(n / rows), X0 = 120, X1 = 1800, gap = 24, w = (X1 - X0 - gap * (per - 1)) / per, H = rows === 1 ? 560 : 250, Y0 = rows === 1 ? 300 : 260
  return `<div class="ab in" style="left:120px;top:100px;--i:1"><div class="kick">${c.ed('k', '行程總覽')}</div><div class="serif" style="font-size:64px;margin-top:10px">${c.ed('h', n + ' 天，一天一個主題')}</div></div>` +
    c.items.map((it, i) => { const r = Math.floor(i / per), k = i % per, x = X0 + k * (w + gap), y = Y0 + r * (H + 140); M.box(i, x, y, w, H, c.target(i))
      return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;--i:${i + 2}"><img src="${it.img}" alt="" style="width:100%;height:${H}px;object-fit:cover;border-radius:${w / 2}px ${w / 2}px 0 0;display:block;box-shadow:0 30px 50px -24px rgba(0,0,0,.5)">
        <div style="font:700 ${rows === 1 ? 30 : 24}px var(--serif);color:var(--acc);margin-top:14px">DAY ${i + 1}</div>
        <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w, rows === 1 ? 30 : 24, 16)}px;line-height:1.35">${c.ed('it' + i, it.t)}</div>
        <div style="font-size:${rows === 1 ? 18 : 16}px;color:var(--mute);margin-top:4px">${U.esc(it.sub || '')}</div></div>` }).join('') } }) }

/* variants/overview/central-timeline.js */
// overview／central-timeline：中央雙幅旅景，左右兩段日序由上到下閱讀，專供 8～12 天
{ const U = M.util
M.add('overview', 'central-timeline', { name: '旅景中軸（長行程雙翼）', range: [8, 12], html: c => {
  const split = Math.ceil(c.n / 2), y = 278, height = 720, width = 500, textWidth = 410
  const hero = c.p.img || c.meta.hero || c.meta.pool?.[0]
  const second = c.items.find(it => it.img && it.img !== hero)?.img || c.meta.pool?.find(img => img !== hero)
  const clean = t => String(t || '').replace(/[，。,.]+$/u, '')
  const wings = [c.items.slice(0, split), c.items.slice(split)].map((items, col) => {
    const x = col ? 1300 : 120, rh = height / items.length
    return `<div class="ab in ovct-days${col ? '' : ' ovct-left'}" style="left:${x}px;top:${y}px;width:${width}px;--i:1">${items.map((it, k) => {
      const i = col * split + k, fs = U.fit(c.tx('it' + i, clean(it.t)), textWidth, 32, 24)
      M.box(i, x, y + k * rh, width, rh, c.target(i), it.img || hero)
      return `<div class="ovct-day" style="height:${rh}px" data-day="${i + 1}">
        <div class="ovct-no">${c.ed('day' + i, U.no(i))}</div>
        <div class="ovct-copy">
          ${it.sub ? `<div class="ovct-date">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}
          <div class="serif ovct-title" style="font-size:${fs}px">${c.ed('it' + i, clean(it.t))}</div>
          ${it.body ? `<div class="ovct-route">${c.ed('body' + i, clean(it.body))}</div>` : ''}
        </div>
      </div>`
    }).join('')}</div>`
  }).join('')
  return `<style>
    .v-central-timeline{background:var(--paper)}
    .v-central-timeline .ovct-dark{background:var(--ink)}
    .v-central-timeline .ovct-days{color:var(--ink)}
    .v-central-timeline .ovct-day{display:flex;gap:18px;align-items:center;border-top:1px solid currentColor;box-sizing:border-box}
    .v-central-timeline .ovct-day:last-child{border-bottom:1px solid currentColor}
    .v-central-timeline .ovct-no{width:72px;flex:none;font:500 56px/1 var(--serif);font-variant-numeric:tabular-nums}
    .v-central-timeline .ovct-copy{width:${textWidth}px}
    .v-central-timeline .ovct-date{font-size:18px;line-height:1.25;letter-spacing:.08em}
    .v-central-timeline .ovct-title{line-height:1.25;margin:5px 0;text-wrap:balance}
    .v-central-timeline .ovct-route{font-size:18px;line-height:1.35}
    .v-central-timeline .ovct-cut{animation:ovct-open .8s cubic-bezier(.16,1,.3,1) both}
    .v-central-timeline .ovct-left{color:var(--paper)}
    @keyframes ovct-open{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-central-timeline .in{animation:none!important}}
  </style>
  <div class="ab ovct-dark" style="left:0;top:0;width:690px;height:1080px"></div>
  <div class="ab" style="left:690px;top:0;width:540px;height:1080px;background:var(--acc)"></div>
  ${hero ? `<img class="ab hero in ovct-cut" src="${U.esc(hero)}" alt="" style="left:690px;top:0;width:540px;height:${second ? 652 : 1080}px;object-fit:cover;--i:0">` : ''}
  ${second ? `<img class="ab in ovct-cut" src="${U.esc(second)}" alt="" style="left:690px;top:670px;width:540px;height:410px;object-fit:cover;--i:0">` : ''}
  <div class="ab in ovct-left" style="left:120px;top:86px;width:500px;--i:0">
    <div class="serif" style="font-size:${U.fit(c.tx('h', '每日總覽'), width, 66, 36)}px;line-height:1.2">${c.ed('h', '每日總覽')}</div>
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:26px;font-size:22px;line-height:1.4">
      <span>${c.ed('duration', c.n + ' 天行程')}</span><span>${c.ed('part0', '01 — ' + U.no(split - 1))}</span>
    </div>
  </div>
  <div class="ab in" style="left:1300px;top:96px;width:500px;color:var(--ink);--i:0">
    ${c.meta.title ? `<div class="serif" style="font-size:${U.fit(c.tx('trip', c.meta.title), width, 38, 26)}px;line-height:1.3">${c.ed('trip', clean(c.meta.title))}</div>` : ''}
    <div style="display:flex;justify-content:space-between;align-items:baseline;margin-top:30px;font-size:20px;line-height:1.4">
      ${c.meta.en ? `<span>${c.ed('place', c.meta.en)}</span>` : ''}<span>${c.ed('part1', U.no(split) + ' — ' + U.no(c.n - 1))}</span>
    </div>
  </div>
  ${wings}`
} }) }

/* variants/overview/columns.js */
// overview／columns：一天一欄滿版色帶，四色輪替（主色／金／紙／墨）；欄頂一張照片，欄底一個只露上半的超大天數，中段寫日期與主題
// 學自小紅書 6ab0e795000000003b012e61（城市導覽折頁：一摺一色＋出血大數字）
{ const U = M.util
M.add('overview', 'columns', { name: '色欄節奏（一天一色＋出血大數字）', range: [3, 8], html: c => {
    const n = c.n, cw = 1920 / n, ph = 480, tf = cw > 500 ? 48 : cw > 360 ? 40 : cw > 260 ? 30 : 26
    const TONES = [['var(--acc)', '#fff'], ['var(--acc3)', '#1d2124'], ['color-mix(in srgb,var(--paper) 88%,var(--acc3))', 'var(--ink)'], ['#1d2124', '#fff']]
    const cols = c.items.map((it, i) => {
      const x = i * cw, [bg, ink] = TONES[i % 4], t = c.tx('it' + i, it.t), pad = cw > 260 ? 36 : 24
      const fs = Math.max(18, Math.min(tf, Math.floor((cw - pad * 2) * 2 / Math.max(1, U.len(t)) / 1.08))), big = Math.min(400, cw * 1.1)
      M.box(i, x, 0, cw, ph, c.target(i), it.img)
      return `<div class="ab ovco-c" style="left:${x}px;top:0;width:${Math.ceil(cw) + 1}px;height:1080px;background:${bg};color:${ink};overflow:hidden;animation-delay:${i * 70}ms">
          ${it.img ? `<img src="${it.img}" alt="" style="position:absolute;left:0;top:0;width:100%;height:${ph}px;object-fit:cover">` : ''}
          <div class="in" style="position:absolute;left:${pad}px;right:${pad}px;top:${ph + 44}px;--i:${i + 4}">
            <div style="font:700 ${cw > 260 ? 20 : 17}px var(--sans);letter-spacing:.18em;opacity:.8">DAY ${i + 1}${it.sub && cw > 300 ? `　${U.esc(it.sub)}` : ''}</div>
            <div class="serif" style="font-size:${fs}px;line-height:1.3;margin-top:12px;text-wrap:balance">${c.ed('it' + i, it.t)}</div>
            ${it.body && cw > 250 ? `<div style="font-size:17px;line-height:1.6;margin-top:12px;opacity:.75">${U.esc(it.body.replace(/\s*→\s*/g, '・'))}</div>` : ''}</div>
          <div class="in" style="position:absolute;left:${pad - big * .04}px;top:${1080 - big * .8}px;font:900 ${big}px/1 var(--serif);opacity:.3;letter-spacing:-.04em;--i:${i + 6}">${i + 1}</div></div>`
    }).join('')
    return `<style>.v-columns .ovco-c{animation:ovcoUp .8s cubic-bezier(.2,.8,.2,1) both}@keyframes ovcoUp{from{clip-path:inset(100% 0 0 0)}}
        @media (prefers-reduced-motion:reduce){.v-columns .ovco-c{animation:none}}</style>${cols.replace(/class="ab ovco-c"/g, 'class="ab in ovco-c"')}
      <div class="ab" style="left:0;top:0;width:1920px;height:${ph}px;background:linear-gradient(180deg,rgba(8,12,14,.6),rgba(8,12,14,0) 55%);pointer-events:none"></div>
      <div class="ab in" style="left:120px;top:70px;color:#fff;display:flex;align-items:baseline;gap:26px;--i:1">
        <span class="serif" style="font-size:64px;text-shadow:0 4px 20px rgba(0,0,0,.4)">${c.ed('h', n + ' 天行程')}</span><span style="font-size:20px;letter-spacing:.4em;opacity:.9">${c.ed('k', 'ITINERARY')}</span></div>` } }) }

/* variants/overview/film.js */
// overview／film：一條（8 天以上兩條）黑色底片帶，上下一排齒孔，一格一天；格下寫 DAY／日期／主題
// 學自小紅書 6a0d27a0000000003802129d（梨園國風：膠捲照片帶）、69cfb1d60000000023026df3（統一高度的照片帶）
{ const U = M.util
M.add('overview', 'film', { name: '底片膠捲（一格一天）', range: [2, 14], html: c => {
    const n = c.n, rows = n > 7 ? 2 : 1, per = Math.ceil(n / rows), gap = 24, fw = (1680 - gap * (per - 1)) / per
    const H = rows === 1 ? 480 : 300, mg = rows === 1 ? 60 : 44, Y = rows === 1 ? [320] : [214, 636], tf = rows === 1 ? (per <= 4 ? 34 : 28) : 22
    let strips = '', labels = ''
    Y.forEach((y, r) => {
      strips += `<g class="in ovfm-s" style="animation-delay:${r * 160}ms"><rect x="0" y="${y}" width="1920" height="${H}" fill="#0b0c0d"/>
        <rect x="0" y="${y + mg * .3}" width="1920" height="${mg * .4}" fill="url(#ovfm-h)"/><rect x="0" y="${y + H - mg * .7}" width="1920" height="${mg * .4}" fill="url(#ovfm-h)"/>`
      c.items.slice(r * per, r * per + per).forEach((it, k) => {
        const i = r * per + k, x = 120 + k * (fw + gap)
        strips += it.img ? `<image href="${it.img}" x="${x}" y="${y + mg}" width="${fw}" height="${H - 2 * mg}" preserveAspectRatio="xMidYMid slice"/>` : `<rect x="${x}" y="${y + mg}" width="${fw}" height="${H - 2 * mg}" fill="var(--acc)"/>`
        strips += `<text x="${x + 10}" y="${y + mg - 10}" fill="#e8b04a" style="font:600 ${rows === 1 ? 16 : 14}px var(--sans);letter-spacing:.1em">${String(i + 1).padStart(2, '0')}A</text>`
        const fs = U.fit(c.tx('it' + i, it.t), fw, tf, 16)
        labels += `<div class="ab in" style="left:${x}px;top:${y + H + (rows === 1 ? 28 : 14)}px;width:${fw}px;color:#fff;--i:${i + 3}">
          <div style="font:700 ${rows === 1 ? 20 : 16}px var(--serif);letter-spacing:.14em;color:var(--acc3)">DAY ${i + 1}${it.sub && fw > 300 ? `<span style="color:#ffffff99;font-weight:500">　${U.esc(it.sub)}</span>` : ''}</div>
          <div class="serif" style="font-size:${fs}px;line-height:1.3;margin-top:${rows === 1 ? 8 : 4}px">${c.ed('it' + i, it.t)}</div>
          ${it.body && rows === 1 && per <= 5 ? `<div style="font-size:18px;color:#ffffff99;margin-top:6px">${U.esc(it.body)}</div>` : ''}</div>`
        M.box(i, x, y + mg, fw, H - 2 * mg, c.target(i), it.img)
      })
      strips += '</g>'
    })
    return `<style>.v-film .ovfm-s{animation:ovfmIn 1.1s cubic-bezier(.2,.8,.2,1) both}@keyframes ovfmIn{from{transform:translateX(240px);opacity:0}}
        @media (prefers-reduced-motion:reduce){.v-film .ovfm-s{animation:none}}</style>
      <div class="ab" style="inset:0;background:#1a1d1f"></div>
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs><pattern id="ovfm-h" width="52" height="${mg * .4}" patternUnits="userSpaceOnUse"><rect x="14" y="0" width="24" height="${mg * .4}" rx="4" fill="#3a3d40"/></pattern></defs>${strips}</svg>
      <div class="ab in" style="left:120px;top:${rows === 1 ? 120 : 64}px;color:#fff;display:flex;align-items:baseline;gap:28px;--i:0">
        <span class="kick" style="color:var(--acc3)">${c.ed('k', '行程總覽')}</span><span class="serif" style="font-size:${rows === 1 ? 60 : 50}px">${c.ed('h', n + ' 天，一天一格')}</span></div>${labels}` } }) }

/* variants/overview/journey-weave.js */
// overview／journey-weave：日期軸穿過上下交錯的照片與文字，3～6 天一頁展開
{ const U = M.util
M.add('overview', 'journey-weave', { name: '旅程長卷（上下交錯）', range: [3, 6], html: c => {
  const gap = 32, w = (1680 - gap * (c.n - 1)) / c.n
  const clean = s => String(s || '').replace(/[，。,.]+$/u, '')
  const days = c.items.map((it, i) => {
    const x = 120 + i * (w + gap), upper = i % 2 === 0
    const py = upper ? 222 : 674, ty = upper ? 674 : 222
    const title = clean(it.t), fs = U.fit(c.tx('it' + i, title), w * 2, c.n < 5 ? 42 : 34, 24)
    M.box(i, x, 222, w, 750, c.target(i), it.img)
    return `<div class="ab in ovjw-day" style="left:${x}px;top:222px;width:${w}px;height:750px;--i:${i + 1}">
      ${it.img ? `<img${i === 0 ? ' class="hero"' : ''} src="${U.esc(it.img)}" alt="" style="top:${py - 222}px">` : ''}
      <div class="ovjw-copy" style="top:${ty - 222}px">
        <div class="serif ovjw-title" style="font-size:${fs}px">${c.ed('it' + i, title)}</div>
        ${it.body ? `<div class="ovjw-route">${c.ed('body' + i, clean(it.body))}</div>` : ''}
      </div>
      <div class="ovjw-date">
        <div class="ovjw-no">${c.ed('day' + i, U.no(i))}</div>
        ${it.sub ? `<div class="ovjw-sub">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}
      </div>
    </div>`
  }).join('')
  return `<style>
    .v-journey-weave{background:var(--paper);color:var(--ink)}
    .v-journey-weave .ovjw-day{animation-name:ovjw-cut;animation-duration:.7s}
    .v-journey-weave .ovjw-day img{position:absolute;left:0;width:100%;height:298px;object-fit:cover;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent)}
    .v-journey-weave .ovjw-copy{position:absolute;left:0;width:100%;height:298px;display:flex;flex-direction:column;justify-content:center;border-top:1px solid color-mix(in srgb,var(--ink) 24%,transparent);border-bottom:1px solid color-mix(in srgb,var(--ink) 24%,transparent)}
    .v-journey-weave .ovjw-title{line-height:1.45;text-wrap:balance}
    .v-journey-weave .ovjw-route{font-size:22px;line-height:1.7;margin-top:24px;text-wrap:pretty}
    .v-journey-weave .ovjw-date{position:absolute;top:330px;width:100%;height:100px;display:flex;align-items:center;gap:22px;color:var(--paper)}
    .v-journey-weave .ovjw-no{font:500 68px/1 var(--serif);font-variant-numeric:tabular-nums}
    .v-journey-weave .ovjw-sub{font-size:20px;letter-spacing:.04em;line-height:1.4}
    @keyframes ovjw-cut{from{opacity:0;clip-path:inset(0 100% 0 0)}to{opacity:1;clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-journey-weave .in{animation:none!important}}
  </style>
  <svg class="ab" width="1920" height="1080" aria-hidden="true" style="inset:0;pointer-events:none"><defs><pattern id="overview-journey-weave-grain" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="var(--ink)" opacity=".035"/></pattern></defs><rect width="1920" height="1080" fill="url(#overview-journey-weave-grain)"/></svg>
  <div class="ab in" style="left:120px;top:80px;width:1680px;display:flex;justify-content:space-between;align-items:center;--i:0">
    <div class="serif" style="font-size:${U.fit(c.tx('h', '每日總覽'), 1000, 64, 36)}px;line-height:1.3">${c.ed('h', '每日總覽')}</div>
    <div style="text-align:right;font-size:22px;line-height:1.7">
      ${c.meta.title ? `<div>${c.ed('trip', clean(c.meta.title))}</div>` : ''}
      ${c.meta.dates ? `<div>${c.ed('d', clean(c.meta.dates))}</div>` : ''}
    </div>
  </div>
  <div class="ab" style="left:0;top:552px;width:1920px;height:100px;background:var(--acc)"></div>
  ${days}`
} }) }

/* variants/overview/kanazawa-book.js */
// KMQ260904A 印刷 PDF p2：章序、書式左軸；暖棕轉譯。先完成原比例復刻再接資料。
{ const U = M.util
M.add('overview', 'kanazawa-book', { name: '金澤・書式章序', range: [2, 8], auto: false, order: 1100, html: c => {
  const row = 690 / c.n, fs = c.n > 6 ? 30 : 36
  return `<style>.v-kanazawa-book{--paper:#f8f5ef;--ink:#302820;--acc:#8a6545;background:var(--paper);color:var(--ink)}.v-kanazawa-book .kb-text{position:absolute;text-align:left}.v-kanazawa-book .kb-row{position:absolute;left:680px;width:1120px;border-bottom:1px solid #c8b9a8;display:flex;flex-direction:column;justify-content:center;gap:8px}</style>
  <div class="kb-text" style="left:120px;top:90px;font-size:24px;letter-spacing:.15em;color:var(--acc)">${c.ed('agency',c.meta.agency || '')}</div>
  <div class="kb-text serif" style="left:120px;top:192px;width:500px;font-size:72px;line-height:1.25">${c.ed('h',c.p.title || M.TYPES.overview)}</div>
  <div class="kb-text" style="left:120px;top:415px;width:500px;font-size:24px;line-height:1.9">${c.ed('trip',c.meta.title || '')}</div>
  <div class="kb-text" style="left:120px;top:900px;width:500px;font-size:24px;line-height:1.6;border-top:5px solid var(--acc);padding-top:22px">${c.ed('dates',c.meta.dates || '')}</div>
  <div style="position:absolute;left:120px;right:120px;top:155px;border-top:2px solid var(--ink)"></div>
  ${c.items.map((a,i)=>{const y=210+i*row;M.box(i,680,y,1120,row,c.target(i));return `<div class="kb-row in" style="top:${y}px;height:${row}px;--i:${i}"><div style="font-size:24px;color:var(--acc)">${c.ed('sub'+i,U.no(i)+(a.sub?'　'+a.sub:''))}</div><div class="serif" style="font-size:${fs}px;line-height:1.3">${c.ed('t'+i,a.t || '')}</div></div>`}).join('')}`
} }) }

/* variants/overview/photo-circles.js */
// overview/continuity: each day's two real images continue independently into its day page.
{ const U = M.util, H = M.continuity
M.add('overview', 'photo-circles', { name: '圓照日序', range: [2, 8], order: 1000, html: c => {
  const row = 820 / c.n, size = Math.min(118, row - 16)
  const rows = c.items.map((item, i) => {
    const dest = c.destination(i), p = dest?.p, y = 150 + i * row
    M.box(i, 760, y, 1040, row, c.target(i), p?.img || item.img)
    return H.photo(p?.img || item.img, 760, y + (row - size) / 2, size, size, size / 2)
      + H.photo(p?.img2, 900, y + (row - size) / 2, size, size, size / 2)
      + `<div class="ct-copy ct-row" data-shared-copy style="left:1050px;top:${y}px;width:750px;height:${row}px;display:flex;flex-direction:column;justify-content:center;gap:6px">
      <div style="font-size:20px;color:var(--acc)">${c.ed('date' + i, item.sub || '')}</div><div class="serif" style="font-size:${U.fit(c.tx('t' + i, item.t), 740, 34, 16)}px;line-height:1.3">${c.ed('t' + i, H.clean(item.t))}</div></div>`
  }).join('')
  return H.style + H.photo(c.meta.hero, 0, 0, 640, 1080, 0, true)
    + `<div class="ct-copy" data-shared-copy style="left:0;top:720px;width:640px;height:360px;padding:50px 70px 40px 120px;background:var(--ink);color:var(--paper)"><div class="serif" style="font-size:56px">${c.ed('h', '每日行程')}</div><div style="font-size:25px;margin-top:26px">${c.ed('trip', c.meta.title || '')}</div><div style="font-size:22px;margin-top:20px">${c.ed('dates', c.meta.dates || '')}</div></div>` + rows
} }) }

/* variants/overview/photo-ledger.js */
// overview／photo-ledger：左側整幅旅景＋右側逐日橫列，日期、主題與路線同列閱讀
{ const U = M.util
M.add('overview', 'photo-ledger', { name: '旅景與日序（橫列總覽）', range: [3, 7], html: c => {
  const n = c.n, x = 780, y = 228, w = 1020, areaH = 744
  const iw = n <= 4 ? 216 : 172
  const widthFor = it => w - 106 - (it.img ? iw + 20 : 0)
  const lineCount = (text, width, size) => String(text || '').split('\n').reduce((sum, line) => sum + Math.max(1, Math.ceil(U.len(line) * size * 1.08 / width)), 0)
  const headingSize = 32, bodySize = 24
  const hs = c.items.map((it,i) => {
    const tw = widthFor(it)
    const textH = lineCount(c.tx('it'+i,it.t),tw,headingSize)*headingSize*1.25 + (it.body ? 8+lineCount(c.tx('body'+i,it.body),tw,bodySize)*bodySize*1.4 : 0)
    const dateH = 32 + (it.sub ? 8+lineCount(c.tx('sub'+i,it.sub),86,24)*24*1.3 : 0)
    return Math.max(textH,dateH)+16
  })
  const slack = Math.max(0,(areaH-hs.reduce((sum,h)=>sum+h,0))/n)
  let rowY = y
  const hero = c.p.img || c.meta.hero || c.meta.pool?.[0]
  const rows = c.items.map((it, i) => {
    const rh = hs[i] + slack, top = rowY; rowY += rh
    const tw = widthFor(it), ih = Math.min(174,rh-28)
    M.box(i, x, top, w, rh, c.target(i), it.img)
    const fs = headingSize
    return `<div class="ovpl-row" style="height:${rh}px">
      <div style="width:86px;flex:none;color:var(--acc)"><div style="font:500 32px/1 var(--serif)">${c.ed('day' + i, U.no(i))}</div>${it.sub ? `<div style="font-size:24px;line-height:1.3;margin-top:8px;overflow-wrap:anywhere;color:var(--mute)">${c.ed('sub' + i, it.sub)}</div>` : ''}</div>
      <div style="width:${tw}px;flex:none;overflow-wrap:anywhere">
        <div class="serif" style="font-size:${fs}px;line-height:1.25;margin:6px 0;text-wrap:balance">${c.ed('it' + i, it.t)}</div>
        ${it.body ? `<div style="font-size:${bodySize}px;line-height:1.4;color:var(--ink)">${c.ed('body' + i, it.body)}</div>` : ''}
      </div>
      ${it.img ? `<img src="${U.esc(it.img)}" alt="" style="margin-left:auto;width:${iw}px;height:${ih}px;object-fit:cover;display:block">` : ''}
    </div>`
  }).join('')
  return `<style>
    .v-photo-ledger .ovpl-row{display:flex;align-items:center;gap:20px;border-top:1px solid color-mix(in srgb,var(--ink) 16%,var(--paper));box-sizing:border-box}
    .v-photo-ledger .ovpl-row:last-child{border-bottom:1px solid color-mix(in srgb,var(--ink) 16%,var(--paper))}
    .v-photo-ledger .ovpl-reveal{animation:ovpl-cut .75s cubic-bezier(.16,.8,.24,1) both}
    @keyframes ovpl-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-photo-ledger .ovpl-reveal{animation:none}}
  </style>
  ${hero ? `<img class="ab hero in ovpl-reveal" src="${U.esc(hero)}" alt="" style="left:0;top:0;width:688px;height:1080px;object-fit:cover;--i:0">` : ''}
  <div class="ab in" style="left:0;top:728px;width:688px;height:352px;background:var(--ink);color:var(--paper);padding:38px 60px 40px 120px;--i:1">
    ${c.meta.en ? `<div style="font:500 ${U.len(c.tx('place',c.meta.en))*72*1.1>508?32:72}px/1.15 var(--serif);letter-spacing:.04em;overflow-wrap:anywhere">${c.ed('place', c.meta.en)}</div>` : ''}
    ${c.meta.title ? `<div class="serif" style="font-size:24px;line-height:1.5;margin-top:16px;overflow-wrap:anywhere">${c.ed('trip', c.meta.title)}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:24px;line-height:1.5;margin-top:22px">${c.ed('d', c.meta.dates)}</div>` : ''}
  </div>
  <div class="ab in" style="left:${x}px;top:90px;width:${w}px;display:flex;align-items:baseline;justify-content:space-between;--i:0">
    <div class="serif" style="font-size:72px;line-height:1.3">${c.ed('h', n + ' 天行程')}</div>
    <div style="font-size:24px;color:var(--acc)">${c.ed('k', '每日總覽')}</div>
  </div>
  <div class="ab in ovpl-reveal" data-content-overflow="${hs.reduce((sum,h)=>sum+h,0)>areaH}" style="left:${x}px;top:${y}px;width:${w}px;--i:1">${rows}</div>`
} }) }

/* variants/overview/ridge.js */
// overview／ridge：米色紙上剪出一條「山稜窗」橫貫全頁，窗被切成 n 段、每段是那一天的照片；
// 每一天的節點交替釘在山稜上緣與下緣，引線拉出日期與主題，視線走 Z 字（2～14 天都排得下）
// 學自小紅書 69341fa8000000001902497f（一分鐘時間軸：山形窗＋上下交替節點）
{ const U = M.util
M.add('overview', 'ridge', { name: '山稜窗時間軸（上下交替）', range: [2, 14], html: c => {
    const n = c.n, gap = n > 9 ? 6 : 10, sw = (1920 - gap * (n - 1)) / n
    const yT = x => 545 + 50 * Math.sin(x / 310 + .6) + 22 * Math.sin(x / 130 + 1.3), yB = x => 830 + 18 * Math.sin(x / 400 + 2)
    const lw = Math.min(520, 2 * sw + gap - 28), tf = n <= 5 ? 38 : n <= 9 ? 30 : 24
    let defs = '', imgs = '', marks = '', labels = ''
    c.items.forEach((it, i) => {
      const x0 = i * (sw + gap), x1 = x0 + sw, xc = (x0 + x1) / 2
      let d = `M${x0},${yT(x0).toFixed(1)}`
      for (let x = x0 + 20; x < x1; x += 20) d += ` L${x.toFixed(1)},${yT(x).toFixed(1)}`
      d += ` L${x1},${yT(x1).toFixed(1)} L${x1},${yB(x1).toFixed(1)}`
      for (let x = x1 - 20; x > x0; x -= 20) d += ` L${x.toFixed(1)},${yB(x).toFixed(1)}`
      d += ` L${x0},${yB(x0).toFixed(1)} Z`
      defs += `<clipPath id="ovrg-c${i}"><path d="${d}"/></clipPath>`
      imgs += `<path d="${d}" fill="#000" opacity=".28" transform="translate(0 10)" filter="url(#ovrg-bl)"/>`
      imgs += it.img ? `<image href="${it.img}" x="${x0}" y="450" width="${sw}" height="410" preserveAspectRatio="xMidYMid slice" clip-path="url(#ovrg-c${i})"/>` : `<path d="${d}" fill="var(--acc)"/>`
      const up = i % 2 === 0, ye = up ? yT(xc) : yB(xc), yl = up ? ye - 56 : ye + 56
      marks += `<line x1="${xc}" y1="${ye}" x2="${xc}" y2="${yl}" stroke="var(--ink)" stroke-width="1.5"/><circle cx="${xc}" cy="${ye}" r="8" fill="var(--paper)" stroke="var(--acc2)" stroke-width="4"/>`
      const lx = Math.max(40, Math.min(1880 - lw, xc - lw / 2)), fs = U.fit(c.tx('it' + i, it.t), lw, tf, 16)
      labels += `<div class="ab in" style="left:${lx}px;${up ? `bottom:${1080 - yl + 8}px` : `top:${yl + 8}px`};width:${lw}px;text-align:center;--i:${i + 3}">
        <div style="font:700 ${n > 9 ? 17 : 20}px var(--serif);letter-spacing:.12em;color:var(--acc2)">DAY ${i + 1}${it.sub ? `<span style="color:var(--mute);font-weight:500">　${U.esc(it.sub)}</span>` : ''}</div>
        <div class="serif" style="font-size:${fs}px;line-height:1.3;margin-top:6px">${c.ed('it' + i, it.t)}</div>
        ${it.body && n <= 7 ? `<div style="font-size:18px;color:var(--mute);margin-top:6px">${U.esc(it.body)}</div>` : ''}</div>`
      M.box(i, x0, 560, sw, 260, c.target(i), it.img)
    })
    return `<div class="ab" style="inset:0;background:color-mix(in srgb,var(--paper) 86%,var(--acc3))"></div>
      <svg class="ab in" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;--i:1"><defs>${defs}<filter id="ovrg-bl" x="-10%" y="-20%" width="120%" height="140%"><feGaussianBlur stdDeviation="9"/></filter></defs>${imgs}${marks}</svg>
      <div class="ab in" style="left:120px;top:76px;--i:0"><div class="kick">${c.ed('k', '行程總覽')}</div><div class="serif" style="font-size:52px;margin-top:8px">${c.ed('h', n + ' 天的路線')}</div></div>${labels}` } }) }

/* variants/overview/six-column-press.js */
// overview/six-column-press · M018：編輯網格保留大編號與閱讀順序，先給正文足夠空間。
// 2–6 項照片欄；7–8 項保留原四欄兩列文字版。容量不足保留全文並明示，不壓小字。
{ M.add('overview','six-column-press',{name:'六欄旅行編輯版',range:[2, 8],html:c=>{
  const U=M.util,p=c.p,meta=c.meta,n=c.n
  const lines=(text,w,size)=>String(text??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.06/w)),0)
  const field=(key,def)=>({key,def:def??'',value:String(c.tx(key,def??''))})
  const height=(f,w,size,leading)=>f.value?lines(f.value,w,size)*size*leading:0
  const routeParts=(value,w,size)=>{
    // Hand-entered line breaks are authoritative. Only short destinations in an
    // arrow route stay together; a long phrase remains ordinary wrapping text.
    if(!value.includes('→')||/[\r\n]/.test(value))return null
    return value.split(/(→)/).flatMap(part=>{
      const word=part.trim();if(!word||word==='→'||U.len(word)*size*1.06>w*.9)return[{text:part}]
      const at=part.indexOf(word);return[{text:part.slice(0,at)},{text:word,unit:true},{text:part.slice(at+word.length)}].filter(x=>x.text)
    })
  }
  const segmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh-TW',{granularity:'word'}):null
  const titleParts=(value,w,size)=>segmenter?[...segmenter.segment(value)].map(part=>({text:part.segment,unit:part.isWordLike&&U.len(part.segment)*size*1.06<=w*.9})):null
  const partsLines=(parts,w,size)=>{
    let total=1,used=0
    for(const part of parts)for(const chunk of part.unit?[part.text]:[...part.text]){
      if(chunk==='\n'){total++;used=0;continue}if(chunk==='\r')continue
      const width=U.len(chunk)*size*1.06;if(used&&used+width>w){total++;used=0}used+=width
    }
    return total
  }
  const T=(f,x,y,w,size,leading=1.4,extra='')=>{
    if(!f.value)return ''
    let markup=c.ed(f.key,f.def)
    const parts=f.words||f.route
    if(parts){const body=parts.map(part=>part.unit?`<span class="${f.words?'scp-word':'scp-destination'}">${U.esc(part.text)}</span>`:U.esc(part.text)).join('');markup=markup.replace('>'+U.esc(f.value)+'</span>',()=> '>'+body+'</span>')}
    return `<div class="ab scp-text" style="left:${x}px;top:${y}px;width:${w}px;font-size:${size}px;line-height:${leading};white-space:pre-wrap;overflow-wrap:anywhere;${extra}">${markup}</div>`
  }
  const line=(x,y,w,color='var(--line)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`
  const agency=field('agency',meta.agency),dates=field('dates',meta.dates),count=field('count',String(n).padStart(2,'0')),title=field('h',p.title||meta.title),sub=field('sub',meta.sub)
  const headerTop=Math.max(140,52+Math.max(height(agency,900,28,1.4),height(dates,640,28,1.4))+40)
  const countSize=U.fit(count.value,240,160,56),titleSize=U.fit(title.value,1800,72,48)
  const headerHeight=Math.max(height(count,240,countSize,1),height(title,900,titleSize,1.2),height(sub,380,28,1.45))
  const hasPhoto=it=>typeof it.img==='string'&&it.img.trim()&&!/^(undefined|null)$/i.test(it.img.trim())
  const textSpread=n>=5&&n<=6&&!c.items.some(hasPhoto),itemSize=textSpread?44:36
  const gridTop=Math.max(350,headerTop+headerHeight+48),cols=n>6?4:textSpread?3:n,rows=Math.ceil(n/cols),gap=24,rowGap=48,cw=(1680-gap*(cols-1))/cols
  const available=1000-gridTop,rowH=Math.max(1,(available-rowGap*(rows-1))/rows)
  const items=c.items.map((it,i)=>{
    const s=field('s'+i,it.sub),t=field('t'+i,it.t),b=field('b'+i,it.body)
    b.route=routeParts(b.value,cw,28);t.words=titleParts(t.value,cw,itemSize)
    const sh=height(s,cw,28,1.4),th=t.value?(t.words?partsLines(t.words,cw,itemSize)*itemSize*1.25:height(t,cw,itemSize,1.25)):0,bh=b.value?(b.route?partsLines(b.route,cw,28)*28*1.5:height(b,cw,28,1.5)):0
    const caption=sh+(sh&&th?14:0)+th+(bh&&(sh||th)?18:0)+bh
    return{it,i,s,t,b,sh,th,bh,caption}
  })
  // The most demanding caption sets the shared photo strip, keeping the text readable.
  // Sparse/absent images never reserve an empty rectangle. Dense two-row mode stays text-led.
  const photoHeight=rows===1?Math.max(120,Math.min(n<=3?360:300,rowH-Math.max(...items.map(x=>x.caption))-24)):0
  let exceeded=available<=0||rows*rowH+rowGap*(rows-1)>available+.01
  const body=items.map(x=>{
    const col=x.i%cols,row=Math.floor(x.i/cols),left=120+col*(cw+gap),top=gridTop+row*(rowH+rowGap),photo=rows===1&&hasPhoto(x.it)
    const used=x.caption+(photo?photoHeight+24:0);if(used>rowH+.01)exceeded=true
    M.box(x.i,left,top,cw,rowH,c.target(x.i))
    let y=top,html=''
    if(photo){html+=`<img class="ab hero in scp-photo" src="${U.esc(x.it.img)}" alt="" style="left:${left}px;top:${y}px;width:${cw}px;height:${photoHeight}px;object-fit:cover">`;y+=photoHeight+24}
    html+=T(x.s,left,y,cw,28,1.4,'color:var(--mute)');y+=x.sh+(x.sh&&x.th?14:0)
    html+=T(x.t,left,y,cw,itemSize,1.25,'font-family:var(--serif);font-weight:700;text-wrap:balance');y+=x.th+(x.bh&&(x.sh||x.th)?18:0)
    html+=T(x.b,left,y,cw,28,1.5)
    if(rows>1&&row===0)html+=line(left,top+rowH+rowGap/2,cw)
    return html
  }).join('')
  const grid=new URLSearchParams(location.search).has('study-grid')
  return `<style>
    .v-six-column-press .scp-destination,.v-six-column-press .scp-word{display:inline-block;max-width:100%;white-space:pre-wrap;word-break:keep-all;overflow-wrap:anywhere;vertical-align:top}
    .v-six-column-press .scp-photo.in{animation:overview-press-reveal .65s cubic-bezier(.16,1,.3,1) both}
    @keyframes overview-press-reveal{from{clip-path:inset(0 0 12% 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-six-column-press .scp-photo.in{animation:none!important}}
    @media print{.v-six-column-press .scp-photo.in{animation:none!important}}
  </style><div class="scp-capacity" data-typography="six-column-press" data-capacity="${exceeded?'exceeded':'fit'}" data-grid-top="${gridTop}" data-row-height="${rowH}"></div>`+
    (grid?`<div aria-hidden="true" style="position:absolute;left:120px;top:0;width:1680px;height:1080px;pointer-events:none;background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--acc2) 8%,transparent) 0 256px,transparent 256px 280px)"></div>`:'')+
    T(agency,120,52,900,28)+T(dates,1160,52,640,28,1.4,'text-align:right')+line(120,headerTop-24,1680)+
    T(count,120,headerTop,240,countSize,1,'color:var(--acc2);font-weight:700')+
    T(title,440,headerTop,900,titleSize,1.2,'font-family:var(--serif);font-weight:700;text-wrap:balance')+
    T(sub,1420,headerTop+8,380,28,1.45)+line(120,gridTop-28,1680,'var(--acc2)')+body
}}) }

/* variants/overview/stage.js */
// overview／stage：上半一幕滿版主照片＋大標題，一排直幅行程卡從照片下緣「浮出來」壓在照片與紙的交界上，字壓在卡片底部漸層裡
{ const U = M.util
M.add('overview', 'stage', { name: '一幕開場＋浮出行程卡', range: [2, 8], html: c => {
    const n = c.n, gap = n > 6 ? 18 : 26, w = Math.min(420, (1680 - gap * (n - 1)) / n), X0 = 960 - (w * n + gap * (n - 1)) / 2
    const Y = 470, H = 450, tf = w > 300 ? 34 : w > 220 ? 28 : 24
    const cards = c.items.map((it, i) => {
      const x = X0 + i * (w + gap), t = c.tx('it' + i, it.t), fs = Math.max(18, Math.min(tf, Math.floor((w - 40) * 2 / Math.max(1, U.len(t)) / 1.08)))
      M.box(i, x, Y, w, H, c.target(i), it.img)
      return `<div class="ab in" style="left:${x}px;top:${Y}px;width:${w}px;height:${H}px;border-radius:16px;overflow:hidden;background:var(--acc);box-shadow:0 34px 60px -26px rgba(0,0,0,.55);--i:${i + 3}">
          ${it.img ? `<img src="${it.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` : ''}
          <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(8,12,14,.82))"></div>
          <div style="position:absolute;left:20px;right:20px;bottom:22px;color:#fff">
            <div style="font:700 ${w > 220 ? 18 : 16}px var(--sans);letter-spacing:.16em;opacity:.9">DAY ${i + 1}${it.sub && w > 260 ? `　${U.esc(it.sub)}` : ''}</div>
            <div class="serif" style="font-size:${fs}px;line-height:1.3;margin-top:8px;text-wrap:balance">${c.ed('it' + i, it.t)}</div></div></div>
        ${it.body && w > 230 ? `<div class="ab in" style="left:${x + 4}px;top:${Y + H + 18}px;width:${w - 8}px;font-size:17px;line-height:1.5;color:var(--mute);--i:${i + 3}">${U.esc(it.body.replace(/\s*→\s*/g, '・'))}</div>` : ''}`
    }).join('')
    return `<img class="ab" src="${c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:640px;object-fit:cover">
      <div class="ab" style="left:0;top:0;width:1920px;height:640px;background:linear-gradient(90deg,rgba(8,12,14,.72),rgba(8,12,14,.25) 60%,rgba(8,12,14,.1)),linear-gradient(0deg,rgba(8,12,14,.35),rgba(8,12,14,0) 40%)"></div>
      <div class="ab in" style="left:120px;top:110px;color:#fff;--i:0">
        <div class="kick" style="color:#fff;opacity:.85">${c.ed('k', '行程總覽')}</div>
        <div class="serif" style="font-size:76px;line-height:1.15;margin-top:14px">${c.ed('h', n + ' 天，一天一個主題')}</div>
        <div style="font-size:22px;letter-spacing:.2em;margin-top:18px;opacity:.85">${c.ed('d', c.meta.dates || '')}</div></div>${cards}` } }) }

/* variants/presentation/_presenter.js */
/* 母片放映與講者模式
   Bundled locally: no runtime dependency on a retired deck or DECK/BR/KIT globals. */
(() => {
  const A = M.presentation
  if (!A || A.preview) return
  const esc = M.util.esc
  let pop = null, overview = null
  const style = document.createElement('style')
  style.textContent = `#masters-overview{position:fixed;inset:0;z-index:9999;background:#1d2124;color:#fbfaf7;overflow:auto;padding:24px;font:16px/1.5 var(--sans)}
  #masters-overview header{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}#masters-overview h2{font:700 24px var(--serif);margin:0}
  #masters-overview .thumbnails{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:20px}
  #masters-overview button{font:inherit;cursor:pointer;color:inherit;background:#303638;border:1px solid #75817e;padding:10px}
  #masters-overview .thumbnails button{text-align:left;padding:0}#masters-overview button[aria-current=true]{outline:3px solid #c9921c}
  #masters-overview img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}#masters-overview .caption{display:block;padding:12px}
  #masters-overview button:focus-visible{outline:3px solid #fff}.masters-toast{position:fixed;bottom:24px;left:20px;right:20px;background:#1d2124;color:white;padding:16px;z-index:10001;font:16px/1.6 var(--sans)}`
  document.head.append(style)
  const toast = text => { const el = document.createElement('div'); el.className = 'masters-toast'; el.role = 'status'; el.textContent = text; document.body.append(el); setTimeout(() => el.remove(), 6000) }
  function closeOverview() { const focus = overview?.returnFocus; overview?.remove(); overview = null; focus?.focus() }
  function openOverview() {
    closeOverview()
    overview = document.createElement('section'); overview.id = 'masters-overview'; overview.role = 'dialog'; overview.ariaModal = 'true'; overview.ariaLabel = '簡報總覽'; overview.returnFocus = document.activeElement
    overview.innerHTML = `<header><h2>簡報總覽 · ${A.visible.length} 頁</h2><button data-close>關閉 Esc</button></header><div class="thumbnails">${A.visible.map(i => { const p = A.page(i); return `<button data-page="${i}" aria-current="${i === A.current}">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : ''}<span class="caption">${i+1} · ${esc(p.title)}</span></button>` }).join('')}</div>`
    overview.onclick = e => { const b = e.target.closest('[data-page]'); if (b) { const n = +b.dataset.page; closeOverview(); A.go(n) } else if (e.target.closest('[data-close]')) closeOverview() }
    document.body.append(overview); overview.querySelector('[aria-current=true]')?.focus()
  }
  // Runs in the separate speaker window. Preview iframes receive the live editor snapshot.
  function speakerRuntime(base) {
    const A = opener.M.presentation, $ = id => document.getElementById(id)
    let start = Date.now(), off, disconnected = false
    const frames = [$('current-frame'), $('next-frame')]
    function preview(f, i) { const state = A.snapshot(i); if (state) f.contentWindow.postMessage(state, new URL(base).protocol === 'file:' ? '*' : new URL(base).origin) }
    function fit() { frames.forEach(f => { f.style.transform = 'scale(' + f.parentElement.clientWidth / 1920 + ')' }) }
    function update() {
      if (disconnected) return
      const i = A.current, next = A.adjacent(i,1), p = A.page(i), n = next < 0 ? null : A.page(next)
      $('position').textContent = `${A.visible.indexOf(i)+1} / ${A.visible.length} · ${p.title}`
      $('next-title').textContent = n ? n.title : '最後一頁'
      frames[1].hidden = !n
      $('notes').replaceChildren()
      if (p.notes.length) { const ul = document.createElement('ul'); p.notes.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.append(li) }); $('notes').append(ul) }
      else $('notes').textContent = '這頁沒有講稿要點'
      $('previous').disabled = A.adjacent(i,-1) < 0; $('next').disabled = next < 0
      preview(frames[0], i); if (n) preview(frames[1], next)
      fit()
    }
    frames.forEach((f, i) => { f.onload = () => { preview(f, i ? A.adjacent(A.current,1) : A.current); fit() }; f.src = base })
    $('previous').onclick = () => A.step(-1); $('next').onclick = () => A.step(1)
    $('reset-timer').onclick = () => { start = Date.now(); tick() }
    function tick() { const sec = Math.floor((Date.now()-start)/1000); $('timer').textContent = [Math.floor(sec/3600), Math.floor(sec%3600/60), sec%60].map(n => String(n).padStart(2,'0')).join(':') }
    const clock = setInterval(() => {
      tick()
      if (!opener || opener.closed) {
        disconnected = true; clearInterval(clock); off?.(); frames.forEach(f => { f.hidden = true }); $('connection').textContent = '簡報視窗已關閉'; $('previous').disabled = $('next').disabled = true
      }
    }, 250)
    addEventListener('keydown', e => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input,textarea,[contenteditable=true]')) return
      if (['ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); A.step(1) }
      if (['ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); A.step(-1) }
      if (e.key.toLowerCase() === 'r') { start = Date.now(); tick() }
    })
    addEventListener('resize', fit)
    off = A.subscribe(update)
    addEventListener('pagehide', () => { clearInterval(clock); off() }, {once:true})
    window.refreshPresenter = update
    update()
  }
  function openPresenter() {
    if (pop && !pop.closed) { A.present(true); pop.focus(); return }
    pop = window.open('', '', 'width=1280,height=850')
    if (!pop) { toast('請允許本頁開啟彈出視窗，再按 S 開啟講者視窗'); return }
    closeOverview(); A.present(true)
    const url = new URL(location.href); url.search = '?preview=1&static=1&present=1'; url.hash = ''
    const css = [...document.querySelectorAll('link[rel=stylesheet]')].map(l => `<link rel="stylesheet" href="${esc(l.href)}">`).join('')
    pop.document.write(`<!doctype html><html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>簡報講者視窗</title>${css}<style>
      *{box-sizing:border-box}body{margin:0;background:#1d2124;color:#fbfaf7;font:16px/1.6 "Noto Sans TC",sans-serif;padding:24px}header{display:flex;justify-content:space-between;align-items:center;gap:20px;border-bottom:1px solid #66746f;padding-bottom:16px;margin-bottom:20px}h1{font:700 24px "Noto Serif TC",serif;margin:0}h2{font-size:16px;color:#c3ccc6;font-weight:400;margin:0 0 10px}.layout{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:28px}.frame{aspect-ratio:16/9;position:relative;overflow:hidden;background:#111}iframe{border:0;position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;pointer-events:none}#notes{font-size:22px;overflow-wrap:anywhere}#notes ul{padding-left:1.2em;margin-top:0}#notes li{margin-bottom:12px}.script{margin-top:24px;border-top:1px solid #66746f;padding-top:16px}.controls{border-top:1px solid #66746f;padding-top:20px;margin-top:24px}#timer{font:48px/1.3 monospace;font-variant-numeric:tabular-nums}button{font:inherit;background:#354640;color:#fff;border:1px solid #83918a;padding:10px 14px;cursor:pointer}button:disabled{opacity:.4;cursor:default}.buttons{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}#next-title{margin-top:10px}#connection{color:#c3ccc6}@media(max-width:700px){body{padding:16px}header{display:block}.layout{grid-template-columns:1fr;gap:20px}#notes{font-size:20px}#timer{font-size:40px}}
      </style></head><body><header><h1>講者視窗</h1><div id="connection">觀眾只看簡報 · ← → 翻頁 · R 計時歸零</div></header><main class="layout"><section><h2>目前頁 <span id="position"></span></h2><div class="frame"><iframe id="current-frame" title="目前頁預覽" tabindex="-1"></iframe></div><section class="script"><h2>講稿要點</h2><div id="notes"></div></section></section><aside><h2>下一頁</h2><div class="frame"><iframe id="next-frame" title="下一頁預覽" tabindex="-1"></iframe></div><div id="next-title"></div><div class="controls"><h2>演講時間</h2><output id="timer">00:00:00</output><div class="buttons"><button id="previous">上一頁 ←</button><button id="next">下一頁 →</button><button id="reset-timer">計時歸零 R</button></div></div></aside></main><script>(${speakerRuntime.toString()})(${JSON.stringify(url.href).replace(/</g,'\\u003c')})<\/script></body></html>`)
    pop.document.close()
  }
  document.getElementById('speakerTog')?.addEventListener('click', openPresenter)
  document.getElementById('overviewTog')?.addEventListener('click', openOverview)
  addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.target.isContentEditable || e.target.closest('input,textarea,select,video,audio')) return
    const k = e.key.toLowerCase()
    if (overview) {
      e.stopImmediatePropagation()
      if (k === 'escape' || k === 'o') { e.preventDefault(); closeOverview() }
      if (k === 'tab') { const buttons = [...overview.querySelectorAll('button')], first = buttons[0], last = buttons.at(-1); if(e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() } else if(!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() } }
      return
    }
    if (k === 's') { e.preventDefault(); e.stopImmediatePropagation(); openPresenter() }
    if (k === 'o') { e.preventDefault(); e.stopImmediatePropagation(); openOverview() }
    if (k === 'escape' && document.body.classList.contains('present')) { e.preventDefault(); A.present(false) }
  }, true)
  addEventListener('pagehide', () => { if (pop && !pop.closed) pop.close() })
})()

/* variants/proposal/compare.js */
// 同頁對照方案與尚未確認的條件；不帶入歷史價格或推算金額
{ const U = M.util
  const short = s => String(s ?? '').replace(/[，。,.；;]+$/u, '')
  const money = v => v?.status === 'confirmed' && typeof v.amount === 'number' && Number.isFinite(v.amount) && v.amount >= 0 && v.amount <= 1e12 && Math.abs(v.amount * 100 - Math.round(v.amount * 100)) < .001 && /^[A-Z]{3}$/.test(v.currency || '') && ['預算','報價'].includes(v.kind) && typeof v.unit === 'string' && v.unit.trim()
  const people = v => v?.status === 'confirmed' && Number.isSafeInteger(v.value) && v.value > 0 && v.value <= 100000
  const amount = v => `${v.currency} ${new Intl.NumberFormat('zh-TW', {maximumFractionDigits:2}).format(v.amount)}`
  M.add('proposal', 'compare', {name:'方案與條件對照', range:[1,2], order:0, html:c => {
    const w = (1680 - 300) / c.n, inner = w - 80
    const text = (key,value,base,width=inner,lines=1) => `<span style="display:block;line-height:1.25;font-size:${U.fit(c.tx(key,short(value)),width*lines,base,20)}px">${c.ed(key,short(value))}</span>`
    const val = (item,i,field,large=false) => {
      const v=item[field], ok=money(v), fallback='待報價', key=`${i}.${field}`
      return `<div class="pc-value ${ok?'':'pc-pending'}">${text(key,ok?amount(v):fallback,large?70:40)}${ok?`<div class="pc-unit">${text(key+'.unit',`${v.kind} · 每${v.unit}`,24)}</div>`:''}</div>`
    }
    const row = (label,key,fn,cls='') => `<div class="pc-row ${cls}"><div class="pc-label">${text(key,label,28,272,2)}</div>${c.items.map((item,i)=>`<div class="pc-cell">${fn(item,i)}</div>`).join('')}</div>`
    return `<style>
    .pc{position:absolute;inset:0;background:var(--paper);color:var(--ink)}
    .pc-texture{position:absolute;inset:0;pointer-events:none}
    .pc-top{position:absolute;left:120px;right:120px;top:64px;padding-bottom:12px;display:flex;align-items:flex-end;gap:100px}
    .pc-top h2{font:700 70px/1.2 var(--serif);margin:12px 0 0;max-width:980px}
    .pc-kick{font-size:22px;letter-spacing:.18em;color:var(--acc)}
    .pc-top>div:first-child{flex:1;min-width:0}
    .pc-note{flex:0 0 600px;text-wrap:balance;font-size:26px;line-height:1.6;max-width:600px;margin-left:auto}
    .pc-table{position:absolute;left:120px;right:120px;top:284px}
    .pc-row{display:grid;grid-template-columns:300px repeat(${c.n},minmax(0,1fr));align-items:center}
    .pc-label{line-height:1.5;color:var(--mute)}
    .pc-cell{padding:0 40px;min-width:0;overflow-wrap:anywhere}
    .pc-cell+.pc-cell{border-left:1px solid var(--line)}
    .pc-head{height:210px;border-top:2px solid var(--ink);border-bottom:1px solid var(--line)}
    .pc-name{font:700 48px/1.25 var(--serif)}
    .pc-sub{font-size:24px;line-height:1.45;color:var(--mute);margin-top:12px}
    .pc-price{height:176px}
    .pc-value{font-family:var(--serif);font-weight:700;line-height:1.2;color:var(--acc);font-variant-numeric:tabular-nums}
    .pc-unit{font:400 24px/1.4 var(--sans);color:var(--mute);margin-top:18px}
    .pc-bottom{position:absolute;left:0;right:0;top:670px;bottom:0;background:var(--acc);color:var(--paper);padding:0 120px}
    .pc-bottom .pc-row{height:142px;border-bottom:1px solid #ffffff40}
    .pc-bottom .pc-label,.pc-bottom .pc-value{color:var(--paper)}
    .pc-bottom .pc-cell+.pc-cell{border-left-color:#ffffff40}
    .pc-bottom .pc-unit{color:var(--paper);opacity:.8;margin-top:10px}
    .pc-pending{font-weight:500}
    .pc-foot{display:flex;justify-content:space-between;align-items:center;height:105px;font-size:20px;letter-spacing:.08em}
    </style>
    <div class="pc">
      <svg class="pc-texture" aria-hidden="true" width="1920" height="1080"><defs><pattern id="proposal-compare-paper" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".65" fill="currentColor" opacity=".04"/></pattern></defs><rect width="1920" height="1080" fill="url(#proposal-compare-paper)"/></svg>
      <header class="pc-top in"><div><div class="pc-kick">${text('eyebrow','TRAVEL OPTIONS',22,1000)}</div><h2>${text('title',c.p.title||'方案比較',70,980,2)}</h2></div>${c.p.note?`<div class="pc-note">${text('note',c.p.note,26,600,4)}</div>`:''}</header>
      <div class="pc-table in" style="--i:2">
        ${row('旅程方案','optionsLabel',(item,i)=>`<div class="pc-name">${text(i+'.t',item.t||'方案名稱待確認',48,inner,2)}</div>${item.sub?`<div class="pc-sub">${text(i+'.sub',item.sub,24,inner,3)}</div>`:''}`,'pc-head')}
        ${row('團費','priceLabel',(item,i)=>val(item,i,'price',true),'pc-price')}
      </div>
      <div class="pc-bottom in" style="--i:4">
        ${row('單人房差','singleLabel',(item,i)=>val(item,i,'singleSupplement'))}
        ${row('最低成團人數','minLabel',(item,i)=>`<div class="pc-value ${people(item.minGroupSize)?'':'pc-pending'}">${text(i+'.minGroupSize',people(item.minGroupSize)?`${item.minGroupSize.value} 人`:'待確認',40)}</div>`)}
        <footer class="pc-foot"><span>${c.ed('agency',short(c.meta.agency))}</span><span>${c.ed('dates',short(c.meta.dates))}</span></footer>
      </div>
    </div>`
  }})
}

/* variants/qa/cinema-cards.js */
{ const U = M.util
const clean = s => String(s || '').trim().replace(/[，。,．.]+$/u, '')
M.add('qa', 'cinema-cards', { name: '映景大字問答卡', range: [1, 3], html: c => {
  const n = c.n, gap = 32, w = n === 1 ? 1000 : (1680 - gap * (n - 1)) / n
  const img = c.p.img || c.meta.pool?.[0] || c.meta.hero
  const title = c.p.title || '出發前最常被問到的事', fs = n === 1 ? 39 : 31
  return `<style>
    .v-cinema-cards .cc-cut{animation-name:qa-cinema-cards-cut;animation-duration:.6s}
    @keyframes qa-cinema-cards-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-cinema-cards .cc-cut{animation:none}}
  </style>
  ${img ? `<img class="hero" src="${U.esc(img)}" alt="" style="position:absolute;inset:0;width:1920px;height:1080px;object-fit:cover">` : ''}
  <div class="ab" style="inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--ink) 88%,transparent),color-mix(in srgb,var(--ink) 12%,transparent) 65%,color-mix(in srgb,var(--ink) 65%,transparent));pointer-events:none"></div>
  <header class="ab in" style="left:120px;top:64px;width:1680px;color:var(--paper);--i:0">
    <div style="font-size:25px;letter-spacing:.12em">${c.ed('k', '常見問題')}</div>
    <div class="serif" style="font-size:${U.fit(c.tx('h', title), 1680, 76, 49)}px;line-height:1.25;margin-top:16px">${c.ed('h', clean(title))}</div>
  </header>
  ${c.items.map((it, i) => `<article class="ab in cc-cut" style="left:${120 + i * (w + gap)}px;top:${280 + i * 24}px;width:${w}px;min-height:${n === 1 ? 640 : n === 2 ? 600 : 520}px;background:var(--paper);color:var(--ink);border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);box-shadow:0 16px 40px #0003;padding:32px;display:flex;flex-direction:column;--i:${i + 1}">
    <div style="display:flex;justify-content:space-between;align-items:center;color:var(--acc)">
      <div class="serif" style="font-size:76px;line-height:1">${c.ed('cc-no' + i, U.no(i))}</div>
      <div style="font-size:20px;letter-spacing:.12em">${c.ed('cc-q' + i, '問題')}</div>
    </div>
    <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), (w - 64) * 2, n === 1 ? 61 : 49, 39)}px;line-height:1.35;margin-top:24px;text-wrap:balance">${c.ed('it' + i, clean(it.t))}</div>
    ${it.body ? `<div style="margin-top:48px;padding-top:24px;border-top:2px solid var(--acc)">
      <div style="font-size:20px;color:var(--acc);letter-spacing:.12em;margin-bottom:16px">${c.ed('cc-a' + i, '回答')}</div>
      <div style="font-size:${fs}px;line-height:1.6;overflow-wrap:anywhere">${c.ed('b' + i, clean(it.body), 'style="display:block"')}</div>
    </div>` : ''}
  </article>`).join('')}
  <footer class="ab" style="left:120px;top:1016px;width:1680px;display:flex;justify-content:space-between;color:var(--paper);font-size:20px">
    <div>${c.meta.title ? c.ed('cc-trip', clean(c.meta.title)) : ''}</div>
    <div>${c.meta.dates ? c.ed('cc-dates', clean(c.meta.dates)) : ''}</div>
  </footer>`
} }) }

/* variants/qa/grid.js */
// qa／grid：問答格——大大的 Q／A 字母當記號，1 題獨佔、2～3 題並排、4 題排 2×2；格與格之間只用細線分，不加框。
// 學自東京官方手冊的問答 2×2 與字級六階（問題 1.4 倍、答案 1.0），層次靠字級與留白，不靠框線。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('qa', 'grid', { name: '問答格', range: [1, 4], html: c => {
  const n = c.n, cols = n === 4 ? 2 : n, rows = n === 4 ? 2 : 1, T = 270, H = 1010 - T, G = 80
  const w = n === 1 ? 1320 : (1680 - G * (cols - 1)) / cols, h = (H - 50 * (rows - 1)) / rows, QX = fs => Math.round(fs * 2.1)
  const need = fs => Math.max(...c.items.map((it, i) => lines(c.tx('it' + i, it.t), w - QX(fs), fs * 1.4) * fs * 1.4 * 1.35 + 24 + (it.body ? lines(c.tx('b' + i, it.body), w - QX(fs), fs) * fs * 1.6 : 0)))
  let fs = 22; for (const f of [44, 40, 36, 34, 32, 30, 28, 26, 24, 22]) if (f <= [44, 34, 30, 30][n - 1] && need(f) <= h - 20) { fs = f; break }
  const qx = QX(fs), top = rows === 1 ? T + Math.max(0, (H - need(fs)) / 2.6) : T
  return `<div class="ab in" style="left:120px;top:84px;--i:1"><div class="kick">${c.ed('k', '常見問題')}</div><div class="serif" style="font-size:58px;margin-top:8px">${c.ed('h', '出發前最常被問到的事')}</div></div>` +
    c.items.map((it, i) => { const x = (n === 1 ? 300 : 120) + (i % cols) * (w + G), y = top + Math.floor(i / cols) * (h + 50)
      return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;--i:${i + 2}">
        <div class="ab" style="left:0;top:${-fs * .35}px;font:900 ${Math.round(fs * 2.4)}px/1 var(--serif);color:var(--acc)">Q</div>
        <div class="serif" style="margin-left:${qx}px;font-size:${Math.round(fs * 1.4)}px;line-height:1.35">${c.ed('it' + i, it.t)}</div>
        ${it.body ? `<div style="display:flex;margin-top:24px"><div style="flex:none;width:${qx}px;font:700 ${Math.round(fs * 1.4)}px/1.15 var(--serif);color:var(--acc2)">A</div><div style="flex:1;min-width:0;font-size:${fs}px;line-height:1.6;color:#2c3236">${c.ed('b' + i, it.body, 'style="display:block"')}</div></div>` : ''}</div>` }).join('') +
    Array.from({ length: cols - 1 }, (_, k) => `<div class="ab" style="left:${120 + (k + 1) * (w + G) - G / 2}px;top:${top - 10}px;width:1px;height:${rows === 2 ? H : need(fs) + 20}px;background:#cfd3d0"></div>`).join('') +
    (rows === 2 ? `<div class="ab" style="left:120px;top:${T + h + 24}px;width:1680px;height:1px;background:#cfd3d0"></div>` : '') } }) }

/* variants/qa/pairs.js */
// qa／pairs：常見問題，兩欄問答（1～8 題）
{ const U = M.util
M.add('qa', 'pairs', { name: '兩欄問答', range: [1, 8], html: c => {
  const n = c.n, cols = n > 2 ? 2 : 1, rows = Math.ceil(n / cols), H = Math.min(200, (700 - 20 * (rows - 1)) / rows), w = cols === 2 ? 790 : 1680
  return `<div class="ab in" style="left:120px;top:90px;--i:1"><div class="kick">${c.ed('k', '常見問題')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', '出發前最常被問到的事')}</div></div>` +
    c.items.map((it, i) => {
      const inner = w, body = c.tx('body' + i, it.body || ''), title = c.tx('it' + i, it.t)
      const lineCount = (text, size) => String(text).split('\n').reduce((sum, line) => sum + Math.max(1, Math.ceil(U.len(line) * size * 1.08 / inner)), 0)
      let bodySize = 16, titleSize = 20
      for (const size of [30, 28, 26, 24, 21, 18, 16]) {
        const heading = Math.min(38, Math.round(size * 1.3))
        if (lineCount(title, heading) * heading * 1.3 + 6 + lineCount(body, size) * size * 1.55 <= H - 36) { bodySize = size; titleSize = heading; break }
      }
      return `<div class="ab in" style="left:${120 + (i % cols) * (w + 100)}px;top:${300 + Math.floor(i / cols) * (H + 20)}px;width:${w}px;height:${H}px;border-top:1px solid #1d212426;padding:22px 0;--i:${i + 2}">
      <div class="serif" style="font-size:${titleSize}px;line-height:1.3;overflow-wrap:anywhere">${c.ed('it' + i, it.t)}</div><div style="font-size:${bodySize}px;overflow-wrap:anywhere;line-height:1.55;color:#4b5257;margin-top:6px">${c.ed('body' + i, it.body || '')}</div></div>` }).join('') } }) }

/* variants/qa/panorama-dialogue.js */
{ const U = M.util
const clean = s => String(s || '').trim().replace(/[，。,．.]+$/u, '')
M.add('qa', 'panorama-dialogue', { name: '全景問答欄', range: [2, 4], html: c => {
  const w = 1680 / c.n, inner = w - 64, fs = c.n === 2 ? 39 : 31
  const img = c.p.img || c.meta.pool?.[0], title = c.p.title || '出發前最常被問到的事'
  return `<style>
    .v-panorama-dialogue .pd-entry{animation-name:qa-panorama-cut;animation-duration:.65s}
    @keyframes qa-panorama-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-panorama-dialogue .pd-entry{animation:none}}
  </style>
  ${img ? `<img class="hero" src="${U.esc(img)}" alt="" style="position:absolute;left:0;top:0;width:1920px;height:480px;object-fit:cover;object-position:50% 55%">` : ''}
  <div class="ab" style="inset:0 0 auto;height:480px;background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 88%,transparent),color-mix(in srgb,var(--ink) 24%,transparent))"></div>
  <header class="ab in" style="left:120px;top:72px;width:1680px;color:var(--paper);--i:0">
    <div style="font-size:25px;letter-spacing:.12em">${c.ed('k', '常見問題')}</div>
    <div class="serif" style="font-size:${U.fit(c.tx('h', title), 1680, 76, 49)}px;line-height:1.25;margin-top:24px">${c.ed('h', title)}</div>
  </header>
  <div class="ab in pd-entry" style="left:120px;top:352px;width:1680px;height:208px;background:var(--acc);--i:1">
    ${c.items.map((it, i) => `<div style="position:absolute;left:${i * w}px;top:0;width:${w}px;height:208px;padding:32px;display:flex;align-items:center;${i ? 'border-left:1px solid color-mix(in srgb,var(--paper) 35%,transparent);' : ''}">
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), inner * 2, c.n === 2 ? 49 : 39, 31)}px;line-height:1.4;color:var(--paper);text-wrap:balance">${c.ed('it' + i, clean(it.t))}</div>
    </div>`).join('')}
  </div>
  ${c.items.map((it, i) => `<div class="ab in" style="left:${120 + i * w}px;top:600px;width:${w}px;height:376px;padding:0 32px;${i ? 'border-left:1px solid var(--line);' : ''}--i:2">
    ${it.body ? `<div style="font-size:${fs}px;line-height:1.6;color:var(--ink);overflow-wrap:anywhere">${c.ed('b' + i, clean(it.body), 'style="display:block"')}</div>` : ''}
  </div>`).join('')}
  <footer class="ab" style="left:120px;top:1000px;width:1680px;padding-top:16px;border-top:1px solid var(--line);display:flex;justify-content:space-between;font-size:20px;color:var(--ink)">
    <div>${c.meta.title ? c.ed('pd-trip', clean(c.meta.title)) : ''}</div>
    <div>${c.meta.dates ? c.ed('pd-dates', clean(c.meta.dates)) : ''}</div>
  </footer>`
} }) }

/* variants/qa/photo.js */
// qa／photo：左邊一張這團的照片壓頁標，右邊問答上下排（問題粗體 1.3 倍、答案 1.0），題與題細線分隔、整塊垂直置中。
// 學自東京官方手冊實用資訊頁的「一張照片定調＋字級分層」；題數一多改用左問右答表或詳略兩級。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('qa', 'photo', { name: '照片＋問答', range: [1, 5], html: c => {
  const n = c.n, PW = 680, X = PW + 90, W = 1800 - X, T = 80, B = 1010, img = c.p.img || c.meta.hero
  const need = fs => c.items.reduce((a, it, i) => a + lines(c.tx('it' + i, it.t), W - fs * 2, fs * 1.3) * fs * 1.3 * 1.35 + (it.body ? lines(c.tx('b' + i, it.body), W - fs * 2, fs) * fs * 1.55 + 10 : 0), 0) + (n - 1) * 52
  let fs = 22; for (const f of [36, 34, 32, 30, 28, 26, 24, 22]) if (need(f) <= B - T) { fs = f; break }
  const pad = Math.max(0, (B - T - need(fs)) / 2), H0 = '出發前最常被問到的事'
  return `<img class="hero" src="${img}" alt="" style="position:absolute;left:0;top:0;width:${PW}px;height:1080px;object-fit:cover">
    <div class="ab" style="left:0;top:0;width:${PW}px;height:1080px;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.72))"></div>
    <div class="ab in" style="left:64px;bottom:90px;width:${PW - 110}px;color:#fff;--i:1"><div class="kick" style="color:#fff">${c.ed('k', '常見問題')}</div><div class="serif" style="font-size:${U.fit(c.tx('h', H0), PW - 110, 56, 40)}px;line-height:1.25;margin-top:12px">${c.ed('h', H0)}</div></div>
    <div class="ab" style="left:${X}px;top:${T + pad}px;width:${W}px">` +
    c.items.map((it, i) => `<div class="in" style="display:flex;gap:${fs * .6}px;${i ? 'margin-top:26px;padding-top:26px;border-top:1px solid #d3d7d4;' : ''}--i:${i + 2}">
      <span style="flex:none;width:${fs * 1.4}px;font:900 ${Math.round(fs * 1.3)}px/1.35 var(--serif);color:var(--acc)">Q</span><div style="flex:1;min-width:0">
      <div class="serif" style="font-size:${Math.round(fs * 1.3)}px;line-height:1.35">${c.ed('it' + i, it.t)}</div>
      ${it.body ? `<div style="font-size:${fs}px;line-height:1.55;color:#2c3236;margin-top:10px">${c.ed('b' + i, it.body, 'style="display:block"')}</div>` : ''}</div></div>`).join('') + '</div>' } }) }

/* variants/qa/rows.js */
// qa／rows：左問右答表——問題放左欄（號碼＋粗體），答案放右欄，一題一列、列間細線；題數多時列自動變矮、字級最小 22px；1～3 題太空，交給問答格。
// 學自東京官方手冊第 14 招「左標籤右內容」（左欄放短的、右欄放長的，一列一事）。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('qa', 'rows', { name: '左問右答表', range: [4, 7], html: c => {
  const n = c.n, T = 262, H = 1012 - T, QW = 600, AX = QW + 60, AW = 1680 - AX
  const rh = fs => c.items.map((it, i) => Math.max(lines(c.tx('it' + i, it.t), QW - fs * 2.2, fs * 1.25) * fs * 1.25 * 1.4, it.body ? lines(c.tx('b' + i, it.body), AW - 20, fs) * fs * 1.55 : 0) + 34)
  let fs = 22, R = rh(22); for (const f of [32, 30, 28, 26, 24, 22]) { const r = rh(f); if (r.reduce((a, b) => a + b, 0) <= H) { fs = f; R = r; break } }
  const add = Math.max(0, (H - R.reduce((a, b) => a + b, 0)) / n)
  let y = T
  return `<div class="ab in" style="left:120px;top:84px;--i:1"><div class="kick">${c.ed('k', '常見問題')}</div><div class="serif" style="font-size:58px;margin-top:8px">${c.ed('h', '出發前最常被問到的事')}</div></div>
    <div class="ab" style="left:120px;top:${T - 2}px;width:1680px;height:3px;background:var(--ink)"></div>
    <div class="ab" style="left:120px;top:${T - 44}px;width:${QW}px;font:600 20px var(--sans);letter-spacing:.2em;color:var(--mute)">${c.ed('qh', '問題')}</div>
    <div class="ab" style="left:${120 + AX}px;top:${T - 44}px;font:600 20px var(--sans);letter-spacing:.2em;color:var(--mute)">${c.ed('ah', '回答')}</div>` +
    c.items.map((it, i) => { const h = R[i] + add, top = y; y += h
      return `<div class="ab in" style="left:120px;top:${top}px;width:1680px;height:${h}px;border-bottom:1px solid #cfd3d0;${i % 2 ? '' : 'background:color-mix(in srgb,var(--acc) 5%,transparent);'}--i:${i + 2}">
        <div class="ab" style="left:0;top:${17 + add / 2}px;width:${QW}px;display:flex;gap:${fs * .5}px"><span style="flex:none;width:${fs * 1.7}px;font:700 ${Math.round(fs * 1.25)}px/1.4 var(--serif);color:var(--acc);padding-left:14px">${U.no(i)}</span><div class="serif" style="flex:1;min-width:0;font-size:${Math.round(fs * 1.25)}px;line-height:1.4">${c.ed('it' + i, it.t)}</div></div>
        ${it.body ? `<div class="ab" style="left:${AX}px;top:${17 + add / 2}px;width:${AW - 20}px;font-size:${fs}px;line-height:1.55;color:#2c3236">${c.ed('b' + i, it.body, 'style="display:block"')}</div>` : ''}</div>` }).join('') } }) }

/* variants/qa/tiers.js */
// qa／tiers：詳略兩級——最常被問的前兩題放大並排，其餘收進下方淡色框、兩欄小問答（問題粗體一行、答案接在下面）。
// 學自東京官方手冊第 7 招「詳略兩級」：項目多於放得下的完整卡時，其餘降一級放淡色框、加一句導語；字不刪、只換排法。
{ const U = M.util
const lines = (s, w, fs) => Math.max(1, Math.ceil(U.len(s) * fs * 1.04 / w))
M.add('qa', 'tiers', { name: '詳略兩級', range: [5, 10], html: c => {
  const n = c.n, T = 262, H = 1012 - T, G = 60, dw = (1680 - G) / 2, top2 = c.items.slice(0, 2), rest = c.items.slice(2)
  const half = Math.ceil(rest.length / 2), cw = (1680 - 80 - 60) / 2, cols = [rest.slice(0, half), rest.slice(half)]
  const dh = fs => Math.max(...top2.map((it, i) => lines(c.tx('it' + i, it.t), dw - 70, fs * 1.4) * fs * 1.4 * 1.35 + 16 + (it.body ? lines(c.tx('b' + i, it.body), dw - 70, fs) * fs * 1.55 : 0))) + 20
  const bh = fb => 40 + fb * 1.5 + Math.max(...cols.map((col, k) => col.reduce((a, it, q) => a + lines(c.tx('it' + (q + 2 + k * half), it.t), cw - 50, fb * 1.15) * fb * 1.15 * 1.35 + (it.body ? lines(c.tx('b' + (q + 2 + k * half), it.body), cw - 50, fb) * fb * 1.5 + 4 : 0) + 20, 0)))
  let fs = 22, fb = 20
  out: for (const a of [30, 28, 26, 24, 22]) for (const b of [24, 22, 20]) if (b < a && dh(a) + 36 + bh(b) <= H) { fs = a; fb = b; break out }
  const qa = (it, i, f, w, big) => `<div style="display:flex;gap:${big ? 18 : 12}px"><span style="flex:none;width:${big ? 52 : 38}px;font:900 ${Math.round(f * (big ? 1.4 : 1.15))}px/1.35 var(--serif);color:var(--acc)">${big ? 'Q' : U.no(i)}</span><div style="flex:1;min-width:0">
      <div class="serif" style="font-size:${Math.round(f * (big ? 1.4 : 1.15))}px;line-height:1.35">${c.ed('it' + i, it.t)}</div>
      ${it.body ? `<div style="font-size:${f}px;line-height:${big ? 1.55 : 1.5};color:#2c3236;margin-top:${big ? 14 : 4}px">${c.ed('b' + i, it.body, 'style="display:block"')}</div>` : ''}</div></div>`
  return `<div class="ab in" style="left:120px;top:84px;--i:1"><div class="kick">${c.ed('k', '常見問題')}</div><div class="serif" style="font-size:58px;margin-top:8px">${c.ed('h', '出發前最常被問到的事')}</div></div>
    <div class="ab" style="left:120px;top:${T}px;width:1680px;height:${H}px;display:flex;flex-direction:column;gap:36px">
      <div style="flex:1 0 auto;display:flex;gap:${G}px;align-items:center">${top2.map((it, i) => `<div class="in" style="flex:1;min-width:0;border-left:6px solid ${i ? 'var(--acc2)' : 'var(--acc)'};padding:6px 0 6px 28px;--i:${i + 2}">${qa(it, i, fs, dw, 1)}</div>`).join('')}</div>
      <div class="in" style="flex:none;background:color-mix(in srgb,var(--acc) 8%,#fff);padding:20px 40px 24px;--i:4">
        <div style="font:600 ${fb}px var(--serif);letter-spacing:.12em;color:var(--acc);margin-bottom:6px">${c.ed('lead', '其他常見問題')}</div>
        <div style="display:flex;gap:60px">${cols.map((col, k) => `<div style="flex:1;min-width:0">${col.map((it, q) => `<div style="padding:10px 0;border-top:1px solid color-mix(in srgb,var(--acc) 22%,#fff)">${qa(it, q + 2 + k * half, fb, cw, 0)}</div>`).join('')}</div>`).join('')}</div></div></div>` } }) }

/* variants/route/_kit.js */
// 航線聚焦共用：中山國小的 Mercator 多層鏡頭；所有點以 route.json 真座標投影
{
 const U=M.util, W=1360,H=1080,cl=x=>Math.max(0,Math.min(1,x)),ease=x=>x*x*(3-2*x),mix=(a,b,t)=>a+(b-a)*t
 const modes={car:['車程','', 'var(--acc)'],boat:['船程','14 8','var(--acc2)'],walk:['步行','2 9','var(--ink)'],train:['鐵路','10 5','var(--acc2)'],flight:['航班','22 8 4 8','var(--acc3)'],unknown:['移動','6 8','var(--acc)']}
 const safe=s=>String(s??'').replace(/[，。；、,.!?！？]+$/,'')
 // 往返同一地點共用座標標記，保留每個編號與編輯鍵，不移動真實地點。
 const pinGroups=stops=>{const groups=new Map();stops.forEach((p,i)=>{const key=p.pos.join(',');if(!groups.has(key))groups.set(key,[]);groups.get(key).push({p,i})});return [...groups.values()]}
 const camera=(a,b,t)=>({x:mix(a.x,b.x,t),y:mix(a.y,b.y,t),s:a.s*Math.pow(b.s/a.s,t)})
 function html(c,variant){
  const r=c.p.route
  if(!r?.layers?.length)return `<div class="ab serif" style="left:120px;top:440px;font-size:48px">${c.ed('empty','旅遊路線')}</div>`
  const n=r.stops.length,used=[...new Set(r.segments.map(s=>s.mode))]
  return `<style>
  .rt-map{position:absolute;inset:0 auto 0 0;width:${W}px;height:${H}px;overflow:hidden;background:#ece7de}
  .rt-map img{position:absolute;max-width:none;transform-origin:0 0}.rt-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .rt-pin{position:absolute;left:0;top:0;width:36px;height:36px;border-radius:50%;background:var(--acc);color:white;border:3px solid var(--paper);display:grid;place-items:center;font-size:18px;font-weight:700}
  .rt-pin.rt-shared{width:max-content;display:flex;align-items:center;gap:6px;padding:0 9px;border-radius:18px}
  .rt-pin.rt-named{width:max-content;display:flex;gap:7px;padding:0 12px;border-radius:18px;white-space:nowrap}.rt-pin .rt-tag{display:none;font:600 20px var(--sans)}.rt-pin.rt-named .rt-tag{display:inline}
  .rt-pin.rt-crowded{width:10px;height:10px;min-width:0;padding:0;border-width:2px}.rt-pin.rt-crowded span{display:none}
  .rt-rail{position:absolute;left:1360px;top:0;width:560px;height:1080px;background:var(--paper);padding:64px 70px}
  .rt-title{font:700 46px/1.45 var(--serif);margin:38px 0 24px;overflow-wrap:anywhere}
  .rt-list{position:absolute;top:444px;left:70px;right:70px;height:422px;display:flex;flex-direction:column;justify-content:${n>10?'flex-start':'space-evenly'};overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--acc) var(--paper)}
  .rt-stop{display:flex;flex-shrink:0;min-height:40px;gap:14px;align-items:center;font-size:${n>8?20:24}px;line-height:1.45}.rt-stop em{font:600 18px var(--sans);color:var(--acc);min-width:30px}.rt-stop[hidden]{display:none}.rt-stop>div{min-width:0;overflow-wrap:anywhere}.rt-stop.active{color:var(--acc);font-weight:700}
  .rt-phase{position:absolute;left:44px;top:40px;max-width:1200px;padding:16px 24px;background:var(--paper);font:600 28px var(--serif)}
  .rt-clock{position:absolute;left:44px;top:132px;padding:14px 24px;background:var(--paper);font:700 40px var(--serif);font-variant-numeric:tabular-nums;display:none}.rt-clock small{font:500 20px var(--sans);color:var(--mute);margin-right:12px}
  .rt-credit{position:absolute;bottom:22px;left:28px;padding:8px 12px;background:var(--paper);font-size:16px}
  .rt-legend{position:absolute;left:70px;right:70px;bottom:110px;display:flex;gap:16px;flex-wrap:wrap;font-size:18px}.rt-legend div{display:flex;gap:8px;align-items:center}
  .rt-replay{position:absolute;left:70px;bottom:50px;background:transparent;border:0;border-bottom:1px solid var(--acc);padding:8px 0;color:var(--acc);font:500 20px var(--sans);cursor:pointer}
  .rt-endpoint{position:absolute;font:600 26px var(--serif);padding:10px 16px;background:var(--paper);white-space:nowrap}
  </style><div class="rt-map">
  ${r.layers.map(l=>`<img src="${U.esc(l.src)}" alt="" draggable="false">`).join('')}
  <svg class="rt-svg" viewBox="0 0 ${W} ${H}"><path class="rt-flight" fill="none" stroke="var(--acc)" stroke-width="5" pathLength="1" stroke-dasharray="1"/>
  ${r.segments.map((s,i)=>`<g class="rt-segment"><path fill="none" stroke="${modes[s.mode]?.[2]||'var(--acc)'}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${modes[s.mode]?.[1]||''}"/></g>`).join('')}
  <g class="rt-plane" fill="var(--acc)" stroke="var(--paper)" stroke-width="1.5"><path d="M24 0 L3 -6 L-6 -23 L-12 -23 L-9 -5 L-23 -8 L-28 -14 L-32 -14 L-29 0 L-32 14 L-28 14 L-23 8 L-9 5 L-12 23 L-6 23 L3 6 Z"/></g>
  <circle class="rt-cursor" r="12" fill="var(--acc2)" stroke="white" stroke-width="4"/></svg>
  ${pinGroups(r.stops).map(g=>`<div class="rt-pin${g.length>1?' rt-shared':''}" data-id="${U.esc(g[0].p.id)}">${g.map(({p,i})=>c.ed('pin'+p.id,String(i+1).padStart(2,'0'))).join(c.ed('pin-separator','·'))}<span class="rt-tag">${U.esc(safe(g[0].p.name))}</span></div>`).join('')}
  ${r.from&&r.to?`<div class="rt-endpoint rt-origin">${c.ed('origin',safe(r.from.name))}</div><div class="rt-endpoint rt-destination">${c.ed('destination',safe(r.to.name))}</div>`:''}
  ${variant==='split'?`<div class="rt-split" style="position:absolute;inset:0;pointer-events:none;overflow:hidden">${[0,1].map(side=>`<div class="rt-pane" style="position:absolute;left:0;top:${side*540}px;width:1360px;height:540px;overflow:hidden;background:var(--paper);border-bottom:4px solid var(--paper)">${r.layers.map(l=>`<img src="${U.esc(l.src)}" alt="" draggable="false">`).join('')}<div style="position:absolute;left:680px;top:270px;width:18px;height:18px;background:var(--acc);border:3px solid var(--paper);border-radius:50%"></div><div style="position:absolute;left:720px;top:280px;max-width:570px;background:var(--paper);padding:12px;font-size:28px">${r.segments.map((s,i)=>`<div data-split-leg="${i}">${c.ed('split'+side+'-'+i,safe(r.stops.find(p=>p.id===(side?s.to:s.from))?.name))}</div>`).join('')}</div></div>`).join('')}</div>`:''}
  <div class="rt-phase"><div data-phase="flight">${c.ed('flight-phase','從出發到抵達')}</div>${r.segments.map((s,i)=>`<div data-phase="${i}" hidden><div data-travel="${i}">${c.ed('phase'+i,`第 ${+s.day||s.day} 天　${safe(r.stops.find(p=>p.id===s.from)?.name)} → ${safe(r.stops.find(p=>p.id===s.to)?.name)}`)}</div><div data-arrival="${i}" hidden>${c.ed('arrival'+i,`${s.arrival==='transfer'?'轉機':s.arrival==='stopover'?'經停 · 同班機續飛':s.arrival==='stop'?'中途停留':s.mode==='flight'?'抵達':'到站'}　${safe(r.stops.find(p=>p.id===s.to)?.name)}${s.duration?'　'+safe(s.duration):''}`)}</div></div>`).join('')}<div data-phase="overview" hidden>${c.ed('overview-phase','全程航線 · 逐站展開')}</div><div data-phase="final" hidden>${c.ed('final-phase','旅途足跡')}</div></div>
  <div class="rt-clock"><small>飛行時間</small><span></span></div>
  <div class="rt-credit">${c.ed('credit','© OpenStreetMap contributors · Natural Earth')}</div></div>
  <aside class="rt-rail"><div style="font-size:20px;color:var(--acc)">${c.ed('agency',safe(c.meta.agency))}</div>
  <h2 class="rt-title">${c.ed('title',safe(c.p.title||r.title))}</h2>
  <div style="font-size:22px;line-height:1.7;border-top:1px solid var(--line);padding-top:20px">${c.ed('dates',safe(c.meta.dates))}</div>
  <div class="rt-list">${r.stops.map((p,i)=>`<div class="rt-stop" data-stop="${U.esc(p.id)}"><em>${c.ed('num'+p.id,String(i+1).padStart(2,'0'))}</em><div>${c.ed('name'+p.id,safe(p.name))}</div></div>`).join('')}</div>
  <div class="rt-legend">${used.map(m=>`<div><svg width="38" height="12"><path d="M0 6H38" stroke="${modes[m][2]}" stroke-width="3" stroke-dasharray="${modes[m][1]}"/></svg>${c.ed('mode'+m,modes[m][0])}</div>`).join('')}</div>
  <button class="rt-replay" type="button">${c.ed('replay','重播旅程')}</button></aside>`
 }
 function timeline(r,mode){
  let t=mode==='atlas'&&r.segments.length?2400:0
  const seen=new Set(),events=r.segments.map((s,i)=>{const fly=s.mode==='flight',back=!fly&&seen.has(s.to),travel=fly?({continuous:5200,cut:3000,follow:3800,split:4800,atlas:2400}[mode]||3000):back?400:1100,hold=fly?(['transfer','stopover','stop'].includes(s.arrival)?1800:mode==='continuous'&&r.segments[i+1]&&r.segments[i+1].mode!=='flight'?3000:1100):back?0:700;seen.add(s.from);seen.add(s.to),e={i,start:t,travel,hold,end:t+travel+hold};t=e.end;return e})
  return {events,total:t+1200,intro:mode==='atlas'&&r.segments.length?2400:0}
 }
 function mount(el,c,variant){
  const r=c.p.route;if(!r?.layers?.length)return ()=>{}
  const mode=typeof variant==='string'?variant:variant?'cut':'continuous'
  const $=s=>el.querySelector(s),$$=s=>[...el.querySelectorAll(s)],images=$$('.rt-map > img'),pins=$$('.rt-pin'),paths=$$('.rt-segment path'),groups=$$('.rt-segment'),byId=Object.fromEntries(r.stops.map(p=>[p.id,p]))
  const media=matchMedia('(prefers-reduced-motion: reduce)'),q=new URLSearchParams(location.search),clock=timeline(r,mode)
  let raf=0,dead=false,lastActive=null
  const fitPoints=(ps,cap=120)=>{const xs=ps.map(p=>p[0]),ys=ps.map(p=>p[1]);return {x:(Math.min(...xs)+Math.max(...xs))/2,y:(Math.min(...ys)+Math.max(...ys))/2,s:Math.min(cap,(W-400)/Math.max(.1,Math.max(...xs)-Math.min(...xs)),(H-420)/Math.max(.1,Math.max(...ys)-Math.min(...ys)))}}
  const gp=r.segments.some(g=>g.mode!=='flight')?r.stops.filter(p=>!p.air).map(p=>p.pos):[],ground=gp.length?(()=>{const g=fitPoints(gp,Math.max(120,r.final.s*.6));return {x:r.final.x,y:r.final.y,s:Math.min(g.s,r.final.s)}})():null
  const curve=(s,u)=>{const a=byId[s.from].pos,b=byId[s.to].pos,control=[(a[0]+b[0])/2,(a[1]+b[1])/2-Math.abs(b[0]-a[0])*.15];return {a,b,control,p:a.map((v,k)=>s.mode==='flight'?(1-u)**2*v+2*(1-u)*u*control[k]+u*u*b[k]:mix(v,b[k],u))}}
  function maps(nodes,cam,height=H){
   const at=p=>[(p[0]-cam.x)*cam.s+W/2,(p[1]-cam.y)*cam.s+height/2]
   nodes.forEach((im,i)=>{const [x,y,w,h]=r.layers[i].bounds,v=at([x,y]),width=w*cam.s,hgt=h*cam.s;im.style.width=width+'px';im.style.height=hgt+'px';im.style.transform=`translate(${v[0]}px,${v[1]}px)`
    const cover=v[0]<=0&&v[1]<=0&&v[0]+width>=W&&v[1]+hgt>=height
    im.style.opacity=i===0||cover&&cam.s>=(r.layers[i].scale||r.final.s)*.55?1:0
   })
   nodes.forEach((im,i)=>im.style.visibility=nodes.slice(i+1).some(n=>Number(n.style.opacity)===1)?'hidden':'visible')
  }
  function frame(t){
   const event=clock.events.find(e=>t>=e.start&&t<e.end),idx=event?.i??-1,s=event&&r.segments[idx],intro=t<clock.intro,final=!event&&!intro,u=event?ease(cl((t-event.start)/event.travel)):1,landed=event&&t>=event.start+event.travel
   let cam=r.start,phase=final?'final':intro?'overview':String(idx),geo=s&&curve(s,u)
   if(s){
    const wide=fitPoints([geo.a,geo.b,geo.control]),near={x:geo.b[0],y:geo.b[1],s:Math.min(1000,Math.max(wide.s*2.5,r.final.s))}
    if(mode==='follow')cam={x:geo.p[0],y:geo.p[1],s:wide.s*2.1}
    else if(mode==='atlas')cam=u<.6?fitPoints([geo.a,geo.p]):near
    else if(mode==='cut'||mode==='split')cam=landed?near:wide
    else if(ground&&r.segments[idx+1]&&r.segments[idx+1].mode!=='flight'){const mid={x:geo.p[0],y:geo.p[1],s:wide.s*3};cam=landed?camera({x:geo.b[0],y:geo.b[1],s:wide.s*3},ground,ease(cl((t-event.start-event.travel)/event.hold))):camera(wide,mid,u)}
    else cam=camera(wide,near,cl(u*1.4))
    if(s.mode!=='flight'){const pf=mode!=='continuous'&&idx>0&&r.segments[idx-1].mode==='flight'&&byId[r.segments[idx-1].to].pos;cam=pf?camera({x:pf[0],y:pf[1],s:Math.min(1000,r.final.s)},ground,u):ground}
   }else if(final&&ground)cam=ground
   maps(images,cam)
   const at=p=>[(p[0]-cam.x)*cam.s+W/2,(p[1]-cam.y)*cam.s+H/2]
   const occupied=[]
   ;[...pins].sort((a,b)=>Number(b.dataset.id===s?.to)-Number(a.dataset.id===s?.to)).forEach(pin=>{
    pin.classList.remove('rt-crowded');pin.classList.toggle('rt-named',!!ground&&cam.s>=ground.s*.9&&!byId[pin.dataset.id].air);const v=at(byId[pin.dataset.id].pos),w=pin.offsetWidth,h=36
    const crowded=occupied.some(p=>Math.abs(p.x-v[0])<(p.w+w)/2+10&&Math.abs(p.y-v[1])<h+8)
    pin.classList.toggle('rt-crowded',crowded);const half=pin.offsetWidth/2,hh=pin.offsetHeight/2,visible=v[0]>half+2&&v[0]<W-half-2&&v[1]>155&&v[1]<H-90
    if(!crowded&&visible)occupied.push({x:v[0],y:v[1],w})
    const id=pin.dataset.id,reached=final||r.segments.some((g,k)=>(g.from===id&&(k<idx||k===idx&&!intro&&u>0))||(g.to===id&&(k<idx||k===idx&&landed)));pin.style.transform=`translate(${v[0]-half}px,${v[1]-hh}px)`;pin.style.visibility=visible&&reached?'visible':'hidden'
   })
   paths.forEach((path,i)=>{const segment=r.segments[i],progress=final?1:intro?ease(cl(t/1800)):i<idx?1:i===idx?u:0,g=curve(segment,progress),a=at(g.a),z=at(g.p),partial=at(g.a.map((v,k)=>mix(v,g.control[k],progress)))
    path.setAttribute('d',segment.mode==='flight'?`M${a} Q${partial} ${z}`:`M${a} L${z}`);path.dataset.progress=String(progress);groups[i].style.opacity=progress>0?1:0
   })
   $('.rt-flight').style.display='none'
   {const ck=$('.rt-clock'),m=s?.mode==='flight'&&/(\d+(?:\.\d+)?)\s*小時(?:\s*(\d+)\s*分)?/.exec(s.duration||'');ck.style.display=m?'block':'none'
    if(m){const tot=Math.round(m[1]*60+(+m[2]||0)),n=Math.round(tot*(landed?1:u)),f=v=>Math.floor(v/60)+':'+String(v%60).padStart(2,'0');ck.lastChild.textContent=f(n)+' / '+f(tot)}}
   const plane=$('.rt-plane'),cursor=$('.rt-cursor');plane.style.opacity=s?.mode==='flight'?1:0;cursor.style.opacity=s&&s.mode!=='flight'?1:0
   if(s){const pos=at(geo.p),tangent=geo.a.map((v,k)=>2*(1-u)*(geo.control[k]-v)+2*u*(geo.b[k]-geo.control[k]));plane.setAttribute('transform',`translate(${pos}) rotate(${Math.atan2(tangent[1],tangent[0])*180/Math.PI}) scale(${landed?.65:1})`);cursor.setAttribute('cx',pos[0]);cursor.setAttribute('cy',pos[1])}
   $$('.rt-origin,.rt-destination').forEach(e=>e.style.visibility='hidden')
   $$('[data-phase]').forEach(e=>e.hidden=e.dataset.phase!==phase)
   $$('[data-arrival]').forEach(e=>e.hidden=!(landed&&+e.dataset.arrival===idx))
   $$('[data-travel]').forEach(e=>e.hidden=!!landed||+e.dataset.travel!==idx)
   const split=$('.rt-split');if(split){
    const visible=s?.mode==='flight'&&!landed;split.style.visibility=visible?'visible':'hidden';const merge=ease(cl((u-.55)/.4))
    if(visible){$$('.rt-pane').forEach((pane,i)=>{const pt=i?geo.b:geo.a;maps([...pane.querySelectorAll('img')],{x:pt[0],y:pt[1],s:Math.min(150,fitPoints([geo.a,geo.b]).s*3)},H/2);pane.style.transform=`translateY(${(i?1:-1)*merge*H/2}px)`});$$('[data-split-leg]').forEach(e=>e.hidden=+e.dataset.splitLeg!==idx)}
   }
   const active=s?.to;$$('.rt-stop').forEach(e=>{e.classList.toggle('active',e.dataset.stop===active);if(active!==lastActive&&e.dataset.stop===active&&r.stops.length>10)$('.rt-list').scrollTop=Math.max(0,e.offsetTop-160)})
   const list=$('.rt-list');if(list){const box=list.getBoundingClientRect();$$('.rt-stop').forEach(e=>{const b=e.getBoundingClientRect();e.style.visibility=b.top>=box.top-1&&b.bottom<=box.bottom+1?'visible':'hidden'})}
   lastActive=active
   el.dataset.routeTime=String(Math.round(t));el.dataset.routePhase=phase;el.dataset.routeCamera=JSON.stringify(cam);el.dataset.routeArrival=landed?(s.arrival||'arrival'):'';el.dataset.routeDuration=String(clock.total)
  }
  function play(){cancelAnimationFrame(raf);if(dead)return
   if(media.matches||q.has('static')||el.classList.contains('morph-settled')||document.body.classList.contains('edit')){frame(clock.total);return}
   if(q.has('rt')){frame(Math.max(0,Number(q.get('rt'))||0));return}
   const t0=performance.now();frame(0);const tick=now=>{if(dead||!el.isConnected)return;frame(Math.max(0,Math.min(clock.total,now-t0)));if(now-t0<clock.total)raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick)
  }
  const replay=$('.rt-replay');replay.addEventListener('click',play);media.addEventListener('change',play)
  Promise.all([document.fonts.ready,...images.map(im=>im.decode().catch(()=>{}))]).then(play)
  return ()=>{dead=true;cancelAnimationFrame(raf);replay.removeEventListener('click',play);media.removeEventListener('change',play)}
 }
 M.routeKit={html,mount,timeline}
}

/* variants/route/_showreel-shapes.js */
// 本單新增；Natural Earth 1:50m，沿 tools/make_japan.py 的真地理來源；OurAirports 機場國別
M.showreelShapes = {"source":"handbooks/data/geo/natural-earth/ne_50m_admin_0_countries.geojson","license":"Natural Earth public domain","projection":"Web Mercator z0 world pixels","countries":{"KR":{"name":"韓國","path":"M218.05076,98.94312L218.07257,98.92612L218.07396,98.90163L218.07417,98.82123L218.13639,98.76553L218.22500,98.65076L218.26847,98.58790L218.31799,98.52913L218.37535,98.48986L218.43167,98.47114L218.52021,98.46322L218.68993,98.47074L218.72319,98.46393L218.84125,98.45782L218.86910,98.46827L218.95486,98.47486L219.04993,98.46751L219.09778,98.45047L219.14215,98.42148L219.18090,98.36916L219.22083,98.27217L219.26361,98.19570L219.28861,98.18152L219.46229,98.58745L219.62840,98.84838L219.77000,99.03681L219.97167,99.39798L220.03076,99.59031L220.03639,99.70917L220.07000,99.87233L220.04125,99.96568L220.04979,100.11256L220.03708,100.18787L220.01250,100.24331L220.01160,100.34963L220.01951,100.40645L220.02028,100.48169L220.03611,100.51102L220.05924,100.52188L220.09583,100.49449L220.14069,100.48311L220.13278,100.57354L220.07854,100.80177L220.03139,100.96753L219.96729,101.11158L219.88562,101.24302L219.78792,101.29444L219.71917,101.31287L219.58806,101.31949L219.47917,101.29716L219.38556,101.31333L219.34799,101.34074L219.32007,101.38744L219.34056,101.45998L219.33792,101.51350L219.29792,101.50939L219.21847,101.47828L219.13056,101.47404L219.08944,101.45867L219.04799,101.38197L219.00569,101.38481L218.93208,101.43029L218.81944,101.44037L218.77979,101.46494L218.76576,101.49674L218.78222,101.53685L218.83889,101.58955L218.81986,101.64280L218.76083,101.66945L218.71319,101.60396L218.68347,101.53973L218.65028,101.53609L218.59861,101.55445L218.58819,101.62378L218.61222,101.67097L218.65181,101.72563L218.59639,101.78843L218.58174,101.83323L218.54194,101.86546L218.43444,101.79396L218.44972,101.74310L218.49639,101.69415L218.50215,101.64339L218.48681,101.61330L218.33299,101.74150L218.23819,101.88651L218.18757,101.87599L218.16639,101.83871L218.13674,101.82354L218.03438,101.91699L218.01556,101.99106L217.97792,101.99388L217.96146,101.96255L217.96014,101.89556L217.94257,101.83901L217.83653,101.75639L217.78806,101.68414L217.81410,101.64373L217.90264,101.66569L217.97299,101.66282L217.95910,101.62852L217.93625,101.61225L217.98299,101.59293L218.02194,101.55335L217.98965,101.54261L217.94028,101.56549L217.89917,101.55420L217.88292,101.45935L217.83285,101.36187L217.80701,101.26710L217.85639,101.21251L217.88153,101.12758L217.92743,101.00441L217.95042,100.96455L218.01403,100.93554L218.03667,100.90361L218.00174,100.88722L217.94597,100.87270L217.94736,100.83707L217.98535,100.81759L218.02778,100.77830L218.11014,100.73043L218.13549,100.63999L218.11174,100.61723L218.06042,100.59571L218.07194,100.54995L218.09312,100.51510L218.08521,100.49419L218.02458,100.43517L217.98431,100.38134L217.99625,100.31994L217.98701,100.22697L217.99250,100.14882L217.98986,100.10643L217.96028,100.01084L217.94681,99.91500L217.90792,99.92898L217.87646,99.95279L217.76403,99.91902L217.72861,99.91694L217.71417,99.84568L217.75444,99.75771L217.85000,99.68010L217.90486,99.67046L217.94632,99.63625L218.01083,99.62546L218.08833,99.67819L218.15785,99.68879L218.19646,99.77980L218.22014,99.79902L218.22514,99.76561L218.28125,99.72641L218.29465,99.69683L218.28250,99.68063L218.21792,99.66450L218.15993,99.55136L218.15187,99.50189L218.13076,99.47034L218.16215,99.37979L218.09507,99.27622L218.06243,99.24360L218.06708,99.15034L218.03208,99.09088L218.01257,99.05826L218.00063,99.00188L218.01083,98.97650L218.04139,98.96684L218.05076,98.94312ZM219.54917,101.57572L219.48208,101.62911L219.39167,101.55750L219.37014,101.51790L219.43889,101.45981L219.49722,101.39341L219.53556,101.38926L219.54917,101.57572ZM219.06903,101.56938L219.06111,101.65403L219.01083,101.65821L218.98083,101.60367L218.94889,101.63029L218.93222,101.63076L218.90722,101.56291L218.90292,101.50990L218.96208,101.46960L218.99778,101.49386L219.04924,101.50634L219.06903,101.56938ZM217.76618,101.94543L217.72069,101.95864L217.69514,101.92898L217.67722,101.92111L217.68736,101.88213L217.76146,101.80555L217.77597,101.77912L217.84451,101.79501L217.87014,101.83555L217.83854,101.89725L217.76618,101.94543ZM217.97028,98.98361L217.96694,99.10232L217.92771,99.09723L217.90104,99.08531L217.88958,99.06216L217.86264,98.95195L217.89271,98.90638L217.95097,98.94246L217.97028,98.98361ZM218.13549,101.96827L218.14750,102.00922L218.09000,102.00148L218.05944,101.96213L218.06354,101.92835L218.09778,101.92355L218.13549,101.96827ZM218.87931,101.73445L218.87132,101.76119L218.83542,101.72074L218.87083,101.67646L218.87931,101.73445ZM217.89694,100.09322L217.88715,100.15042L217.84000,100.11269L217.82653,99.98701L217.87493,100.02369L217.89694,100.09322ZM217.72229,101.63405L217.71292,101.65496L217.68194,101.64871L217.65021,101.58913L217.63701,101.54193L217.60535,101.51599L217.65576,101.47493L217.71986,101.54874L217.72229,101.63405ZM221.09583,99.21552L221.06354,99.24216L221.02528,99.21552L221.02063,99.18733L221.04063,99.16286L221.08708,99.14806L221.10882,99.16956L221.09583,99.21552ZM217.83250,102.92686L217.80056,102.94566L217.77083,102.93433L217.76285,102.92549L217.72708,102.87675L217.71778,102.85170L217.74181,102.80398L217.84014,102.72532L218.09458,102.64949L218.14035,102.64616L218.24083,102.67865L218.26222,102.73943L218.24382,102.79180L218.22069,102.82689L218.10431,102.88601L218.01368,102.91437L217.83250,102.92686Z","bounds":[217.60534755555557,98.18152338290118,3.5034716444444314,4.76413771733435],"photoBounds":[217.71416675555557,98.18152338290118,2.4265279999999905,3.8123519326913]},"JP":{"name":"日本","path":"M222.84125,100.34813L222.80868,100.38104L222.74792,100.37024L222.71285,100.32278L222.72437,100.26916L222.78806,100.22792L222.84889,100.31064L222.84125,100.34813ZM226.37799,98.90687L226.31042,98.90915L226.29347,98.90031L226.33444,98.87798L226.33806,98.84050L226.36250,98.77403L226.36208,98.75482L226.30840,98.75143L226.31111,98.67569L226.35118,98.60097L226.46139,98.48300L226.49146,98.46083L226.49604,98.51241L226.46243,98.63426L226.45590,98.67820L226.54236,98.68738L226.48674,98.83320L226.37799,98.90687ZM223.95222,102.01636L223.87514,102.08966L223.80847,102.08454L223.77493,102.05178L223.76382,102.01119L223.82736,101.94745L223.88215,101.85737L223.93181,101.81731L223.97208,101.79501L224.00333,101.79577L223.93278,101.92149L223.95222,102.01636ZM220.88729,105.40302L220.80583,105.42079L220.76132,105.40161L220.72042,105.29988L220.79799,105.23610L220.90208,105.29924L220.92319,105.31743L220.88729,105.40302ZM221.12694,105.29268L221.06465,105.30141L221.06333,105.25366L221.11285,105.14565L221.11812,105.06624L221.16424,104.96606L221.18389,104.94403L221.19847,104.93610L221.21431,104.96723L221.19639,105.08997L221.15028,105.18290L221.12694,105.29268ZM220.50313,103.76706L220.44694,103.79706L220.43972,103.76833L220.41611,103.75523L220.45674,103.71479L220.45535,103.69642L220.42972,103.66906L220.45958,103.56574L220.45139,103.52124L220.56375,103.50473L220.58431,103.54656L220.58632,103.67378L220.50313,103.76706ZM219.93208,102.15802L219.88583,102.19287L219.86590,102.13943L219.88611,101.98837L219.97306,102.01926L219.97160,102.06568L219.93208,102.15802ZM220.00757,101.95994L219.99312,102.00140L219.94486,101.97205L219.92299,101.94547L219.96757,101.81491L219.96236,101.76533L219.96507,101.74116L220.05410,101.67262L220.06931,101.68579L220.07479,101.70470L220.06694,101.73403L220.07139,101.79889L220.00458,101.90583L220.00757,101.95994ZM219.49535,103.29974L219.52292,103.32258L219.56340,103.30949L219.59542,103.30643L219.61854,103.31750L219.64757,103.37631L219.65833,103.41109L219.60625,103.41599L219.58431,103.42412L219.55590,103.46682L219.51500,103.45112L219.48965,103.43113L219.48382,103.40276L219.49535,103.29974ZM220.71542,103.60376L220.65250,103.60746L220.62653,103.59763L220.61632,103.57085L220.70431,103.51655L220.77257,103.52622L220.74208,103.57513L220.71542,103.60376ZM228.31840,91.75389L228.29083,91.81811L228.25396,91.72261L228.24653,91.61958L228.26785,91.62022L228.30701,91.63571L228.31639,91.68593L228.31840,91.75389ZM228.47674,91.96947L228.42736,91.97666L228.37000,91.93462L228.36292,91.88187L228.40444,91.83981L228.44576,91.85535L228.48715,91.90975L228.50076,91.93807L228.47674,91.96947ZM227.18667,94.95400L227.17042,94.95914L227.15347,94.95105L227.13708,94.87858L227.15118,94.84030L227.19701,94.81353L227.24153,94.80608L227.20361,94.93926L227.18667,94.95400ZM223.53910,101.84790L223.52583,101.86504L223.51312,101.86057L223.46799,101.90015L223.45819,101.86222L223.42278,101.83694L223.41840,101.81718L223.52069,101.80412L223.55361,101.81448L223.53910,101.84790ZM227.16903,101.63806L227.16139,101.67870L227.12347,101.66974L227.10535,101.64326L227.10757,101.59572L227.14750,101.59534L227.16903,101.63806ZM219.78806,103.25202L219.77028,103.26116L219.74729,103.18484L219.73139,103.15753L219.75819,103.14292L219.81139,103.00423L219.82125,103.05932L219.84194,103.11391L219.86271,103.12256L219.84250,103.16233L219.81271,103.17702L219.78806,103.25202ZM220.08306,102.92736L220.03299,102.96749L219.99674,102.96732L220.02986,102.92051L220.03424,102.89817L220.06181,102.83532L220.11590,102.81275L220.13861,102.80997L220.09465,102.87525L220.08306,102.92736ZM220.29917,102.47906L220.25000,102.51455L220.21319,102.48687L220.23111,102.41054L220.24340,102.38529L220.28542,102.41029L220.29917,102.47906ZM222.27799,102.16506L222.25736,102.19949L222.19444,102.18905L222.21958,102.15923L222.23896,102.12307L222.25312,102.11569L222.26500,102.15500L222.27799,102.16506ZM222.05583,102.31095L222.09035,102.34229L222.17278,102.32949L222.18306,102.33836L222.15896,102.36685L222.12264,102.39503L222.05674,102.37408L222.01514,102.37291L222.00931,102.32585L222.01458,102.30869L222.05583,102.31095ZM220.24389,104.24687L220.22174,104.26147L220.23597,104.19578L220.29319,104.13821L220.29771,104.17553L220.24389,104.24687ZM229.11160,108.35275L229.09861,108.35341L229.05396,108.26917L229.06688,108.26524L229.09278,108.27838L229.12153,108.32707L229.11160,108.35275ZM230.27507,92.97088L230.36410,92.97591L230.40389,92.97122L230.47208,92.98616L230.74264,93.13649L230.82431,93.15558L230.90861,93.15780L230.96785,93.14570L231.02000,93.10450L231.18333,92.92216L231.35486,92.75565L231.37389,92.76210L231.37396,92.80790L231.36139,92.85905L231.28549,93.01130L231.20097,93.21563L231.18299,93.31894L231.21042,93.41934L231.26333,93.50213L231.30521,93.61523L231.35347,93.77213L231.42125,93.79197L231.45806,93.79440L231.52590,93.74745L231.59014,93.68771L231.64535,93.68045L231.70347,93.69058L231.62708,93.73213L231.55500,93.78310L231.49326,93.87938L231.47028,93.89738L231.39896,93.89148L231.35819,93.89495L231.27472,93.93513L231.20153,93.98055L231.13160,94.03625L231.05521,94.06612L230.97396,94.07314L230.84854,94.11860L230.76708,94.12183L230.61444,94.08216L230.54028,94.09265L230.37819,94.18223L230.23083,94.31140L230.10201,94.45592L229.99431,94.62939L229.95104,94.71963L229.92507,94.82033L229.92153,94.88687L229.91194,94.95082L229.88708,94.99534L229.85708,95.03137L229.76833,95.01030L229.62229,94.91820L229.33917,94.78422L229.04028,94.57848L228.87208,94.47492L228.55583,94.50594L228.25681,94.70328L228.23000,94.68651L228.11563,94.55122L228.06028,94.49755L227.99417,94.48237L227.94500,94.48412L227.89722,94.49392L227.82965,94.56360L227.80486,94.61378L227.78562,94.67063L227.77972,94.71085L227.78785,94.75020L227.85181,94.83918L227.93069,94.90532L227.96639,94.91792L228.04215,94.91328L228.07736,94.92012L228.20431,95.05282L228.34326,95.17679L228.37403,95.21780L228.32264,95.26096L228.26632,95.28232L228.20090,95.27674L228.13611,95.26040L228.02479,95.20778L227.97722,95.25263L227.90340,95.34446L227.86250,95.44413L227.82931,95.48983L227.74764,95.54990L227.66125,95.58098L227.61611,95.57070L227.58160,95.53304L227.56208,95.48788L227.55222,95.43555L227.57069,95.32200L227.61542,95.21957L227.63264,95.11481L227.59597,94.96710L227.57271,94.93622L227.48097,94.84944L227.43854,94.76489L227.42819,94.65953L227.43361,94.60121L227.45611,94.47233L227.47812,94.40712L227.52042,94.38564L227.56625,94.37275L227.63708,94.32611L227.71493,94.26552L227.78924,94.19635L227.86292,94.11163L227.90146,94.01848L227.83819,93.90409L227.82528,93.83603L227.83458,93.77155L227.90181,93.73728L227.97125,93.76315L228.11069,93.85761L228.13806,93.86690L228.23382,93.87128L228.36493,93.89181L228.44090,93.88681L228.47736,93.87257L228.53271,93.79450L228.55986,93.69492L228.54993,93.56661L228.54944,93.43887L228.58437,93.33461L228.69382,93.16667L228.72514,93.06743L228.73660,92.82546L228.77604,92.71855L228.80778,92.60769L228.82292,92.37416L228.77799,92.14885L228.73299,92.03808L228.68125,91.93256L228.68889,91.83163L228.73069,91.73793L228.73174,91.70966L228.74167,91.68464L228.82000,91.66679L228.85653,91.64665L228.89153,91.60150L228.93347,91.57490L228.96417,91.60131L228.98944,91.64749L229.09979,91.76119L229.27361,91.96376L229.47847,92.27116L229.60694,92.42041L229.74229,92.55545L229.89410,92.69323L230.05292,92.81164L230.15438,92.86743L230.22868,92.95637L230.27507,92.97088ZM221.27972,102.60402L221.37542,102.62949L221.41583,102.63107L221.45333,102.61953L221.51028,102.58609L221.57014,102.56149L221.61285,102.57396L221.65069,102.60381L221.67056,102.64566L221.66090,102.68956L221.59326,102.78373L221.53771,102.88397L221.66549,102.90266L221.79312,102.90054L221.76333,102.96255L221.75847,103.01655L221.79750,103.04224L221.83062,103.07680L221.82201,103.10811L221.80299,103.13903L221.87278,103.18533L221.86819,103.21639L221.85007,103.24892L221.67618,103.46118L221.62514,103.56846L221.58958,103.68648L221.55708,103.77264L221.53326,103.86194L221.51514,103.95826L221.48285,104.05753L221.49354,104.14548L221.48264,104.23545L221.39535,104.45748L221.33312,104.45337L221.25493,104.42651L221.20590,104.43066L221.18056,104.47997L221.22556,104.58113L221.08604,104.70091L220.93208,104.78137L220.93097,104.74473L220.94542,104.71583L220.96764,104.69259L220.98375,104.66456L221.00604,104.57037L220.99500,104.47538L220.94861,104.35628L220.94521,104.31341L220.97736,104.29609L220.99896,104.29116L221.01069,104.27448L221.01111,104.23504L220.99646,104.20578L220.95257,104.19627L220.91028,104.19566L220.88069,104.23993L220.83986,104.32539L220.82000,104.41166L220.82875,104.45882L220.84688,104.50104L220.90278,104.57171L220.88639,104.61326L220.86313,104.64569L220.66535,104.57220L220.62264,104.56696L220.58715,104.55140L220.54917,104.45430L220.62972,104.43091L220.65361,104.41915L220.66250,104.38821L220.67340,104.29336L220.63569,104.21411L220.60389,104.18590L220.57806,104.15348L220.59444,104.08643L220.58368,104.00193L220.58271,103.88375L220.59667,103.86337L220.67139,103.83947L220.72528,103.77604L220.77299,103.70378L220.84292,103.57652L220.89993,103.43888L220.84500,103.43286L220.79847,103.40705L220.84938,103.34181L220.83361,103.25938L220.75764,103.15795L220.71590,103.03818L220.64875,102.98536L220.61333,102.96595L220.57021,102.99407L220.53465,103.02778L220.56757,103.10571L220.56375,103.17454L220.56889,103.24268L220.60243,103.24649L220.64361,103.22954L220.67660,103.24157L220.69583,103.27735L220.70104,103.32344L220.68653,103.36909L220.65611,103.39178L220.61903,103.38997L220.58167,103.36534L220.55257,103.33021L220.48292,103.31081L220.40944,103.35230L220.33958,103.43677L220.27986,103.47960L220.30799,103.41690L220.32125,103.34924L220.29222,103.30164L220.22403,103.22243L220.20819,103.17656L220.20431,103.12103L220.21625,103.06586L220.28639,103.12897L220.32236,103.20767L220.37389,103.24219L220.43854,103.24248L220.38889,103.12691L220.37104,103.09776L220.30132,103.04581L220.20625,102.95832L220.14583,102.91611L220.16722,102.82477L220.20264,102.80660L220.23264,102.81101L220.33361,102.84339L220.34313,102.79787L220.32826,102.77354L220.32049,102.74525L220.38694,102.70563L220.49569,102.67299L220.51799,102.65770L220.53729,102.62486L220.56389,102.60769L220.64007,102.60819L220.70403,102.57679L220.75694,102.49154L220.76958,102.44473L220.78847,102.40565L220.92056,102.33640L220.95333,102.32585L221.04153,102.33443L221.12222,102.37362L221.16201,102.45596L221.19687,102.54401L221.27972,102.60402ZM223.54306,102.04372L223.64139,102.07950L223.74222,102.06930L223.74063,102.22623L223.75493,102.27884L223.78333,102.32589L223.76875,102.39436L223.81431,102.41773L223.67910,102.49576L223.55701,102.59906L223.50688,102.66869L223.46146,102.74317L223.43514,102.82194L223.41806,102.90681L223.37715,102.87317L223.25951,102.73560L223.18507,102.69780L223.06535,102.67765L223.02722,102.68219L222.78111,102.81088L222.74840,102.90478L222.68132,103.04618L222.64951,103.09279L222.61417,103.10616L222.58917,103.13038L222.56160,103.25058L222.48528,103.32452L222.43861,103.32671L222.35889,103.30647L222.32306,103.31787L222.37083,103.19935L222.29472,103.18492L222.21875,103.18740L222.21694,103.11022L222.17090,103.06636L222.20500,103.00941L222.20597,102.96296L222.22597,102.93736L222.23292,102.89988L222.23035,102.86781L222.18340,102.85801L222.15479,102.83532L222.16021,102.75083L222.13326,102.74775L222.06653,102.76248L221.92771,102.82776L221.88986,102.82788L221.94806,102.78140L222.07139,102.71754L222.12688,102.68094L222.24785,102.57813L222.32396,102.52940L222.36368,102.44305L222.37597,102.39056L222.40167,102.34439L222.42437,102.27042L222.46361,102.24571L222.53167,102.18213L222.57076,102.18830L222.61424,102.26640L222.67285,102.32627L222.71507,102.32121L222.79028,102.29052L222.82653,102.28361L222.91347,102.28726L222.99167,102.24923L223.02347,102.20439L223.03535,102.14833L223.00632,102.05447L223.04396,102.06392L223.08000,102.06006L223.16486,102.00027L223.25215,101.96478L223.34285,101.95586L223.44479,101.98976L223.54306,102.04372ZM228.42972,95.62894L228.45778,95.64679L228.59056,95.59853L228.56528,95.74395L228.55111,95.89022L228.56083,96.13224L228.57278,96.24120L228.59576,96.34639L228.65229,96.42168L228.72625,96.47506L228.83347,96.64540L228.89097,96.85382L228.93160,96.95478L228.96201,97.06051L228.97125,97.10884L228.97201,97.15726L228.96292,97.22338L228.97292,97.27677L228.96139,97.44430L228.91340,97.63744L228.90722,97.73592L228.86549,97.75543L228.84021,97.80086L228.81861,97.82192L228.79465,97.83823L228.75986,97.84229L228.73500,97.86087L228.72514,97.91293L228.70917,97.96115L228.67889,98.00556L228.65514,98.05451L228.63556,98.17370L228.62847,98.29573L228.59910,98.38082L228.52847,98.40297L228.44750,98.40146L228.34375,98.44087L228.32167,98.46388L228.23972,98.61205L228.21618,98.69880L228.21542,98.79200L228.23819,98.90643L228.26910,99.01811L228.29250,99.22558L228.26785,99.54074L228.24417,99.64107L228.19208,99.70899L228.15264,99.74048L228.11861,99.77910L228.07458,99.88121L228.00167,100.08419L227.99563,100.13501L227.99590,100.18778L227.97625,100.25645L227.96340,100.32390L227.97542,100.40224L227.99785,100.47546L228.09569,100.66304L228.13403,100.71844L228.17708,100.76889L228.01014,100.82464L227.98000,100.85023L227.88083,100.95670L227.84917,101.05751L227.85174,101.16889L227.83500,101.20881L227.80778,101.24336L227.77937,101.26634L227.66854,101.31724L227.59764,101.36781L227.52694,101.44677L227.49896,101.48814L227.44458,101.47489L227.41278,101.43842L227.44410,101.39248L227.43444,101.33837L227.44993,101.19908L227.43215,101.14303L227.48882,101.10068L227.51583,101.03288L227.57486,100.97858L227.61694,100.93033L227.62444,100.89123L227.58660,100.84908L227.54667,100.81857L227.49139,100.81844L227.43806,100.82746L227.40361,100.86766L227.39208,100.92235L227.39479,100.94787L227.39042,100.97018L227.30667,101.04498L227.31771,101.12316L227.34222,101.16281L227.37354,101.18160L227.36417,101.20847L227.32444,101.27135L227.29667,101.27755L227.24556,101.18955L227.18181,101.14141L227.10292,101.14179L227.02181,101.15928L226.96014,101.21786L226.93979,101.26646L226.92681,101.31669L226.93118,101.43880L226.90562,101.54053L226.85556,101.62983L226.83208,101.66240L226.77097,101.72289L226.72889,101.73082L226.69875,101.70335L226.67451,101.66168L226.70542,101.50884L226.70417,101.42291L226.77590,101.37913L226.71708,101.31792L226.64507,101.29326L226.54375,101.32594L226.51521,101.36272L226.49569,101.41219L226.44132,101.47463L226.38125,101.53313L226.31340,101.63274L226.26778,101.75061L226.11840,101.71209L226.03681,101.70348L225.95451,101.70647L225.80861,101.69195L225.64840,101.71601L225.46611,101.76229L225.47701,101.72892L225.62688,101.65796L225.63229,101.63714L225.61792,101.59826L225.58056,101.59635L225.49090,101.60992L225.44514,101.60396L225.42646,101.56223L225.39611,101.54421L225.37583,101.56130L225.38250,101.64237L225.36028,101.65319L225.33069,101.63236L225.34014,101.56938L225.31993,101.47696L225.31764,101.41952L225.34903,101.37018L225.31687,101.34936L225.28299,101.35737L225.23986,101.38108L225.20181,101.41482L225.12139,101.58350L225.09014,101.67971L225.14903,101.75689L225.30958,101.86466L225.33708,101.89106L225.33771,101.93685L225.31819,101.98543L225.27444,102.00678L225.09826,102.04254L224.94569,102.11208L224.90160,102.18251L224.76271,102.45392L224.65153,102.63891L224.49444,102.70268L224.32201,102.64603L224.28035,102.58167L224.24660,102.50202L224.18250,102.42993L224.12472,102.35133L224.09097,102.25794L224.09625,102.10712L224.07118,102.01615L224.09382,101.99190L224.18889,101.93655L224.21993,101.90554L224.27361,101.83340L224.29285,101.79324L224.29576,101.73234L224.25257,101.70052L224.14097,101.70170L224.02965,101.72065L223.95014,101.69402L223.84708,101.62028L223.81514,101.60456L223.70403,101.59991L223.62472,101.61360L223.54681,101.64052L223.46444,101.64901L223.43701,101.66303L223.34188,101.75339L223.26632,101.81023L223.20097,101.83842L223.05986,101.84596L222.98924,101.86424L222.91514,101.89405L222.89444,101.89144L222.81646,101.93264L222.72694,101.96827L222.67903,102.00405L222.59125,101.98067L222.41750,102.04468L222.33354,102.05254L222.24674,102.01729L222.16625,101.96019L222.08896,101.98467L222.03597,102.06896L222.01028,102.23645L221.98000,102.31175L221.97083,102.40210L221.93083,102.38780L221.69826,102.22510L221.68215,102.21927L221.49417,102.24730L221.44562,102.26083L221.38507,102.29379L221.32097,102.30852L221.26250,102.28483L221.20667,102.24621L221.15299,102.25769L221.09785,102.28475L221.07681,102.03901L221.08750,102.00653L221.12132,101.96335L221.15854,101.92641L221.24958,101.91366L221.34174,101.92566L221.40757,101.90865L221.46313,101.85982L221.52181,101.79050L221.58792,101.73407L221.67757,101.68946L221.76431,101.63823L221.84042,101.56634L221.91271,101.48780L221.97917,101.43012L222.05125,101.38167L222.16111,101.26523L222.30688,101.13418L222.36278,101.03697L222.39757,101.01017L222.52299,100.95580L222.68938,100.91424L222.76778,100.91625L222.84549,101.00160L222.88736,100.98992L222.92972,100.96787L223.01542,100.95567L223.10354,100.96979L223.18951,100.97013L223.27556,100.95934L223.44111,100.93136L223.52819,100.89755L223.61319,100.85382L223.91625,100.82293L224.12396,100.74951L224.15681,100.75473L224.18875,100.77167L224.19111,100.82605L224.16500,100.88534L224.19042,100.92120L224.23250,100.94334L224.42799,100.95017L224.48375,100.96292L224.56535,100.92239L224.64222,100.87223L224.72264,100.80605L224.77889,100.73150L224.72694,100.63810L224.71556,100.53583L224.75910,100.42476L224.82222,100.33095L224.89729,100.27420L224.96639,100.20882L225.10639,100.02295L225.20757,99.87220L225.24396,99.68649L225.22257,99.46602L225.31090,99.30179L225.39542,99.27355L225.56347,99.19849L225.65167,99.17643L225.66486,99.20926L225.66222,99.25226L225.53035,99.39030L225.45479,99.44697L225.40958,99.46454L225.36819,99.48960L225.35104,99.53804L225.41826,99.61907L225.43542,99.67884L225.43125,99.73622L225.43410,99.78770L225.51021,99.84377L225.59736,99.86232L225.63389,99.86180L225.66583,99.84706L225.76542,99.70986L225.78778,99.68601L226.07160,99.58535L226.21125,99.50825L226.28840,99.48833L226.36083,99.44815L226.52326,99.29283L226.58333,99.22116L226.63778,99.14184L226.68132,99.04957L226.71563,98.94953L226.76271,98.88721L227.02021,98.73834L227.10319,98.65712L227.12958,98.61775L227.16146,98.50357L227.18347,98.38476L227.21479,98.29147L227.25701,98.20387L227.31361,98.11451L227.37715,98.03144L227.41472,97.94612L227.46924,97.74178L227.49319,97.62839L227.51187,97.58745L227.53931,97.55299L227.56326,97.50940L227.58153,97.46057L227.58979,97.41215L227.60160,97.26396L227.59444,97.14859L227.55181,97.05065L227.51660,97.02283L227.47819,97.02120L227.42069,97.02966L227.37174,96.98970L227.38167,96.95437L227.43160,96.94780L227.46569,96.92954L227.49014,96.89609L227.53597,96.78900L227.56347,96.67412L227.56583,96.62327L227.53000,96.53049L227.50146,96.41871L227.50069,96.35828L227.53187,96.28864L227.57639,96.23199L227.61625,96.21865L227.65944,96.21471L227.69868,96.19280L227.73500,96.16097L227.75556,96.12591L227.78757,96.03036L227.79986,95.97573L227.77972,95.82928L227.80049,95.78919L227.83000,95.76417L227.86938,95.78319L227.90972,95.78698L227.95674,95.78116L228.00188,95.79667L228.01042,95.83426L228.03868,96.08155L228.05507,96.11489L228.08792,96.14073L228.12500,96.13697L228.15701,96.09859L228.17861,96.04742L228.22118,96.03684L228.35097,96.09189L228.39694,96.05261L228.42694,95.99192L228.45306,95.88423L228.44035,95.78702L228.40917,95.75110L228.37694,95.75762L228.34847,95.78430L228.31674,95.79888L228.12486,95.85013L228.12576,95.74159L228.16681,95.57890L228.18951,95.52733L228.22181,95.50286L228.30236,95.53118L228.34194,95.55004L228.42972,95.62894ZM216.38625,110.00877L216.34437,110.13207L216.30979,110.15002L216.27431,110.14023L216.23806,110.07133L216.26340,110.04494L216.29882,110.05882L216.32750,110.05352L216.39250,109.95311L216.40819,109.96934L216.38625,110.00877ZM216.09861,110.19288L216.05375,110.20385L215.99986,110.19041L215.95069,110.18671L215.95007,110.16351L216.00167,110.13954L216.00264,110.10611L216.01528,110.08804L216.13146,110.12898L216.12667,110.15894L216.09861,110.19288ZM217.20472,109.83100L217.14444,109.85141L217.08014,109.83933L217.09056,109.73013L217.11285,109.74543L217.12681,109.78281L217.17465,109.80461L217.20472,109.83100ZM219.20625,108.32389L219.13778,108.36036L219.11250,108.40385L219.04917,108.41867L218.98757,108.47993L218.92771,108.49106L218.92924,108.54022L218.95451,108.58184L218.91465,108.58912L218.87299,108.63978L218.86972,108.67655L218.88458,108.70623L218.88257,108.72105L218.82979,108.76490L218.77556,108.76683L218.77312,108.71950L218.77681,108.68410L218.82813,108.59788L218.82944,108.49785L218.87708,108.48626L218.89451,108.47233L218.96958,108.40109L218.98347,108.37069L218.94458,108.34118L218.94743,108.30625L218.95625,108.29140L219.01819,108.30267L219.04333,108.32859L219.05549,108.33142L219.09167,108.31196L219.10868,108.27722L219.17618,108.20917L219.20347,108.14142L219.25806,108.19703L219.24333,108.26983L219.20625,108.32389ZM219.73201,107.47006L219.70222,107.48477L219.66222,107.46445L219.65000,107.37230L219.66764,107.32760L219.69896,107.31774L219.72604,107.39747L219.74500,107.43036L219.73201,107.47006ZM220.05514,107.07702L219.99389,107.14256L219.92882,107.08356L219.85042,107.04411L219.88771,107.03346L219.90958,107.01765L219.91174,106.99257L219.96264,106.95537L220.06368,106.92656L220.09576,106.92475L220.13194,106.89763L220.14375,106.87318L220.15861,106.86137L220.22368,106.82771L220.24153,106.86643L220.23854,106.89676L220.18965,106.91362L220.14194,106.95411L220.09792,107.00456L220.05812,107.02590L220.04556,107.04005L220.05514,107.07702ZM219.96375,107.16094L219.96840,107.17975L219.89861,107.16401L219.87021,107.09033L219.91639,107.10349L219.93056,107.12885L219.96375,107.16094ZM227.44257,103.06918L227.43028,103.07817L227.39604,103.05037L227.39125,103.02579L227.39729,103.01053L227.41965,103.00705L227.46569,103.03740L227.44257,103.06918Z","bounds":[215.95006933333332,91.57490424769047,15.753403022222244,18.62894874714374],"photoBounds":[220.14583324444442,91.57490424769047,11.557639111111143,13.206463559977848]}},"airports":{"JCJ":"KR","QJP":"KR","NRT":"JP","MMJ":"JP","IBR":"JP","MUS":"JP","IWO":"JP","KIX":"JP","SHM":"JP","UKB":"JP","HIW":"JP","TJH":"JP","OBO":"JP","CTS":"JP","HKD":"JP","KUH":"JP","MMB":"JP","SHB":"JP","OKD":"JP","RBJ":"JP","WKJ":"JP","AXJ":"JP","IKI":"JP","UBJ":"JP","TSJ":"JP","OMJ":"JP","MBE":"JP","AKJ":"JP","OIR":"JP","RIS":"JP","KUM":"JP","FUJ":"JP","FUK":"JP","TNE":"JP","KOJ":"JP","KMI":"JP","OIT":"JP","KKJ":"JP","HSG":"JP","KMJ":"JP","NGS":"JP","NGO":"JP","ASJ":"JP","OKE":"JP","KKX":"JP","TKN":"JP","NKM":"JP","FKJ":"JP","QGU":"JP","KMQ":"JP","OKI":"JP","FSZ":"JP","TOY":"JP","NTQ":"JP","HIJ":"JP","OKJ":"JP","IZO":"JP","YGJ":"JP","IWK":"JP","KCZ":"JP","MYJ":"JP","ITM":"JP","TTJ":"JP","TKS":"JP","TAK":"JP","IWJ":"JP","AOJ":"JP","GAJ":"JP","SDS":"JP","FKS":"JP","HHE":"JP","HNA":"JP","AXT":"JP","MSJ":"JP","KIJ":"JP","ONJ":"JP","SDJ":"JP","SYO":"JP","NJA":"JP","HAC":"JP","OIM":"JP","MYE":"JP","HND":"JP","OKO":"JP","MWX":"KR","KWJ":"KR","KUV":"KR","CHN":"KR","RSU":"KR","KAG":"KR","WJU":"KR","YNY":"KR","CJU":"KR","JDG":"KR","CHF":"KR","PUS":"KR","HIN":"KR","USN":"KR","ICN":"KR","SSN":"KR","OSN":"KR","GMP":"KR","SWU":"KR","KPO":"KR","JWO":"KR","UJN":"KR","TAE":"KR","HMY":"KR","CJJ":"KR","YEC":"KR","OKA":"JP","DNA":"JP","ISG":"JP","UEO":"JP","KJP":"JP","MMD":"JP","MMY":"JP","AGJ":"JP","IEJ":"JP","HTR":"JP","KTD":"JP","SHI":"JP","TRA":"JP","RNJ":"JP","OGN":"JP"}}

/* variants/route/atlas.js */
// One route composition; the existing routeKit owns all five camera modes.
{ const mode=c=>({continuous:false,cut:true}[c.p.motion?.routeCamera] ?? c.p.motion?.routeCamera ?? 'atlas')
M.add('route','atlas',{name:'航線地圖',order:1,html:c=>M.routeKit.html(c,mode(c)),mount:(el,c)=>M.routeKit.mount(el,c,mode(c))}) }

/* variants/route/day-photos.js */
// route／分日照片：多聯澳洲提案 180–229、350–384、809–840
// 沿 routeKit 的同一鏡頭、路線與生命週期；不另起播放器，不依賴 DrawSVGPlugin。
{
 const U=M.util,cl=x=>Math.max(0,Math.min(1,x)),safe=s=>String(s??'').replace(/[，。；、,.!?！？]+$/,'')
 const colors=['var(--acc)','var(--acc2)','var(--acc3)']
 const days=r=>[...new Set(r.segments.map(s=>String(s.day)))]
 const photos=r=>(r.photos||[]).filter(p=>r.stops.some(s=>s.id===p.stopId)&&r.segments.some(s=>s.from===p.stopId||s.to===p.stopId))
 function html(c){
  const r=c.p.route,base=M.routeKit.html(c);if(!r?.layers?.length)return base
  const ds=days(r),by=Object.fromEntries(r.stops.map(s=>[s.id,s])),ps=photos(r)
  return base+`<style>
  .v-day-photos .rt-list{display:${ds.length?'none':'flex'}}.v-day-photos .rt-legend{display:none}.v-day-photos .rt-title{font-size:42px}
  .rp-photos{position:absolute;left:0;top:0;width:1360px;height:1080px;pointer-events:none;overflow:hidden}
  .rp-photo{position:absolute;pointer-events:auto;width:180px;text-align:center;transform-origin:90px 75px;visibility:hidden}
  .rp-photo img{display:block;width:150px;height:150px;margin:0 auto;border:5px solid var(--paper);border-radius:50%;object-fit:cover;box-shadow:0 7px 20px #182d3433}
  .rp-photo b{display:inline-block;max-width:180px;margin-top:10px;padding:5px 10px;background:var(--paper);font:700 24px/1.4 var(--serif);overflow-wrap:anywhere}
  .rp-lines{position:absolute;inset:0;width:1360px;height:1080px}
  .rp-timeline{position:absolute;left:1430px;top:400px;width:420px;height:470px;overflow-y:auto;display:flex;flex-direction:column;gap:24px;scrollbar-width:thin}
  .rp-day{position:relative;flex:1 0 auto;border-left:3px solid var(--line);padding:0 0 20px 24px;min-height:110px}
  .rp-day::before{content:'';position:absolute;width:13px;height:13px;border-radius:50%;background:var(--line);left:-8px;top:9px}
  .rp-day.active::before,.rp-day.done::before{background:var(--day)}
  .rp-day.active{border-color:var(--day)}.rp-day-title{font:700 28px var(--serif);color:var(--day);margin-bottom:12px}
  .rp-stations{font-size:22px;line-height:1.7;overflow-wrap:anywhere}.rp-day.active .rp-stations{font-weight:700}
  .rp-meter{height:3px;background:var(--line);margin-top:16px}.rp-meter i{display:block;height:100%;width:0;background:var(--day)}
  </style><div class="rp-photos"><svg class="rp-lines" aria-hidden="true">${ps.map(()=>'<path fill="none" stroke="var(--ink)" stroke-width="2"/>').join('')}</svg>
  ${ps.map(p=>`<div class="rp-photo" data-photo-stop="${U.esc(p.stopId)}"><img src="${U.esc(p.img)}" alt="${U.esc(by[p.stopId].name)}"><b>${c.ed('name'+p.stopId,safe(by[p.stopId].name))}</b></div>`).join('')}</div>
  ${ds.length?`<div class="rp-timeline">${ds.map((d,i)=>{
   const segs=r.segments.filter(s=>String(s.day)===d),ids=[]
   segs.forEach((s,j)=>{if(!j||segs[j-1].to!==s.from)ids.push(s.from);ids.push(s.to)})
   return `<div class="rp-day" data-day="${U.esc(d)}" style="--day:${colors[i%colors.length]}"><div class="rp-day-title">${c.ed('day'+d,`第 ${Number(d)||d} 天`)}</div><div class="rp-stations">${c.ed('day-stops'+d,ids.map(id=>safe(by[id]?.name)).join(' · '))}</div><div class="rp-meter"><i></i></div></div>`
  }).join('')}</div>`:''}`
 }
 function mount(el,c){
  const r=c.p.route;if(!r?.layers?.length)return ()=>{}
  const ds=days(r),ps=photos(r),by=Object.fromEntries(r.stops.map(s=>[s.id,s])),nodes=[...el.querySelectorAll('.rp-photo')],lines=[...el.querySelectorAll('.rp-lines path')],paths=[...el.querySelectorAll('.rt-segment path')],rows=[...el.querySelectorAll('.rp-day')]
  paths.forEach((p,i)=>p.setAttribute('stroke',colors[ds.indexOf(String(r.segments[i].day))%colors.length]))
  let previousDay=null
  // Consume the existing route frame state after its synchronous paint. One observer,
  // no extra clock; seek/replay/reduced-motion and cancellation stay in routeKit.
  function paint(){
   if(!el.dataset.routeCamera)return
   const cam=JSON.parse(el.dataset.routeCamera),phase=el.dataset.routePhase,idx=/^\d+$/.test(phase)?Number(phase):-1,final=phase==='final',at=p=>[(p[0]-cam.x)*cam.s+680,(p[1]-cam.y)*cam.s+540]
   const progress=paths.map(p=>Number(p.dataset.progress)||0)
   const active=idx<0?null:String(r.segments[idx].day)
   rows.forEach(row=>{const indices=r.segments.map((s,i)=>String(s.day)===row.dataset.day?i:-1).filter(i=>i>=0),v=indices.reduce((sum,i)=>sum+progress[i],0)/indices.length
    row.classList.toggle('active',row.dataset.day===active);row.classList.toggle('done',v>=1);row.querySelector('.rp-meter i').style.width=(v*100)+'%'
    if(active!==previousDay&&row.dataset.day===active)el.querySelector('.rp-timeline').scrollTop=Math.max(0,row.offsetTop-60)
   });previousDay=active
   // Unrouted stops keep their names in the original variants; this version shows only the day's verified route.
   const routed=new Set(r.segments.flatMap(s=>[s.from,s.to]))
   if(r.segments.length)el.querySelectorAll('.rt-pin').forEach(pin=>{if(!routed.has(pin.dataset.id))pin.style.visibility='hidden'})
   const occupied=[]
   nodes.forEach((node,i)=>{
    const id=ps[i].stopId,p=at(by[id].pos),arrival=r.segments.reduce((v,s,j)=>Math.max(v,s.from===id&&(final||idx>=j)?1:0,s.to===id?cl((progress[j]-.78)/.22):0),0)
    // Keep the geographic anchor fixed; offset only its photo, with a leader.
    const h=node.offsetHeight||205,w=180,candidates=[[0,-h-34],[105,-h/2],[-285,-h/2],[0,40],[210,-h-20],[-390,-h-20]]
    let pos=null
    for(const [dx,dy] of candidates){const x=Math.max(24,Math.min(1156,p[0]-90+dx)),y=Math.max(140,Math.min(990-h,p[1]+dy));if(!occupied.some(q=>x<q.x+w+16&&x+w+16>q.x&&y<q.y+q.h+16&&y+h+16>q.y)){pos={x,y,h};break}}
    const visible=phase!=='flight'&&arrival>0&&p[0]>22&&p[0]<1338&&p[1]>130&&p[1]<980&&pos
    node.style.visibility=visible?'visible':'hidden';lines[i].style.visibility=visible?'visible':'hidden'
    if(!visible)return
    occupied.push(pos);node.style.left=pos.x+'px';node.style.top=pos.y+'px';node.style.opacity=arrival;node.style.transform=`scale(${.72+.28*arrival})`
    lines[i].setAttribute('d',`M${p} L${pos.x+90},${pos.y+75}`);lines[i].style.opacity=arrival
   })
   el.dataset.photoCount=String(nodes.filter(n=>n.style.visibility==='visible').length)
  }
  const observer=new MutationObserver(paint);observer.observe(el,{attributes:true,attributeFilter:['data-route-time']})
  const cleanup=M.routeKit.mount(el,c,true)
  // Decode photos independently: routeKit's map selector deliberately never sees them.
  const listeners=[];nodes.forEach(node=>{const im=node.querySelector('img'),hide=()=>{node.hidden=true};im.addEventListener('error',hide);listeners.push([im,hide])})
  return ()=>{observer.disconnect();cleanup();listeners.forEach(([im,fn])=>im.removeEventListener('error',fn))}
 }
 M.add('route','day-photos',{ needs: p => (p.route?.photos || []).length ? '' : '分日照片',name:'分日照片路線',order:3,html,mount})
}

/* variants/route/showreel-country.js */
// route／showreel-country：JapanFlight 的真國界裝圖，沿用 routeKit 的座標、時間及清理
{ const U=M.util, D=M.showreelShapes
 const country=r=>D.countries[r?.to?.country||D.airports[r?.to?.iata]]
 const inside=(shape,point)=>shape&&point&&(shape.path.match(/M[^Z]+Z/g)||[]).some(ring=>{
  const xy=ring.slice(1,-1).split('L').map(p=>p.split(',').map(Number));let yes=false
  for(let i=0,j=xy.length-1;i<xy.length;j=i++){const a=xy[i],b=xy[j];if((a[1]>point[1])!==(b[1]>point[1])&&point[0]<(b[0]-a[0])*(point[1]-a[1])/(b[1]-a[1])+a[0])yes=!yes}
  return yes
 })
 M.add('route','showreel-country',{name:'宣傳片・國土裝照片',auto:false,chapterTransition:'showreel-tricolor',html:c=>{
  const r=c.p.route,shape=country(r),photo=r?.photos?.find(p=>inside(shape,r.stops.find(s=>s.id===p.stopId)?.pos)),src=c.p.img||photo?.img||c.meta.hero
  let html=M.routeKit.html(c)
  if(!shape||!src)return html
  const [x,y,w,h]=shape.photoBounds||shape.bounds,id='route-showreel-country-'+c.pi
  // 圖層與底圖使用同一投影；優先本國真座標景點配對照片，其次團主照片
  const overlay=`<svg class="sr-country" viewBox="0 0 1360 1080" style="position:absolute;inset:0;width:1360px;height:1080px;pointer-events:none;opacity:0"><defs><clipPath id="${id}"><path d="${shape.path}" clip-rule="evenodd"/></clipPath></defs><g class="sr-country-world"><image href="${U.esc(src)}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/><path d="${shape.path}" fill="none" stroke="var(--acc)" stroke-width="2.5" vector-effect="non-scaling-stroke"/></g></svg>`
  return html.replace('<svg class="rt-svg"',overlay+'<svg class="rt-svg"')
 },mount:(root,c,options={})=>{
  if(options.delay){let cleanup=()=>{};const timer=setTimeout(()=>{if(root.isConnected)cleanup=M.REG.route['showreel-country'].mount(root,c)},options.delay);return ()=>{clearTimeout(timer);cleanup()}}
  const stop=M.routeKit.mount(root,c,'continuous'),svg=root.querySelector('.sr-country');if(!svg)return stop
  const r=c.p.route,clock=M.routeKit.timeline(r,'continuous'),first=clock.events.find(e=>r.segments[e.i].mode==='flight'),world=svg.querySelector('.sr-country-world')
  const draw=()=>{const cam=JSON.parse(root.dataset.routeCamera||'null');if(!cam)return;const t=Number(root.dataset.routeTime),at=first?first.start+first.travel*.65:0,duration=first?first.travel*.25:1000;svg.style.opacity=String(Math.max(0,Math.min(1,(t-at)/duration)));world.setAttribute('transform',`translate(${680-cam.x*cam.s} ${540-cam.y*cam.s}) scale(${cam.s})`);svg.dataset.country=country(r).name}
  const obs=new MutationObserver(draw);obs.observe(root,{attributes:true,attributeFilter:['data-route-time','data-route-camera']});draw()
  return ()=>{obs.disconnect();stop()}
 }})
}

/* variants/spot/_photo-stage.js */
// Keep the finite sequence and side-photo selection; use only 2D transforms.
{ const U = M.util, clean = s => String(s ?? '').replace(/[，。；、,.!?！？]+$/u, '')
M.photoStage = { needs: (p, m, it) => new Set(it.map(x => x.img).filter(Boolean)).size >= 2 ? '' : '兩張不同的照片',
  name: '照片輪流登場', auto: false, range: [1, 8],
  html(c) {
    const title = clean(c.p.title || (c.p.type === 'stay' ? '住宿安排' : ''))
    const photos = c.items.map((it, i) => ({ ...it, i })).filter(it => it.img)
    // Keep text-only items as stages too: missing photos do not borrow another hotel's image.
    const entries = c.items
    return `<style>
    .v-photo-stage{background:repeating-linear-gradient(0deg,transparent 0 7px,color-mix(in srgb,var(--paper) 3%,transparent) 7px 8px),var(--ink);color:var(--paper)}
    .v-photo-stage .ps-head{position:absolute;left:120px;right:120px;top:58px;display:flex;align-items:center;justify-content:space-between;gap:48px}
    .v-photo-stage .ps-title{width:1330px;line-height:1.2}
    .v-photo-stage .ps-count{font-size:24px;letter-spacing:.15em;color:var(--acc3);white-space:nowrap}
    .v-photo-stage .ps-card{position:absolute;left:460px;top:234px;width:1000px;height:560px;margin:0;border:1px solid color-mix(in srgb,var(--paper) 18%,transparent);border-radius:14px;overflow:hidden;background:var(--ink);box-shadow:0 20px 50px #0005;transition:transform .65s cubic-bezier(.22,.7,.2,1),opacity .65s;transform-origin:center;cursor:pointer}
    .v-photo-stage .ps-card img{display:block;width:100%;height:100%;object-fit:cover;user-select:none}
    .v-photo-stage .ps-card:focus-visible{outline:5px solid var(--acc3);outline-offset:6px}
    .v-photo-stage .ps-caption{position:absolute;left:120px;right:120px;top:844px;min-height:170px;border-top:1px solid color-mix(in srgb,var(--paper) 30%,transparent);padding-top:30px;display:grid;grid-template-columns:620px 1fr;gap:70px}
    .v-photo-stage .ps-caption[hidden]{display:none}
    .v-photo-stage .ps-name{overflow-wrap:anywhere;font-size:40px;line-height:1.35;text-wrap:balance}
    .v-photo-stage .ps-sub{font-size:22px;line-height:1.5;color:var(--acc3);margin-top:14px}
    .v-photo-stage .ps-body{overflow-wrap:anywhere;line-height:1.65}
    .v-photo-stage .ps-nav{position:absolute;left:120px;right:120px;top:176px;display:flex;gap:14px;justify-content:center}
    .v-photo-stage .ps-nav[hidden]{display:none}
    .v-photo-stage .ps-nav button{width:48px;height:38px;padding:0;border:0;border-bottom:3px solid var(--paper);background:none;color:var(--paper);font:20px var(--sans);cursor:pointer;opacity:.5}
    .v-photo-stage .ps-nav button[aria-pressed=true]{opacity:1;border-color:var(--acc3);color:var(--acc3)}
    .v-photo-stage .ps-nav button:focus-visible{outline:3px solid var(--acc3)}
    .v-photo-stage.ps-still .ps-card{transition:none}
    .edit .v-photo-stage .ps-card{left:120px;top:246px;width:var(--ew);height:var(--eh);transform:translate(var(--ex),var(--ey))!important;opacity:1!important;visibility:visible!important;transition:none;cursor:grab}
    @media(prefers-reduced-motion:reduce){.v-photo-stage .ps-card{transition:none}}
    </style>
    <header class="ps-head"><div class="ps-title serif" style="font-size:${U.fit(c.tx('h', title), 1330, 78, 32)}px">${c.ed('h', title)}</div><div class="ps-count">${c.ed('ps-total', String(entries.length).padStart(2, '0'))}</div></header>
    <nav class="ps-nav" ${entries.length < 2 ? 'hidden' : ''}>${entries.map((it, i) => `<button type="button" data-ps-select="${i}" aria-pressed="${i === 0}" aria-label="${U.esc(clean(it.t) || '照片 ' + (i + 1))}">${c.ed('ps-no' + i, U.no(i))}</button>`).join('')}</nav>
    ${entries.map((it, i) => {
      const cols = Math.min(4, entries.length), rows = Math.ceil(entries.length / cols), w = (1680 - 24 * (cols - 1)) / cols, h = (548 - 24 * (rows - 1)) / rows
      return `<figure class="ps-card" data-ps-card="${i}" role="button" tabindex="${i === 0 ? 0 : -1}" aria-label="${U.esc(clean(it.t) || '照片 ' + (i + 1))}" style="--ew:${w}px;--eh:${h}px;--ex:${i % cols * (w + 24)}px;--ey:${Math.floor(i / cols) * (h + 24)}px;${i ? 'visibility:hidden' : ''}">${it.img ? `<img ${i === photos[0]?.i ? 'class="hero"' : ''} src="${U.esc(it.img)}" alt="" draggable="false">` : ''}</figure>`
    }).join('')}
    ${entries.map((it, i) => `<section class="ps-caption" data-ps-caption="${i}" ${i ? 'hidden' : ''}>
      <div><div class="ps-name serif" style="font-size:${U.fit(c.tx('it' + i, clean(it.t)), 620, 40, 24)}px">${it.t ? c.ed('it' + i, clean(it.t)) : c.ed('ps-caption-no' + i, U.no(i))}</div>${it.sub ? `<div class="ps-sub">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}</div>
      <div class="ps-body" style="font-size:${Math.max(18, Math.min(26, Math.floor(Math.sqrt(990 * 130 / (Math.max(1, U.len(c.tx(c.p.body ? 'b' : 'body' + i, clean(c.p.body || it.body || '')))) * 1.65)))))}px">${c.p.body ? c.ed('b', clean(c.p.body)) : it.body ? c.ed('body' + i, clean(it.body)) : ''}</div>
    </section>`).join('')}`
  },
  onEnter(root, c, {signal, presenting, reducedMotion}) {
    const cards = [...root.querySelectorAll('[data-ps-card]')], captions = [...root.querySelectorAll('[data-ps-caption]')], buttons = [...root.querySelectorAll('[data-ps-select]')]
    const motion = matchMedia('(prefers-reduced-motion:reduce)')
    let current = 0, timer = null
    const stop = () => { clearTimeout(timer); timer = null; root.dataset.psPlaying = 'false' }
    const show = next => {
      if (signal.aborted) return
      current = next; root.dataset.psCurrent = String(current)
      cards.forEach((el, i) => {
        let off = i - current
        if (off > cards.length / 2) off -= cards.length
        if (off < -cards.length / 2) off += cards.length
        const visible = Math.abs(off) <= 1
        el.style.transform = `translateX(${Math.sign(off) * (off ? 620 : 0)}px) scale(${off ? .58 : 1})`
        el.style.opacity = off ? '.58' : '1'; el.style.zIndex = off ? '1' : '2'
        el.style.visibility = visible ? 'visible' : 'hidden'; el.tabIndex = visible && !M.edit.on ? 0 : -1
        el.setAttribute('aria-pressed', String(i === current)); el.setAttribute('aria-hidden', String(!visible && !M.edit.on))
        captions[i].hidden = i !== current; buttons[i]?.setAttribute('aria-pressed', String(i === current))
      })
    }
    root.classList.toggle('ps-still', reducedMotion || M.edit.on)
    show(0)
    // Editing remains stationary; the explicit presentation mode plays exactly once.
    const advance = () => {
      if (signal.aborted) return
      if (current >= cards.length - 1) { stop(); return }
      show(current + 1)
      if (current < cards.length - 1) timer = setTimeout(advance, 2200)
      else stop()
    }
    if (presenting && !reducedMotion && cards.length > 1 && !document.hidden) {
      root.dataset.psPlaying = 'true'; timer = setTimeout(advance, 2200)
    } else stop()
    root.addEventListener('click', e => {
      const target = e.target.closest('[data-ps-card],[data-ps-select]')
      if (!target || M.edit.on || e.target.isContentEditable) return
      e.stopPropagation(); stop(); show(Number(target.dataset.psCard ?? target.dataset.psSelect))
    }, {signal})
    root.addEventListener('keydown', e => {
      if (!e.target.closest('[data-ps-card]') || M.edit.on || !['Enter',' '].includes(e.key)) return
      e.preventDefault(); e.stopPropagation(); stop(); show(Number(e.target.closest('[data-ps-card]').dataset.psCard))
    }, {signal})
    root.addEventListener('focusin', stop, {signal})
    motion.addEventListener('change', e => { if (e.matches) { stop(); root.classList.add('ps-still') } }, {signal})
    document.addEventListener('visibilitychange', () => { if (document.hidden) stop() }, {signal})
    signal.addEventListener('abort', stop, {once:true})
    return stop
  }
}
}

/* variants/spot/alternating-spread.js */
// spot／alternating-spread：左右交錯的景點展頁，每站各自配圖與介紹，適用 2～3 項
{ const U = M.util
M.add('spot', 'alternating-spread', { name: '景點交錯展頁', range: [2, 3], html: c => {
  const p = c.p, gap = 24, top = 240, height = 768
  const rowH = (height - gap * (c.n - 1)) / c.n, photoW = 1008, textW = 600
  const clean = s => String(s || '').replace(/[，。,.]+$/u, '')
  return `<style>
    .v-alternating-spread{background:var(--paper);color:var(--ink)}
    .v-alternating-spread .as-photo{width:100%;height:100%;object-fit:cover;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent)}
    .v-alternating-spread .as-row{display:flex;align-items:center;justify-content:space-between;gap:72px}
    .v-alternating-spread .as-copy{width:${textW}px;flex:none}
    .v-alternating-spread .as-wipe{animation-name:spot-alternating-spread-cut;animation-duration:.65s}
    .v-alternating-spread .as-row:nth-child(even) .as-wipe{--edge:0 0 0 100%}
    @keyframes spot-alternating-spread-cut{from{clip-path:inset(var(--edge,0 100% 0 0))}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-alternating-spread .in{animation:none}}
  </style>
  <div class="ab in" style="left:120px;top:64px;width:1680px;display:flex;align-items:baseline;justify-content:space-between;gap:64px;--i:0">
    <div class="serif" style="max-width:1248px;font-size:${U.fit(c.tx('h', p.title || ''), 1248, 80, 36)}px;line-height:1.2">${c.ed('h', clean(p.title))}</div>
    ${p.sub ? `<div style="font-size:24px;color:var(--acc);white-space:nowrap">${c.ed('k', clean(p.sub))}</div>` : ''}
  </div>
  ${p.en ? `<div class="ab in" style="left:120px;top:176px;width:1680px;font-size:20px;line-height:1.4;letter-spacing:.12em;color:var(--acc);--i:0">${c.ed('en', clean(p.en))}</div>` : ''}
  <div class="ab" style="left:120px;top:${top}px;width:1680px;height:${height}px;display:flex;flex-direction:column;gap:${gap}px">
  ${c.items.map((item, i) => {
    const title = item.t || (i === 0 ? p.title : ''), body = item.body || (i === 0 ? p.body : ''), sub = item.sub || ''
    const titleKey = item.t ? 't' + i : 'h', bodyKey = item.body ? 'b' + i : 'b'
    const tf = U.fit(c.tx(titleKey, title), textW, c.n === 2 ? 52 : 42, 28)
    const available = rowH - tf * 1.3 - (sub ? 42 : 0) - 24
    let bf = c.n === 2 ? 27 : 24
    while (bf > 20 && Math.ceil(U.len(c.tx(bodyKey, body)) * bf * 1.06 / textW) * bf * 1.65 > available) bf--
    const img = item.img || (i === 0 ? p.img : '')
    return `<div class="as-row" style="height:${rowH}px;flex:none;flex-direction:${i % 2 ? 'row-reverse' : 'row'}">
      <div class="in as-wipe" style="width:${photoW}px;height:100%;flex:none;--i:${i}">${img ? `<img class="as-photo${i === 0 ? ' hero' : ''}" src="${U.esc(img)}" alt="">` : ''}</div>
      <div class="as-copy in" style="--i:${i + 1}">
        ${title && !(i === 0 && !item.t) ? `<div class="serif" style="font-size:${tf}px;line-height:1.3;text-wrap:balance">${c.ed(titleKey, clean(title))}</div>` : ''}
        ${sub ? `<div style="font-size:20px;color:var(--acc);margin-top:12px">${c.ed('s' + i, clean(sub))}</div>` : ''}
        ${body ? `<p style="font-size:${bf}px;line-height:1.65;margin:${title && item.t ? 20 : 0}px 0 0;text-wrap:pretty">${c.ed(bodyKey, clean(body))}</p>` : ''}
      </div>
    </div>`
  }).join('')}</div>`
} }) }

/* variants/spot/arc.js */
// spot／arc：左上四分之一圓環切成幾片，每片一張照片，內側疊一道淺色弧邊，右下放景點名與介紹
// 學自小紅書 6a2678e7000000001502720f（同心圓環與全屏相交→細長片拆分放多圖）
// 照片張數＝片數；只有 1 張時切 4 片、同一張照片對位（像一個場景被扇骨隔開）
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
M.add('spot', 'arc', { name: '圓弧多圖', range: [1, 7], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, one = ims.length <= 1
  const k = one ? 4 : ims.length, cx = -40, cy = -40, r0 = 470, r1 = 1080, g = 1.1, step = 90 / k, rad = d => d * Math.PI / 180
  let sl = ''
  for (let i = 0; i < k; i++) {
    const a = i * step + (i ? g / 2 : 0), b = (i + 1) * step - (i < k - 1 ? g / 2 : 0)
    const bx = one ? 0 : Math.max(0, cx + r0 * Math.cos(rad(b))), by = one ? 0 : Math.max(0, cy + r0 * Math.sin(rad(a)))
    const bw = one ? 1040 : cx + r1 * Math.cos(rad(a)) - bx, bh = one ? 1040 : cy + r1 * Math.sin(rad(b)) - by
    sl += `<img class="ab in${i ? '' : ' hero'}" src="${one ? im : ims[i]}" alt="" style="left:${bx}px;top:${by}px;width:${bw}px;height:${bh}px;object-fit:cover;clip-path:path('${U.sector(cx - bx, cy - by, r0, r1, a, b)}');--i:${i + 1}">`
  }
  const TW = 700, tf = U.fit(c.tx('h', p.title), TW, 84, 44), bf = fsb(c.tx('b', p.body || ''), TW, 330, 28, 21)
  return `<svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
      <path d="${U.sector(cx, cy, r0 - 46, r0 - 12, 0, 90)}" fill="var(--acc)" fill-opacity=".16"/>
      <path d="M${cx + r1 + 30},${cy} A${r1 + 30},${r1 + 30} 0 0 1 ${cx},${cy + r1 + 30}" fill="none" stroke="var(--acc)" stroke-width="2"/></svg>${sl}
    ${p.en ? `<div class="ab in" style="right:120px;top:110px;font-size:20px;letter-spacing:.36em;color:var(--mute);text-align:right;max-width:640px;--i:${k + 1}">${c.ed('en', p.en)}</div>` : ''}
    <div class="ab in" style="left:1100px;bottom:100px;width:${TW}px;--i:${k + 2}">
      <div class="kick">${c.ed('k', p.sub || '景點介紹')}</div>
      <div class="serif" style="font-size:${tf}px;line-height:1.2;margin-top:14px">${c.ed('h', p.title)}</div>
      <div style="width:64px;height:3px;background:var(--acc2);margin-top:26px"></div>
      <p style="font-size:${bf}px;line-height:1.8;margin:26px 0 0;color:#3d4347">${c.ed('b', p.body || '')}</p>
      ${(p.tags || []).length ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px">${p.tags.map((t, i) => `<span style="border:1px solid var(--acc);color:var(--acc);border-radius:99px;padding:5px 16px;font-size:18px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>` } }) }

/* variants/spot/auto-gallery.js */
// spot／auto-gallery：依照片真實比例配格；來源 engine/tpl/lib/gallery.mjs:1–18、106–150
M.add('spot', 'auto-gallery', { name:'依照片自動配圖', range:[1,7], auto:false, html:c=>M.gallery.html(c), onEnter:(...args)=>M.gallery.onEnter(...args) })

/* variants/spot/bangkok-curve.js */
// 曼谷 C photo-c.css：單角大曲線、無白框、淡暖影，圖說緊貼下緣。所有內容由本團資料提供。
{ const U = M.util
M.add('spot','bangkok-curve',{name:'曼谷 C・曲線照片',range:[1,4],auto:false,order:1100,html:c=>{
 const photos=c.items.filter(a=>a.img), cols=photos.length>2?2:1, rows=Math.ceil(photos.length/cols), gap=28
 const w=(840-(cols-1)*gap)/cols, h=(810-(rows-1)*gap)/Math.max(rows,1)-52
 const text=c.p.body||'', bodySize=U.len(c.tx('body',text))>180?28:32
 return `<style>.v-bangkok-curve{--paper:#faf3e7;--ink:#30251d;--acc:#886449;background:var(--paper);color:var(--ink)}.v-bangkok-curve .bc-copy{position:absolute;left:120px;width:720px;text-align:left}.v-bangkok-curve figure{position:absolute;margin:0}.v-bangkok-curve .bc-photo{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;border-top-right-radius:120px;box-shadow:0 3px 8px #3c281417,0 10px 20px -10px #3c281424;border:0}.v-bangkok-curve figcaption{position:absolute;left:0;top:100%;width:100%;margin-top:8px;border-top:2px solid var(--acc);padding-top:8px;font-size:24px;line-height:1.3;color:var(--acc)}</style>
 <div class="bc-copy" style="top:80px;font-size:24px;color:var(--acc)">${c.ed('sub',c.p.sub||'')}</div>
 <div class="bc-copy serif in" style="top:160px;font-size:64px;line-height:1.35;--i:0">${c.ed('h',c.p.title||'')}</div>
 <div class="bc-copy in" style="top:430px;font-size:${bodySize}px;line-height:1.85;--i:1">${c.ed('body',text)}</div>
 ${photos.map((a,i)=>`<figure style="left:${960+(i%cols)*(w+gap)}px;top:${100+Math.floor(i/cols)*(h+52+gap)}px;width:${w}px;height:${h}px;--i:${i+1}"><img class="bc-photo in ${i===0?'hero':''}" src="${U.esc(a.img)}" alt="" style="object-position:${U.esc(a.focus||'50% 50%')}"><figcaption class="in">${c.ed('caption'+i,a.t||c.p.en||c.p.title||'')}</figcaption></figure>`).join('')}
 <div class="bc-copy" style="top:970px;font-size:24px;color:var(--acc)">${c.ed('agency',c.meta.agency||'')}</div>`
}}) }

/* variants/spot/bento.js */
// spot／bento：整張照片蓋白霧，右側大小不一的便當格露出清晰照片，左側放字
// 學自小紅書 6a549d7d0000000015024684（便當格＝投影片背景填充）；多張照片時改用照片版型大腦的排法（engine/tpl/lib/gallery.mjs）
// 1 張＝7 格同一張照片對位；2～7 張＝一格一張、第 1 張拿最大格
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
// 跟 gallery.mjs 同一套寫法：cols/rows 是比例，areas 每個字母一格（a＝主圖、最大格）
const L = { 1: [[1, 1, 1, 1], [1, 1, 1], ['a a b c', 'a a d e', 'f f g g']], 2: [[1], [1.5, 1], ['a', 'b']], 3: [[1, 1], [1.45, 1], ['a a', 'b c']],
  4: [[1, 1, 1], [1.6, 1], ['a a a', 'b c d']], 5: [[1, 1, 1, 1, 1, 1], [1.35, 1], ['a a a b b b', 'c c d d e e']],
  6: [[1, 1, 1], [1, 1, 1], ['a a b', 'a a c', 'd e f']], 7: [[1, 1, 1, 1], [1, 1, 1], ['a a b c', 'a a d e', 'f f g g']] }
function cells([cols, rows, areas], X, Y, W, H, gap) {
  const cw = (W - gap * (cols.length - 1)) / cols.reduce((a, b) => a + b), rh = (H - gap * (rows.length - 1)) / rows.reduce((a, b) => a + b), o = {}
  areas.forEach((r, ri) => r.split(' ').forEach((key, ci) => { const q = o[key] ||= { c0: ci, c1: ci, r0: ri, r1: ri }; q.c0 = Math.min(q.c0, ci); q.c1 = Math.max(q.c1, ci); q.r0 = Math.min(q.r0, ri); q.r1 = Math.max(q.r1, ri) }))
  const off = (arr, i, u) => arr.slice(0, i).reduce((a, b) => a + b * u + gap, 0)
  return Object.keys(o).sort().map(key => { const q = o[key]; return { x: X + off(cols, q.c0, cw), y: Y + off(rows, q.r0, rh), w: cols.slice(q.c0, q.c1 + 1).reduce((a, b) => a + b * cw, 0) + gap * (q.c1 - q.c0), h: rows.slice(q.r0, q.r1 + 1).reduce((a, b) => a + b * rh, 0) + gap * (q.r1 - q.r0) } })
}
M.add('spot', 'bento', { name: '便當格露出照片', range: [1, 7], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, n = Math.max(1, Math.min(7, ims.length)), one = n === 1
  const cs = cells(L[n], 820, 90, 980, 900, 16)
  const box = cs.map((q, i) => one
    ? `<img class="ab in" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover;clip-path:inset(${q.y}px ${1920 - q.x - q.w}px ${1080 - q.y - q.h}px ${q.x}px round 6px);--i:${i + 2}">`
    : `<img class="ab in${i ? '' : ' hero'}" src="${ims[i]}" alt="" style="left:${q.x}px;top:${q.y}px;width:${q.w}px;height:${q.h}px;object-fit:cover;border-radius:6px;box-shadow:0 14px 34px rgba(0,0,0,.16);--i:${i + 2}">`).join('')
  const TW = 580, tf = U.fit(c.tx('h', p.title), TW, 76, 40), bf = fsb(c.tx('b', p.body || ''), TW, 450, 28, 21)
  return `<img class="ab${one ? ' hero' : ''}" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
    <div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(251,250,247,.94) 0,rgba(251,250,247,.9) 38%,rgba(251,250,247,${one ? .72 : .84}) 50%)"></div>${box}
    <div class="ab in" style="left:120px;top:90px;width:${TW}px;height:900px;display:flex;flex-direction:column;justify-content:center;--i:1">
      <div class="kick">${c.ed('k', p.sub || '景點介紹')}</div>
      <div class="serif" style="font-size:${tf}px;line-height:1.2;margin-top:14px">${c.ed('h', p.title)}</div>
      ${p.en ? `<div style="font-size:18px;letter-spacing:.3em;color:var(--mute);margin-top:14px">${c.ed('en', p.en)}</div>` : ''}
      <div style="width:64px;height:3px;background:var(--acc);margin-top:28px"></div>
      <p style="font-size:${bf}px;line-height:1.8;margin:26px 0 0;color:#353b3f">${c.ed('b', p.body || '')}</p>
      ${(p.tags || []).length ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:26px">${p.tags.map((t, i) => `<span style="background:var(--acc);color:#fff;border-radius:4px;padding:5px 14px;font-size:18px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>` } }) }

/* variants/spot/brush.js */
// spot／brush：淡化的照片紙底上，一道橫向長筆刷「刷」出原色照片（刷邊有毛邊與飛白），下方置中放景點名與介紹
// 學自小紅書 690efe89000000000301df23（橫向長筆刷＝投影片背景填滿）＋69004ba000000000030193b6（筆刷窗四種）
// 筆刷邊是 SVG 雜訊位移算出來的（不是手繪圖）；照片 2～3 張＝並排 2～3 筆
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
M.add('spot', 'brush', { name: '筆刷刷出照片', range: [1, 3], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, k = Math.max(1, ims.length)
  const Y = 80, H = 510, gap = 70, w = (1680 - gap * (k - 1)) / k
  let defs = '', strokes = ''
  for (let i = 0; i < k; i++) {
    const x = 120 + i * (w + gap), m = 60
    defs += `<filter id="spot-brush-f${i}" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080">
      <feFlood x="${x}" y="${Y}" width="${w}" height="${H}" flood-color="#000" result="r"/>
      <feTurbulence type="fractalNoise" baseFrequency="0.003 0.035" numOctaves="4" seed="${3 + i * 5}" result="n"/>
      <feDisplacementMap in="r" in2="n" scale="90" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feComposite in="SourceGraphic" in2="d" operator="in"/></filter>`
    strokes += `<div class="ab in" style="left:0;top:0;width:1920px;height:1080px;filter:url(#spot-brush-f${i});--i:${i + 1}"><img class="ab${i ? '' : ' hero'}" src="${ims[i] || im}" alt="" style="left:${x - m}px;top:${Y - m}px;width:${w + 2 * m}px;height:${H + 2 * m}px;object-fit:cover"></div>`
  }
  const tf = U.fit(c.tx('h', p.title), 1200, 80, 44), tags = (p.tags || []).length
  const bf = fsb(c.tx('b', p.body || ''), 1160, 1040 - (Y + H + 70) - tf * 1.25 - (p.en ? 40 : 0) - (tags ? 66 : 0) - 70, 28, 21)
  return `<svg class="ab" width="0" height="0" style="left:0;top:0"><defs>${defs}</defs></svg>
    <img class="ab" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover;opacity:.16;filter:saturate(.6)">
    <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(251,250,247,.35),var(--paper) 72%)"></div>${strokes}
    <div class="ab in" style="left:360px;top:${Y + H + 64}px;width:1200px;text-align:center;--i:${k + 1}">
      <div class="serif" style="font-size:${tf}px;line-height:1.2">${c.ed('h', p.title)}</div>
      <div style="display:flex;justify-content:center;align-items:center;gap:18px;margin-top:14px;font-size:18px;letter-spacing:.3em;color:var(--mute)">
        <span style="color:var(--acc2);font:600 20px var(--serif);letter-spacing:.14em">${c.ed('k', p.sub || '景點介紹')}</span>${p.en ? `<i style="width:28px;height:1px;background:var(--mute)"></i><span>${c.ed('en', p.en)}</span>` : ''}</div>
      <p style="font-size:${bf}px;line-height:1.8;margin:24px auto 0;width:1160px;color:#3d4347">${c.ed('b', p.body || '')}</p>
      ${tags ? `<div style="display:flex;justify-content:center;gap:24px;margin-top:20px">${p.tags.map((t, i) => `<span style="font-size:18px;color:var(--acc)">${c.ed('tg' + i, '・' + t)}</span>`).join('')}</div>` : ''}</div>` } }) }

/* variants/spot/capsule.js */
// spot／capsule：暗底和清晰窗保持同一場景；多圖沿原錯落膠囊構圖。
// 學自小紅書 689c592e000000001d039f88 ＋ 6a6ff810000000002402ed9a。
// 單圖的五窗不可拆成獨立照片框，否則會破壞與底圖的取景對位。
{ const U = M.util
const HS = [.78, .6, .9, .68, .84, .56, .74], OF = [-40, 50, -10, 70, -60, 30, -20]
M.add('spot', 'capsule', { name: '膠囊清晰窗', range: [1, 7], html: c => {
  const p=c.p,valid=src=>typeof src==='string'&&src.trim()&&!/^(undefined|null)$/i.test(src.trim())
  const ims=c.items.map(item=>item.img).filter(valid),im=ims[0]||(p.img===null?null:valid(c.meta.hero)?c.meta.hero:null),hasPhoto=!!im,one=ims.length<=1
  const k=one?5:ims.length,gap=k>5?20:26,cw=Math.min(k<=2?320:k<=3?250:176,(920-gap*(k-1))/k),x0=1800-(k*cw+gap*(k-1))
  const TW=hasPhoto?Math.min(680,x0-120-90):1200,X=hasPhoto?120:360,available=880
  const segmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh-TW',{granularity:'word'}):null
  // Include actual line breaks, short-word wrapping and English tracking in the budget.
  // This conservative layout estimate signals overflow; it never removes or clips copy.
  const width=(value,size,tracking=0)=>[...value].reduce((sum,ch)=>sum+size*(ch==='\t'?5.2:/[MWmw@%]/.test(ch)?.96:/[A-Z]/.test(ch)?.76:/[\x00-\xff]/.test(ch)?.65:1)*1.06+tracking,0)
  const parts=(value,w,size,tracking=0)=>{
    const out=[],append=(text,unit)=>{
      const previous=out.at(-1)
      if(/^[，。；、！？：）」』】]+$/u.test(text)&&previous?.unit&&width(previous.text+text,size,tracking)<=w*.75){previous.text+=text;return}
      out.push({text,unit:unit&&width(text,size,tracking)<=w*.75})
    }
    const words=text=>{if(segmenter)for(const part of segmenter.segment(text))append(part.segment,part.isWordLike);else append(text,false)}
    let at=0
    for(const match of value.matchAll(/\d+(?:\.\d+)?(?:[–—~-]\d+(?:\.\d+)?)?[ \t]*(?:分鐘|小時|公里|公尺|分|站|天|晚)/g)){
      words(value.slice(at,match.index));append(match[0],true);at=match.index+match[0].length
    }
    words(value.slice(at));return out
  }
  const lineCount=(words,w,size,tracking=0)=>{
    let lines=1,used=0
    for(const word of words)for(const chunk of word.unit?[word.text]:[...word.text]){
      if(chunk==='\n'){lines++;used=0;continue}if(chunk==='\r')continue
      const n=width(chunk,size,tracking);if(used&&used+n>w){lines++;used=0}used+=n
    }
    return lines
  }
  const field=(key,def,w,size,tracking=0)=>{
    const value=String(c.tx(key,def??'')),words=parts(value,w,size,tracking)
    return{key,def:def??'',value,words,lines:value?lineCount(words,w,size,tracking):0}
  }
  const edit=f=>{
    const body=f.words.map(word=>word.unit?`<span class="caps-word">${U.esc(word.text)}</span>`:U.esc(word.text)).join('')
    return c.ed(f.key,f.def).replace('>'+U.esc(f.value)+'</span>',()=> '>'+body+'</span>')
  }
  const titleSize=U.fit(c.tx('h',p.title||''),TW*2,80,48),title=field('h',p.title||'',TW,titleSize)
  const english=field('en',p.en||'',TW,28,1.12),sub=field('k',p.sub||'景點介紹',TW,28)
  const tags=(p.tags||[]).map((value,i)=>{
    const text=String(c.tx('tg'+i,value)),natural=Math.max(0,...text.split(/\r?\n/).map(line=>width(line,28)))
    const w=Math.min(TW,Math.ceil(natural)+38),f=field('tg'+i,value,w-36,28)
    return{f,w,h:Math.max(1,f.lines)*28*1.4+12}
  })
  let tagHeight=0,rowWidth=0,rowHeight=0
  for(const tag of tags){if(rowWidth&&rowWidth+12+tag.w>TW){tagHeight+=rowHeight+12;rowWidth=0;rowHeight=0}rowWidth+=(rowWidth?12:0)+tag.w;rowHeight=Math.max(rowHeight,tag.h)}
  tagHeight+=rowHeight
  const fixed=title.lines*titleSize*1.2+(english.value?12+english.lines*28*1.45:0)+(sub.value?18+sub.lines*28*1.45:0)+(tags.length?28+tagHeight:0)
  let bodySize=30,body=field('b',p.body||'',TW,bodySize)
  const used=()=>fixed+(body.value?32+body.lines*bodySize*1.65:0)
  while(bodySize>28&&used()>available)body=field('b',p.body||'',TW,--bodySize)
  const exceeded=used()>available,top=100+Math.max(0,(available-used())/2),muted=hasPhoto?'rgba(255,255,255,.88)':'var(--ink)',secondary=hasPhoto?'rgba(255,255,255,.82)':'var(--ink)'
  let photos=''
  if(hasPhoto){
    photos=`<img class="ab hero" src="${U.esc(im)}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover;filter:brightness(.4) saturate(.8) blur(2px)"><div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(8,12,14,.55),rgba(8,12,14,0) 55%)"></div>`
    for(let i=0;i<k;i++){
      const h=Math.round(900*HS[i%7]),t=Math.max(70,Math.min(1010-h,540-h/2+OF[i%7])),x=x0+i*(cw+gap),right=1920-x-cw,bottom=1080-t-h
      photos+=one?`<img class="ab caps-window" src="${U.esc(im)}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover;clip-path:inset(${t}px ${right}px ${bottom}px ${x}px round ${cw/2}px);--caps-top:${t}px;--caps-bottom:${bottom}px;--caps-right:${right}px;--caps-left:${x}px;--caps-radius:${cw/2}px;--caps-start-top:${t+h*.1}px;--caps-start-bottom:${bottom+h*.1}px;--i:${i}">`
        :`<img class="ab caps-photo" src="${U.esc(ims[i])}" alt="" style="left:${x}px;top:${t}px;width:${cw}px;height:${h}px;object-fit:cover;border-radius:${cw/2}px;--i:${i}">`
    }
  }
  return `<style>
    .t-spot.v-capsule .caps-word{display:inline-block;max-width:100%;white-space:pre-wrap;word-break:keep-all;overflow-wrap:anywhere;vertical-align:top}
    .t-spot.v-capsule .caps-copy{overflow-wrap:anywhere}
    .t-spot.v-capsule .caps-copy [data-k]{white-space:pre-wrap}
    .t-spot.v-capsule .caps-window{animation:capsule-open .65s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--i)*45ms)}
    .t-spot.v-capsule .caps-photo{animation:capsule-reveal .55s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--i)*45ms)}
    @keyframes capsule-open{from{clip-path:inset(var(--caps-start-top) var(--caps-right) var(--caps-start-bottom) var(--caps-left) round var(--caps-radius))}to{clip-path:inset(var(--caps-top) var(--caps-right) var(--caps-bottom) var(--caps-left) round var(--caps-radius))}}
    @keyframes capsule-reveal{from{opacity:.45}to{opacity:1}}
    @media(prefers-reduced-motion:reduce){.t-spot.v-capsule .caps-window,.t-spot.v-capsule .caps-photo{animation:none!important}}
    @media print{.t-spot.v-capsule .caps-window,.t-spot.v-capsule .caps-photo{animation:none!important}}
  </style><div data-typography="capsule" data-capacity="${exceeded?'exceeded':'fit'}" data-content-height="${used()}" data-available-height="${available}" data-text-width="${TW}" data-body-size="${bodySize}"></div>${photos}
    <div class="ab caps-copy" style="left:${X}px;top:${top}px;width:${TW}px;color:${hasPhoto?'#fff':'var(--ink)'}">
      <div class="serif" style="font-size:${titleSize}px;line-height:1.2;text-wrap:balance">${edit(title)}</div>${english.value?`<div style="font-size:28px;line-height:1.45;letter-spacing:.04em;color:${secondary};margin-top:12px">${edit(english)}</div>`:''}${sub.value?`<div style="font-size:28px;line-height:1.45;color:${hasPhoto?'var(--acc3)':'var(--acc)'};margin-top:18px">${edit(sub)}</div>`:''}
      <div style="font-size:${bodySize}px;line-height:1.65;margin-top:${body.value?32:0}px;color:${muted}">${edit(body)}</div>${tags.length?`<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:28px">${tags.map(tag=>`<span style="width:${tag.w}px;max-width:100%;box-sizing:border-box;flex-shrink:0;${hasPhoto?'background:rgba(255,255,255,.12);':''}border-radius:99px;padding:6px 18px;font-size:28px;line-height:1.4">${edit(tag.f)}</span>`).join('')}</div>`:''}</div>`
} }) }

/* variants/spot/caption-exhibit.js */
// spot／caption-exhibit：錯落照片展頁，每張照片與名稱、圖說同屬一個 figure，適用 1～3 項
// 學自 收藏庫創意下一批-20261103／單-18／README.md：照片、場所名稱、圖說維持同筆關係；依母片契約重寫
{ const U = M.util
M.add('spot', 'caption-exhibit', { name: '照片圖說展頁', range: [1, 3], html: c => {
  const p = c.p, n = c.n, gap = 32, usable = 1680 - gap * (n - 1)
  const mainW = n === 1 ? usable : usable * (n + 1) / (2 * n)
  const sideW = n > 1 ? (usable - mainW) / (n - 1) : 0
  const clean = s => String(s || '').replace(/[，。,.]+$/u, '')
  const bodySize = (key, value, width, height, base) => {
    let size = base
    while (size > 20 && Math.ceil(U.len(c.tx(key, value)) * size * 1.06 / width) * size * 1.6 > height) size--
    return size
  }
  return `<style>
    .v-caption-exhibit{background:var(--paper);color:var(--ink)}
    .v-caption-exhibit .ce-figure{margin:0;position:absolute;top:80px;height:920px}
    .v-caption-exhibit .ce-image{display:block;width:100%;object-fit:cover;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent)}
    .v-caption-exhibit .ce-caption{position:absolute;top:680px;width:100%;border-top:2px solid var(--acc);padding-top:24px}
    .v-caption-exhibit .ce-cut{animation-name:spot-caption-exhibit-cut;animation-duration:.65s}
    @keyframes spot-caption-exhibit-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-caption-exhibit .in{animation:none!important}}
  </style>
  ${c.items.map((item, i) => {
    const first = i === 0, w = first ? mainW : sideW
    const x = first ? 120 : 120 + mainW + gap + (i - 1) * (sideW + gap)
    const inset = i * 96, photoH = 656 - inset
    const title = first ? p.title : item.t, titleKey = first ? 'h' : 't' + i
    const body = first ? (item.body || p.body) : item.body, bodyKey = first && !item.body ? 'b' : 'b' + i
    const sub = first ? p.sub : item.sub, subKey = first ? 'k' : 's' + i
    const img = item.img || (first ? p.img : '')
    const titleW = n === 1 ? 688 : w, bodyW = n === 1 ? 880 : w
    const tf = U.fit(c.tx(titleKey, title || ''), titleW, first ? 76 : 39, first ? 39 : 25)
    const bf = bodySize(bodyKey, body || '', bodyW, n === 1 ? 192 : 144, first ? 25 : 20)
    return `<figure class="ce-figure in" style="left:${x}px;width:${w}px;--i:${i}">
      <div class="in ce-cut" style="margin-top:${inset}px;height:${photoH}px;--i:${i}">${img ? `<img class="ce-image${first ? ' hero' : ''}" src="${U.esc(img)}" alt="" style="height:100%">` : ''}</div>
      <figcaption class="ce-caption" style="display:grid;grid-template-columns:${n === 1 ? '688px 1fr' : '1fr'};gap:${n === 1 ? 112 : 16}px">
        <div>
          ${sub ? `<div style="font-size:20px;line-height:1.25;color:var(--acc);margin-bottom:8px">${c.ed(subKey, clean(sub))}</div>` : ''}
          ${title ? `<div class="serif" style="font-size:${tf}px;line-height:1.2;text-wrap:balance">${c.ed(titleKey, clean(title))}</div>` : ''}
          ${first && p.en && n === 1 ? `<div style="font-size:20px;line-height:1.4;margin-top:8px">${c.ed('en', clean(p.en))}</div>` : ''}
        </div>
        ${body ? `<p style="font-size:${bf}px;line-height:1.6;margin:0;text-wrap:pretty">${c.ed(bodyKey, clean(body))}</p>` : ''}
      </figcaption>
    </figure>`
  }).join('')}`
} }) }

/* variants/spot/compare.js */
// 沿用 T06 onEnter + AbortSignal，照片編輯時讓回 core 的焦點拖曳
{ const U = M.util, clean = s => String(s || '').replace(/[，。；、,.!?！？]+$/u, '')
M.add('spot', 'compare', { needs: (p, m, it) => new Set(it.map(x => x.img).filter(Boolean)).size >= 2 ? '' : '兩張不同的照片', name: '雙照滑動比較', auto: false, range: [1, 2], html: c => {
  const pics = c.items.slice(0, 2).map((it, i) => ({ ...it, i })).filter(it => it.img)
  const pair = pics.length === 2 && pics[0].img !== pics[1].img
  const p = c.p
  return `<style>
${p.motion?.compareReveal ? `.v-compare .cmp-frame img:first-child{animation:cmp-left .9s cubic-bezier(.76,0,.24,1) both}.v-compare .cmp-second{animation:cmp-right .9s cubic-bezier(.76,0,.24,1) both}@keyframes cmp-left{from{clip-path:inset(0 0 0 100%)}to{clip-path:inset(0)}}@keyframes cmp-right{from{clip-path:inset(0 100% 0 var(--split))}to{clip-path:inset(0 0 0 var(--split))}}.edit .v-compare img{animation:none!important}` : ''}
.v-compare{background:var(--paper);color:var(--ink)}
.v-compare .cmp-frame{position:absolute;inset:0 0 auto;height:740px;overflow:hidden;background:var(--ink);--split:50%}
.v-compare .cmp-frame img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;user-select:none}
.v-compare .cmp-second{clip-path:inset(0 0 0 var(--split))}
.v-compare .cmp-frame[data-pair]{cursor:ew-resize;touch-action:pan-y}
.v-compare .cmp-line{position:absolute;top:0;bottom:0;left:var(--split);width:2px;background:var(--paper);transform:translateX(-50%);pointer-events:none;box-shadow:2px 0 12px #0008}
.v-compare .cmp-handle{position:absolute;left:var(--split);top:50%;transform:translate(-50%,-50%);width:80px;height:80px;border:2px solid var(--paper);border-radius:50%;background:var(--ink);color:var(--paper);cursor:ew-resize;padding:0;touch-action:none;box-shadow:0 8px 24px #0005}
.v-compare .cmp-handle::before,.v-compare .cmp-handle::after{content:"";position:absolute;top:29px;width:16px;height:16px;border-top:2px solid currentColor;border-left:2px solid currentColor}
.v-compare .cmp-handle::before{left:17px;transform:rotate(-45deg)}
.v-compare .cmp-handle::after{right:17px;transform:rotate(135deg)}
.v-compare .cmp-handle:hover{background:var(--acc)}
.v-compare .cmp-handle:focus-visible{outline:5px solid var(--acc3);outline-offset:5px}
.v-compare .cmp-label{position:absolute;top:44px;max-width:650px;padding:14px 24px;background:var(--paper);color:var(--ink);font-size:26px;line-height:1.4}
.v-compare .cmp-label-a{left:120px}.v-compare .cmp-label-b{right:120px}
.v-compare .cmp-title{position:absolute;left:120px;top:790px;width:640px;line-height:1.22;text-wrap:balance}
.v-compare .cmp-copy{position:absolute;left:850px;right:120px;top:786px;bottom:48px;display:flex;flex-direction:column;justify-content:space-between;gap:20px}
.v-compare .cmp-body{font-size:28px;line-height:1.7}.v-compare .cmp-help{font-size:22px;color:var(--acc);border-top:1px solid var(--line);padding-top:18px}
.edit .v-compare .cmp-frame[data-pair]{cursor:grab;touch-action:none}
.edit .v-compare .cmp-handle{display:none}
@media(prefers-reduced-motion:reduce){.v-compare *{animation:none!important;transition:none!important}}
</style>
<div class="cmp-frame" ${pair ? 'data-pair' : ''}>
${pics.slice(0, pair ? 2 : 1).map((it, i) => `<img class="${i ? 'cmp-second' : 'hero'}" src="${U.esc(it.img)}" alt="" draggable="false">`).join('')}
${pair ? `<div class="cmp-line"></div><button type="button" class="cmp-handle" role="slider" aria-label="${U.esc(c.tx('compare-help', '拖動分界線比較照片'))}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-orientation="horizontal"></button>
${pics.map((it, i) => `<div class="cmp-label cmp-label-${i ? 'b' : 'a'}">${c.ed('it' + it.i, clean(it.t) || (i ? 'B' : 'A'))}</div>`).join('')}` : ''}
</div>
<div class="cmp-title serif" style="font-size:${U.fit(c.tx('h', p.title || ''), 1280, 76, 32)}px">${c.ed('h', clean(p.title))}</div>
<div class="cmp-copy">${p.body ? `<div class="cmp-body">${c.ed('b', clean(p.body))}</div>` : '<div></div>'}
${pair ? `<div class="cmp-help">${c.ed('compare-help', '拖動分界線比較照片')}</div>` : ''}</div>`
}, onEnter(root, c, { signal }) {
  const frame = root.querySelector('[data-pair]'), handle = root.querySelector('.cmp-handle')
  if (!frame || !handle) return
  // Missing/broken photos must never leave a draggable empty half.
  const photos = [...frame.querySelectorAll('img')]
  const degrade = () => {
    if (signal.aborted) return
    const good = photos.find(im => !(im.complete && !im.naturalWidth))
    photos.forEach(im => { im.hidden = im !== good; im.style.display = im === good ? 'block' : 'none'; im.style.clipPath = 'none' })
    root.querySelectorAll('.cmp-handle,.cmp-line,.cmp-label,.cmp-help').forEach(el => { el.hidden = true })
    frame.removeAttribute('data-pair')
    stop()
  }
  let pointer = null, value = 50
  const stop = () => { const id = pointer; pointer = null; if (id !== null && frame.hasPointerCapture(id)) frame.releasePointerCapture(id) }
  const set = n => { value = Math.max(0, Math.min(100, n)); frame.style.setProperty('--split', value + '%'); handle.setAttribute('aria-valuenow', String(Math.round(value))) }
  const fromPoint = e => { const r = frame.getBoundingClientRect(); if (r.width) set((e.clientX - r.left) / r.width * 100) }
  photos.forEach(im => { im.addEventListener('error', degrade, { signal }); if (im.complete && !im.naturalWidth) degrade() })
  if (M.edit.on) { handle.disabled = true; return }
  frame.addEventListener('pointerdown', e => {
    if (!frame.hasAttribute('data-pair') || e.button !== 0 || !e.isPrimary || e.target.isContentEditable) return
    e.preventDefault(); e.stopPropagation(); pointer = e.pointerId
    // c.ed blur rebuilds the entire slide; keep an active text edit alive during this drag.
    if (!document.activeElement?.isContentEditable) handle.focus({ preventScroll: true })
    frame.setPointerCapture(pointer); fromPoint(e)
  }, { signal })
  frame.addEventListener('pointermove', e => { if (e.pointerId === pointer) { e.preventDefault(); fromPoint(e) } }, { signal })
  ;['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => frame.addEventListener(type, e => { if (e.pointerId === pointer) stop() }, { signal }))
  handle.addEventListener('keydown', e => {
    const next = { ArrowLeft: value - 2, ArrowRight: value + 2, ArrowDown: value - 2, ArrowUp: value + 2, PageDown: value - 10, PageUp: value + 10, Home: 0, End: 100 }[e.key]
    if (next === undefined) return
    e.preventDefault(); e.stopPropagation(); set(next)
  }, { signal })
  frame.addEventListener('click', e => e.stopPropagation(), { signal })
  window.addEventListener('blur', stop, { signal })
  signal.addEventListener('abort', stop, { once: true })
  return stop
} }) }

/* variants/spot/experience-window.js */
// spot／experience-window：直排篇名、中央觀景窗與側邊體驗手記，適用 1～3 項
// 學自 收藏庫創意下一批-20261103／單-10／觀景列車樣頁.html：先看景，再讀體驗，實用資訊分開；依母片契約重寫
{ const U = M.util
M.add('spot', 'experience-window', { name: '觀景手記', range: [1, 3], html: c => {
  const p = c.p, clean = s => String(s || '').replace(/[，。,.]+$/u, '')
  const hero = c.items[0]?.img || p.img || c.meta.hero
  const details = c.n > 1 ? c.items.slice(1) : (hero ? [{ img: hero }] : [])
  const gap = 24, detailH = details.length ? (352 - gap * (details.length - 1)) / details.length : 0
  const title = clean(p.title), body = clean(p.body), titleSize = U.fit(c.tx('h', title), 790, 100, 32)
  let bodySize = 26
  while (bodySize > 20 && Math.ceil(U.len(c.tx('b', body)) * bodySize * 1.04 / 320) * bodySize * 1.65 > 410) bodySize--
  return `<style>
    .v-experience-window{background:var(--paper);color:var(--ink)}
    .v-experience-window .ew-photo{object-fit:cover;border-radius:14px}
    .v-experience-window .ew-cut{animation-name:spot-experience-window-cut;animation-duration:.7s}
    .v-experience-window .ew-copy{font-size:${bodySize}px;line-height:1.65;text-wrap:pretty}
    @keyframes spot-experience-window-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-experience-window .in{animation:none!important}}
  </style>
  <div class="ab serif in" style="left:120px;top:80px;width:216px;height:790px;writing-mode:vertical-rl;font-size:${titleSize}px;line-height:1.2;--i:1">${c.ed('h', title)}</div>
  ${p.sub ? `<div class="ab in" style="left:120px;top:944px;width:216px;font-size:24px;color:var(--acc);border-top:1px solid var(--acc);padding-top:20px;--i:1">${c.ed('k', clean(p.sub))}</div>` : ''}
  ${hero ? `<img class="ab hero in ew-photo ew-cut" src="${U.esc(hero)}" alt="" style="left:392px;top:80px;width:1032px;height:864px;box-shadow:0 16px 32px color-mix(in srgb,var(--ink) 14%,transparent);--i:0">` : ''}
  ${p.en ? `<div class="ab in" style="left:392px;top:972px;width:1032px;font-size:20px;line-height:1.4;letter-spacing:.1em;--i:1">${c.ed('en', clean(p.en))}</div>` : ''}
  <div class="ab in" style="left:1480px;top:80px;width:320px;--i:1">
    ${p.tags?.length ? `<div style="display:flex;flex-wrap:wrap;gap:8px 18px;font-size:20px;line-height:1.5;color:var(--acc);padding-bottom:24px;border-bottom:1px solid var(--acc)">${p.tags.map((t, i) => `<span>${c.ed('tg' + i, clean(t))}</span>`).join('')}</div>` : ''}
    ${body ? `<p class="ew-copy" style="margin:24px 0 0">${c.ed('b', body)}</p>` : ''}
  </div>
  <div class="ab" style="left:1480px;top:592px;width:320px;height:352px;display:flex;flex-direction:column;gap:${gap}px">
    ${details.map((item, i) => `<div class="in" style="height:${detailH}px;position:relative;--i:${i + 2}">
      ${item.img ? `<img class="ew-photo" src="${U.esc(item.img)}" alt="" style="width:320px;height:${detailH}px;object-position:${c.n === 1 ? '70% 65%' : '50% 50%'}">` : ''}
      ${item.t ? `<div style="position:absolute;bottom:0;left:0;max-width:100%;padding:8px 12px;background:var(--paper);font-size:${U.fit(c.tx('t' + (i + 1), item.t), 296, 22, 16)}px;line-height:1.3">${c.ed('t' + (i + 1), clean(item.t))}</div>` : ''}
    </div>`).join('')}
  </div>`
} }) }

/* variants/spot/feature-callout.js */
// 引線只連主照片外框，不宣稱照片中未提供座標的物件位置
{ const U=M.util
M.add('spot','feature-callout',{name:'主景發散標註',auto:false,needs:(p,m,it)=>it.some(x=>x.t||x.body)?'':'標註文字（items 的 t/body）',range:[1,6],html:c=>{
  const photo=c.p.img!==undefined?c.p.img:c.items.find(it=>it.img)?.img,hasPhoto=typeof photo==='string'&&photo.trim()&&!/^(null|undefined)$/i.test(photo.trim())
  const leftCount=Math.ceil(c.n/2),w=hasPhoto?400:760
  return `<style>.v-feature-callout{background:var(--paper);color:var(--ink)}.v-feature-callout .fc-label{overflow-wrap:anywhere}.v-feature-callout [data-k]{white-space:pre-wrap}.v-feature-callout .fc-wire{height:1px;background:var(--acc);transform-origin:left center}.v-feature-callout .fc-photo{border-radius:50%;overflow:hidden}.v-feature-callout .fc-photo img{width:100%;height:100%;object-fit:cover}.v-feature-callout .fc-copy{font-size:28px;line-height:1.5;margin-top:18px}.v-feature-callout .fc-title{font-size:36px;line-height:1.3}</style>
  <div class="ab serif" style="left:120px;top:80px;width:1680px;font-size:${U.fit(c.tx('h',c.p.title||''),1680,72,48)}px;line-height:1.25">${c.ed('h',c.p.title||'')}</div>
  ${hasPhoto?`<figure class="ab fc-photo" style="left:660px;top:260px;width:600px;height:600px;margin:0"><img class="hero" src="${U.esc(photo)}" alt=""></figure>`:''}
  ${c.items.map((it,i)=>{const right=i>=leftCount,j=right?i-leftCount:i,count=right?c.n-leftCount:leftCount,cell=660/count,y=240+j*cell+cell/2-70,x=right?(hasPhoto?1400:1040):120,anchorY=y+60,edgeY=560+(anchorY-560)*.7,dx=120,dy=right?anchorY-edgeY:edgeY-anchorY
    return `${hasPhoto?`<div class="ab fc-wire" aria-hidden="true" style="left:${right?1260:540}px;top:${right?edgeY:anchorY}px;width:${Math.hypot(dx,dy)}px;transform:rotate(${Math.atan2(dy,dx)*180/Math.PI}deg)"></div>`:''}<article class="ab fc-label" style="left:${x}px;top:${y}px;width:${w}px;min-height:${cell-28}px;${right?'':'text-align:right'}"><h3 class="serif fc-title" style="font-size:${U.fit(c.tx('it'+i,it.t||''),w*2,36,28)}px">${c.ed('it'+i,it.t||'')}</h3>${it.body?`<div class="fc-copy">${c.ed('body'+i,it.body)}</div>`:''}</article>`}).join('')}
  ${c.p.body?`<div class="ab" style="left:120px;top:948px;width:1680px;font-size:28px;line-height:1.5">${c.ed('b',c.p.body)}</div>`:''}`
}}) }

/* variants/spot/filltext.js */
// spot／filltext：照片滿版，右側白色漸層讓出版面，景點名用「照片填字」做成巨大標題（字形裡就是照片），下接介紹
// 學自小紅書 69317b66000000000d03e872（合併形狀－相交：照片填進標題字）
// 字裡填第 2 張照片（只有 1 張就填同一張、整張縮進字框）；照片 3～7 張時其餘排在左下一列
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
const split = s => { const a = [...s]; if (U.len(s) <= 4.5) return [s]
  const sp = a.map((ch, i) => ch === ' ' ? i : -1).filter(i => i > 0), mid = a.length / 2
  const at = sp.length ? sp.reduce((m, i) => Math.abs(i - mid) < Math.abs(m - mid) ? i : m) : Math.ceil(mid)
  return [a.slice(0, at).join('').trim(), a.slice(at).join('').trim()] }
M.add('spot', 'filltext', { name: '照片填字標題', range: [1, 7], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, fill = ims[1] || im, more = ims.slice(2), k = more.length
  const W = 780, X = 1020, T = c.tx('h', p.title || ''), L = split(T), fs = Math.round(Math.min(250, W / (Math.max(...L.map(U.len)) * 1.04))), H = Math.round(L.length * fs * 1.08 + fs * .12)
  const bf = fsb(c.tx('b', p.body || ''), W, 1080 - 180 - H - 200, 28, 21)
  const tw = k ? Math.min(220, (800 - 14 * (k - 1)) / k) : 0
  return `<img class="ab hero" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
    <div class="ab" style="right:0;top:0;width:1260px;height:1080px;background:linear-gradient(270deg,#fbfaf7 0,#fbfaf7 70%,rgba(251,250,247,.86) 80%,rgba(251,250,247,0) 100%)"></div>
    <div class="ab in" style="left:${X}px;top:90px;width:${W}px;height:900px;display:flex;flex-direction:column;justify-content:center;--i:1">
      <div class="kick">${c.ed('k', p.sub || '景點介紹')}</div>
      <div style="position:relative;width:${W}px;height:${H}px;margin-top:14px">
        <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="display:block;overflow:visible"><defs><clipPath id="spot-filltext-c">${L.map((l, i) => `<text x="-4" y="${Math.round(fs * (.9 + i * 1.08))}" font-size="${fs}" font-weight="900" style="font-family:var(--serif)">${U.esc(l)}</text>`).join('')}</clipPath></defs>
          ${L.map((l, i) => `<text x="-4" y="${Math.round(fs * (.9 + i * 1.08))}" font-size="${fs}" font-weight="900" style="font-family:var(--serif)" fill="var(--ink)">${U.esc(l)}</text>`).join('')}
          <image href="${fill}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice" clip-path="url(#spot-filltext-c)" style="filter:saturate(1.2) contrast(1.08)"/></svg>
        <div style="position:absolute;inset:0;font:900 ${Math.min(U.fit(T, W, fs, 18), Math.round(H * .6))}px/${H}px var(--serif);white-space:nowrap;color:transparent;caret-color:var(--ink)">${c.ed('h', p.title)}</div></div>
      ${p.en ? `<div style="font-size:20px;letter-spacing:.34em;color:var(--mute);margin-top:18px">${c.ed('en', p.en)}</div>` : ''}
      <div style="width:64px;height:3px;background:var(--acc);margin:30px 0 0"></div>
      <p style="font-size:${bf}px;line-height:1.8;margin:26px 0 0;color:#3d4347">${c.ed('b', p.body || '')}</p>
      ${(p.tags || []).length ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:24px">${p.tags.map((t, i) => `<span style="background:var(--acc);color:#fff;padding:5px 16px;font-size:18px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>` +
    more.map((u, i) => `<img class="ab in" src="${u}" alt="" style="left:${120 + i * (tw + 14)}px;top:${1000 - (k <= 2 ? 200 : 150)}px;width:${tw}px;height:${k <= 2 ? 200 : 150}px;object-fit:cover;border:5px solid #fff;box-shadow:0 12px 30px rgba(0,0,0,.28);--i:${i + 3}">`).join('') } }) }

/* variants/spot/frost.js */
// spot／frost：同一張照片左側霧面玻璃欄（高斯模糊＋顆粒）放字、右側清楚實景、右緣直排英文地名
// 學自小紅書 68b94d3d000000001d021eb0（霧面玻璃分割）＋6a6717b6000000000301fb4b（模糊＋膠片顆粒欄）
// 照片 2～7 張：第 1 張當整頁，其餘排成右下一列小圖（張數多就變窄、變矮）
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
M.add('spot', 'frost', { name: '霧面玻璃欄', range: [1, 7], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, more = ims.slice(1), k = more.length
  const PW = 760, TW = 520, tf = U.fit(c.tx('h', p.title), TW, 76, 40), bf = fsb(c.tx('b', p.body || ''), TW, 470, 30, 22)
  const tw = k ? Math.min(280, (880 - 16 * (k - 1)) / k) : 0, th = k <= 3 ? 200 : 150, tx0 = 1760 - (k * tw + 16 * (k - 1))
  return `<img class="ab hero" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
    <div class="ab" style="left:0;top:0;width:${PW}px;height:1080px;overflow:hidden;box-shadow:18px 0 50px rgba(0,0,0,.28)">
      <img class="ab" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover;filter:blur(38px) saturate(1.15);transform:scale(1.12);transform-origin:960px 540px">
      <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(14,18,20,.42),rgba(14,18,20,.26) 45%,rgba(14,18,20,.5))"></div>
      <svg class="ab" style="inset:0;width:${PW}px;height:1080px;opacity:.22;mix-blend-mode:overlay"><filter id="spot-frost-g"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#spot-frost-g)"/></svg>
      <div class="ab" style="right:0;top:0;width:1px;height:1080px;background:rgba(255,255,255,.35)"></div></div>
    <div class="ab in" style="left:120px;top:110px;width:${TW}px;height:860px;display:flex;flex-direction:column;justify-content:center;color:#fff;--i:1">
      <div class="kick" style="color:#fff;opacity:.8;font-size:22px">${c.ed('k', p.sub || '景點介紹')}</div>
      <div style="width:56px;height:3px;background:#fff;margin:22px 0 26px"></div>
      <div class="serif" style="font-size:${tf}px;line-height:1.2;text-shadow:0 2px 18px rgba(0,0,0,.25)">${c.ed('h', p.title)}</div>
      <p style="font-size:${bf}px;line-height:1.8;margin:30px 0 0;color:rgba(255,255,255,.92)">${c.ed('b', p.body || '')}</p>
      ${(p.tags || []).length ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:30px">${p.tags.map((t, i) => `<span style="border:1px solid rgba(255,255,255,.6);border-radius:99px;padding:6px 18px;font-size:18px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>
    ${p.en ? `<div class="ab in" style="right:52px;top:110px;height:${k ? 620 : 860}px;writing-mode:vertical-rl;font-size:${Math.min(24, Math.floor((k ? 620 : 860) / (U.len(c.tx('en', p.en)) * 1.9 + 1)))}px;letter-spacing:.42em;color:#fff;text-shadow:0 1px 12px rgba(0,0,0,.45);--i:2">${c.ed('en', p.en)}</div>` : ''}` +
    more.map((u, i) => `<img class="ab in" src="${u}" alt="" style="left:${tx0 + i * (tw + 16)}px;top:${1000 - th}px;width:${tw}px;height:${th}px;object-fit:cover;border:5px solid #fff;box-shadow:0 12px 30px rgba(0,0,0,.3);--i:${i + 3}">`).join('') } }) }

/* variants/spot/hero.js */
// spot／hero：景點介紹，1 張照片＝滿版右側＋左文字（照片 1～7 張時其餘排成下方小圖）
{ const U = M.util
M.add('spot', 'hero', { name: '大照片＋介紹', range: [1, 7], html: c => {
  const p=c.p,ims=c.items.map(x=>x.img).filter(x=>typeof x==='string'&&x.trim()&&!/^(undefined|null)$/i.test(x.trim())),more=ims.slice(1)
  const width=ims.length?660:1200,left=ims.length?120:360,bodySize=32,small=28
  const lines=(s,w,size)=>String(s??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.06/w)),0)
  const title=c.tx('h',p.title),titleSize=U.fit(title,width*2,84,48),body=c.tx('b',p.body||''),kicker=c.tx('k',p.sub||'景點介紹'),en=c.tx('en',p.en||'')
  const tags=(p.tags||[]).map((t,i)=>c.tx('tag'+i,t))
  const used=(kicker?small*1.45+14:0)+lines(title,width,titleSize)*titleSize*1.2+(en?12+lines(en,width,small)*small*1.45:0)+(body?32+lines(body,width,bodySize)*bodySize*1.6:0)+(tags.length?32+24+tags.reduce((h,t)=>h+lines(t,width,small)*small*1.45,0)+(tags.length-1)*8:0)
  const bottom=more.length?724:980,w=more.length?(660-16*(more.length-1))/more.length:0
  return `<style>.v-hero .sh-copy{overflow-wrap:anywhere}.v-hero .sh-copy [data-k]{white-space:pre-wrap}.v-hero .sh-tags{border-top:1px solid var(--line);padding-top:24px;margin-top:32px;display:flex;flex-direction:column;gap:8px}</style>
    ${ims.length?`<div class="ab" style="left:860px;top:0;width:1060px;height:1080px;overflow:hidden"><img class="ab hero" src="${U.esc(ims[0])}" alt="" style="left:0;top:0;width:1060px;height:1080px;object-fit:cover"></div>`:''}
    <div class="ab in sh-copy" data-capacity="${used<=bottom-132?'fit':'exceeded'}" style="left:${left}px;top:132px;width:${width}px;--i:1">${kicker?`<div style="font-size:${small}px;line-height:1.45;color:var(--acc);margin-bottom:14px">${c.ed('k',p.sub||'景點介紹')}</div>`:''}
      <div class="serif" style="font-size:${titleSize}px;line-height:1.2">${c.ed('h',p.title)}</div>
      ${en?`<div style="font-size:${small}px;line-height:1.45;color:var(--mute);margin-top:12px">${c.ed('en',p.en||'')}</div>`:''}
      ${body?`<p style="font-size:${bodySize}px;line-height:1.6;margin:32px 0 0;color:var(--ink)">${c.ed('b',p.body||'')}</p>`:''}
      ${tags.length?`<div class="sh-tags" style="font-size:${small}px;line-height:1.45;color:var(--mute)">${tags.map((t,i)=>`<div>${c.ed('tag'+i,p.tags[i])}</div>`).join('')}</div>`:''}</div>`+
    more.map((u,i)=>`<img class="ab in" src="${U.esc(u)}" alt="" style="left:${120+i*(w+16)}px;top:780px;width:${w}px;height:200px;object-fit:cover;--i:${i+3}">`).join('') }, onEnter(root,c,{signal,presenting,reducedMotion}) {
  const mode=c.p.motion?.photoCamera,photo=root.querySelector('img.hero')
  if(!presenting||reducedMotion||M.edit.on||!photo||!photo.animate||root.ownerDocument.hidden||!['slowPush','tallPan'].includes(mode))return
  let animation
  const play=()=>{
    if(signal.aborted||!photo.naturalWidth)return
    const position=getComputedStyle(photo).objectPosition.split(' '),x=position[0]||'50%'
    if(mode==='tallPan'){
      const scale=Math.max(photo.clientWidth/photo.naturalWidth,photo.clientHeight/photo.naturalHeight)
      if(photo.naturalHeight*scale<=photo.clientHeight+2)return
      animation=photo.animate([{objectPosition:x+' 0%'},{objectPosition:x+' 100%'}],{duration:10000,easing:'ease-in-out',fill:'forwards'})
    }else animation=photo.animate([{transform:'scale(1)'},{transform:'scale(1.07)'}],{duration:10000,easing:'ease-out',fill:'forwards'})
  }
  const stop=()=>animation?.cancel()
  const preference=matchMedia('(prefers-reduced-motion: reduce)')
  preference.addEventListener('change',e=>{if(e.matches)stop()},{signal})
  if(photo.complete)play();else photo.addEventListener('load',play,{once:true,signal})
  root.ownerDocument.addEventListener('visibilitychange',()=>{if(root.ownerDocument.hidden)stop()},{signal})
  signal.addEventListener('abort',stop,{once:true});return stop
} }) }

/* variants/spot/monument-scale.js */
// spot/monument-scale · M047 · 視覺研究 v1（2026-11-03）
// 完整建築的高聳比例與遠處小人形成尺度反差；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('spot','monument-scale',{name:'巨物全景・保留尺度',range:[1, 1],html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  const it=c.items[0]||{}
  const dim=meta.photoSizes?.[it.img||p.img]||it
  if(dim.w/dim.h>1.4)return `<div style="position:absolute;inset:0;background:var(--paper)"></div>`+
    I(it.img||p.img,120,55,1680,690,'contain')+line(120,792,1680)+
    T('h',p.title||it.t,120,830,640,172,80,'font-family:var(--serif);font-weight:700;line-height:1.2')+
    T('k',p.sub,850,827,950,45,23,'color:var(--acc);letter-spacing:.12em')+
    T('b',p.body||it.body,850,888,950,140,29)
  return `<div style="position:absolute;inset:0;background:var(--paper)"></div>`+
    I(it.img||p.img,930,0,990,1080,'contain','background:var(--ink)')+
    T('k',p.sub,120,80,690,65,27,'color:var(--acc);letter-spacing:.14em')+
    T('h',p.title||it.t,120,260,690,300,112,'font-family:var(--serif);font-weight:700;line-height:1.18')+
    T('en',p.en,120,622,690,110,30,'color:var(--acc);letter-spacing:.10em')+
    line(120,794,690)+T('b',p.body||it.body,120,833,690,190,29)

}}) }

/* variants/spot/numeral.js */
// spot／numeral：照片滿版，左側對角圓角白板疊四層（30／50／70／95%）成紗幕，白板上下方挖出巨大鏤空數字（第幾天）透出照片、字在上方
// 學自小紅書 6a1832be00000000360181e2（巨數字鏤空＋白板紗幕）；數字取自 sub 的「DAY n」，沒有數字就挖標題第一個字
// 照片 2～7 張：第 1 張滿版，其餘直排在右緣
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
M.add('spot', 'numeral', { needs: p => /\d/.test(p.sub || '') ? '' : '副標裡的數字', name: '巨數字鏤空', range: [1, 7], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, more = ims.slice(1), k = more.length
  const d = (String(c.tx('k', p.sub || '')).match(/\d+/) || [])[0], glyph = d ? d.padStart(2, '0') : [...String(c.tx('h', p.title || '景'))][0]
  const TW = 660, tf = U.fit(c.tx('h', p.title), TW, 72, 40), bf = fsb(c.tx('b', p.body || ''), TW, 300, 28, 21)
  const tags = (p.tags || []).length, bl = Math.ceil(U.len(c.tx('b', p.body || '')) * bf * 1.04 / TW)
  const th = 52 + tf * 1.25 + (p.en ? 36 : 0) + 30 + bl * bf * 1.8 + (tags ? 70 : 0)
  const N = Math.round(Math.max(260, Math.min(520, (1080 - 110 - th - 70 - 70) / .8))), base = 985 - (d ? 0 : N * .12)
  const W = 880, R = 150, board = (w, o) => `<path d="M60,60 H${w - R} A${R},${R} 0 0 1 ${w},${60 + R} V1020 H${60 + R} A${R},${R} 0 0 1 60,${1020 - R} Z" fill="#fbfaf7" fill-opacity="${o}"/>`
  const th2 = k ? Math.min(250, (880 - 16 * (k - 1)) / k) : 0, ty0 = 540 - (k * th2 + 16 * (k - 1)) / 2
  return `<img class="ab hero" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
    <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
      <defs><mask id="spot-numeral-m" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080"><rect width="1920" height="1080" fill="#fff"/>
        <text x="108" y="${base}" font-size="${N}" font-weight="700" letter-spacing="-${N * .05}" style="font-family:var(--sans)" fill="#000">${U.esc(glyph)}</text></mask></defs>
      <g mask="url(#spot-numeral-m)">${board(W + 180, .3)}${board(W + 120, .5)}${board(W + 60, .7)}${board(W, .95)}</g>
      <text x="108" y="${base}" font-size="${N}" font-weight="700" letter-spacing="-${N * .05}" style="font-family:var(--sans)" fill="none" stroke="var(--acc)" stroke-width="2.5">${U.esc(glyph)}</text></svg>
    <div class="ab in" style="left:120px;top:110px;width:${TW}px;--i:1">
      <div class="kick">${c.ed('k', p.sub || '景點介紹')}</div>
      <div class="serif" style="font-size:${tf}px;line-height:1.2;margin-top:12px">${c.ed('h', p.title)}</div>
      ${p.en ? `<div style="font-size:18px;letter-spacing:.3em;color:var(--mute);margin-top:12px">${c.ed('en', p.en)}</div>` : ''}
      <p style="font-size:${bf}px;line-height:1.8;margin:26px 0 0;color:#3d4347">${c.ed('b', p.body || '')}</p>
      ${tags ? `<div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:24px">${p.tags.map((t, i) => `<span style="font-size:19px;color:var(--acc);border-bottom:2px solid var(--acc);padding-bottom:4px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>` +
    more.map((u, i) => `<img class="ab in" src="${u}" alt="" style="left:1560px;top:${ty0 + i * (th2 + 16)}px;width:240px;height:${th2}px;object-fit:cover;border:5px solid #fff;box-shadow:0 12px 30px rgba(0,0,0,.28);--i:${i + 3}">`).join('') } }) }

/* variants/spot/photo-portrait.js */
// spot/continuity: the chapter photograph opens into a tall editorial window.
{ const U = M.util, H = M.continuity
M.add('spot', 'photo-portrait', { name: '主景長窗', range: [1, 4], order: 1000, html: c => {
  const imgs = c.items.filter(x => x.img), main = c.p.img || imgs[0]?.img, rest = c.p.img ? imgs : imgs.slice(1)
  const w = rest.length ? (920 - (rest.length - 1) * 20) / rest.length : 0
  return H.style + H.photo(main, 0, 0, 1100, 1080, 0, true)
    + rest.map((x, i) => H.photo(x.img, 90 + i * (w + 20), 800, w, 210, 24)).join('')
    + H.title(c, 'h', c.p.title || '', '', 1220, 200, 580, 82)
    + `<div class="ct-copy" data-shared-copy style="left:1220px;top:100px;width:580px;font-size:22px;color:var(--acc)">${c.ed('sub', c.p.sub || '')}</div>
    <div class="ct-copy" data-shared-copy style="left:1220px;top:450px;width:580px;font-size:30px;line-height:1.8">${c.ed('body', c.p.body || '')}</div>
    <div class="ct-copy" data-shared-copy style="left:1220px;top:950px;width:580px;font-size:${U.fit(c.tx('en', c.p.en || ''), 580, 24, 16)}px;color:var(--acc)">${c.ed('en', H.clean(c.p.en))}</div>`
} }) }

/* variants/spot/photo-stage.js */
M.add('spot', 'photo-stage', M.photoStage)

/* variants/spot/showreel-kaleido.js */
// 原作 Mid.tsx 六瓣鏡射 → 真照片；一次進場、1.8秒後照片完整停住
{const U=M.util,X=M.srExtra;
M.add('spot','showreel-kaleido',{name:'宣傳片・萬花筒展照',auto:false,range:[1,1],html:c=>{const src=c.items[0]?.img||c.p.img,title=X.clean(c.p.title||c.items[0]?.t);
return `<style>.v-showreel-kaleido{background:var(--ink);color:var(--paper)}.sx-k-photo,.sx-k-canvas{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.sx-k-shade{position:absolute;inset:0;background:linear-gradient(0deg,#07121bed,transparent 72%)}.sx-k-copy{position:absolute;left:120px;right:120px;bottom:85px;display:grid;grid-template-columns:760px 1fr;gap:80px;align-items:end}.sx-k-copy h2{font:600 ${U.fit(c.tx('h',title),760,100,40)}px/1.25 var(--serif);margin:20px 0}.sx-k-copy p{font:28px/1.7 var(--sans);margin:0;text-wrap:pretty}.sx-k-eyebrow{font:24px/1.5 var(--sans)}</style>
${src?`<img class="hero sx-k-photo" src="${U.esc(src)}" alt=""><canvas class="sx-k-canvas" width="1920" height="1080" aria-hidden="true"></canvas>`:''}<div class="sx-k-shade"></div><div class="sx-k-copy"><div><div class="sx-k-eyebrow">${c.ed('sub',X.clean(c.p.sub))}</div><h2>${c.ed('h',title)}</h2><div class="sx-k-eyebrow">${c.ed('en',X.clean(c.p.en))}</div></div>${c.p.body?`<p>${c.ed('body',c.p.body)}</p>`:''}</div>`
},enter(root,c,state){let sequence=null,renderer=null,dead=false,finished=false;const img=root.querySelector('img'),canvas=root.querySelector('canvas'),copy=root.querySelector('.sx-k-copy');if(!img||!canvas)return;
const finish=()=>{finished=true;sequence?.finish();canvas.style.opacity='0';copy.style.opacity='1';copy.style.transform='none'};
if(state.settled||matchMedia('(prefers-reduced-motion:reduce)').matches){finish();return {finish,cleanup(){dead=true}}}
canvas.style.opacity='0';copy.style.opacity='0';img.decode().then(()=>{if(dead||finished)return;try{renderer=X.kaleido(canvas,img);if(!renderer){finish();return}sequence=X.animate(root,state,1900,t=>{renderer.draw(t);const p=Math.max(0,Math.min(1,(t-1450)/350));copy.style.opacity=String(p);copy.style.transform=`translateY(${(1-p)*20}px)`})}catch(e){root.dataset.sxFallback=String(e.message);finish()}}).catch(finish);
return {finish,cleanup(){dead=true;sequence?.cleanup();renderer?.dispose()}}
}})
}

/* variants/spot/slant.js */
// spot／slant：上方一條斜切分欄照片帶（平行四邊形），下方左標題、右介紹
// 學自小紅書 69f173bb0000000038021611（平行四邊形拆成斜切欄）＋68f2f4200000000003023c65（三欄斜切並排）
// 照片張數＝欄數；只有 1 張時切 3 欄、同一張照片對位
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
M.add('spot', 'slant', { name: '斜切分欄照片帶', range: [1, 7], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, one = ims.length <= 1
  const k = one ? 3 : ims.length, H = 620, s = 150, g = 7, X = j => j * 1920 / k
  let band = ''
  for (let i = 0; i < k; i++) {
    const l = i ? X(i) : -400, r = i < k - 1 ? X(i + 1) : 2320, gl = i ? g : 0, gr = i < k - 1 ? g : 0
    const bx = one ? 0 : Math.max(0, l - s / 2), bw = one ? 1920 : Math.min(1920, r + s / 2) - bx
    const points = [[l + s / 2 + gl, 0], [r + s / 2 - gr, 0], [r - s / 2 - gr, H], [l - s / 2 + gl, H]]
    // Multiple photos own independent frames. Preserve the original rounded-px
    // silhouette at first render, then let each diagonal follow its resized box.
    // The one-photo panoramic slices stay coupled and keep their original path.
    const pts = points.map(([x, y]) => one ? `${(x - bx).toFixed(1)}px ${y}px` : `${(+(x - bx).toFixed(1) / bw * 100).toFixed(6)}% ${y / H * 100}%`).join(',')
    band += `<img class="ab in${i ? '' : ' hero'}"${one ? '' : ' data-photo-shape="quad"'} src="${one ? im : ims[i]}" alt="" style="left:${bx}px;top:0;width:${bw}px;height:${H}px;object-fit:cover;clip-path:polygon(${pts});--i:${i + 1}">`
  }
  const LW = 640, RW = 900, tf = U.fit(c.tx('h', p.title), LW, 84, 44), tags = (p.tags || []).length
  const bf = fsb(c.tx('b', p.body || ''), RW, tags ? 230 : 290, 30, 22)
  return `${band}<div class="ab" style="left:0;top:${H}px;width:1920px;height:4px;background:linear-gradient(90deg,var(--acc) 0 33%,var(--acc2) 33% 66%,var(--acc3) 66%)"></div>
    <div class="ab in" style="left:120px;top:${H + 50}px;width:${LW}px;height:${1030 - H - 50}px;display:flex;flex-direction:column;justify-content:center;--i:${k + 1}">
      <div class="kick">${c.ed('k', p.sub || '景點介紹')}</div>
      <div class="serif" style="font-size:${tf}px;line-height:1.2;margin-top:14px">${c.ed('h', p.title)}</div>
      ${p.en ? `<div style="font-size:18px;letter-spacing:.3em;color:var(--mute);margin-top:14px">${c.ed('en', p.en)}</div>` : ''}</div>
    <div class="ab" style="left:840px;top:${H + 80}px;width:1px;height:${1000 - H - 80}px;background:var(--line)"></div>
    <div class="ab in" style="left:900px;top:${H + 50}px;width:${RW}px;height:${1030 - H - 50}px;display:flex;flex-direction:column;justify-content:center;--i:${k + 2}">
      <p style="font-size:${bf}px;line-height:1.8;margin:0;color:#3d4347">${c.ed('b', p.body || '')}</p>
      ${tags ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">${p.tags.map((t, i) => `<span style="background:#eef0ee;padding:6px 16px;font-size:18px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>` } }) }

/* variants/spot/torn.js */
// spot／torn：底圖淡化七成當紙，右半撕開一道不規則紙邊，撕口裡是原色照片，撕邊墊一層白紙＋陰影
// 學自小紅書 68e1f0d7000000000303be19（自由曲線撕裂邊＋白紙邊）＋695202fe00000000220238b1（撕紙版式）
// 照片 2～3 張：撕口裡再用橫向撕縫分成上下幾塊，一塊一張；撕邊形狀由景點名決定（每頁不同、重畫不變）
{ const U = M.util
const fsb = (s, w, h, max, min) => { for (let f = max; f >= min; f--) if (Math.ceil(U.len(s) * f * 1.04 / w) * f * 1.8 <= h) return f; return min }
const rng = seed => { let a = seed >>> 0; return () => ((a = (a * 1664525 + 1013904223) >>> 0) / 4294967296) }
M.add('spot', 'torn', { name: '撕紙開窗', range: [1, 3], html: c => {
  const p = c.p, ims = c.items.map(x => x.img).filter(Boolean), im = ims[0] || c.meta.hero, k = Math.max(1, ims.length)
  const R = rng([...String(p.title || 'x')].reduce((a, ch) => a * 31 + ch.codePointAt(0), 7)), ph = R() * 6
  const edge = [], seam = []
  for (let y = -20; y <= 1100; y += 12) edge.push([890 + 34 * Math.sin(y / 160 + ph) + (R() - .5) * 16, y])
  const cut = (y0, x0 = 860, x1 = 1940) => { const pts = []; for (let x = x0; x <= x1; x += 12) pts.push([x, y0 + 10 * Math.sin(x / 90 + ph) + (R() - .5) * 12]); return pts }
  for (let j = 1; j < k; j++) seam.push(cut(1080 * j / k))
  const ex = y => { let best = edge[0]; for (const e of edge) if (Math.abs(e[1] - y) < Math.abs(best[1] - y)) best = e; return best[0] }
  const poly = pts => pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(',')
  // 白紙邊：比撕口往左多 10～22px
  const white = poly([...edge.map(([x, y]) => [x - 12 - R() * 10, y]), [1940, 1100], [1940, -20]])
  let pieces = ''
  for (let j = 0; j < k; j++) {
    const top = j ? seam[j - 1].map(([x, y]) => [x, y + 9]) : null, bot = j < k - 1 ? seam[j] : null
    const y0 = j ? 1080 * j / k + 9 : -20, y1 = bot ? 1080 * (j + 1) / k : 1100
    const pts = [...edge.filter(([, y]) => y >= y0 && y <= y1),
      ...(bot ? bot.filter(([x]) => x > ex(y1) + 2) : []), [1940, bot ? bot[bot.length - 1][1] : 1100],
      [1940, top ? top[top.length - 1][1] : -20], ...(top ? top.filter(([x]) => x > ex(y0) + 2).reverse() : [])]
    const by = k === 1 ? 0 : Math.max(0, Math.floor(Math.min(...pts.map(q => q[1])))), bh = k === 1 ? 1080 : Math.min(1080, Math.ceil(Math.max(...pts.map(q => q[1])))) - by
    const bx = k === 1 ? 0 : 840
    pieces += `<img class="ab in${j ? '' : ' hero'}" src="${ims[j] || im}" alt="" style="left:${bx}px;top:${by}px;width:${1920 - bx}px;height:${bh}px;object-fit:cover;clip-path:polygon(${poly(pts.map(([x, y]) => [x - bx, y - by]))});--i:${j + 2}">`
  }
  const TW = 640, tf = U.fit(c.tx('h', p.title), TW, 80, 42), bf = fsb(c.tx('b', p.body || ''), TW, 420, 30, 22)
  return `<img class="ab" src="${im}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
    <div class="ab" style="inset:0;background:rgba(251,250,247,.8)"></div>
    <div class="ab" style="inset:0;filter:drop-shadow(-6px 4px 14px rgba(0,0,0,.22))"><div class="ab" style="inset:0;background:#fff;clip-path:polygon(${white})"></div></div>${pieces}
    <div class="ab in" style="left:120px;top:100px;width:${TW}px;height:880px;display:flex;flex-direction:column;justify-content:center;--i:1">
      <div class="kick">${c.ed('k', p.sub || '景點介紹')}</div>
      <div class="serif" style="font-size:${tf}px;line-height:1.2;margin-top:16px">${c.ed('h', p.title)}</div>
      ${p.en ? `<div style="font-size:18px;letter-spacing:.3em;color:var(--mute);margin-top:14px">${c.ed('en', p.en)}</div>` : ''}
      <p style="font-size:${bf}px;line-height:1.8;margin:32px 0 0;color:#353b3f">${c.ed('b', p.body || '')}</p>
      ${(p.tags || []).length ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:28px">${p.tags.map((t, i) => `<span style="border:1px solid var(--ink);padding:5px 16px;font-size:18px">${c.ed('tg' + i, t)}</span>`).join('')}</div>` : ''}</div>` } }) }

/* variants/spot/video.js */
M.add('spot', 'video', { needs: p => M.media.source(p.video) ? '' : '影片', name: '劇照點播', auto:false, range:[0,1], html:c => M.media.html(c), onEnter:(...args) => M.media.onEnter(...args) })

/* variants/spot/white-caption.js */
// spot/white-caption · M017 · 視覺研究 v1（2026-11-03）
// 影像完整而文字有自己的白紙，海水的冷與紙的暖互襯；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('spot','white-caption',{name:'完整照片・白紙圖說',range:[1, 1],html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  const it=c.items[0]||{},src=it.img||p.img
  return `<div style="position:absolute;inset:0;background:var(--paper)"></div>`+
    I(src,0,0,1180,1080,'contain','background:color-mix(in srgb,var(--ink) 5%,var(--paper))')+
    T('k',p.sub,1280,100,520,65,26,'color:var(--acc);letter-spacing:.15em')+
    T('h',p.title||it.t,1280,249,520,255,78,'font-family:var(--serif);font-weight:700;line-height:1.2')+
    T('en',p.en,1280,546,520,90,27,'color:var(--acc);letter-spacing:.07em')+line(1280,686,520)+
    T('b',p.body||it.body,1280,727,520,285,29)

}}) }

/* variants/spot/window-preserve.js */
// spot/window-preserve · M037：完整照片保留前景；標題與圖說留在照片之外。
// 缺圖釋回文字版心；過量保全文並標記，不以16px縮字假裝容納。
{ M.add('spot','window-preserve',{name:'窗景全幅・保留前景',range:[1,1],html:c=>{
  const U=M.util,p=c.p,it=c.items[0]||{},valid=v=>typeof v==='string'&&v.trim()&&!/^(null|undefined)$/i.test(v.trim())
  const src=valid(it.img)?it.img:valid(p.img)?p.img:null,hasPhoto=!!src
  const segmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh-TW',{granularity:'word'}):null
  const width=(s,size,tracking=0)=>[...s].reduce((n,ch)=>n+size*(/[MWmw@%]/.test(ch)?.96:/[A-Z]/.test(ch)?.76:/[\x00-\xff]/.test(ch)?.65:1)*1.06+tracking,0)
  const field=(key,def,w,size,lineHeight,tracking=0)=>{
    const value=String(c.tx(key,def??'')),words=[]
    const add=(text,unit)=>{const prev=words.at(-1);if(/^[，。；、！？：）」』】]+$/u.test(text)&&prev?.unit&&width(prev.text+text,size,tracking)<w*.75){prev.text+=text;return}words.push({text,unit:unit&&width(text,size,tracking)<w*.75})}
    if(segmenter)for(const part of segmenter.segment(value))add(part.segment,part.isWordLike);else add(value,false)
    let rows=value?1:0,used=0
    for(const word of words)for(const chunk of word.unit?[word.text]:[...word.text]){
      if(chunk==='\n'){rows++;used=0;continue}if(chunk==='\r')continue
      const n=width(chunk,size,tracking);if(used&&used+n>w){rows++;used=0}used+=n
    }
    const body=words.map(word=>word.unit?`<span class="wp-word">${U.esc(word.text)}</span>`:U.esc(word.text)).join('')
    return{value,h:rows*size*lineHeight,markup:c.ed(key,def??'').replace('>'+U.esc(value)+'</span>',()=> '>'+body+'</span>'),size,lineHeight,tracking}
  }
  const title=field('h',p.title||it.t,hasPhoto?1200:1200,60,1.2),sub=field('k',p.sub,hasPhoto?320:1200,28,1.45)
  const english=field('en',p.en,hasPhoto?530:1200,28,1.5,1.4),body=field('b',p.body||it.body,hasPhoto?1030:1200,30,1.6)
  const style=f=>`font-size:${f.size}px;line-height:${f.lineHeight};letter-spacing:${f.tracking}px;`
  const block=(f,cls,extra='')=>f.value?`<div class="${cls}" style="${style(f)}${extra}">${f.markup}</div>`:''
  const footerHeight=Math.max(english.h,body.h),photoY=Math.max(162,40+Math.max(title.h,sub.h)+40)
  const photoHeight=Math.max(420,Math.min(660,1020-photoY-(footerHeight?80+footerHeight:0))),footerY=photoY+photoHeight+80
  const textHeight=title.h+(english.value?16+english.h:0)+(sub.value?22+sub.h:0)+(body.value?36+body.h:0)
  const contentHeight=hasPhoto?photoY+photoHeight+(footerHeight?80+footerHeight:0):textHeight,available=hasPhoto?1020:880
  const marker=`<div data-typography="window-preserve" data-capacity="${contentHeight>available?'exceeded':'fit'}" data-content-height="${contentHeight}" data-available-height="${available}" data-photo-height="${hasPhoto?photoHeight:0}"></div>`
  const css=`<style>
    .t-spot.v-window-preserve .wp-copy{overflow-wrap:anywhere}
    .t-spot.v-window-preserve .wp-copy [data-k]{white-space:pre-wrap}
    .t-spot.v-window-preserve .wp-word{display:inline-block;max-width:100%;white-space:pre-wrap;overflow-wrap:anywhere;vertical-align:top}
    .t-spot.v-window-preserve .wp-photo{animation:wp-reveal .6s cubic-bezier(.16,1,.3,1) both}
    @keyframes wp-reveal{from{opacity:.6}to{opacity:1}}
    @media(prefers-reduced-motion:reduce){.t-spot.v-window-preserve .wp-photo{animation:none!important}}
    @media print{.t-spot.v-window-preserve .wp-photo{animation:none!important}}
  </style>`
  if(!hasPhoto)return css+marker+`<div class="ab wp-copy" style="left:360px;top:${100+Math.max(0,(880-textHeight)/2)}px;width:1200px;color:var(--ink)">`+
    block(title,'serif','font-weight:700')+block(english,'','margin-top:16px')+block(sub,'','margin-top:22px;color:var(--acc)')+block(body,'','margin-top:36px')+'</div>'
  return css+marker+`<div style="position:absolute;inset:0;background:var(--ink);color:var(--paper)">`+
    block(title,'ab wp-copy serif','left:120px;top:40px;width:1200px;font-weight:700')+
    block(sub,'ab wp-copy','left:1480px;top:58px;width:320px;text-align:right')+
    `<img class="ab wp-photo" src="${U.esc(src)}" alt="" style="left:120px;top:${photoY}px;width:1680px;height:${photoHeight}px;object-fit:contain">`+
    (footerHeight?`<div class="ab" style="left:120px;top:${photoY+photoHeight+48}px;width:1680px;border-top:1px solid color-mix(in srgb,var(--paper) 35%,transparent)"></div>`:'')+
    block(english,'ab wp-copy',`left:120px;top:${footerY}px;width:530px`)+block(body,'ab wp-copy',`left:770px;top:${footerY}px;width:1030px`)+'</div>'
}}) }

/* variants/stay/auto-gallery.js */
// stay／auto-gallery：依照片真實比例配格；來源 engine/tpl/lib/gallery.mjs:1–18、106–150
M.add('stay', 'auto-gallery', { name:'依照片自動配圖', range:[1,3], auto:false, html:c=>M.gallery.html(c), onEnter:(...args)=>M.gallery.onEnter(...args) })

/* variants/stay/bands.js */
// stay／bands：色階直欄——整頁切成等寬直欄，一欄一間飯店；每欄上半是由深到淺的主色漸層放字、下半透出那間飯店的照片
// 學自小紅書 6927d2df（三欄深→淺漸層、底部透出照片）、6a4b13e5（階梯式色階）。2～4 間；沒有照片的欄改實心色塊。
{ const U = M.util
M.add('stay', 'bands', { name: '色階直欄', range: [2, 4], html: c => {
  const n = c.n, w = 1920 / n
  const col = (it, i) => { const x = i * w, padL = i ? 56 : 120, padR = i === n - 1 ? 120 : 56, tw = w - padL - padR
    const tone = `color-mix(in srgb,var(--acc) ${100 - i * (60 / (n - 1))}%,var(--ink))`
    const face = it.img ? `<img ${i ? '' : 'class="hero"'} src="${it.img}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` : ''
    const veil = it.img ? `linear-gradient(to bottom,color-mix(in srgb,${tone} 96%,#0000) 0%,color-mix(in srgb,${tone} 90%,#0000) 46%,color-mix(in srgb,${tone} 0%,#0000) 78%)` : tone
    return `<div class="in" style="position:absolute;left:${x}px;top:0;width:${w + .5}px;height:1080px;overflow:hidden;--i:${i + 1}">${face}<div style="position:absolute;inset:0;background:${veil}"></div>
      ${it.img ? '' : `<div style="position:absolute;left:${padL}px;bottom:60px;font:900 ${Math.round(w * .5)}px/1 var(--serif);color:#ffffff22">${U.esc([...(it.t || '宿')][0])}</div>`}</div>
    <div class="ab in" style="left:${x + padL}px;top:300px;width:${tw}px;color:#fff;--i:${i + 2}">
      <div style="font:900 72px/1 var(--serif);color:transparent;-webkit-text-stroke:1.5px #ffffffaa">${U.no(i)}</div>
      <div style="font-size:19px;letter-spacing:.22em;margin-top:26px;color:#ffffffcc">${U.esc(it.night ? '第 ' + it.night + ' 晚' : '')}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), tw, n === 2 ? 48 : 38, 20)}px;line-height:1.3;margin-top:10px">${c.ed('it' + i, it.t)}</div>
      ${it.sub ? `<div style="font-size:20px;margin-top:10px;color:#ffffffdd">${U.esc(it.sub)}</div>` : ''}
      ${it.body ? `<p style="font-size:19px;line-height:1.7;margin:18px 0 0;color:#ffffffcc">${U.esc(it.body)}</p>` : ''}</div>` }
  return c.items.map(col).join('') + c.items.slice(1).map((_, k) => `<div style="position:absolute;left:${(k + 1) * w}px;top:0;width:1px;height:1080px;background:rgba(255,255,255,.35)"></div>`).join('') +
    `<div class="ab in" style="left:120px;top:100px;color:#fff;--i:0"><div class="kick" style="color:#fff">${c.ed('k', '住宿安排')}</div><div class="serif" style="font-size:56px;margin-top:10px">${c.ed('h', n + ' 間飯店')}</div></div>` } }) }

/* variants/stay/cards.js */
// stay／cards：住宿，一間一欄；缺圖讓文字使用整欄，單間以照片與文字對開。
{ const U = M.util
M.add('stay', 'cards', { name: '飯店卡片', range: [1, 4], html: c => {
  const n=c.n, gap=48, width=(1680-gap*(n-1))/n, bodySize=28
  const lines=(s,w,size)=>String(s??'').split('\n').reduce((sum,line)=>sum+Math.max(1,Math.ceil(U.len(line)*size*1.06/w)),0)
  const heading=c.tx('h',n+' 間飯店'), kicker=c.tx('k','住宿安排')
  const titleSize=U.fit(heading,1680*2,64,40)
  const top=Math.max(300,100+(kicker?48:0)+lines(heading,1680,titleSize)*titleSize*1.2+48), height=1000-top
  const textWidth=it=>n===1&&it.img?728:width
  let nameSize=n===1?56:40
  const nameLines=size=>Math.max(...c.items.map((it,i)=>lines(c.tx('it'+i,it.t),textWidth(it),size)))
  while(nameSize>32&&nameLines(nameSize)>3)nameSize--
  const cards=c.items.map((it,i)=>{
    const photoHeight=n>2?260:320, tw=textWidth(it), detail=c.tx('body'+i,it.body||'')
    const label=[it.night?'第 '+it.night+' 晚':'',it.sub||''].filter(Boolean).join('　')
    const meta=c.tx('meta'+i,label), name=c.tx('it'+i,it.t)
    const used=(meta?lines(meta,tw,bodySize)*bodySize*1.45+16:0)+lines(name,tw,nameSize)*nameSize*1.3+(detail?24+lines(detail,tw,bodySize)*bodySize*1.5:0)
    const available=height-(it.img&&n>1?photoHeight+32:!it.img?24:0)
    return `<section class="ab in sc-card ${n===1&&it.img?'sc-spread':''}" data-capacity="${used<=available?'fit':'exceeded'}" style="left:${120+i*(width+gap)}px;top:${top}px;width:${width}px;--i:${i+2}">
      ${it.img?`<img src="${U.esc(it.img)}" alt="" style="width:${n===1?856:width}px;height:${n===1?Math.max(320,height):photoHeight}px;object-fit:cover;display:block">`:''}
      <div class="sc-copy" style="${it.img&&n>1?'padding-top:32px':!it.img?'border-top:1px solid var(--line);padding-top:24px':''}">
        ${meta?`<div class="sc-meta">${c.ed('meta'+i,label)}</div>`:''}
        <div class="serif sc-name">${c.ed('it'+i,it.t)}</div>
        ${detail?`<div class="sc-body">${c.ed('body'+i,it.body||'')}</div>`:''}
      </div></section>`
  }).join('')
  return `<style>
    .v-cards .sc-spread{display:grid;grid-template-columns:856px minmax(0,1fr);gap:96px;align-items:center}
    .v-cards .sc-copy{min-width:0}
    .v-cards .sc-meta{font-size:${bodySize}px;line-height:1.45;color:var(--acc);white-space:pre-wrap;overflow-wrap:anywhere;margin-bottom:16px}
    .v-cards .sc-name{font-size:${nameSize}px;line-height:1.3;white-space:pre-wrap;overflow-wrap:anywhere}
    .v-cards .sc-body{font-size:${bodySize}px;line-height:1.5;white-space:pre-wrap;overflow-wrap:anywhere;margin-top:24px;color:var(--mute)}
  </style><header class="ab in" style="left:120px;top:100px;width:1680px;--i:1">${kicker?`<div style="font-size:28px;line-height:1.45;margin-bottom:8px">${c.ed('k','住宿安排')}</div>`:''}<div class="serif" style="font-size:${titleSize}px;line-height:1.2;white-space:pre-wrap;overflow-wrap:anywhere">${c.ed('h',n+' 間飯店')}</div></header>${cards}`
} }) }

/* variants/stay/fog.js */
// stay／fog：霧面分欄——同一張飯店照，左 36% 複製一份高斯模糊當文字欄、右側保留清楚的實景；其他飯店縮成右下角的白框小照
// 學自小紅書 68b94d3d（朦朧感分割）、6a6717b6（霧面＋直排地名收邊）。1～3 間；沒有照片就整頁主色、不放破圖。
{ const U = M.util
M.add('stay', 'fog', { name: '霧面分欄', range: [1, 3], html: c => {
  const n = c.n, a = c.items[0], W = 700, TW = W - 200
  const bg = a.img ? `<img class="hero" src="${a.img}" alt="" style="position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:cover">`
    : `<div style="position:absolute;inset:0;background:color-mix(in srgb,var(--acc) 82%,#fff)"></div><div style="position:absolute;left:${W}px;right:0;top:0;bottom:0;display:grid;place-items:center;font:900 620px/1 var(--serif);color:#ffffff2e">${U.esc([...(a.t || '宿')][0])}</div>`
  const fog = a.img ? `<div style="position:absolute;left:0;top:0;width:${W}px;height:1080px;overflow:hidden;box-shadow:24px 0 60px rgba(0,0,0,.28)"><img src="${a.img}" alt="" style="position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:cover;filter:blur(32px) brightness(.58) saturate(1.15);transform:scale(1.08);transform-origin:0 50%"></div>`
    : `<div style="position:absolute;left:0;top:0;width:${W}px;height:1080px;background:var(--acc);box-shadow:24px 0 60px rgba(0,0,0,.2)"></div>`
  const big = n === 1, nameBase = big ? 64 : n === 2 ? 46 : 38
  const list = c.items.map((it, i) => `<div class="in" style="--i:${i + 3};padding:${big ? 0 : 26}px 0;border-top:${i ? '1px solid rgba(255,255,255,.35)' : 'none'}">
    <div style="font-size:19px;letter-spacing:.24em;color:#ffffffcc">${n > 1 ? U.no(i) + '　' : ''}${U.esc(it.night ? '第 ' + it.night + ' 晚' : '')}</div>
    <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), TW, nameBase, 22)}px;line-height:1.3;margin-top:8px">${c.ed('it' + i, it.t)}</div>
    ${it.sub ? `<div style="font-size:21px;margin-top:8px;color:#ffffffdd">${U.esc(it.sub)}</div>` : ''}
    ${it.body && n < 3 ? `<p style="font-size:20px;line-height:1.7;margin:${big ? 30 : 12}px 0 0;color:#ffffffcc">${U.esc(it.body)}</p>` : ''}</div>`).join('')
  const thumbs = c.items.slice(1).map((it, k) => it.img ? `<div class="in" style="position:absolute;right:${120 + (n - 2 - k) * 330}px;bottom:110px;width:300px;height:200px;border:8px solid #fff;box-shadow:0 20px 40px -18px rgba(0,0,0,.6);--i:${k + 6}"><img src="${it.img}" alt="" style="width:100%;height:100%;object-fit:cover;display:block"><b style="position:absolute;left:-8px;top:-8px;background:#fff;color:var(--ink);font:700 18px var(--serif);padding:4px 10px">${U.no(k + 1)}</b></div>` : '').join('')
  return bg + fog + `<div style="position:absolute;left:${W}px;top:0;width:1px;height:1080px;background:rgba(255,255,255,.5)"></div>
  <div class="ab in" style="left:100px;top:110px;width:${TW}px;color:#fff;--i:1"><div class="kick" style="color:#fff">${c.ed('k', '住宿安排')}</div>
    <div class="serif" style="font-size:${big ? 30 : 54}px;margin-top:12px;${big ? 'letter-spacing:.2em;color:#ffffffcc' : ''}">${c.ed('h', big ? '入住飯店' : n + ' 間飯店')}</div></div>
  <div class="ab" style="left:100px;top:${big ? 420 : 330}px;width:${TW}px;color:#fff">${list}</div>
  ${c.meta.en ? `<div style="position:absolute;right:56px;top:110px;writing-mode:vertical-rl;font:600 22px var(--sans);letter-spacing:.6em;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.4)">${U.esc(c.meta.en)}</div>` : ''}` + thumbs } }) }

/* variants/stay/horizontal-stories.js */
// stay/horizontal-stories · M013 · 視覺研究 v1（2026-11-03）
// 三條等高的橫幅把不同室內光線接成節奏；來源對照及限制見 CONTRACT 的視覺研究 v1
{ M.add('stay','horizontal-stories',{name:'旅宿橫幅・逐列等高',range:[1, 3],html:c=>{

  const U=M.util, p=c.p, meta=c.meta, n=c.n
  const clean=v=>String(v??'').replace(/[，。；、,.]+$/u,'')
  const T=(key,value,x,y,w,h,size=32,extra='')=>{
    if(value===undefined||value===null||value==='')return ''
    value=clean(value);let fs=size, text=c.tx(key,value)
    while(fs>16 && Math.ceil(U.len(text)*fs*1.06/w)*fs*1.42>h)fs--
    let markup=c.ed(key,value)
    if(extra.includes('font-family:var(--serif)')){
      const words=[];for(const part of new Intl.Segmenter('zh-TW',{granularity:'word'}).segment(String(text))){const prev=words.at(-1);if(U.len(part.segment)===1&&prev&&U.len(prev.segment)===1)prev.segment+=part.segment;else words.push({segment:part.segment})}
      markup=markup.replace('>'+U.esc(text)+'</span>','>'+words.map(({segment})=>/^\s+$/.test(segment)?segment:`<span style="display:inline-block">${U.esc(segment)}</span>`).join('')+'</span>')
    }
    return `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;font-size:${fs}px;line-height:1.42;overflow-wrap:anywhere;text-wrap:pretty;${extra}">${markup}</div>`
  }
  const I=(src,x,y,w,h,fit='cover',extra='')=>src?`<img class="ab hero in" src="${U.esc(src)}" alt="" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:${fit};${extra}">`:''
  const line=(x,y,w,color='var(--acc)')=>`<div class="ab" style="left:${x}px;top:${y}px;width:${w}px;border-top:1px solid ${color}"></div>`

  const rh=1080/n
  return c.items.map((it,i)=>{
    const y=i*rh, pad=Math.min(70,rh*.15), bodyH=rh-pad*2-110
    return I(it.img,0,y,1140,rh-8,'cover')+`<div class="ab" style="left:1140px;top:${y}px;width:780px;height:${rh}px;background:var(--paper)"></div>`+
    T('sub'+i,it.sub,1240,y+pad,560,45,24,'color:var(--acc);letter-spacing:.08em')+
    T('it'+i,it.t,1240,y+pad+50,560,100,52,'font-family:var(--serif);font-weight:700;line-height:1.22')+
    T('body'+i,it.body,1240,y+pad+155,560,Math.max(50,bodyH-45),27)+
    (i<n-1?line(1240,y+rh-10,560):'')
  }).join('')

}}) }

/* variants/stay/ledger.js */
// stay／ledger：詳略兩級——第一間（通常是住最多晚的）給大照片完整卡，其他間只留名稱＋地點＋晚數的名單列
// 學自東京官方手冊規則 D（項目多照片少，前面完整卡、其餘一行一項；MITTE p12、東京旅遊指南 p17）。3～5 間（2 間時兩張都該是完整卡，交給別的版本）。
{ const U = M.util
M.add('stay', 'ledger', { name: '主卡＋名單', range: [3, 5], html: c => {
  const n = c.n, a = c.items[0], rest = c.items.slice(1), top = 270, AH = 690, LX = 1160, LW = 640
  const ph = a.img ? `<img class="hero" src="${a.img}" alt="" style="position:absolute;left:120px;top:${top}px;width:960px;height:470px;object-fit:cover">`
    : `<div style="position:absolute;left:120px;top:${top}px;width:960px;height:470px;background:linear-gradient(160deg,var(--acc),color-mix(in srgb,var(--acc) 62%,#000));display:grid;place-items:center;color:#fff;font:900 220px var(--serif)">${U.esc([...(a.t || '宿')][0])}</div>`
  const rh = AH / rest.length
  const rows = rest.map((it, k) => { const i = k + 1
    return `<div class="ab in" style="left:${LX}px;top:${top + k * rh}px;width:${LW}px;height:${rh}px;border-top:${k ? 1 : 3}px solid ${k ? '#d9dcd8' : 'var(--ink)'};padding-top:${rh > 150 ? 26 : 16}px;display:grid;grid-template-columns:70px 1fr;--i:${i + 3}">
      <div style="font:900 30px var(--serif);color:var(--acc)">${U.no(i)}</div><div>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), LW - 70, 34, 20)}px;line-height:1.3">${c.ed('it' + i, it.t)}</div>
      ${it.sub || it.night ? `<div style="font-size:19px;color:var(--mute);margin-top:6px">${U.esc([it.sub, it.night ? '第 ' + it.night + ' 晚' : ''].filter(Boolean).join('　·　'))}</div>` : ''}
      ${it.body && rh >= 200 ? `<p style="font-size:19px;line-height:1.6;color:var(--mute);margin:8px 0 0">${U.esc(it.body)}</p>` : ''}</div></div>` }).join('')
  return `<div class="ab in" style="left:120px;top:100px;--i:1"><div class="kick">${c.ed('k', '住宿安排')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', n + ' 間飯店')}</div></div>` +
    `<div class="in" style="--i:2">${ph}</div>
    <div class="ab in" style="left:120px;top:${top + 470}px;width:960px;height:220px;background:#fff;padding:26px 40px;box-shadow:0 30px 60px -34px rgba(0,0,0,.4);--i:3">
      <div style="font-size:19px;letter-spacing:.2em;color:var(--acc)">${U.esc([a.night ? '第 ' + a.night + ' 晚' : '', a.sub || ''].filter(Boolean).join('　'))}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('it0', a.t), 880, 44, 24)}px;line-height:1.3;margin-top:8px">${c.ed('it0', a.t)}</div>
      ${a.body ? `<p style="font-size:20px;line-height:1.6;color:var(--mute);margin:10px 0 0">${U.esc(a.body)}</p>` : ''}</div>` + rows } }) }

/* variants/stay/panorama-keycard.js */
// 取全幅照片與跨下緣實色資訊帶的組織法，轉為上下寬景；名稱、地點、入住晚次各有固定讀取位置
{ const U = M.util
M.add('stay', 'panorama-keycard', { name: '寬景房卡', range: [1, 2], html: c => {
  const n = c.n, gap = 40, height = (752 - gap * (n - 1)) / n
  const clean = s => String(s ?? '').replace(/[，。；、,.]+$/u, '')
  const shared = c.items.every(it => it.body && it.body === c.items[0].body) ? c.items[0].body : ''
  const title = clean(c.p.title || '住宿安排'), firstPhoto = c.items.findIndex(it => it.img)
  return `<style>
    .v-panorama-keycard .pk-scene{animation-name:stay-panorama-keycard-cut;animation-duration:.65s}
    .v-panorama-keycard .pk-copy{animation-name:stay-panorama-keycard-copy;animation-duration:.4s}
    @keyframes stay-panorama-keycard-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @keyframes stay-panorama-keycard-copy{from{opacity:0}to{opacity:1}}
    @media(prefers-reduced-motion:reduce){.v-panorama-keycard .in{animation:none}}
  </style>
  <header class="ab in pk-copy" style="left:120px;right:120px;top:56px;display:flex;align-items:center;justify-content:space-between;gap:64px;--i:0">
    <div class="serif" style="width:1040px;font-size:${U.fit(c.tx('h', title), 1040, 76, 39)}px;line-height:1.2">${c.ed('h', title)}</div>
    <div style="text-align:right;font-size:20px;line-height:1.6">
      ${c.meta.agency ? `<div>${c.ed('agency', clean(c.meta.agency))}</div>` : ''}
      ${c.meta.dates ? `<div>${c.ed('dates', clean(c.meta.dates))}</div>` : ''}
    </div>
  </header>
  ${c.items.map((it, i) => {
    const y = 192 + i * (height + gap), caption = n === 1 ? 176 : 128
    const nameWidth = 1040, photoHeight = height - 48
    return `<section class="ab" style="left:0;top:${y}px;width:1920px;height:${height}px">
      <div class="ab in pk-scene" ${it.img ? 'data-photo-frame="single"' : ''} style="inset:0 0 auto;height:${photoHeight}px;background:var(--acc);--i:${1 + i}">
        ${it.img ? `<img ${i === firstPhoto ? 'class="hero"' : ''} src="${U.esc(it.img)}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center ${n === 1 ? 30 : 20}%;display:block">` : ''}
      </div>
      <div class="ab in pk-copy" style="left:120px;right:120px;bottom:0;min-height:${caption}px;background:var(--paper);color:var(--ink);display:grid;grid-template-columns:1fr 360px;box-shadow:0 16px 32px -24px var(--ink);--i:${3 + i}">
        <div style="padding:24px 40px;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:8px">
          ${it.sub ? `<div style="font-size:20px;line-height:1.2;color:var(--acc)">${c.ed('sub' + i, clean(it.sub))}</div>` : ''}
          <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), nameWidth, n === 1 ? 61 : 49, 31)}px;line-height:1.2">${c.ed('it' + i, clean(it.t || '住宿'))}</div>
          ${!shared && it.body ? `<div style="font-size:20px;line-height:1.4">${c.ed('body' + i, clean(it.body))}</div>` : ''}
        </div>
        <div style="background:var(--acc);color:var(--paper);padding:24px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:${U.fit(c.tx('night' + i, it.night ? '第 ' + it.night + ' 晚' : ''), 312, n === 1 ? 49 : 39, 20)}px;line-height:1.3;font-variant-numeric:tabular-nums">
          ${it.night ? c.ed('night' + i, '第 ' + clean(it.night) + ' 晚') : ''}
        </div>
      </div>
    </section>`
  }).join('')}
  ${shared ? `<div class="ab in pk-copy" style="left:120px;right:120px;top:992px;font-size:25px;line-height:1.4;--i:${n + 4}">${c.ed('body0', clean(shared))}</div>` : ''}`
} }) }

/* variants/stay/photo-roll.js */
// stay／photo-roll：住宿影像長卷，1–3 間；學自 收藏庫創意下一批-20261103／單-02「住宿房型與照片」
// 保留照片與住宿資訊逐項對應，改成全幅影像長卷＋深色橫向資訊帶；不借用草稿的飯店資料或照片
{ const U = M.util
M.add('stay', 'photo-roll', { name: '住宿影像長卷', range: [1, 3], html: c => {
  const n = c.n, gap = 48, w = (1680 - gap * (n - 1)) / n
  const clean = s => String(s ?? '').replace(/[，。；、,.]+$/u, '')
  const shared = c.items.every(it => it.body && it.body === c.items[0].body) ? c.items[0].body : ''
  const firstPhoto = c.items.findIndex(it => it.img)
  const title = clean(c.p.title || '住宿安排')
  return `<style>
    .v-photo-roll .pr-reveal{animation-name:stay-photo-roll-cut;animation-duration:.65s}
    .v-photo-roll .pr-copy{animation-name:stay-photo-roll-copy;animation-duration:.4s}
    @keyframes stay-photo-roll-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @keyframes stay-photo-roll-copy{from{opacity:0}to{opacity:1}}
    @media(prefers-reduced-motion:reduce){.v-photo-roll .in{animation:none}}
  </style>
  <header class="ab in pr-copy" style="left:120px;right:120px;top:48px;display:flex;justify-content:space-between;align-items:center;gap:60px;--i:0">
    <div class="serif" style="width:1120px;font-size:${U.fit(c.tx('h', title), 1120, 82, 36)}px;line-height:1.2">${c.ed('h', title)}</div>
    <div style="max-width:500px;text-align:right;font-size:22px;line-height:1.7">
      ${c.meta.agency ? `<div>${c.ed('agency', clean(c.meta.agency))}</div>` : ''}
      ${c.meta.dates ? `<div style="color:var(--acc)">${c.ed('dates', clean(c.meta.dates))}</div>` : ''}
    </div>
  </header>
  <div class="ab in pr-reveal" style="left:0;top:184px;width:1920px;height:560px;display:flex;gap:8px;--i:1">
    ${c.items.map((it, i) => `<div style="flex:1;min-width:0;background:var(--acc);overflow:hidden">${it.img ? `<img ${i === firstPhoto ? 'class="hero"' : ''} src="${U.esc(it.img)}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center ${n === 1 ? 25 : 50}%;display:block">` : ''}</div>`).join('')}
  </div>
  <div class="ab" style="left:0;top:744px;width:1920px;height:336px;background:var(--ink);color:var(--paper)">
    <div style="position:absolute;left:120px;right:120px;top:30px;display:grid;grid-template-columns:repeat(${n},minmax(0,1fr));gap:${gap}px">
      ${c.items.map((it, i) => `<section class="in pr-copy" style="min-width:0;--i:3">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:38px;font-size:22px;line-height:1.4">
          <div>${it.sub ? c.ed('sub' + i, clean(it.sub)) : ''}</div>
          ${it.night ? `<div style="white-space:nowrap;font-size:28px">${c.ed('night' + i, '第 ' + clean(Array.isArray(it.night) ? it.night.join('、') : it.night) + ' 晚')}</div>` : ''}
        </div>
        <div class="serif" style="margin-top:18px;min-height:72px;font-size:${U.fit(c.tx('it' + i, it.t), w * (n === 3 ? 1.7 : 1), n === 1 ? 66 : n === 2 ? 47 : 36, 24)}px;line-height:1.35;text-wrap:balance">${c.ed('it' + i, clean(it.t))}</div>
        ${!shared && it.body ? `<div style="margin-top:18px;font-size:22px;line-height:1.6">${c.ed('body' + i, clean(it.body))}</div>` : ''}
      </section>`).join('')}
    </div>
    ${shared ? `<div class="ab in pr-copy" style="left:120px;right:120px;bottom:42px;border-top:1px solid color-mix(in srgb,var(--paper) 35%,transparent);padding-top:22px;font-size:26px;line-height:1.5;--i:3">${c.ed('body0', clean(shared))}</div>` : ''}
  </div>`
} }) }

/* variants/stay/photo-stage.js */
M.add('stay', 'photo-stage', M.photoStage)

/* variants/stay/screen.js */
// stay／screen：保留左側安靜說明、右側凹角交錯真照片窗。
// 學自小紅書 69fc55ce（中式窗格挖窗）、6898978e（不等高直條窗）。
// 完整資訊先取得可讀字級；窗高讓給文字，過量明示，不以藏文或假窗補空。
{ const U = M.util
M.add('stay', 'screen', { name: '屏風窗格', range: [1, 5], html: c => {
  const n=c.n,valid=src=>typeof src==='string'&&src.trim()&&!/^(undefined|null)$/i.test(src.trim()),back=c.items.find(it=>valid(it.img))?.img,hasPhoto=!!back
  const gap=30,w=Math.min(n===1?560:400,(1100-gap*(n-1))/n),x0=1800-(w*n+gap*(n-1)),off=n>1?70:0
  const segmenter=typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh-TW',{granularity:'word'}):null
  const width=(value,size)=>[...value].reduce((sum,ch)=>sum+size*(ch==='\t'?5.2:/[MWmw@%]/.test(ch)?.96:/[A-Z]/.test(ch)?.76:/[\x00-\xff]/.test(ch)?.65:1)*1.06,0)
  const parts=(value,W,size)=>{
    const out=[],append=(text,unit)=>{const prev=out.at(-1);if(/^[，。；、！？：）」』】]+$/u.test(text)&&prev?.unit&&width(prev.text+text,size)<=W*.75){prev.text+=text;return}out.push({text,unit:unit&&width(text,size)<=W*.75})}
    const words=text=>{if(segmenter)for(const part of segmenter.segment(text))append(part.segment,part.isWordLike);else append(text,false)}
    let at=0
    for(const match of value.matchAll(/\d+(?:\.\d+)?(?:[–—~-]\d+(?:\.\d+)?)?[ \t]*(?:分鐘|小時|公里|公尺|分|站|天|晚)/g)){words(value.slice(at,match.index));append(match[0],true);at=match.index+match[0].length}
    words(value.slice(at));return out
  }
  const lineCount=(words,W,size)=>{let lines=1,used=0;for(const word of words)for(const chunk of word.unit?[word.text]:[...word.text]){if(chunk==='\n'){lines++;used=0;continue}if(chunk==='\r')continue;const next=width(chunk,size);if(used&&used+next>W){lines++;used=0}used+=next}return lines}
  const field=(key,def,W,size)=>{const value=String(c.tx(key,def??'')),words=parts(value,W,size);return{key,def:def??'',value,words,size,lines:value?lineCount(words,W,size):0}}
  const edit=f=>{const body=f.words.map(word=>word.unit?`<span class="screen-word">${U.esc(word.text)}</span>`:U.esc(word.text)).join('');return c.ed(f.key,f.def).replace('>'+U.esc(f.value)+'</span>',()=> '>'+body+'</span>')}
  const headerW=hasPhoto?x0-200:1680,headerTitle=String(c.tx('h',c.p.title||(n===1?'這幾晚住這裡':n+' 間飯店')))
  const titleSize=U.fit(headerTitle,headerW*2,64,48),title=field('h',c.p.title||(n===1?'這幾晚住這裡':n+' 間飯店'),headerW,titleSize),kicker=field('k',c.p.sub||'住宿安排',headerW,28)
  const singleBody=hasPhoto&&n===1?field('body0',c.items[0].body||'',Math.min(headerW,880),28):null
  const headerH=title.lines*titleSize*1.25+(kicker.value?18+kicker.lines*28*1.45:0)+(singleBody?.value?32+singleBody.lines*28*1.5:0)
  const columns=hasPhoto?n:n<=2?n:n<=4?2:3,textGap=hasPhoto?gap:60,itemW=hasPhoto?w:(1680-textGap*(columns-1))/columns,itemSize=hasPhoto&&n>2?36:40
  const entries=c.items.map((it,i)=>{
    const name=field('it'+i,it.t||'',itemW,itemSize),night=field('night'+i,it.night?'第 '+it.night+' 晚':'',itemW,28),sub=field('sub'+i,it.sub||'',itemW,28),body=field('body'+i,it.body||'',itemW,28)
    const h=name.lines*itemSize*1.3+(night.value?10+night.lines*28*1.4:0)+(sub.value?10+sub.lines*28*1.45:0)+(!singleBody&&body.value?18+body.lines*28*1.5:0)
    return{it,i,name,night,sub,body,h,photo:valid(it.img)}
  })
  let contentBottom=(hasPhoto?150:120)+headerH
  if(hasPhoto){for(const e of entries){e.x=x0+e.i*(w+gap);e.y=150+(e.i%2)*off;e.photoH=e.photo?Math.max(200,Math.min(560,1000-e.y-24-e.h)):0;e.textY=e.y+(e.photo?e.photoH+24:0);contentBottom=Math.max(contentBottom,e.textY+e.h)}}
  else{let rowY=Math.max(300,120+headerH+56);for(let i=0;i<n;i+=columns){const row=entries.slice(i,i+columns);for(const e of row){e.x=120+(e.i%columns)*(itemW+textGap);e.textY=rowY;e.photoH=0;contentBottom=Math.max(contentBottom,rowY+e.h)}rowY+=Math.max(...row.map(e=>e.h))+52}}
  const R=Math.round(Math.min(34,w*.12)),corner=p=>`radial-gradient(circle at ${p},#0000 ${R}px,#000 ${R+1}px)`
  const mask=`${corner('0 0')} 0 0/51% 51% no-repeat,${corner('100% 0')} 100% 0/51% 51% no-repeat,${corner('0 100%')} 0 100%/51% 51% no-repeat,${corner('100% 100%')} 100% 100%/51% 51% no-repeat`
  const ink=hasPhoto?'#fff':'var(--ink)',secondary=hasPhoto?'rgba(255,255,255,.88)':'var(--ink)',accent=hasPhoto?'var(--acc3)':'var(--acc)'
  const item=e=>`${e.photo?`<div class="in screen-photo" data-photo-frame="screen" style="position:absolute;left:${e.x}px;top:${e.y}px;width:${w}px;height:${e.photoH}px;-webkit-mask:${mask};mask:${mask};--i:${e.i}"><img ${e.i?'':'class="hero"'} src="${U.esc(e.it.img)}" alt="" style="width:100%;height:100%;object-fit:cover;display:block"></div>`:''}<div class="ab screen-item" data-screen-item="${e.i}" data-item-height="${e.h}" style="left:${e.x}px;top:${e.textY}px;width:${itemW}px;color:${ink}"><div class="serif" style="font-size:${itemSize}px;line-height:1.3;text-wrap:balance">${edit(e.name)}</div>${e.night.value?`<div style="font-size:28px;line-height:1.4;margin-top:10px;color:${accent}">${edit(e.night)}</div>`:''}${e.sub.value?`<div style="font-size:28px;line-height:1.45;margin-top:10px;color:${secondary}">${edit(e.sub)}</div>`:''}${!singleBody&&e.body.value?`<div style="font-size:28px;line-height:1.5;margin-top:18px;color:${secondary}">${edit(e.body)}</div>`:''}</div>`
  return `<style>
    .t-stay.v-screen .screen-word{display:inline-block;max-width:100%;white-space:pre-wrap;word-break:keep-all;overflow-wrap:anywhere;vertical-align:top}
    .t-stay.v-screen .screen-heading,.t-stay.v-screen .screen-item{overflow-wrap:anywhere}
    .t-stay.v-screen [data-k]{white-space:pre-wrap}
    .t-stay.v-screen .screen-photo{animation:stay-screen-light .65s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(var(--i)*50ms)}
    @keyframes stay-screen-light{from{opacity:.55}to{opacity:1}}
    @media(prefers-reduced-motion:reduce){.t-stay.v-screen .screen-photo{animation:none!important}}
    @media print{.t-stay.v-screen .screen-photo{animation:none!important}}
  </style><div data-typography="screen" data-capacity="${contentBottom>1000?'exceeded':'fit'}" data-content-height="${contentBottom}" data-available-height="1000" data-columns="${columns}"></div>`+
    (hasPhoto?`<img src="${U.esc(back)}" alt="" style="position:absolute;left:0;top:0;width:1920px;height:1080px;object-fit:cover;filter:blur(2px)"><div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(18,20,22,.84),rgba(18,20,22,.78) 36%,rgba(18,20,22,.66) 72%)"></div>`:'')+
    `<div class="ab screen-heading" style="left:120px;top:${hasPhoto?150:120}px;width:${headerW}px;color:${ink}"><div class="serif" style="font-size:${titleSize}px;line-height:1.25;text-wrap:balance">${edit(title)}</div>${kicker.value?`<div style="font-size:28px;line-height:1.45;margin-top:18px;color:${accent}">${edit(kicker)}</div>`:''}${singleBody?.value?`<div style="max-width:880px;font-size:28px;line-height:1.5;margin-top:32px;color:${secondary}">${edit(singleBody)}</div>`:''}</div>`+entries.map(item).join('')
} }) }

/* variants/stay/spec.js */
// stay／spec：固定欄位卡——每間飯店同一組欄位（第幾晚／地點／備註），欄名改用簡單幾何圖示，頁尾印一次圖示說明
// 學自東京官方手冊（固定欄位卡、圖示代欄名、圖例印在頁尾；research/2026-10-07-東京手冊-排版規則.md）。1～5 間；
// 1～2 間橫卡（照片左、欄位右），3～5 間直卡；沒有照片就主色塊＋飯店名第一個字。
{ const U = M.util
const IC = {
  night: `<i style="display:inline-block;width:24px;height:24px;border-radius:50%;box-shadow:inset -7px -3px 0 0 var(--acc);transform:rotate(-25deg)"></i>`,
  pin: `<i style="display:inline-block;width:18px;height:18px;border:4px solid var(--acc);border-radius:50% 50% 50% 0;transform:rotate(-45deg);margin-left:2px"></i>`,
  note: `<i style="display:inline-block;width:22px;height:18px;background:linear-gradient(var(--acc) 0 3px,#0000 3px 7.5px,var(--acc) 7.5px 10.5px,#0000 10.5px 15px,var(--acc) 15px 18px)"></i>`
}
const row = (ic, html, fs) => `<div style="display:grid;grid-template-columns:38px 1fr;align-items:start;font-size:${fs}px;line-height:1.55;margin-top:10px"><span style="height:${fs * 1.55}px;display:flex;align-items:center">${ic}</span><span>${html}</span></div>`
M.add('stay', 'spec', { name: '固定欄位卡', range: [1, 5], html: c => {
  const n = c.n, gap = 30, wide = n <= 2, top = 270, AH = 670
  const photo = (it, i, w, h) => it.img ? `<img ${i ? '' : 'class="hero"'} src="${it.img}" alt="" style="width:${w}px;height:${h}px;object-fit:cover;display:block;flex:none">`
    : `<div style="width:${w}px;height:${h}px;flex:none;background:linear-gradient(160deg,var(--acc),color-mix(in srgb,var(--acc) 62%,#000));display:grid;place-items:center;color:#fff;font:900 ${Math.round(Math.min(w, h) * .42)}px var(--serif)">${U.esc([...(it.t || '宿')][0])}</div>`
  const fields = (it, fs) => (it.night ? row(IC.night, `第 ${U.esc(it.night)} 晚`, fs) : '') + (it.sub ? row(IC.pin, U.esc(it.sub), fs) : '') + (it.body ? row(IC.note, U.esc(it.body), fs - 1) : '')
  const cards = c.items.map((it, i) => {
    if (wide) { const h = (AH - gap * (n - 1)) / n, pw = n === 1 ? 960 : 640, tw = 1680 - pw - 120
      return `<div class="ab in" style="left:120px;top:${top + i * (h + gap)}px;width:1680px;height:${h}px;background:#fff;box-shadow:0 30px 60px -34px rgba(0,0,0,.45);display:flex;--i:${i + 2}">${photo(it, i, pw, h)}
        <div style="padding:${n === 1 ? 70 : 40}px 60px;width:${tw + 120}px"><div style="font:700 18px var(--sans);letter-spacing:.3em;color:var(--acc)">${U.no(i)}</div>
        <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), tw, n === 1 ? 52 : 40, 22)}px;line-height:1.3;margin:8px 0 ${n === 1 ? 26 : 12}px">${c.ed('it' + i, it.t)}</div>${fields(it, n === 1 ? 23 : 21)}</div></div>` }
    const w = (1680 - gap * (n - 1)) / n, ph = n === 3 ? 380 : 350
    return `<div class="ab in" style="left:${120 + i * (w + gap)}px;top:${top}px;width:${w}px;height:${AH}px;background:#fff;box-shadow:0 30px 60px -34px rgba(0,0,0,.45);--i:${i + 2}">${photo(it, i, w, ph)}
      <div style="padding:22px 26px"><div style="font:700 17px var(--sans);letter-spacing:.3em;color:var(--acc)">${U.no(i)}</div>
      <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w - 52, 32, 20)}px;line-height:1.3;margin:6px 0 6px">${c.ed('it' + i, it.t)}</div>${fields(it, n === 5 ? 18 : 19)}</div></div>` }).join('')
  const legend = [[IC.night, '入住晚數'], [IC.pin, '地點'], [IC.note, '備註']].map(([ic, t]) => `<span style="display:inline-flex;align-items:center;gap:10px;margin-right:40px">${ic}${t}</span>`).join('')
  return `<div class="ab in" style="left:120px;top:100px;--i:1"><div class="kick">${c.ed('k', '住宿安排')}</div><div class="serif" style="font-size:60px;margin-top:10px">${c.ed('h', n === 1 ? '入住飯店' : n + ' 間飯店')}</div></div>` + cards +
    `<div class="ab" style="left:120px;top:986px;width:1680px;padding-top:14px;border-top:1px solid var(--line,#d9dcd8);font-size:17px;color:var(--mute);display:flex">${legend}</div>` } }) }

/* variants/stay/staggered-spread.js */
// stay／staggered-spread：錯位相簿，學自小紅書 695a1bd3「京都秋楓照片牆」的錯位照片與留白敘事
// 轉成平面雜誌跨頁：1 間大圖配側欄，2 間前高後低、圖說在外；不沿用原作 3D 與模糊
{ const U = M.util
M.add('stay', 'staggered-spread', { name: '錯位相簿', range: [1, 2], html: c => {
  const n = c.n, gap = 64, usable = 1680 - gap * (n - 1)
  const shared = c.items.every(it => it.body === c.items[0].body) ? c.items[0].body : ''
  const clean = s => String(s || '').replace(/[，。；、,.]+$/u, '')
  const image = (it, i, x, y, w, h) => it.img
    ? `<img class="${i === c.items.findIndex(item => item.img) ? 'hero ' : ''}in ss-photo" src="${U.esc(it.img)}" alt="" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;object-fit:cover;--i:1">`
    : `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;background:var(--acc);--i:1"></div>`
  const copy = (it, i, x, y, w, fs) => `<div class="ab in" style="left:${x}px;top:${y}px;width:${w}px;--i:2">
    <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w * (n === 1 ? 2 : 1), fs, 31)}px;line-height:1.3;text-wrap:balance">${c.ed('it' + i, clean(it.t))}</div>
    <div style="display:flex;flex-wrap:wrap;gap:8px 24px;margin-top:16px;font-size:20px;line-height:1.6">
      ${it.sub ? `<span>${c.ed('sub' + i, clean(it.sub))}</span>` : ''}
      ${it.night ? `<span style="color:var(--acc)">${c.ed('night' + i, '第 ' + clean(it.night) + ' 晚')}</span>` : ''}
    </div>
  </div>`
  return `<style>
    .v-staggered-spread .ss-photo{animation-name:stay-staggered-spread-reveal}
    @keyframes stay-staggered-spread-reveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-staggered-spread .in{animation:none}}
  </style>
  <div class="ab in serif" style="left:120px;top:80px;width:1056px;font-size:${U.fit(c.tx('h', c.p.title || '住宿安排'), 1056, 95, 49)}px;line-height:1.2;--i:0">${c.ed('h', clean(c.p.title || '住宿安排'))}</div>
  <div class="ab in" style="right:120px;top:104px;max-width:560px;text-align:right;font-size:20px;line-height:1.8;--i:0">
    ${c.meta.agency ? `<div>${c.ed('agency', clean(c.meta.agency))}</div>` : ''}
    ${c.meta.dates ? `<div style="color:var(--acc)">${c.ed('dates', clean(c.meta.dates))}</div>` : ''}
  </div>
  <div class="ab" style="left:120px;top:224px;width:1680px;height:1px;background:var(--ink)"></div>` +
  c.items.map((it, i) => {
    const w = n === 1 ? 1120 : usable * (i === 0 ? .57 : .43), x = i === 0 ? 120 : 1800 - w
    const y = 272 + i * 208, h = n === 1 ? 630 : w * 9 / 16
    return image(it, i, x, y, w, h) + (n === 1
      ? copy(it, i, 1320, 400, 480, 61)
      : copy(it, i, x, i === 0 ? y + h + 24 : 304, w, 49))
  }).join('') +
  `<div class="ab in" style="left:120px;top:960px;width:1680px;border-top:1px solid var(--line);padding-top:16px;font-size:25px;line-height:1.5;--i:3">
    ${shared ? c.ed('body0', clean(shared)) : `<div style="display:grid;grid-template-columns:${n === 1 ? '1fr' : '57fr 43fr'};gap:64px">${c.items.map((it, i) => `<div>${it.body ? c.ed('body' + i, clean(it.body)) : ''}</div>`).join('')}</div>`}
  </div>`
} }) }

/* variants/toc/arc.js */
// toc／arc：由母片樣品拆出（2026-10-07）
{ const U = M.util
M.add('toc', 'arc', { name: '④ 圓切右側白區＋沿弧清單', range: [1, 8], html: c => {
    // 大圓蓋住右側（半透明白），清單沿圓弧排；11～20 項分兩條同心弧
    const its = c.items, n = c.n, cx = 1720, cy = 540, R = 900, cols = n > 10 ? 2 : 1, per = Math.ceil(n / cols)
    let labels = ''
    its.forEach((it, i) => {
      const col = Math.floor(i / per), k = i % per, rr = R - 150 - col * 470
      const y = per === 1 ? cy : 150 + (780 * k) / (per - 1), x = cx - Math.sqrt(Math.max(0, rr * rr - (y - cy) ** 2))
      const fs = cols === 2 ? 26 : n > 7 ? 32 : 40; M.box(i, x, y - fs * .8, 600, fs * 1.6, c.target(i))
      labels += `<div class="ab in" style="left:${x}px;top:${y}px;transform:translateY(-50%);display:flex;align-items:center;gap:20px;white-space:nowrap;--i:${i + 2}">
        <b style="width:${fs * 1.6}px;height:${fs * 1.6}px;border-radius:50%;background:var(--acc);color:#fff;display:grid;place-items:center;font:700 ${fs * .7}px var(--serif)">${U.no(i)}</b>
        <span class="serif" style="font-size:${fs}px">${c.ed('it' + i, it.t)}</span></div>`
    })
    return `<img class="ab" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover">
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px"><circle cx="${cx}" cy="${cy}" r="${R}" fill="#fbfaf7" fill-opacity=".9"/>
        <circle cx="${cx}" cy="${cy}" r="${R + 26}" fill="none" stroke="#fff" stroke-width="3" stroke-opacity=".8"/></svg>
      <div class="ab" style="left:0;bottom:0;width:1000px;height:520px;background:radial-gradient(120% 100% at 0% 100%,rgba(10,14,16,.7),rgba(10,14,16,0) 70%)"></div>
      <div class="ab in" style="left:120px;bottom:120px;color:#fff;--i:1"><div style="font-size:22px;letter-spacing:.5em">CONTENTS</div>
        <div class="serif" style="font-size:110px;line-height:1.05;text-shadow:0 6px 30px rgba(0,0,0,.45)">${c.ed('tocT', '目錄')}</div></div>${labels}` } }) }

/* variants/toc/category-register.js */
// toc／category-register：橫向分類目次；學自「收藏庫創意下一批／單-04」分類→章節→詳頁的導航層級，依母片契約重寫
{ const U = M.util
M.add('toc', 'category-register', { name: '分類目次・橫向章冊', range: [3, 7], html: c => {
  // 分類是導覽標籤，非新增行程資料；保留原始 i，分類後仍跳到原章節
  const groups = new Map(), pool = c.meta.pool || []
  c.items.forEach((it, i) => {
    const kind = /住宿|飯店|餐食|料理/.test(it.t) ? '食宿' : /航班|集合|注意|問題/.test(it.t) ? '行前' : /行程|景點/.test(it.t) ? '旅程' : '章節'
    if (!groups.has(kind)) groups.set(kind, [])
    groups.get(kind).push({ it, i })
  })
  const entries = [...groups], gap = 22, top = 260, height = 708
  const bandH = (height - gap * (entries.length - 1)) / entries.length
  const photoW = entries.length > 3 ? 340 : 470, labelW = 290, listX = 120 + photoW + labelW + 56, listW = 1800 - listX
  const rows = entries.map(([kind, items], g) => {
    const y = top + g * (bandH + gap), rh = bandH / items.length
    const subject = kind === '行前' ? /arrival|airport|flight/i : kind === '食宿' ? (/住宿|飯店/.test(items[0].it.t) ? /hotel/i : /hanjeongsik|food/i) : null
    const photo = (subject && pool.find(p => subject.test(p))) || items[0].it.img || c.p.img || pool[g % pool.length] || c.meta.hero
    const links = items.map(({ it, i }, j) => {
      const ly = y + j * rh, title = it.t || '', fs = U.fit(c.tx('it' + i, title), listW - 150, Math.min(46, rh * .48), 24)
      M.box(i, listX, ly, listW, rh, c.target(i), it.img || photo)
      return `<div class="ab tcr-link" style="left:${listX}px;top:${j * rh}px;width:${listW}px;height:${rh}px">
        <span class="tcr-no">${c.ed('tocNo' + i, U.no(i))}</span>
        <span class="serif" style="font-size:${fs}px;line-height:1.3">${c.ed('it' + i, title)}</span>
        <i class="tcr-arrow" aria-hidden="true"></i></div>`
    }).join('')
    return `<div class="ab in" style="left:0;top:${y}px;width:1920px;height:${bandH}px;--i:${g + 1}">
      ${photo ? `<img class="ab ${g === 0 ? 'hero ' : ''}tcr-photo" src="${U.esc(photo)}" alt="" style="left:120px;top:0;width:${photoW}px;height:${bandH}px">` : ''}
      <div class="ab tcr-category" style="left:${120 + photoW + 32}px;top:0;width:${labelW}px;height:${bandH}px">
        <div class="serif" style="font-size:${U.fit(c.tx('tocCategory' + kind, kind), labelW - 20, 64, 28)}px;line-height:1.3">${c.ed('tocCategory' + kind, kind)}</div>
        <div class="tcr-count">${c.ed('tocCount' + kind, String(items.length).padStart(2, '0') + ' 章')}</div>
      </div>${links}</div>`
  }).join('')
  return `<style>
    .v-category-register{background:var(--paper);background-image:radial-gradient(color-mix(in srgb,var(--ink) 4%,transparent) .6px,transparent .8px);background-size:6px 6px;color:var(--ink)}
    .v-category-register .tcr-photo{object-fit:cover;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent)}
    .v-category-register .tcr-category{display:flex;flex-direction:column;justify-content:space-between;padding:14px 0 18px;color:var(--acc)}
    .v-category-register .tcr-count{font-size:22px;letter-spacing:.08em}
    .v-category-register .tcr-link{display:flex;align-items:center;gap:28px;border-top:1px solid color-mix(in srgb,var(--ink) 30%,transparent);cursor:pointer}
    .v-category-register .tcr-link:hover{color:var(--acc)}
    .v-category-register .tcr-no{flex:0 0 42px;font-size:24px;color:var(--acc);font-variant-numeric:tabular-nums}
    .v-category-register .tcr-arrow{margin-left:auto;margin-right:6px;flex:0 0 13px;height:13px;border-top:2px solid currentColor;border-right:2px solid currentColor;transform:rotate(45deg)}
    .v-category-register>.in{animation:tcr-reveal .65s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*65ms)}
    @keyframes tcr-reveal{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-category-register .in{animation:none!important}}
  </style>
  <div class="ab in serif" style="left:120px;top:80px;width:780px;font-size:${U.fit(c.tx('tocT', c.p.title || '目錄'), 780, 108, 32)}px;line-height:1.2;--i:0">${c.ed('tocT', c.p.title || '目錄')}</div>
  <div class="ab in" style="right:120px;top:106px;width:800px;text-align:right;--i:0">
    ${c.meta.title ? `<div class="serif" style="font-size:${U.fit(c.tx('tocM', c.meta.title), 800, 34, 24)}px;line-height:1.4">${c.ed('tocM', c.meta.title)}</div>` : ''}
    ${c.meta.dates ? `<div style="margin-top:12px;font-size:22px;color:var(--acc)">${c.ed('tocDates', c.meta.dates)}</div>` : ''}
  </div>${rows}
  <div class="ab" style="left:120px;top:994px;width:1680px;border-top:1px solid var(--ink)"></div>`
} }) }

/* variants/toc/cinema-reel.js */
// 設計教學來源：小紅書 6a13f7da000000003601dd3e
{ const U = M.util
M.add('toc', 'cinema-reel', { name: '電影片帶・章節分鏡', range: [3, 8], html: c => {
  const rows = c.n > 4 ? 2 : 1, per = Math.ceil(c.n / rows)
  const top = 250, height = 710, gap = 30, rh = (height - gap * (rows - 1)) / rows
  const pool = c.meta.pool || [], frameGap = 24, photoH = rh - 110
  const reels = Array.from({ length: rows }, (_, row) => {
    const start = row * per, count = Math.min(per, c.n - start)
    const width = (1680 - frameGap * (count - 1)) / count, y = top + row * (rh + gap)
    const frames = c.items.slice(start, start + count).map((it, col) => {
      const i = start + col, x = 120 + col * (width + frameGap)
      // 原資料的航班／餐食章節圖不對題時，只在同一團照片池選對應實照
      const subject = /航班|集合/.test(it.t) ? /arrival|airport|flight/i : /餐食|料理/.test(it.t) ? /hanjeongsik|food|dining/i : null
      const photo = (subject && pool.find(p => subject.test(p))) || it.img || c.p.img || pool[i % pool.length] || c.meta.hero
      const fs = U.fit(c.tx('it' + i, it.t), width - 90, rows === 1 ? 48 : 38, 24)
      M.box(i, x, y + 28, width, rh - 56, c.target(i), photo)
      return `<div class="ab tocr-frame" style="left:${x}px;top:28px;width:${width}px;height:${rh - 56}px">
        ${photo ? `<img ${i === 0 ? 'class="hero"' : ''} src="${U.esc(photo)}" alt="" style="width:100%;height:${photoH}px;object-fit:cover;display:block;border-radius:4px">` : ''}
        <div class="tocr-caption" style="top:${photoH}px;height:54px">
          <span class="tocr-number">${c.ed('tocNo' + i, U.no(i))}</span>
          <span class="serif" style="font-size:${fs}px;line-height:1.25">${c.ed('it' + i, it.t)}</span>
        </div>
      </div>`
    }).join('')
    return `<div class="ab in tocr-reel" style="left:0;top:${y}px;width:1920px;height:${rh}px;--i:${row + 1}"><div class="tocr-holes" aria-hidden="true"></div>${frames}<div class="tocr-holes tocr-bottom" aria-hidden="true"></div></div>`
  }).join('')
  return `<style>
    .v-cinema-reel{background:var(--ink);color:var(--paper);background-image:radial-gradient(color-mix(in srgb,var(--paper) 4%,transparent) .7px,transparent .8px);background-size:6px 6px}
    .v-cinema-reel .tocr-reel{background:color-mix(in srgb,var(--ink) 90%,var(--acc));border-top:1px solid color-mix(in srgb,var(--paper) 20%,transparent);border-bottom:1px solid color-mix(in srgb,var(--paper) 20%,transparent);animation:tocr-cut .7s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*90ms)}
    .v-cinema-reel .tocr-holes{position:absolute;left:0;right:0;top:7px;height:10px;background:repeating-linear-gradient(90deg,var(--paper) 0 18px,transparent 18px 42px);opacity:.55}
    .v-cinema-reel .tocr-bottom{top:auto;bottom:7px}
    .v-cinema-reel .tocr-frame{cursor:pointer}
    .v-cinema-reel .tocr-caption{position:absolute;left:0;right:0;display:flex;align-items:center;gap:18px}
    .v-cinema-reel .tocr-number{font:500 22px/1 var(--sans);font-variant-numeric:tabular-nums;color:var(--acc3);min-width:36px}
    .v-cinema-reel .tocr-frame:hover .tocr-caption{color:var(--acc3)}
    @keyframes tocr-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-cinema-reel .in{animation:none}}
  </style>
  <div class="ab in serif" style="left:120px;top:76px;width:600px;font-size:${U.fit(c.tx('tocT', '目錄'), 600, 96, 32)}px;line-height:1.25;--i:0">${c.ed('tocT', '目錄')}</div>
  <div class="ab in" style="right:120px;top:88px;width:900px;text-align:right;--i:0">
    ${c.meta.title ? `<div class="serif" style="font-size:${U.fit(c.tx('tocM', c.meta.title), 900, 36, 24)}px;line-height:1.4">${c.ed('tocM', c.meta.title)}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:22px;line-height:1.5;margin-top:12px;color:var(--acc3)">${c.ed('tocD', c.meta.dates)}</div>` : ''}
  </div>${reels}`
} }) }

/* variants/toc/drawer.js */
// toc／drawer：同一色相 n 階明度的圓角長板，從右緣疊進來像拉開的抽屜（每片蓋住前一片約 1/4、帶陰影），片上直排章節
// 學自小紅書 69d25a2f000000001a02bda1（馬卡龍抽拉展開）、69db8a030000000021013d40（疊層頁籤卡點）
{ const U = M.util
M.add('toc', 'drawer', { name: '⑦ 抽屜長板疊層（同色深淺）', range: [3, 8], html: c => {
    const its = c.items, n = c.n, L0 = 700, R = 40, step = (1920 - L0) / n, top = 70, H = 940
    const vfs = i => U.fit(c.tx('it' + i, it(i).t), 560, Math.min(58, step * .34), 26), it = i => its[i]
    let leaves = ''
    its.forEach((x, i) => {
      // 左淺右深：主色混白 → 主色 → 主色混黑
      const k = n === 1 ? .5 : i / (n - 1), tone = k < .6 ? `color-mix(in srgb,var(--acc) ${Math.round(38 + k / .6 * 62)}%,#fff)` : `color-mix(in srgb,var(--acc) ${Math.round(100 - (k - .6) / .4 * 45)}%,#0d1416)`
      const ink = k < .25 ? 'var(--ink)' : '#fff', left = L0 + step * i, w = 1920 + R - left + 60, fs = vfs(i)
      M.box(i, left, top, step, H, c.target(i))
      leaves += `<div class="ab in tocdr-leaf" style="left:${left}px;top:${top}px;width:${w}px;height:${H}px;border-radius:${R}px;background:${tone};box-shadow:-18px 0 40px rgba(0,0,0,.22);overflow:hidden;animation-delay:${(n - 1 - i) * 60}ms">
          ${x.img ? `<img src="${x.img}" alt="" style="position:absolute;left:0;bottom:0;width:${step + 20}px;height:${H * .42}px;object-fit:cover;-webkit-mask-image:linear-gradient(180deg,transparent,#000 45%);mask-image:linear-gradient(180deg,transparent,#000 45%);opacity:.92">` : ''}
          <div class="in" style="position:absolute;left:0;top:56px;width:${step}px;display:flex;flex-direction:column;align-items:center;gap:22px;color:${ink};--i:${i + 6}">
            <b style="font:700 ${Math.min(40, step * .22)}px/1 var(--serif);letter-spacing:.04em;opacity:.85">${U.no(i)}</b>
            <span class="serif" style="writing-mode:vertical-rl;font-size:${fs}px;letter-spacing:.16em;line-height:1">${c.ed('it' + i, x.t)}</span></div></div>`
    })
    return `<style>.v-drawer .tocdr-leaf{animation:tocdrIn .95s cubic-bezier(.2,.8,.2,1) both}@keyframes tocdrIn{from{transform:translateX(${1220 - L0}px)}}
        @media (prefers-reduced-motion:reduce){.v-drawer .tocdr-leaf{animation:none}}</style>
      <img class="ab" src="${c.meta.hero}" alt="" style="left:0;top:0;width:1920px;height:1080px;object-fit:cover">
      <div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(10,14,16,.62),rgba(10,14,16,.2) 40%,rgba(10,14,16,.55))"></div>
      <div class="ab in" style="left:120px;top:150px;color:#fff;--i:1">
        <div style="font-size:22px;letter-spacing:.5em;opacity:.85">CONTENTS</div>
        <div class="serif" style="font-size:120px;line-height:1.05;margin-top:18px">${c.ed('tocT', '目錄')}</div></div>
      <div class="ab in" style="left:120px;bottom:120px;color:#fff;width:${L0 - 200}px;--i:2">
        <div class="serif" style="font-size:${U.fit(c.tx('tocM', c.meta.title), L0 - 200, 40, 22)}px;line-height:1.3">${c.ed('tocM', c.meta.title)}</div>
        <div style="font-size:20px;letter-spacing:.2em;margin-top:12px;opacity:.8">${c.ed('tocD', c.meta.dates || '')}</div></div>${leaves}` } }) }

/* variants/toc/editorial-index.js */
{ const U = M.util
M.add('toc', 'editorial-index', { name: '書刊索引・照片對開', range: [3, 8], html: c => {
  const cols = c.n > 6 ? 2 : 1, per = Math.ceil(c.n / cols)
  const left = 860, top = 280, width = 940, height = 680, gap = 52
  const cw = (width - gap * (cols - 1)) / cols
  const labelSize = Math.min(48,...c.items.map((it,i)=>U.fit(c.tx('it'+i,it.t),(cw-108)*2,48,24)))
  const photo = c.p.img || c.meta.pool?.[0] || c.meta.hero
  const list = c.items.map((it, i) => {
    const col = Math.floor(i / per), row = i % per
    const count = Math.min(per, c.n - col * per), rh = height / count
    const x = left + col * (cw + gap), y = top + row * rh
    const fs = labelSize
    M.box(i, x, y, cw, rh, c.target(i), it.img || photo)
    return `<div class="ab in tocei-row" style="left:${x}px;top:${y}px;width:${cw}px;height:${rh}px;--i:${i + 2}">
      <span style="font:500 24px/1 var(--sans);color:var(--acc);font-variant-numeric:tabular-nums">${c.ed('tocNo' + i, U.no(i))}</span>
      <span class="serif tocei-label" style="font-size:${fs}px;line-height:1.25">${c.ed('it' + i, it.t)}</span>
      <i aria-hidden="true" class="tocei-arrow"></i></div>`
  }).join('')
  return `<style>
    .v-editorial-index{background:var(--paper);background-image:radial-gradient(color-mix(in srgb,var(--ink) 4%,transparent) .7px,transparent .8px);background-size:7px 7px}
    .v-editorial-index .tocei-row{display:flex;align-items:center;gap:24px;border-top:1px solid color-mix(in srgb,var(--ink) 14%,transparent);cursor:pointer}
    .v-editorial-index .tocei-label{flex:1;min-width:0;overflow-wrap:anywhere;text-wrap:balance}
    .v-editorial-index .tocei-row>span:first-child{flex:0 0 36px}
    .v-editorial-index .tocei-row:hover{color:var(--acc)}
    .v-editorial-index .tocei-arrow{margin-left:auto;width:14px;height:14px;flex:0 0 14px;border-top:2px solid var(--acc);border-right:2px solid var(--acc);transform:rotate(45deg);margin-right:4px}
    .v-editorial-index .tocei-photo{animation:tocei-cut .65s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*70ms)}
    @keyframes tocei-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-editorial-index .in{animation:none}}
  </style>
  ${photo ? `<img class="ab hero in tocei-photo" src="${U.esc(photo)}" alt="" style="left:0;top:0;width:740px;height:1080px;object-fit:cover;--i:0">` : '<div class="ab" style="left:0;top:0;width:740px;height:1080px;background:var(--acc)"></div>'}
  <div class="ab in" style="left:120px;bottom:120px;width:500px;padding:30px 32px;background:var(--paper);color:var(--ink);--i:1">
    ${c.meta.title ? `<div class="serif" style="font-size:24px;line-height:1.4">${c.ed('tocM', c.meta.title)}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:24px;line-height:1.5;margin-top:12px">${c.ed('tocDates', c.meta.dates)}</div>` : ''}
  </div>
  <div class="ab in serif" style="left:${left}px;top:98px;width:${width}px;font-size:96px;line-height:1.2;--i:1">${c.ed('tocT', '目錄')}</div>
  ${list}<div class="ab" style="left:${left}px;top:${top + height}px;width:${width}px;border-top:1px solid color-mix(in srgb,var(--ink) 28%,transparent)"></div>`
} }) }

/* variants/toc/fan.js */
// toc／fan：由母片樣品拆出（2026-10-07）
{ const U = M.util
M.add('toc', 'fan', { name: '② 半圓環切扇，每扇一張圖', range: [2, 8], html: c => {
    // 半圓圓心在左緣中點；項目數決定切幾扇。照片填扇，名稱沿半徑放在扇外
    const its = c.items, n = c.n, cx = 0, cy = 540, r0 = 220, r1 = 600, a0 = -62, span = 124, gap = n > 8 ? .5 : 1
    let paths = '', labels = ''
    its.forEach((it, i) => {
      const s = a0 + span * i / n + gap, e = a0 + span * (i + 1) / n - gap, m = (s + e) / 2, rad = m * Math.PI / 180
      const d = U.sector(cx, cy, r0, r1, s, e)
      M.box(i, Math.cos(rad) * (r0 + r1) / 2 - 90, cy + Math.sin(rad) * (r0 + r1) / 2 - 90, 180, 180, c.target(i))
      paths += `<clipPath id="f${i}"><path d="${d}"/></clipPath><image href="${it.img}" x="${cx}" y="${cy - r1}" width="${r1}" height="${2 * r1}" preserveAspectRatio="xMidYMid slice" clip-path="url(#f${i})"/>
        <path d="${d}" fill="none" stroke="#fff" stroke-width="4"/>`
      const ly = cy + Math.sin(rad) * (r1 + 10), lx = r1 + 120, ex = cx + Math.cos(rad) * (r1 + 10), fs = n > 8 ? 28 : 36
      paths += `<line x1="${ex}" y1="${ly}" x2="${lx - 16}" y2="${ly}" stroke="var(--acc)" stroke-width="2" stroke-dasharray="4 6"/>`
      labels += `<div class="ab in" style="left:${lx}px;top:${ly}px;transform:translate(0,-50%);display:flex;align-items:baseline;gap:16px;white-space:nowrap;--i:${i + 2}">
        <b style="font:700 ${n > 8 ? 30 : 40}px var(--serif);color:var(--acc)">${U.no(i)}</b><span class="serif" style="font-size:${fs}px">${c.ed('it' + i, it.t)}</span></div>`
    })
    return `<svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">${paths}
        <circle cx="${cx}" cy="${cy}" r="${r0 - 16}" fill="var(--acc)"/></svg>
      <div class="ab serif" style="left:40px;top:${cy}px;transform:translateY(-50%);color:#fff;writing-mode:vertical-rl;font-size:56px;letter-spacing:.3em">${c.ed('tocT', '目錄')}</div>
      <div class="ab" style="right:120px;top:90px;text-align:right;font-size:22px;letter-spacing:.4em;color:var(--mute)">CONTENTS　${n}</div>${labels}` } }) }

/* variants/toc/numerals.js */
// toc／numerals：細白線把滿版照片切成 n 欄，每欄一個超大編號，一條「透出照片」的橫帶把數字攔腰切斷、章節名寫在帶上，下方淡出倒影
// 學自小紅書 68ac580a000000001d028a83（被領導誇的目錄頁）、68c68265000000001d01f1e0 樣式 2
{ const U = M.util
M.add('toc', 'numerals', { name: '⑥ 大數字分欄＋透圖橫帶', range: [3, 8], html: c => {
    const its = c.items, n = c.n, colW = 1920 / n, fsN = Math.round(Math.min(440, colW * .64 / .62)), base = Math.round(530 + fsN * .365)
    const labelSize = Math.min(...its.map((it,i)=>U.fit(c.tx('it'+i,it.t),(colW-48)*2,n>6?30:36,18)))
    const labelLines = Math.max(...its.map((it,i)=>Math.ceil(U.len(c.tx('it'+i,it.t))*labelSize*1.12/(colW-48))))
    const bandH = Math.max(n>6?60:70,labelLines*labelSize*1.35+16), bandY = 530 - bandH / 2
    let lines = '', nums = '', refl = '', labels = ''
    its.forEach((it, i) => {
      const x = colW * i, cxm = x + colW / 2
      if (i) lines += `<line x1="${x}" y1="${Math.max(220, 530 - fsN * .7)}" x2="${x}" y2="${Math.min(900, base + fsN * .2)}" class="in tocnu-l" style="animation-delay:${i * 90}ms"/>`
      nums += `<text x="${cxm}" y="${base}" text-anchor="middle">${i + 1}</text>`
      refl += `<text x="${cxm}" y="${-base}" text-anchor="middle" transform="scale(1,-1)">${i + 1}</text>`
      const fs = labelSize
      labels += `<div class="ab in" style="left:${x}px;top:${bandY + bandH / 2}px;width:${colW}px;transform:translateY(-50%);text-align:center;color:#fff;padding:0 12px;--i:${i + 4}">
        <span class="serif" style="font-size:${fs}px;letter-spacing:.04em;line-height:1.35;text-shadow:0 2px 10px rgba(0,0,0,.6);background:rgba(10,14,16,.68);box-shadow:0 0 0 8px rgba(10,14,16,.68);box-decoration-break:clone;-webkit-box-decoration-break:clone;overflow-wrap:anywhere">${c.ed('it' + i, it.t)}</span></div>`
      M.box(i, x, 0, colW, 1080, c.target(i))
    })
    return `<style>.v-numerals .tocnu-l{stroke:#fff;stroke-opacity:.3;stroke-width:1;transform-box:fill-box;transform-origin:top;animation:tocnuDrop .9s cubic-bezier(.16,.8,.24,1) both}
        @keyframes tocnuDrop{from{transform:scaleY(0)}}@media (prefers-reduced-motion:reduce){.v-numerals .tocnu-l{animation:none}}</style>
      <img class="ab" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;filter:brightness(.72)">
      <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(10,14,16,.5),rgba(10,14,16,0) 26%,rgba(10,14,16,0) 70%,rgba(10,14,16,.55))"></div>
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs><mask id="tocnu-m" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080"><rect width="1920" height="1080" fill="#fff"/><rect y="${bandY}" width="1920" height="${bandH}" fill="#000"/></mask>
          <linearGradient id="tocnu-rg" gradientUnits="userSpaceOnUse" x1="0" y1="${base}" x2="0" y2="${base + fsN * .55}"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
          <mask id="tocnu-rm" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="1080"><rect y="${base}" width="1920" height="${fsN}" fill="url(#tocnu-rg)"/></mask></defs>
        <g class="in" style="--i:2;font:900 ${fsN}px var(--serif);fill:#fff" mask="url(#tocnu-m)">${nums}</g>
        <g mask="url(#tocnu-rm)"><g style="font:900 ${fsN}px var(--serif);fill:#fff">${refl}</g></g>
        ${lines}</svg>
      <div class="ab in" style="left:120px;top:84px;color:#fff;display:flex;align-items:baseline;gap:26px;--i:1">
        <span class="serif" style="font-size:60px">${c.ed('tocT', '目錄')}</span><span style="font-size:24px;letter-spacing:.5em;opacity:.8">CONTENTS</span></div>
      <div class="ab in" style="right:120px;bottom:70px;color:#fff;font-size:24px;letter-spacing:.2em;opacity:.85;--i:${n + 4}">${c.ed('tocM', c.meta.title)}</div>${labels}` } }) }

/* variants/toc/paper-ink.js */
// 目次・紙墨雙層：左章名／右清單，金色短線分主要章節與行程之外。
{const U=M.util,H=M.paperInk
M.add('toc','paper-ink',{name:'紙墨雙層目次',range:[3,8],auto:false,html:c=>{
  const top=150,height=800,rh=height/c.n
  const primary=it=>it.group==='itinerary'||['day','overview'].includes(it.type)
  const fs=Math.min(40,...c.items.map((it,i)=>U.fit(c.tx('it'+i,it.t||''),760*2,40,28)))
  return H.style+`<style>
  .t-toc.v-paper-ink .pi-row{position:absolute;left:744px;width:1056px;display:flex;align-items:center;gap:28px;border-top:1px solid #1b211a29;cursor:pointer}
  .t-toc.v-paper-ink .pi-row:before{content:"";position:absolute;left:-26px;top:50%;width:var(--pi-tick);height:2px;background:var(--acc)}
  .t-toc.v-paper-ink .pi-row:last-child{border-bottom:1px solid #1b211a29}
  .t-toc.v-paper-ink .pi-num{flex:0 0 90px;color:var(--pi-moss);font-size:40px}
  .t-toc.v-paper-ink .pi-row-copy{flex:1;min-width:0}
  </style>
  <div class="ab" style="left:0;top:0;width:30%;height:1080px;background:var(--pi-deep)"></div>
  <div class="ab" style="left:30%;top:0;width:52px;height:1080px;background:var(--pi-moss)"></div>
  <div class="ab" style="left:calc(30% + 52px);top:210px;width:5px;height:660px;background:var(--acc)"></div>
  <div class="pi-copy pi-serif pi-title pi-reveal" style="left:120px;top:222px;width:380px;font-size:96px;color:var(--paper)">${c.ed('h',c.p.title||'目次')}</div>
  <div class="pi-copy" style="left:120px;top:480px;width:380px;font-size:28px;color:#d5d2c4">${c.ed('trip',c.meta.title||'')}</div>
  <div class="pi-copy" style="left:120px;top:974px;width:380px;font-size:28px;color:#b9baaa">${c.ed('agency',c.meta.agency||'')}</div>`
  +H.decoration(c,'wave','left:-46px;bottom:26px;width:262px;opacity:.055')
  +H.decoration(c,'seal','left:120px;bottom:150px;width:112px')
  +c.items.map((it,i)=>{
    const dest=c.destination(i),major=primary(it)||['day','overview'].includes(dest?.p.type),y=top+i*rh
    M.box(i,718,y,1082,rh,c.target(i),it.img)
    return `<div class="pi-row" style="top:${y}px;height:${rh}px;--pi-tick:${major?16:36}px">
    <div class="pi-num pi-serif">${c.ed('no'+i,U.no(i))}</div>
    <div class="pi-row-copy"><div class="pi-serif" style="font-size:${fs}px;line-height:1.25">${c.ed('it'+i,it.t||'')}</div>
    ${it.sub?`<div style="font-size:28px;line-height:1.3;margin-top:8px;color:#4A5247">${c.ed('sub'+i,it.sub)}</div>`:''}</div></div>`
  }).join('')
},enter:(root,c,{settled,delay=0})=>settled?undefined:H.motion(H.titleMotion(root,delay))})
}

/* variants/toc/photo-chapters.js */
// toc/continuity: cover photos become circles; a chapter circle opens into the actual destination image.
{ const U = M.util, H = M.continuity
M.add('toc', 'photo-chapters', { name: '圓照章節', range: [3, 8], order: 1000, html: c => {
  const top = 150, row = 820 / c.n, size = Math.min(120, row - 20)
  const rows = c.items.map((item, i) => {
    const dest = c.destination(i), src = dest?.p.img || dest?.items.find(x => x.img)?.img
    const y = top + i * row
    M.box(i, 820, y, 980, row, c.target(i), src)
    return H.photo(src, 850, y + (row - size) / 2, size, size, size / 2)
      + `<div class="ct-copy ct-row" data-shared-copy style="left:1010px;top:${y}px;width:790px;height:${row}px;display:flex;align-items:center;gap:28px">
      <span style="font-size:22px;color:var(--acc)">${c.ed('no' + i, U.no(i))}</span><div class="serif" style="font-size:${U.fit(c.tx('t' + i, item.t), 690, 42, 16)}px">${c.ed('t' + i, H.clean(item.t))}</div></div>`
  }).join('')
  return H.style + H.photo(c.meta.hero, 120, 290, 520, 520, 260, true)
    + H.title(c, 'trip', c.meta.title || '', 'trip:title', 120, 120, 590, 58)
    + `<div class="ct-copy" data-shared-copy style="left:120px;top:870px;width:590px;font-size:26px;color:var(--acc)">${c.ed('h', '旅程章節')}</div>
    <div class="ct-copy" data-shared-copy style="left:120px;top:930px;width:590px;font-size:23px">${c.ed('dates', c.meta.dates || '')}</div>` + rows
} }) }

/* variants/toc/photo-montage.js */
{ const U = M.util
M.add('toc', 'photo-montage', { name: '照片拼接・長景與錯縫', range: [3, 8], html: c => {
  const gap = 12, left = 120, top = 264, height = 696
  const lead = c.n <= 4 ? 600 : 520, rest = c.n - 1, rows = rest <= 2 ? 1 : 2
  const per = Math.ceil(rest / rows), width = 1680 - lead - gap
  const pool = c.meta.pool || [], used = new Set()
  const panels = c.items.map((it, i) => {
    let x = left, y = top, w = lead, h = height
    if (i) {
      const row = Math.floor((i - 1) / per), col = (i - 1) % per
      const count = Math.min(per, rest - row * per), unit = (width - gap * (count - 1)) / (count + .25)
      const wide = row === 0 ? 0 : count - 1
      w = unit * (col === wide ? 1.25 : 1)
      x += lead + gap + col * (unit + gap) + (col > wide ? unit * .25 : 0)
      h = rows === 1 ? height : (height - gap) * (row === 0 ? .54 : .46)
      y += row ? (height - gap) * .54 + gap : 0
    }
    // 章節的已知題材優先從本團 pool 配圖，避免航班章使用餐桌照；其餘保留項目原圖
    const subject = /航班|集合/.test(it.t) ? /arrival|airport|flight/i : /餐食|料理/.test(it.t) ? /hanjeongsik|food|dining/i : null
    let photo = (subject && pool.find(p => subject.test(p))) || it.img || pool[i % pool.length] || c.p.img || c.meta.hero
    if (used.has(photo)) photo = pool.find(p => !used.has(p)) || photo
    if (photo) used.add(photo)
    const fs = U.fit(c.tx('it' + i, it.t), w - 56, i ? 40 : 52, 24)
    M.box(i, x, y, w, h, c.target(i), photo)
    return `<div class="ab in tocm-panel" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;--i:${i}">
      ${photo ? `<img ${i === 0 ? 'class="hero"' : ''} src="${U.esc(photo)}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">` : ''}
      <div class="tocm-shade"></div>
      <div class="tocm-no" style="font-size:${i ? 30 : 46}px">${c.ed('tocNo' + i, U.no(i))}</div>
      <div class="serif tocm-label" style="font-size:${fs}px">${c.ed('it' + i, it.t)}</div>
    </div>`
  }).join('')
  return `<style>
    .v-photo-montage{background:var(--paper)}
    .v-photo-montage .tocm-panel{overflow:hidden;border-radius:14px;border:1px solid color-mix(in srgb,var(--ink) 18%,transparent);background:var(--acc);animation:tocm-cut .65s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--i)*55ms)}
    .v-photo-montage .tocm-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.38),transparent 35%,transparent 48%,rgba(0,0,0,.82))}
    .v-photo-montage .tocm-no{position:absolute;left:28px;top:24px;color:#fff;font-family:var(--serif);line-height:1.2;font-variant-numeric:tabular-nums}
    .v-photo-montage .tocm-label{position:absolute;left:28px;right:28px;bottom:28px;color:#fff;line-height:1.3;overflow-wrap:anywhere}
    @keyframes tocm-cut{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
    @media(prefers-reduced-motion:reduce){.v-photo-montage .in{animation:none}}
  </style>
  <div class="ab in serif" style="left:120px;top:76px;width:600px;font-size:${U.fit(c.tx('tocT', '目錄'), 600, 116, 32)}px;line-height:1.2;--i:0">${c.ed('tocT', '目錄')}</div>
  <div class="ab in" style="right:120px;top:104px;width:850px;text-align:right;--i:1">
    ${c.meta.title ? `<div class="serif" style="font-size:${U.fit(c.tx('tocM', c.meta.title), 850, 32, 24)}px;line-height:1.4">${c.ed('tocM', c.meta.title)}</div>` : ''}
    ${c.meta.dates ? `<div style="font-size:22px;line-height:1.5;margin-top:12px;color:var(--acc)">${c.ed('tocD', c.meta.dates)}</div>` : ''}
  </div>${panels}`
} }) }

/* variants/toc/slant.js */
// toc／slant：由母片樣品拆出（2026-10-07）
{ const U = M.util
M.add('toc', 'slant', { name: '③ 平行四邊形斜切欄＋大數字', range: [2, 6], html: c => {
    // 2～5 項一排滿版斜切；6～10 項上下兩排
    const its = c.items, n = c.n, rows = n > 4 ? 2 : 1, per = Math.ceil(n / rows), sk = 120
    const X0 = 60, X1 = 1860, Y0 = rows === 1 ? 210 : 190, H = rows === 1 ? 790 : 400, gap = 18
    const w = (X1 - X0 - sk - gap * (per - 1)) / per
    let defs = '', body = '', labels = ''
    its.forEach((it, i) => {
      const r = Math.floor(i / per), col = i % per, x = X0 + col * (w + gap), y = Y0 + r * (H + 20)
      const pts = `${x + sk},${y} ${x + sk + w},${y} ${x + w},${y + H} ${x},${y + H}`
      defs += `<clipPath id="k${i}"><polygon points="${pts}"/></clipPath>`; M.box(i, x + sk / 2, y, w, H, c.target(i))
      body += `<image href="${it.img}" x="${x}" y="${y}" width="${w + sk}" height="${H}" preserveAspectRatio="xMidYMid slice" clip-path="url(#k${i})"/>
        <polygon points="${pts}" fill="url(#gd)" />`
      labels += `<div class="ab in" style="left:${x + 40}px;top:${y + H - (rows === 1 ? 260 : 170)}px;width:${w - 20}px;color:#fff;--i:${i + 2}">
        <div style="font:900 ${rows === 1 ? 150 : 90}px/1 var(--serif);opacity:.92">${U.no(i)}</div>
        <div class="serif" style="font-size:${U.fit(c.tx('it' + i, it.t), w - 40, rows === 1 ? 40 : 30, 18)}px;margin-top:8px">${c.ed('it' + i, it.t)}</div></div>`
    })
    return `<div class="ab" style="inset:0;background:#15191b"></div><svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs>${defs}<linearGradient id="gd" x1="0" y1="0" x2="0" y2="1"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".72"/></linearGradient></defs>${body}</svg>
      <div class="ab in" style="left:120px;top:${rows === 1 ? 70 : 60}px;color:#fff;display:flex;align-items:baseline;gap:30px;--i:1">
        <span class="serif" style="font-size:72px">${c.ed('tocT', '目錄')}</span><span style="font-size:22px;letter-spacing:.5em;opacity:.7">CONTENTS</span></div>${labels}` } }) }

/* variants/toc/strip.js */
// toc／strip：由母片樣品拆出（2026-10-07）
{ const U = M.util
M.add('toc', 'strip', { name: '① 模糊底＋清晰直條窗', range: [2, 8], html: c => {
    // 2～10 項一排；11～20 項上下兩排。每條窗＝同一張照片清晰的那一段（位置對齊模糊底），看起來像底圖被切開
    const its = c.items, n = c.n, rows = n > 10 ? 2 : 1, per = Math.ceil(n / rows)
    const X0 = 640, X1 = 1820, Y0 = rows === 1 ? 170 : 110, H = rows === 1 ? 780 : 410, gap = per > 7 ? 16 : 26
    const w = (X1 - X0 - gap * (per - 1)) / per
    let clips = '', labels = ''
    its.forEach((it, i) => {
      const r = Math.floor(i / per), col = i % per, x = X0 + col * (w + gap), y = Y0 + r * (H + 60)
      clips += `<rect x="${x}" y="${y}" width="${w}" height="${H}"></rect>`; M.box(i, x, y, w, H, c.target(i))
      const fs = U.fit(c.tx('it' + i, it.t), w - 20, rows === 1 ? 34 : 26, 16)
      labels += `<div class="ab in" style="left:${x}px;top:${y + H - 150}px;width:${w}px;padding:0 ${w > 120 ? 16 : 8}px;color:#fff;--i:${i + 2}">
        <div style="font:700 ${rows === 1 ? 64 : 40}px/1 var(--serif);text-shadow:0 4px 18px rgba(0,0,0,.5)">${U.no(i)}</div>
        <div style="font:700 ${fs}px/1.3 var(--serif);margin-top:10px;text-shadow:0 2px 12px rgba(0,0,0,.6)">${c.ed('it' + i, it.t)}</div></div>`
    })
    return `<img class="ab" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;filter:blur(18px) brightness(.62);transform:scale(1.08)">
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs><clipPath id="sc">${clips}</clipPath><filter id="sh"><feDropShadow dx="0" dy="18" stdDeviation="16" flood-opacity=".55"/></filter></defs>
        <g filter="url(#sh)"><image href="${c.meta.hero}" x="0" y="0" width="1920" height="1080" preserveAspectRatio="xMidYMid slice" clip-path="url(#sc)"/></g>
        <linearGradient id="sg" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1"><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".7"/></linearGradient>
        <g fill="url(#sg)">${clips.replace(/<rect /g, '<rect ')}</g>
        <g fill="none" stroke="#ffffff55" stroke-width="2">${clips}</g></svg>
      <div class="ab in" style="left:120px;top:170px;color:#fff;--i:1"><div style="font-size:22px;letter-spacing:.5em;opacity:.8">CONTENTS</div>
        <div class="serif" style="font-size:96px;line-height:1.1;margin-top:14px">${c.ed('tocT', '目錄')}</div>
        <div style="font-size:24px;margin-top:20px;opacity:.85;max-width:420px;line-height:1.7">${c.ed('tocS', '共 ' + n + ' 個單元')}</div></div>${labels}` } }) }

/* variants/toc/tilt.js */
// toc／tilt：上半一扇斜置 -6° 的大圓角窗透出照片，窗下錯位一層厚邊；章節圓點等距落在窗的斜底邊上，越往右越高，像行程往前推進
// 學自小紅書 6940c8e1000000000d00d2a4（目錄頁這樣做，匯報開篇直接驚豔）
{ const U = M.util
M.add('toc', 'tilt', { name: '⑧ 斜窗階梯（圓點落在斜邊）', range: [3, 8], html: c => {
    const its = c.items, n = c.n, th = -6, cxw = 960, cyw = 150, hw = 1300, hh = 560, rad = th * Math.PI / 180
    // 窗＝以 (960,300) 為中心、旋轉 -6° 的圓角矩形；底邊直線 y(x)
    const bx = cxw - hh * Math.sin(rad), by = cyw + hh * Math.cos(rad), slope = Math.tan(rad), edgeY = x => by + (x - bx) * slope
    const cw = 1680 / n, win = `<rect x="${cxw - hw}" y="${cyw - hh}" width="${hw * 2}" height="${hh * 2}" rx="56" transform="rotate(${th} ${cxw} ${cyw})"/>`
    let dots = '', labels = ''
    its.forEach((it, i) => {
      const x = 120 + cw * (i + .5), y = edgeY(x), fs = U.fit(c.tx('it' + i, it.t), cw - 24, n > 6 ? 30 : 36, 18)
      dots += `<circle class="in" cx="${x}" cy="${y}" r="13" fill="var(--acc2)" stroke="#fff" stroke-width="5" style="--i:${i + 4}"/>`
      labels += `<div class="ab in" style="left:${x - cw / 2}px;top:${y + 34}px;width:${cw}px;text-align:center;--i:${i + 5}">
        <div class="serif" style="font-size:${fs}px;line-height:1.3">${c.ed('it' + i, it.t)}</div>
        <b style="display:block;font:900 ${n > 6 ? 64 : 84}px/1 var(--serif);color:color-mix(in srgb,var(--acc3) 62%,transparent);margin-top:10px">${U.no(i)}</b></div>`
      M.box(i, x - cw / 2 + 8, y - 120, cw - 16, 300, c.target(i))
    })
    return `<div class="ab" style="inset:0;background:linear-gradient(180deg,color-mix(in srgb,var(--acc3) 70%,#fff) 0%,var(--paper) 78%)"></div>
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs><clipPath id="toctl-win">${win}</clipPath>
          <linearGradient id="toctl-edge" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="var(--acc3)" stop-opacity="0"/><stop offset="1" stop-color="var(--acc3)"/></linearGradient></defs>
        <g transform="translate(12 14)" fill="url(#toctl-edge)">${win}</g>
        <image href="${c.meta.hero}" x="0" y="0" width="1920" height="1080" preserveAspectRatio="xMidYMid slice" clip-path="url(#toctl-win)"/>
        <g clip-path="url(#toctl-win)"><rect width="1920" height="1080" fill="url(#toctl-shade)"/></g>
        <linearGradient id="toctl-shade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a0e10" stop-opacity=".5"/><stop offset=".45" stop-color="#0a0e10" stop-opacity="0"/></linearGradient>
        ${dots}</svg>
      <div class="ab in" style="left:120px;top:90px;color:#fff;--i:1">
        <div class="serif" style="font-size:88px;line-height:1;text-shadow:0 4px 24px rgba(0,0,0,.4)">${c.ed('tocT', '目錄')}</div>
        <div style="font-size:20px;letter-spacing:.5em;margin-top:16px;opacity:.9">CONTENTS</div></div>${labels}` } }) }

/* variants/toc/torn.js */
// toc／torn：照片上撕開一條米色紙帶（上緣起伏大、下緣較平，白色毛邊＋陰影），章節清單排在紙帶裡，編號是細斜體大字
// 學自小紅書 6a02ded4000000003601c5c7（敦煌風撕紙目錄）、69c9f97c000000001a0245d6（一個撕紙技巧做整套）
{ const U = M.util
M.add('toc', 'torn', { name: '⑨ 撕紙帶清單', range: [3, 8], html: c => {
    const its = c.items, n = c.n, rows = n > 4 ? 2 : 1, per = Math.ceil(n / rows)
    const T = rows === 1 ? 610 : 530, B = rows === 1 ? 910 : 970
    // 撕邊：固定種子的雜訊（同一份資料每次長一樣），上緣振幅大、下緣小
    const rnd = s => { const x = Math.sin(s * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x) }
    const edge = (y0, amp, seed, dir) => { const pts = []; for (let x = -20, k = 0; x <= 1940; x += 30, k++) pts.push([x, y0 + Math.sin(x / 260 + seed) * amp * .55 + (rnd(k + seed * 97) - .5) * amp]); return dir < 0 ? pts.reverse() : pts }
    const top = edge(T, 26, 1, 1), bot = edge(B, 12, 5, -1), d = 'M' + top.concat(bot).map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L') + ' Z'
    const cw = 1680 / per, rh = (B - T - 60) / rows
    let list = ''
    its.forEach((it, i) => {
      const r = Math.floor(i / per), k = i % per, cnt = r === rows - 1 ? n - per * (rows - 1) : per
      const x = 120 + k * cw + (per - cnt) * cw / 2, y = T + 30 + r * rh, fs = U.fit(c.tx('it' + i, it.t), cw - 150, rows === 1 ? 40 : 34, 18)
      list += `<div class="ab in" style="left:${x}px;top:${y + rh / 2}px;width:${cw - 20}px;transform:translateY(-50%);display:flex;align-items:baseline;gap:16px;--i:${i + 4}">
        <b style="font:italic 400 ${rows === 1 ? 76 : 60}px/1 var(--serif);color:var(--acc2);letter-spacing:-.02em">${U.no(i)}.</b>
        <span class="serif" style="font-size:${fs}px;color:var(--ink);white-space:nowrap">${c.ed('it' + i, it.t)}</span></div>`
      M.box(i, x, y, cw - 20, rh, c.target(i))
    })
    return `<style>.v-torn .tocto-band{transform-box:view-box;transform-origin:960px ${(T + B) / 2}px;animation:toctoOpen .9s cubic-bezier(.2,.8,.2,1) both}
        @keyframes toctoOpen{from{transform:scaleY(.04)}}@media (prefers-reduced-motion:reduce){.v-torn .tocto-band{animation:none}}</style>
      <img class="ab" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;filter:brightness(.9)">
      <div class="ab" style="inset:0;background:linear-gradient(180deg,rgba(10,14,16,.45),rgba(10,14,16,0) 30%)"></div>
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs><filter id="tocto-sh" x="-5%" y="-30%" width="110%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-opacity=".4"/></filter>
          <filter id="tocto-fib"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="10"/></filter></defs>
        <g class="in tocto-band"><g filter="url(#tocto-sh)"><path d="${d}" fill="#fff" stroke="#fff" stroke-width="14" filter="url(#tocto-fib)"/></g>
          <path d="${d}" fill="#f2ebdd"/></g></svg>
      <div class="ab in" style="left:120px;top:90px;color:#fff;display:flex;align-items:baseline;gap:28px;--i:1">
        <span class="serif" style="font-size:80px;text-shadow:0 4px 20px rgba(0,0,0,.45)">${c.ed('tocT', '目錄')}</span>
        <span style="font-size:20px;letter-spacing:.5em;opacity:.9">CONTENTS</span></div>
      <div class="ab in" style="right:120px;top:120px;color:#fff;font-size:24px;letter-spacing:.2em;text-shadow:0 2px 12px rgba(0,0,0,.5);--i:${n + 4}">${c.ed('tocM', c.meta.title)}</div>${list}` } }) }

/* variants/toc/wheel.js */
// toc／wheel：只露右半邊的轉盤目錄（學自小紅書 69e3743e000000002003b36f「1 個輪盤旋轉」，William 說這篇好）
// 鏡片（清晰照片）、白環、扇格三層同一個圓心，包在同一個 <g> 裡整組一起轉進來——不准各層分開動。
// 有章節的扇格寫編號，其餘扇格只是轉盤的刻度；章節名橫排在轉盤外緣，跟著扇格的中線。
{ const U = M.util
M.add('toc', 'wheel', { name: '⑤ 右半轉盤（鏡片＋扇格同心一起轉）', range: [3, 8], html: c => {
    const its = c.items, n = c.n, cx = -110, cy = 540, rL = 300, rW0 = 306, rW1 = 336, r0 = 344, r1 = 690, rT = 742
    // 扇格角度：章節排在 3 點鐘上下，最外一格的中線不超過 ±35°（再大字就跑出上下緣）
    const want = Math.min(32, 70 / Math.max(1, n - 1)), total = Math.ceil(360 / want), a = 360 / total, gap = Math.min(1.4, a * .1)
    const mid = i => (i - (n - 1) / 2) * a, P = (r, d) => [cx + r * Math.cos(d * Math.PI / 180), cy + r * Math.sin(d * Math.PI / 180)]
    let secs = '', nums = '', labels = ''
    for (let k = 0; k < total; k++) {
      // 第 k 格（從最上面那個章節格往下數），中線角度 = mid(0) + k*a
      const m = mid(0) + k * a, isItem = k < n
      secs += `<path d="${U.sector(cx, cy, r0, r1, m - a / 2 + gap / 2, m + a / 2 - gap / 2)}" fill="${isItem ? 'rgba(12,16,18,.62)' : 'rgba(12,16,18,.26)'}" stroke="rgba(255,255,255,${isItem ? .32 : .14})" stroke-width="1.5"/>`
      if (isItem) { const [x, y] = P(520, m); nums += `<text x="${x}" y="${y}" transform="rotate(${m} ${x} ${y})" text-anchor="middle" dominant-baseline="central" fill="#fff" style="font:900 ${n > 6 ? 40 : 54}px var(--serif);letter-spacing:.04em">${U.no(k)}</text>` }
    }
    its.forEach((it, i) => {
      const m = mid(i), [x0, y0] = P(r1 + 8, m), [x1, y1] = P(rT - 14, m), [x, y] = P(rT, m)
      const fs = U.fit(c.tx('it' + i, it.t), 1800 - x - 40, n > 6 ? 40 : 48, 24)
      labels += `<svg class="ab in" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px;pointer-events:none;--i:${i + 8}"><line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" stroke="#fff" stroke-width="2" stroke-opacity=".7"/><circle cx="${x0}" cy="${y0}" r="4" fill="#fff"/></svg>
        <div class="ab in" style="left:${x}px;top:${y}px;transform:translateY(-50%);display:flex;align-items:baseline;gap:18px;white-space:nowrap;color:#fff;--i:${i + 8}">
          <span class="serif" style="font-size:${fs}px;text-shadow:0 2px 14px rgba(0,0,0,.55)">${c.ed('it' + i, it.t)}</span></div>`
      M.box(i, x - 10, y - fs, Math.min(1800 - x, fs * (U.len(c.tx('it' + i, it.t)) + 2)), fs * 2, c.target(i))
    })
    return `<style>.v-wheel .whl{transform-box:view-box;transform-origin:${cx}px ${cy}px;animation:tocWheelSpin 1.3s cubic-bezier(.6,0,.2,1) both}
        @keyframes tocWheelSpin{from{transform:rotate(-${(a * 2.5).toFixed(1)}deg)}}@media (prefers-reduced-motion:reduce){.v-wheel .whl{animation:none}}</style>
      <img class="ab" src="${c.meta.hero}" alt="" style="inset:0;width:1920px;height:1080px;object-fit:cover;filter:brightness(.48) saturate(.9)">
      <div class="ab" style="inset:0;background:linear-gradient(90deg,rgba(10,14,16,0) 30%,rgba(10,14,16,.45))"></div>
      <svg class="ab" viewBox="0 0 1920 1080" style="inset:0;width:1920px;height:1080px">
        <defs><clipPath id="tocwh-lens"><circle cx="${cx}" cy="${cy}" r="${rL}"/></clipPath>
          <linearGradient id="tocwh-lg" x1="0" y1="0" x2="1" y2="0"><stop offset=".55" stop-color="#0a0e10" stop-opacity=".42"/><stop offset="1" stop-color="#0a0e10" stop-opacity=".05"/></linearGradient>
          <filter id="tocwh-sh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="14" flood-opacity=".5"/></filter></defs>
        <g class="whl in">${secs}
          <circle cx="${cx}" cy="${cy}" r="${(rW0 + rW1) / 2}" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="${rW1 - rW0}"/>
          <g filter="url(#tocwh-sh)"><image href="${c.meta.hero}" x="0" y="0" width="1920" height="1080" preserveAspectRatio="xMidYMid slice" clip-path="url(#tocwh-lens)"/></g>
          <circle cx="${cx}" cy="${cy}" r="${rL}" fill="#0a0e10" fill-opacity=".3"/>
          ${nums}</g></svg>
      <div class="ab in" style="left:44px;top:${cy}px;transform:translateY(-50%);display:flex;gap:14px;align-items:center;color:#fff;--i:3">
        <div class="serif" style="writing-mode:vertical-rl;font-size:76px;letter-spacing:.3em;text-shadow:0 3px 18px rgba(0,0,0,.55)">${c.ed('tocT', '目錄')}</div>
        <div style="writing-mode:vertical-rl;font-size:18px;letter-spacing:.6em;opacity:.85">CONTENTS</div></div>
      <div class="ab in" style="right:120px;bottom:96px;text-align:right;color:#fff;--i:${n + 9}">
        <div style="font-size:20px;letter-spacing:.4em;opacity:.7">${c.ed('tocK', 'CHAPTER ' + n)}</div>
        <div class="serif" style="font-size:34px;margin-top:8px;opacity:.92">${c.ed('tocM', c.meta.title)}</div></div>${labels}` } }) }
