'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';

const AboutScene = dynamic(
  () => import('@/components/scenes/WebGLScenes').then((m) => m.AboutScene),
  { ssr: false }
);

export function AboutV2() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { copy } = useCopy();
  const TEXT_HTML = copy.about.manifestoHtml;
  const CELLS = copy.about.cells;

  useEffect(() => {
    const container = textRef.current;
    if (!container) return;
    const words = container.querySelectorAll<HTMLSpanElement>('.w');
    if (!words.length) return;

    const onScroll = () => {
      const r = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - r.top / (vh * 0.5)));
      const cut = Math.floor(progress * words.length);
      words.forEach((w, i) => {
        if (i > cut) w.classList.add('dim');
        else w.classList.remove('dim');
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [TEXT_HTML]);

  const html = TEXT_HTML.split(/(\s+)/)
    .map((w) => (/^\s+$/.test(w) ? w : `<span class="w">${w}</span>`))
    .join('');

  return (
    <section className="about" id="about">
      <div className="about__canvas">
        <AboutScene />
      </div>
      <div className="about__content">
        <div className="sec__tag">{copy.about.tag}</div>
        <p
          className="about__text"
          ref={textRef}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="about__grid">
          {CELLS.map((c, i) => (
            <div className="about__cell" key={i}>
              <div className="k">{c.k}</div>
              <div className="v">
                {c.vMain} <em>{c.vEm}</em>
              </div>
              <div className="p">{c.p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
