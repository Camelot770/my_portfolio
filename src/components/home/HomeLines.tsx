'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { Arrow, StationHead, TLink, type LineKey } from '@/components/line/kit';
import { servicesByLocale } from '@/data/services';

const ORDER: Array<{ key: LineKey; slug: string; color: string }> = [
  { key: 'max', slug: 'telegram-max-apps', color: 'var(--red)' },
  { key: 'ai', slug: 'ai-integration', color: 'var(--violet)' },
  { key: 'web', slug: 'web-development', color: 'var(--blue)' },
  { key: 'ios', slug: 'ios-apps', color: 'var(--green)' },
];

export function HomeLines() {
  const { copy, mode } = useCopy();
  const h = copy.home;
  const services = servicesByLocale[mode];
  const ref = useRef<HTMLDivElement>(null);
  // 'static': drawn, no motion (server render, no JS, reduced motion, already on screen).
  // 'armed': hidden below the fold, waiting to be drawn. 'in': drawing.
  const [phase, setPhase] = useState<'static' | 'armed' | 'in'>('static');

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.8) return;
    setPhase('armed');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('in');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -20% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" id="lines" aria-labelledby="lines-title">
      <div className="wrap">
        <div className="sec__body">
          <StationHead id="lines-title" title={h.linesTitle} lead={h.linesLead} />

          <div
            ref={ref}
            className={`lines${phase === 'static' ? '' : ' is-armed'}${phase === 'in' ? ' is-in' : ''}`}
          >
            {ORDER.map((o, r) => {
              const s = services.find((x) => x.slug === o.slug);
              if (!s) return null;
              const name = h.lineNames[o.key];
              return (
                <div
                  key={o.key}
                  className="line-row"
                  style={{ '--line': o.color, '--d': `${r * 0.18}s` } as CSSProperties}
                >
                  <div className="line-row__title">
                    <h3 className="t-h3">
                      <i aria-hidden="true" />
                      {name.title}
                    </h3>
                    <p className="t-meta">{name.sub}</p>
                  </div>
                  <div className="line-row__track">
                    <span className="line-row__bar" aria-hidden="true" />
                    <ol className="line-row__stops">
                      {s.includes.map((item, i) => (
                        <li key={item} style={{ '--i': i } as CSSProperties}>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              );
            })}
            <div className="hub">
              <h3 className="t-h3">{h.hubTitle}</h3>
              <p>{h.hubText}</p>
              <ul className="hub__tech">
                {h.hubTech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lines__foot">
            <TLink href="/services" className="arrow-link">
              <span>{h.linesMore}</span>
              <Arrow />
            </TLink>
          </div>
        </div>
      </div>
    </section>
  );
}
