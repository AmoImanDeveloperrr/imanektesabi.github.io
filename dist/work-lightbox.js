/* Work cards: purple "Visit" tooltip + full-screen image lightbox for product cards */
(function () {
  "use strict";

  /* ---------- Purple gradient pill for "Visit" tooltip (big Hamhoush card) ---------- */
  var pillBound = null;
  function watchCursorPill() {
    var cur = document.querySelector(".case-study-hover-cursor");
    if (!cur) return;
    var pill = cur.querySelector(".case-study-hover-cursor__pill");
    if (!pill) return;
    if (pillBound === pill) return;
    pillBound = pill;
    var apply = function () {
      var label = (pill.textContent || "").trim().toLowerCase();
      if (label === "visit" || label === "view case study") cur.classList.add("cursor-pill-purple");
      else cur.classList.remove("cursor-pill-purple");
    };
    new MutationObserver(apply).observe(pill, { childList: true, characterData: true, subtree: true });
    new MutationObserver(apply).observe(cur, { attributes: true, attributeFilter: ["data-visible"] });
    apply();
  }


  /* ---------- Sokhan dark-mode hover swap ---------- */
  function bindHoverSwaps() {
    var cards = document.querySelectorAll('a[data-case-study-hover-cursor="true"]');
    cards.forEach(function (card) {
      if (card.getAttribute("data-hover-swap-bound") === "true") return;
      var titleEl = card.querySelector('[data-gen-label="title"]');
      var title = (titleEl && titleEl.textContent || "").trim();
      if (title !== "Sokhan") { card.setAttribute("data-hover-swap-bound", "true"); return; }
      var cover = card.querySelector('[data-gen-label="cover"]');
      var bg = cover && cover.querySelector('[style*="background-image"]');
      if (!bg) return;
      var main = "/work/sokhan/sokhan-main.png";
      var hover = "/work/sokhan/sokhan-hover.png";
      card.setAttribute("data-hover-swap-bound", "true");
      // crossfade layer
      var fade = document.createElement("div");
      fade.style.cssText = "position:absolute;inset:0;background-image:url(" + hover + ");background-position:center;background-repeat:no-repeat;background-size:cover;opacity:0;transition:opacity .45s ease;pointer-events:none;z-index:2";
      bg.parentElement.appendChild(fade);
      card.addEventListener("pointerenter", function () { fade.style.opacity = "1"; });
      card.addEventListener("pointerleave", function () { fade.style.opacity = "0"; });
      // keep lightbox using the main image
      bg.setAttribute("data-lightbox-src", main);
    });
  }

  /* ---------- Lightbox ---------- */
  function getCardImage(card) {
    var pinned = card.querySelector("[data-lightbox-src]");
    if (pinned) return pinned.getAttribute("data-lightbox-src");
    var bg = card.querySelector('[style*="background-image"]');
    if (bg) {
      var m = /url\(["']?([^"')]+)["']?\)/.exec(bg.style.backgroundImage || "");
      if (m) return m[1];
    }
    var img = card.querySelector("img");
    if (img) return img.currentSrc || img.getAttribute("src");
    return null;
  }

  var escHandler = null;

  function openLightbox(src) {
    if (!src) return;
    closeLightbox(true);
    var overlay = document.createElement("div");
    overlay.id = "work-lightbox-overlay";
    overlay.innerHTML =
      '<div id="work-lightbox-inner"><img alt="" src="' + src + '"/></div>' +
      '<button id="work-lightbox-close" aria-label="Close"></button>';
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () { overlay.setAttribute("data-open", "true"); });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay || e.target.id === "work-lightbox-close" || (e.target.closest && e.target.closest("#work-lightbox-close"))) closeLightbox();
    });
    escHandler = function (e) { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", escHandler);
  }

  function closeLightbox(silent) {
    var ov = document.getElementById("work-lightbox-overlay");
    if (escHandler) { document.removeEventListener("keydown", escHandler); escHandler = null; }
    if (!ov) return;
    var remove = function () { ov.remove(); };
    if (silent) { remove(); document.body.style.overflow = ""; return; }
    ov.setAttribute("data-open", "false");
    ov.addEventListener("transitionend", remove, { once: true });
    setTimeout(remove, 300);
    document.body.style.overflow = "";
  }

  function isVisitCard(card) {
    return ((card.getAttribute("data-case-study-hover-cursor-label") || "") + "").trim().toLowerCase() === "visit";
  }

  function isPdfCard(card) {
    var href = card.getAttribute("href") || "";
    return href.toLowerCase().endsWith(".pdf") || /^https?:/i.test(href);
  }

  function initCards() {
    var cards = document.querySelectorAll('a[data-case-study-hover-cursor="true"], article[data-case-study-hover-cursor="true"]');
    cards.forEach(function (card) {
      if (card.getAttribute("data-lightbox-bound") === "true") return;
      if (!card.querySelector('[data-gen-label="cover"]')) return;
      if (isVisitCard(card)) return; // big Hamhoush card keeps its link
      if (isPdfCard(card)) return; // Zigap case-study PDF (and any external link) keeps its link
      card.setAttribute("data-lightbox-bound", "true");
      card.addEventListener("click", function (e) {
        // don't hijack modifier clicks / keyboard-opened new tabs
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        openLightbox(getCardImage(card));
      });
    });
  }

  function init() {
    watchCursorPill();
    initCards();
    bindHoverSwaps();
    var mo = new MutationObserver(function () { initCards(); watchCursorPill(); bindHoverSwaps(); });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["data-case-study-hover-cursor-label"] });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
