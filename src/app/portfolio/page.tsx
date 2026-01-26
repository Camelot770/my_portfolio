'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'ios', label: 'iOS' },
  { id: 'telegram', label: 'Telegram' },
  { id: 'web', label: 'Веб' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <h1 className="text-display-2 font-heading font-bold mb-4">
              Мои работы
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              Каждый проект — это решение реальной бизнес-задачи. От идеи до работающего продукта.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-foreground text-background'
                      : 'bg-transparent text-foreground border border-border hover:border-foreground'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLayout('grid')}
                className={`p-2.5 rounded-lg transition-colors ${
                  layout === 'grid'
                    ? 'bg-foreground text-background'
                    : 'text-muted hover:text-foreground'
                }`}
                aria-label="Сетка"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setLayout('list')}
                className={`p-2.5 rounded-lg transition-colors ${
                  layout === 'list'
                    ? 'bg-foreground text-background'
                    : 'text-muted hover:text-foreground'
                }`}
                aria-label="Список"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            layout
            className={
              layout === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'
                : 'flex flex-col'
            }
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                layout={layout}
              />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p variants={fadeInUp} className="text-center text-muted py-20">
              Нет проектов в этой категории
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
