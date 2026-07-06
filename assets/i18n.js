/* ============================================================
   CORNER — i18n 引擎（EN / 繁體中文）
   用法：
     HTML 標記 data-i18n="key"        → 換 textContent
           data-i18n-html="key"        → 換 innerHTML（可含 <br>/<span>）
           data-i18n-ph="key"          → 換 placeholder
           data-i18n-aria="key"        → 換 aria-label
     頁面自己的字串：在頁面 <script> 內呼叫
           Corner.addDict({ key:{ zh:'…', en:'…' } })
     切換：Corner.setLang('en' | 'zh')；狀態存 localStorage，預設 zh
   ============================================================ */
(function () {
  const STORE_KEY = "corner-lang";
  const DEFAULT = "zh";

  // ---- 全站共用字典（nav / footer / 通用）----
  const DICT = {
    // nav
    "nav.home":        { zh: "首頁",   en: "Home" },
    "nav.about":       { zh: "關於",   en: "About" },
    "nav.tours":       { zh: "行程",   en: "Tours" },
    "nav.destinations":{ zh: "目的地", en: "Destinations" },
    "nav.stories":     { zh: "旅誌",   en: "Stories" },
    "nav.contact":     { zh: "聯絡",   en: "Contact" },
    "nav.login":       { zh: "會員",   en: "Login" },
    "nav.search":      { zh: "搜尋",   en: "Search" },
    "nav.menu":        { zh: "選單",   en: "Menu" },

    // footer
    "foot.tagline":    { zh: "在轉角，遇見不在地圖中央的旅程。", en: "Find the journey that lives off the main road." },
    "foot.contact":    { zh: "聯絡我們", en: "Contact" },
    "foot.follow":     { zh: "追蹤我們", en: "Follow" },
    "foot.legal":      { zh: "法律", en: "Legal" },
    "foot.hours":      { zh: "週一 — 週五 · 10:00 – 17:00", en: "Mon — Fri · 10:00 – 17:00" },
    "foot.addr":       { zh: "台北市大同區重慶北路一段 67 號 8 樓-2", en: "8F-2, No.67, Sec.1, Chongqing N. Rd., Datong Dist., Taipei" },
    "foot.license":    { zh: "交觀甲字第 8800 號", en: "Travel Agency License No. 8800" },
    "foot.privacy":    { zh: "隱私權政策", en: "Privacy" },
    "foot.terms":      { zh: "服務條款", en: "Terms" },
    "foot.cookies":    { zh: "Cookie 政策", en: "Cookies" },
    "foot.rights":     { zh: "© 2026 角落旅行社 · 版權所有", en: "© 2026 Corner Travel · All rights reserved." },
    "foot.crafted":    { zh: "於台北的轉角細作", en: "Crafted in Taipei · 在轉角" },

    // 通用 CTA / 字
    "cta.allTours":    { zh: "看全部行程", en: "View All Tours" },
    "cta.viewAll":     { zh: "看全部", en: "View All" },
    "cta.explore":     { zh: "看行程", en: "Explore" },
    "cta.book":        { zh: "預約諮詢", en: "Enquire Now" },
    "common.from":     { zh: "每人", en: "From" },
    "common.days":     { zh: "天", en: "Days" },
    "common.soon":     { zh: "敬請期待", en: "Coming Soon" },
  };

  const listeners = [];

  function addDict(obj) { Object.assign(DICT, obj); }
  function onChange(fn) { listeners.push(fn); }

  function getLang() {
    // 網址 ?lang=en / ?lang=zh 優先（可分享指定語言的連結），並寫回偏好
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q === "en" || q === "zh") { localStorage.setItem(STORE_KEY, q); return q; }
    } catch (e) {}
    try { return localStorage.getItem(STORE_KEY) || DEFAULT; }
    catch (e) { return DEFAULT; }
  }
  function t(key) {
    const e = DICT[key];
    if (!e) return key;
    return e[getLang()] != null ? e[getLang()] : (e.zh || key);
  }

  function apply(root) {
    const scope = root || document;
    const lang = getLang();
    document.documentElement.lang = (lang === "en") ? "en" : "zh-Hant";
    document.documentElement.setAttribute("data-lang", lang);

    scope.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = DICT[el.getAttribute("data-i18n")];
      if (v && v[lang] != null) el.textContent = v[lang];
    });
    scope.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = DICT[el.getAttribute("data-i18n-html")];
      if (v && v[lang] != null) el.innerHTML = v[lang];
    });
    scope.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const v = DICT[el.getAttribute("data-i18n-ph")];
      if (v && v[lang] != null) el.setAttribute("placeholder", v[lang]);
    });
    scope.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const v = DICT[el.getAttribute("data-i18n-aria")];
      if (v && v[lang] != null) el.setAttribute("aria-label", v[lang]);
    });

    // 同步語言鈕狀態
    scope.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.classList.toggle("is-on", b.getAttribute("data-lang-btn") === lang);
    });
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "zh") return;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    apply(document);
    listeners.forEach((fn) => { try { fn(lang); } catch (e) {} });
  }

  window.Corner = window.Corner || {};
  Object.assign(window.Corner, { addDict, setLang, getLang, t, apply, onChange });
})();
