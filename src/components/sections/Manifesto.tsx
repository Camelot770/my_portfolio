'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Manifesto() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="section bg-background">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeInUp}
            className="text-display-3 font-heading font-bold leading-tight text-center"
          >
            Мы верим, что за каждым великим продуктом стоит простая идея. Наша задача — взять эту идею и превратить её в{' '}
            <span className="text-accent">код, который работает.</span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-muted"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Один разработчик</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Полный цикл</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Абсолютный контроль</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
