'use client';

import { motion } from 'framer-motion';
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

  return (
    <section ref={ref} className="section">
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
              Каждый проект доведён до конца. Каждый клиент получил работающий продукт.
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
                <Link href={`/portfolio/${project.slug}`} className="group block" data-project-card>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-dark-secondary">
                    <Image
                      src={project.images.preview}
                      alt={project.title}
                      fill
                      className="object-contain grayscale-hover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-sm text-accent font-medium">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-2xl font-bold mt-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted mt-2">
                        {project.shortDescription}
                      </p>
                    </div>
                    <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-all">
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
