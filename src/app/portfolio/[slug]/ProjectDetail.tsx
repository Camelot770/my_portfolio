'use client';

import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectDetailProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: ProjectDetailProps) {
  return (
    <article>
      <header className="page">
        <Link
          href="/portfolio"
          className="page__tag"
          style={{ cursor: 'none' }}
          data-cur="link"
        >
          ← {project.categoryLabel}
        </Link>
        <h1 className="page__title">
          {project.title}
        </h1>
        <p className="page__lead">{project.shortDescription}</p>

        <div
          style={{
            marginTop: 50,
            display: 'flex',
            gap: 32,
            flexWrap: 'wrap',
            paddingTop: 30,
            borderTop: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              font: '500 10px/1.5 var(--font-mono)',
              color: 'var(--fg-dim)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
            }}
          >
            <b
              style={{
                color: 'var(--fg)',
                display: 'block',
                fontSize: 12,
                marginBottom: 6,
              }}
            >
              Клиент
            </b>
            {project.client}
          </div>
          <div
            style={{
              font: '500 10px/1.5 var(--font-mono)',
              color: 'var(--fg-dim)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
            }}
          >
            <b
              style={{
                color: 'var(--fg)',
                display: 'block',
                fontSize: 12,
                marginBottom: 6,
              }}
            >
              Год
            </b>
            {project.year}
          </div>
          <div
            style={{
              font: '500 10px/1.5 var(--font-mono)',
              color: 'var(--fg-dim)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
            }}
          >
            <b
              style={{
                color: 'var(--fg)',
                display: 'block',
                fontSize: 12,
                marginBottom: 6,
              }}
            >
              Стек
            </b>
            {project.technologies.join(' · ')}
          </div>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 38px 80px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            overflow: 'hidden',
            background: 'var(--bg-2)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.images.hero}
            alt={project.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </section>

      <section
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '40px 38px 120px',
          display: 'grid',
          gap: 80,
          gridTemplateColumns: 'minmax(0, 1fr)',
        }}
      >
        <Block n="01" title="Задача" text={project.challenge} />
        <Block n="02" title="Решение" text={project.solution} />
        <Block n="03" title="Результат" text={project.result} />
        <Block n="04" title="Описание" text={project.fullDescription} />
      </section>

      <nav
        style={{
          borderTop: '1px solid var(--line)',
          padding: '60px 38px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          maxWidth: 1400,
          margin: '0 auto',
        }}
      >
        <Link
          href={`/portfolio/${prevProject.slug}`}
          data-cur="link"
          style={{ display: 'block' }}
        >
          <div
            style={{
              font: '500 10px/1 var(--font-mono)',
              color: 'var(--fg-mute)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            ← Предыдущий
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {prevProject.title}
          </div>
        </Link>
        <Link
          href={`/portfolio/${nextProject.slug}`}
          data-cur="link"
          style={{ display: 'block', textAlign: 'right' }}
        >
          <div
            style={{
              font: '500 10px/1 var(--font-mono)',
              color: 'var(--fg-mute)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Следующий →
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 42px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {nextProject.title}
          </div>
        </Link>
      </nav>
    </article>
  );
}

function Block({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: 40,
        paddingTop: 50,
        borderTop: '1px solid var(--line)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(40px, 4vw, 64px)',
          letterSpacing: '-0.04em',
          color: 'var(--accent)',
          lineHeight: 0.9,
        }}
      >
        {n}
      </div>
      <div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(28px, 3vw, 46px)',
            letterSpacing: '-0.035em',
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: 'var(--fg-dim)',
            maxWidth: 820,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
