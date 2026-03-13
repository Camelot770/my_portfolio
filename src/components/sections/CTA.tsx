'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  // Magnetic button
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMove = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setBtnPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    });
  }, []);

  const handleBtnLeave = useCallback(() => {
    setBtnPos({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={ref}
      className="section text-white relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
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

          <motion.div variants={fadeInUp}>
            <motion.a
              ref={btnRef}
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-dark text-foreground hover:bg-dark-secondary transition-colors duration-300"
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              onMouseMove={handleBtnMove}
              onMouseLeave={handleBtnLeave}
            >
              Обсудить проект
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
