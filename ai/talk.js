// 本案專用版型（演講用）：三點、大數字、人物名冊、單張畫面。只放在這份成品，未收進母片。
// 母片會把每頁文字收成三級字，所以每個版型只用三種字級：標題 68、項目 46、內文 32。
{ const U=M.util, K=M.company, T=K.text
const css=`<style>
.tk h2{font-size:68px;line-height:1.3}
.tk h3{font-size:46px;line-height:1.35}
.tk p,.tk .tk-sub{font-size:32px;line-height:1.6}
.tk p{color:color-mix(in srgb,var(--ink) 80%,transparent)}
.tk .tk-sub{color:var(--acc);letter-spacing:.06em}
.tk .tk-num{font-family:var(--serif);font-weight:700;color:var(--acc);font-size:84px;line-height:1}
.tk .tk-row{display:grid;grid-template-columns:150px 620px 1fr;gap:40px;align-items:center;border-top:1px solid var(--line);flex:1}
.tk .tk-big{font-family:var(--serif);font-weight:900;color:var(--acc);line-height:1;letter-spacing:-.02em;white-space:nowrap}
.tk .tk-card{display:flex;flex-direction:column;gap:18px;min-width:0}
.tk .tk-pic{height:524px;background:#e9e8e6;overflow:hidden}
.tk .tk-pic img,.tk .tk-shot img{object-fit:contain}
.tk .tk-shot{box-shadow:0 18px 60px rgba(0,0,0,.16);border:1px solid var(--line);background:#fff}
</style>`
const opt={auto:false,order:100,accepts:p=>!p.video}
const head=(c,top=96)=>`<div class="ab in" style="left:120px;top:${top}px;width:1680px;--i:0"><h2>${c.ed('h',c.p.title||'')}</h2>${c.p.body?`<p style="margin-top:18px">${c.ed('b',T(c.p.body))}</p>`:''}</div>`
M.add('company','talk-points',{...opt,name:'演講・三點',range:[1,3],html:c=>`${K.style}${css}<section class="co-page tk">${head(c)}
 <div class="ab" style="left:120px;top:${c.p.body?330:270}px;width:1680px;bottom:90px;display:flex;flex-direction:column;border-bottom:1px solid var(--line)">
 ${c.items.map((it,i)=>`<article class="tk-row in" style="--i:${3+i*4}"><div class="tk-num">0${i+1}</div><h3>${c.ed('t'+i,T(it.t))}</h3><p>${c.ed('b'+i,T(it.body))}</p></article>`).join('')}
 </div></section>`})
M.add('company','talk-number',{...opt,name:'演講・大數字',range:[0,3],html:c=>{const v=c.tx('v',c.p.value||''),units=[...v].reduce((n,ch)=>n+(/[\x00-\xff]/.test(ch)?.56:1),0),size=Math.round(Math.min(360,940/units))
 return `${K.style}${css}<section class="co-page tk">
 <div class="ab tk-sub in" style="left:120px;top:150px;width:1000px;--i:0">${c.ed('sub',T(c.p.sub||''))}</div>
 <div class="ab tk-big in" style="left:110px;top:250px;font-size:${size}px;--i:2">${c.ed('v',c.p.value||'')}</div>
 <div class="ab in" style="left:120px;top:700px;width:1000px;--i:5"><h2 style="font-size:60px">${c.ed('h',c.p.title||'')}</h2></div>
 <div class="ab" style="left:1180px;top:150px;width:620px;height:790px;display:flex;flex-direction:column;justify-content:space-between">${c.items.map((it,i)=>`<article class="in" style="--i:${7+i*4};border-top:1px solid var(--line);padding-top:28px;flex:1"><div class="tk-sub">${c.ed('t'+i,T(it.t))}</div><p style="margin-top:10px;color:var(--ink)">${c.ed('b'+i,T(it.body))}</p></article>`).join('')}</div>
 </section>`}})
M.add('company','talk-cast',{...opt,name:'演講・人物名冊',range:[1,3],html:c=>`${K.style}${css}<section class="co-page tk">${head(c,80)}
 <div class="ab" style="left:120px;top:215px;width:1680px;height:780px;display:grid;grid-template-columns:repeat(3,1fr);gap:54px">
 ${c.items.map((it,i)=>`<article class="tk-card in" style="--i:${2+i*4}"><div class="tk-pic"><img ${i===0?'class="hero"':''} src="${U.esc(K.photo(it.img))}" alt=""></div><h3>${c.ed('t'+i,T(it.t))}</h3><p style="margin-top:-8px">${c.ed('b'+i,T(it.body))}</p></article>`).join('')}
 </div></section>`})
M.add('company','talk-shot',{...opt,name:'演講・單張畫面',range:[1,1],html:c=>{const it=c.items[0]
 return `${K.style}${css}<section class="co-page tk">${head(c,80)}
 <div class="ab tk-shot in" style="left:120px;top:230px;width:1180px;height:${Math.round(1180*(c.p.ratio||.5625))}px;--i:2"><img class="hero" src="${U.esc(K.photo(it.img))}" alt=""></div>
 <div class="ab in" style="left:1360px;top:230px;width:440px;--i:6">${it.sub?`<div class="tk-sub" style="margin-bottom:28px">${c.ed('sub0',T(it.sub))}</div>`:''}<h3 style="text-wrap:balance">${c.ed('t0',T(it.t))}</h3><p style="margin-top:28px">${c.ed('b0',T(it.body))}</p></div>
 </section>`}})

M.add('company','talk-chart',{...opt,name:'演講・長條圖',range:[2,5],html:c=>{const max=Math.max(...c.items.map(it=>+it.value||0),1)
 return `${K.style}${css}<style>.tk .tk-bar{height:54px;background:color-mix(in srgb,var(--ink) 22%,transparent);transform-origin:left center;animation:tkgrow 1.1s cubic-bezier(.16,.8,.24,1) both}.tk .tk-bar.on{background:var(--acc)}@keyframes tkgrow{from{transform:scaleX(0)}}@media (prefers-reduced-motion:reduce){.tk .tk-bar{animation:none}}</style><section class="co-page tk">${head(c)}
 <div class="ab" style="left:120px;top:${c.p.body?340:290}px;width:1680px;bottom:150px;display:flex;flex-direction:column;justify-content:space-between">
 ${c.items.map((it,i)=>`<article class="in" style="--i:${3+i*3};display:grid;grid-template-columns:520px 1fr;gap:40px;align-items:center"><p style="color:var(--ink)">${c.ed('t'+i,T(it.t))}</p><div style="display:flex;align-items:center;gap:28px"><div class="tk-bar ${i===(c.p.focus??0)?'on':''}" style="width:${Math.round(900*(+it.value||0)/max)}px;animation-delay:${.35+i*.2}s"></div><h3 style="${i===(c.p.focus??0)?'color:var(--acc)':''}">${c.ed('v'+i,String(it.value)+(c.p.unit||''))}</h3></div></article>`).join('')}
 </div><div class="ab in" style="left:120px;bottom:70px;width:1680px;--i:16"><p>${c.ed('sub',T(c.p.sub||''))}</p></div></section>`}})
M.add('company','talk-screens',{...opt,name:'演講・成品畫面',range:[1,3],html:c=>`${K.style}${css}<section class="co-page tk">${head(c,80)}
 <div class="ab tk-shot in" style="left:120px;top:${c.p.body?290:230}px;width:1100px;height:619px;--i:2"><img class="hero" src="${U.esc(K.photo(c.items[0].img))}" alt=""></div>
 ${c.items.slice(1).map((it,i)=>`<div class="ab tk-shot in" style="left:1270px;top:${(c.p.body?290:230)+i*325}px;width:530px;height:298px;--i:${6+i*4}"><img src="${U.esc(K.photo(it.img))}" alt=""></div>`).join('')}
 <div class="ab in" style="left:120px;bottom:60px;width:1680px;--i:14"><p>${c.ed('sub',T(c.p.sub||''))}</p></div></section>`})
M.add('company','talk-gallery',{...opt,name:'演講・直式頁面牆',range:[2,4],html:c=>`${K.style}${css}<section class="co-page tk">${head(c,80)}
 <div class="ab" style="left:120px;top:${c.p.body?290:230}px;width:1680px;display:flex;justify-content:space-between">
 ${c.items.map((it,i)=>`<div class="tk-shot in" style="width:384px;height:538px;--i:${2+i*4};transform:rotate(${[-1.2,.8,-.6,1][i]}deg)"><img ${i===0?'class="hero"':''} src="${U.esc(K.photo(it.img))}" alt=""></div>`).join('')}
 </div><div class="ab in" style="left:120px;bottom:60px;width:1680px;--i:18"><p>${c.ed('sub',T(c.p.sub||''))}</p></div></section>`})

// 用程式畫的示範動畫：資料全是示範值，不是真實旅客或帳務
const dcss=`<style>
.dm{position:absolute;left:120px;right:120px;top:250px;bottom:110px;font-family:var(--sans)}
.dm *{box-sizing:border-box}
.dm .a{animation:dmin .6s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--t)*1s)}
@keyframes dmin{from{opacity:0;transform:translateY(18px)}}
.dm .lab{font-size:30px;letter-spacing:.12em;color:var(--acc);margin-bottom:18px}
.dm .bub{font-size:40px;line-height:1.5;padding:30px 34px;border-radius:26px 26px 26px 6px;background:var(--ink);color:var(--paper);margin-bottom:22px}
.dm .bub.me{border-radius:26px 26px 6px 26px;background:color-mix(in srgb,var(--ink) 9%,transparent);color:var(--ink)}
.dm .who{font-size:28px;color:var(--mute);margin:0 0 8px 6px}
.dm .card{background:#fff;border:1px solid var(--line);box-shadow:0 14px 44px rgba(0,0,0,.1);padding:30px 34px}
.dm .row{display:grid;grid-template-columns:150px 1fr 36px;align-items:center;font-size:30px;white-space:nowrap;line-height:1;padding:25px 0;border-top:1px solid var(--line)}
.dm .row b{font-weight:500;color:var(--mute);font-size:28px}
.dm .ok{color:var(--acc);font-weight:700;font-size:32px}
.dm .clock{font:900 112px/1.2 var(--serif);color:var(--ink);letter-spacing:-.02em}
.dm .track{height:10px;background:color-mix(in srgb,var(--ink) 12%,transparent);margin-top:26px}
.dm .fill{height:100%;background:var(--acc);transform-origin:left;animation:dmfill 1.6s linear both;animation-delay:calc(var(--t)*1s)}
@keyframes dmfill{from{transform:scaleX(0)}}
.dm .stamp{display:inline-block;margin-top:22px;padding:12px 22px;border:3px solid var(--acc);color:var(--acc);font:700 36px var(--serif);transform:rotate(-3deg)}
.dm .arrow{position:absolute;top:210px;font:400 60px var(--serif);color:var(--acc)}
.dm .line{position:absolute;height:3px;background:var(--acc);transform-origin:left;animation:dmfill .5s ease-out both;animation-delay:calc(var(--t)*1s)}
.dm .line.bad{background:var(--acc2,#b3372b)}
.dm .item{display:grid;grid-template-columns:120px 1fr;align-items:center;height:100px;padding:0 28px;font-size:38px;border-top:1px solid var(--line)}
.dm .item span{font-size:30px;color:var(--mute)}.dm .item em{font-style:normal;text-align:right;font-variant-numeric:tabular-nums}
.dm .note{font-size:30px;color:var(--mute)}
@media (prefers-reduced-motion:reduce){.dm .a,.dm .fill,.dm .line{animation:none}}
</style>`
const border=()=>{const rows=[['姓名','CHEN, MEI-LING'],['護照號碼','3●●●●●●58'],['航班','XX 123'],['抵達日期','2026-11-14'],['住宿','曼谷市區飯店']]
 return `<div class="dm">
 <div style="position:absolute;left:0;top:0;width:520px"><div class="lab a" style="--t:.2">你說一句</div>
  <div class="who a" style="--t:.5">你</div><div class="bub me a" style="--t:.5">出發前三天早上 8 點，幫曼谷團填泰國入境卡</div>
  <div class="who a" style="--t:1.6">Enos</div><div class="bub a" style="--t:1.6">收到，排好了。填完先給你看，你核准我才送出</div></div>
 <div class="arrow a" style="left:560px;--t:2.4">→</div>
 <div style="position:absolute;left:650px;top:0;width:400px"><div class="lab a" style="--t:2.6">時間到，它自己開工</div>
  <div class="card a" style="--t:2.8"><div class="note">排程</div><div class="clock">08:00</div><div class="track"><div class="fill" style="--t:3.2"></div></div><div class="note a" style="--t:4.8;margin-top:16px">開始填寫</div></div></div>
 <div class="arrow a" style="left:1090px;--t:4.9">→</div>
 <div style="position:absolute;left:1180px;top:0;width:500px"><div class="lab a" style="--t:5">泰國入境卡（示範資料）</div>
  <div class="card a" style="--t:5.1;padding-top:14px">${rows.map((r,i)=>`<div class="row a" style="--t:${5.5+i*.5};${i?'':'border-top:0'}"><b>${r[0]}</b><div>${r[1]}</div><div class="ok">✓</div></div>`).join('')}
  <div class="stamp a" style="--t:8.3">填好了，等你核准</div></div></div>
 </div>`}
const recon=()=>{const L=[['11/10','36,000'],['11/10','128,500'],['11/10','42,000'],['11/10','15,500']],R=[['收款單 A','36,000'],['收款單 B','128,500'],['收款單 C','42,000'],['收款單 D','15,000']]
 const col=(x,title,list,t0)=>`<div style="position:absolute;left:${x}px;top:0;width:600px"><div class="lab a" style="--t:${t0}">${title}</div><div class="card a" style="--t:${t0+.2};padding:0">${list.map((r,i)=>`<div class="item a" style="--t:${t0+.4+i*.25};${i?'':'border-top:0'}"><span>${r[0]}</span><em>${r[1]}</em></div>`).join('')}</div></div>`
 return `<div class="dm">${col(0,'銀行入帳（示範資料）',L,.2)}${col(1080,'系統裡的收款單',R,.6)}
 ${L.map((_,i)=>`<div class="line ${i===3?'bad':''}" style="left:620px;top:${50+50+i*100+26}px;width:440px;--t:${2.4+i*.7}"></div><div class="ok a" style="position:absolute;left:790px;top:${50+50+i*100-22}px;--t:${2.8+i*.7};${i===3?'color:var(--acc2,#b3372b)':''}">${i===3?'差 500':'✓ 相符'}</div>`).join('')}
 <div style="position:absolute;left:0;right:0;top:520px;display:flex;gap:40px;align-items:flex-start">
  <div style="width:820px"><div class="who a" style="--t:5.6">Ben</div><div class="bub a" style="--t:5.6">四筆裡三筆對上了。第四筆差 500，我沒有動，請你看一下</div></div>
  <div class="a" style="--t:6.6;padding-top:40px"><div class="stamp" style="margin:0">錢要不要動，由人決定</div></div></div>
 </div>`}
M.add('company','talk-demo',{...opt,name:'演講・示範動畫',range:[0,0],html:c=>`${K.style}${css}${dcss}<section class="co-page tk">${head(c,80)}${c.p.scene==='recon'?recon():border()}
 <div class="ab in" style="left:120px;bottom:50px;width:1680px;--i:20;font-size:30px;color:var(--mute)">${U.esc(T(c.p.sub||''))}</div></section>`})
}
