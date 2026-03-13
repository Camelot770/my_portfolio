'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function ContactContent() {
  return (
    <div className="pt-32 pb-section min-h-screen flex items-center">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-accent font-medium tracking-wide uppercase"
          >
            Контакты
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-display-2 font-heading font-bold mt-4 mb-6"
          >
            Давайте работать вместе
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted mb-16"
          >
            Расскажите о своей идее — обсудим, как превратить её в работающий продукт.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap"
          >
            {/* MAX */}
            <motion.a
              href="https://max.ru/u/f9LHodD0cOLGKi7i1KndiYLJAU1rf7OCpsTt2VCnnAAN7qe3VUEjR99azyg"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 px-8 py-6 bg-dark-secondary border border-border rounded-[20px] w-full sm:w-auto shadow-none hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-shadow duration-300"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Image
                  src="/images/max-logo.png"
                  alt="MAX"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">MAX</div>
                <div className="font-semibold text-lg text-foreground">StackLab</div>
              </div>
              <svg className="w-5 h-5 text-muted ml-2 group-hover:translate-x-1 group-hover:text-[#0077FF] transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/Naum0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 px-8 py-6 bg-dark-secondary border border-border rounded-[20px] w-full sm:w-auto shadow-none hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-shadow duration-300"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0088cc] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">Telegram</div>
                <div className="font-semibold text-lg text-foreground">@Naum0</div>
              </div>
              <svg className="w-5 h-5 text-muted ml-2 group-hover:translate-x-1 group-hover:text-[#0088cc] transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:naum_kogan@inbox.ru"
              className="group flex items-center gap-5 px-8 py-6 bg-dark-secondary border border-border rounded-[20px] w-full sm:w-auto shadow-none hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)] transition-shadow duration-300"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-muted">Email</div>
                <div className="font-semibold text-lg text-foreground">naum_kogan@inbox.ru</div>
              </div>
              <svg className="w-5 h-5 text-muted ml-2 group-hover:translate-x-1 group-hover:text-purple-600 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-20 p-8 bg-dark-secondary border border-border rounded-[20px] text-left max-w-xl mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h3 className="font-semibold text-lg mb-3 text-foreground">Что нужно, чтобы начать?</h3>
            <p className="text-muted">
              Просто напишите. Расскажите идею, опишите задачу — разберёмся вместе.
              Техническое задание не обязательно: достаточно описать идею своими словами.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
