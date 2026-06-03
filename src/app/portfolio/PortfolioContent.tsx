'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { projectsByLocale, getProjectsByCategoryForLocale } from '@/data/projects';

export function PortfolioContent() {
  const [filter, setFilter] = useState('all');
  const headRef = useRef<HTMLHeadingElement>(null);
  const { copy, mode } = useCopy();
  const p = copy.portfolioPage;

  const filters: Array<{ id: string; label: string }> = [
    { id: 'all', label: p.filters.all },
    { id: 'max', label: p.filters.max },
    { id: 'telegram', label: p.filters.telegram },
    { id: 'ios', label: p.filters.ios },
    { id: 'web', label: p.filters.web },
  ];

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

  const list = getProjectsByCategoryForLocale(filter, mode);

  return (
    <div>
      <header className="page">
        <div className="page__tag">{p.tag}</div>
        <h1 className="page__title r-mask" ref={headRef}>
          <span className="r-in">
            {p.titlePlain}<em>{p.titleEm}</em>
          </span>
        </h1>
        <p className="page__lead">{p.lead(projectsByLocale[mode].length)}</p>

        <div
          style={{
            marginTop: 60,
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
          }}
        >
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                data-cur="link"
                style={{
                  font: '500 11px/1 var(--font-mono)',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  padding: '10px 18px',
                  borderRadius: 999,
                  border: `1px solid ${active ? 'var(--accent)' : 'rgba(243,240,234,.15)'}`,
                  background: active ? 'var(--accent)' : 'transparent',
                  color: active ? '#000' : 'var(--fg-dim)',
                  cursor: 'none',
                  transition: 'all .3s var(--ease)',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </header>

      <section
        style={{
          padding: '40px 38px 200px',
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          maxWidth: 1400,
          margin: '0 auto',
        }}
      >
        {list.map((p, i) => (
          <Link
            href={`/portfolio/${p.slug}`}
            className="work"
            key={p.id}
            data-cur="view"
            style={{ width: 'auto' }}
          >
            <div
              className={`work__media${
                p.previewMode === 'contain' ? ' work__media--contain' : ''
              }`}
            >
              <div className="work__idx">
                <span className="ac">
                  {String(i + 1).padStart(2, '0')}
                </span>{' '}
                / {String(list.length).padStart(2, '0')}
              </div>
              <div className="work__stack">
                {p.technologies.slice(0, 3).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Image
                src={p.images.preview}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 90vw, 320px"
                style={{
                  objectFit: p.previewMode === 'contain' ? 'contain' : 'cover',
                }}
              />
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
      </section>
    </div>
  );
}
