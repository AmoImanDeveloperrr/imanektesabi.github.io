/* Load one responsive portrait for the current theme, without preloading both. */
(() => {
  const root = document.documentElement;
  const syncPortrait = () => {
    const image = document.querySelector('img[data-about-portrait]');
    if (!image) return false;
    const theme = root.classList.contains('dark') ? 'dark' : 'light';
    const srcset = image.getAttribute(`data-${theme}-srcset`);
    if (!srcset || (image.dataset.portraitTheme === theme && image.hasAttribute('srcset'))) return true;
    image.dataset.portraitTheme = theme;
    image.setAttribute('srcset', srcset);
    image.setAttribute('src', `/portraits/iman-portrait-${theme}-860.webp`);
    return true;
  };
  new MutationObserver(syncPortrait).observe(root, {
    attributes: true,
    attributeFilter: ['class', 'data-theme-mode']
  });
  const waitingForImage = new MutationObserver(() => {
    if (syncPortrait()) waitingForImage.disconnect();
  });
  waitingForImage.observe(document, {childList: true, subtree: true});
  document.addEventListener('DOMContentLoaded', syncPortrait, {once: true});
  window.addEventListener('pageshow', syncPortrait);
  if (syncPortrait()) waitingForImage.disconnect();
})();
