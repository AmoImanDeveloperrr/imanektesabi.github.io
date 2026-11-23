/* Static-export compatibility: route clicks load the corresponding saved page.
   All original portfolio interactions continue to run in the bundled client. */
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === '_blank' || link.hasAttribute('download')) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname === location.pathname) return;
  const originalRoutes = ['/play/gravity', '/play/codex-pet', '/play/node-builder', '/writing/part-time-job-or-build-career', '/writing/autodesk-internship-experience'];
  if (originalRoutes.includes(url.pathname.replace(/\/$/, ''))) url.href = 'https://www.rishiashar.com' + url.pathname + url.search + url.hash;
  event.preventDefault();
  event.stopImmediatePropagation();
  location.assign(url.href);
}, true);

// A static replica cannot validate passwords against the author's private server.
document.addEventListener('submit', event => {
  const form = event.target;
  if (!form.matches('form[action="/api/case-study-unlock"]')) return;
  event.preventDefault();
  let notice = form.querySelector('[role="status"]');
  if (!notice) {
    notice = document.createElement('p');
    notice.setAttribute('role', 'status');
    notice.className = 'type-small mt-4';
    form.append(notice);
  }
  notice.textContent = 'Unlocking this case study requires the original portfolio server.';
}, true);
