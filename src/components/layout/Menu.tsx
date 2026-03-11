'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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

  const handleNavigation = (href: string) => {
    onClose();
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

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
              <button
                onClick={() => handleNavigation(link.href)}
                className="group flex items-center gap-4 cursor-pointer"
                data-no-cursor-fill
              >
                <span className={`font-heading font-bold transition-colors group-hover:text-accent ${link.accent ? 'text-5xl md:text-7xl lg:text-8xl text-white/90' : 'text-4xl md:text-6xl lg:text-7xl text-white'}`}>
                  {link.label}
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '60px' }}
                  className="h-1 bg-accent rounded-full"
                />
              </button>
            </motion.div>
          ))}
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
            Обсудить проект
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 left-0 right-0 container"
        >
          <div className="flex items-center justify-end text-white/60">
            <p className="text-sm">
              © {new Date().getFullYear()} StackLab
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
