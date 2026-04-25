'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { getFeaturedProjects } from '@/data/projects';

export function WorksV2() {
  const { copy } = useCopy();
  const reelRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        reel.scrollLeft += e.deltaY;
        if (Math.abs(e.deltaY) > 5) e.preventDefault();
      }
    };
    reel.addEventListener('wheel', onWheel, { passive: false });
    return () => reel.removeEventListener('wheel', onWheel);
  }, []);

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

  const projects = getFeaturedProjects();
  const total = projects.length;

  return (
    <section className="works" id="works">
      <div className="works__head">
        <div>
          <div className="sec__tag">{copy.works.tag}</div>
          <h2 className="sec__head r-mask" ref={headRef}>
            <span className="r-in">
              {copy.works.headPlain} <em>{copy.works.headEm}</em>
            </span>
          </h2>
        </div>
        <div className="works__head-r">{copy.works.description}</div>
      </div>

      <div className="works__reel" ref={reelRef} data-cur="drag">
        {projects.map((p, i) => (
          <Link
            href={`/portfolio/${p.slug}`}
            className="work"
            key={p.id}
            data-cur="view"
          >
            <div className="work__media">
              <div className="work__idx">
                <span className="ac">
                  {String(i + 1).padStart(2, '0')}
                </span>{' '}
                / {String(total).padStart(2, '0')}
              </div>
              <div className="work__stack">
                {p.technologies.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.images.preview} alt={p.title} />
            </div>
            <div className="work__info">
              <h3 className="work__title">{p.title}</h3>
              <div className="work__year">
                <b>{p.year}</b>
                {p.categoryLabel}
              </div>
            </div>
            <p className="work__desc">{p.shortDescription}</p>
          </Link>
        ))}
      </div>

      <div className="works__hint">
        <span>{copy.works.hintDrag}</span>
        <span>{copy.works.hintCount(total)}</span>
      </div>
    </section>
  );
}
