'use client';

import { useCopy } from '@/components/CopyProvider';

export function PrivacyContent() {
  const { copy } = useCopy();
  const p = copy.privacy;
  const effectiveDate = new Date().toLocaleDateString(p.dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <header className="page">
        <div className="page__tag">{p.tag}</div>
        <h1 className="page__title">
          {p.titlePlain}
          <em>{p.titleEm}</em>
        </h1>
        <p className="page__lead">
          {p.effectiveLabel}
          {effectiveDate}.
        </p>
      </header>

      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 38px 160px',
        }}
      >
        {p.sections.map((s) => (
          <div
            key={s.n}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: 40,
              padding: '50px 0',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(40px, 3.5vw, 54px)',
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: 'var(--accent)',
              }}
            >
              {s.n}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(24px, 2.4vw, 34px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: 20,
                }}
              >
                {s.title}
              </h2>
              <div
                style={{
                  color: 'var(--fg-dim)',
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
                className="privacy-prose"
              >
                {s.body.map((b, i) => {
                  if (b.kind === 'p') return <p key={i}>{b.text}</p>;
                  if (b.kind === 'ul') {
                    return (
                      <ul key={i}>
                        {b.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i}>
                      {b.before}
                      <a href={`mailto:${b.mail}`} style={{ color: 'var(--accent)' }}>
                        {b.mail}
                      </a>
                      {b.after}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
