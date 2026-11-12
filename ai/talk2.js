// 本案專用版型第二批（2026-11-11）：封面、目錄、雙圓餅、三缺口、內嵌紙雕旅程、可翻頁手冊、入境卡與金流示範動畫。
// 只放在這份成品，未收進母片。示範動畫的資料全是示範值。
{ const U=M.util, K=M.company, T=K.text, E=U.esc
const opt={auto:false,order:100,accepts:p=>!p.video}
const css=`<style>
.t2{position:absolute;inset:0;background:var(--paper);color:var(--ink);overflow:hidden}
.t2 *{box-sizing:border-box}
.t2 h2{margin:0;font:700 68px/1.3 var(--serif)}
.t2 .lead{font-size:32px;line-height:1.6;margin-top:16px;color:color-mix(in srgb,var(--ink) 78%,transparent)}
.t2 .a{animation:t2in .7s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--t,0)*1s)}
@keyframes t2in{from{opacity:0;transform:translateY(22px)}}
.t2 .lab{font-size:28px;letter-spacing:.12em;color:var(--acc)}
.t2 .card{background:#fff;border:1px solid var(--line);box-shadow:0 14px 44px rgba(0,0,0,.1)}
.t2 button{font:600 30px var(--sans);cursor:pointer;border:2px solid var(--ink);background:var(--paper);color:var(--ink);padding:14px 30px}
.t2 button.pri{background:var(--acc);border-color:var(--acc);color:#fff}
.t2 .src{position:absolute;left:120px;right:120px;bottom:48px;font-size:26px;color:var(--mute)}
@media (prefers-reduced-motion:reduce){.t2 *{animation:none!important}}
</style>`
const head=(c,top=84)=>`<div class="a" style="position:absolute;left:120px;top:${top}px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2>${c.p.body?`<div class="lead">${E(T(c.p.body))}</div>`:''}</div>`

const deco=(h,path=true)=>{const d=`M-40 ${h-70} C 480 ${h-300}, 1280 ${h-30}, 1980 110`
 return `<style>@keyframes t2dash{to{stroke-dashoffset:-44}}@keyframes t2fly{from{offset-distance:0%}to{offset-distance:100%}}.t2 .dk h2,.t2 .dkt{color:#f4eee2}.t2 .gold{color:#e9c88a!important}</style>
 <div style="position:absolute;left:0;top:0;width:1920px;height:${h}px;background:#16332d;overflow:hidden">
 <div style="position:absolute;right:-160px;top:-220px;width:600px;height:600px;border-radius:50%;background:rgba(255,255,255,.05)"></div>
 <div style="position:absolute;left:-120px;top:${h-220}px;width:380px;height:380px;border-radius:50%;background:rgba(255,255,255,.04)"></div>
 ${path?`<svg viewBox="0 0 1920 ${h}" width="1920" height="${h}" style="position:absolute;inset:0"><path d="${d}" fill="none" style="stroke:#e9c88a;stroke-width:3;stroke-dasharray:4 18;stroke-linecap:round;opacity:.5;animation:t2dash 1.6s linear infinite"/><circle r="10" style="fill:#e9c88a;offset-path:path('${d}');animation:t2fly 8s linear infinite"/><circle r="22" style="fill:none;stroke:#e9c88a;stroke-width:2;opacity:.5;offset-path:path('${d}');animation:t2fly 8s linear infinite"/></svg>`:''}</div>`}
const headD=(c,top=84)=>`<div class="a dk" style="position:absolute;left:120px;top:${top}px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2></div>`
const src=c=>c.p.sub?`<div class="src a" style="--t:${c.p.subDelay||1};${c.p.srcSize?'font-size:'+c.p.srcSize+'px;line-height:1.4;bottom:36px':''}">${E(T(c.p.sub))}</div>`:''

// ── 封面：照片慢推、雙品牌、放大的副標
M.add('cover','talk-cover',{name:'演講・封面',html:c=>{const hero=c.p.img||c.meta.hero
 return `${css}<style>.t2 .kb{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:t2kb 14s ease-out both}@keyframes t2kb{from{transform:scale(1.12)}}</style>
 <section class="t2" style="background:#111;color:#fff"><img class="kb hero" src="${E(hero)}" alt="">
 <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,16,14,.86) 0,rgba(10,16,14,.55) 46%,rgba(10,16,14,0) 78%)"></div>
 <div class="a" style="position:absolute;left:120px;top:110px;--t:.3"><div style="font:700 48px/1.3 var(--serif);letter-spacing:.14em">${E(c.p.brand1||'')}</div><div style="width:84px;height:3px;background:#fff;margin:18px 0"></div><div style="font:700 48px/1.3 var(--serif);letter-spacing:.14em">${E(c.p.brand2||'')}</div></div>
 <div style="position:absolute;left:120px;bottom:190px;width:1500px"><div class="a" style="font:900 168px/1.15 var(--serif);--t:.8">${c.ed('title',c.p.title||c.meta.title||'')}</div>
 <div class="a" style="font:700 76px/1.3 var(--serif);margin-top:26px;--t:1.5">${c.ed('sub',c.p.sub||c.meta.sub||'')}</div></div>
 <div class="a" style="position:absolute;left:120px;bottom:64px;font-size:48px;font-family:var(--serif);letter-spacing:.08em;--t:2.1">${E(c.meta.dates||'')}</div></section>`}})

// ── 目錄：左標題、右四列，各配一個圖示
M.add('company','talk-toc',{...opt,name:'演講・目錄',range:[2,5],html:c=>{const rh=Math.floor(840/c.n)
 return `${css}<section class="t2"><div style="position:absolute;left:0;top:0;width:600px;height:1080px;background:var(--ink);color:var(--paper)"></div>
 <div class="a" style="position:absolute;left:100px;top:300px;width:420px;color:var(--paper)"><div style="font-size:30px;letter-spacing:.3em;opacity:.7">${E(c.p.en||'')}</div><h2 style="font-size:150px;line-height:1.2;margin-top:10px">${c.ed('h',c.p.title||'目錄')}</h2><div style="width:84px;height:4px;background:var(--acc);margin:36px 0"></div><div style="font-size:30px;line-height:1.7;opacity:.85">${E(c.p.body||'')}</div></div>
 <div style="position:absolute;left:700px;top:120px;width:1100px;height:840px">
 ${c.items.map((it,i)=>`<article class="a" style="--t:${.4+i*.25};height:${rh}px;display:grid;grid-template-columns:150px 110px 1fr;gap:34px;align-items:center;${i?'border-top:1px solid var(--line)':''}">
  <div style="width:150px;height:150px;border-radius:50%;overflow:hidden;background:color-mix(in srgb,var(--acc) 12%,var(--paper))">${K.photo(it.img)?`<img src="${E(K.photo(it.img))}" alt="" style="width:100%;height:100%;object-fit:cover">`:''}</div>
  <div style="font:700 76px/1 var(--serif);color:var(--acc)">0${i+1}</div>
  <div><div style="font:700 56px/1.3 var(--serif)">${c.ed('t'+i,T(it.t))}</div><div style="font-size:32px;line-height:1.5;margin-top:8px;color:var(--mute)">${c.ed('b'+i,T(it.body))}</div></div></article>`).join('')}
 </div></section>`}})

// ── 雙圓餅：左右各一個，數字在圓心；show=1 只出左邊，show=2 左邊不重播、右邊畫出來
const donut=(it,x,animate,t0)=>{const r=200,C=2*Math.PI*r,f=Math.max(0,Math.min(100,+it.value||0))/100,arc=(C*f).toFixed(1)
 const ring=(dy,color,dash)=>`<circle cx="300" cy="${300+dy}" r="${r}" fill="none" stroke="${color}" stroke-width="84" ${dash}/>`
 const an=animate?`style="animation:t2arc 1.8s cubic-bezier(.3,.7,.2,1) both;animation-delay:${t0+.4}s"`:''
 return `<div class="${animate?'a':''}" style="position:absolute;left:${x}px;top:215px;width:780px;--t:${t0}">
 <div style="position:relative;width:500px;height:533px;margin:0 auto">
 <svg viewBox="0 0 600 640" width="500" height="533" style="position:absolute;inset:0;overflow:visible">
  <ellipse cx="300" cy="590" rx="230" ry="26" fill="rgba(0,0,0,.10)"/>
  <g transform="rotate(-90 300 322)">${ring(0,'color-mix(in srgb,var(--ink) 30%,var(--paper))','transform="translate(-22 0)"')}<circle cx="278" cy="300" r="${r}" fill="none" stroke="color-mix(in srgb,var(--acc) 62%,#000)" stroke-width="84" stroke-dasharray="${arc} ${C.toFixed(1)}" ${an} class="arc"/></g>
  <g transform="rotate(-90 300 300)">${ring(0,'color-mix(in srgb,var(--ink) 13%,var(--paper))','')}<circle cx="300" cy="300" r="${r}" fill="none" stroke="var(--acc)" stroke-width="84" stroke-dasharray="${arc} ${C.toFixed(1)}" ${an} class="arc"/></g>
 </svg>
 <div style="position:absolute;left:0;top:0;width:500px;height:500px;display:grid;place-items:center"><div class="${animate?'pop':''}" style="font:900 118px/1 var(--serif);color:var(--acc);${animate?`animation-delay:${t0+2}s`:''}">${E(it.t)}</div></div></div>
 <div style="text-align:center;margin-top:6px"><div style="font:700 32px/1.45 var(--serif)">${E(T(it.body))}</div><div style="font-size:32px;line-height:1.5;margin-top:6px;color:var(--mute)">${E(T(it.sub||''))}</div></div></div>`}
M.add('company','talk-donut',{...opt,name:'演講・雙圓餅',range:[1,2],html:c=>{const show=+c.p.show||c.n
 return `${css}<style>@keyframes t2arc{from{stroke-dasharray:0 1300}}.t2 .pop{animation:t2pop 1s cubic-bezier(.2,1.6,.3,1) both}@keyframes t2pop{0%{transform:scale(.4);opacity:0}60%{transform:scale(1.25);opacity:1}100%{transform:scale(1)}}</style>
 <section class="t2">${head(c)}${c.items.slice(0,show).map((it,i)=>donut(it,i?1020:120,i===show-1,.5)).join('')}
 ${show===1?'':`<div style="position:absolute;left:959px;top:300px;width:2px;height:600px;background:var(--line)"></div>`}${src(c)}</section>`}})

// ── 三缺口：插圖＋具體內容，逐條出現
M.add('company','talk-lacks',{...opt,name:'演講・三缺口',range:[2,3],html:c=>`${css}<style>.t2 .pic{height:440px;overflow:hidden;background:color-mix(in srgb,var(--acc) 8%,var(--paper))}.t2 .pic img{width:100%;height:100%;object-fit:cover;object-position:center 62%;animation:t2float 6s ease-in-out infinite alternate}@keyframes t2float{from{transform:scale(1.04) translateY(-6px)}to{transform:scale(1.1) translateY(6px)}}
 .t2 .li{display:grid;grid-template-columns:30px 1fr;gap:14px;font-size:30px;line-height:1.5;margin-top:14px}.t2 .li i{width:18px;height:4px;background:var(--acc);margin-top:20px}</style>
 <section class="t2">${head(c)}
 <div style="position:absolute;left:120px;top:${c.p.body?300:240}px;width:1680px;display:grid;grid-template-columns:repeat(${c.n},1fr);gap:60px">
 ${c.items.map((it,i)=>`<article><div class="pic a" style="--t:${.3+i*.9}">${K.photo(it.img)?`<img src="${E(K.photo(it.img))}" alt="">`:''}</div>
  <div class="a" style="--t:${.6+i*.9};font:700 56px/1.3 var(--serif);margin-top:22px;color:var(--acc)">${c.ed('t'+i,T(it.t))}</div>
  ${(it.points||[]).map((s,k)=>`<div class="li a" style="--t:${.9+i*.9+k*.25}"><i></i><div>${E(s)}</div></div>`).join('')}</article>`).join('')}
 </div></section>`})

// ── 內嵌：先放畫面，按一下才載入正式頁（需要網路）
window.TK=window.TK||{}
// 翻到這頁自己載入（不另外放按鈕，直接按內嵌頁自己的按鈕）；離開這頁就卸掉
if(!TK._embWatch)TK._embWatch=setInterval(()=>document.querySelectorAll('.emb[data-src]').forEach(box=>{const r=box.getBoundingClientRect(),on=r.width>700&&r.right>0&&r.left<innerWidth&&(!box.checkVisibility||box.checkVisibility({checkOpacity:true,checkVisibilityCSS:true})),f=box.querySelector('iframe')
 if(on&&!f){const n=document.createElement('iframe');n.src=box.dataset.src;n.allow='autoplay; fullscreen';n.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0;background:#f4eee2';box.appendChild(n)}else if(!on&&f)f.remove()}),300)
M.add('company','talk-embed',{...opt,name:'演講・內嵌頁面',range:[0,1],html:c=>`${css}<section class="t2">${deco(660,false)}${headD(c,60)}
 <div class="emb card a" data-src="${E(c.p.url||'')}" style="position:absolute;left:120px;top:190px;width:1680px;height:800px;--t:.3;overflow:hidden">
 ${K.photo(c.p.img)?`<img class="hero" src="${E(K.photo(c.p.img))}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`:''}
</div>
 <div class="src" style="bottom:30px">${E(T(c.p.sub||''))}</div></section>`})

// ── 可翻頁手冊：對頁、翻頁動畫、旁白逐頁播完自動翻
TK.bk=el=>{const B=el.closest('.bk');return {B,P:JSON.parse(B.dataset.pages),A:B.querySelector('audio'),btn:B.querySelector('.vb'),cap:B.querySelector('.cap')}}
TK.stop=el=>{const {B,A,btn,cap}=TK.bk(el);A.pause();B.dataset.play='';if(btn)btn.textContent='聽旁白';cap.textContent=''}
// 從第 k 頁開始唸；唸完接同一對頁的下一頁，再來自動翻頁
TK.say=(el,k)=>{const {B,P,A,btn,cap}=TK.bk(el);B.dataset.play='1';if(btn)btn.textContent='停止旁白'
 const i=+B.dataset.i;while(k<i*2+2&&k<P.length&&!P[k].audio)k++
 if(k<i*2+2&&k<P.length){B.dataset.k=k;A.src=P[k].audio;cap.textContent=P[k].label||'';A.onended=()=>{if(B.dataset.play)TK.say(el,k+1)};A.play().catch(()=>TK.stop(el))}
 else{A.pause();cap.textContent='';if(k>=i*2+2){if(TK.flip(el,1))setTimeout(()=>{if(B.dataset.play)TK.say(el,(+B.dataset.i)*2)},800);else TK.stop(el)}}}
TK.flip=(el,dir)=>{const {B,P}=TK.bk(el),n=Math.ceil(P.length/2);let i=+B.dataset.i,j=Math.max(0,Math.min(n-1,i+dir));if(j===i)return false
 const L=B.querySelector('.pl img'),R=B.querySelector('.pr img'),leaf=B.querySelector('.leaf'),nl=P[j*2],nr=P[j*2+1],fwd=dir>0
 leaf.querySelector('.f').src=fwd?R.src:L.src;leaf.querySelector('.b').src=fwd?nl.img:(nr?nr.img:nl.img)
 leaf.className='leaf '+(fwd?'fw':'bw');void leaf.offsetWidth;leaf.classList.add('go')
 if(fwd){R.src=nr?nr.img:'';R.parentNode.style.visibility=nr?'visible':'hidden'}else{L.src=nl.img}
 setTimeout(()=>{L.src=nl.img;R.src=nr?nr.img:'';R.parentNode.style.visibility=nr?'visible':'hidden';leaf.className='leaf'},520)
 B.dataset.i=j;B.querySelector('.no').textContent=(j+1)+' / '+n;return true}
// 手動翻頁：旁白立刻切到新的一頁
TK.book=(el,dir)=>{const {B,A}=TK.bk(el);if(!TK.flip(el,dir))return;if(B.dataset.play){A.pause();TK.say(el,(+B.dataset.i)*2)}}
TK.voice=el=>{const {B}=TK.bk(el);if(B.dataset.play)TK.stop(el);else TK.say(el,(+B.dataset.i)*2)}
// 點頁面：從那一頁開始唸；再點同一頁就停
TK.page=(el,side)=>{const {B,P}=TK.bk(el),k=(+B.dataset.i)*2+side;if(!P[k])return;if(B.dataset.play&&+B.dataset.k===k){TK.stop(el);return}if(P[k].audio)TK.say(el,k)}
M.add('company','talk-book',{...opt,name:'演講・可翻頁手冊',range:[0,0],html:c=>{const P=(c.p.pages||[]).map(p=>({img:K.photo(p.img)||p.img,audio:p.audio||'',label:p.label||''})),W=470,H=658,n=Math.ceil(P.length/2)
 return `${css}<style>
 .bk{position:absolute;left:0;right:0;top:200px;height:700px;perspective:2600px}
 .bk .pg{padding:0;border:0;position:absolute;top:0;width:${W}px;height:${H}px;background:#fff;box-shadow:0 18px 50px rgba(0,0,0,.22);overflow:hidden}
 .bk .pg img,.bk .leaf img{width:100%;height:100%;object-fit:cover;display:block}
 .bk .pl{left:${960-W}px}.bk .pr{left:960px}
 .bk .spine{position:absolute;left:958px;top:0;width:4px;height:${H}px;background:rgba(0,0,0,.18);z-index:3}
 .bk .leaf{position:absolute;top:0;width:${W}px;height:${H}px;transform-style:preserve-3d;display:none;z-index:4}
 .bk .leaf img{position:absolute;inset:0;backface-visibility:hidden}.bk .leaf .b{transform:rotateY(180deg)}
 .bk .leaf.fw{display:block;left:960px;transform-origin:left center}.bk .leaf.bw{display:block;left:${960-W}px;transform-origin:right center}
 .bk .leaf.go{transition:transform .5s cubic-bezier(.4,.1,.3,1)}.bk .leaf.fw.go{transform:rotateY(-180deg)}.bk .leaf.bw.go{transform:rotateY(180deg)}
 .bk .bar{position:absolute;left:0;right:0;top:${H+34}px;display:flex;justify-content:center;align-items:center;gap:26px}
 .bk .no{font:600 30px var(--sans);min-width:110px;text-align:center}.bk .cap{position:absolute;left:0;right:0;top:${H+118}px;text-align:center;font-size:28px;color:var(--acc)}
 </style><section class="t2">${deco(640,false)}${headD(c,60)}
 <div class="bk a" style="--t:.3" data-i="0" data-play="" data-pages='${E(JSON.stringify(P))}'>
  <button class="pg pl" onclick="TK.page(this,0)"><img class="hero" src="${E(P[0]?.img||'')}" alt=""></button><button class="pg pr" onclick="TK.page(this,1)"><img src="${E(P[1]?.img||'')}" alt=""></button><div class="spine"></div>
  <div class="leaf"><img class="f" alt=""><img class="b" alt=""></div>
  <div class="bar"><button onclick="TK.book(this,-1)">‹ 上一頁</button><div class="no">1 / ${n}</div><button onclick="TK.book(this,1)">下一頁 ›</button>${P.some(p=>p.audio)?`<button class="pri vb" onclick="TK.voice(this)">聽旁白</button>`:''}</div>
  <div class="cap"></div><audio preload="auto"></audio></div>
 <div class="src" style="bottom:26px;text-align:center">${E(T(c.p.sub||''))}</div></section>`}})

// ── 入境卡示範：三欄等寬等高；打字、排程、逐欄填入
M.add('company','talk-border',{...opt,name:'演講・入境卡示範',range:[0,0],html:c=>{const rows=[['姓名','CHEN MEI LING'],['護照號碼','3●●●●●●58'],['航班','XX 123'],['抵達日期','2026-11-14'],['住宿','曼谷市區飯店']]
 const col=(i,lab,t,inner)=>`<div style="position:absolute;left:${i*590}px;top:0;width:500px"><div class="lab a gold" style="--t:${t}">${lab}</div><div class="card a" style="--t:${t+.2};height:520px;margin-top:18px;padding:34px 36px;position:relative">${inner}</div></div>`
 const arrow=(i,t)=>`<div class="a" style="position:absolute;left:${500+i*590}px;top:270px;width:90px;text-align:center;font:400 64px/1 var(--serif);color:#e9c88a;--t:${t}">→</div>`
 return `${css}<style>
 .bd .bub{font-size:34px;line-height:1.5;padding:22px 26px;border-radius:22px 22px 6px 22px;background:color-mix(in srgb,var(--ink) 9%,transparent)}
 .bd .bub.ai{border-radius:22px 22px 22px 6px;background:var(--ink);color:var(--paper)}
 .bd .who{font-size:26px;color:var(--mute);margin:0 0 8px 4px}
 .bd .type{display:inline-block;overflow:hidden;white-space:nowrap;vertical-align:bottom;animation:t2type 1.6s steps(22) both;animation-delay:calc(var(--t)*1s)}@keyframes t2type{from{max-width:0}to{max-width:480px}}
 .bd .clock{font:900 124px/1.1 var(--serif);text-align:center;margin-top:36px}
 .bd .track{height:12px;background:color-mix(in srgb,var(--ink) 12%,transparent);margin-top:34px}.bd .fill{height:100%;background:var(--acc);transform-origin:left;animation:t2fill 1.8s linear both;animation-delay:calc(var(--t)*1s)}@keyframes t2fill{from{transform:scaleX(0)}}
 .bd .row{display:grid;grid-template-columns:150px 1fr 40px;align-items:center;font-size:30px;height:66px;border-top:1px solid var(--line);white-space:nowrap}.bd .row b{font-weight:500;font-size:27px;color:var(--mute)}
 .bd .val{clip-path:inset(0 0 0 0);animation:t2wipe .5s steps(12) both;animation-delay:calc(var(--t)*1s)}@keyframes t2wipe{from{clip-path:inset(0 100% 0 0)}}
 .bd .ok{color:var(--acc);font:700 32px var(--sans)}
 .bd .stamp{position:absolute;right:30px;bottom:30px;padding:10px 20px;border:3px solid var(--acc);color:var(--acc);font:700 34px var(--serif);transform:rotate(-3deg)}
 .bd .stamp.a{animation-name:t2stamp}@keyframes t2stamp{from{opacity:0;transform:rotate(-3deg) scale(1.8)}}
 </style><section class="t2">${deco(600)}${headD(c)}
 <div class="bd" style="position:absolute;left:120px;top:${c.p.body?320:260}px;width:1680px;height:600px">
 ${col(0,'一、交辦',.3,`<div class="who a" style="--t:.6">你</div><div class="bub a" style="--t:.6"><span class="type" style="--t:.8">出發前三天早上 8 點</span><br><span class="type" style="--t:2.2">幫曼谷團填泰國入境卡</span></div>
   <div class="who a" style="--t:3.9;margin-top:26px">Enos</div><div class="bub ai a" style="--t:3.9">排好了。填完先給你看，你核准我才送出</div>`)}
 ${arrow(0,4.8)}
 ${col(1,'二、時間到，自己開工',5,`<div style="font-size:28px;color:var(--mute)">排程</div><div class="clock">08:00</div><div class="track"><div class="fill" style="--t:5.6"></div></div><div class="a" style="--t:7.4;font-size:30px;margin-top:22px;color:var(--acc)">開始填寫</div>`)}
 ${arrow(1,7.6)}
 ${col(2,'三、逐欄填好（示範資料）',7.8,`${rows.map((r,i)=>`<div class="row" style="${i?'':'border-top:0'}"><b>${r[0]}</b><div class="val" style="--t:${8.3+i*.6}">${r[1]}</div><div class="ok a" style="--t:${8.7+i*.6}">✓</div></div>`).join('')}<div class="stamp a" style="--t:11.6">填好了，等你核准</div>`)}
 </div>${src(c)}</section>`}})

// ── 對帳示範：金額像錢一樣流過去，對上的落位，對不上的掉進「待人確認」
M.add('company','talk-flow',{...opt,name:'演講・金流對帳示範',range:[0,0],html:c=>{const L=['36,000','128,500','42,000','15,500'],R=['36,000','128,500','42,000','15,000'],RH=88
 const list=(x,lab,t,vals,right)=>`<div style="position:absolute;left:${x}px;top:0;width:520px"><div class="lab a gold" style="--t:${t}">${lab}</div><div class="card a" style="--t:${t+.2};margin-top:18px">${vals.map((v,i)=>`<div class="it" style="${i?'':'border-top:0;'}${right?'':'grid-template-columns:1fr auto'}"><span>${right?'收款單 '+'ABCD'[i]:'入帳'}</span>${right?`<em class="a" style="--t:${2.9+i*1.1}">${v}</em><u class="a ${i===3?'bad':''}" style="--t:${3.1+i*1.1}">${i===3?'金額不符':'✓ 已核對'}</u>`:`<em>${v}</em>`}</div>`).join('')}</div></div>`
 return `${css}<style>
 .fl .it{display:grid;grid-template-columns:1fr auto 170px;align-items:center;gap:16px;height:${RH}px;padding:0 28px;font-size:30px;border-top:1px solid var(--line)}
 .fl .it span{color:var(--mute);font-size:28px}.fl .it em{font-style:normal;font:600 36px var(--sans);font-variant-numeric:tabular-nums}
 .fl .it u{text-decoration:none;font:700 26px var(--sans);color:var(--acc);text-align:right}.fl .it u.bad{color:var(--acc2,#b3372b)}
 .fl .lane{position:absolute;left:540px;width:600px;height:2px;background:repeating-linear-gradient(90deg,rgba(233,200,138,.7) 0 14px,transparent 14px 26px)}
 .fl .chip{position:absolute;left:540px;padding:8px 20px;border-radius:40px;background:var(--acc);color:#fff;font:700 28px var(--sans);opacity:0;animation:t2chip 1.3s cubic-bezier(.5,0,.3,1) both;animation-delay:calc(var(--t)*1s);box-shadow:0 8px 20px rgba(0,0,0,.18)}
 @keyframes t2chip{0%{opacity:0;transform:translateX(0)}12%{opacity:1}85%{opacity:1}100%{opacity:0;transform:translateX(480px)}}
 .fl .chip.bad{background:var(--acc2,#b3372b);opacity:1;left:780px;top:480px!important;animation:t2bad 2.2s cubic-bezier(.5,0,.3,1) both;animation-delay:calc(var(--t)*1s)}
 @keyframes t2bad{0%{opacity:0;left:540px;top:var(--y);background:var(--acc)}10%{opacity:1}45%{left:780px;top:var(--y);background:var(--acc)}60%{left:780px;top:var(--y);background:var(--acc2,#b3372b)}100%{left:780px;top:480px}}
 .fl .tray{position:absolute;left:640px;top:450px;width:400px;height:150px;border:3px dashed var(--acc2,#b3372b);display:flex;flex-direction:column;justify-content:flex-end;align-items:center;padding-bottom:12px;font:700 28px var(--sans);color:var(--acc2,#b3372b)}
 .fl .steps{position:absolute;left:0;right:0;top:640px;display:grid;grid-template-columns:1fr 60px 1fr 60px 1fr;align-items:center}
 .fl .st{border-top:4px solid var(--acc);padding-top:16px}.fl .st b{display:block;font:700 40px/1.3 var(--serif)}.fl .st span{font-size:28px;color:var(--mute)}
 .fl .ar{font:400 48px var(--serif);color:var(--acc);text-align:center}
 </style><section class="t2">${deco(560)}${headD(c)}
 <div class="fl" style="position:absolute;left:120px;top:${c.p.body?310:250}px;width:1680px;height:760px">
 ${list(0,'銀行入帳（示範資料）',.3,L,false)}${list(1160,'系統裡的收款單',.7,R,true)}
 ${L.map((v,i)=>{const y=50+18+i*RH+RH/2;return `<div class="lane a" style="top:${y}px;--t:1.2"></div>${i<3?`<div class="chip" style="top:${y-24}px;--t:${1.8+i*1.1}">${v}</div>`:`<div class="chip bad" style="--y:${y-24}px;--t:${1.8+i*1.1}">差 500</div>`}`}).join('')}
 <div class="tray a" style="--t:5.4">待人確認</div>
 <div class="steps"><div class="st a" style="--t:7.4"><b>程式算</b><span>金額、筆數、日期</span></div><div class="ar a" style="--t:7.8">→</div><div class="st a" style="--t:8"><b>Ben 整理</b><span>對不上的不動，列出來</span></div><div class="ar a" style="--t:8.4">→</div><div class="st a" style="--t:8.6"><b>人決定</b><span>錢要不要動，由人拍板</span></div></div>
 </div></section>`}})

// ── 真實信件：照原信內容排成信件樣式（團號與信箱已遮）
M.add('company','talk-mail',{...opt,name:'演講・真實信件',range:[0,3],html:c=>{const m=c.p.mail||{}
 return `${css}<style>.ml .hd{display:grid;grid-template-columns:110px 1fr;gap:6px 18px;font-size:26px;line-height:1.5;color:var(--mute);padding-bottom:18px;border-bottom:1px solid var(--line)}.ml .hd b{color:var(--ink);font-weight:500}
 .ml .sj{font:700 36px/1.4 var(--serif);margin:0 0 18px}.ml .bd p{font-size:27px;line-height:1.62;margin:16px 0 0;white-space:pre-line}
 .ml .sent{position:absolute;right:40px;bottom:34px;padding:8px 20px;border:3px solid #B3372B;color:#B3372B;font:700 34px var(--serif);transform:rotate(-6deg)}.ml .sent.a{animation-name:t2stamp2}@keyframes t2stamp2{from{opacity:0;transform:rotate(-6deg) scale(2.2)}}@keyframes t2mail{from{opacity:0;transform:translateX(-120px) rotate(-3deg)}}.t2 .cnt{animation:t2cnt .8s cubic-bezier(.2,1.6,.3,1) both}@keyframes t2cnt{from{opacity:0;transform:scale(.4);transform-origin:left bottom}}
 .ml .att{display:inline-block;margin:20px 14px 0 0;padding:10px 18px;border:1px solid var(--line);font-size:24px;background:color-mix(in srgb,var(--acc) 7%,#fff)}</style>
 <section class="t2" style="background:#16332d">${deco(1080)}${headD(c)}
 <div class="ml card a" style="animation-name:t2mail;position:absolute;left:120px;top:${c.p.body?310:250}px;width:1060px;height:${c.p.body?660:700}px;padding:36px 44px;--t:.3;overflow:hidden">
  <div class="sj">${E(m.subject||'')}</div><div class="hd"><span>寄件</span><b>${E(m.from||'')}</b><span>收件</span><b>${E(m.to||'')}</b><span>時間</span><b>${E(m.date||'')}</b></div>
  <div class="bd">${(m.body||[]).map((t,i)=>`<p class="a" style="--t:${.8+i*.5}">${E(t)}</p>`).join('')}</div>
  <div class="a" style="--t:${.8+(m.body||[]).length*.5}">${(m.files||[]).map(f=>`<span class="att">${E(f)}</span>`).join('')}</div><div class="sent a" style="--t:${1.6+(m.body||[]).length*.5}">已寄出</div></div>
 <div style="position:absolute;left:1260px;top:${c.p.body?310:250}px;width:540px;height:${c.p.body?690:750}px;display:flex;flex-direction:column;justify-content:space-between">
 ${c.items.map((it,i)=>`<article class="a" style="--t:${2+i*.5};border-top:4px solid #e9c88a;padding-top:18px;color:#f4eee2"><div class="cnt" style="font:900 92px/1.1 var(--serif);color:#e9c88a;animation-delay:${2.2+i*.5}s">${E(it.t)}</div><div style="font-size:32px;line-height:1.5;margin-top:6px">${E(T(it.body))}</div></article>`).join('')}
 </div><div class="src a" style="--t:3;color:#cfc8b6">${E(T(c.p.sub||''))}</div></section>`}})
}
