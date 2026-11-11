/* 投影母片編輯工具；擴充目前頁面的資料，不另開一套產線。 */
(() => {
  const A = M.editAPI, $ = id => document.getElementById(id), esc = M.util.esc;
  const clamp = (v, min, max, fallback) => Number.isFinite(+v) ? Math.max(min, Math.min(max, +v)) : fallback;
  const color = v => /^#[\da-f]{6}$/i.test(v || '') ? v : '#1d2124';
  let selected = null, selectedLayout=null, selectedField=null, selectedCopiedField=null, editingNode=null, panelKind='page', page = null, lines = [], lineChoice = '', variant = null;
  let multiKeys=new Set(),marquee=null,multiDrag=null;
  const elements = () => Array.isArray(A.page().elements) ? A.page().elements : [];
  const current = () => elements().find(e => e.id === selected);
  const commit = () => A.commit();
  // All geometry is in the existing 1920×1080 canvas coordinates.
  const snapAxis = (position, offsets, anchors, threshold) => {
    let best={value:position,guide:null,distance:threshold};
    for(const offset of offsets) for(const anchor of anchors) {
      const distance=Math.abs(anchor-position-offset);
      if(distance < best.distance) best={value:anchor-offset,guide:anchor,distance};
    }
    return best;
  };
  // Pure geometry: short alignment segments and unambiguous equal gaps.
  function smartSegments(box, rects, gx, gy) {
    const segments=[], edge=(r,a)=>a==='x'?[r.x,r.x+r.w/2,r.x+r.w]:[r.y,r.y+r.h/2,r.y+r.h];
    for(const [axis,value] of [['x',gx],['y',gy]]) {
      if(value===null)continue;
      const cross=axis==='x'?'y':'x',size=axis==='x'?'h':'w',limit=axis==='x'?1080:1920;
      const matches=rects.filter(r=>edge(r,axis).some(v=>Math.abs(v-value)<.1));
      matches.sort((a,b)=>Math.abs(a[cross]+a[size]/2-box[cross]-box[size]/2)-Math.abs(b[cross]+b[size]/2-box[cross]-box[size]/2));
      const target=matches[0] || box;
      segments.push({axis,value,start:Math.max(0,Math.min(box[cross],target[cross])-12),end:Math.min(limit,Math.max(box[cross]+box[size],target[cross]+target[size])+12)});
    }
    for(const axis of ['x','y']){const gap=snapSpacing(box,rects,axis,.51);if(gap)segments.push(...gap.segments);}
    return segments;
  }
  function snapSpacing(box,rects,axis,threshold){
    const size=axis==='x'?'w':'h',cross=axis==='x'?'y':'x',other=axis==='x'?'h':'w',limit=axis==='x'?1920:1080;
    const overlap=(a,b)=>Math.min(a[cross]+a[other],b[cross]+b[other])-Math.max(a[cross],b[cross]);
    const row=rects.filter(r=>overlap(box,r)>=Math.min(box[other],r[other])*.25).sort((a,b)=>a[axis]-b[axis]);
    let best=null;
    for(let i=0;i<row.length-1;i++){
      const a=row[i],b=row[i+1],gap=b[axis]-a[axis]-a[size];
      if(gap<4 || overlap(a,b)<=0)continue;
      const positions=[a[axis]-gap-box[size],b[axis]+b[size]+gap];
      if(gap>box[size]+8)positions.push(a[axis]+a[size]+(gap-box[size])/2);
      for(const value of positions){
        const distance=Math.abs(value-box[axis]);if(distance>=threshold || value<0 || value+box[size]>limit || (best&&distance>=best.distance))continue;
        const placed={...box,[axis]:value};
        if(row.some(r=>r[axis]<value+box[size]-.1&&r[axis]+r[size]>value+.1))continue;
        const trio=[a,b,placed].sort((u,v)=>u[axis]-v[axis]);
        // The three must be adjacent in this row/column; no intervening object.
        if(row.some(r=>r!==a&&r!==b&&r[axis]<trio[2][axis]&&r[axis]+r[size]>trio[0][axis]+trio[0][size]))continue;
        const lo=Math.max(...trio.map(r=>r[cross])),hi=Math.min(...trio.map(r=>r[cross]+r[other]));if(hi<=lo)continue;
        const gaps=[trio[1][axis]-trio[0][axis]-trio[0][size],trio[2][axis]-trio[1][axis]-trio[1][size]];
        if(Math.abs(gaps[0]-gaps[1])>.1)continue;
        best={value,distance,segments:[0,1].map(j=>({axis:axis==='x'?'y':'x',value:(lo+hi)/2,start:trio[j][axis]+trio[j][size],end:trio[j+1][axis],gap:true,label:String(Math.round(gaps[0]))}))};
      }
    }
    return best;
  }
  function snapMove(box,rects,xs,ys,threshold){
    const out={...box};let gx=null,gy=null;
    for(const axis of ['x','y']){
      const size=axis==='x'?'w':'h',edge=snapAxis(out[axis],[0,out[size]/2,out[size]],axis==='x'?xs:ys,threshold);
      const spacing=snapSpacing(out,rects,axis,threshold);
      if(spacing){out[axis]=spacing.value;}
      else {out[axis]=edge.value;if(axis==='x')gx=edge.guide;else gy=edge.guide;}
    }
    return {box:out,gx,gy};
  }
  function boundsOf(boxes){const x=Math.min(...boxes.map(b=>b.x)),y=Math.min(...boxes.map(b=>b.y));return{x,y,w:Math.max(...boxes.map(b=>b.x+b.w))-x,h:Math.max(...boxes.map(b=>b.y+b.h))-y};}
  function arrangeBoxes(boxes,mode){
    if(boxes.length<2)return null;const b=boundsOf(boxes);
    return boxes.map(r=>({...r,...({left:{x:b.x},center:{x:b.x+b.w/2-r.w/2},right:{x:b.x+b.w-r.w},top:{y:b.y},middle:{y:b.y+b.h/2-r.h/2},bottom:{y:b.y+b.h-r.h}}[mode]||{})}));
  }
  function distributeBoxes(boxes,axis){
    if(boxes.length<3)return null;const a=axis==='horizontal'?'x':'y',size=a==='x'?'w':'h';
    const sorted=boxes.map((r,i)=>({...r,index:i})).sort((u,v)=>u[a]-v[a]||u.index-v.index);
    const span=sorted.at(-1)[a]+sorted.at(-1)[size]-sorted[0][a],gap=(span-sorted.reduce((n,r)=>n+r[size],0))/(sorted.length-1);
    if(gap<0)return null;let cursor=sorted[0][a];const result=boxes.map(r=>({...r}));
    for(const r of sorted){result[r.index][a]=cursor;cursor+=r[size]+gap;}return result;
  }
  // Back-to-front order; selected runs move together without reversing their members.
  function reorderLayers(order,keys,mode){
    const selected=new Set(keys),next=order.slice();
    if(mode==='front')return next.filter(k=>!selected.has(k)).concat(next.filter(k=>selected.has(k)));
    if(mode==='back')return next.filter(k=>selected.has(k)).concat(next.filter(k=>!selected.has(k)));
    if(mode==='up')for(let i=next.length-2;i>=0;i--){if(selected.has(next[i])&&!selected.has(next[i+1]))[next[i],next[i+1]]=[next[i+1],next[i]];}
    if(mode==='down')for(let i=1;i<next.length;i++){if(selected.has(next[i])&&!selected.has(next[i-1]))[next[i],next[i-1]]=[next[i-1],next[i]];}
    return next;
  }
  M.editorMath={snapAxis,smartSegments,snapSpacing,snapMove,boundsOf,arrangeBoxes,distributeBoxes,reorderLayers};
  const stableKey=text=>'text:'+text.dataset.k.replace(/^\d+:/,'');
  const fontFamily=v=>({serif:'var(--serif)',sans:'var(--sans, sans-serif)',mono:'monospace'}[v]||'');
  const rgbHex=v=>{if(/^#[\da-f]{6}$/i.test(v||''))return v;const m=v?.match(/^rgba?\(\s*(\d+)[, ]+\s*(\d+)[, ]+\s*(\d+)/);return m?'#'+m.slice(1,4).map(n=>(+n).toString(16).padStart(2,'0')).join(''):'#1d2124';};
  function applyTextStyle(node,style={}){
    if('family' in style)node.style.fontFamily=fontFamily(style.family);
    if(style.size)node.style.fontSize=clamp(style.size,8,180,48)+'px';
    if(style.color)node.style.color=color(style.color);
    for(const [key,prop,on,off] of [['bold','fontWeight','700','400'],['italic','fontStyle','italic','normal'],['underline','textDecoration','underline','none']])if(key in style)node.style[prop]=style[key]?on:off;
    if(style.hidden)node.style.display='none';
  }
  const grips=()=>['nw','n','ne','e','se','s','sw','w'].map(c=>`<button class="layer-resize object-resize" data-corner="${c}" type="button" aria-label="${{nw:'左上',n:'上',ne:'右上',e:'右',se:'右下',s:'下',sw:'左下',w:'左'}[c]}縮放"></button>`).join('');
  const layoutBases=new WeakMap();
  function layoutBase(el){
    let base=layoutBases.get(el);if(base)return base;
    const w=el.offsetWidth,h=el.offsetHeight,children=[];
    for(const node of el.children || []){
      if(node.matches?.('button,.object-resize,.layer-delete'))continue;
      const cs=getComputedStyle(node);if(cs.position!=='absolute')continue;
      const x=node.offsetLeft,y=node.offsetTop,nw=node.offsetWidth,nh=node.offsetHeight;
      const text=!!node.querySelector('[data-k],[data-clipboard-field]'),background=!text&&Math.abs(x)<3&&Math.abs(y)<3&&nw>=w*.85&&nh>=h*.8;
      if(text||background)children.push({node,x,y,w:nw,h:nh,text,background,right:Math.max(0,w-x-nw),bottom:Math.max(0,h-y-nh)});
    }
    base={w,h,children};layoutBases.set(el,base);return base;
  }
  function applyLayout(el,pos={}) {
    const base=layoutBase(el),sx=pos.sx||1,sy=pos.sy||1;
    el.style.translate=`${pos.x||0}px ${pos.y||0}px`;el.style.scale=`${sx} ${sy}`;el.style.transformOrigin='0 0';
    el.style.setProperty('--object-scale-x',sx);el.style.setProperty('--object-scale-y',sy);
    if(!Number.isFinite(pos.w)&&!Number.isFinite(pos.h))return;
    const w=Number.isFinite(pos.w)?pos.w:base.w,h=Number.isFinite(pos.h)?pos.h:base.h;
    el.style.width=w+'px';el.style.height=h+'px';
    for(const item of base.children){
      item.node.style.width=Math.max(20,w-item.x-item.right)+'px';
      if(item.text){item.node.style.height='auto';item.node.style.minHeight=Math.max(0,h-item.y-item.bottom)+'px';item.node.style.overflow='visible';}
    }
    let needed=h;
    for(const item of base.children)if(item.text)needed=Math.max(needed,item.y+Math.max(item.node.scrollHeight,item.node.offsetHeight)+item.bottom);
    // An ordinary title container is itself the text box, without a paper wrapper.
    if(!base.children.some(item=>item.text))for(const text of el.querySelectorAll('[data-k],[data-clipboard-field]'))needed=Math.max(needed,(text.offsetTop||0)+(text.offsetHeight||0));
    el.style.height=needed+'px';
    for(const item of base.children)if(item.background)item.node.style.height=Math.max(0,needed-item.y-item.bottom)+'px';
  }
  const imageSrc = s => /^data:image\/(png|jpeg|webp|gif);base64,[a-z\d+/=]+$/i.test(s || '') ? s : '';
  const imagePosition=s=>/^\d+(?:\.\d+)?% \d+(?:\.\d+)?%$/.test(s||'')?s:'50% 50%';
  const photoTree=e=>{const node=e?.kind==='group'&&e.groupImage&&e.tree?.node;if(node?.tag==='img')return node;return node?.tag==='div'&&node.children?.length===1&&node.children[0]?.tag==='img'?node.children[0]:null;};
  function photoItem(e=current()){
    if(e?.kind==='image')return {e,src:e.src,pos:e.imagePosition||'50% 50%',fit:'contain'};
    const node=photoTree(e);if(node)return {e,src:node.attrs?.src,pos:node.style?.['object-position']||'50% 50%',fit:node.style?.['object-fit']||'fill'};
    return null;
  }
  function groupHTML(e){
    try{return `<div data-group-content>${M.clipboard.html(e.tree)}</div>`;}catch{return '<div>此物件無法載入</div>';}
  }
  function applyGroup(el,e){
    const root=el.querySelector('[data-group-content]')?.firstElementChild;if(!root)return;
    const sx=e.groupScaleX||e.baseW/e.tree.width||1,sy=e.groupScaleY||e.baseH/e.tree.height||1;
    applyLayout(root,{x:0,y:0,w:e.w/sx,h:e.h/sy,sx,sy});
    el.style.height=Math.max(e.h,root.offsetHeight*sy)+'px';
  }
  // NATIVE_PHOTO_BEGIN — retain the authored img and its ancestor/effect ownership.
  function safePhotoClip(el,value){
    if(!effectValue(value))return true;
    // Only the explicitly independent four-point photo bands opt in. Percent
    // coordinates follow each resized frame; path/URL/ancestor clips remain out.
    if(el.dataset.photoShape!=='quad')return false;
    const body=String(value).match(/^polygon\(\s*([^()]+)\s*\)$/i)?.[1];if(!body)return false;
    const parts=body.split(',');if(parts.length!==4)return false;
    const points=parts.map(part=>part.trim().match(/^(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)%$/)?.slice(1).map(Number));
    if(points.some(p=>!p||p.some(v=>!Number.isFinite(v)||Math.abs(v)>1000)))return false;
    const [a,b,c,d]=points;
    // Two horizontal edges in clockwise order, both crossing the image bounds.
    // Outer bands may extend beyond their own box exactly as authored; the img
    // still clips to that box, while the inner diagonal stays proportional.
    return a[1]===0&&b[1]===0&&c[1]===100&&d[1]===100
      &&a[0]<b[0]&&d[0]<c[0]&&a[0]<100&&b[0]>0&&d[0]<100&&c[0]>0;
  }
  function safeNativePhoto(el,root){
    if(el.tagName!=='IMG'||!el.dataset.photoLayout||el.closest('.user-layer,[data-layout]'))return false;
    if(el.offsetWidth<80||el.offsetHeight<40||(el.offsetWidth>=1728&&el.offsetHeight>=972))return false;
    const chain=[];for(let n=el;n&&n!==root;n=n.parentElement)chain.push(n);
    if(!chain.length||chain.at(-1).parentElement!==root)return false;
    // Entrance animation must not change eligibility between edit, print and playback.
    const animations=chain.map(n=>[n,n.style.getPropertyValue('animation'),n.style.getPropertyPriority('animation')]);
    try{
      for(const [n] of animations)n.style.setProperty('animation','none','important');
      for(const n of chain){const c=getComputedStyle(n);
        if(n===el&&c.position!=='absolute')return false;
        if(['transform','translate','rotate','scale','perspective','maskImage','webkitMaskImage','filter','backdropFilter'].some(k=>effectValue(c[k]))||c.transformStyle==='preserve-3d')return false;
        if(n===el?!safePhotoClip(el,c.clipPath):effectValue(c.clipPath))return false;
        if(n.dataset?.shared)return false;
        if(n!==el&&(/hidden|clip|scroll|auto/.test(c.overflowX+' '+c.overflowY)||n.dataset?.layout||n.dataset?.shared))return false;
      }
      return true;
    }finally{for(const [n,value,priority] of animations){if(value)n.style.setProperty('animation',value,priority);else n.style.removeProperty('animation');}}
  }
  // A screen is one independently masked frame, never a collection of shared
  // full-page windows. Accept only the four authored inset corner gradients.
  const maskLayers=value=>{
    const parts=[];let depth=0,start=0;
    for(let i=0;i<value.length;i++){if(value[i]==='(')depth++;else if(value[i]===')'){if(--depth<0)return [];}else if(value[i]===','&&!depth){parts.push(value.slice(start,i).trim());start=i+1;}}
    if(depth)return [];parts.push(value.slice(start).trim());return parts;
  };
  function safeScreenMask(c){
    const layers=maskLayers(c.maskImage||c.webkitMaskImage||''),corners=[['0','0'],['100%','0'],['0','100%'],['100%','100%']];
    if(layers.length!==4)return false;
    const zero='0(?:\\.0+)?',transparent=`(?:#0000|transparent|rgba\\(\\s*0\\s*,\\s*0\\s*,\\s*0\\s*,\\s*${zero}\\s*\\))`,black='(?:#000(?:000)?|black|rgb\\(\\s*0\\s*,\\s*0\\s*,\\s*0\\s*\\))';
    const gradient=new RegExp(`^radial-gradient\\(\\s*circle\\s+at\\s+(0(?:px|%)?|100%)\\s+(0(?:px|%)?|100%)\\s*,\\s*${transparent}\\s+(\\d+(?:\\.\\d+)?)px\\s*,\\s*${black}\\s+(\\d+(?:\\.\\d+)?)px\\s*\\)$`,'i');
    let radius;
    for(let i=0;i<4;i++){
      const match=layers[i].match(gradient);if(!match)return false;
      if(match[1].replace(/^0(?:px|%)?$/,'0')!==corners[i][0]||match[2].replace(/^0(?:px|%)?$/,'0')!==corners[i][1])return false;
      const r=+match[3],edge=+match[4];if(r<1||r>34||Math.abs(edge-r-1)>.001||radius!==undefined&&r!==radius)return false;radius=r;
    }
    const list=value=>{const parts=maskLayers(value||'');return parts.length===1?Array(4).fill(parts[0]):parts;};
    const sizes=list(c.maskSize),positions=list(c.maskPosition),repeats=list(c.maskRepeat);
    if(sizes.length!==4||positions.length!==4||repeats.length!==4)return false;
    for(let i=0;i<4;i++){
      if(!/^51%\s+51%$/.test(sizes[i])||!/^no-repeat(?:\s+no-repeat)?$/.test(repeats[i]))return false;
      const pos=positions[i].split(/\s+/).map(v=>v.replace(/^0(?:px|%)?$/,'0'));if(pos.length!==2||pos.some((v,j)=>v!==corners[i][j]))return false;
    }
    for(const [property,expected]of [['maskOrigin','border-box'],['maskClip','border-box'],['maskComposite','add'],['maskMode','match-source']]){const values=list(c[property]);if(values.length!==4||values.some(v=>v!==expected))return false;}
    return true;
  }
  function safePhotoFrame(frame,root){
    if(!['single','screen'].includes(frame.dataset.photoFrame)||frame.closest('.user-layer,[data-layout]')||frame.children.length!==1)return null;
    const img=frame.firstElementChild;if(img?.tagName!=='IMG'||!img.dataset.photoLayout||frame.offsetWidth<80||frame.offsetHeight<40||(frame.offsetWidth>=1728&&frame.offsetHeight>=972))return null;
    if([...frame.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))return null;
    const chain=[];for(let n=img;n&&n!==root;n=n.parentElement)chain.push(n);
    if(chain.at(-1)?.parentElement!==root)return null;
    const animations=chain.map(n=>[n,n.style.getPropertyValue('animation'),n.style.getPropertyPriority('animation')]);
    try{
      for(const [n] of animations)n.style.setProperty('animation','none','important');
      for(const n of chain){const c=getComputedStyle(n);
        if(n===frame&&c.position!=='absolute'||n===img&&c.position!=='static')return null;
        if(['transform','translate','rotate','scale','perspective','clipPath','filter','backdropFilter'].some(k=>effectValue(c[k]))||c.transformStyle==='preserve-3d')return null;
        if(n===frame&&frame.dataset.photoFrame==='screen'){if(!safeScreenMask(c))return null;}
        else if(['maskImage','webkitMaskImage'].some(k=>effectValue(c[k])))return null;
        if(n!==img&&n!==frame&&(/hidden|clip|scroll|auto/.test(c.overflowX+' '+c.overflowY)||n.dataset?.layout||n.dataset?.shared))return null;
        if(n.dataset?.shared)return null;
        for(const pseudo of ['::before','::after']){const cs=getComputedStyle(n,pseudo);if(cs.content&&cs.content!=='none'&&cs.content!=='normal'&&cs.display!=='none')return null;}
      }
      const a=frame.getBoundingClientRect(),b=img.getBoundingClientRect();
      if(Math.abs(a.left-b.left)>.5||Math.abs(a.top-b.top)>.5||Math.abs(a.width-b.width)>.5||Math.abs(a.height-b.height)>.5)return null;
      return img;
    }finally{for(const [n,value,priority] of animations){if(value)n.style.setProperty('animation',value,priority);else n.style.removeProperty('animation');}}
  }
  const frameImage=box=>box?.tagName==='IMG'?box:box?.dataset?.photoObject==='true'?box.querySelector('img'):null;
  function photoFrame(){const box=multiKeys.size<2?nativeBox():null;return box?.dataset?.photoObject==='true'?box:null;}
  function syncPhotoControls(){
    const old=stage.querySelector?.('[data-photo-controls]'),el=photoFrame();
    if(!el||A.presenting()||!document.body.classList.contains('edit')||!el.checkVisibility?.()){old?.remove();return;}
    let box=old;if(!box){box=document.createElement('div');box.className='native-photo-controls layout-selected';box.innerHTML=grips();stage.appendChild(box);}
    box.dataset.photoControls=el.dataset.layout;const r=nodeBox(el);
    Object.assign(box.style,{left:r.x+'px',top:r.y+'px',width:r.w+'px',height:r.h+'px'});
  }
  // NATIVE_PHOTO_END
  // LAYERS_BEGIN: keep the authored DOM, clipping, transforms and image crop ownership.
  // A descendant cannot escape a stacking context by raising its own z-index.
  const layerModes=['up','down','front','back'];
  const effectValue=v=>!!v&&v!=='none'&&v!=='normal';
  function createsStack(el){
    const c=getComputedStyle(el),parent=el.parentElement&&getComputedStyle(el.parentElement);
    return el.classList.contains('in') || (c.zIndex&&c.zIndex!=='auto'&&(c.position!=='static'||/flex|grid/.test(parent?.display||'')))
      || ['fixed','sticky'].includes(c.position) || (c.opacity!==''&&c.opacity!==undefined&&+c.opacity<1)
      || ['transform','translate','rotate','scale','filter','backdropFilter','perspective','clipPath','maskImage','webkitMaskImage'].some(k=>effectValue(c[k]))
      || c.isolation==='isolate' || c.transformStyle==='preserve-3d' || effectValue(c.containerType) || effectValue(c.mixBlendMode) || /paint|layout|strict|content/.test(c.contain||'')
      || /transform|translate|rotate|scale|opacity|filter|perspective|clip-path|mask|isolation|z-index|mix-blend-mode/.test(c.willChange||'')
      || (c.animationName&&c.animationName!=='none'&&/forwards|both/.test(c.animationFillMode||''));
  }
  function layerCarrier(el,root){
    if(!root||el===root)return null;
    let carrier=el,parent=el.parentElement;
    for(;parent&&parent!==root;parent=parent.parentElement){
      if(parent.dataset?.layer||parent.dataset?.layout)return null;
      if(createsStack(parent))carrier=parent;
    }
    if(parent!==root)return null;
    // Only lift an exclusive wrapper. Moving a shared effect group would also move
    // its photos/background/other text, which is not the selected-object action.
    for(let node=el;node!==carrier;node=node.parentElement){
      if([...node.parentElement.children].some(sibling=>sibling!==node&&!sibling.matches('style,script,link,template')&&getComputedStyle(sibling).display!=='none'))return null;
      if([...node.parentElement.childNodes].some(sibling=>sibling.nodeType===3&&sibling.textContent.trim()))return null;
    }
    const css=getComputedStyle(carrier),pc=carrier.parentElement&&getComputedStyle(carrier.parentElement);
    if(!['absolute','relative','fixed','sticky'].includes(css.position)&&!/flex|grid/.test(pc?.display||''))return null;
    if(carrier!==el&&carrier.offsetWidth>=1728&&carrier.offsetHeight>=972)return null;
    return carrier;
  }
  function layerModel(root,p,v){
    const entries=[],blocked=new Set();
    if(!root)return {entries,order:[],blocked};
    for(const el of root.querySelectorAll('[data-layer],[data-layout]')){
      if(getComputedStyle(el).display==='none')continue;
      const key=selectionKey(el),carrier=layerCarrier(el,root);
      if(!carrier){blocked.add(key);continue;}
      entries.push({key,el,carrier,z:parseInt(getComputedStyle(carrier).zIndex,10)||0});
    }
    entries.sort((a,b)=>a.z-b.z);
    const saved=Array.isArray(p.layerOrder?.[v])?p.layerOrder[v]:[],known=new Set(entries.map(e=>e.key));
    const order=[...new Set(saved.filter(k=>known.has(k)))];
    // New/pasted objects enter at the front without rewriting the saved ordering.
    for(const e of entries)if(!order.includes(e.key))order.push(e.key);
    return {entries,order,blocked};
  }
  function applyLayers(root,p,v){
    if(!Array.isArray(p.layerOrder?.[v]))return;
    const model=layerModel(root,p,v);
    // Positive levels inside the slide: "back" is behind editable objects, never
    // behind the slide/background. Do not reparent nodes or alter their geometry.
    root.style.isolation='isolate';
    for(const entry of model.entries)entry.carrier.style.zIndex=String(31+model.order.indexOf(entry.key));
  }
  function layerState(){
    const root=stage.querySelector?.('.slide'),model=layerModel(root,A.page(),A.variant()),keys=selectedNodes().map(selectionKey);
    const reason=keys.some(key=>model.blocked.has(key))?'此物件與其他內容共用特效，暫不支援圖層排列':'';
    const allowed=keys.length>0&&!reason&&keys.every(key=>model.order.includes(key));
    return {...model,root,keys,reason,enabled:Object.fromEntries(layerModes.map(mode=>[mode,allowed&&reorderLayers(model.order,keys,mode).some((key,i)=>key!==model.order[i])]))};
  }
  function syncLayerControls(){
    const state=layerState();
    for(const mode of layerModes){const button=$('layer-'+mode);if(button){button.disabled=!state.enabled[mode];button.title=state.reason||'在可選物件之間排列';}}
    const hint=$('layerInfo');if(hint){hint.hidden=!state.reason;hint.textContent=state.reason;}
  }
  // LAYERS_END
  M.editor = {
    html(p, presenting) {
      return (Array.isArray(p.elements) ? p.elements : []).map(e => {
        const x = clamp(e.x, 0, 1840, 120), y = clamp(e.y, 0, 1040, 200), w = clamp(e.w, 80, 1920-x, 600), h = clamp(e.h, 40, 1080-y, 100);
        const body = e.kind === 'group' ? groupHTML(e) : e.kind === 'image' ? `<img src="${imageSrc(e.src)}" alt="${esc(e.label || '新增圖片')}" style="width:100%;height:100%;object-fit:contain;object-position:${imagePosition(e.imagePosition)}">` : `<div data-layer-text="${esc(e.id)}" contenteditable="false" style="font-size:${clamp(e.size,8,180,48)}px;color:${color(e.color)};font-family:${fontFamily(e.family)||'inherit'};font-weight:${e.bold?'700':'400'};font-style:${e.italic?'italic':'normal'};text-decoration:${e.underline?'underline':'none'};line-height:1.3;white-space:pre-wrap;overflow-wrap:anywhere">${esc(e.text)}</div>`;
        return `<div class="user-layer" data-layer="${esc(e.id)}" style="position:absolute;left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:30">${presenting ? '' : '<button class="layer-delete" type="button" aria-label="刪除物件">×</button>'+grips()}${body}</div>`;
      }).join('');
    },
    decorate(root, pi) {
      const p = A.page(pi), variant = A.variant(pi), chosen = p.lineColors?.[variant] || {};
      const found = [];
      for (const el of root.querySelectorAll('path,line,polyline,rect,div,i,hr')) {
        if (el.closest('.user-layer') || (el.offsetWidth>=1728&&el.offsetHeight>=972)) continue;
        const cs = getComputedStyle(el), props = [];
        if (el.namespaceURI === 'http://www.w3.org/2000/svg') {
          if (cs.stroke !== 'none' && parseFloat(cs.strokeWidth)>0) props.push('stroke');
        } else {
          for (const side of ['Top','Right','Bottom','Left']) if (parseFloat(cs['border'+side+'Width']) > 0 && cs['border'+side+'Style'] !== 'none') props.push('border'+side+'Color');
          if (((el.offsetHeight>0 && el.offsetHeight<=12 && el.offsetWidth>=30)||(el.offsetWidth>0 && el.offsetWidth<=12 && el.offsetHeight>=30)) && cs.backgroundColor !== 'rgba(0, 0, 0, 0)') props.push('backgroundColor');
        }
        if (!props.length) continue;
        const index = found.length;const item={el,props,base:{}};for(const prop of props){item.base[prop]=el.style[prop];const width=prop==='stroke'?'strokeWidth':prop==='backgroundColor'?(el.offsetHeight<=12?'height':'width'):prop.replace('Color','Width');item.base[width]=el.style[width];}found.push(item);
        if (/^#[\da-f]{6}$/i.test(chosen[index] || '')) props.forEach(prop => el.style[prop] = chosen[index]);
        applyLineStyle(item,p.lineStyles?.[variant]?.[index]);
      }
      if (root.closest('#stage')) lines = found;
      for(const text of root.querySelectorAll('[data-clipboard-field]'))text.contentEditable='false';
      for(const el of root.querySelectorAll('[data-layer]')){const item=p.elements?.find(e=>e.id===el.dataset.layer);if(item?.kind==='group')applyGroup(el,item);}
      for(const text of root.querySelectorAll('[data-k]')){applyTextStyle(text,p.layoutStyles?.[variant]?.[stableKey(text)]);if(root.closest('#stage')&&!A.presenting())text.contentEditable='false';}
      // Use the original absolute text container: never wrap/reflow the artwork.
      for(const text of root.querySelectorAll('[data-k]')) {
        if(text.closest('[data-layout],.user-layer'))continue;
        let box=text.parentElement;
        while(box && box!==root && !box.classList.contains('slide')) {
          if(getComputedStyle(box).position==='absolute')break;
          box=box.parentElement;
        }
        if(!box || box===root || box.classList.contains('slide') || box.closest('[data-layout],.user-layer'))continue;
        if(box.querySelectorAll('[data-k]').length!==1 || box.querySelector('img,image,video,canvas') || box.namespaceURI!=='http://www.w3.org/1999/xhtml' || (box.offsetWidth>=1728 && box.offsetHeight>=972))continue;
        // Page indexes change during reordering; field keys remain stable within a variant.
        box.dataset.layout='text:'+text.dataset.k.replace(/^\d+:/,'');
      }
      for(const frame of root.querySelectorAll('[data-photo-frame]')){const img=safePhotoFrame(frame,root);if(!img)continue;frame.dataset.layout=img.dataset.photoLayout;frame.dataset.photoObject='true';img.dataset.photoObject='true';img.style.overflow='hidden';if(img.dataset.photoHidden==='true')frame.style.display='none';}
      for(const el of root.querySelectorAll('img'))if(safeNativePhoto(el,root)){el.dataset.layout=el.dataset.photoLayout;el.dataset.photoObject='true';}
      for(const el of root.querySelectorAll('[data-layout]')) {
        const pos=p.layoutPositions?.[variant]?.[el.dataset.layout];
        if(p.layoutStyles?.[variant]?.[el.dataset.layout]?.hidden){el.style.display='none';const img=frameImage(el);if(img)img.dataset.photoHidden='true';}
        if(pos && Number.isFinite(pos.x) && Number.isFinite(pos.y))applyLayout(el,pos);
        if(root.closest('#stage') && !A.presenting() && document.body.classList.contains('edit')) {
          el.querySelectorAll('[data-k]').forEach(text=>text.contentEditable='false');
          if(el.dataset.photoObject!=='true'&&!el.querySelector(':scope > .object-resize'))el.insertAdjacentHTML('beforeend',grips());
          el.classList.toggle('layout-selected',el.dataset.layout===selectedLayout);
        }
      }
      applyLayers(root,p,variant);
    }
  };
  function copiedText(){if(selectedCopiedField===null||current()?.kind!=='group')return null;const el=[...$('stage').querySelectorAll('[data-layer]')].find(n=>n.dataset.layer===selected);return el?.querySelectorAll('[data-clipboard-field="text"]')[selectedCopiedField]||null;}
  function saveGroup(e=current()){const el=[...stage.querySelectorAll('[data-layer]')].find(n=>n.dataset.layer===e?.id),root=el?.querySelector('[data-group-content]')?.firstElementChild;if(!root)return false;const old=e.tree;try{e.tree=M.clipboard.serialize(root);if(!A.save()){e.tree=old;A.message('儲存失敗，請下載編輯檔',true);return false;}return true;}catch(err){e.tree=old;A.message(err.message,true);return false;}}
  function nativeText(){return selectedField?[...$('stage').querySelectorAll('[data-k]')].find(n=>stableKey(n)===selectedField):null;}
  function nativeBox(){return selectedLayout?[...$('stage').querySelectorAll('[data-layout]')].find(n=>n.dataset.layout===selectedLayout):null;}
  function setPanel(kind){
    panelKind=kind;
    $('arrangeTools').hidden=!['text','image','group'].includes(kind)||!(current()||nativeBox()||multiKeys.size>1);
    $('pageSettings').hidden=false;$('photoSettings').hidden=false;
    $('lineTools').hidden=false;
    $('objectFields').hidden=!['text','image','group','photo'].includes(kind);
    $('noticeSettings').hidden=A.page().type!=='notice';
  }
  function fields() {
    if(selected&&!multiKeys.has('u:'+selected))multiKeys=new Set(['u:'+selected]);else if(selectedLayout&&!multiKeys.has('n:'+selectedLayout))multiKeys=new Set(['n:'+selectedLayout]);
    const live=selectedNodes();multiKeys=new Set(live.map(selectionKey));
    const e=current(),text=nativeText()||copiedText(),box=nativeBox();$('objectSelect').value=e ? selected : '';
    $('stage').querySelectorAll('[data-layout]').forEach(el=>el.classList.toggle('layout-selected',multiKeys.has(selectionKey(el))));
    $('stage').querySelectorAll('[data-layer]').forEach(el=>el.classList.toggle('selected',multiKeys.has(selectionKey(el))));
    $('stage').querySelectorAll('[data-k]').forEach(el=>el.classList.toggle('native-text-selected',stableKey(el)===selectedField));
    selectionChanged();syncLayerControls();syncPhotoControls();syncObjectCrop();A.syncPhotoTools?.();
    if(multiKeys.size>1){setPanel('group');$('selectionTitle').textContent=`已選取 ${multiKeys.size} 個物件`;for(const id of ['objectText','textLabel','textStyle','objectImageTools'])$(id).hidden=true;return;}
    if(!e&&!text&&!box){if(panelKind==='photo'){$('selectionTitle').textContent='圖片';for(const id of ['objectText','textLabel','textStyle','objectImageTools'])$(id).hidden=true;}else if(panelKind!=='line')setPanel('page');return;}
    const image=!!photoItem(e)||!!photoFrame(),isText=!!text||e?.kind==='text';setPanel(image?'image':isText?'text':'group');
    $('selectionTitle').textContent=image?'圖片':isText?'文字':'物件';
    $('objectText').hidden=!isText;$('textLabel').hidden=!isText;$('textStyle').hidden=!isText;
    // Photo actions live in the fixed image tools; object positioning uses Arrange.
    $('objectImageTools').hidden=true;
    if(!isText)return;
    const style=(e?.kind==='text'?e:null)||A.page().layoutStyles?.[A.variant()]?.[selectedField]||{},cs=text?getComputedStyle(text):{};
    $('objectText').value=(e?.kind==='text'?e.text:undefined) ?? text?.innerText ?? '';
    $('objectColor').value=rgbHex(style.color||cs.color);$('object-size').value=style.size||parseFloat(cs.fontSize)||48;$('objectFont').value=style.family||'';
    for(const [id,key,fallback] of [['objectBold','bold',parseFloat(cs.fontWeight)>=600],['objectItalic','italic',cs.fontStyle==='italic'],['objectUnderline','underline',(cs.textDecorationLine||'').includes('underline')]])$(id).setAttribute('aria-pressed',key in style?!!style[key]:fallback);
  }
  function applyLineStyle(item,style){
    if(!style)return;
    for(const prop of item.props){
      if(style.hidden)item.el.style[prop]='transparent';else if(style.color)item.el.style[prop]=color(style.color);
      if(style.width && !style.hidden){const width=prop==='stroke'?'strokeWidth':prop==='backgroundColor'?(item.el.offsetHeight<=12?'height':'width'):prop.replace('Color','Width');item.el.style[width]=clamp(style.width,.5,40,1)+'px';}
    }
  }
  function nativeStyles(){const p=A.page();p.layoutStyles ||= {};p.layoutStyles[A.variant()] ||= {};return p.layoutStyles[A.variant()];}
  function changeTextStyle(key,value){
    const copied=copiedText();if(copied){const old=copied.style.cssText;applyTextStyle(copied,{[key]:value});if(!saveGroup())copied.style.cssText=old;fields();return;}
    const e=current(),text=nativeText();if(!e&&!text)return;
    const bag=e||nativeStyles(),id=e?key:selectedField,old=bag[id],node=text||[...stage.querySelectorAll('[data-layer-text]')].find(n=>n.dataset.layerText===selected),css=node?.style.cssText;
    if(e)e[key]=value;else bag[id]={...(old||{}),[key]:value};
    if(node)applyTextStyle(node,e||bag[id]);
    if(!A.save()){if(old===undefined)delete bag[id];else bag[id]=old;if(node)node.style.cssText=css;A.message('儲存失敗，已還原這次修改',true);}fields();
  }
  function sync() {
    if (page !== A.page()) { multiKeys.clear();selected=null;selectedLayout=null;selectedField=null;editingNode=null;panelKind='page'; page=A.page(); lineChoice=''; }
    if (variant !== A.variant()) { multiKeys.clear();selectedLayout=null;selectedField=null;editingNode=null;panelKind='page';variant=A.variant(); lineChoice=''; }
    if(A.presenting()||!document.body.classList.contains('edit')){multiKeys.clear();selected=null;selectedLayout=null;selectedField=null;editingNode=null;panelKind='page';lineChoice='';}
    $('objectSelect').innerHTML='<option value="">選擇新增物件</option>'+elements().map(e=>`<option value="${esc(e.id)}">${esc(e.kind==='image' ? (e.label || '圖片') : (e.text || '文字'))}</option>`).join('');
    $('objectSelect').value=selected || ''; $('objectSelect').hidden=true;
    $('noticeSettings').hidden=A.page().type!=='notice'; $('noticeDetail').checked=A.page().noticeDetail===true;
    $('lineSelect').disabled=!lines.length;
    $('lineSelect').innerHTML=`<option value="">${lines.length?'選擇線條':'此頁沒有可編輯線條'}</option>`+lines.map((_,i)=>`<option value="${i}">線條 ${i+1}</option>`).join('');
    $('lineSelect').value=lines[+lineChoice] && lineChoice!=='' ? lineChoice : '';
    setPanel(panelKind);
    updateLineSelection();
    fields();
  }
  function updateLineSelection() {
    const id=$('lineSelect').value, chosen=id!=='' && !A.presenting() ? lines[+id] : null;
    $('lineColor').disabled=!chosen; $('lineReset').disabled=!chosen;$('lineWidth').disabled=!chosen;$('lineDelete').disabled=!chosen;
    lines.forEach(x=>{ if(x.outlineBefore!==undefined){x.el.style.outline=x.outlineBefore;delete x.outlineBefore;} });
    if(chosen){
      chosen.outlineBefore=chosen.el.style.outline;chosen.el.style.outline='3px dashed #777';
      const style=A.page().lineStyles?.[A.variant()]?.[id]||{};const prop=chosen.props[0],wp=prop==='stroke'?'strokeWidth':prop==='backgroundColor'?(chosen.el.offsetHeight<=12?'height':'width'):prop.replace('Color','Width');$('lineWidth').value=style.width||parseFloat(getComputedStyle(chosen.el)[wp])||1;
      const raw=style.color||A.page().lineColors?.[A.variant()]?.[id] || getComputedStyle(chosen.el)[chosen.props[0]];
      const rgb=raw?.match(/^rgba?\(\s*(\d+)[, ]+\s*(\d+)[, ]+\s*(\d+)/);
      $('lineColor').value=/^#[\da-f]{6}$/i.test(raw||'')?raw:rgb?'#'+rgb.slice(1,4).map(x=>(+x).toString(16).padStart(2,'0')).join(''):'#1d2124';
    }
  }
  function add(kind, text, src) {
    if (A.presenting()) $('presentTog').click();
    if(!document.body.classList.contains('edit'))$('layoutEditTog').click();
    A.clearPhotoSelection?.();
    const e={id:crypto.randomUUID(),kind,text:text || '',label:text || '圖片',x:120,y:kind==='image'?220:720,w:kind==='image'?440:680,h:kind==='image'?330:100,size:48,color:'#1d2124',...(src?{src}:{})};
    const p=A.page();p.elements=[...elements(),e];page=p;selected=e.id;selectedField=null;selectedLayout=null;
    if (!commit()) { p.elements=p.elements.filter(x=>x!==e);selected=null;return; }
    fields();
  }
  $('addText').onclick=()=>add('text','點此輸入文字');
  $('addCompany').onclick=()=>{const e=elements().find(e=>e.role==='client');if(e){selected=e.id;selectedField=null;selectedLayout=null;sync();return;} add('text','對方公司名稱');const n=current();if(n){n.role='client';commit();}};
  $('addImage').onclick=()=>{$('newImage').onchange=addImageFile;$('newImage').value='';$('newImage').click();};
  const addImageFile=async()=>{const file=$('newImage').files[0], p=A.page();if(!file)return;try{const src=await A.prepareImage(file);if(A.page()!==p)return A.message('已切換頁面，請在要放圖片的頁面重新加入');add('image','',src);}catch(e){A.message(e.message,true);}};
  $('objectSelect').onchange=()=>{multiKeys.clear();selected=$('objectSelect').value;selectedField=null;selectedLayout=null;A.clearPhotoSelection?.();fields();};
  $('objectText').oninput=()=>{
    const e=current(),text=nativeText(),copied=copiedText();if(copied){const old=copied.textContent;copied.textContent=$('objectText').value;if(!saveGroup())copied.textContent=old;return;}if(!e&&!text)return;
    if(text){text.textContent=$('objectText').value;text.dispatchEvent(new Event('input',{bubbles:true}));return;}
    e.text=$('objectText').value;const node=[...stage.querySelectorAll('[data-layer-text]')].find(el=>el.dataset.layerText===e.id);if(node)node.textContent=e.text;
    const option=[...$('objectSelect').options].find(o=>o.value===e.id);if(option)option.textContent=e.text||'文字';if(!A.save())A.message('儲存失敗，請下載編輯檔',true);
  };
  $('objectColor').oninput=()=>changeTextStyle('color',$('objectColor').value);
  $('object-size').onchange=()=>{const raw=$('object-size').value.trim(),n=Number(raw);if(!raw||!Number.isFinite(n)||n<8||n>180)return;changeTextStyle('size',n);};
  $('objectFont').onchange=()=>changeTextStyle('family',$('objectFont').value);
  for(const [id,key] of [['objectBold','bold'],['objectItalic','italic'],['objectUnderline','underline']])$(id).onclick=()=>changeTextStyle(key,$(id).getAttribute('aria-pressed')!=='true');
  function removeSelected(){
    if(!multiKeys.size&&!current()&&!selectedLayout&&!selectedField&&A.selectedPhoto?.())return A.removePhoto?.();
    if(multiKeys.size>1){
      stopTextEditing();const p=A.page(),nodes=selectedNodes(),oldElements=p.elements,oldStyles=p.layoutStyles,v=A.variant();
      const custom=new Set(nodes.filter(n=>n.dataset.layer).map(n=>n.dataset.layer));
      const styles={...(oldStyles?.[v]||{})};for(const node of nodes)if(node.dataset.layout)styles[node.dataset.layout]={...(styles[node.dataset.layout]||{}),hidden:true};
      p.elements=elements().filter(e=>!custom.has(e.id));p.layoutStyles={...(oldStyles||{}),[v]:styles};
      if(!A.save()){if(oldElements===undefined)delete p.elements;else p.elements=oldElements;if(oldStyles===undefined)delete p.layoutStyles;else p.layoutStyles=oldStyles;return A.message('刪除未儲存，已還原整批物件',true);}
      for(const node of nodes)if(node.dataset.layer)node.remove();else{node.style.display='none';if(node.dataset.photoObject==='true'){node.dataset.photoHidden='true';const img=frameImage(node);if(img)img.dataset.photoHidden='true';}}
      setMulti([]);sync();return;
    }
    if(current()){const old=elements(),id=selected;A.page().elements=old.filter(e=>e.id!==id);if(!A.save()){A.page().elements=old;return A.message('刪除未儲存，已還原',true);}stage.querySelectorAll('[data-layer]').forEach(n=>{if(n.dataset.layer===id)n.remove();});}
    else if(selectedField||selectedLayout){const p=A.page(),v=A.variant(),old=p.layoutStyles,key=selectedField||selectedLayout;p.layoutStyles={...old,[v]:{...old?.[v],[key]:{...old?.[v]?.[key],hidden:true}}};if(!A.save()){if(old===undefined)delete p.layoutStyles;else p.layoutStyles=old;return A.message('刪除未儲存，已還原',true);}const n=nativeText()||nativeBox();if(n){n.style.display='none';if(n.dataset.photoObject==='true'){n.dataset.photoHidden='true';const img=frameImage(n);if(img)img.dataset.photoHidden='true';}}}
    selectBox(null);sync();
  }
  $('deleteSelection').onclick=removeSelected;
  M.editor.remove=removeSelected;
  $('objectImageCenter').onclick=()=>{const e=current();if(!photoItem(e))return;const old={x:e.x,y:e.y};e.x=(1920-e.w)/2;e.y=(1080-e.h)/2;if(!A.save()){Object.assign(e,old);return A.message('儲存失敗',true);}const el=[...stage.querySelectorAll('[data-layer]')].find(n=>n.dataset.layer===selected);el.style.left=e.x+'px';el.style.top=e.y+'px';};
  // PHOTO_OBJECT_BEGIN — the fixed image tools use the same selected-object data.
  const photoUploads=new WeakMap();
  let objectCrop=null,objectCropDrag=null;
  function syncObjectCrop(){
    if(objectCrop&&(!current()||selected!==objectCrop||multiKeys.size>1||A.presenting()||!document.body.classList.contains('edit')))stopObjectCrop();
    for(const node of stage.querySelectorAll('[data-layer]')){
      const on=node.dataset.layer===objectCrop;node.querySelector('img')?.classList.toggle('photo-cropping',on);
      node.querySelectorAll('.object-resize').forEach(handle=>handle.style.visibility=on?'hidden':'');
    }
  }
  function finishObjectCrop(cancel=false){
    const d=objectCropDrag;if(!d)return;objectCropDrag=null;
    if(stage.hasPointerCapture?.(d.pointer))stage.releasePointerCapture(d.pointer);
    if(cancel||!d.pos||A.page()!==d.page||!elements().includes(d.e)){d.node.style.objectPosition=d.css;return;}
    if(!mutatePhoto(d.e,item=>{if(!Object.hasOwn(item,'originalImagePosition'))item.originalImagePosition=d.original;writePhoto(item,photoItem(item).src,d.pos);}))d.node.style.objectPosition=d.css;
  }
  function stopObjectCrop(){finishObjectCrop(true);objectCrop=null;}
  function mutatePhoto(e,change){
    finishObjectCrop(true);photoUploads.delete(e);const old={...e};change(e);
    if(!A.save()){for(const key of Object.keys(e))if(!(key in old))delete e[key];Object.assign(e,old);A.message('圖片未儲存，已還原這次修改',true);fields();return false;}
    const photo=photoItem(e),node=[...stage.querySelectorAll('[data-layer]')].find(n=>n.dataset.layer===e.id)?.querySelector('img');
    if(node&&photo){node.src=photo.src;node.style.objectPosition=photo.pos;}fields();return true;
  }
  function writePhoto(e,src,pos){
    if(e.kind==='image'){e.src=src;e.imagePosition=pos;}
    else{const node=photoTree(e),next={...node,attrs:{...node.attrs,src},style:{...node.style,'object-position':pos}};e.tree={...e.tree,node:e.tree.node===node?next:{...e.tree.node,children:[next]}};}
  }
  async function replaceObjectPhoto(file,e=current(),p=A.page()){
    if(!file||!photoItem(e))return false;
    const request=Symbol();photoUploads.set(e,request);
    try{const src=await A.prepareImage(file);if(photoUploads.get(e)!==request)return false;if(A.page()!==p||!elements().includes(e)){A.message('頁面已切換，請重新選取圖片');return false;}
      return mutatePhoto(e,item=>{const photo=photoItem(item);if(!Object.hasOwn(item,'originalSrc'))item.originalSrc=photo.src;writePhoto(item,src,photo.pos);});
    }catch(err){A.message(err.message,true);return false;}finally{if(photoUploads.get(e)===request)photoUploads.delete(e);}
  }
  M.editor.hasPhotos=()=>elements().some(e=>photoItem(e));
  M.editor.photoState=()=>{
    const photo=multiKeys.size<2&&photoItem();if(!photo)return null;
    return {canEdit:photo.fit==='cover',cropping:objectCrop===photo.e.id,canReset:Object.hasOwn(photo.e,'originalSrc')||Object.hasOwn(photo.e,'originalImagePosition'),canCenter:photo.fit==='cover'&&photo.pos!=='50% 50%',hint:objectCrop===photo.e.id?'拖曳調整取景；Esc 返回物件操作':photo.fit==='contain'?'完整顯示圖片，無須調整取景':'拖曳移動；雙擊或「編輯」調整取景'};
  };
  M.editor.photoAction=action=>{
    const photo=multiKeys.size<2&&photoItem();if(!photo||A.presenting()||!document.body.classList.contains('edit'))return false;
    const e=photo.e;
    if(action==='edit'){if(photo.fit==='cover'){finishObjectCrop(true);objectCrop=objectCrop===e.id?null:e.id;fields();}return true;}
    if(action==='replace'){const p=A.page();$('newImage').value='';$('newImage').onchange=()=>replaceObjectPhoto($('newImage').files[0],e,p);$('newImage').click();return true;}
    if(action==='reset'){
      if(M.editor.photoState().canReset)mutatePhoto(e,item=>{writePhoto(item,item.originalSrc??photo.src,item.originalImagePosition??photo.pos);delete item.originalSrc;delete item.originalImagePosition;});
      return true;
    }
    if(action==='center'){
      if(M.editor.photoState().canCenter)mutatePhoto(e,item=>{if(!Object.hasOwn(item,'originalImagePosition'))item.originalImagePosition=photo.pos;writePhoto(item,photo.src,'50% 50%');});
      return true;
    }
    return false;
  };
  $('objectImageReplace').onclick=()=>M.editor.photoAction('replace');
  $('objectImageCenter').title='將圖片物件置於投影片中央';
  // PHOTO_OBJECT_END
  $('noticeDetail').onchange=()=>{A.page().noticeDetail=$('noticeDetail').checked;commit();};
  function selectLine(id){multiKeys.clear();stopTextEditing();selected=null;selectedLayout=null;selectedField=null;A.clearPhotoSelection?.();lineChoice=id;$('lineSelect').value=id;setPanel(id===''?'page':'line');fields();updateLineSelection();}
  $('lineSelect').onchange=()=>selectLine($('lineSelect').value);
  function changeLine(values,reset=false){const id=lineChoice,item=lines[+id];if(id===''||!item)return;const p=A.page(),v=A.variant();p.lineStyles ||= {};p.lineStyles[v] ||= {};const old=p.lineStyles[v][id],oldColor=p.lineColors?.[v]?.[id],css=item.el.style.cssText;if(reset){delete p.lineStyles[v][id];delete p.lineColors?.[v]?.[id];Object.assign(item.el.style,item.base);}else{p.lineStyles[v][id]={...(old||{}),...values};applyLineStyle(item,p.lineStyles[v][id]);}if(!A.save()){if(old)p.lineStyles[v][id]=old;else delete p.lineStyles[v][id];if(oldColor){p.lineColors ||= {};p.lineColors[v] ||= {};p.lineColors[v][id]=oldColor;}item.el.style.cssText=css;A.message('線條修改未儲存，已還原',true);}updateLineSelection();}
  $('lineColor').oninput=()=>changeLine({color:$('lineColor').value,hidden:false});
  $('lineWidth').onchange=()=>{const raw=$('lineWidth').value.trim(),n=Number(raw);if(!raw||!Number.isFinite(n)||n<.5||n>40)return;changeLine({width:n});};
  $('lineReset').onclick=()=>changeLine({},true);
  $('lineDelete').onclick=()=>{changeLine({hidden:true});selectLine('');};
  const stage=$('stage');stage.tabIndex=0;let drag=null,guideTimer=null,guidePosition=[];
  function scale(){return stage.getBoundingClientRect().width/1920 || 1;}
  function clearGuides(){clearTimeout(guideTimer);guideTimer=null;guidePosition=[];stage.querySelectorAll('.snap-guide').forEach(el=>el.remove());}
  function drawGuides(segments){
    clearGuides();guidePosition=segments;
    if($('guideTog')?.getAttribute('aria-pressed')==='false')return;
    for(const item of segments){
      const line=document.createElement('div');line.className='snap-guide '+item.axis+(item.gap?' gap':'');
      const vertical=item.axis==='x';
      Object.assign(line.style,vertical?{left:item.value+'px',top:item.start+'px',bottom:'auto',height:(item.end-item.start)+'px'}:{top:item.value+'px',left:item.start+'px',right:'auto',width:(item.end-item.start)+'px'});
      line.setAttribute('aria-hidden','true');
      if(item.gap){
        for(const end of [false,true]){
          const cap=document.createElement('i');cap.style.cssText='position:absolute;background:inherit;'+(vertical?`width:10px;height:1px;left:-5px;${end?'bottom':'top'}:0`:`height:10px;width:1px;top:-5px;${end?'right':'left'}:0`);line.appendChild(cap);
        }
        const label=document.createElement('span');label.textContent=item.label;
        label.style.cssText='position:absolute;background:white;color:#246dcc;font:12px sans-serif;white-space:nowrap;padding:1px 3px;transform:translate(-50%,-50%) scale(calc(1 / var(--editor-scale,1)));left:50%;top:50%';line.appendChild(label);
      }
      stage.appendChild(line);
    }
  }
  function guides(x,y,box,rects){drawGuides(smartSegments(box,rects,x,y));}
  function lingerGuides(position,p,v){
    if(A.page()!==p || A.variant()!==v || A.presenting())return;
    drawGuides(position);guideTimer=setTimeout(clearGuides,600);
  }
  $('guideTog')?.addEventListener('click',()=>{if($('guideTog').getAttribute('aria-pressed')==='false')clearGuides();});
  function anchors(layer,excluded=[]){
    const xs=new Set([0,960,1920]),ys=new Set([0,540,1080]),rects=[],rect=stage.getBoundingClientRect(),k=scale();
    for(const el of stage.querySelectorAll('[data-layer],[data-layout],[data-k],img,image')){
      if(el===layer||layer.contains(el)||el.contains(layer)||excluded.some(n=>n===el||n.contains(el)||el.contains(n)))continue;
      // A grouped sticker/image is one alignment target; its inner text padding
      // must not compete with the group's outer edges.
      const group=el.closest('[data-layout],[data-layer]');
      if(group && group!==el)continue;
      const r=el.getBoundingClientRect();if(!r.width||!r.height||!el.checkVisibility())continue;
      const x=(r.left-rect.left)/k,y=(r.top-rect.top)/k,w=r.width/k,h=r.height/k;
      if(w>=1728 && h>=972)continue;
      rects.push({x,y,w,h});
      [x,x+w/2,x+w].filter(v=>v>=0&&v<=1920).forEach(v=>xs.add(v));
      [y,y+h/2,y+h].filter(v=>v>=0&&v<=1080).forEach(v=>ys.add(v));
    }
    return {xs:[...xs],ys:[...ys],rects};
  }
  const selectionKey=el=>el.dataset.layer?'u:'+el.dataset.layer:'n:'+el.dataset.layout;
  function movableNodes(){return [...stage.querySelectorAll('[data-layer],[data-layout]')].filter(el=>el.getBoundingClientRect().width>0&&el.getBoundingClientRect().height>0&&(!el.checkVisibility||el.checkVisibility()));}
  function selectedNodes(){return movableNodes().filter(el=>multiKeys.has(selectionKey(el)));}
  function nodeBox(el){const r=el.getBoundingClientRect(),s=stage.getBoundingClientRect(),k=scale();return{x:(r.left-s.left)/k,y:(r.top-s.top)/k,w:r.width/k,h:r.height/k};}
  function selectionChanged(){stage.classList.toggle('multi-selection',multiKeys.size>1);if(typeof dispatchEvent==='function')dispatchEvent(new CustomEvent('masters:selectionchange',{detail:{count:multiKeys.size,canDistribute:multiKeys.size>=3}}));}
  function setMulti(keys){
    stopObjectCrop();stopTextEditing();A.clearPhotoSelection?.();multiKeys=new Set(keys);selected=null;selectedLayout=null;selectedField=null;selectedCopiedField=null;
    const nodes=selectedNodes();if(nodes.length===1){selected=nodes[0].dataset.layer||null;selectedLayout=nodes[0].dataset.layout||null;}
    panelKind='page';lineChoice='';$('lineSelect').value='';updateLineSelection();fields();
  }
  function batchEntries(){const p=A.page(),v=A.variant();return selectedNodes().map(el=>{const id=el.dataset.layout,item=el.dataset.layer?elements().find(n=>n.id===el.dataset.layer):null;return{el,id,item,page:p,variant:v,box:nodeBox(el),css:el.style.cssText,old:item?{x:item.x,y:item.y}:p.layoutPositions?.[v]?.[id]?{...p.layoutPositions[v][id]}:null};});}
  function writeBatch(entries,positions,persist=false){
    entries.forEach((entry,i)=>{const {el,item,old,box,page,variant,id}=entry,pos=positions[i];if(item){item.x=(old?.x||0)+pos.x-box.x;item.y=(old?.y||0)+pos.y-box.y;el.style.left=item.x+'px';el.style.top=item.y+'px';}else{entry.next={...(old||{}),x:(old?.x||0)+pos.x-box.x,y:(old?.y||0)+pos.y-box.y};el.style.translate=`${entry.next.x}px ${entry.next.y}px`;if(persist){page.layoutPositions ||= {};page.layoutPositions[variant] ||= {};page.layoutPositions[variant][id]=entry.next;}}});
  }
  function rollbackBatch(entries){for(const e of entries){if(e.item)Object.assign(e.item,e.old);else if(e.page.layoutPositions?.[e.variant]){if(e.old)e.page.layoutPositions[e.variant][e.id]=e.old;else delete e.page.layoutPositions[e.variant][e.id];}e.el.style.cssText=e.css;}}
  function commitBatch(entries,positions){const p=A.page(),old=p.layoutPositions;
    if(entries.some(e=>!e.item))p.layoutPositions=Object.fromEntries(Object.entries(old||{}).map(([v,bag])=>[v,{...bag}]));
    writeBatch(entries,positions,true);if(!A.save()){rollbackBatch(entries);if(old===undefined)delete p.layoutPositions;else p.layoutPositions=old;A.message('儲存失敗，已還原排列',true);return false;}return true;}
  M.editor.framePhoto=()=>frameImage(photoFrame());
  M.editor.selectPhotoFrame=el=>{const box=el?.closest('[data-layout]');if(box?.dataset.photoObject==='true'){selectBox(box);return true;}return false;};
  M.editor.selection=()=>selectedNodes().map(el=>({key:selectionKey(el),...nodeBox(el)}));
  M.editor.layerOrder=()=>layerModel(stage.querySelector?.('.slide'),A.page(),A.variant()).order;
  M.editor.clearSelection=()=>setMulti([]);
  M.editor.align=mode=>{if(A.presenting()||!document.body.classList.contains('edit')||!['left','center','right','top','middle','bottom'].includes(mode))return;stopTextEditing();const entries=batchEntries(),positions=arrangeBoxes(entries.map(e=>e.box),mode);if(!positions)return A.message('先選取至少兩個物件');commitBatch(entries,positions);fields();};
  M.editor.distribute=axis=>{if(A.presenting()||!document.body.classList.contains('edit')||!['horizontal','vertical'].includes(axis))return;stopTextEditing();const entries=batchEntries(),positions=distributeBoxes(entries.map(e=>e.box),axis);if(!positions)return A.message(entries.length<3?'等距排列需要至少三個物件':'目前範圍不足以排列，請先拉開最外側物件');commitBatch(entries,positions);fields();};
  M.editor.layer=mode=>{
    if(A.presenting()||!document.body.classList.contains('edit')||!layerModes.includes(mode))return false;
    const state=layerState();if(!state.enabled[mode]){if(state.reason)A.message(state.reason);return false;}
    stopTextEditing();const p=A.page(),v=A.variant(),old=p.layerOrder;
    p.layerOrder={...old,[v]:reorderLayers(state.order,state.keys,mode)};
    if(!A.save()){if(old===undefined)delete p.layerOrder;else p.layerOrder=old;A.message('儲存失敗，已還原圖層順序',true);return false;}
    applyLayers(state.root,p,v);fields();return true;
  };
  function finishMulti(cancel=false){const d=multiDrag;if(!d)return;multiDrag=null;if(stage.hasPointerCapture?.(d.pointer))stage.releasePointerCapture(d.pointer);const feedback=[...guidePosition];clearGuides();if(cancel||!d.moved){rollbackBatch(d.entries);if(cancel&&d.entries.some(e=>e.item))A.save();return;}if(commitBatch(d.entries,d.positions))lingerGuides(feedback,d.page,d.variant);}
  function finishMarquee(cancel=false){const d=marquee;if(!d)return;marquee=null;d.node?.remove();if(stage.hasPointerCapture?.(d.pointer))stage.releasePointerCapture(d.pointer);if(cancel)setMulti(d.before);}
  function selectBox(el,text=null){
    stopObjectCrop();
    multiKeys=new Set(el?[selectionKey(el)]:[]);
    A.clearPhotoSelection?.();lineChoice='';$('lineSelect').value='';updateLineSelection();selectedField=text?.dataset.k?stableKey(text):null;selectedCopiedField=text?.dataset.clipboardField?[...el.querySelectorAll('[data-clipboard-field="text"]')].indexOf(text):null;panelKind='page';
    selected=el?.dataset.layer || null;selectedLayout=el?.dataset.layout || null;
    stage.querySelectorAll('[data-layout]').forEach(n=>n.classList.toggle('layout-selected',n===el));
    fields();
  }
  function stopTextEditing(){
    if(!editingNode)return;const text=editingNode;editingNode=null;text.contentEditable='false';text.classList.remove('text-editing');text.blur();
  }
  function paintDrag(d,box){
    if(d.layout){
      d.pos={...(d.saved||{}),x:d.before.x+box.x-d.box.x,y:d.before.y+box.y-d.box.y,sx:d.before.sx,sy:d.before.sy};
      if(d.corner){d.pos.w=/[ew]/.test(d.corner)?box.w/d.before.sx:d.before.w;d.pos.h=/[ns]/.test(d.corner)?box.h/d.before.sy:d.before.h;}
      applyLayout(d.el,d.pos);
    }else{
      Object.assign(d.o,box);
      if(d.o.kind==='group'){if(!d.corner||!/[ew]/.test(d.corner))d.o.w=d.before.w;if(!d.corner||!/[ns]/.test(d.corner))d.o.h=d.before.h;}
      for(const key of ['x','y','w','h'])d.el.style[{x:'left',y:'top',w:'width',h:'height'}[key]]=d.o[key]+'px';
      if(d.o.kind==='group')applyGroup(d.el,d.o);
    }
  }
  function restoreDrag(d){if(d.layout){for(const [node,css] of d.styles)node.style.cssText=css;}else{Object.assign(d.o,d.before);for(const key of ['x','y','w','h'])d.el.style[{x:'left',y:'top',w:'width',h:'height'}[key]]=d.o[key]+'px';if(d.o.kind==='group')applyGroup(d.el,d.o);}}
  function finish(cancel=false){
    const d=drag;if(!d)return;drag=null;const feedback=[...guidePosition];
    if(stage.hasPointerCapture?.(d.pointer))stage.releasePointerCapture(d.pointer);
    clearGuides();
    if(cancel || !d.moved){restoreDrag(d);syncPhotoControls();if(cancel&&!d.layout)A.save();return;}
    const oldPositions=d.page.layoutPositions;
    if(d.layout)d.page.layoutPositions={...oldPositions,[d.variant]:{...oldPositions?.[d.variant],[d.key]:d.pos}};
    // No render on pointerup: retain focus, existing DOM and animation state.
    if(!A.save()){
      if(d.layout){if(oldPositions===undefined)delete d.page.layoutPositions;else d.page.layoutPositions=oldPositions;}
      restoreDrag(d);syncPhotoControls();A.message('儲存失敗，已還原這次移動；請下載編輯檔',true);return;
    }
    syncPhotoControls();lingerGuides(feedback,d.page,d.variant);
  }
  stage.addEventListener('pointerdown',e=>{
    if(A.presenting() || !document.body.classList.contains('edit') || e.button!==0)return;
    const handle=e.target.closest('[data-photo-controls]');
    const el=handle?[...stage.querySelectorAll('[data-layout]')].find(n=>n.dataset.layout===handle.dataset.photoControls):e.target.closest('[data-layer],[data-layout]'),text=e.target.closest('[data-k],[data-clipboard-field]');
    if(el?.dataset.layer===objectCrop&&!e.shiftKey&&!e.target.closest('button')){
      const photo=photoItem(),node=el.querySelector('img');if(photo&&node){e.preventDefault();e.stopImmediatePropagation();const pos=photo.pos.split(/\s+/).map(parseFloat);objectCropDrag={node,e:photo.e,page:A.page(),pointer:e.pointerId,x:e.clientX,y:e.clientY,px:pos[0],py:pos[1],original:photo.pos,css:node.style.objectPosition};return;}
    }
    if(el?.dataset.photoObject==='true'&&A.isCropping?.(frameImage(el))&&!handle&&!e.shiftKey)return;
    if(el&&e.shiftKey&&!e.target.isContentEditable){e.preventDefault();e.stopImmediatePropagation();const key=selectionKey(el),next=new Set(multiKeys);if(next.has(key))next.delete(key);else next.add(key);setMulti(next);return;}
    if(el&&multiKeys.size>1&&multiKeys.has(selectionKey(el))&&!e.target.isContentEditable){
      e.preventDefault();e.stopImmediatePropagation();stage.focus({preventScroll:true});const entries=batchEntries(),nodes=entries.map(d=>d.el);multiDrag={entries,page:A.page(),variant:A.variant(),box:boundsOf(entries.map(d=>d.box)),cx:e.clientX,cy:e.clientY,pointer:e.pointerId,moved:false,...anchors(el,nodes)};return;
    }
    if(!el){
      if(text){if(editingNode===text)return;stopTextEditing();selectBox(null,text);e.preventDefault();e.stopImmediatePropagation();return;}
      const i=lines.findIndex(item=>{if(item.el!==e.target)return false;const r=item.el.getBoundingClientRect();return item.el.namespaceURI==='http://www.w3.org/2000/svg'||r.width<16||r.height<16||Math.min(Math.abs(e.clientX-r.left),Math.abs(e.clientX-r.right),Math.abs(e.clientY-r.top),Math.abs(e.clientY-r.bottom))<8;});
      if(i>=0){e.preventDefault();e.stopImmediatePropagation();selectLine(String(i));return;}
      if(e.target.closest('img,image,video,audio,button,a,input,textarea,select')){selectBox(null);return;}
      const before=[...multiKeys];stopTextEditing();if(!e.shiftKey)selectBox(null);
      marquee={cx:e.clientX,cy:e.clientY,pointer:e.pointerId,before,append:e.shiftKey,moved:false};e.preventDefault();e.stopImmediatePropagation();stage.focus({preventScroll:true});return;
    }
    if(editingNode && editingNode.contains(e.target))return;
    if(e.target.closest('input,textarea,select,a,video,audio'))return;
    const resizeField=e.target.closest('[data-corner]')&&selectedLayout===el.dataset.layout?nativeText():null;
    stopTextEditing();selectBox(el,text||resizeField);
    if(e.target.closest('.layer-delete')){e.preventDefault();e.stopImmediatePropagation();removeSelected();return;}
    const corner=e.target.closest('[data-corner]')?.dataset.corner;
    e.preventDefault();e.stopImmediatePropagation();stage.focus({preventScroll:true});clearGuides();
    const layout=!!el.dataset.layout,r=el.getBoundingClientRect(),sr=stage.getBoundingClientRect(),k=scale();
    const o=layout?null:current(),saved=layout?A.page().layoutPositions?.[A.variant()]?.[el.dataset.layout]:null;
    const box=(layout||o?.kind==='group')?{x:(r.left-sr.left)/k,y:(r.top-sr.top)/k,w:r.width/k,h:r.height/k}:{x:o.x,y:o.y,w:o.w,h:o.h};
    drag={el,layout,o,page:A.page(),variant:A.variant(),key:el.dataset.layout,saved:saved?{...saved}:null,
      before:layout?{x:saved?.x||0,y:saved?.y||0,sx:saved?.sx||1,sy:saved?.sy||1,w:saved?.w??box.w/(saved?.sx||1),h:saved?.h??box.h/(saved?.sy||1)}:{x:o.x,y:o.y,w:o.w,h:o.h},box,
      styles:layout?[el,...el.querySelectorAll('*')].map(node=>[node,node.style.cssText]):null,
      cx:e.clientX,cy:e.clientY,pointer:e.pointerId,corner,moved:false,...anchors(el)};
  },true);
  addEventListener('pointermove',e=>{
    if(objectCropDrag?.pointer===e.pointerId){
      const d=objectCropDrag,dx=e.clientX-d.x,dy=e.clientY-d.y;if(Math.hypot(dx,dy)<5&&!d.pos)return;
      const r=d.node.getBoundingClientRect(),nw=d.node.naturalWidth,nh=d.node.naturalHeight;if(!nw||!nh)return;
      const cover=Math.max(r.width/nw,r.height/nh),ox=nw*cover-r.width,oy=nh*cover-r.height;
      d.pos=(ox>1?clamp(d.px-dx/ox*100,0,100,d.px):d.px).toFixed(1)+'% '+(oy>1?clamp(d.py-dy/oy*100,0,100,d.py):d.py).toFixed(1)+'%';d.node.style.objectPosition=d.pos;stage.setPointerCapture?.(d.pointer);return;
    }
    if(marquee&&e.pointerId===marquee.pointer){
      const d=marquee;if(!d.moved&&Math.hypot(e.clientX-d.cx,e.clientY-d.cy)<3)return;
      if(!d.moved){d.moved=true;stage.setPointerCapture?.(e.pointerId);d.node=document.createElement('div');d.node.className='selection-marquee';d.node.style.cssText='position:absolute;pointer-events:none;z-index:2000;border:calc(1px / var(--editor-scale,1)) solid #3678bc;background:#3678bc12';stage.appendChild(d.node);}
      const sr=stage.getBoundingClientRect(),k=scale(),x=(Math.min(d.cx,e.clientX)-sr.left)/k,y=(Math.min(d.cy,e.clientY)-sr.top)/k,w=Math.abs(e.clientX-d.cx)/k,h=Math.abs(e.clientY-d.cy)/k;
      Object.assign(d.node.style,{left:x+'px',top:y+'px',width:w+'px',height:h+'px'});const hits=movableNodes().filter(el=>{const b=nodeBox(el);return b.x>=x-.5&&b.y>=y-.5&&b.x+b.w<=x+w+.5&&b.y+b.h<=y+h+.5;}).map(selectionKey);setMulti(d.append?[...d.before,...hits]:hits);return;
    }
    if(multiDrag&&e.pointerId===multiDrag.pointer){
      const d=multiDrag;if(!d.moved&&Math.hypot(e.clientX-d.cx,e.clientY-d.cy)<3)return;if(!d.moved){d.moved=true;stage.setPointerCapture?.(e.pointerId);}const k=scale(),b=d.box;let x=clamp(b.x+(e.clientX-d.cx)/k,0,1920-b.w,b.x),y=clamp(b.y+(e.clientY-d.cy)/k,0,1080-b.h,b.y),gx=null,gy=null;
      if($('snapTog').checked&&!e.altKey){const snap=snapMove({x,y,w:b.w,h:b.h},d.rects,d.xs,d.ys,7/k);x=clamp(snap.box.x,0,1920-b.w,x);y=clamp(snap.box.y,0,1080-b.h,y);gx=x===snap.box.x?snap.gx:null;gy=y===snap.box.y?snap.gy:null;}
      d.positions=d.entries.map(entry=>({...entry.box,x:entry.box.x+x-b.x,y:entry.box.y+y-b.y}));writeBatch(d.entries,d.positions);syncPhotoControls();guides(gx,gy,{x,y,w:b.w,h:b.h},d.rects);return;
    }
  });
  addEventListener('pointermove',e=>{
    const d=drag;if(!d||e.pointerId!==d.pointer)return;
    if(!d.moved && Math.hypot(e.clientX-d.cx,e.clientY-d.cy)<3)return;
    if(!d.moved){d.moved=true;stage.setPointerCapture?.(e.pointerId);}
    const k=scale(),dx=(e.clientX-d.cx)/k,dy=(e.clientY-d.cy)/k,b=d.box;
    const snap=$('snapTog').checked&&!e.altKey,threshold=7/k;let gx=null,gy=null,box;
    if(!d.corner){
      let x=clamp(b.x+dx,0,1920-b.w,0),y=clamp(b.y+dy,0,1080-b.h,0);
      if(snap){const aligned=snapMove({x,y,w:b.w,h:b.h},d.rects,d.xs,d.ys,threshold);x=clamp(aligned.box.x,0,1920-b.w,x);y=clamp(aligned.box.y,0,1080-b.h,y);gx=x===aligned.box.x?aligned.gx:null;gy=y===aligned.box.y?aligned.gy:null;}
      box={x,y,w:b.w,h:b.h};
    }else{
      const west=d.corner.includes('w'),north=d.corner.includes('n'),horizontal=/[ew]/.test(d.corner),vertical=/[ns]/.test(d.corner),fx=west?b.x+b.w:b.x,fy=north?b.y+b.h:b.y;
      let ex=west?b.x+dx:b.x+b.w+dx,ey=north?b.y+dy:b.y+b.h+dy;
      if(snap){if(horizontal){const sx=snapAxis(ex,[0],d.xs,threshold);ex=sx.value;gx=sx.guide;}if(vertical){const sy=snapAxis(ey,[0],d.ys,threshold);ey=sy.value;gy=sy.guide;}}
      let w=horizontal?clamp(west?fx-ex:ex-fx,d.layout?40:80,west?fx:1920-fx,b.w):b.w,h=vertical?clamp(north?fy-ey:ey-fy,d.layout?24:40,north?fy:1080-fy,b.h):b.h;
      if(horizontal&&vertical&&!d.layout&&(d.o.kind==='image'||d.o.groupImage)&&e.shiftKey){const factor=Math.max(w/b.w,h/b.h),max=Math.min((west?fx:1920-fx)/b.w,(north?fy:1080-fy)/b.h);w=b.w*Math.min(factor,max);h=b.h*w/b.w;}
      let x=west?fx-w:fx,y=north?fy-h:fy;
      if(!horizontal||Math.abs((west?x:x+w)-ex)>.1)gx=null;if(!vertical||Math.abs((north?y:y+h)-ey)>.1)gy=null;
      box={x,y,w,h};
    }
    paintDrag(d,box);syncPhotoControls();guides(gx,gy,box,d.rects);
  });
  addEventListener('pointerup',e=>{if(objectCropDrag?.pointer===e.pointerId)finishObjectCrop();if(drag?.pointer===e.pointerId)finish();if(multiDrag?.pointer===e.pointerId)finishMulti();if(marquee?.pointer===e.pointerId)finishMarquee();});
  addEventListener('pointercancel',e=>{if(objectCropDrag?.pointer===e.pointerId)finishObjectCrop(true);if(drag?.pointer===e.pointerId)finish(true);if(multiDrag?.pointer===e.pointerId)finishMulti(true);if(marquee?.pointer===e.pointerId)finishMarquee(true);});
  stage.addEventListener('dblclick',e=>{
    const text=e.target.closest('[data-k],[data-layer-text],[data-clipboard-field]');
    if(A.presenting()||!document.body.classList.contains('edit'))return;
    const native=frameImage(e.target.closest('[data-photo-object]'));if(native){e.preventDefault();e.stopImmediatePropagation();finish(true);A.editPhoto?.(native);return;}
    if(!text){const layer=e.target.closest('[data-layer]'),item=elements().find(e=>e.id===layer?.dataset.layer);if(photoItem(item)){e.preventDefault();e.stopImmediatePropagation();selectBox(layer);M.editor.photoAction(photoItem(item).fit==='cover'?'edit':'replace');}return;}
    e.preventDefault();e.stopImmediatePropagation();finish(true);stopTextEditing();
    selectBox(text.closest('[data-layout],[data-layer]'),text.matches('[data-k],[data-clipboard-field]')?text:null);editingNode=text;text.contentEditable='true';text.classList.add('text-editing');text.focus({preventScroll:true});
    const selection=getSelection();const hit=document.caretPositionFromPoint?.(e.clientX,e.clientY);
    if(hit&&text.contains(hit.offsetNode)){const range=document.createRange();range.setStart(hit.offsetNode,hit.offset);range.collapse(true);selection.removeAllRanges();selection.addRange(range);}
  },true);
  stage.addEventListener('focusout',e=>{if(e.target===editingNode){editingNode=null;e.target.contentEditable='false';e.target.classList.remove('text-editing');}});
  let clipboardEntry=null,pasteCount=0;
  const CLIP='VENTURO-MASTERS-OBJECT-V1\n';
  function nativeCopy(element){
    const sr=stage.getBoundingClientRect(),r=element.getBoundingClientRect(),k=scale(),tree=M.clipboard.serialize(element,{strict:true}),sc=(getComputedStyle(element).scale||'none').split(/\s+/).map(Number);
    const framed=['single','screen'].includes(element.dataset.photoFrame)&&element.dataset.photoObject==='true';
    if(framed){const img=tree.node.children.find(n=>n?.tag==='img');tree.node.children=[img];Object.assign(img.style,{width:'100%',height:'100%',overflow:'hidden'});}
    return {kind:'group',label:element.querySelector?.('[data-k]')?.innerText||'物件',tree,x:(r.left-sr.left)/k,y:(r.top-sr.top)/k,w:r.width/k,h:r.height/k,baseW:r.width/k,baseH:r.height/k,groupScaleX:sc[0]||1,groupScaleY:sc[1]||sc[0]||1,groupImage:framed||element.matches('img,image')};
  }
  function copyEntry(){
    if(multiKeys.size>1){const order=M.editor.layerOrder?.()||[];const key=node=>node.dataset.layer?'u:'+node.dataset.layer:'n:'+node.dataset.layout;const items=selectedNodes().sort((a,b)=>order.indexOf(key(a))-order.indexOf(key(b))).map(node=>{const item=node.dataset.layer?elements().find(e=>e.id===node.dataset.layer):null;return item?JSON.parse(JSON.stringify(item)):nativeCopy(node);});return items.length?{kind:'collection',items}:null;}
    const item=current();if(item)return JSON.parse(JSON.stringify(item));
    const element=nativeBox()||nativeText()||A.selectedPhoto?.();return element?nativeCopy(element):null;
  }
  function pasteEntry(raw,p=A.page()){
    if(A.page()!==p)return A.message('頁面已切換，請重新貼上');
    const input=raw?.kind==='collection'?raw.items:[raw];
    if(!Array.isArray(input)||!input.length||input.length>100)throw Error('一次可貼上 1 至 100 個物件');
    // Validate every item before changing the document. Never partially paste a batch.
    const added=input.map(raw=>{
      if(!raw||!['text','image','group'].includes(raw.kind))throw Error('不是可貼上的投影片物件');
      const e=JSON.parse(JSON.stringify(raw));
      if(e.kind==='group'){M.clipboard.html(e.tree);e.baseW=clamp(e.baseW,1,10000,e.tree.width);e.baseH=clamp(e.baseH,1,10000,e.tree.height);e.groupScaleX=clamp(e.groupScaleX,.05,20,e.baseW/e.tree.width);e.groupScaleY=clamp(e.groupScaleY,.05,20,e.baseH/e.tree.height);}
      if(e.kind==='image'&&!imageSrc(e.src))throw Error('這張圖片無法貼上');
      if(e.kind==='text' && typeof e.text!=='string')throw Error('文字物件內容不完整');
      e.id=crypto.randomUUID();e.w=clamp(e.w,1,1920,680);e.h=clamp(e.h,1,1080,100);e.x=Number.isFinite(+e.x)?+e.x:120;e.y=Number.isFinite(+e.y)?+e.y:120;delete e.role;return e;
    });
    const box=boundsOf(added),offset=24*(pasteCount+1),dx=box.w<=1920?clamp(box.x+offset,0,1920-box.w,0)-box.x:offset,dy=box.h<=1080?clamp(box.y+offset,0,1080-box.h,0)-box.y:offset;
    for(const e of added){e.x+=dx;e.y+=dy;}
    const old=p.elements;p.elements=[...elements(),...added];
    if(!commit()){if(old===undefined)delete p.elements;else p.elements=old;A.message('貼上未儲存，已還原整批物件',true);return;}
    pasteCount++;if(added.length===1){selected=added[0].id;selectedField=null;selectedLayout=null;selectedCopiedField=null;multiKeys=new Set(['u:'+selected]);}else setMulti(added.map(e=>'u:'+e.id));fields();return added;
  }
  function clipboardTextEntry(text){
    if(text.startsWith(CLIP)){if(text.length>8000000)throw Error('剪貼物件太大');return JSON.parse(text.slice(CLIP.length));}
    return text.trim()?{kind:'text',text:text.slice(0,20000),x:120,y:120,w:680,h:160,size:48,color:'#1d2124'}:null;
  }
  async function pasteClipboard(){
    const p=A.page();
    // Toolbar paste is immediate for our own copied object: no permission prompt.
    if(clipboardEntry){pasteEntry(clipboardEntry,p);return;}
    let timer;
    try{
      const text=await Promise.race([navigator.clipboard.readText(),new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('請按 Ctrl／⌘＋V 貼上外部內容')),1200);})]);
      const item=clipboardTextEntry(text);if(item)pasteEntry(item,p);else A.message('剪貼簿沒有可貼上的內容');
    }catch(err){A.message('請按 Ctrl／⌘＋V 貼上，或先複製投影片中的物件',true);}
    finally{clearTimeout(timer);}
  }
  addEventListener('paste',e=>{
    if(e.target.isContentEditable||e.target.closest('input,textarea,select')||A.presenting()||!document.body.classList.contains('edit'))return;
    try{const text=e.clipboardData?.getData('text/plain')||'',item=clipboardTextEntry(text)||clipboardEntry;if(!item)return;e.preventDefault();e.stopImmediatePropagation();pasteEntry(item);}catch(err){e.preventDefault();A.message(err.message,true);}
  },true);
  function copySelection(){const entry=copyEntry();if(!entry){A.message('先選一個物件');return;}clipboardEntry=entry;pasteCount=0;A.message('已複製');const write=navigator.clipboard?.writeText(CLIP+JSON.stringify(entry));write?.catch(()=>A.message('已複製，可在投影片內貼上'));return entry;}
  M.editor.copy=()=>{try{return copySelection();}catch(err){A.message(err.message,true);}};
  M.editor.paste=()=>pasteClipboard().catch(err=>A.message(err.message,true));
  M.editor.duplicate=()=>{try{const entry=copyEntry();if(!entry)return A.message('先選一個物件');pasteCount=0;pasteEntry(entry);}catch(err){A.message(err.message,true);}};
  function nudge(key,amount){
    if(multiKeys.size>1){const entries=batchEntries(),b=boundsOf(entries.map(e=>e.box)),dx=key==='ArrowLeft'?-amount:key==='ArrowRight'?amount:0,dy=key==='ArrowUp'?-amount:key==='ArrowDown'?amount:0,x=clamp(b.x+dx,0,1920-b.w,b.x),y=clamp(b.y+dy,0,1080-b.h,b.y);commitBatch(entries,entries.map(e=>({...e.box,x:e.box.x+x-b.x,y:e.box.y+y-b.y})));return true;}
    const e=current(),el=e?[...stage.querySelectorAll('[data-layer]')].find(n=>n.dataset.layer===selected):nativeBox();if(!el)return false;
    const dx=key==='ArrowLeft'?-amount:key==='ArrowRight'?amount:0,dy=key==='ArrowUp'?-amount:key==='ArrowDown'?amount:0;
    if(e){const old={x:e.x,y:e.y};e.x=clamp(e.x+dx,0,1920-e.w,e.x);e.y=clamp(e.y+dy,0,1080-e.h,e.y);if(!A.save()){Object.assign(e,old);A.message('儲存失敗，已還原移動',true);return true;}el.style.left=e.x+'px';el.style.top=e.y+'px';}
    else{const p=A.page(),v=A.variant(),id=selectedLayout,oldPositions=p.layoutPositions,old=oldPositions?.[v]?.[id],r=el.getBoundingClientRect(),sr=stage.getBoundingClientRect(),k=scale(),x=(r.left-sr.left)/k,y=(r.top-sr.top)/k;const next={...(old||{}),x:(old?.x||0)+clamp(x+dx,0,1920-r.width/k,x)-x,y:(old?.y||0)+clamp(y+dy,0,1080-r.height/k,y)-y};p.layoutPositions={...oldPositions,[v]:{...oldPositions?.[v],[id]:next}};if(!A.save()){if(oldPositions===undefined)delete p.layoutPositions;else p.layoutPositions=oldPositions;A.message('儲存失敗，已還原移動',true);return true;}applyLayout(el,next);}
    syncPhotoControls();return true;
  }
  M.editor.center=axis=>{
    if(A.presenting()||!document.body.classList.contains('edit'))return;
    const e=current(),el=e?[...stage.querySelectorAll('[data-layer]')].find(n=>n.dataset.layer===selected):nativeBox();
    if(!el)return A.message('先選一個可移動物件');
    stopTextEditing();const r=el.getBoundingClientRect(),sr=stage.getBoundingClientRect(),k=scale();
    if(axis==='horizontal')nudge('ArrowRight',(1920-r.width/k)/2-(r.left-sr.left)/k);
    if(axis==='vertical')nudge('ArrowDown',(1080-r.height/k)/2-(r.top-sr.top)/k);
    clearGuides();fields();
  };
  $('alignHorizontal').onclick=()=>M.editor.center('horizontal');
  $('alignVertical').onclick=()=>M.editor.center('vertical');
  addEventListener('keydown',e=>{
    if(e.key==='Escape'&&objectCrop){e.preventDefault();e.stopImmediatePropagation();stopObjectCrop();fields();return;}
    if(e.key==='Escape'&&(multiDrag||marquee)){e.preventDefault();e.stopImmediatePropagation();finishMulti(true);finishMarquee(true);return;}
    if(e.key==='Escape'&&drag){e.preventDefault();e.stopImmediatePropagation();finish(true);return;}
    if(e.key==='Escape'&&editingNode){e.preventDefault();stopTextEditing();stage.focus({preventScroll:true});return;}
    if(e.target.isContentEditable||e.target.closest('input,textarea,select')||A.presenting())return;
    if(!document.body.classList.contains('edit'))return;
    if(e.key==='Escape'&&multiKeys.size){e.preventDefault();e.stopImmediatePropagation();setMulti([]);return;}
    if((e.ctrlKey||e.metaKey)&&['c','v','d'].includes(e.key.toLowerCase())){
      const key=e.key.toLowerCase();if(key==='v')return;e.preventDefault();e.stopImmediatePropagation();try{if(key==='c'){const entry=copySelection();if(!entry)return;e.preventDefault();e.stopImmediatePropagation();}else{const entry=copyEntry();if(!entry)return;e.preventDefault();e.stopImmediatePropagation();pasteCount=0;pasteEntry(entry);}}catch(err){A.message(err.message,true);}return;
    }
    if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)&&nudge(e.key,e.shiftKey?10:1)){e.preventDefault();e.stopImmediatePropagation();return;}
    if(e.key==='Delete'&&(multiKeys.size>1||current()||selectedField||selectedLayout||A.selectedPhoto?.())){e.preventDefault();removeSelected();}
  },true);
  addEventListener('masters:page',()=>{stopObjectCrop();finish(true);finishMulti(true);finishMarquee(true);editingNode=null;clearGuides();stage.style.setProperty('--editor-scale',scale());});
  addEventListener('resize',()=>{stage.style.setProperty('--editor-scale',scale());syncPhotoControls();});
  addEventListener('blur',()=>{finishObjectCrop(true);finish(true);finishMulti(true);finishMarquee(true);});
  stage.addEventListener('lostpointercapture',e=>{if(objectCropDrag?.pointer===e.pointerId)finishObjectCrop(true);if(drag?.pointer===e.pointerId)finish(true);if(multiDrag?.pointer===e.pointerId)finishMulti(true);if(marquee?.pointer===e.pointerId)finishMarquee(true);});
  stage.addEventListener('input',e=>{if(e.target.dataset.clipboardField){saveGroup();$('objectText').value=e.target.innerText;}if(e.target.dataset.k&&stableKey(e.target)===selectedField)$('objectText').value=e.target.innerText;if(e.target.dataset.layerText){const o=elements().find(x=>x.id===e.target.dataset.layerText);if(o){o.text=e.target.innerText;if(o.id===selected)$('objectText').value=o.text;if(!A.save())A.message('儲存失敗，請下載編輯檔',true);}}});
  stage.addEventListener('focusout',e=>{if(e.target.dataset.layerText)sync();});
  addEventListener('masters:selection',e=>{if(e.detail?.kind==='photo'){multiKeys.clear();stopTextEditing();selected=null;selectedLayout=null;selectedField=null;setPanel('photo');fields();}else if(!selected&&!selectedLayout&&!selectedField&&panelKind==='photo')setPanel('page');});
  addEventListener('masters:page',sync);
})();
