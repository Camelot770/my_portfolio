'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

const StackScene = dynamic(
  () => import('@/components/scenes/WebGLScenes').then((m) => m.StackScene),
  { ssr: false }
);

const ITEMS: Array<{ label: React.ReactNode; meta: string }> = [
  {
    label: (
      <>
        <em>iOS</em> / Swift + SwiftUI
      </>
    ),
    meta: 'Нативно · AppStore',
  },
  {
    label: (
      <>
        <em>MAX</em> Mini Apps + боты
      </>
    ),
    meta: 'Приоритетная платформа',
  },
  {
    label: (
      <>
        <em>Telegram</em> WebApp + Bot API
      </>
    ),
    meta: 'Mini Apps · платежи',
  },
  {
    label: (
      <>
        <em>Next.js</em> + React
      </>
    ),
    meta: 'SSR · Edge · TypeScript',
  },
  {
    label: (
      <>
        <em>Node.js</em> / Python / FastAPI
      </>
    ),
    meta: 'API · интеграции',
  },
  {
    label: (
      <>
        <em>Prisma</em> + Postgres / SQLite
      </>
    ),
    meta: 'OLTP · хранилища',
  },
  {
    label: (
      <>
        <em>ЮKassa</em> + 1С-МИС
      </>
    ),
    meta: 'Платежи · интеграции',
  },
];

export function StackV2() {
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stack" id="stack">
      <div className="stack__canvas">
        <StackScene />
      </div>
      <div className="stack__content">
        <div>
          <div className="sec__tag">03 · Инструментарий</div>
          <h2 className="sec__head r-mask" ref={headRef}>
            <span className="r-in">
              <em>Стек</em>, который мы довели до автоматизма
            </span>
          </h2>
        </div>
        <div className="stack__r">
          <div className="stack__list">
            {ITEMS.map((it, i) => (
              <div className="stack__item" key={i}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="t">{it.label}</span>
                <span className="meta">{it.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
