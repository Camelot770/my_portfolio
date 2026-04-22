'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ArrowButton } from '@/components/ui/ArrowButton';

export function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="section text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1F2F6A, #E3B7A0)' }}
    >
      <div className="container relative z-10">
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

          <motion.div variants={fadeInUp} className="flex justify-center">
            <ArrowButton href="/contact" variant="dark">
              Обсудить проект
            </ArrowButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
