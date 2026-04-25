'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';

const HeroScene = dynamic(
  () => import('@/components/scenes/WebGLScenes').then((m) => m.HeroScene),
  { ssr: false }
);

const LETTER_STYLE_BASE: React.CSSProperties = {
  display: 'inline-block',
  opacity: 0,
  transition: 'transform .9s cubic-bezier(.16,1,.3,1), opacity .9s',
};

function renderWord(word: string, rot: number, keyPrefix: string) {
  return (
    <span
      key={keyPrefix}
      style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
    >
      {Array.from(word).map((c, i) => (
        <span
          key={i}
          className="letter"
          style={{
            ...LETTER_STYLE_BASE,
            transform: `translateY(100%) rotate(${rot}deg)`,
          }}
        >
          {c}
        </span>
      ))}
    </span>
  );
}

function renderLine(text: string, italic: boolean) {
  const rot = italic ? 10 : 6;
  const words = text.split(/(\s+)/);
  const nodes = words.map((chunk, i) => {
    if (/^\s+$/.test(chunk)) return <span key={`s${i}`}>{'\u00A0'}</span>;
    return renderWord(chunk, rot, `w${i}`);
  });
  return italic ? <em>{nodes}</em> : <>{nodes}</>;
}

export function HeroV2() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const footRef = useRef<HTMLDivElement>(null);
  const { copy, mode } = useCopy();
  const LINES = copy.hero.title;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const introDone = sessionStorage.getItem('sl-intro-done') === '1';
    const introDelay = introDone ? 200 : 4200;

    const tStart = setTimeout(() => {
      // Reset letters before animating in (handles mode switches that re-render
      // the title with new letters that were left in initial transformed state).
      const letters =
        titleRef.current?.querySelectorAll<HTMLSpanElement>('.letter');
      letters?.forEach((el, i) => {
        setTimeout(() => {
          el.style.transform = 'translateY(0) rotate(0deg)';
          el.style.opacity = '1';
        }, 40 * i);
      });
      setTimeout(() => kickerRef.current?.classList.add('in'), 100);
      setTimeout(() => footRef.current?.classList.add('in'), 300);
    }, introDelay);

    return () => clearTimeout(tStart);
  }, [LINES]);

  return (
    <section className="hero" id="top">
      <div className="hero__canvas">
        <HeroScene />
      </div>
      <div className="hero__stage">
        <div className="hero__over">
          <div className="hero__kicker" ref={kickerRef}>
            {copy.hero.kicker}
          </div>
          <h1
            className="hero__title"
            ref={titleRef}
            key={LINES.map((l) => l.text).join('|')}
          >
            {LINES.map((line, li) => (
              <span className="line" key={li}>
                {renderLine(line.text, !!line.italic)}{' '}
              </span>
            ))}
          </h1>
        </div>
        <div className="hero__foot" ref={footRef}>
          <div className="hero__lead">
            {copy.hero.lead}
            <em>{copy.hero.leadEm}</em>
            {mode === 'pro'
              ? ' разработки — от проектирования до запуска и сопровождения.'
              : ' команда полного цикла — от архитектуры до релиза.'}
          </div>
          <div className="hero__meta">
            <b>{copy.hero.metaLocationLabel}</b>
            {copy.hero.metaLocationLine1}
            <br />
            {copy.hero.metaLocationLine2}
          </div>
          <div className="hero__meta">
            <b>{copy.hero.metaPortfolioLabel}</b>
            {copy.hero.metaPortfolioLine1}
            <br />
            {copy.hero.metaPortfolioLine2}
          </div>
          <div className="hero__scroll">{copy.hero.scroll}</div>
        </div>
      </div>
    </section>
  );
}
