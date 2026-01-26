'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/Button';

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
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={project.images.hero}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        </div>
        <div className="container relative z-10 pb-12 md:pb-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-accent text-white text-sm font-medium rounded-full mb-4"
            >
              {project.categoryLabel}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-display-2 font-heading font-bold text-white"
            >
              {project.title}
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Info */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="text-sm text-muted uppercase tracking-wider">
                Клиент
              </span>
              <p className="mt-2 font-medium">{project.client}</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className="text-sm text-muted uppercase tracking-wider">
                Год
              </span>
              <p className="mt-2 font-medium">{project.year}</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className="text-sm text-muted uppercase tracking-wider">
                Категория
              </span>
              <p className="mt-2 font-medium">{project.categoryLabel}</p>
            </motion.div>
            {project.link && (
              <motion.div variants={fadeInUp}>
                <span className="text-sm text-muted uppercase tracking-wider">
                  Ссылка
                </span>
                <p className="mt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    Открыть →
                  </a>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-heading-2 font-bold mb-4">О проекте</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-heading-3 font-bold mb-3">Задача</h3>
                <p className="text-muted leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-heading-3 font-bold mb-3">Решение</h3>
                <p className="text-muted leading-relaxed">{project.solution}</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-heading-3 font-bold mb-3">Результат</h3>
                <p className="text-muted leading-relaxed">{project.result}</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3 className="text-heading-3 font-bold mb-4">Технологии</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-background border border-border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-heading-2 font-bold mb-10">Галерея</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - изображение ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group flex items-center gap-4"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                <svg
                  className="w-5 h-5 transform rotate-180"
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
              <div>
                <span className="text-sm text-muted">Предыдущий</span>
                <p className="font-medium group-hover:text-accent transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex items-center gap-4 md:flex-row-reverse md:text-right"
            >
              <span className="w-12 h-12 flex items-center justify-center rounded-full border border-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                <svg
                  className="w-5 h-5"
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
              <div>
                <span className="text-sm text-muted">Следующий</span>
                <p className="font-medium group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-accent text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-3 font-heading font-bold mb-6">
              Хотите так же?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Обсудим ваш проект и найдём лучшее решение
            </p>
            <Button
              href="/contact"
              className="bg-white text-accent hover:bg-white/90"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
