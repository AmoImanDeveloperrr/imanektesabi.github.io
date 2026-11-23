/* Email copy-to-clipboard — survives React hydration (delegated at document level) */
(function () {
  var EMAIL = "itsimanuiux@gmail.com";

  function showToast() {
    var t = document.createElement("span");
    t.textContent = "Copied!";
    t.setAttribute("data-copy-toast", "true");
    t.style.cssText =
      "position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(8px);" +
      "background:#242424eb;color:#fff;border:1px solid #ffffff2e;border-radius:12px;" +
      "padding:8px 14px;font-size:14px;font-weight:500;z-index:2147483000;opacity:0;" +
      "transition:opacity .2s ease,transform .2s ease;pointer-events:none";
    document.body.appendChild(t);
    requestAnimationFrame(function () {
      t.style.opacity = "1";
      t.style.transform = "translateX(-50%) translateY(0)";
    });
    setTimeout(function () {
      t.style.opacity = "0";
      t.style.transform = "translateX(-50%) translateY(8px)";
      setTimeout(function () { t.remove(); }, 300);
    }, 1600);
  }

  function fallbackCopy() {
    try {
      var a = document.createElement("textarea");
      a.value = EMAIL;
      a.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.appendChild(a);
      a.select();
      document.execCommand("copy");
      a.remove();
      showToast();
    } catch (e) {}
  }

  document.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[data-gen-label="email"], a[href^="mailto:' + EMAIL + '"]') : null;
    if (!a) return;
    ev.preventDefault();
    // avoid double-fire if another handler (React or inline) already handled it
    if (a.dataset.copyHandled === "true") { a.dataset.copyHandled = "false"; return; }
    a.dataset.copyHandled = "true";
    setTimeout(function () { a.dataset.copyHandled = "false"; }, 500);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(showToast).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }, false);
})();
