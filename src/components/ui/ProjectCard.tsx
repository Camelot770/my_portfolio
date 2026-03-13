'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  layout?: 'grid' | 'list';
}

export function ProjectCard({ project, index = 0, layout = 'grid' }: ProjectCardProps) {
  if (layout === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Link
          href={`/portfolio/${project.slug}`}
          className="group flex flex-col md:flex-row gap-6 md:gap-10 py-8 border-b border-border"
          data-project-card
        >
          <div className="relative w-full md:w-80 h-48 md:h-56 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={project.images.preview}
              alt={project.title}
              fill
              className="object-cover grayscale-hover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-sm text-accent font-medium mb-2">
              {project.categoryLabel}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted mb-4">
              {project.shortDescription}
            </p>
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors inline-flex items-center gap-2">
              Смотреть проект
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="group block"
        data-project-card
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-dark-secondary">
          <Image
            src={project.images.preview}
            alt={project.title}
            fill
            className="object-contain grayscale-hover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <span className="text-sm text-accent font-medium">
          {project.categoryLabel}
        </span>
        <h3 className="text-xl md:text-2xl font-bold mt-2 mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted">
          {project.shortDescription}
        </p>
      </Link>
    </motion.div>
  );
}
