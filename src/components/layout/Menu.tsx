'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuSlideIn, staggerContainer, menuItemVariants } from '@/lib/animations';

interface MenuProps {
  onClose: () => void;
}

const menuLinks = [
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/services', label: 'Услуги' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contact', label: 'Контакты' },
];

export function Menu({ onClose }: MenuProps) {
  return (
    <motion.div
      variants={menuSlideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-40 bg-dark"
    >
      <div className="container h-full flex flex-col justify-center">
        <motion.nav
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 md:gap-6"
        >
          {menuLinks.map((link) => (
            <motion.div key={link.href} variants={menuItemVariants}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center gap-4"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white transition-colors group-hover:text-accent">
                  {link.label}
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '60px' }}
                  className="h-1 bg-accent rounded-full"
                />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-20"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="btn btn-accent text-lg"
          >
            Обсудить проект
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-0 right-0 container"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white/60">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a
                href="mailto:naum_kogan@inbox.ru"
                className="hover:text-white transition-colors"
              >
                naum_kogan@inbox.ru
              </a>
              <a
                href="https://t.me/Naum0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @Naum0
              </a>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} StackLab
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
