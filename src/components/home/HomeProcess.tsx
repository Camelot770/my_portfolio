'use client';

import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { StationHead } from '@/components/line/kit';
import { processStepsByLocale } from '@/data/services';

export function HomeProcess({ title }: { title?: string } = {}) {
  const { copy, mode } = useCopy();
  const steps = processStepsByLocale[mode];
  const ref = useRef<HTMLDivElement>(null);

  // The train advances with the reader; each passed step lights up.
  useEffect(() => {
    const root = ref.current;
    const track = root?.querySelector<HTMLElement>('.proc__track');
    if (!root || !track) return;
    const stops = Array.from(root.querySelectorAll<HTMLElement>('.proc__stop'));
    const rings = stops.map((s) => s.querySelector<HTMLElement>('.proc__ring')!);
    let len = 0;
    let raf = 0;
    let lit = -1;

    const measure = () => {
      const t = track.getBoundingClientRect();
      const a = rings[0].getBoundingClientRect();
      const b = rings[rings.length - 1].getBoundingClientRect();
      const horizontal = Math.abs(a.top - b.top) < 4;
      const a0 = horizontal ? a.left + a.width / 2 - t.left : a.top + a.height / 2 - t.top;
      len = horizontal ? b.left - a.left : b.top - a.top;
      root.style.setProperty('--a0', `${a0}px`);
      root.style.setProperty('--len', `${len}px`);
      update();
    };

    const update = () => {
      raf = 0;
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.78 - r.top) / Math.max(1, r.height + vh * 0.2)));
      root.style.setProperty('--p', p.toFixed(4));
      const n = Math.floor(p * (stops.length - 1) + 0.02) + (p > 0 ? 1 : 0);
      if (n !== lit) {
        lit = n;
        stops.forEach((s, i) => s.classList.toggle('is-lit', i < n));
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mode]);

  return (
    <section className="sec" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <div className="sec__body">
          <StationHead
            id="process-title"
            title={title ?? `${copy.process.headPre} ${copy.process.headEm}`.trim()}
            lead={copy.process.lead}
          />
          <div className="proc" ref={ref}>
            <div className="proc__track">
              <span className="proc__base" aria-hidden="true" />
              <span className="proc__fill" aria-hidden="true" />
              <span className="proc__train" aria-hidden="true" />
              <ol className="proc__stops">
                {steps.map((s) => (
                  <li key={s.number} className="proc__stop">
                    <span className="proc__ring t-num" aria-hidden="true">
                      {Number(s.number)}
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
