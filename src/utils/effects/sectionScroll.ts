import { animate } from 'motion';

export function initSectionScroll() {
  const root = document.documentElement;
  const sections = Array.from(document.querySelectorAll<HTMLElement>(
    '#main-content > section, body > footer'
  ));
  if (!document.getElementById('hero')) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  let animation: { stop: () => void } | undefined;
  let gestureTimer: ReturnType<typeof setTimeout> | undefined;
  let gestureActive = false;
  let target = window.scrollY;
  let direction = 1;

  const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);
  const clamp = (value: number) => Math.max(0, Math.min(value, maxScroll()));

  function stopScrolling() {
    clearTimeout(gestureTimer);
    gestureActive = false;
    animation?.stop();
    animation = undefined;
    root.removeAttribute('data-section-scroll-active');
    target = window.scrollY;
  }

  function animateScroll() {
    animation?.stop();
    root.setAttribute('data-section-scroll-active', '');
    animation = animate(window.scrollY, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => window.scrollTo({ top: value, behavior: 'instant' }),
      onComplete: () => {
        animation = undefined;
        root.removeAttribute('data-section-scroll-active');
        target = window.scrollY;
      },
    });
  }

  function nextStop(position: number, scrollDirection: number) {
    const headerOffset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    const ranges = sections.map((section) => {
      const bounds = section.getBoundingClientRect();
      const top = bounds.top + window.scrollY;
      const start = clamp(top - headerOffset);
      // Tall sections can stop anywhere that keeps the viewport inside them.
      const end = Math.max(start, clamp(top + bounds.height - window.innerHeight));
      return { start, end };
    });

    const current = ranges.find(({ start, end }) =>
      position >= start - 2 && position <= end + 2
    );
    const pageDistance = (window.innerHeight - headerOffset) * 0.9;

    // A single gesture pages through tall content, then advances to the next section.
    if (current) {
      if (scrollDirection > 0 && position < current.end - 2) {
        return Math.min(position + pageDistance, current.end);
      }
      if (scrollDirection < 0 && position > current.start + 2) {
        return Math.max(position - pageDistance, current.start);
      }
    }

    return scrollDirection > 0
      ? ranges.find(({ start }) => start > position + 2)?.start ?? maxScroll()
      : ranges.reverse().find(({ end }) => end < position - 2)?.end ?? 0;
  }

  function onWheel(event: WheelEvent) {
    if (event.defaultPrevented || !event.cancelable || event.ctrlKey || event.shiftKey ||
      Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY ||
      reducedMotion.matches || !finePointer.matches) return;

    // Leave form fields and scrollable demos in control of their own input.
    let element = event.target instanceof Element ? event.target : null;
    if (element?.closest('input, textarea, select, [contenteditable="true"]')) {
      stopScrolling();
      return;
    }
    while (element && element !== document.body) {
      const overflow = getComputedStyle(element).overflowY;
      const canScroll = /(auto|scroll)/.test(overflow) &&
        element.scrollHeight > element.clientHeight;
      const hasRoom = event.deltaY > 0
        ? element.scrollTop + element.clientHeight < element.scrollHeight - 1
        : element.scrollTop > 0;
      if (canScroll && hasRoom) {
        stopScrolling();
        return;
      }
      element = element.parentElement;
    }

    event.preventDefault();
    const nextDirection = Math.sign(event.deltaY);
    const continuingGesture = gestureActive && direction === nextDirection;
    gestureActive = true;
    clearTimeout(gestureTimer);
    gestureTimer = setTimeout(() => { gestureActive = false; }, 350);
    if (continuingGesture && animation) return;

    // A fresh gesture can advance again mid-animation; reversing starts from the visible position.
    const position = animation && direction === nextDirection ? target : window.scrollY;
    direction = nextDirection;
    target = clamp(nextStop(position, direction));
    animateScroll();
  }

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('keydown', stopScrolling);
  window.addEventListener('pointerdown', stopScrolling, { passive: true });
  window.addEventListener('resize', stopScrolling);
  reducedMotion.addEventListener('change', stopScrolling);

  return () => {
    stopScrolling();
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('keydown', stopScrolling);
    window.removeEventListener('pointerdown', stopScrolling);
    window.removeEventListener('resize', stopScrolling);
    reducedMotion.removeEventListener('change', stopScrolling);
  };
}
