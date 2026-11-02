import { useEffect, useRef, useState } from 'react';
import { useAnimate, useInView } from 'motion/react';

const FIND = '.analysis-mode-action';
const CARET = '.analysis-mode-caret';
const VERIFY = '.setup-submit';
const option = (n: number) => `#analysis-mode-options button:nth-child(${n})`;
const followUp = (n: number) => `.followups button:nth-child(${n})`;

class Stopped extends Error {}

/**
 * Plays the Co-Pilot demo on a loop by tapping its real controls:
 * Find Trade -> follow-up -> Verify Trade -> follow-up -> repeat.
 * Pauses while off screen and stops for good once the visitor interacts.
 */
export function useAutoplay() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { amount: 0.35 });
  const visible = useRef(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    visible.current = inView;
  }, [inView]);

  useEffect(() => {
    if (stopped) return;
    let cancelled = false;

    const find = (selector: string) =>
      scope.current?.querySelector<HTMLButtonElement>(selector) ?? null;
    const ready = (selector: string) => () => {
      const element = find(selector);
      return !!element && !element.disabled;
    };
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) =>
        setTimeout(() => (cancelled ? reject(new Stopped()) : resolve()), ms)
      );
    const until = async (check: () => boolean) => {
      while (!(visible.current && check())) await wait(150);
    };
    const tap = async (selector: string, after: number) => {
      await until(ready(selector));
      await animate(
        selector,
        { scale: [1, 0.93, 1] },
        { duration: 0.45, ease: 'easeInOut' }
      );
      if (cancelled) throw new Stopped();
      find(selector)?.click();
      await wait(after);
    };
    const switchMode = async (n: number) => {
      await tap(CARET, 800);
      await tap(option(n), 1500);
    };
    const ask = async (n: number) => {
      await tap(followUp(n), 400);
      await until(ready(followUp(n)));
      await wait(4000);
    };

    const loop = async () => {
      if (find('#verify-panel')) await switchMode(1);
      for (;;) {
        await wait(1500);
        await tap(FIND, 400);
        await until(ready(followUp(1)));
        await wait(3000);
        await ask(1);

        await switchMode(2);
        await tap(VERIFY, 400);
        await until(ready(followUp(2)));
        await wait(3000);
        await ask(2);

        await switchMode(1);
      }
    };

    loop().catch((error) => {
      if (!(error instanceof Stopped)) throw error;
    });
    return () => {
      cancelled = true;
    };
  }, [stopped, animate, scope]);

  return { scope, stop: () => setStopped(true) };
}
