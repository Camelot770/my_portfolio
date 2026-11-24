'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { ContactLines } from '@/components/home/HomeContact';
import { StationHead, TLink, lineFor, lineStyle } from '@/components/line/kit';
import { getProjectsByCategoryForLocale } from '@/data/projects';

type Filter = 'all' | 'max' | 'telegram' | 'ios' | 'web';

export function PortfolioContent() {
  const { copy, mode } = useCopy();
  const p = copy.portfolioPage;
  const [filter, setFilter] = useState<Filter>('all');
  const shown = getProjectsByCategoryForLocale(filter, mode);
  const total = getProjectsByCategoryForLocale('all', mode).length;

  const filters: Array<{ id: Filter; label: string; line?: string }> = [
    { id: 'all', label: p.filters.all },
    { id: 'max', label: p.filters.max, line: lineFor('max') },
    { id: 'telegram', label: p.filters.telegram, line: lineFor('telegram') },
    { id: 'web', label: p.filters.web, line: lineFor('web') },
    { id: 'ios', label: p.filters.ios, line: lineFor('ios') },
  ];

  return (
    <>
      <section className="sec page-top" aria-labelledby="portfolio-title">
        <div className="wrap">
          <div className="sec__body">
            <StationHead level={1} id="portfolio-title" title={`${p.titlePlain}${p.titleEm}`} lead={p.lead(total)} />

            <div className="filters" role="group" aria-label={p.tag}>
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  style={f.line ? lineStyle(f.line) : undefined}
                >
                  {f.line ? <i aria-hidden="true" /> : null}
                  {f.label}
                </button>
              ))}
            </div>

            <ul className="cases" aria-live="polite">
              {shown.map((project, i) => (
                <li key={project.slug}>
                  <TLink href={`/portfolio/${project.slug}`} className="case-card">
                    <span
                      className={`case-card__media${project.previewMode === 'contain' ? '' : ' case-card__media--cover'}`}
                    >
                      <Image
                        src={project.images.preview}
                        alt={project.title}
                        fill
                        priority={i < 2}
                        sizes="(max-width: 767px) 92vw, 44vw"
                      />
                    </span>
                    <span className="case-card__head">
                      <h2>{project.title}</h2>
                      <span className="t-num" style={{ fontWeight: 800 }}>{project.year}</span>
                    </span>
                    <span className="badge" style={lineStyle(lineFor(project.category))}>
                      <i />
                      {project.categoryLabel}
                    </span>
                    <p>{project.shortDescription}</p>
                  </TLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="portfolio-close">
        <div className="wrap">
          <div className="sec__body cta__grid">
            <StationHead id="portfolio-close" title={copy.home.contactTitle} lead={copy.cta.p} />
            <ContactLines />
          </div>
        </div>
      </section>
    </>
  );
}
