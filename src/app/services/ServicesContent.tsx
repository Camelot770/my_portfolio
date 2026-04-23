'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { services, processSteps } from '@/data/services';

export function ServicesContent() {
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
    <div>
      <header className="page">
        <div className="page__tag">Услуги</div>
        <h1 className="page__title r-mask" ref={headRef}>
          <span className="r-in">
            Полный <em>цикл</em> разработки
          </span>
        </h1>
        <p className="page__lead">
          От идеи до работающего продукта. iOS-приложения, MAX и Telegram Mini
          Apps, боты и веб-сервисы для стартапов, бизнеса и госструктур.
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
        }}
      >
        {services.map((s, idx) => (
          <div
            key={s.id}
            className="about__cell"
            style={{
              padding: '56px 48px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 60,
              alignItems: 'start',
              minHeight: 0,
            }}
          >
            <div>
              <div className="k">№ {String(idx + 1).padStart(2, '0')}</div>
              <h2
                style={{
                  marginTop: 24,
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.2vw, 48px)',
                  fontWeight: 300,
                  letterSpacing: '-0.035em',
                  lineHeight: 1.05,
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  marginTop: 20,
                  color: 'var(--fg-dim)',
                  fontSize: 15,
                  lineHeight: 1.6,
                  maxWidth: 540,
                }}
              >
                {s.fullDescription}
              </p>
              <p
                style={{
                  marginTop: 20,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--accent)',
                  fontSize: 18,
                  lineHeight: 1.4,
                  maxWidth: 540,
                }}
              >
                {s.result}
              </p>
            </div>
            <div>
              <div
                className="k"
                style={{
                  color: 'var(--fg-dim)',
                  marginBottom: 16,
                }}
              >
                Что входит
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: 10,
                }}
              >
                {s.includes.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      paddingLeft: 28,
                      position: 'relative',
                      color: 'var(--fg)',
                      fontSize: 15,
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 10,
                        width: 14,
                        height: 1,
                        background: 'var(--accent)',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 32,
                  paddingTop: 24,
                  borderTop: '1px solid var(--line)',
                }}
              >
                <div className="k" style={{ color: 'var(--fg-dim)' }}>
                  Для кого
                </div>
                <p
                  style={{
                    marginTop: 12,
                    color: 'var(--fg-dim)',
                    fontSize: 14,
                    lineHeight: 1.55,
                  }}
                >
                  {s.forWhom}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="process" style={{ padding: '80px 38px 160px' }}>
        <div className="process__wrap">
          <div className="process__head">
            <div className="sec__tag">Процесс</div>
            <h2 className="sec__head">
              Как проходит <em>работа</em>
            </h2>
            <p className="process__lead">
              Прозрачный цикл от первого разговора до запуска продукта.
            </p>
          </div>
          <div className="steps">
            {processSteps.map((s) => (
              <div className="step" key={s.number}>
                <div className="step__n">{s.number}</div>
                <div>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__p">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
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
          Готовы <em style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontStyle: 'italic' }}>начать</em>?
        </h2>
        <Link
          href="/contact"
          className="cta__btn"
          data-cur="link"
          style={{ marginTop: 40 }}
        >
          <span className="d" />
          Обсудить проект →
        </Link>
      </section>
    </div>
  );
}
