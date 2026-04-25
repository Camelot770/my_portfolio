'use client';

import { useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { useMagnet } from '@/components/ui/MagneticButton';

export function ContactContent() {
  const tgRef = useRef<HTMLAnchorElement>(null);
  const mailRef = useRef<HTMLAnchorElement>(null);
  const maxRef = useRef<HTMLAnchorElement>(null);
  useMagnet(tgRef as React.RefObject<HTMLElement>);
  useMagnet(mailRef as React.RefObject<HTMLElement>);
  useMagnet(maxRef as React.RefObject<HTMLElement>);
  const { copy } = useCopy();
  const c = copy.contact;
  const channels = c.channels;

  return (
    <div>
      <header className="page" style={{ paddingBottom: 80 }}>
        <div className="page__tag">{c.tag}</div>
        <h1 className="page__title">
          {c.titlePlain} <em>{c.titleEm}</em>.
        </h1>
        <p className="page__lead">{c.lead}</p>
      </header>

      <section
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 38px 120px',
          display: 'grid',
          gap: 1,
          background: 'var(--line)',
          border: '1px solid var(--line)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        <a
          ref={tgRef}
          href="https://t.me/Naum0"
          target="_blank"
          rel="noopener noreferrer"
          className="about__cell"
          data-cur="link"
          style={{
            padding: '40px 32px',
            minHeight: 240,
            cursor: 'none',
            textDecoration: 'none',
          }}
        >
          <div className="k">{channels[0].k}</div>
          <div
            className="v"
            style={{
              marginTop: 'auto',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 2.6vw, 36px)',
              fontWeight: 300,
              letterSpacing: '-0.035em',
            }}
          >
            {channels[0].v}
          </div>
          <div
            className="p"
            style={{ marginTop: 12, color: 'var(--fg)', fontSize: 15 }}
          >
            {channels[0].p}
          </div>
        </a>
        <a
          ref={mailRef}
          href="mailto:stacklab@mail.ru"
          className="about__cell"
          data-cur="link"
          style={{
            padding: '40px 32px',
            minHeight: 240,
            cursor: 'none',
            textDecoration: 'none',
          }}
        >
          <div className="k">{channels[1].k}</div>
          <div
            className="v"
            style={{
              marginTop: 'auto',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 2.6vw, 36px)',
              fontWeight: 300,
              letterSpacing: '-0.035em',
            }}
          >
            {channels[1].v}
          </div>
          <div
            className="p"
            style={{ marginTop: 12, color: 'var(--fg)', fontSize: 15 }}
          >
            {channels[1].p}
          </div>
        </a>
        <a
          ref={maxRef}
          href="https://max.ru/u/f9LHodD0cOLGKi7i1KndiYLJAU1rf7OCpsTt2VCnnAAN7qe3VUEjR99azyg"
          target="_blank"
          rel="noopener noreferrer"
          className="about__cell"
          data-cur="link"
          style={{
            padding: '40px 32px',
            minHeight: 240,
            cursor: 'none',
            textDecoration: 'none',
          }}
        >
          <div className="k">{channels[2].k}</div>
          <div
            className="v"
            style={{
              marginTop: 'auto',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 2.6vw, 36px)',
              fontWeight: 300,
              letterSpacing: '-0.035em',
            }}
          >
            {channels[2].v}
          </div>
          <div
            className="p"
            style={{ marginTop: 12, color: 'var(--fg)', fontSize: 15 }}
          >
            {channels[2].p}
          </div>
        </a>
      </section>

      <section
        style={{
          borderTop: '1px solid var(--line)',
          padding: '80px 38px',
          textAlign: 'center',
          maxWidth: 820,
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 2vw, 30px)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            lineHeight: 1.3,
          }}
        >
          {c.closingTitle}
        </h2>
        <p
          style={{
            marginTop: 20,
            color: 'var(--fg-dim)',
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          {c.closingP}
        </p>
      </section>
    </div>
  );
}
