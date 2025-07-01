import LocomotiveScroll from 'locomotive-scroll';

export function initializeLocomotive() {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 1,
    class: 'is-revealed',
    scrollbarContainer: false,
    scrollFromAnywhere: false,
    touchMultiplier: 2,
    firefoxMultiplier: 50,
    resetNativeScroll: true,
  });

  // Update scroll on window resize
  window.addEventListener('resize', () => {
    scroll.update();
  });

  // Refresh scroll after images load
  window.addEventListener('load', () => {
    scroll.update();
  });

  return scroll;
}