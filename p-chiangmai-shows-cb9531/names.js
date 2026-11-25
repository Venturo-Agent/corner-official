/* One content identity vocabulary for every recipe. No coordinates or variant IDs. */
(function(host){
  'use strict'
  const clean=v=>String(v??'').normalize('NFKC').replace(/\s+/g,'').replace(/[，。；、,.!?！？：:]+$/u,'')
  const key=v=>encodeURIComponent(String(v??''))
  function vocabulary(page,meta={},pages=[]){
    const entries=[],items=page.items||[],type=page.type
    const record=p=>p._sourceId||p.id||[p.type,p.n,p.date,p.title].filter(v=>v!==undefined).join(':')
    const base='page.'+key(record(page)||type)
    const add=(name,value,index=0)=>{if(value!==undefined&&value!==null&&String(value).trim())entries.push({name,value:String(value),index})}
    const trip={title:'trip.title',sub:'trip.subtitle',en:'trip.english',dates:'trip.dates',agency:'brand.name',hero:'photo.'+key(meta.hero),logo:'brand.logo'}
    for(const [field,name] of Object.entries(trip))add(name,meta[field])
    const fields={title:'title',sub:'subtitle',en:'english',body:'body',date:'date',n:'number',kick:'kicker',companyName:'brand'}
    for(const [field,role] of Object.entries(fields))add(base+'.'+role,page[field])
    if(page.n!==undefined){
      const n=Number(page.n),zh=n<10?'零一二三四五六七八九'[n]:(n<20?'十':'零一二三四五六七八九'[Math.floor(n/10)]+'十')+(n%10?'零一二三四五六七八九'[n%10]:'')
      for(const text of [String(page.n).padStart(2,'0'),'第 '+page.n+' 天','第'+zh+'天','DAY '+page.n])add(base+'.number',text)
    }
    const indices=[],photoCounts=new Map()
    const itemBases=items.map((item,i)=>{
      const spot=pages.find(p=>p.type==='spot'&&clean(p.title)===clean(item.t)&&clean(item.t))
      const day=type==='overview'&&(pages.find(p=>item._daySlideId&&p._slideId===item._daySlideId)||pages.filter(p=>p.type==='day')[i])
      indices[i]=spot||day?0:i
      return spot?'page.'+key(record(spot)):day?'page.'+key(record(day)):
        type+'.item.'+key(item._sourceId||item.id||[item.t,item.sub,item.from,item.to,item.dep,item.arr].filter(Boolean).join('|')||record(page))
    })
    items.forEach((item,i)=>{
      const b=itemBases[i],index=indices[i]
      for(const field of ['t','sub','body','time','night','from','to','dep','arr'])add(b+'.'+({t:type==='flight'?'flight':'title',sub:['overview','flight'].includes(type)?'date':'subtitle'}[field]||field),item[field],index)
      add(b+'.number',String(i+1).padStart(2,'0'),index)
      add(b+'.number',String(i+1),index)
      if(item.night)add(b+'.night','第 '+item.night+' 晚',index)
      if(type==='food'&&item.sub)add(b+'.subtitle',String(item.sub).split(/[·・]/)[0].trim(),index)
      if(type==='overview'){add(b+'.number','DAY '+(i+1),index);add(b+'.number','D'+(i+1),index);add(b+'.body',String(item.body||'').replace(/[・]/g,'・'),index)}
      for(const [j,text] of (item.items||[]).entries())add(b+'.detail.'+j,text,index)
      for(const field of ['from','to']){
        const value=String(item[field]||''),code=value.match(/\b[A-Z]{3}\b/)?.[0],city=value.replace(/\s*\b[A-Z]{3}\b\s*/,'').trim()
        if(code)add(b+'.'+field+'.code',code,index)
        if(city&&code)add(b+'.'+field+'.city',city,index)
      }
      for(const img of [item.img,...(item.imgs||[])])if(img){
        const src=typeof img==='string'?img:img.img,name='photo.'+key(src),occurrence=photoCounts.get(name)||0
        if(src){entries.push({name,value:src,index:occurrence,itemIndex:i});photoCounts.set(name,occurrence+1)}
      }
    })
    const photos=new Set()
    const collect=value=>{if(!value||typeof value!=='object')return;for(const [k,v] of Object.entries(value)){if(['img','img2','hero','src'].includes(k)&&typeof v==='string'&&/\.(?:jpe?g|png|webp|svg)(?:[?#]|$)/i.test(v))photos.add(v);else if(v&&typeof v==='object')collect(v)}}
    collect(page);collect(pages);for(const img of meta.pool||[])photos.add(img)
    for(const img of photos){add('photo.'+key(img),img);const gray=host.M?.paperInkGrays?.[img];if(gray)add('photo.'+key(img),gray)}
    for(const [i,tag] of (page.tags||[]).entries()){add(base+'.tag.'+i,tag);add(base+'.tag.'+i,'・'+tag)}
    for(const [i,stop] of (page.route?.stops||[]).entries()){const b='route.stop.'+key(stop.id||stop.name);add(b+'.title',stop.name,i);add(b+'.number',String(i+1).padStart(2,'0'),i)}
    const unique=value=>{const found=entries.filter(e=>clean(e.value)===clean(value)),ids=new Set(found.map(e=>e.name+'#'+e.index));return ids.size===1?found[0]:null}
    const field=(k,value)=>{
      if(k==='count')return {name:base+'.count',index:0}
      if(type==='day'&&k==='k'&&/^第.+天/.test(value)&&page.date&&String(value).includes(page.date))return {name:base+'.day-header',index:0}
      const m=k.match(/^(?:it|t|b|s|sub|body|time|night|meta|no|seq|ag-no|ag-label)(\d+)(?:[-_](.+))?$/)
      if(m&&items[+m[1]]){
        const i=+m[1],item=items[i],prefix=k.slice(0,k.indexOf(m[1])),suffix=m[2]
        const role=suffix?(/^\d+$/.test(suffix)?'detail.'+suffix:({t:'title',sub:'subtitle'}[suffix]||suffix)):
          ({it:type==='flight'?'flight':'title',t:type==='flight'?'flight':'title',b:'body',body:'body',s:['overview','flight'].includes(type)?'date':'subtitle',sub:['overview','flight'].includes(type)?'date':'subtitle',meta:'subtitle',time:'time',night:'night',no:'number',seq:'number','ag-no':'number','ag-label':'number'}[prefix])
        if(prefix==='time'&&!item.time&&String(value)===String(i+1).padStart(2,'0'))return {name:itemBases[i]+'.number',index:indices[i]}
        if(role)return {name:itemBases[i]+'.'+role,index:indices[i]}
      }
      // Source-value lookup handles historical aliases (pd-trip, d, tocM...),
      // but ambiguous equal numeric values never establish identity.
      const destination=type==='flight'&&/^(?:飛往|前往|抵達)(.+)$/.exec(String(value||''))
      if(destination){const city=unique(destination[1]);if(city&&/\.(from|to)\.city$/.test(city.name))return {name:base+'.title',index:0}}
      const exact=unique(value)
      if(exact)return exact
      const role=({h:'title',title:'title',big:'title',b:'body',body:'body',k:page.sub?'subtitle':'kicker',sub:'subtitle',en:'english',date:'date',day:'number','day-number':'number',n:'number',trip:'trip.title','trip-title':'trip.title',dates:'trip.dates',agency:'brand.name',company:'brand.name'}[k])
      if(role)return {name:role.includes('.')?role:type==='cover'&&['title','subtitle','english'].includes(role)&&!page[{title:'title',subtitle:'sub',english:'en'}[role]]?'trip.'+role:base+'.'+role,index:0}
      if(/^(tag|tg)\d+$/.test(k))return {name:base+'.tag.'+k.replace(/\D/g,''),index:0}
      if(/^(pins|nums|names)\d+$/.test(k)){const i=+k.replace(/\D/g,''),stop=page.route?.stops?.[i];if(stop)return {name:'route.stop.'+key(stop.id||stop.name)+'.'+(k.startsWith('names')?'title':'number'),index:i}}
      if(k==='tocT')return {name:base+'.title',index:0}
      if(k==='seal')return {name:'brand.seal',index:0}
      if(type==='proposal'&&/^\d+\./.test(k)){const [i,field]=k.split('.');return {name:itemBases[+i]+'.'+field,index:+i}}
      return null
    }
    return {entries,base,field,unique,itemBases,indices}
  }
  function annotate(root,page,meta,pages=[]){
    const v=vocabulary(page,meta,pages),put=(el,e)=>{
      if(!e||el.hasAttribute('data-morph')&&!el.hasAttribute('data-morph-auto'))return
      el.dataset.morph=e.name;el.dataset.morphIndex=String(e.index);el.dataset.morphAuto='true'
    }
    root.querySelectorAll('[data-morph-parts]').forEach(el=>delete el.dataset.morphParts)
    root.querySelectorAll('[data-morph-auto]').forEach(el=>{delete el.dataset.morph;delete el.dataset.morphIndex;delete el.dataset.morphAuto})
    for(const el of root.querySelectorAll('[data-k],[data-morph-field]'))put(el,v.field(el.dataset.morphField||el.dataset.k.split(':').slice(1).join(':'),el.textContent))
    const scoped=(el,value)=>{
      for(let p=el;p&&p!==root;p=p.parentElement){
        const indices=[...p.querySelectorAll('[data-k]')].map(e=>e.dataset.k.split(':').slice(1).join(':').match(/^(?:it|t|b|s|sub|body|time|night|meta)(\d+)/)?.[1]).filter(i=>i!==undefined)
        if(new Set(indices).size===1){
          const i=+indices[0],found=v.entries.filter(e=>e.name.startsWith(v.itemBases[i]+'.')&&e.index===v.indices[i]&&clean(e.value)===clean(value))
          if(new Set(found.map(e=>e.name)).size===1)return found[0]
        }
      }
      return v.unique(value)
    }
    // Recover data-bearing legacy DOM (including complete split-span clocks),
    // from the largest exact source field down, without naming its layout panel.
    for(const el of root.querySelectorAll('*')){
      if(el.closest('style,script,[data-morph],.user-layer')||el.closest('svg')&&!['text','tspan'].includes(el.tagName.toLowerCase())||el.querySelector('img,svg,[data-morph]'))continue
      put(el,scoped(el,el.textContent))
    }
    for(const el of root.querySelectorAll('img,image')){
      const src=el.dataset.orig||(el.getAttribute('src')||el.getAttribute('href')),candidates=v.entries.filter(e=>e.name.startsWith('photo.')&&e.value===src)
      let index=el.closest('[data-photo-index]')?.dataset.photoIndex
      if(index===undefined)for(let p=el.parentElement;p&&p!==root;p=p.parentElement){
        const keys=[...p.querySelectorAll('[data-k]')].map(e=>e.dataset.k.match(/:(?:it|t|sub|body|b)(\d+)/)?.[1]).filter(i=>i!==undefined)
        if(new Set(keys).size===1){index=keys[0];break}
      }
      const e=(index!==undefined?candidates.find(e=>e.itemIndex===+index):candidates[0])||(new Set(candidates.map(e=>e.index)).size===1?candidates[0]:null)
      if(e)put(el,e)
    }
    // Combined legacy lines keep their DOM and typography. A part map binds each
    // existing text run to source fields without inserting spans into flex/grid.
    for(const el of root.querySelectorAll('*')){
      if(el.closest('style,script,svg'))continue
      const owner=el.closest('[data-morph]')
      // A named field already owns its whole text. Only airport composite fields
      // split further; a city mentioned in a title/body is not another city object.
      if(owner&&!/\.(from|to|day-header)$/.test(owner.dataset.morph)&&!/:meta\d+$/.test(owner.dataset.k||''))continue
      const texts=[...el.childNodes].filter(n=>n.nodeType===3&&n.textContent.trim()).map(n=>n.textContent)
      if(!texts.length)continue
      const parts=[]
      for(const e of v.entries){
        if(e.name.startsWith('photo.')||/^[0-9]+$/.test(e.value)||!texts.some(t=>t.includes(e.value)))continue
        const conflicts=v.entries.filter(x=>x.value===e.value)
        if(new Set(conflicts.map(x=>x.name+'#'+x.index)).size>1)continue
        if(!parts.some(p=>p.name===e.name&&p.text===e.value))parts.push({text:e.value,name:e.name,index:e.index})
      }
      // Split airports into code/city even if one version renders the full field.
      parts.sort((a,b)=>Number(/\.(code|city)$/.test(b.name))-Number(/\.(code|city)$/.test(a.name))||b.text.length-a.text.length)
      if(parts.length){
        const covered=texts.every(text=>{let rest=text;for(const p of parts)rest=rest.split(p.text).join('');rest=rest.replace(/去程|回程|起飛|出發|抵達|飛往|前往/g,'');return !/[\p{L}\p{N}]/u.test(rest)})
        if(covered)el.dataset.morphParts=JSON.stringify(parts)
      }
    }
    // Page ordinals are view state, only explicit pagination/brand hooks qualify.
    root.querySelectorAll('[data-page-number]').forEach(el=>put(el,{name:'page.number',index:0}))
    root.querySelectorAll('[data-brand-logo]').forEach(el=>put(el,{name:'brand.logo',index:0}))
    return v
  }
  host.MastersNames={vocabulary,annotate}
})(typeof window==='object'?window:globalThis)
