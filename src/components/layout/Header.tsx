'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from './Menu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="relative z-50">
              <Image
                src="/images/logo.png"
                alt="StackLab"
                width={400}
                height={120}
                className="h-24 md:h-32 w-auto"
                priority
              />
            </Link>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 flex items-center gap-3 px-5 py-3 text-sm font-medium tracking-wide uppercase rounded-full overflow-hidden group"
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <span
                className={`relative z-10 ${isMenuOpen ? 'text-white' : 'text-foreground'}`}
              >
                {isMenuOpen ? 'Закрыть' : 'Меню'}
              </span>

              <div className="relative w-6 h-4 flex flex-col justify-between z-10">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                    scaleX: isMenuOpen ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`block h-0.5 w-full origin-center transition-colors ${
                    isMenuOpen ? 'bg-white' : 'bg-foreground'
                  }`}
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    scaleX: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`block h-0.5 w-full transition-colors ${
                    isMenuOpen ? 'bg-white' : 'bg-foreground'
                  }`}
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                    scaleX: isMenuOpen ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`block h-0.5 w-full origin-center transition-colors ${
                    isMenuOpen ? 'bg-white' : 'bg-foreground'
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
