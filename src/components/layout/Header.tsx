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
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link href="/" className="relative z-50">
              <Image
                src="/images/logo.jpg"
                alt="StackLab"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent"
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              <span className={isMenuOpen ? 'text-white' : ''}>
                {isMenuOpen ? 'Закрыть' : 'Меню'}
              </span>
              <div className="relative w-6 h-4 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                  className={`block h-0.5 w-full transition-colors ${
                    isMenuOpen ? 'bg-white' : 'bg-foreground'
                  }`}
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  className={`block h-0.5 w-full transition-colors ${
                    isMenuOpen ? 'bg-white' : 'bg-foreground'
                  }`}
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  className={`block h-0.5 w-full transition-colors ${
                    isMenuOpen ? 'bg-white' : 'bg-foreground'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
