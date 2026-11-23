/* About paragraphs reuse the existing project hover sound and sound preference. */
(() => {
  const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  document.addEventListener('pointerover', event => {
    if (!hoverPointer.matches || event.pointerType === 'touch' || !(event.target instanceof Element)) return;
    const paragraph = event.target.closest('section[aria-label="Story"] p.type-body');
    if (!paragraph) return;
    if (event.relatedTarget instanceof Node && paragraph.contains(event.relatedTarget)) return;
    window.dispatchEvent(new Event('portfolio:about-paragraph-hover'));
  }, {passive: true});

  /* Chrome and Safari keep the shared AudioContext suspended until a real user
     gesture (click or key press) happens on the document — hovering alone never
     unlocks it, so paragraph hover sounds stay silent right after page load even
     when sound is enabled. Warm the audio engine once, immediately after the
     first real gesture, so hover sounds work from then on. */
  const warmAfterGesture = () => {
    window.removeEventListener('pointerdown', warmAfterGesture, true);
    window.removeEventListener('keydown', warmAfterGesture, true);
    window.dispatchEvent(new Event('portfolio:about-paragraph-hover'));
  };
  window.addEventListener('pointerdown', warmAfterGesture, true);
  window.addEventListener('keydown', warmAfterGesture, true);
})();
