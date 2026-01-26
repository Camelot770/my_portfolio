'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container">
            <div className="bg-dark text-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    Мы уважаем вашу приватность
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    Этот сайт не использует cookies для отслеживания.
                    Подробнее в{' '}
                    <Link
                      href="/privacy"
                      className="text-accent hover:underline"
                    >
                      политике конфиденциальности
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={handleDecline}
                    className="px-6 py-3 text-sm font-medium text-white/70 hover:text-white transition-colors"
                  >
                    Закрыть
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 text-sm font-medium bg-accent text-white rounded-full hover:bg-accent-hover transition-colors"
                  >
                    Понятно
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
