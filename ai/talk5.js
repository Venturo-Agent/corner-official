// 本案專用版型第五批（2026-11-11）：真的會轉的魔術方塊（27 顆小方塊、逐層轉動）。
// 不自動播：進頁是打亂的；每按一次「下一步」＝打亂→復原到下一個顏色（一項工作）。
{ const U=M.util, K=M.company, T=K.text, E=U.esc
const opt={auto:false,order:100,accepts:p=>!p.video}
const GOLD='#e9c88a',DEEP='#10261f',PAPER='#f4eee2',S=96
const COL=['#f3efe6','#C98A2B','#2a8f80','#5B6B7A','#B3372B','#2f5d8a']
// 六面朝向：0 前(+z) 1 右(+x) 2 後(-z) 3 左(-x) 4 上(-y) 5 下(+y)
const ROT=[[0,0],[0,-90],[0,-180],[0,-270],[-90,-360],[90,-360]]
const view=k=>`rotateX(-20deg) rotateY(-30deg) rotateX(${ROT[k][0]}deg) rotateY(${ROT[k][1]}deg)`
const ST=new WeakMap()
window.TK=window.TK||{}
const AX={x:[1,0,0],y:[0,1,0],z:[0,0,1]}
const snap=m=>{const r=v=>Math.round(v);['m11','m12','m13','m21','m22','m23','m31','m32','m33'].forEach(k=>m[k]=r(m[k]));['m41','m42','m43'].forEach(k=>m[k]=Math.round(m[k]/S)*S);return m}
const build=rk=>{const root=rk.querySelector('.rroot'),cubies=[]
 for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
  const el=document.createElement('div');el.className='cu'
  const faces=[[z===1,0,`translateZ(${S/2}px)`],[x===1,1,`rotateY(90deg) translateZ(${S/2}px)`],[z===-1,2,`rotateY(180deg) translateZ(${S/2}px)`],[x===-1,3,`rotateY(-90deg) translateZ(${S/2}px)`],[y===-1,4,`rotateX(90deg) translateZ(${S/2}px)`],[y===1,5,`rotateX(-90deg) translateZ(${S/2}px)`]]
  el.innerHTML=faces.map(([out,c,tf])=>`<i style="transform:${tf}">${out?`<b style="background:linear-gradient(145deg,color-mix(in srgb,${COL[c]} 86%,#fff),${COL[c]} 55%,color-mix(in srgb,${COL[c]} 80%,#000))"></b>`:''}</i>`).join('')
  const m=new DOMMatrix().translate(x*S,y*S,z*S);el.style.transform=m.toString();root.appendChild(el);cubies.push({el,m})}
 return cubies}
const turn=(st,mv,dur)=>new Promise(res=>{const [axis,layer,dir]=mv,ai='xyz'.indexOf(axis),key=['m41','m42','m43'][ai]
 const group=st.cubies.filter(c=>Math.round(c.m[key]/S)===layer),pv=st.pivot,R=new DOMMatrix().rotateAxisAngle(...AX[axis],90*dir)
 const bake=()=>{group.forEach(c=>{c.m=snap(R.multiply(c.m));c.el.style.transform=c.m.toString();st.root.appendChild(c.el)});pv.style.transition='none';pv.style.transform='none';res()}
 if(!dur){group.forEach(c=>{c.m=snap(R.multiply(c.m));c.el.style.transform=c.m.toString()});res();return}
 group.forEach(c=>pv.appendChild(c.el));void pv.offsetWidth
 pv.style.transition=`transform ${dur}ms cubic-bezier(.45,0,.3,1)`;pv.style.transform=`rotate3d(${AX[axis].join(',')},${90*dir}deg)`;setTimeout(bake,dur+15)})
const scramble=n=>{const out=[];let last='';while(out.length<n){const axis='xyz'[Math.floor(Math.random()*3)],layer=Math.random()<.5?-1:1;if(axis+layer===last)continue;last=axis+layer;out.push([axis,layer,Math.random()<.5?1:-1])}return out}
const show=(root,k,intro)=>{const D=JSON.parse(root.querySelector('.orb').dataset.items),dt=root.querySelector('.dt');dt.classList.remove('sw');void dt.offsetWidth
 root.querySelectorAll('.nd').forEach((e,i)=>e.classList.toggle('on',i===k));root.querySelectorAll('.sp').forEach((e,i)=>e.classList.toggle('on',i===k));root.querySelectorAll('.pg i').forEach((e,i)=>e.classList.toggle('on',i===k))
 const it=k<0?intro:D[k];dt.querySelector('.d-no').textContent=k<0?'00 / 06':'0'+(k+1)+' / 06';dt.querySelector('.d-job').textContent=it.t;dt.querySelector('.d-who').textContent=it.who;dt.querySelector('.d-lab').textContent=k<0?'':'負責';dt.querySelector('.d-desc').textContent=it.body
 dt.style.setProperty('--fc',k<0?GOLD:COL[k]);dt.classList.add('sw')}
TK.rkInit=rk=>{if(ST.has(rk))return;const st={root:rk.querySelector('.rroot'),pivot:rk.querySelector('.rpivot'),rc:rk.querySelector('.rc'),k:-1,busy:false};st.cubies=build(rk)
 st.mix=scramble(6);st.mix.forEach(mv=>turn(st,mv,0));ST.set(rk,st)}
// 一步：（已復原就先打亂）→ 逐層復原，同時整顆轉向下一個顏色
TK.rkGo=async(el,target)=>{const root=el.closest('.t4'),rk=root.querySelector('.rk');TK.rkInit(rk);const st=ST.get(rk);if(st.busy)return;st.busy=true;rk.classList.add('busy')
 const k=target==null?(st.k+1)%6:target
 show(root,k)
 if(!st.mix){st.mix=scramble(6);for(const mv of st.mix)await turn(st,mv,70)}
 st.rc.style.transform=view(k)
 for(const [a,l,d] of st.mix.slice().reverse())await turn(st,[a,l,-d],110)
 st.mix=null;st.k=k;rk.classList.remove('busy');rk.classList.add('done');setTimeout(()=>rk.classList.remove('done'),900);st.busy=false}
if(!TK._rkWatch)TK._rkWatch=setInterval(()=>document.querySelectorAll('.t4 .rk').forEach(rk=>{if(!ST.has(rk))TK.rkInit(rk)}),200)
// 鍵盤：在這一頁按 Enter 或空白鍵＝下一步（左右鍵仍是換頁）
if(!TK._rkKey){TK._rkKey=1;addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const rk=[...document.querySelectorAll('.t4 .rk')].find(x=>x.getClientRects().length);if(!rk||e.target.closest('input,textarea,[contenteditable=true]'))return;e.preventDefault();e.stopPropagation();TK.rkGo(rk)},true)}
M.add('company','talk-rubik',{...opt,name:'演講・魔術方塊',range:[6,6],html:c=>{const CX=560,CY=450,RR=345
 const items=c.items.map((it,i)=>({t:T(it.t),who:T(it.who||''),body:T(it.body||''),color:COL[i]})),intro={t:T(c.p.introTitle||'打亂的方塊'),who:'',body:T(c.p.introBody||'')}
 const pos=i=>{const a=(-90+i*60)*Math.PI/180;return [CX+RR*Math.cos(a),CY+RR*Math.sin(a)]}
 return `<style>
 .t4{position:absolute;inset:0;background:radial-gradient(1200px 800px at 30% 55%,#1d4439 0,#16332d 45%,${DEEP} 100%);color:${PAPER};overflow:hidden}
 .t4 *{box-sizing:border-box}.t4 h2{margin:0;font:700 68px/1.3 var(--serif)}.t4 button{all:unset;box-sizing:border-box}
 .t4 .a{animation:t4in .8s cubic-bezier(.16,.8,.24,1) both;animation-delay:calc(var(--t,0)*1s)}@keyframes t4in{from{opacity:0;transform:translateY(26px)}}
 @keyframes t4dash{to{stroke-dashoffset:-40}}@keyframes t4fly{from{offset-distance:0%}to{offset-distance:100%}}
 .t4 .orb{position:absolute;left:60px;top:170px;width:1120px;height:900px}
 .t4 .ring{transform-origin:${CX}px ${CY}px;animation:t4spin 80s linear infinite}@keyframes t4spin{to{transform:rotate(360deg)}}
 .t4 .sp{opacity:0;transition:opacity .5s}.t4 .sp.on{opacity:1}
 .t4 .rk{position:absolute;left:${CX-S*1.5}px;top:${CY-S*1.5}px;width:${S*3}px;height:${S*3}px;perspective:1700px;cursor:pointer;display:block}
 .t4 .rk.done{animation:t5pop .8s cubic-bezier(.2,1.6,.3,1)}@keyframes t5pop{40%{transform:scale(1.1)}}
 .t4 .rc{position:absolute;inset:0;transform-style:preserve-3d;transition:transform 1.2s cubic-bezier(.5,0,.2,1)}
 .t4 .rroot,.t4 .rpivot{position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d}
 .t4 .cu{position:absolute;left:${-S/2}px;top:${-S/2}px;width:${S}px;height:${S}px;transform-style:preserve-3d}
 .t4 .cu i{position:absolute;inset:0;background:#0b1512;border-radius:6px;backface-visibility:hidden}
 .t4 .cu b{position:absolute;inset:5px;border-radius:11px;box-shadow:inset 0 2px 0 rgba(255,255,255,.4),inset 0 -6px 12px rgba(0,0,0,.2)}
 .t4 .shadow{position:absolute;left:${CX-190}px;top:${CY+225}px;width:380px;height:46px;border-radius:50%;background:rgba(0,0,0,.5);filter:blur(16px)}
 .t4 .glow{position:absolute;left:${CX-270}px;top:${CY-270}px;width:540px;height:540px;border-radius:50%;background:radial-gradient(circle,rgba(233,200,138,.2),rgba(233,200,138,0) 62%)}
 .t4 .nd{position:absolute;width:190px;margin-left:-95px;margin-top:-58px;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:transform .6s cubic-bezier(.2,1.5,.3,1),opacity .5s;opacity:.5}
 .t4 .nd .av{width:96px;height:96px;border-radius:50%;border:4px solid rgba(255,255,255,.3);transition:all .5s}
 .t4 .nd.on{opacity:1;transform:scale(1.25)}.t4 .nd.on .av{border-color:${GOLD};box-shadow:0 0 0 8px rgba(233,200,138,.22),0 0 40px rgba(233,200,138,.6)}
 .t4 .dt{position:absolute;left:1250px;top:330px;width:540px;height:440px;border-radius:26px;background:linear-gradient(170deg,rgba(255,255,255,.12),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.22);padding:44px 46px;overflow:hidden;display:block;cursor:default}
 .t4 .dt:before{content:'';position:absolute;left:0;top:0;width:100%;height:10px;background:var(--fc,${GOLD});transition:background .6s}
 .t4 .dt.sw .sl{animation:t4sw .7s cubic-bezier(.16,.8,.24,1) both}.t4 .dt.sw .sl:nth-child(2){animation-delay:.08s}.t4 .dt.sw .sl:nth-child(3){animation-delay:.16s}.t4 .dt.sw .sl:nth-child(4){animation-delay:.24s}
 @keyframes t4sw{from{opacity:0;transform:translateX(60px)}}
 .t4 .pg{position:absolute;left:46px;bottom:34px;display:flex;gap:12px}.t4 .pg i{width:40px;height:6px;background:rgba(255,255,255,.22);transition:background .5s}.t4 .pg i.on{background:${GOLD}}
 .t4 .go{position:absolute;left:1250px;top:810px;width:540px;height:96px;border-radius:48px;background:${GOLD};color:#16332d;display:grid;place-items:center;font:900 40px var(--serif);letter-spacing:.2em;cursor:pointer;box-shadow:0 14px 40px rgba(0,0,0,.35);transition:transform .2s}
 .t4 .go:active{transform:scale(.96)}
 @media (prefers-reduced-motion:reduce){.t4 .a,.t4 .ring{animation:none!important}}
 </style><section class="t4"><div class="a" style="position:absolute;left:120px;top:64px;width:1680px"><h2>${c.ed('h',c.p.title||'')}</h2></div>
 ${c.p.body?`<div class="a" style="--t:.6;position:absolute;left:120px;top:158px"><svg width="1100" height="48"><text x="0" y="36" style="font:500 34px var(--sans);fill:${GOLD}">${E(T(c.p.body))}</text></svg></div>`:''}
 <div class="orb a" style="--t:.3" data-items='${E(JSON.stringify(items))}'>
  <svg viewBox="0 0 1120 900" width="1120" height="900" style="position:absolute;inset:0">
   <circle cx="${CX}" cy="${CY}" r="${RR}" fill="none" style="stroke:rgba(255,255,255,.14);stroke-width:2"/>
   <g class="ring"><circle cx="${CX}" cy="${CY}" r="${RR}" fill="none" style="stroke:${GOLD};stroke-width:3;stroke-dasharray:3 26;stroke-linecap:round;opacity:.8"/></g>
   ${items.map((it,i)=>{const [x,y]=pos(i),d=`M${CX} ${CY} L${x.toFixed(0)} ${y.toFixed(0)}`;return `<g class="sp"><path d="${d}" style="stroke:${GOLD};stroke-width:4;stroke-dasharray:8 14;stroke-linecap:round;animation:t4dash .9s linear infinite"/><circle r="9" style="fill:#fff;offset-path:path('${d}');animation:t4fly 1.4s linear infinite"/></g>`}).join('')}</svg>
  <div class="glow"></div><div class="shadow"></div>
  <button class="rk" onclick="TK.rkGo(this)"><div class="rc" style="transform:${view(0)}"><div class="rroot"></div><div class="rpivot"></div></div></button>
  ${items.map((it,i)=>{const [x,y]=pos(i);return `<button class="nd" style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px" onclick="TK.rkGo(this,${i})"><div class="av" style="background:${COL[i]}"></div><div style="font:700 30px/1.2 var(--serif);color:${PAPER};white-space:nowrap;text-shadow:0 2px 10px rgba(0,0,0,.6)">${E(it.t)}</div></button>`}).join('')}
 </div>
 <button class="dt sw a" style="--t:.8;--fc:${GOLD}">
  <div class="d-no sl" style="font:700 30px var(--sans);letter-spacing:.14em;color:${GOLD}">00 / 06</div>
  <div class="d-job sl" style="font:900 76px/1.2 var(--serif);margin-top:20px;color:#fff">${E(intro.t)}</div>
  <div class="sl" style="font-size:30px;color:${GOLD};margin-top:14px;min-height:54px"><span class="d-lab"></span>　<span class="d-who" style="font:700 44px var(--serif);color:#fff"></span></div>
  <div class="d-desc sl" style="font-size:36px;line-height:1.5;margin-top:10px;color:#e6dfd0">${E(intro.body)}</div>
  <div class="pg">${items.map(()=>`<i></i>`).join('')}</div></button>
 <button class="go a" style="--t:1" onclick="TK.rkGo(this)">下一步</button>
 </section>`}})
}
