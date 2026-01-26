'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="text-[10rem] md:text-[15rem] font-heading font-bold text-accent/20 leading-none">
              404
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-display-3 font-heading font-bold -mt-10 md:-mt-16 relative z-10"
          >
            Страница не найдена
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-muted mt-4 mb-8">
            Возможно, страница была перемещена или удалена. Попробуйте начать с главной.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary">
              На главную
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Связаться
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
