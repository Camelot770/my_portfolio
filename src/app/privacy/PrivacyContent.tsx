'use client';

import { useCopy } from '@/components/CopyProvider';
import { StationHead } from '@/components/line/kit';

export function PrivacyContent() {
  const { copy } = useCopy();
  const p = copy.privacy;

  return (
    <section className="sec page-top" aria-labelledby="privacy-title">
      <div className="wrap">
        <div className="sec__body">
          <StationHead level={1} id="privacy-title" title={`${p.titlePlain}${p.titleEm}`}>
            <p className="t-meta">
              {p.effectiveLabel}
              {p.effectiveDate}
            </p>
          </StationHead>
          <div className="prose" style={{ marginTop: 'clamp(24px, 4vw, 48px)' }}>
            {p.sections.map((s) => (
              <section key={s.n} aria-labelledby={`privacy-${s.n}`}>
                <h2 id={`privacy-${s.n}`} className="st-title">
                  <span className="st-ring" data-station aria-hidden="true" />
                  {s.title}
                </h2>
                {s.body.map((b, i) => {
                  if (b.kind === 'p') return <p key={i}>{b.text}</p>;
                  if (b.kind === 'ul')
                    return (
                      <ul key={i}>
                        {b.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  return (
                    <p key={i}>
                      {b.before}
                      <a className="link" href={`mailto:${b.mail}`}>
                        {b.mail}
                      </a>
                      {b.after}
                    </p>
                  );
                })}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
