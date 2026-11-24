'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { Arrow, StationHead, TLink, lineFor, lineStyle } from '@/components/line/kit';
import { getFeaturedProjectsForLocale } from '@/data/projects';

export function HomeWorks() {
  const { copy, mode } = useCopy();
  const h = copy.home;
  const projects = getFeaturedProjectsForLocale(mode).slice(0, 8);
  // `prev` stays visible under the poster while the next one is uncovered.
  const [{ active, prev }, setView] = useState({ active: 0, prev: -1 });
  const setActive = useCallback(
    (i: number) => setView((v) => (v.active === i ? v : { active: i, prev: v.active })),
    []
  );
  const listRef = useRef<HTMLUListElement>(null);

  // On wide screens the poster follows the station at the reading line.
  useEffect(() => {
    const list = listRef.current;
    if (!list || !window.matchMedia('(min-width: 1000px)').matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.i));
        });
      },
      { rootMargin: '-46% 0px -50% 0px' }
    );
    list.querySelectorAll('li').forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, [mode, setActive]);

  const current = projects[active] ?? projects[0];

  return (
    <section className="sec" id="works" aria-labelledby="works-title">
      <div className="wrap">
        <div className="sec__body">
          <StationHead id="works-title" title={h.worksTitle} lead={h.worksLead} />

          <div className="works__grid">
            <ul className="works__list" ref={listRef}>
              {projects.map((p, i) => {
                const contain = p.previewMode === 'contain';
                return (
                  <li
                    key={p.slug}
                    data-i={i}
                    className={`works__item${i === active ? ' is-active' : ''}`}
                    onMouseEnter={() => setActive(i)}
                  >
                    <TLink href={`/portfolio/${p.slug}`} className="works__link" onFocus={() => setActive(i)}>
                      <span
                        className={`works__media${contain ? '' : ' works__media--cover'}`}
                        style={lineStyle(lineFor(p.category))}
                      >
                        <Image
                          src={p.images.preview}
                          alt=""
                          fill
                          sizes="(max-width: 999px) 92vw, 1px"
                        />
                      </span>
                      <span className="works__name">{p.title}</span>
                      <span className="works__year t-num">{p.year}</span>
                      <span className="works__meta">
                        <span className="badge" style={lineStyle(lineFor(p.category))}>
                          <i />
                          {p.categoryLabel}
                        </span>
                        <span className="works__client">{p.client}</span>
                      </span>
                    </TLink>
                  </li>
                );
              })}
            </ul>

            <div className="works__viewer" aria-hidden="true">
              <div className={`poster${prev >= 0 ? ' is-live' : ''}`}>
                {projects.map((p, i) => (
                  <div
                    key={p.slug}
                    className={`poster__img${p.previewMode === 'contain' ? '' : ' poster__img--cover'}${
                      i === active ? ' is-active' : i === prev ? ' is-prev' : ''
                    }`}
                  >
                    <Image src={p.images.preview} alt="" fill sizes="(max-width: 999px) 1px, 40vw" />
                  </div>
                ))}
                {/* re-keyed on every change so the run starts again */}
                <span key={active} className="poster__wipe" style={lineStyle(lineFor(current.category))} />
                <div className="poster__cap">
                  <span className="badge" style={lineStyle(lineFor(current.category))}>
                    <i />
                    {current.title}
                  </span>
                  <span className="t-num">{current.year}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="works__foot">
            <TLink href="/portfolio" className="btn btn--ghost">
              {h.worksAll}
              <Arrow />
            </TLink>
          </div>
        </div>
      </div>
    </section>
  );
}
