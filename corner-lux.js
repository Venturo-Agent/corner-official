/* ============================================================
   CORNER — LUX 互動層（只在首頁載入；純加法、不動版面）
   金色雙層游標 / 磁吸按鈕 / 封面引言逐行簾幕進場 / 見證引號進場
   條件：桌機精準游標 + 未開啟減少動態；不符合全部靜默跳過。
   ============================================================ */
(function(){
  var fine = window.matchMedia('(pointer:fine)').matches;
  var reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var wide = window.innerWidth > 1100;

  /* ---------- 封面引言：逐行簾幕進場（gsap 在才跑） ---------- */
  var lead = document.querySelector('.hero-lead');
  if(lead && window.gsap && !reduce){
    var lines = lead.innerHTML.split(/<br\s*\/?>/i);
    lead.innerHTML = lines.map(function(l){
      return '<span class="hl-line"><span class="hl-inner">' + l + '</span></span>';
    }).join('');
    gsap.fromTo('.hero-lead .hl-inner',
      {yPercent:115},
      {yPercent:0, duration:1.25, ease:'power4.out', stagger:.16, delay:.45});
  }

  /* ---------- 見證：大引號畫入 + 英文句逐字浮現 ---------- */
  var pull = document.querySelector('.testi .pull');
  if(pull && window.gsap && window.ScrollTrigger && !reduce){
    var words = pull.textContent.split(' ');
    pull.innerHTML = words.map(function(w){
      return '<span class="tw"><span class="twi">' + w + '</span></span>';
    }).join(' ');
    gsap.fromTo('.testi .twi', {yPercent:110, opacity:0}, {
      yPercent:0, opacity:1, duration:.9, ease:'power3.out', stagger:.05,
      scrollTrigger:{ trigger:'.testi', start:'top 70%', once:true }
    });
    var mark = document.querySelector('.testi .mark');
    if(mark) gsap.fromTo(mark, {scale:.4, opacity:0, transformOrigin:'left top'}, {
      scale:1, opacity:.35, duration:1.2, ease:'expo.out',
      scrollTrigger:{ trigger:'.testi', start:'top 70%', once:true }
    });
  }

  if(!fine || reduce || !wide) return;

  /* ---------- 磁吸按鈕（主按鈕 + 導覽 CTA） ---------- */
  document.querySelectorAll('.btn-primary, .nav-cta').forEach(function(btn){
    var raf = null;
    btn.addEventListener('mousemove', function(e){
      var r = btn.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width/2)) / (r.width/2);
      var dy = (e.clientY - (r.top + r.height/2)) / (r.height/2);
      if(raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function(){
        btn.style.transform = 'translate(' + (dx*5) + 'px,' + (dy*4) + 'px)';
      });
    });
    btn.addEventListener('mouseleave', function(){
      if(raf) cancelAnimationFrame(raf);
      btn.style.transform = '';
    });
  });
})();
