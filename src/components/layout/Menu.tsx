'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { menuSlideIn, staggerContainer, menuItemVariants } from '@/lib/animations';

interface MenuProps {
  onClose: () => void;
}

const menuLinks = [
  { href: '/', label: 'Главная', accent: true },
  { href: '/portfolio', label: 'Портфолио', accent: false },
  { href: '/services', label: 'Услуги', accent: false },
  { href: '/about', label: 'О нас', accent: false },
  { href: '/contact', label: 'Контакты', accent: false },
];

export function Menu({ onClose }: MenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (href: string) => {
    onClose();
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  // Escape key to close + focus trap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, a, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    // Focus first button in menu on open
    setTimeout(() => {
      const firstBtn = dialogRef.current?.querySelector<HTMLElement>('button, a');
      firstBtn?.focus();
    }, 100);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      ref={dialogRef}
      id="main-navigation-menu"
      variants={menuSlideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-40 bg-dark"
      role="dialog"
      aria-modal="true"
      aria-label="Главное меню"
    >
      <div className="container h-full flex flex-col justify-center">
        <motion.nav
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 md:gap-6"
          aria-label="Основная навигация"
        >
          {menuLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.href} variants={menuItemVariants}>
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="group flex items-center gap-4 cursor-pointer"
                  data-no-cursor-fill
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`font-heading font-bold transition-colors group-hover:text-accent ${isActive ? 'text-accent' : ''} ${link.accent ? 'text-5xl md:text-7xl lg:text-8xl text-foreground/90' : 'text-4xl md:text-6xl lg:text-7xl text-foreground'}`}>
                    {link.label}
                  </span>
                  <motion.span
                    initial={{ width: isActive ? 60 : 0 }}
                    whileHover={{ width: '60px' }}
                    className="h-1 bg-accent rounded-full"
                  />
                </button>
              </motion.div>
            );
          })}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-20"
        >
          <button
            onClick={() => handleNavigation('/contact')}
            className="btn btn-accent text-lg cursor-pointer"
          >
            Поговорить с нами
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-0 right-0 container"
        >
          <div className="flex items-center justify-end text-foreground/60">
            <p className="text-sm">
              © {new Date().getFullYear()} StackLab
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
