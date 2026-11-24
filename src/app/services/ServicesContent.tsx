'use client';

import type { CSSProperties } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { ContactLines } from '@/components/home/HomeContact';
import { HomeProcess } from '@/components/home/HomeProcess';
import { StationHead } from '@/components/line/kit';
import { servicesByLocale } from '@/data/services';

const ORDER = [
  { slug: 'telegram-max-apps', color: 'var(--red)' },
  { slug: 'ai-integration', color: 'var(--violet)' },
  { slug: 'web-development', color: 'var(--blue)' },
  { slug: 'ios-apps', color: 'var(--green)' },
];

export function ServicesContent() {
  const { copy, mode } = useCopy();
  const c = copy.services;
  const services = servicesByLocale[mode];

  return (
    <>
      <section className="sec page-top" aria-labelledby="services-title">
        <div className="wrap">
          <div className="sec__body">
            <StationHead level={1} id="services-title" title={`${c.titlePre} ${c.titleEm}${c.titleSuffix}`} lead={c.lead} />

            <ul className="svc-list">
              {ORDER.map(({ slug, color }) => {
                const s = services.find((x) => x.slug === slug);
                if (!s) return null;
                return (
                  <li key={slug} id={slug} className="svc-item" style={{ '--line': color } as CSSProperties}>
                    <div className="svc-item__title">
                      <span className="svc-item__bar" aria-hidden="true" />
                      <h2 className="t-h2 st-title">
                        <span className="st-ring" data-station aria-hidden="true" />
                        {s.title}
                      </h2>
                      <p className="t-body muted">{s.fullDescription}</p>
                    </div>
                    <div className="svc-item__body">
                      <div>
                        <h3>{c.includesLabel}</h3>
                        <ul className="stops">
                          {s.includes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>{c.forWhomLabel}</h3>
                        <p className="t-body" style={{ margin: 0 }}>{s.forWhom}</p>
                      </div>
                      <p className="callout" style={{ margin: 0 }}>{s.result}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <HomeProcess title={`${c.processHeadPre} ${c.processHeadEm}`} />

      <section className="sec" aria-labelledby="services-close">
        <div className="wrap">
          <div className="sec__body cta__grid">
            <StationHead id="services-close" title={`${c.closingPre} ${c.closingEm}${c.closingSuffix}`} lead={copy.cta.p} />
            <ContactLines />
          </div>
        </div>
      </section>
    </>
  );
}
