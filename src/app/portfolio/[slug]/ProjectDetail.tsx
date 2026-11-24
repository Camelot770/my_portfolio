'use client';

import Image from 'next/image';
import { useCopy } from '@/components/CopyProvider';
import { ContactLines } from '@/components/home/HomeContact';
import { Arrow, StationHead, TLink, lineFor, lineStyle } from '@/components/line/kit';
import {
  type Project,
  getAdjacentProjectsForLocale,
  getProjectBySlugForLocale,
} from '@/data/projects';

interface ProjectDetailProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export function ProjectDetail({
  project: fallbackProject,
  prevProject: fallbackPrev,
  nextProject: fallbackNext,
}: ProjectDetailProps) {
  const { copy, mode } = useCopy();
  const pd = copy.projectDetail;
  // Locale-specific version of the project; the SSR (RU) one is the fallback.
  const project = getProjectBySlugForLocale(fallbackProject.slug, mode) ?? fallbackProject;
  const adjacent = getAdjacentProjectsForLocale(fallbackProject.slug, mode);
  const prevProject = adjacent.prevProject ?? fallbackPrev;
  const nextProject = adjacent.nextProject ?? fallbackNext;

  const blocks = [
    { title: pd.blocks.description, text: project.fullDescription },
    { title: pd.blocks.challenge, text: project.challenge },
    { title: pd.blocks.solution, text: project.solution },
    { title: pd.blocks.result, text: project.result },
  ].filter((b) => b.text);

  return (
    <>
      <section className="sec page-top" aria-labelledby="case-title">
        <div className="wrap">
          <div className="sec__body case-hero">
            <div>
              <StationHead level={1} id="case-title" title={project.title} lead={project.shortDescription}>
                <span className="badge" style={lineStyle(lineFor(project.category))}>
                  <i />
                  {project.categoryLabel}
                </span>
              </StationHead>
              <dl className="case-facts">
                <div>
                  <dt>{pd.client}</dt>
                  <dd>{project.client}</dd>
                </div>
                <div>
                  <dt>{pd.year}</dt>
                  <dd className="t-num">{project.year}</dd>
                </div>
                <div>
                  <dt>{pd.stack}</dt>
                  <dd>
                    <ul className="tech">
                      {project.technologies.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <div className={`case-poster${project.previewMode === 'contain' ? '' : ' case-poster--cover'}`}>
              <Image
                src={project.images.hero}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 899px) 92vw, 44vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--tight" aria-label={project.title}>
        <div className="wrap">
          <div className="sec__body">
            <ol className="case-blocks">
              {blocks.map((b) => (
                <li key={b.title} className="case-block">
                  <h2 className="st-title">
                    <span className="st-ring" data-station aria-hidden="true" />
                    {b.title}
                  </h2>
                  <p>{b.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec sec--tight" aria-label={`${pd.prev} / ${pd.next}`}>
        <div className="wrap">
          <div className="sec__body">
            <nav className="case-nav">
              <TLink href={`/portfolio/${prevProject.slug}`} aria-label={`${pd.prev}: ${prevProject.title}`}>
                <span className="case-nav__dir">
                  <Arrow className="ico ico--back" />
                  {pd.prev}
                </span>
                <strong>{prevProject.title}</strong>
              </TLink>
              <TLink href={`/portfolio/${nextProject.slug}`} aria-label={`${pd.next}: ${nextProject.title}`}>
                <span className="case-nav__dir">
                  {pd.next}
                  <Arrow />
                </span>
                <strong>{nextProject.title}</strong>
              </TLink>
            </nav>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="case-close">
        <div className="wrap">
          <div className="sec__body cta__grid">
            <StationHead id="case-close" title={copy.home.contactTitle} lead={copy.cta.p} />
            <ContactLines />
          </div>
        </div>
      </section>
    </>
  );
}
