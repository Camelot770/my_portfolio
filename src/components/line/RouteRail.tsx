'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * The page is one route: a line runs through every station heading in <main>,
 * lights up behind the reader, and a train rides at the reading position.
 */
export function RouteRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const rail = railRef.current;
    const main = rail?.parentElement;
    if (!rail || !main) return;

    let rings: HTMLElement[] = [];
    let ys: number[] = [];
    let top = 0;
    let height = 0;
    let originY = 0;
    let ready = false;
    let litCount = -1;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!ready) return;
      const head = window.scrollY + window.innerHeight * 0.5 - originY;
      const p = Math.min(1, Math.max(0, head / height));
      rail.style.setProperty('--p', p.toFixed(4));
      rail.style.setProperty('--y', `${(p * height).toFixed(1)}px`);
      rail.classList.toggle('is-end', p <= 0 || p >= 0.995);
      let lit = 0;
      for (let i = 0; i < ys.length; i += 1) if (ys[i] <= head + 1) lit = i + 1;
      if (lit !== litCount) {
        litCount = lit;
        rings.forEach((r, i) => {
          r.classList.toggle('is-lit', i < lit);
          r.classList.toggle('is-here', i === lit - 1);
        });
      }
    };

    const measure = () => {
      rings = Array.from(main.querySelectorAll<HTMLElement>('[data-station]'));
      if (rings.length < 2) {
        ready = false;
        rail.classList.remove('is-ready');
        return;
      }
      const mainRect = main.getBoundingClientRect();
      const mainTop = mainRect.top + window.scrollY;
      const centers = rings.map((r) => {
        const b = r.getBoundingClientRect();
        return { x: b.left + b.width / 2 - mainRect.left, y: b.top + b.height / 2 + window.scrollY - mainTop };
      });
      top = centers[0].y;
      height = Math.max(1, centers[centers.length - 1].y - top);
      originY = mainTop + top;
      ys = centers.map((c) => c.y - top);
      rail.style.left = `${centers[0].x}px`;
      rail.style.top = `${top}px`;
      rail.style.height = `${height}px`;
      ready = true;
      litCount = -1;
      rail.classList.add('is-ready');
      update();
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    let measureRaf = 0;
    const scheduleMeasure = () => {
      if (measureRaf) cancelAnimationFrame(measureRaf);
      measureRaf = requestAnimationFrame(() => {
        measureRaf = 0;
        measure();
      });
    };

    scheduleMeasure();
    const ro = new ResizeObserver(scheduleMeasure);
    ro.observe(main);
    document.fonts?.ready.then(scheduleMeasure).catch(() => undefined);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', scheduleMeasure);

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', scheduleMeasure);
      if (raf) cancelAnimationFrame(raf);
      if (measureRaf) cancelAnimationFrame(measureRaf);
    };
  }, [pathname]);

  return (
    <div ref={railRef} className="rail" aria-hidden="true">
      <div className="rail__base" />
      <div className="rail__fill" />
      <div className="rail__train" />
    </div>
  );
}
