'use client';

import { useEffect, useRef } from 'react';

const tokens = [
  { text: 'Swift', sep: '·' },
  { text: 'SwiftUI', sep: '▲' },
  { text: 'Next.js', sep: '·' },
  { text: 'React', sep: '▲' },
  { text: 'MAX Mini Apps', sep: '·' },
  { text: 'Telegram WebApp', sep: '▲' },
  { text: 'Node.js', sep: '·' },
  { text: 'Python', sep: '▲' },
  { text: 'TypeScript', sep: '·' },
  { text: 'FastAPI', sep: '▲' },
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let mx = 0;
    let raf = 0;
    const tick = () => {
      mx -= 0.6;
      const half = track.scrollWidth / 2;
      if (mx < -half) mx = 0;
      track.style.transform = `translateX(${mx}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  const segment = (
    <>
      {tokens.map((t, i) => (
        <span key={i} className="shrink-0">
          {t.text} <em className="mx-2 md:mx-3">·</em>{' '}
          {i < tokens.length - 1 ? <span className="sep">{t.sep}</span> : null}
        </span>
      ))}
    </>
  );

  return (
    <div className="marq" aria-hidden="true">
      <div ref={trackRef} className="marq__track">
        {segment}
        {segment}
      </div>
    </div>
  );
}
