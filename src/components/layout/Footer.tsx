'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const footerLinks = [
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contact', label: 'Контакты' },
];

const legalLinks = [
  { href: '/privacy', label: 'Политика конфиденциальности' },
];

export function Footer() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-dark text-white py-16 md:py-20">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/LogoStackLab.jpg"
                alt="StackLab"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 max-w-md mb-6">
              Студия разработки полного цикла. iOS-приложения, Telegram и Max Mini Apps, боты и веб-продукты для стартапов и малого бизнеса.
            </p>
            <p className="text-lg font-medium text-accent">
              Идея → Код → Результат
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:naum_kogan@inbox.ru"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  naum_kogan@inbox.ru
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Naum0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Telegram: @Naum0
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} StackLab. Все права защищены.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 text-sm hover:text-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
