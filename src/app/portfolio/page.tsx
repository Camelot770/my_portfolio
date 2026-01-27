'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function PortfolioPage() {
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
              Вот несколько примеров моих работ. Каждый проект — это решение реальной бизнес-задачи.
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                layout="grid"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
