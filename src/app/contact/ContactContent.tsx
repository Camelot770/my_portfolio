'use client';

import { useRef } from 'react';
import { useMagnet } from '@/components/ui/MagneticButton';

export function ContactContent() {
  const tgRef = useRef<HTMLAnchorElement>(null);
  const mailRef = useRef<HTMLAnchorElement>(null);
  const maxRef = useRef<HTMLAnchorElement>(null);
  useMagnet(tgRef as React.RefObject<HTMLElement>);
  useMagnet(mailRef as React.RefObject<HTMLElement>);
  useMagnet(maxRef as React.RefObject<HTMLElement>);

  return (
    <div>
      <header className="page" style={{ paddingBottom: 80 }}>
        <div className="page__tag">Контакт</div>
        <h1 className="page__title">
          Передайте <em>сигнал</em>.
        </h1>
        <p className="page__lead">
          Опишите задачу в одном абзаце — вернёмся в течение 30 минут в
          рабочие часы MSK с ответом: берёмся, сколько, когда.
        </p>
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
          <div className="k">Сигнал · 01</div>
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
            Telegram
          </div>
          <div
            className="p"
            style={{ marginTop: 12, color: 'var(--fg)', fontSize: 15 }}
          >
            @Naum0 — прямой канал, отвечаю в рабочие часы.
          </div>
        </a>
        <a
          ref={mailRef}
          href="mailto:naum_kogan@inbox.ru"
          className="about__cell"
          data-cur="link"
          style={{
            padding: '40px 32px',
            minHeight: 240,
            cursor: 'none',
            textDecoration: 'none',
          }}
        >
          <div className="k">Сигнал · 02</div>
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
            E-mail
          </div>
          <div
            className="p"
            style={{ marginTop: 12, color: 'var(--fg)', fontSize: 15 }}
          >
            naum_kogan@inbox.ru — для подробного брифа.
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
          <div className="k">Сигнал · 03</div>
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
            MAX
          </div>
          <div
            className="p"
            style={{ marginTop: 12, color: 'var(--fg)', fontSize: 15 }}
          >
            Официальный контакт StackLab в MAX.
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
          Что нужно, чтобы начать?
        </h2>
        <p
          style={{
            marginTop: 20,
            color: 'var(--fg-dim)',
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          Просто напишите. Расскажите идею, опишите задачу — разберёмся вместе.
          Техническое задание не обязательно: достаточно описать идею своими
          словами.
        </p>
      </section>
    </div>
  );
}
