'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';

const TECH = [
  'Swift',
  'SwiftUI',
  'Core Data',
  'HealthKit',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Python',
  'FastAPI',
  'Prisma',
  'PostgreSQL',
  'SQLite',
  'Zustand',
  'MAX Bot API',
  'MAX WebApp API',
  'Telegram Bot API',
  '1С МИС',
  'ЮKassa',
];

export function AboutContent() {
  const headRef = useRef<HTMLHeadingElement>(null);
  const { copy } = useCopy();
  const a = copy.aboutPage;
  const ab = copy.about; // home cells used here as well
  const VALUES = a.values;

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
    <div>
      <header className="page">
        <div className="page__tag">{a.tag}</div>
        <h1 className="page__title r-mask" ref={headRef}>
          <span className="r-in">
            {a.titlePlain}
            <em>{a.titleEm}</em>
            {a.titleSuffix}
          </span>
        </h1>
        <p className="page__lead">{a.lead}</p>
      </header>

      <section
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 38px 120px',
        }}
      >
        <div className="about__grid">
          {ab.cells.map((c, i) => (
            <div className="about__cell" key={i}>
              <div className="k">{c.k}</div>
              <div className="v">
                {c.vMain} <em>{c.vEm}</em>
              </div>
              <div className="p">{c.p}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 38px 120px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
          background: 'var(--line)',
          border: '1px solid var(--line)',
        }}
      >
        {VALUES.map((v) => (
          <div className="about__cell" key={v.num} style={{ minHeight: 240 }}>
            <div className="k">Ц · {v.num}</div>
            <h3
              style={{
                marginTop: 'auto',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 2.2vw, 34px)',
                fontWeight: 300,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              {v.title}
            </h3>
            <p className="p">{v.description}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '40px 38px 160px',
        }}
      >
        <div className="sec__tag">Технологии</div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginTop: 40,
            maxWidth: 900,
          }}
        >
          {TECH.map((t) => (
            <span
              key={t}
              style={{
                font: '500 11px/1 var(--font-mono)',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                padding: '10px 16px',
                background: 'rgba(243,240,234,.04)',
                border: '1px solid rgba(243,240,234,.12)',
                borderRadius: 999,
                color: 'var(--fg)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section
        style={{
          borderTop: '1px solid var(--line)',
          padding: '100px 38px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          {a.closingPre}<em style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontStyle: 'italic' }}>{a.closingEm}</em>
        </h2>
        <Link
          href="/contact"
          className="cta__btn"
          data-cur="link"
          style={{ marginTop: 40 }}
        >
          <span className="d" />
          {a.ctaLabel}
        </Link>
      </section>
    </div>
  );
}
