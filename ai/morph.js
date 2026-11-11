/* Object morph: measured DOM, live glyphs and uniformly scaled photographs. No snapshots or frame loop. */
(function (host) {
  'use strict'
  const EASING = 'cubic-bezier(.65,0,.35,1)'
  const corners = ['borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius']
  const segment = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined,{granularity:'grapheme'}) : null
  const graphemes = text => segment ? [...segment.segment(text)].map(s=>({text:s.segment,index:s.index})) : Array.from(text).map((text,i,a)=>({text,index:a.slice(0,i).join('').length}))
  const distance = (a,b) => (a.x+a.w/2-b.x-b.w/2)**2+(a.y+a.h/2-b.y-b.h/2)**2
  function arc(a,b) {
    const dx=b.x+b.w/2-a.x-a.w/2,dy=b.y+b.h/2-a.y-a.h/2,d=Math.hypot(dx,dy)
    if(!d)return {x:0,y:0}
    const height=Math.min(180,d*.18)*Math.min(1,d/600)
    return {x:dy/d*(dx<0?-1:1)*height,y:-Math.abs(dx)/d*height}
  }
  const transparent = c => !c || c==='transparent' || /rgba\([^)]*,\s*0\)$/.test(c)
  // Repeated numeric values are not evidence of identity (chapter 03 is not stop 03).
  const numericText = text => /^[\p{N}\s.:：/\-–—+%％]+$/u.test(text)
  const compatibleIndex=(a,b)=>{const x=a.id?.match(/^(.*)#(\d+)$/),y=b.id?.match(/^(.*)#(\d+)$/);return !(x&&y&&x[1]===y[1]&&x[2]!==y[2])}
  const sameTextObject = (a,b) => (!!a.id&&a.id===b.id)||!!(a.text&&b.text&&!numericText(a.text)&&!numericText(b.text)&&(a.text.includes(b.text)||b.text.includes(a.text)))
  function textUnits(chars) {
    // A date/clock/ordinal is one matching unit, including legacy split-span clocks.
    const text=chars.map(c=>(c.leading||'')+c.text).join(''),numbers=[...text.matchAll(/\p{N}+(?:[.:：/\-–—]\p{N}+)*(?:[%％])?/gu)],units=[]
    let offset=0
    for(const c of chars){
      offset+=(c.leading||'').length
      const number=numbers.find(n=>offset>=n.index&&offset<n.index+n[0].length)
      if(number&&units.at(-1)?.number===number)units.at(-1).chars.push(c)
      else units.push({kind:'word',id:'',text:number?number[0]:c.text,x:c.x,y:c.y,w:c.w,h:c.h,number,chars:[c]})
      offset+=c.text.length
    }
    return units
  }
  function pairs(from,to,level=2) {
    const left=new Set(from),right=new Set(to),matched=[]
    const pass=predicate=>{
      for(const b of [...right]){
        const a=[...left].filter(a=>a.kind===b.kind&&compatibleIndex(a,b)&&predicate(a,b)).sort((a,c)=>distance(a,b)-distance(c,b))[0]
        if(a){left.delete(a);right.delete(b);matched.push([a,b])}
      }
    }
    pass((a,b)=>!!a.id&&a.id===b.id)
    if(level>=1)pass((a,b)=>!!a.text&&a.text===b.text)
    if(level>=2)pass((a,b)=>!!a.role&&a.role===b.role)
    return {matched,out:[...left],incoming:[...right]}
  }
  function capture(root,page,meta,stage) {
    const sr=stage.getBoundingClientRect(),zoom=sr.width/1920,objects=[],groups=[],cache=new Map()
    const style=el=>{if(!cache.has(el))cache.set(el,getComputedStyle(el));return cache.get(el)}
    const box=r=>({x:(r.left-sr.left)/zoom,y:(r.top-sr.top)/zoom,w:r.width/zoom,h:r.height/zoom})
    const visible=el=>{
      if(el.closest('style,script,.object-resize,.layer-handle,.snap-guide,[data-photo-hidden="true"]'))return false
      const cs=style(el);return cs.display!=='none'&&cs.visibility!=='hidden'&&parseFloat(cs.opacity)!==0
    }
    const angle=el=>{let v=0;for(let p=el;p&&p!==stage;p=p.parentElement){const cs=style(p);if(cs.transform!=='none'){const m=new DOMMatrixReadOnly(cs.transform);v+=Math.atan2(m.b,m.a)*180/Math.PI}if(cs.rotate&&cs.rotate!=='none')v+=parseFloat(cs.rotate)||0}return v}
    const geometry=(rect,rotation,local)=>{
      const r=box(rect);if(!rotation)return r
      const rad=rotation*Math.PI/180,c=Math.cos(rad),s=Math.sin(rad),ac=Math.abs(c),as=Math.abs(s),d=ac*ac-as*as
      const scale=local?r.w/(local.w*ac+local.h*as):1
      const w=Math.abs(d)<.01&&local?local.w*scale:(r.w*ac-r.h*as)/d,h=Math.abs(d)<.01&&local?local.h*scale:(r.h*ac-r.w*as)/d
      return {x:r.x+r.w/2-(w*c-h*s)/2,y:r.y+r.h/2-(w*s+h*c)/2,w,h}
    }
    const opacity=el=>{let o=1;for(let p=el;p&&p!==root.parentElement;p=p.parentElement)o*=parseFloat(style(p).opacity);return o}
    const radii=(el,w,h)=>{
      const r=corners.map(k=>{const s=style(el)[k].split(' '),val=(v,size)=>parseFloat(v)*(v.endsWith('%')?size/100:1)||0;return [val(s[0],w),val(s[1]||s[0],h)]})
      const factor=Math.min(1,w/(r[0][0]+r[1][0]||1),w/(r[3][0]+r[2][0]||1),h/(r[0][1]+r[3][1]||1),h/(r[1][1]+r[2][1]||1))
      return r.map(pair=>pair.map(v=>v*factor))
    }
    const identity=(el,text)=>{
      const owner=el.closest('[data-morph]'),explicit=owner?.dataset.morph
      if(explicit)return explicit+'#'+(owner.dataset.morphIndex??'0')
      const field=el.closest('[data-k]')?.dataset.k.split(':').slice(1).join(':')
      if(field){
        const m=field.match(/^(?:it|t|s|b|sub|body)(\d+)(?:-(.+))?$/)
        if(m&&page.items?.[+m[1]]){const item=page.items[+m[1]];return page.type+':item:'+(item.id||item.t||m[1])+':'+(m[2]||field.replace(/\d+/,''))}
        if(/^(trip|title|tocM)$/.test(field)||el.closest('[data-shared="trip:title"]'))return 'trip.title'
        if(/dates?$/.test(field))return 'trip.dates'
        if(/agency|company/.test(field))return 'trip.agency'
        return page.type+':'+field
      }
      // Flap clocks split a time into nested spans; resolve the nearest complete field first.
      for(let p=el;p&&p!==root;p=p.parentElement){
        const text=p.textContent.trim(),token=tokens.find(token=>token.text===text)
        if(token)return token.id
      }
      return ''
    }
    const tokens=[]
    ;(page.items||[]).forEach((item,i)=>{
      const base=page.type+':item:'+(item.id||item.t||i)
      for(const key of ['from','to','dep','arr','t','sub','body']){
        const value=String(item[key]||'');if(!value)continue
        tokens.push({text:value,id:base+':'+(key==='t'?'it':key)})
        if(key==='from'||key==='to'){
          const code=value.match(/\b[A-Z]{3}\b/)?.[0],city=value.replace(/\s*\b[A-Z]{3}\b\s*/,'').trim()
          if(code)tokens.push({text:code,id:base+':'+key+':code',specific:true})
          if(city)tokens.push({text:city,id:base+':'+key+':city',specific:true})
        }
      }
    })
    tokens.sort((a,b)=>Number(!!b.specific)-Number(!!a.specific)||b.text.length-a.text.length)
    const copyTree=el=>{
      const clone=el.cloneNode(true),src=[el,...el.querySelectorAll('*')],dst=[clone,...clone.querySelectorAll('*')]
      src.forEach((e,i)=>{const cs=style(e);for(const k of cs)dst[i].style.setProperty(k,cs.getPropertyValue(k));dst[i].removeAttribute('id');dst[i].removeAttribute('contenteditable')})
      Object.assign(clone.style,{position:'absolute',left:'0px',top:'0px',margin:'0px',transform:'none',rotate:'none',animation:'none',width:'100%',height:'100%'})
      return clone
    }
    const measure=document.createElement('canvas').getContext('2d'),glyphOccurrences=new Map(),opaque=new Set(),nodes=[root,...root.querySelectorAll('*')]
    for(const el of nodes){
      if(!visible(el)||[...opaque].some(parent=>parent.contains(el))||el.closest('svg')&&el.tagName.toLowerCase()!=='svg')continue
      const cs=style(el),r=geometry(el.getBoundingClientRect(),angle(el),{w:el.offsetWidth,h:el.offsetHeight})
      if(!r.w||!r.h||r.x>=1920||r.y>=1080||r.x+r.w<=0||r.y+r.h<=0)continue
      // Arbitrary masks/paths have no safe common topology. Preserve the actual subtree and fade it;
      // do not drop the mask or stretch its photograph to pretend it morphed.
      if(el!==root&&(cs.maskImage!=='none'||cs.clipPath!=='none')){
        objects.push({...r,kind:'art',id:(()=>{const media=[...el.querySelectorAll('img,[data-morph]')];return media.length===1?identity(media[0]):identity(el)})(),role:'',el,clone:copyTree(el),opacity:opacity(el),angle:angle(el),radii:radii(el,r.w,r.h)})
        opaque.add(el);continue
      }
      if(el.tagName==='IMG'){
        let frame=el,fr=r
        // Use the clipping ancestor's true outline; a circle is not an image stretched to a circle.
        for(let p=el.parentElement;p&&p!==root;p=p.parentElement){
          const ps=style(p),pr=geometry(p.getBoundingClientRect(),angle(p),{w:p.offsetWidth,h:p.offsetHeight})
          if(/hidden|clip/.test(ps.overflow)&&pr.w<=r.w+1&&pr.h<=r.h+1){frame=p;fr=pr;break}
        }
        const src=el.currentSrc||el.src
        if(style(frame).boxShadow!=='none')objects.push({...fr,kind:'surface',id:'photo-shadow:'+src,role:'photo-shadow',color:'transparent',background:'none',shadow:style(frame).boxShadow,angle:angle(frame),opacity:opacity(el),radii:radii(frame,fr.w,fr.h)})
        objects.push({...fr,kind:'photo',id:identity(el)||'photo:'+src,role:'photo',src,nw:el.naturalWidth,nh:el.naturalHeight,fit:cs.objectFit,position:cs.objectPosition,imageBox:r,radii:radii(frame,fr.w,fr.h),clip:style(frame).clipPath,angle:angle(frame),opacity:opacity(el),shadow:style(frame).boxShadow,el})
        continue
      }
      if(el.tagName.toLowerCase()==='svg'){
        const clone=el.cloneNode(true),src=[el,...el.querySelectorAll('*')],dst=[clone,...clone.querySelectorAll('*')]
        src.forEach((e,i)=>{const s=style(e);for(const k of ['fill','stroke','strokeWidth','fontFamily','fontSize','color'])dst[i].style[k]=s[k]})
        objects.push({...r,kind:'art',el,id:el.dataset.morph?identity(el):'svg:'+el.outerHTML,role:'',clone,opacity:opacity(el),angle:angle(el),radii:radii(el,r.w,r.h)});continue
      }
      if(el!==root&&(!transparent(cs.backgroundColor)||cs.backgroundImage!=='none'||corners.some((_,i)=>parseFloat(cs[['borderTopWidth','borderRightWidth','borderBottomWidth','borderLeftWidth'][i]])>0)||cs.boxShadow!=='none')){
        const frame={...r,kind:'surface',el,id:el.dataset.morph?identity(el):'',role:el.dataset.morph||'surface:'+(r.h<=8||r.w<=8?'rule':r.w>=400&&r.h>=150?'panel':r.w/r.h>=8?'band':'tile'),opacity:opacity(el),angle:angle(el),radii:radii(el,r.w,r.h),color:cs.backgroundColor,background:cs.backgroundImage,shadow:cs.boxShadow,clip:cs.clipPath,borders:{}}
        for(const side of ['Top','Right','Bottom','Left'])for(const key of ['Width','Style','Color'])frame.borders['border'+side+key]=cs['border'+side+key]
        objects.push(frame)
      }
      for(const node of el.childNodes){
        if(node.nodeType!==3||!node.textContent.trim())continue
        const text=node.textContent,chars=[],range=document.createRange(),base=identity(el,text),seen=glyphOccurrences
        const parts=JSON.parse(el.dataset.morphParts||'[]')
        const key=el.closest('[data-k]')?.dataset.k.split(':').slice(1).join(':')||''
        const role=/agency|company/.test(key)?'agency':/dates?$/.test(key)?'dates':/^(h|title|trip|tocM|tocT)$/.test(key)?'title':/^(k|en|kick)$/.test(key)?'kicker':parseFloat(cs.fontSize)>=48?'heading':parseFloat(cs.fontSize)>=28?'body':'label'
        let previousEnd=0
        for(const part of graphemes(text)){
          range.setStart(node,part.index);range.setEnd(node,part.index+part.text.length)
          measure.font=`${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
          const metrics=measure.measureText(part.text),local={w:metrics.width+(parseFloat(cs.letterSpacing)||0),h:metrics.fontBoundingBoxAscent+metrics.fontBoundingBoxDescent}
          const rr=geometry(range.getBoundingClientRect(),angle(el),local);if(!rr.w||!rr.h||!part.text.trim())continue
          let id=base
          const binding=parts.find(p=>{const at=text.indexOf(p.text);return at>=0&&part.index>=at&&part.index<at+p.text.length})
          if(binding)id=binding.name+'#'+binding.index
          for(const token of binding||el.closest('[data-morph]')?[]:tokens){const at=text.indexOf(token.text);if(at>=0&&part.index>=at&&part.index<at+token.text.length){id=token.id;break}}
          const nth=seen.get(id+'|'+part.text)||0;seen.set(id+'|'+part.text,nth+1)
          chars.push({...rr,kind:'glyph',id:id?id+'|'+part.text+'|'+nth:'',field:id,text:part.text,leading:text.slice(previousEnd,part.index),role,angle:angle(el),opacity:opacity(el),font:cs.fontFamily,size:parseFloat(cs.fontSize),weight:cs.fontWeight,fontStyle:cs.fontStyle,color:cs.color,spacing:cs.letterSpacing,shadow:cs.textShadow,stroke:cs.webkitTextStroke,el})
          previousEnd=part.index+part.text.length
        }
        groups.push({kind:'text',id:base,text:text.trim(),role,...box(el.getBoundingClientRect()),chars})
      }
    }
    // Text-sized painted elements are part of their lettering, never free-standing tiles.
    // Include inline badges with nested spans, but leave layout panels/photo frames independent.
    const glyphs=groups.flatMap(g=>g.chars)
    for(const o of objects.filter(o=>o.kind==='surface'&&o.el)){
      const children=[...o.el.querySelectorAll('*')]
      const textOnly=!children.some(el=>/^(IMG|SVG|VIDEO|CANVAS)$/.test(el.tagName)||!/^inline/.test(style(el).display))
      const chars=glyphs.filter(g=>o.el.contains(g.el))
      if(textOnly&&chars.length){o.bound=true;for(const g of chars)(g.backings||=[]).push(o)}
    }
    objects.forEach((o,i)=>o.order=i)
    // Reunite semantic fields split across inline spans before any character matching.
    // A combined legacy line can contain several fields; keep those fields separate.
    const fields=new Map(),textGroups=[]
    for(const group of groups)for(const c of group.chars){
      const key=c.field||group
      if(!fields.has(key)){const g={...group,id:c.field||'',text:'',chars:[]};fields.set(key,g);textGroups.push(g)}
      const g=fields.get(key);g.chars.push(c);g.text=((g.text+(c.leading||'')+c.text).trim())
    }
    return {objects,groups:textGroups,background:transparent(style(root).backgroundColor)?style(stage).backgroundColor:style(root).backgroundColor,root}
  }
  function match(a,b) {
    const objects=pairs(a.objects.filter(o=>!o.bound),b.objects.filter(o=>!o.bound))
    const left=new Set(a.groups),right=new Set(b.groups),text=[]
    for(const identityOnly of [true,false])for(const y of [...right]){
      const x=[...left].filter(x=>identityOnly?!!x.id&&x.id===y.id:compatibleIndex(x,y)&&sameTextObject(x,y)).sort((x,z)=>distance(x,y)-distance(z,y))[0]
      if(x){left.delete(x);right.delete(y);text.push([x,y])}
    }
    const glyphs={matched:[],out:[],incoming:[]}
    // Never reserve characters globally: only an accepted pair of text objects may share letters.
    const allA=a.groups.flatMap(g=>g.chars),allB=b.groups.flatMap(g=>g.chars),usedA=new Set(),usedB=new Set()
    for(const [x,y] of text){
      const p=pairs(textUnits(x.chars),textUnits(y.chars),1)
      for(const [aa,bb] of p.matched)aa.chars.forEach((c,i)=>{
        const d=bb.chars[i];glyphs.matched.push([c,d]);usedA.add(c);usedB.add(d)
      })
    }
    glyphs.out=allA.filter(x=>!usedA.has(x));glyphs.incoming=allB.filter(x=>!usedB.has(x))
    return {textPairs:text,matched:[...objects.matched,...glyphs.matched],out:[...objects.out,...glyphs.out],incoming:[...objects.incoming,...glyphs.incoming]}
  }
  const transform=(o,sx=1,sy=sx)=>`translate(${o.x}px,${o.y}px) rotate(${o.angle||0}deg) scale(${sx},${sy})`
  const radius=o=>o.radii.map(p=>p[0]+'px').join(' ')+' / '+o.radii.map(p=>p[1]+'px').join(' ')
  function crop(o) {
    const r=o.imageBox||o,nw=o.nw||r.w,nh=o.nh||r.h
    const scale=o.fit==='contain'?Math.min(r.w/nw,r.h/nh):o.fit==='none'?1:Math.max(r.w/nw,r.h/nh)
    const p=(o.position||'50% 50%').split(' '),offset=(v,free)=>v.endsWith('%')?parseFloat(v)/100*free:parseFloat(v)||0
    return {scale,x:r.x-o.x+offset(p[0],r.w-nw*scale),y:r.y-o.y+offset(p[1]||'50%',r.h-nh*scale)}
  }
  function play(a,b,layer,state,duration) {
    const result=match(a,b),animations=state.animations,start=document.timeline.currentTime
    const animate=(el,frames)=>{const animation=el.animate(frames,{duration,easing:EASING,fill:'both'});animation.startTime=start;animations.push(animation);return animation}
    const bend=(el,curve)=>{
      if(!curve.x&&!curve.y)return
      animate(el,Array.from({length:33},(_,i)=>{const p=i/32,k=4*p*(1-p);return {offset:p,translate:`${curve.x*k}px ${curve.y*k}px`}}))
    }
    // All letters of an accepted text-object pair share one trajectory offset.
    const textCurves=new Map()
    for(const [x,y] of result.matched)if(x.kind==='glyph'){
      const from=a.groups.find(g=>g.chars.includes(x)),to=b.groups.find(g=>g.chars.includes(y))
      if(from&&to){if(!textCurves.has(from))textCurves.set(from,arc(from,to));textCurves.set(x,textCurves.get(from))}
    }
    const carriers=new Map(),glyphPairs=[...result.matched.filter(([x])=>x.kind==='glyph'),...result.out.filter(x=>x.kind==='glyph').map(x=>[x,null]),...result.incoming.filter(y=>y.kind==='glyph').map(y=>[null,y])]
    const remaining=new Set(glyphPairs.filter(pair=>pair.some(o=>o?.backings?.length)))
    const bounds=chars=>{const x=Math.min(...chars.map(o=>o.x)),y=Math.min(...chars.map(o=>o.y));return {x,y,w:Math.max(...chars.map(o=>o.x+o.w))-x,h:Math.max(...chars.map(o=>o.y+o.h))-y}}
    while(remaining.size){
      const members=new Set(),backs=new Set(),queue=[remaining.values().next().value]
      while(queue.length){
        const pair=queue.pop();if(members.has(pair))continue;members.add(pair);remaining.delete(pair)
        for(const o of pair)for(const bg of o?.backings||[])backs.add(bg)
        for(const next of remaining)if(next.some(o=>o?.backings?.some(bg=>backs.has(bg))))queue.push(next)
      }
      const from=[...members].map(p=>p[0]).filter(Boolean),to=[...members].map(p=>p[1]).filter(Boolean)
      const originA=bounds(from.length?from:to),originB=bounds(to.length?to:from)
      const el=document.createElement('div');el.dataset.morphCarrier='text';el.style.cssText='position:absolute;left:0;top:0;z-index:10000;pointer-events:none;'
      layer.appendChild(el);animate(el,[{transform:`translate(${originA.x}px,${originA.y}px)`},{transform:`translate(${originB.x}px,${originB.y}px)`}])
      bend(el,arc(originA,originB))
      const carrier={el,from:originA,to:originB};for(const pair of members)for(const o of pair)if(o)carriers.set(o,carrier)
      const old=[...backs].filter(bg=>a.objects.includes(bg)),next=new Set([...backs].filter(bg=>b.objects.includes(bg)))
      const project=(bg,reverse=false)=>{
        const links=[...members].filter(p=>p[reverse?1:0]?.backings?.includes(bg)&&p[reverse?0:1])
        if(!links.length)return {...bg,opacity:0}
        const r=bounds(links.map(p=>p[reverse?1:0])),s=bounds(links.map(p=>p[reverse?0:1])),sx=s.w/r.w,sy=s.h/r.h
        return {...bg,x:s.x+(bg.x-r.x)*sx,y:s.y+(bg.y-r.y)*sy,w:bg.w*sx,h:bg.h*sy,opacity:0,color:'transparent',shadow:'none'}
      }
      const add=(x,y)=>{carriers.set(x,carrier);carriers.set(y,carrier);result.matched.push([x,y])}
      for(const x of old){
        const y=[...next].find(bg=>[...members].some(([aa,bb])=>aa?.backings?.includes(x)&&bb?.backings?.includes(bg)))
        if(y){next.delete(y);add(x,y)}
        else if([...members].some(([aa,bb])=>aa?.backings?.includes(x)&&bb))add(x,project(x))
        else {carriers.set(x,carrier);result.out.push(x)}
      }
      for(const y of next){
        if([...members].some(([aa,bb])=>aa&&bb?.backings?.includes(y)))add(project(y,true),y)
        else {carriers.set(y,carrier);result.incoming.push(y)}
      }
    }
    const create=(o,target=o)=>{
      const el=document.createElement('div');el.style.cssText='position:absolute;left:0;top:0;margin:0;padding:0;pointer-events:none;transform-origin:0 0;box-sizing:border-box;'
      el.dataset.transitionKey=o.id||o.kind;el.dataset.morphKind=o.kind;el.style.zIndex=o.kind==='glyph'?'10000':String((o.order||0)+1)
      ;(carriers.get(o)?.el||layer).appendChild(el)
      if(o.kind==='glyph'){
        Object.assign(el.style,{fontFamily:o.font,fontWeight:o.weight,fontStyle:o.fontStyle,fontSize:o.size+'px',lineHeight:o.h+'px',whiteSpace:'pre',color:o.color,textShadow:o.shadow,webkitTextStroke:o.stroke,letterSpacing:'0px'})
        el.textContent=o.text
      } else if(o.kind==='photo'){
        const w=Math.max(o.w,target.w),h=Math.max(o.h,target.h)
        Object.assign(el.style,{width:w+'px',height:h+'px',overflow:'hidden'})
        const im=document.createElement('img');im.src=o.src;im.alt='';im.style.cssText=`position:absolute;left:0;top:0;max-width:none;width:${o.nw||o.w}px;height:${o.nh||o.h}px;transform-origin:0 0;`
        el.appendChild(im)
      } else {
        Object.assign(el.style,{width:o.w+'px',height:o.h+'px',backgroundColor:o.color||'transparent',backgroundImage:o.background||'none',boxShadow:o.shadow||'none',borderRadius:o.radii?radius(o):'0px',...o.borders})
        if(o.clone){const clone=o.clone.cloneNode(true);clone.style.cssText+=';width:100%;height:100%;';el.appendChild(clone)}
      }
      return el
    }
    const frame=(o,reference,origin)=>{
      if(origin)o={...o,x:o.x-origin.x,y:o.y-origin.y}
      const f={opacity:o.opacity,transform:transform(o)}
      if(o.kind==='glyph'){
        // One uniform scale keeps live type proportional; color changes independently.
        f.transform=transform(o,o.size/reference.size);f.color=o.color;f.textShadow=o.shadow
      }else if(o.kind==='photo'){
        const w=Math.max(reference.w,o.w),h=Math.max(reference.h,o.h),r=o.radii
        f.clipPath=`inset(0px ${Math.max(0,w-o.w)}px ${Math.max(0,h-o.h)}px 0px round ${r.map(p=>p[0]+'px').join(' ')} / ${r.map(p=>p[1]+'px').join(' ')})`
      }else{
        f.transform=transform(o,o.w/reference.w,o.h/reference.h);f.backgroundColor=o.color||'transparent';f.boxShadow=o.shadow||'none'
        for(const side of ['Top','Right','Bottom','Left'])if(o.borders){
          const ratio=/Top|Bottom/.test(side)?reference.h/o.h:reference.w/o.w
          f['border'+side+'Style']='solid';f['border'+side+'Width']=(parseFloat(o.borders['border'+side+'Width'])*ratio||0)+'px';f['border'+side+'Color']=o.borders['border'+side+'Color']
        }
        if(o.radii)f.borderRadius=o.radii.map(p=>p[0]*reference.w/o.w+'px').join(' ')+' / '+o.radii.map(p=>p[1]*reference.h/o.h+'px').join(' ')
      }
      return f
    }
    for(const [x,y] of result.matched){
      const el=create(x,y),ref=x.kind==='photo'?{...x,w:Math.max(x.w,y.w),h:Math.max(x.h,y.h)}:x
      const carrier=carriers.get(x)
      animate(el,[frame(x,ref,carrier?.from),frame(y,ref,carrier?.to)])
      const curve=carrier?{x:0,y:0}:textCurves.get(x)||arc(x,y)
      bend(el,curve)
      if(x.kind==='photo'){
        const cx=crop(x),cy=crop({...y,nw:x.nw,nh:x.nh})
        animate(el.firstChild,[{transform:`translate(${cx.x}px,${cx.y}px) scale(${cx.scale})`},{transform:`translate(${cy.x}px,${cy.y}px) scale(${cy.scale})`}])
        if(x.src!==y.src){
          const next=create({...y,x:x.x,y:x.y},x),nr=next.firstChild,nx=crop({...x,nw:y.nw,nh:y.nh}),ny=crop(y)
          animate(next,[{...frame(x,ref),opacity:0},{...frame(y,ref),opacity:y.opacity}])
          bend(next,curve)
          animate(nr,[{transform:`translate(${nx.x}px,${nx.y}px) scale(${nx.scale})`},{transform:`translate(${ny.x}px,${ny.y}px) scale(${ny.scale})`}])
          animate(el,[{opacity:x.opacity},{opacity:0}])
        }
      }
      if(x.kind==='glyph'&&(x.font!==y.font||x.weight!==y.weight||x.fontStyle!==y.fontStyle)){
        const next=create(y),begin=frame(x,y,carrier?.from),end=frame(y,y,carrier?.to)
        animate(next,[{...begin,opacity:0},{...end,opacity:y.opacity}])
        bend(next,curve)
        animate(el,[{opacity:x.opacity},{opacity:0}])
      }
      if(x.kind==='art'&&x.clone.outerHTML!==y.clone.outerHTML||x.kind==='surface'&&x.background!==y.background){
        const copy={...y,w:x.w,h:x.h};if(carrier)carriers.set(copy,carrier)
        const next=create(copy,y)
        animate(next,[{...frame(x,x,carrier?.from),opacity:0},{...frame(y,x,carrier?.to),opacity:y.opacity}])
        bend(next,curve)
        animate(el,[{opacity:x.opacity},{opacity:0}])
      }
    }
    const fade=(o,incoming)=>{
      const el=create(o),carrier=carriers.get(o),f=frame(o,o,carrier?.from),end=frame(o,o,carrier?.to)
      if(o.kind==='photo'){const c=crop(o);el.firstChild.style.transform=`translate(${c.x}px,${c.y}px) scale(${c.scale})`}
      // Linear overlapping fades preserve content through the midpoint (no white trough).
      const animation=animate(el,incoming?[{...f,opacity:0,offset:0},{...f,opacity:0,offset:.4},{...end,opacity:o.opacity,offset:1}]:[{...f,opacity:o.opacity,offset:0},{...end,opacity:0,offset:.6},{...end,opacity:0,offset:1}])
      animation.effect.updateTiming({easing:'linear'})
    }
    result.out.forEach(o=>fade(o,false));result.incoming.forEach(o=>fade(o,true))
    // Hand off to the complete DOM before cleanup, including paint details that a
    // measured object cannot reproduce (kerning, inline layout, pseudo-elements).
    // Reveal it only once eased geometry is within a subpixel of its destination;
    // the old 85% reveal exposed two differently positioned titles for ~200ms.
    // Object geometry still runs for the full duration; this does not retime it.
    if(b.root){
      const handoff=animate(layer,[{opacity:1,offset:0},{opacity:1,offset:.99},{opacity:0,offset:1}])
      handoff.effect.updateTiming({easing:'linear'})
    }
    return {result,finished:Promise.all(animations.map(animation=>animation.finished.catch(()=>{})))}
  }
  host.MastersMorph={capture,match,pairs,crop,play,graphemes,arc,EASING}
})(typeof window==='object'?window:globalThis)
