'use client';

import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let rx = cx;
    let ry = cy;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
    };

    const tick = () => {
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      rx += (cx - rx) * 0.18;
      ry += (cy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const setState = (s: string | null) => {
      dot.classList.remove('s-link', 's-view', 's-drag');
      ring.classList.remove('s-link', 's-view', 's-drag');
      if (s) {
        dot.classList.add(`s-${s}`);
        ring.classList.add(`s-${s}`);
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const explicit = target.closest<HTMLElement>('[data-cur]');
      if (explicit) {
        setState(explicit.dataset.cur || null);
        return;
      }
      if (target.closest('a,button,.stack__item,.faq__q,.work')) {
        setState('link');
        return;
      }
      setState(null);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cur" aria-hidden="true" />
      <div ref={ringRef} className="cur-ring" aria-hidden="true" />
    </>
  );
}
