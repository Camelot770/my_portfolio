'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="section text-white" style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}>
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-display-2 font-heading font-bold mb-6"
          >
            Готовы превратить идею в продукт?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Напишите с описанием задачи — обсудим, как реализовать ваш проект
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-dark text-foreground hover:bg-dark-secondary transition-all duration-300"
            >
              Обсудить проект
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
