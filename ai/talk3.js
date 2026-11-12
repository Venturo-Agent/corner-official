// 本案專用版型第三批（2026-11-11 下午）：立體圓餅＋彩色列舉、色塊背景的三缺口、三步驟卡、結尾。
// 母片只留三級字；裝飾用的大數字改用 ::before（不算文字節點），其餘每頁只用 標題 68／小標 46／內文 32 左右三級。
{ const U=M.util, K=M.company, T=K.text, E=U.esc
const opt={auto:false,order:100,accepts:p=>!p.video}
const PAL=['#1F6F63','#C98A2B','#B3372B','#5B6B7A']
const css=`<style>
.t3{position:absolute;inset:0;background:var(--paper);color:var(--ink);overflow:hidden}
.t3 *{box-sizing:border-box}
.t3 h2{margin:0;font:700 68px/1.3 var(--serif)}
.t3 .a{animation:t3in .7s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--t,0)*1s)}
@keyframes t3in{from{opacity:0;transform:translateY(24px)}}
.t3 .px::before{content:attr(data-x)}
.t3 .src{position:absolute;left:120px;right:120px;bottom:34px;font-size:30px;line-height:1.4;color:var(--mute)}
@media (prefers-reduced-motion:reduce){.t3 *{animation:none!important}}
</style>`

// ── 立體圓餅＋彩色列舉
const pie=(it,x,animate,t0,tint)=>{const r=150,C=2*Math.PI*r,f=Math.max(0,Math.min(100,+it.value||0))/100,arc=(C*f).toFixed(1),N=13
 const an=animate?`animation:t3arc 1.8s cubic-bezier(.3,.7,.2,1) both;animation-delay:${t0+.5}s;`:''
 const layer=(dy,base,col)=>`<g transform="translate(0 ${dy})"><circle cx="220" cy="220" r="${r}" fill="none" style="stroke:${base};stroke-width:92"/><circle cx="220" cy="220" r="${r}" fill="none" transform="rotate(-90 220 220)" stroke-dasharray="${arc} ${C.toFixed(1)}" style="stroke:${col};stroke-width:92;${an}"/></g>`
 const rows=it.rows||[],max=Math.max(...rows.map(r=>+r.value||0),1)
 return `<div class="${animate?'a':''}" style="position:absolute;left:${x}px;top:210px;width:810px;height:740px;background:${tint};--t:${t0};padding:30px 40px">
 <div style="position:relative;width:440px;height:400px;margin:0 auto">
  <svg viewBox="0 0 440 400" width="440" height="400" style="position:absolute;inset:0;overflow:visible"><g transform="translate(0 22) scale(1 .78)">
   <ellipse cx="220" cy="${262+N*4}" rx="205" ry="205" fill="rgba(0,0,0,.10)"/>
   ${Array.from({length:N},(_,k)=>layer((N-k)*4,'#bdb6a6','#124a41')).join('')}${layer(0,'#e2dccd','#1F6F63')}</g></svg>
  <div style="position:absolute;left:0;top:22px;width:440px;height:343px;display:grid;place-items:center"><i class="px ${animate?'pop':''}" data-x="${E(it.t)}" style="font:900 96px/1 var(--serif);font-style:normal;color:#1F6F63;background:var(--paper);border-radius:60px;padding:6px 18px;${animate?`animation-delay:${t0+2.2}s`:''}"></i></div></div>
 <div style="text-align:center;font:700 34px/1.4 var(--serif);margin-top:2px">${E(T(it.body))}</div>
 <div style="margin-top:20px">${rows.map((r,i)=>`<div class="${animate?'a':''}" style="--t:${t0+2.6+i*.3};display:grid;grid-template-columns:1fr 250px 110px;gap:18px;align-items:center;height:52px;font-size:30px"><div>${E(r.t)}</div><div style="height:22px;background:rgba(0,0,0,.07)"><div style="height:100%;width:${Math.round(100*(+r.value||0)/max)}%;background:${PAL[i%4]};transform-origin:left;${animate?`animation:t3bar 1s ease-out both;animation-delay:${t0+2.8+i*.3}s`:''}"></div></div><div style="font-weight:700;color:${PAL[i%4]};text-align:right">${E(String(r.value))}%</div></div>`).join('')}</div></div>`}
M.add('company','talk-pies',{...opt,name:'演講・立體圓餅',range:[1,2],html:c=>{const show=+c.p.show||c.n
 return `${css}<style>@keyframes t3arc{from{stroke-dasharray:0 1000}}@keyframes t3bar{from{transform:scaleX(0)}}.t3 .pop{display:inline-block;animation:t3pop 1s cubic-bezier(.2,1.6,.3,1) both}@keyframes t3pop{0%{transform:scale(.3);opacity:0}60%{transform:scale(1.3);opacity:1}100%{transform:scale(1)}}</style>
 <section class="t3"><div class="a" style="position:absolute;left:120px;top:70px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2></div>
 ${c.items.slice(0,show).map((it,i)=>pie(it,i?975:135,i===show-1,.4,i?'color-mix(in srgb,#C98A2B 9%,var(--paper))':'color-mix(in srgb,#1F6F63 8%,var(--paper))')).join('')}
 <div class="src">${E(T(c.p.sub||''))}</div></section>`}})

// ── 三缺口：上半深色色塊、三張有框的卡
M.add('company','talk-lacks2',{...opt,name:'演講・三缺口（色塊）',range:[2,3],html:c=>`${css}<style>
 .t3 .lk{background:#fff;border-top:8px solid #1F6F63;box-shadow:0 22px 60px rgba(0,0,0,.22);padding:0 0 26px}
 .t3 .lk .pic{height:330px;overflow:hidden}.t3 .lk img{width:100%;height:100%;object-fit:cover;object-position:center 62%;animation:t3float 7s ease-in-out infinite alternate}@keyframes t3float{from{transform:scale(1.03)}to{transform:scale(1.12)}}
 .t3 .lk .li{display:grid;grid-template-columns:26px 1fr;gap:12px;font-size:32px;line-height:1.45;margin:14px 34px 0}.t3 .lk .li i{width:16px;height:4px;background:#1F6F63;margin-top:21px}</style>
 <section class="t3"><div style="position:absolute;left:0;top:0;width:1920px;height:520px;background:#16332d"></div>
 <div class="a" style="position:absolute;left:120px;top:70px;width:1680px;color:#f4eee2"><h2>${c.ed('h',c.p.title||'')}</h2></div>
 <div style="position:absolute;left:120px;top:210px;width:1680px;display:grid;grid-template-columns:repeat(${c.n},1fr);gap:54px">
 ${c.items.map((it,i)=>`<article class="lk a" style="--t:${.3+i*.9}"><div class="pic">${K.photo(it.img)?`<img src="${E(K.photo(it.img))}" alt="">`:''}</div>
  <div style="font:700 46px/1.3 var(--serif);margin:24px 34px 0;color:#1F6F63">${c.ed('t'+i,T(it.t))}</div>
  ${(it.points||[]).map((s,k)=>`<div class="li a" style="--t:${.8+i*.9+k*.25}"><i></i><div>${E(s)}</div></div>`).join('')}</article>`).join('')}
 </div></section>`})

// ── 三步驟：深色底、三張卡、箭頭逐一接上
M.add('company','talk-steps',{...opt,name:'演講・三步驟',range:[2,3],html:c=>`${css}<style>
 .t3 .stp{position:relative;background:#f7f3ea;padding:44px 40px 40px;box-shadow:0 24px 60px rgba(0,0,0,.3);min-height:${c.p.tall||460}px}
 .t3 .stp .n{display:block;font:900 150px/1 var(--serif);font-style:normal;color:#1F6F63}
 .t3 .stp .bar{width:70px;height:6px;background:#C98A2B;margin:22px 0 26px}
 .t3 .arw{position:absolute;top:240px;font:400 70px/1 var(--serif);font-style:normal;color:#C98A2B}</style>
 <section class="t3" style="background:#16332d;color:#f4eee2">
 <div style="position:absolute;right:-180px;top:-180px;width:620px;height:620px;border-radius:50%;background:rgba(255,255,255,.04)"></div>
 <div class="a" style="position:absolute;left:120px;top:80px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2>${c.p.body?`<div style="font-size:34px;line-height:1.5;margin-top:14px;color:#e9c88a">${c.ed('b',T(c.p.body))}</div>`:''}</div>
 <div style="position:absolute;left:120px;top:${c.p.body?330:290}px;width:1680px;display:grid;grid-template-columns:repeat(${c.n},1fr);gap:84px;color:#1b211a">
 ${c.items.map((it,i)=>`<article class="stp a" style="--t:${.5+i*.9}"><i class="n px" data-x="0${i+1}"></i><div class="bar"></div>
  <div style="font:700 46px/1.35 var(--serif)">${c.ed('t'+i,T(it.t))}</div><div style="font-size:34px;line-height:1.55;margin-top:18px;font-weight:500">${c.ed('b'+i,T(it.body))}</div>
  ${i<c.n-1?`<i class="arw px a" data-x="→" style="right:-78px;--t:${1+i*.9}"></i>`:''}</article>`).join('')}
 </div></section>`})

// ── 結尾：滿版照片、大標與明顯的副標
M.add('end','talk-end',{name:'演講・結尾',html:c=>{const img=c.p.img||c.meta.hero
 return `${css}<style>.t3 .kb{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:t3kb 16s ease-out both}@keyframes t3kb{from{transform:scale(1.12)}}</style>
 <section class="t3" style="background:#111;color:#fff"><img class="kb hero" src="${E(img)}" alt="">
 <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(10,16,14,.92) 0,rgba(10,16,14,.74) 55%,rgba(10,16,14,.45) 100%)"></div>
 ${(()=>{const it=c.p.items||[];if(!it.length)return `<div style="position:absolute;left:120px;right:120px;bottom:210px"><div class="a" style="font:900 150px/1.2 var(--serif);--t:.4">${c.ed('k',c.p.title||'')}</div>
 <div class="a" style="width:120px;height:6px;background:#C98A2B;margin:34px 0;--t:1"></div>
 <div class="a" style="font:700 64px/1.45 var(--serif);--t:1.3">${c.ed('b',c.p.body||'')}</div></div>`
 return `<div style="position:absolute;left:120px;right:120px;top:90px"><div class="a" style="font:900 150px/1.2 var(--serif);--t:.4">${c.ed('k',c.p.title||'')}</div>
 <div class="a" style="font:700 40px/1.5 var(--serif);margin-top:18px;--t:1">${c.ed('b',c.p.body||'')}</div></div>
 <div style="position:absolute;left:120px;right:120px;top:470px"><div class="a" style="font:700 40px/1 var(--serif);color:#E0A94A;letter-spacing:.14em;--t:1.6">${E(c.p.lead||'')}</div>
 <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:44px;margin-top:34px">${it.map((x,i)=>`<div class="a" style="--t:${2.1+i*.5};border-top:6px solid #C98A2B;padding-top:26px"><div style="font:900 64px/1.2 var(--serif)">${E(x.t)}</div><div style="font:500 40px/1.5 var(--serif);margin-top:16px;opacity:.92">${E(x.body)}</div></div>`).join('')}</div></div>`})()}
 <div class="a" style="position:absolute;left:120px;bottom:80px;font:700 40px/1 var(--serif);letter-spacing:.12em;--t:3.6">${E(c.p.brand||c.meta.agency||'')}</div></section>`}})

// ── 對照：一般說的用 AI vs 我們做的
M.add('company','talk-vs',{...opt,name:'演講・對照',range:[2,2],html:c=>{const col=(it,i)=>`<article class="a" style="--t:${.4+i*1.6};background:${i?'#f7f3ea':'#e7e3d8'};border-top:10px solid ${i?'#1F6F63':'#8a8577'};box-shadow:0 22px 60px rgba(0,0,0,.25);padding:48px 50px 50px;min-height:700px">
  <div style="font:700 46px/1.3 var(--serif);color:${i?'#1F6F63':'#5b574c'}">${c.ed('t'+i,T(it.t))}</div>
  <div style="margin:26px 0 8px;padding:22px 26px;background:${i?'#1F6F63':'#fff'};color:${i?'#fff':'#1b211a'};font-size:34px;line-height:1.5;border-radius:${i?'6px':'22px 22px 22px 6px'}">${E(it.quote||'')}</div>
  ${(it.points||[]).map((s,j)=>`<div class="a" style="--t:${.9+i*1.6+j*.3};display:grid;grid-template-columns:26px 1fr;gap:14px;font-size:34px;line-height:1.5;margin-top:30px"><i style="width:16px;height:4px;background:${i?'#1F6F63':'#8a8577'};margin-top:24px"></i><div>${E(s)}</div></div>`).join('')}</article>`
 return `${css}<section class="t3"><div style="position:absolute;left:0;top:0;width:1920px;height:560px;background:#16332d"></div>
 <div class="a" style="position:absolute;left:120px;top:70px;width:1680px;color:#f4eee2"><h2>${c.ed('h',c.p.title||'')}</h2></div>
 <div style="position:absolute;left:120px;top:230px;width:1680px;display:grid;grid-template-columns:1fr 110px 1fr;align-items:center">${col(c.items[0],0)}<i class="px a" data-x="→" style="--t:1.8;font:400 90px/1 var(--serif);font-style:normal;color:#C98A2B;text-align:center"></i>${col(c.items[1],1)}</div>
 <div class="src" style="color:var(--mute)">${E(T(c.p.sub||''))}</div></section>`}})

// ── 方塊：同一份資料，轉一面就是一項工作、一位負責的同事
window.TK=window.TK||{}
TK.cubeGo=(root,k)=>{const R=[[0,0],[0,-90],[0,-180],[0,-270],[-90,-360],[90,-360]],cube=root.querySelector('.cb');if(!cube)return
 const n=R.length;k=((k%n)+n)%n;cube.dataset.k=k;cube.style.transform=`rotateX(-13deg) rotateY(-20deg) rotateX(${R[k][0]}deg) rotateY(${R[k][1]}deg)`
 root.querySelectorAll('.cl').forEach((e,i)=>e.classList.toggle('on',i===k))}
TK.cubeNext=el=>{const root=el.closest('.t3');root.querySelector('.cb').dataset.manual=1;TK.cubeGo(root,(+root.querySelector('.cb').dataset.k||0)+1)}
TK.cubePick=(el,k)=>{const root=el.closest('.t3');root.querySelector('.cb').dataset.manual=1;TK.cubeGo(root,k)}
M.add('company','talk-cube',{...opt,name:'演講・方塊',range:[6,6],html:c=>{const Z=250,F=['rotateY(0deg)','rotateY(90deg)','rotateY(180deg)','rotateY(270deg)','rotateX(90deg)','rotateX(-90deg)'],BG=['#f7f3ea','#1F6F63','#C98A2B','#5B6B7A','#B3372B','#124a41']
 return `${css}<style>
 .t3 .cw{position:absolute;left:170px;top:330px;width:${Z*2}px;height:${Z*2}px;perspective:1600px;padding:0;border:0;background:none;cursor:pointer}
 .t3 .cb{position:absolute;inset:0;transform-style:preserve-3d;transition:transform 1.1s cubic-bezier(.5,0,.2,1)}
 .t3 .cf{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:18px;border:3px solid rgba(255,255,255,.6);font-family:var(--serif)}
 .t3 .cf b{font-size:76px;font-weight:900;line-height:1.2}.t3 .cf span{font:500 34px var(--sans);opacity:.9}
 .t3 .cl{display:grid;grid-template-columns:230px 1fr;gap:24px;align-items:center;width:100%;text-align:left;padding:27px 26px;border:0;border-left:8px solid transparent;background:none;font:inherit;color:#f4eee2;cursor:pointer;opacity:.55;transition:all .5s}
 .t3 .cl b{font:700 42px/1.2 var(--serif)}.t3 .cl span{font-size:30px;line-height:1.4}
 .t3 .cl.on{opacity:1;background:rgba(255,255,255,.1);border-left-color:#C98A2B}
 .t3 .hint{position:absolute;left:170px;top:${330+Z*2+90}px;width:${Z*2}px;text-align:center}</style>
 <section class="t3" style="background:#16332d;color:#f4eee2">
 <div style="position:absolute;left:-200px;bottom:-240px;width:700px;height:700px;border-radius:50%;background:rgba(255,255,255,.04)"></div>
 <div class="a" style="position:absolute;left:120px;top:70px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2>${c.p.body?`<div style="font-size:34px;line-height:1.5;margin-top:12px;color:#e9c88a">${c.ed('b',T(c.p.body))}</div>`:''}</div>
 <button class="cw a" style="--t:.4" onclick="TK.cubeNext(this)"><div class="cb" data-k="0" style="transform:rotateX(-13deg) rotateY(-20deg)">${c.items.map((it,i)=>`<div class="cf" style="transform:${F[i]} translateZ(${Z}px);background:${BG[i]};color:${i?'#fff':'#1b211a'}"><b>${E(T(it.t))}</b><span>${E(T(it.who||''))}</span></div>`).join('')}</div></button>
 <div class="hint a" style="--t:1;font-size:34px;color:#e9c88a">點方塊，轉下一面</div><img src="x:" alt="" style="display:none" onerror="TK.cubeAuto(this)">
 <div style="position:absolute;left:820px;top:${c.p.body?290:250}px;width:980px">${c.items.map((it,i)=>`<button class="cl ${i?'':'on'} a" style="--t:${.6+i*.15}" onclick="TK.cubePick(this,${i})"><b>${E(T(it.t))}</b><span>${E(T(it.who||''))}｜${E(T(it.body||''))}</span></button>`).join('')}</div>
 </section>`}})
TK.cubeAuto=()=>{}
if(!TK._cubeLoop&&!/static|preview/.test(location.search))TK._cubeLoop=setInterval(()=>{document.querySelectorAll('.t3 .cb').forEach(cb=>{if(!cb.dataset.manual)TK.cubeGo(cb.closest('.t3'),(+cb.dataset.k||0)+1)})},2600)
// 只針對這份簡報（William 2026-11-11）：放映時點畫面不換頁，點擊只給按鈕用；換頁用鍵盤左右鍵
document.addEventListener('click',e=>{if(document.body.classList.contains('present')&&!e.target.closest('button,a,video,audio,input,select,iframe,#presentTog,.top,.app > header'))e.stopPropagation()},true)
}

// 進站後在背景把所有照片、旁白先抓好，之後每頁一翻就有；最後把紙雕旅程暖一次（抓進快取）
if(!TK._warm){TK._warm=1;setTimeout(()=>{try{const seen=new Set(),q=[];let emb='';JSON.stringify(window.DATA,(k,v)=>{if(typeof v==='string'){if(/^(img|audio)\/[^\s"]+\.(jpe?g|png|webp|mp3)$/.test(v)&&!seen.has(v)){seen.add(v);q.push(v)}if(k==='url'&&/^https:/.test(v))emb=v}return v})
 Object.values(M.paperInkGrays||{}).forEach(v=>{if(!seen.has(v)){seen.add(v);q.push(v)}})
 let i=0,live=0;const warm=()=>{if(!emb||TK._warmed)return;TK._warmed=1;const f=document.createElement('iframe');f.src=emb;f.setAttribute('aria-hidden','true');f.tabIndex=-1;f.style.cssText='position:fixed;left:-3000px;top:0;width:1280px;height:720px;border:0;visibility:hidden;pointer-events:none';document.body.appendChild(f);setTimeout(()=>f.remove(),60000)}
 const next=()=>{const u=q[i++];if(!u){if(--live<=0)warm();return}if(/mp3$/.test(u))fetch(u).then(r=>r.blob()).then(next,next);else{const im=new Image();im.onload=im.onerror=next;im.src=u}}
 for(let k=0;k<3;k++){live++;next()}}catch(e){}},2000)}

