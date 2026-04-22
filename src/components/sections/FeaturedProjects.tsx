'use client';

import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { getFeaturedProjects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';

export function FeaturedProjects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const projects = getFeaturedProjects().slice(0, 4);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Mobile OR reduced motion → classic 2-col grid, no horizontal scroll
  if (isMobile || prefersReducedMotion) {
    return (
      <ClassicFeaturedProjects
        projects={projects}
        sectionRef={ref}
        isInView={isInView}
      />
    );
  }

  return <HorizontalFeaturedProjects projects={projects} />;
}

// --- HORIZONTAL SCROLL (desktop) ---

function HorizontalFeaturedProjects({
  projects,
}: {
  projects: ReturnType<typeof getFeaturedProjects>;
}) {
  const outerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end end'],
  });

  // 4 cards, each ~70vw + gap. Total track ≈ 300vw. Need to shift by ~210vw.
  const trackX = useTransform(scrollYProgress, [0, 1], ['0vw', '-75%']);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);

  // Outer container tall enough to give horizontal scroll room (~3.5 viewports)
  return (
    <section
      ref={outerRef}
      className="relative bg-background"
      style={{ height: '350vh' }}
      aria-label="Избранные проекты"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <motion.div
          className="container mb-10"
          style={{ opacity: headingOpacity, y: headingY }}
        >
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-medium">
            Портфолио
          </span>
          <h2 className="text-display-3 font-heading font-bold mt-3">
            Избранные проекты
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl">
            Доводим до конца. Клиенты получают работающие продукты.
          </p>
        </motion.div>

        <motion.div
          style={{ x: trackX }}
          className="flex items-stretch gap-8 pl-[6vw] will-change-transform"
        >
          {projects.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}

          {/* End card: link to full portfolio */}
          <div className="flex-shrink-0 w-[60vw] md:w-[45vw] flex items-center justify-center">
            <div className="text-center max-w-md">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ещё проекты
              </h3>
              <p className="text-muted mb-8">
                Больше кейсов, деталей реализации и процессов работы — в полном портфолио.
              </p>
              <Button href="/portfolio" variant="secondary">
                Смотреть всё
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="container mt-8 flex items-center justify-between">
          <span className="text-sm text-muted">Скроллите вниз →</span>
          <span className="text-sm text-muted tabular-nums">
            {projects.length} проекта
          </span>
        </div>
      </div>
    </section>
  );
}

function ProjectPanel({
  project,
}: {
  project: ReturnType<typeof getFeaturedProjects>[number];
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex-shrink-0 w-[80vw] md:w-[60vw] lg:w-[55vw] block"
      data-project-card
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark-secondary mb-6">
        <Image
          src={project.images.preview}
          alt={project.title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-700 ease-brand"
          sizes="(max-width: 768px) 80vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex items-start justify-between gap-6 px-2">
        <div className="flex-1">
          <span className="text-sm uppercase tracking-wider text-accent font-medium">
            {project.categoryLabel}
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mt-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted mt-2 max-w-lg">
            {project.shortDescription}
          </p>
        </div>
        <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-all">
          <svg
            className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// --- CLASSIC GRID (mobile / reduced motion fallback) ---

type ClassicProps = {
  projects: ReturnType<typeof getFeaturedProjects>;
  sectionRef: React.RefObject<HTMLElement>;
  isInView: boolean;
};

function ClassicFeaturedProjects({ projects, sectionRef, isInView }: ClassicProps) {
  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="mb-12 md:mb-16">
            <AnimatedHeading
              className="text-display-3 font-heading font-bold"
              inView={isInView}
            >
              Избранные проекты
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-lg text-muted max-w-2xl"
            >
              Доводим до конца. Клиенты получают работающие продукты.
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                  data-project-card
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-dark-secondary">
                    <Image
                      src={project.images.preview}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-sm text-accent font-medium">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mt-2">{project.shortDescription}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Button href="/portfolio" variant="secondary">
              Посмотреть подробнее
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
