'use client';

import { motion } from 'framer-motion';
import { RotatingText } from '@/components/animations/RotatingText';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const heroWords = ['iOS', 'Telegram', 'Web', 'Apps', 'Код'];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="text-accent font-medium tracking-wide uppercase">
              Студия разработки
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-display-1 font-heading font-bold leading-tight mb-8"
          >
            <span className="block">Превращаю</span>
            <span className="flex items-center gap-4 md:gap-8 flex-wrap">
              <span>идеи в</span>
              <span className="relative inline-flex items-center justify-center w-32 h-32 md:w-44 md:h-44">
                <span className="absolute inset-0 bg-accent rounded-full" />
                <RotatingText
                  words={heroWords}
                  radius={55}
                  className="text-white"
                />
              </span>
            </span>
            <span className="block">продукты</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted max-w-2xl mb-10"
          >
            iOS-приложения, Telegram Mini Apps и веб-продукты для стартапов и малого бизнеса. От идеи до публикации.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/contact" className="btn btn-primary">
              Обсудить проект
            </a>
            <a href="/portfolio" className="btn btn-secondary">
              Смотреть работы
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-foreground"
        >
          <span className="text-sm mb-2 opacity-50">Скролл</span>
          <svg
            className="w-6 h-6 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
