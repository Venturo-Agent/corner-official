/* ============================================================
   CORNER — 共用站台行為
   1. 注入 navbar + footer（SSOT：改這裡全站同步、不在頁面複製）
   2. 互動：手機抽屜、語言切換、scroll reveal、active 導覽態
   依賴 i18n.js 先載入。頁面用 <body data-page="home|about|tours|tour|contact|privacy">
   ============================================================ */
(function () {
  const page = document.body.getAttribute("data-page") || "";
  const A = "assets"; // 同層 assets

  // ---------- icon（單一線寬 SVG，禁 emoji 鐵律 #2）----------
  const ico = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.2-5.2m0 0A7.5 7.5 0 1 0 5.2 5.2a7.5 7.5 0 0 0 10.6 10.6Z"/></svg>',
    user:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.1a7.5 7.5 0 0 1 15 0A17.9 17.9 0 0 1 12 21.75c-2.68 0-5.22-.58-7.5-1.65Z"/></svg>',
    arrow:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>',
  };

  const links = [
    { key: "nav.home",         href: "index.html",   id: "home" },
    { key: "nav.about",        href: "about.html",   id: "about" },
    { key: "nav.tours",        href: "tours.html",   id: "tours" },
    { key: "nav.destinations", href: "tours.html",   id: "destinations" },
    { key: "nav.stories",      href: "about.html#stories", id: "stories" },
    { key: "nav.contact",      href: "contact.html", id: "contact" },
  ];

  // ---------- Navbar ----------
  function navHTML() {
    const items = links.map(l =>
      `<a class="nav-link${l.id === page ? " is-active" : ""}" href="${l.href}" data-i18n="${l.key}">${window.Corner.t(l.key)}</a>`
    ).join("");
    const drawer = links.map(l =>
      `<a href="${l.href}" data-i18n="${l.key}">${window.Corner.t(l.key)}</a>`
    ).join("") +
      `<a href="contact.html" data-i18n="nav.login">${window.Corner.t("nav.login")}</a>`;

    return `
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-logo" href="index.html" aria-label="Corner Travel">
          <img src="${A}/corner_logo.png" alt="Corner Travel" />
        </a>
        <nav class="nav-menu">${items}</nav>
        <div class="nav-utils">
          <button class="icon-btn" data-i18n-aria="nav.search" aria-label="Search">${ico.search}</button>
          <div class="lang-toggle">
            <button data-lang-btn="en">EN</button><span class="sep">/</span><button data-lang-btn="zh">繁</button>
          </div>
          <a class="nav-link" href="contact.html" style="display:inline-flex;align-items:center;gap:8px">
            <span style="width:18px;height:18px;display:inline-flex">${ico.user}</span>
            <span data-i18n="nav.login">${window.Corner.t("nav.login")}</span>
          </a>
          <button class="nav-burger" data-i18n-aria="nav.menu" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="nav-drawer">${drawer}</div>
    </header>`;
  }

  // ---------- Footer ----------
  function footHTML() {
    return `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="${A}/corner_logo.png" alt="Corner Travel" />
          <p class="text-muted" style="font-size:14px;line-height:1.9;max-width:30em" data-i18n="foot.tagline">${window.Corner.t("foot.tagline")}</p>
          <address style="margin-top:24px">
            corner travel · 角落旅行社<br/>
            <span data-i18n="foot.addr">${window.Corner.t("foot.addr")}</span><br/>
            <span data-i18n="foot.license">${window.Corner.t("foot.license")}</span>
          </address>
        </div>
        <div>
          <div class="col-title" data-i18n="foot.contact">${window.Corner.t("foot.contact")}</div>
          <ul>
            <li><a href="mailto:sale@cornertravel.com.tw">sale@cornertravel.com.tw</a></li>
            <li><a href="tel:+886277516051">02-7751-6051</a></li>
            <li data-i18n="foot.hours">${window.Corner.t("foot.hours")}</li>
          </ul>
        </div>
        <div>
          <div class="col-title" data-i18n="foot.follow">${window.Corner.t("foot.follow")}</div>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Threads</a></li>
          </ul>
        </div>
        <div>
          <div class="col-title" data-i18n="foot.legal">${window.Corner.t("foot.legal")}</div>
          <ul>
            <li><a href="privacy.html" data-i18n="foot.privacy">${window.Corner.t("foot.privacy")}</a></li>
            <li><a href="privacy.html" data-i18n="foot.terms">${window.Corner.t("foot.terms")}</a></li>
            <li><a href="privacy.html" data-i18n="foot.cookies">${window.Corner.t("foot.cookies")}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bar">
        <div class="inner">
          <span data-i18n="foot.rights">${window.Corner.t("foot.rights")}</span>
          <span data-i18n="foot.crafted">${window.Corner.t("foot.crafted")}</span>
        </div>
      </div>
    </footer>`;
  }

  // ---------- 注入 ----------
  function inject() {
    const navMount = document.querySelector("[data-mount=nav]");
    const footMount = document.querySelector("[data-mount=footer]");
    if (navMount) navMount.outerHTML = navHTML();
    if (footMount) footMount.outerHTML = footHTML();
  }

  // ---------- 互動 ----------
  function wire() {
    // 語言鈕
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.addEventListener("click", () => window.Corner.setLang(b.getAttribute("data-lang-btn")));
    });
    // 手機抽屜
    const burger = document.querySelector(".nav-burger");
    if (burger) {
      burger.addEventListener("click", () => {
        const open = document.body.classList.toggle("menu-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.querySelectorAll(".nav-drawer a").forEach((a) =>
        a.addEventListener("click", () => document.body.classList.remove("menu-open")));
    }
    // scroll reveal（進場一次、reduced-motion 由 CSS 接手）
    // 抽成 Corner._observeReveals：資料驅動頁面語言切換重畫後可再呼叫，接上新元素
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      window.Corner._observeReveals = function () {
        document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => io.observe(el));
      };
    } else {
      window.Corner._observeReveals = function () {
        document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
      };
    }
    window.Corner._observeReveals();
  }

  function start() {
    inject();
    wire();
    window.Corner.apply(document);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
