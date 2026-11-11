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
 <div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(10,16,14,.9) 0,rgba(10,16,14,.5) 55%,rgba(10,16,14,.15) 100%)"></div>
 <div style="position:absolute;left:120px;right:120px;bottom:210px"><div class="a" style="font:900 150px/1.2 var(--serif);--t:.4">${c.ed('k',c.p.title||'')}</div>
 <div class="a" style="width:120px;height:6px;background:#C98A2B;margin:34px 0;--t:1"></div>
 <div class="a" style="font:700 64px/1.45 var(--serif);--t:1.3">${c.ed('b',c.p.body||'')}</div></div>
 <div class="a" style="position:absolute;left:120px;bottom:80px;font:700 40px/1 var(--serif);letter-spacing:.12em;--t:2">${E(c.p.brand||c.meta.agency||'')}</div></section>`}})

// 只針對這份簡報（William 2026-11-11）：放映時點畫面不換頁，點擊只給按鈕用；換頁用鍵盤左右鍵
document.addEventListener('click',e=>{if(document.body.classList.contains('present')&&!e.target.closest('button,a,video,audio,input,select,iframe,#presentTog,.top,.app > header'))e.stopPropagation()},true)
}
