'use client';

import { useCopy } from '@/components/CopyProvider';
import { Arrow } from '@/components/line/kit';
import { LineMap } from '@/components/line/LineMap';

export function HomeHero() {
  const { copy } = useCopy();
  const h = copy.home;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__in">
        <div className="hero__text">
          <h1 id="hero-title" className="t-display">
            {h.heroTitle[0]} <span className="hero__phrase">{h.heroTitle[1]}</span>
          </h1>
          <p className="t-lead hero__lead">{h.heroLead}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--lg">
              {h.heroCta}
              <Arrow />
            </a>
            <a href="#works" className="arrow-link">
              <span>{h.heroSecondary}</span>
              <Arrow />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__map">
        <LineMap />
      </div>
    </section>
  );
}
