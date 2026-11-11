/* 原生貼紙快照：只保存經白名單篩選的樹與 computed CSS，不接受任意 HTML。 */
(function () {
  'use strict'
  const LIMIT = { nodes: 500, depth: 24, text: 100000, bytes: 4 * 1024 * 1024 }
  const TAGS = new Set('div span p br strong b em i u s small sup sub figure figcaption section article header footer h1 h2 h3 h4 ul ol li img svg g path rect circle ellipse line polyline polygon text tspan'.split(' '))
  const SVG = new Set('svg g path rect circle ellipse line polyline polygon text tspan'.split(' '))
  const STYLES = new Set(('display position left top right bottom width height min-width min-height max-width max-height box-sizing margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left overflow overflow-x overflow-y color background-color background-image background-size background-position background-repeat background-blend-mode opacity mix-blend-mode isolation font-family font-size font-weight font-style font-stretch font-variant line-height letter-spacing word-spacing text-align text-decoration-line text-decoration-color text-decoration-style text-transform text-indent text-shadow white-space word-break overflow-wrap writing-mode vertical-align direction text-orientation border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style border-top-color border-right-color border-bottom-color border-left-color border-top-left-radius border-top-right-radius border-bottom-right-radius border-bottom-left-radius box-shadow outline-width outline-style outline-color outline-offset clip-path transform translate scale rotate transform-origin object-fit object-position filter flex flex-direction flex-wrap flex-grow flex-shrink flex-basis align-items align-self align-content justify-content gap row-gap column-gap grid-template-columns grid-template-rows grid-column grid-row z-index fill fill-opacity stroke stroke-width stroke-opacity stroke-linecap stroke-linejoin paint-order mask-image mask-size mask-position mask-repeat mask-origin mask-clip mask-mode mask-composite').split(' '))
  const ATTRS = new Set('viewBox preserveAspectRatio d points x y x1 y1 x2 y2 cx cy r rx ry width height dx dy textLength lengthAdjust fill stroke stroke-width transform'.split(' '))
  const ESC = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
  const omitted = node => node.matches?.('button,input,textarea,select,script,style,iframe,object,embed,video,audio,.layer-handle,.layer-delete,.layer-resize,.object-resize,.layout-handle,.layout-delete,.layout-resize,.snap-guide,.smart-guide,[data-editor-handle]')
  function safeSource(value) {
    if (typeof value !== 'string' || !value || /[\u0000-\u0020\\<>]/.test(value)) return ''
    if (/^data:/i.test(value)) return /^data:image\/(?:png|jpe?g|webp|gif|avif);base64,[a-z0-9+/=]+$/i.test(value) ? value : ''
    if (/^(?:javascript|vbscript|file):/i.test(value)) return ''
    if (/^[a-z][a-z0-9+.-]*:/i.test(value)) return /^(?:https?:|blob:https?:)/i.test(value) ? value : ''
    return value.startsWith('#') ? '' : value
  }
  function safeCSS(property, value) {
    if (!STYLES.has(property) || typeof value !== 'string' || value.length > 16384 || /[;{}<>\u0000-\u0008]/.test(value) || /expression\s*\(|@|\\/i.test(value)) return ''
    if (/url\s*\(/i.test(value)) {
      if (property !== 'background-image') return ''
      let valid = true, count = 0
      const rest = value.replace(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s)]*))\s*\)/gi, (_, a, b, c) => { count++; if (!safeSource(a || b || c || '')) valid = false; return '' })
      if (!valid || !count || /url\s*\(/i.test(rest)) return ''
    }
    return value
  }
  function budget() {
    let nodes = 0, bytes = 0
    return (depth, text = '', node = false) => { if ((node && ++nodes > LIMIT.nodes) || depth > LIMIT.depth || (bytes += text.length * 2) > LIMIT.bytes) throw new Error('物件太複雜或圖片過大，無法複製') }
  }
  function serialize(element, {strict = false} = {}) {
    if (!element || element.nodeType !== 1 || omitted(element)) throw new Error('請選取可複製的物件')
    const check = budget(), getStyle = element.ownerDocument?.defaultView?.getComputedStyle || globalThis.getComputedStyle
    function walk(node, depth) {
      if (node.nodeType === 3) { const value = node.textContent || ''; if (value.length > LIMIT.text) throw new Error('文字過長，無法複製'); check(depth,value,true); return value }
      if (node.nodeType !== 1 || omitted(node)) return null
      const tag = node.localName?.toLowerCase()
      if (!TAGS.has(tag)) { if(strict)throw new Error('選取內容含尚未支援的圖形，未複製任何物件'); return null }
      check(depth,'',true)
      const style = {}, attrs = {}, computed = getStyle.call(node.ownerDocument?.defaultView || globalThis,node)
      if(strict){
        for(const pseudo of ['::before','::after']){const ps=getStyle.call(node.ownerDocument?.defaultView || globalThis,node,pseudo),content=ps?.getPropertyValue('content');if(content && content!=='none' && content!=='normal' && ps.getPropertyValue('display')!=='none' && ps.getPropertyValue('visibility')!=='hidden' && ps.getPropertyValue('opacity')!=='0')throw new Error('選取內容含偽元素裝飾，未複製任何物件')}
        for(const attr of ['fill','stroke','filter','clip-path','mask','href','xlink:href'])if(/url\s*\(|^#/.test(node.getAttribute(attr)||'') && !/^#[0-9a-f]{3,8}$/i.test(node.getAttribute(attr)||''))throw new Error('選取內容含 SVG 引用，未複製任何物件');
        for(const prop of ['clip-path','mask-image','filter'])if(/url\s*\(/i.test(computed.getPropertyValue(prop)||''))throw new Error('選取內容含外部效果引用，未複製任何物件');
      }
      for (const property of STYLES) { const value = safeCSS(property,computed.getPropertyValue(property)); if (value) {check(depth,value);style[property]=value} }
      // The edit-stage img rule also outlines an unselected photo inside a frame.
      // Recognise that precise rule, not arbitrary authored outlines or borders.
      const outlineProps=['outline-width','outline-style','outline-color','outline-offset']
      const rgba=(computed.getPropertyValue('outline-color').match(/^rgba?\(([^)]+)\)$/)?.[1]||'').trim().split(/[,\s/]+/).map(Number)
      const imageChrome=tag==='img'&&node.closest?.('#stage')&&node.ownerDocument?.body?.classList.contains('edit')
        && !['outline',...outlineProps].some(property=>node.style?.getPropertyValue(property))
        && computed.getPropertyValue('outline-style')==='dashed'&&parseFloat(computed.getPropertyValue('outline-width'))===3&&parseFloat(computed.getPropertyValue('outline-offset'))===-3
        && rgba[0]===201&&rgba[1]===146&&rgba[2]===28&&rgba[3]>.66&&rgba[3]<.67
      // Selection outlines are editor chrome; the actual design border stays intact.
      if (depth === 0 || imageChrome || node.matches?.('.layout-selected,.native-text-selected,.selected,.text-editing')) for (const property of outlineProps) delete style[property]
      if (node.hasAttribute?.('data-k') || node.hasAttribute?.('data-layer-text') || node.getAttribute('data-clipboard-field') === 'text') attrs['data-clipboard-field'] = 'text'
      if (tag === 'img') { const src = safeSource(node.currentSrc || node.getAttribute('src')); if (src) {check(depth,src);attrs.src=src} attrs.alt=String(node.getAttribute('alt') || '').slice(0,1000) }
      if (SVG.has(tag)) for (const attr of ATTRS) { const value=node.getAttribute(attr); if (value && value.length<=20000 && !/[<>;{}]/.test(value) && !/url\s*\(|javascript:|expression/i.test(value)) {check(depth,value);attrs[attr]=value} }
      // Root geometry belongs to the pasted object wrapper, not its original stage coordinates.
      if (depth===0) {style.position='relative';style.left='0px';style.top='0px';style.right='auto';style.bottom='auto';style['margin-left']='0px';style['margin-top']='0px';style.width=Math.max(1,element.offsetWidth||parseFloat(computed.getPropertyValue('width'))||1)+'px';style.height=Math.max(1,element.offsetHeight||parseFloat(computed.getPropertyValue('height'))||1)+'px';style.translate='none'}
      return {tag,style,attrs,children:[...node.childNodes].map(child=>walk(child,depth+1)).filter(child=>child!==null)}
    }
    return {version:1,width:Math.max(1,element.offsetWidth||1),height:Math.max(1,element.offsetHeight||1),node:walk(element,0)}
  }
  function html(tree) {
    if (!tree || tree.version!==1 || !tree.node) throw new Error('無法辨識複製的物件')
    const check=budget(), seen=new Set()
    function build(node,depth) {
      if(typeof node==='string'){if(node.length>LIMIT.text)throw new Error('文字過長');check(depth,node,true);return ESC(node)}
      if(!node || typeof node!=='object' || seen.has(node) || !TAGS.has(node.tag))throw new Error('無效的物件結構')
      seen.add(node);check(depth,'',true)
      const styles=[],attrs=[]
      for(const [key,value] of Object.entries(node.style||{})){const safe=safeCSS(key,value);if(safe){check(depth,safe);styles.push(key+':'+safe)}}
      for(const [key,value] of Object.entries(node.attrs||{})){
        if(typeof value!=='string')continue
        if(key==='data-clipboard-field'&&value==='text')attrs.push('data-clipboard-field="text"')
        else if(node.tag==='img'&&key==='src'){const src=safeSource(value);if(src){check(depth,src);attrs.push('src="'+ESC(src)+'"')}}
        else if(node.tag==='img'&&key==='alt'){check(depth,value);attrs.push('alt="'+ESC(value.slice(0,1000))+'"')}
        else if(SVG.has(node.tag)&&ATTRS.has(key)&&value.length<=20000&&!/[<>;{}]/.test(value)&&!/url\s*\(|javascript:|expression/i.test(value)){check(depth,value);attrs.push(key+'="'+ESC(value)+'"')}
      }
      if(styles.length)attrs.push('style="'+ESC(styles.join(';'))+'"')
      const children=node.children||[];if(!Array.isArray(children))throw new Error('無效的子物件')
      const start='<'+node.tag+(attrs.length?' '+attrs.join(' '):'')+'>'
      return start+(['img','br'].includes(node.tag)?'':children.map(child=>build(child,depth+1)).join('')+'</'+node.tag+'>')
    }
    return build(tree.node,0)
  }
  M.clipboard={serialize,html,limits:Object.freeze({...LIMIT})}
})()
