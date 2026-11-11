/* Explicit item-boundary pagination. No DOM, persistence or mutation of live state.
   The caller supplies the current recipe's capacity result and owns one atomic save/history step. */
(function(root){
  'use strict';
  const record=value=>!!value&&typeof value==='object'&&!Array.isArray(value);
  const own=(obj,key)=>Object.prototype.hasOwnProperty.call(obj,key);
  const copy=value=>Array.isArray(value)?value.map(copy):record(value)?Object.fromEntries(Object.entries(value).map(([key,val])=>[key,copy(val)])):value;
  const populated=value=>value!=null&&(typeof value!=='object'||Object.keys(value).length>0);
  const fail=(code,message,extra={})=>({ok:false,code,message,...extra});
  const compound=key=>String(key).match(/^(0|[1-9]\d*):([\s\S]*)$/);
  const recipes={
    'day/photo-notes':{min:1,max:8,globals:new Set(['h','date','day','title']),item:/^(t|time)(0|[1-9]\d*)$/,ordinals:true},
    'food/grid':{min:2,max:8,globals:new Set(['h','k']),item:/^(it|sub)(0|[1-9]\d*)$/,itemPhotos:true},
    'stay/screen':{min:1,max:5,globals:new Set(['h','k']),item:/^(it|sub|body|night)(0|[1-9]\d*)$/,itemPhotos:true,screenPhotos:true},
    'notice/field-journal':{min:1,max:5,globals:new Set(['h','k','journal-trip','journal-dates']),item:/^(it)(0|[1-9]\d*)$/,nested:/^(s)(0|[1-9]\d*)_(0|[1-9]\d*)$/,pagePhoto:true},
    'overview/six-column-press':{min:2,max:8,globals:new Set(['agency','dates','count','h','sub']),item:/^(s|t|b)(0|[1-9]\d*)$/,itemPhotos:true,pressPhotos:true,dayReferences:true}
  };
  const recipeFor=(page,variant)=>recipes[page.type+'/'+variant];
  // Match each supported recipe's real IMG order before counting occurrences.
  // The press's seven/eight-item spread emits no images at all; old image edits
  // there cannot be proved to belong to a current slot and must be refused.
  function photoSlots(items,recipe){
    if(recipe.pressPhotos&&items.length>6)return[];
    const counts=new Map(),slots=[],valid=src=>typeof src==='string'&&src.trim()&&!/^(undefined|null)$/i.test(src.trim());
    const add=(source,item,role)=>{const occurrence=counts.get(source)||0;counts.set(source,occurrence+1);slots.push({item,source,occurrence,...(role?{role}:{})});};
    // Screen renders the first valid source as the full-page background before
    // its independently editable windows. That background is never an item.
    if(recipe.screenPhotos){const background=items.find(item=>valid(item.img));if(background)add(background.img,-1,'background');}
    items.forEach((item,i)=>{if(!item.img||(recipe.pressPhotos||recipe.screenPhotos)&&!valid(item.img))return;add(item.img,i,recipe.screenPhotos?'window':null);});
    return slots;
  }
  function inspectPhotos(images,index,counts,variant){
    for(const[key,value]of Object.entries(images)){
      const match=compound(key);if(+match[1]!==index)continue;
      const source=match[2];if(!counts.has(source))return fail('orphan-photo-edit','此頁有無法對應目前版面的照片編輯，尚無法可靠分頁');
      if(!record(value)||Object.keys(value).some(key=>!['d','pos','hidden'].includes(key)))return fail('unknown-photo-edit','此頁含未支援的照片編輯，未進行分頁');
      if(own(value,'hidden')){
        if(!record(value.hidden))return fail('unknown-photo-slot','照片隱藏資料不完整，未進行分頁');
        for(const[slot,hidden]of Object.entries(value.hidden)){
          const prefix=variant+':',occurrence=slot.startsWith(prefix)?slot.slice(prefix.length):'';
          if(!/^(0|[1-9]\d*)$/.test(occurrence)||+occurrence>=counts.get(source)||hidden!==true)return fail('unknown-photo-slot','照片隱藏資料含其他版面或未知圖槽，尚無法可靠分頁');
        }
      }
    }
    return {ok:true};
  }
  function inspect(input={}){
    const {pages,state,images,index,variant,resolvedVariants}=input;
    if(!Array.isArray(pages)||!pages.length||!pages.every(record)||!record(state)||!record(images)||!Number.isInteger(index)||index<0||index>=pages.length)
      return fail('invalid-state','頁面資料不完整，未進行分頁');
    if(!['v','text','extra'].every(key=>record(state[key]))||!Number.isInteger(state.page)||state.page<0||state.page>=pages.length)
      return fail('invalid-state','編輯狀態不完整，未進行分頁');
    if(Object.keys(state).some(key=>!['page','v','text','extra','pages'].includes(key)))return fail('unknown-state','此編輯檔含未支援的狀態，未進行分頁');
    if(!Array.isArray(resolvedVariants)||resolvedVariants.length!==pages.length||resolvedVariants.some(v=>v!=null&&typeof v!=='string'))
      return fail('missing-variants','缺少目前版面選擇，未進行分頁');
    for(let i=index+1;i<pages.length;i++)if(resolvedVariants[i]&&(state.v[i]||pages[i].variant)&&state.v[i]!==resolvedVariants[i]&&pages[i].variant!==resolvedVariants[i])
      return fail('unstable-variant','後續頁面有失效的選版，分頁可能改變版面，已保留原頁');
    for(const store of [state.v,state.extra])for(const key of Object.keys(store))if(!/^(0|[1-9]\d*)$/.test(key)||+key>=pages.length)return fail('invalid-state','頁碼資料不完整，未進行分頁');
    for(const store of [state.text,images])for(const key of Object.keys(store)){const match=compound(key);if(!match||+match[1]>=pages.length)return fail('invalid-state','文字或照片頁碼不完整，未進行分頁');}
    const page=pages[index];
    const recipe=recipeFor(page,variant);
    if(!recipe)return fail('unsupported-variant','目前支援每日、餐食、住宿、須知與六欄總覽的指定版面依完整項目分頁');
    if((state.v[index]!=null&&state.v[index]!==variant)||(state.v[index]==null&&page.variant!=null&&page.variant!==variant))
      return fail('variant-mismatch','已選版面與目前版面不同，未進行分頁');
    if(!Array.isArray(page.items)||!page.items.every(record)||page.items.length<2)return fail('single-item','只有一項時無法再依項目分頁；請調整該項或標題');
    if(page.items.length>256)return fail('too-many-items','此頁項目數超出本次分頁支援範圍，原內容保留');
    if(state.extra[index]!=null&&state.extra[index]!==0)return fail('extra-items','此頁曾增減項目，尚不支援安全分頁');
    if(['elements','layoutPositions','layoutStyles','lineColors','lineStyles','layerOrder'].some(key=>populated(page[key])))
      return fail('free-layout','此頁有物件、樣式或位置調整，分頁可能改變構圖，已保留原頁');
    if(recipe.nested&&page.items.some(group=>group.items!=null&&(!Array.isArray(group.items)||!group.items.every(line=>typeof line==='string'))))
      return fail('invalid-groups','須知組內條列格式不完整，未進行分頁');
    if(recipe.dayReferences){
      const targets=input.overviewTargets;
      if(!Array.isArray(targets)||targets.length!==page.items.length)return fail('missing-day-reference','缺少原總覽的每日連結，未進行分頁');
      for(let i=0;i<page.items.length;i++){
        const item=page.items[i],id=targets[i];
        if(typeof id!=='string'||!id)return fail('missing-day-reference','有總覽項目找不到原目的日，未進行分頁');
        const matches=pages.filter(p=>p._slideId===id);
        if(matches.length!==1||matches[0].type!=='day')return fail('ambiguous-day-reference','目的日識別不唯一或已失效，未進行分頁');
        if(own(item,'_daySlideId')){
          if(item._daySlideId!==id)return fail('invalid-day-reference','原總覽的每日連結已失效，未進行分頁');
        }else{
          const days=pages.filter(p=>p.type==='day'&&p.n===i+1);
          if(days.length!==1||days[0]!==matches[0])return fail('ambiguous-day-reference','原總覽的日序缺漏或重複，無法可靠分頁');
        }
      }
    }
    for(const key of Object.keys(state.text)){
      const match=compound(key);if(+match[1]!==index)continue;
      const field=match[2],item=field.match(recipe.item),nested=recipe.nested&&field.match(recipe.nested);
      const validItem=item&&+item[2]<page.items.length,validNested=nested&&+nested[2]<page.items.length&&+nested[3]<(page.items[+nested[2]].items||[]).length;
      if(!recipe.globals.has(field)&&!validItem&&!validNested)return fail('unknown-text-key','此頁含其他版面或未知條目的文字編輯，尚無法可靠分頁',{field});
    }
    if(recipe.itemPhotos){
      if(page.items.some(item=>item.img&&typeof item.img!=='string'))return fail('invalid-photo-source','圖片來源格式不完整，未進行分頁');
      const slots=photoSlots(page.items,recipe),counts=new Map();for(const slot of slots)counts.set(slot.source,slot.occurrence+1);
      const checked=inspectPhotos(images,index,counts,variant);if(!checked.ok)return checked;
      if(recipe.screenPhotos){
        const background=slots.find(slot=>slot.role==='background');
        if(background&&counts.size>1&&images[index+':'+background.source]?.hidden?.[variant+':'+background.occurrence]===true)
          return fail('ambiguous-background-hidden','此頁隱藏了背景且有不同照片來源，續頁背景可能改變，尚無法可靠保留隱藏設定');
      }
    }
    if(recipe.pagePhoto){
      let photo=page.img;
      if(photo!==null&&!photo){
        if(!record(input.meta))return fail('missing-photo-context','缺少原簡報的照片來源，未進行分頁');
        if(!input.meta.hero&&input.meta.pool!=null&&!Array.isArray(input.meta.pool))return fail('invalid-photo-source','圖片來源格式不完整，未進行分頁');
        photo=input.meta.hero||(input.meta.pool||[])[0];
      }
      if(photo&&typeof photo!=='string')return fail('invalid-photo-source','圖片來源格式不完整，未進行分頁');
      const checked=inspectPhotos(images,index,new Map(photo?[[photo,1]]:[]),variant);if(!checked.ok)return checked;
    }
    return {ok:true,code:'supported',message:'可檢查依項目分頁'};
  }
  function plan(input={}){
    const support=inspect(input);if(!support.ok)return support;
    const {pages,state,images,index,variant,resolvedVariants,fits}=input;
    if(typeof fits!=='function')return fail('missing-measure','缺少原版面的容量檢查，未進行分頁');
    const source=pages[index],recipe=recipeFor(source,variant),n=source.items.length,prefix=index+':',slots=recipe.itemPhotos?photoSlots(source.items,recipe):null;
    const edits=Object.fromEntries(Object.entries(state.text).filter(([key])=>key.startsWith(prefix)).map(([key,val])=>[key.slice(prefix.length),val]));
    const candidate=(from,to)=>{
      const p=copy(source);p.items=p.items.slice(from,to);
      const mapped={};
      for(const[key,val]of Object.entries(edits)){
        const item=key.match(recipe.item),nested=recipe.nested&&key.match(recipe.nested),ref=item||nested;
        if(!ref)mapped[key]=copy(val);
        else if(+ref[2]>=from&&+ref[2]<to)mapped[ref[1]+(+ref[2]-from)+(nested?'_'+nested[3]:'')]=copy(val);
      }
      // Empty source times are displayed as ordinal labels. Preserve the visible
      // original ordinals on continuation pages instead of silently restarting 01.
      if(recipe.ordinals)for(let i=from;i<to;i++)if(from>0&&!source.items[i].time&&mapped['time'+(i-from)]==null)mapped['time'+(i-from)]=String(i+1).padStart(2,'0');
      // An automatically generated lodging count describes the original page,
      // not each fragment. Preserve the visible heading even for a single-item
      // continuation, whose recipe otherwise changes its default wording.
      if(recipe.screenPhotos&&mapped.h==null)mapped.h=copy(source.title||(n===1?'這幾晚住這裡':n+' 間飯店'));
      if(recipe.dayReferences){
        p.items.forEach((item,i)=>{item._daySlideId=input.overviewTargets[from+i];});
        // The large count belongs to the original whole overview, not the number
        // of items left on a continuation page. Keep its original visible value.
        if(mapped.count==null)mapped.count=String(n).padStart(2,'0');
      }
      return {p,items:p.items,n:to-from,edits:mapped,sourceIndices:Array.from({length:to-from},(_,i)=>from+i),variant};
    };
    const measured=new Map();
    const measure=(from,to)=>{
      const key=from+':'+to;if(measured.has(key))return measured.get(key);
      const result=fits(candidate(from,to));if(typeof result!=='boolean')throw Error('Capacity callback must return a boolean');
      measured.set(key,result);return result;
    };
    try{
      if(n>=recipe.min&&n<=recipe.max&&measure(0,n))return fail('already-fits','這頁已可容納，不需要分頁');
      // Count-dependent type sizes need not be monotonic. Search all contiguous
      // Groups inside the recipe's range use the real capacity result; choose the
      // fewest pages, preserving order. Never leave an undersized trailing group.
      const paths=Array(n+1).fill(null);paths[n]=[];
      for(let from=n-1;from>=0;from--)for(let to=Math.min(n,from+recipe.max);to>=from+recipe.min;to--){
        if(paths[to]===null||!measure(from,to))continue;
        const path=[{from,to},...paths[to]];if(paths[from]===null||path.length<paths[from].length)paths[from]=path;
      }
      if(!paths[0]){
        const covered=new Set();
        for(let from=0;from<n;from++)for(let to=from+recipe.min;to<=Math.min(n,from+recipe.max);to++)if(measure(from,to))for(let i=from;i<to;i++)covered.add(i);
        const items=Array.from({length:n},(_,i)=>i).filter(i=>!covered.has(i));
        if(items.length)return fail('item-too-large','項目或共用標題仍超出一頁，無法依完整項目安全分頁',{items});
        return fail('no-fitting-partition',`無法在每頁至少 ${recipe.min} 項下完整分頁，原內容保留`);
      }
      const segments=paths[0],added=segments.length-1,newIndex=old=>old>index?old+added:old;
      const nextPages=copy(pages),parts=segments.map(({from,to})=>candidate(from,to));
      const ids=new Set(pages.map(p=>p._slideId).filter(id=>typeof id==='string'&&id)),base=source._slideId||'pagination-page-'+index;
      parts.forEach((part,i)=>{if(!i)return;let id=base+'-part-'+(i+1),suffix=1;while(ids.has(id))id=base+'-part-'+(i+1)+'-'+suffix++;ids.add(id);part.p._slideId=id;});
      nextPages.splice(index,1,...parts.map(part=>part.p));
      const nextState=copy(state),nextImages={};nextState.pages=nextPages;nextState.page=newIndex(state.page);nextState.v={};nextState.extra={};nextState.text={};
      for(let old=0;old<pages.length;old++){
        if(old===index)continue;
        // Page-order defaults change after insertion. Pin only unspecified choices;
        // explicit saved/source choices stay authoritative.
        if(state.v[old])nextState.v[newIndex(old)]=copy(state.v[old]);
        else if(!pages[old].variant&&resolvedVariants[old])nextState.v[newIndex(old)]=resolvedVariants[old];
        else if(own(state.v,old))nextState.v[newIndex(old)]=copy(state.v[old]);
        if(own(state.extra,old))nextState.extra[newIndex(old)]=copy(state.extra[old]);
      }
      for(const[key,val]of Object.entries(state.text)){const match=compound(key),old=+match[1];if(old!==index)nextState.text[newIndex(old)+':'+match[2]]=copy(val);}
      for(const[key,val]of Object.entries(images)){
        const match=compound(key),old=+match[1];
        if(old===index)for(let part=0;part<parts.length;part++){
          if(!recipe.itemPhotos){nextImages[index+part+':'+match[2]]=copy(val);continue;}
          const range=segments[part];
          if(recipe.screenPhotos){
            const local=photoSlots(parts[part].items,recipe).filter(slot=>slot.source===match[2]);if(!local.length)continue;
            const next=copy(val);
            if(own(val,'hidden'))next.hidden=Object.fromEntries(local.flatMap(slot=>{
              const original=slots.find(old=>old.source===slot.source&&old.role===slot.role&&(slot.role==='background'||old.item===range.from+slot.item));
              return original&&val.hidden[variant+':'+original.occurrence]===true?[[variant+':'+slot.occurrence,true]]:[];
            }));
            nextImages[index+part+':'+match[2]]=next;continue;
          }
          const matching=slots.filter(slot=>slot.source===match[2]&&slot.item>=range.from&&slot.item<range.to);
          if(!matching.length)continue;
          const next=copy(val);
          if(own(val,'hidden'))next.hidden=Object.fromEntries(matching.flatMap((slot,i)=>val.hidden[variant+':'+slot.occurrence]===true?[[variant+':'+i,true]]:[]));
          nextImages[index+part+':'+match[2]]=next;
        }
        else nextImages[newIndex(old)+':'+match[2]]=copy(val);
      }
      parts.forEach((part,i)=>{nextState.v[index+i]=variant;for(const[key,val]of Object.entries(part.edits))nextState.text[index+i+':'+key]=copy(val);});
      return {ok:true,code:'ready',message:`已整理為 ${parts.length} 頁，尚未儲存`,added,segments:segments.map((part,i)=>({...part,index:index+i})),next:{pages:nextPages,state:nextState,images:nextImages}};
    }catch(error){return fail('measure-failed','容量檢查未完成，原頁保留');}
  }
  const api=Object.freeze({inspect,plan});
  if(typeof module==='object'&&module.exports)module.exports=api;
  if(root.M)root.M.pagination=api;
})(typeof globalThis==='object'?globalThis:this);
