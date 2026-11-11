// 本案專用版型第四批（2026-11-11 傍晚重做）：動態對照頁、循環軌道＋魔術方塊頁。
// 文字多放在 svg 或 button 裡（母片的三級字規則不會動到），只有標題走可編輯文字。
{ const U=M.util, K=M.company, T=K.text, E=U.esc
const opt={auto:false,order:100,accepts:p=>!p.video}
const G='#1F6F63',GOLD='#e9c88a',DEEP='#10261f',PAPER='#f4eee2'
const base=`<style>
.t4{position:absolute;inset:0;background:radial-gradient(1200px 800px at 30% 55%,#1d4439 0,#16332d 45%,${DEEP} 100%);color:${PAPER};overflow:hidden}
.t4 *{box-sizing:border-box}
.t4 h2{margin:0;font:700 68px/1.3 var(--serif)}
.t4 .a{animation:t4in .8s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--t,0)*1s)}
@keyframes t4in{from{opacity:0;transform:translateY(26px)}}
.t4 button{all:unset;box-sizing:border-box}
.t4 .grain{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0 5px,rgba(255,255,255,.012) 5px 6px);pointer-events:none}
@keyframes t4dash{to{stroke-dashoffset:-40}}
@keyframes t4fly{from{offset-distance:0%}to{offset-distance:100%}}
@media (prefers-reduced-motion:reduce){.t4 *{animation:none!important}}
</style>`
const head=c=>`<div class="a" style="position:absolute;left:120px;top:64px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2></div>`

// ───────── 對照頁：左邊三個各做各的聊天視窗，右邊一份資料同時流向五項成果
M.add('company','talk-vs2',{...opt,name:'演講・動態對照',range:[2,2],html:c=>{const L=c.items[0],R=c.items[1],chats=L.chats||[],outs=R.outs||[]
 const chat=(ch,i)=>{const t=.6+i*1.5,y=96+i*196
  return `<div class="a" style="--t:${t};position:absolute;left:36px;top:${y}px;width:500px;height:176px;background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.14);padding:16px 20px">
   <div style="display:flex;gap:7px;margin-bottom:12px"><i style="width:12px;height:12px;border-radius:50%;background:#e06c5a"></i><i style="width:12px;height:12px;border-radius:50%;background:#e6b84f"></i><i style="width:12px;height:12px;border-radius:50%;background:#6cbf6c"></i></div>
   <div class="a" style="--t:${t+.3};margin-left:auto;width:max-content;max-width:430px;background:#e9e6de;border-radius:18px 18px 4px 18px;padding:10px 18px;font-size:27px">${E(ch.q)}</div>
   <div class="a" style="--t:${t+.9};margin-top:10px;width:max-content;background:#2b2f2c;color:#fff;border-radius:18px 18px 18px 4px;padding:10px 18px;font-size:27px">${E(ch.a)}</div></div>
  <div class="a" style="--t:${t+1.2};position:absolute;left:556px;top:${y+66}px;font:400 44px/1 var(--serif);color:#9a9486">→</div>
  <div class="a" style="--t:${t+1.3};position:absolute;left:612px;top:${y+40}px;width:150px;height:96px;background:#fff;border:2px dashed #b7b0a0;border-radius:10px;display:grid;place-items:center;font-size:25px;color:#5b574c;text-align:center;line-height:1.3">${E(ch.out)}<br><span style="font-size:20px;color:#9a9486">自己貼、自己存</span></div>`}
 const n=outs.length,oy=i=>120+i*(560/Math.max(1,n-1)),path=i=>`M250 400 C 420 400, 420 ${oy(i)}, 560 ${oy(i)}`
 return `${base}<style>.t4 .lit{animation:t4lit .7s cubic-bezier(.2,1.4,.3,1) both;animation-delay:calc(var(--t)*1s)}@keyframes t4lit{from{opacity:.15;transform:scale(.9)}}
 .t4 .pulse{animation:t4pulse 2.4s ease-in-out infinite}@keyframes t4pulse{50%{box-shadow:0 0 0 22px rgba(233,200,138,0),0 0 60px rgba(233,200,138,.55)}}</style>
 <section class="t4"><div class="grain"></div>${head(c)}
 <button class="a" style="--t:.3;position:absolute;left:120px;top:210px;width:800px;height:800px;background:linear-gradient(180deg,#efeadf,#e2dccd);border-radius:22px;color:#1b211a;box-shadow:0 30px 80px rgba(0,0,0,.35);cursor:default">
  <div style="position:absolute;left:36px;top:26px;font:700 44px/1.3 var(--serif);color:#5b574c">${E(T(L.t))}</div>
  ${chats.map(chat).join('')}
  <div class="a" style="--t:${.6+chats.length*1.5};position:absolute;left:36px;right:36px;bottom:26px;font:700 34px/1.4 var(--serif);color:#8a3d32">${E(T(L.body))}</div></button>
 <div class="a" style="--t:1.2;position:absolute;left:920px;top:560px;width:80px;height:80px;border-radius:50%;background:#C98A2B;color:#16332d;display:grid;place-items:center;transform:translateX(0);z-index:3"><svg width="80" height="80"><text x="40" y="52" text-anchor="middle" style="font:900 30px var(--serif);fill:#16332d">VS</text></svg></div>
 <button class="a" style="--t:${1+chats.length*1.5};position:absolute;left:1000px;top:210px;width:800px;height:800px;background:linear-gradient(160deg,#235a4d,#143a31);border:2px solid rgba(233,200,138,.45);border-radius:22px;box-shadow:0 30px 80px rgba(0,0,0,.4);cursor:default">
  <div style="position:absolute;left:36px;top:26px;font:700 44px/1.3 var(--serif);color:${GOLD}">${E(T(R.t))}</div>
  <svg viewBox="0 0 800 800" width="800" height="800" style="position:absolute;inset:0">
   ${outs.map((o,i)=>`<path d="${path(i)}" fill="none" style="stroke:${GOLD};stroke-width:3;stroke-dasharray:6 14;stroke-linecap:round;opacity:.75;animation:t4dash 1.2s linear infinite"/>
    <circle r="8" style="fill:#fff;offset-path:path('${path(i)}');animation:t4fly ${1.8+i*.15}s linear infinite;animation-delay:${i*.3}s"/>`).join('')}</svg>
  <div class="pulse" style="position:absolute;left:40px;top:300px;width:220px;height:200px;border-radius:24px;background:${PAPER};color:#16332d;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px;box-shadow:0 0 0 0 rgba(233,200,138,.5),0 0 30px rgba(233,200,138,.3)"><div style="font:900 46px/1.2 var(--serif)">${E(R.core||'ERP')}</div><div style="font-size:26px">${E(R.coreSub||'')}</div></div>
  ${outs.map((o,i)=>`<div class="lit" style="--t:${2.2+chats.length*1.5+i*.35};position:absolute;left:560px;top:${oy(i)-38}px;width:210px;height:76px;border-radius:38px;background:${PAPER};color:#16332d;display:flex;align-items:center;justify-content:center;gap:10px;font:700 30px var(--serif)">${E(o)}</div>`).join('')}
  <div class="a" style="--t:${4+chats.length*1.5};position:absolute;left:36px;right:36px;bottom:26px;font:700 34px/1.4 var(--serif);color:${GOLD}">${E(T(R.body))}</div></button>
 </section>`}})

// ───────── 循環軌道＋魔術方塊：轉一面＝一項工作＋一位負責的同事
window.TK=window.TK||{}
const ROT=[[0,0],[0,-90],[0,-180],[0,-270],[-90,-360],[90,-360]]
TK.orbGo=(root,k)=>{const cb=root.querySelector('.rc');if(!cb)return;const n=6;k=((k%n)+n)%n;cb.dataset.k=k
 cb.style.transform=`rotateX(-18deg) rotateY(-28deg) rotateX(${ROT[k][0]}deg) rotateY(${ROT[k][1]}deg)`
 root.querySelectorAll('.nd').forEach((e,i)=>e.classList.toggle('on',i===k));root.querySelectorAll('.sp').forEach((e,i)=>e.classList.toggle('on',i===k))
 const D=JSON.parse(root.querySelector('.orb').dataset.items),it=D[k],dt=root.querySelector('.dt');dt.classList.remove('sw');void dt.offsetWidth
 dt.querySelector('.d-no').textContent='0'+(k+1)+' / 06';dt.querySelector('.d-job').textContent=it.t;dt.querySelector('.d-who').textContent=it.who;dt.querySelector('.d-desc').textContent=it.body
 dt.style.setProperty('--fc',it.color);dt.classList.add('sw');root.querySelectorAll('.pg i').forEach((e,i)=>e.classList.toggle('on',i===k))}
TK.orbPick=(el,k)=>{const root=el.closest('.t4');root.querySelector('.rc').dataset.manual=1;TK.orbGo(root,k)}
TK.orbNext=el=>{const root=el.closest('.t4'),cb=root.querySelector('.rc');cb.dataset.manual=1;TK.orbGo(root,(+cb.dataset.k||0)+1)}
if(false)TK._orbLoop=setInterval(()=>{document.querySelectorAll('.t4 .rc').forEach(cb=>{if(!cb.dataset.manual)TK.orbGo(cb.closest('.t4'),(+cb.dataset.k||0)+1)})},3400)
M.add('company','talk-orbit',{...opt,name:'演講・循環方塊',range:[6,6],html:c=>{const COL=['#efe7d6','#C98A2B','#2a8f80','#5B6B7A','#B3372B','#2f5d8a'],Z=150,CX=560,CY=450,RR=330
 const F=['rotateY(0deg)','rotateY(90deg)','rotateY(180deg)','rotateY(270deg)','rotateX(90deg)','rotateX(-90deg)']
 const items=c.items.map((it,i)=>({t:T(it.t),who:T(it.who||''),body:T(it.body||''),img:K.photo(it.img)||it.img||'',color:COL[i]}))
 const pos=i=>{const a=(-90+i*60)*Math.PI/180;return [CX+RR*Math.cos(a),CY+RR*Math.sin(a)]}
 const face=(it,i)=>`<div class="fc" style="transform:${F[i]} translateZ(${Z}px)">${Array.from({length:9},(_,k)=>`<i style="background:linear-gradient(145deg,color-mix(in srgb,${COL[i]} 82%,#fff),${COL[i]} 55%,color-mix(in srgb,${COL[i]} 78%,#000))"></i>`).join('')}<svg viewBox="0 0 300 300" width="300" height="300" style="position:absolute;inset:0"><text x="150" y="${it.t.length>4?142:165}" text-anchor="middle" style="font:900 ${it.t.length>4?44:56}px var(--serif);fill:${i?'#fff':'#16332d'};paint-order:stroke;stroke:${i?'rgba(0,0,0,.28)':'rgba(255,255,255,.5)'};stroke-width:5px">${E(it.t.length>4?it.t.slice(0,3):it.t)}</text>${it.t.length>4?`<text x="150" y="196" text-anchor="middle" style="font:900 44px var(--serif);fill:${i?'#fff':'#16332d'};paint-order:stroke;stroke:${i?'rgba(0,0,0,.28)':'rgba(255,255,255,.5)'};stroke-width:5px">${E(it.t.slice(3))}</text>`:''}</svg></div>`
 return `${base}<style>
 .t4 .orb{position:absolute;left:60px;top:170px;width:1120px;height:900px}
 .t4 .ring{transform-origin:${CX}px ${CY}px;animation:t4spin 60s linear infinite}@keyframes t4spin{to{transform:rotate(360deg)}}
 .t4 .sp{opacity:0;transition:opacity .5s}.t4 .sp.on{opacity:1}
 .t4 .cube{position:absolute;left:${CX-150}px;top:${CY-150}px;width:300px;height:300px;perspective:1500px;cursor:pointer;animation:t4bob 4.5s ease-in-out infinite;display:block}
 @keyframes t4bob{50%{transform:translateY(-16px)}}
 .t4 .rc{position:absolute;inset:0;transform-style:preserve-3d;transition:transform 1.3s cubic-bezier(.6,-.25,.25,1.25)}
 .t4 .fc{position:absolute;inset:0;display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:7px;background:#0b1b17;border-radius:10px}
 .t4 .fc i{border-radius:12px;box-shadow:inset 0 2px 0 rgba(255,255,255,.35),inset 0 -6px 12px rgba(0,0,0,.18)}
 .t4 .shadow{position:absolute;left:${CX-170}px;top:${CY+215}px;width:340px;height:44px;border-radius:50%;background:rgba(0,0,0,.45);filter:blur(14px);animation:t4sh 4.5s ease-in-out infinite}@keyframes t4sh{50%{transform:scale(.82);opacity:.6}}
 .t4 .glow{position:absolute;left:${CX-260}px;top:${CY-260}px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(233,200,138,.22),rgba(233,200,138,0) 62%);animation:t4gl 3.4s ease-in-out infinite}@keyframes t4gl{50%{transform:scale(1.12);opacity:.7}}
 .t4 .nd{position:absolute;width:190px;margin-left:-95px;margin-top:-62px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:transform .6s cubic-bezier(.2,1.5,.3,1),opacity .5s;opacity:.6}
 .t4 .nd .av{width:104px;height:104px;border-radius:50%;overflow:hidden;border:4px solid rgba(255,255,255,.35);background:${PAPER};display:grid;place-items:center;transition:all .5s}
 .t4 .nd .av img{width:100%;height:100%;object-fit:cover;object-position:center 22%}
 .t4 .nd.on{opacity:1;transform:scale(1.28)}.t4 .nd.on .av{border-color:${GOLD};box-shadow:0 0 0 8px rgba(233,200,138,.22),0 0 40px rgba(233,200,138,.6)}
 .t4 .dt{position:absolute;left:1250px;top:370px;width:540px;height:470px;border-radius:26px;background:linear-gradient(170deg,rgba(255,255,255,.12),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(6px);padding:46px 46px;overflow:hidden;display:block;cursor:default}
 .t4 .dt:before{content:'';position:absolute;left:0;top:0;width:100%;height:10px;background:var(--fc,${GOLD});transition:background .6s}
 .t4 .dt.sw .sl{animation:t4sw .7s cubic-bezier(.16,.8,.24,1) both}.t4 .dt.sw .sl:nth-child(3){animation-delay:.08s}.t4 .dt.sw .sl:nth-child(4){animation-delay:.16s}.t4 .dt.sw .sl:nth-child(5){animation-delay:.24s}.t4 .dt.sw .sl:nth-child(6){animation-delay:.32s}
 @keyframes t4sw{from{opacity:0;transform:translateX(60px)}}
 .t4 .pg{position:absolute;left:46px;bottom:36px;display:flex;gap:12px}.t4 .pg i{width:40px;height:6px;background:rgba(255,255,255,.22);transition:background .5s}.t4 .pg i.on{background:${GOLD}}
 </style><section class="t4"><div class="grain"></div>${head(c)}
 <div class="orb a" style="--t:.3" data-items='${E(JSON.stringify(items))}'>
  <svg viewBox="0 0 1120 900" width="1120" height="900" style="position:absolute;inset:0">
   <circle cx="${CX}" cy="${CY}" r="${RR}" fill="none" style="stroke:rgba(255,255,255,.14);stroke-width:2"/>
   <g class="ring"><circle cx="${CX}" cy="${CY}" r="${RR}" fill="none" style="stroke:${GOLD};stroke-width:3;stroke-dasharray:3 26;stroke-linecap:round;opacity:.8"/></g>
   <circle cx="${CX}" cy="${CY}" r="${RR-96}" fill="none" style="stroke:rgba(255,255,255,.07);stroke-width:1"/>
   ${items.map((it,i)=>{const [x,y]=pos(i),d=`M${CX} ${CY} L${x.toFixed(0)} ${y.toFixed(0)}`;return `<g class="sp ${i?'':'on'}"><path d="${d}" style="stroke:${GOLD};stroke-width:4;stroke-dasharray:8 14;stroke-linecap:round;animation:t4dash .9s linear infinite"/><circle r="9" style="fill:#fff;offset-path:path('${d}');animation:t4fly 1.4s linear infinite"/><circle r="9" style="fill:#fff;opacity:.6;offset-path:path('${d}');animation:t4fly 1.4s linear infinite;animation-delay:.7s"/></g>`}).join('')}</svg>
  <div class="glow"></div><div class="shadow"></div>
  <button class="cube" onclick="TK.orbNext(this)"><div class="rc" data-k="0" style="transform:rotateX(-18deg) rotateY(-28deg)">${items.map(face).join('')}</div></button>
  ${items.map((it,i)=>{const [x,y]=pos(i);return `<button class="nd ${i?'':'on'}" style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px" onclick="TK.orbPick(this,${i})"><div class="av" style="background:${COL[i]}"><svg width="104" height="104"><text x="52" y="65" text-anchor="middle" style="font:900 40px var(--serif);fill:${i?'#fff':'#16332d'}">0${i+1}</text></svg></div><div style="font:700 30px/1.2 var(--serif);color:${PAPER};white-space:nowrap;text-shadow:0 2px 10px rgba(0,0,0,.6)">${E(it.t)}</div></button>`}).join('')}
 </div>
 <button class="dt sw a" style="--t:.8;--fc:${COL[0]}">
  <div class="d-no sl" style="font:700 30px var(--sans);letter-spacing:.14em;color:${GOLD}">01 / 06</div><div></div>
  <div class="d-job sl" style="font:900 80px/1.2 var(--serif);margin-top:22px;color:#fff">${E(items[0].t)}</div>
  <div class="sl" style="font-size:30px;color:${GOLD};margin-top:18px">負責　<span class="d-who" style="font:700 44px var(--serif);color:#fff">${E(items[0].who)}</span></div>
  <div class="d-desc sl" style="font-size:38px;line-height:1.5;margin-top:16px;color:#e6dfd0">${E(items[0].body)}</div>
  <div class="pg">${items.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div></button>
 ${c.p.body?`<div class="a" style="--t:1.2;position:absolute;left:120px;top:158px;font:500 34px/1.4 var(--sans);color:${GOLD}"><svg width="1000" height="48"><text x="0" y="36" style="font:500 34px var(--sans);fill:${GOLD}">${E(T(c.p.body))}</text></svg></div>`:''}
 </section>`}})
}
