'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';

const StackScene = dynamic(
  () => import('@/components/scenes/WebGLScenes').then((m) => m.StackScene),
  { ssr: false }
);

export function StackV2() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const { copy } = useCopy();
  const ITEMS = copy.stack.items;

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
          <div className="sec__tag">{copy.stack.tag}</div>
          <h2 className="sec__head r-mask" ref={headRef}>
            <span className="r-in">
              <em>{copy.stack.headPlain.replace(/[,.]$/, '')}</em>
              {copy.stack.headPlain.endsWith(',') ? ', ' : ' '}
              {copy.stack.headTitle}
            </span>
          </h2>
        </div>
        <div className="stack__r">
          <div className="stack__list">
            {ITEMS.map((it, i) => (
              <div className="stack__item" key={i}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="t">
                  <em>{it.labelEm}</em>
                  {it.labelRest}
                </span>
                <span className="meta">{it.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
