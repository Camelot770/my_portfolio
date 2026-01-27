'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      {/* First overlay - soft cream/beige */}
      <motion.div
        className="fixed inset-0 z-[100] origin-left pointer-events-none"
        style={{ backgroundColor: '#F5F0EB' }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Second overlay - warm taupe */}
      <motion.div
        className="fixed inset-0 z-[99] origin-left pointer-events-none"
        style={{ backgroundColor: '#D4C5B9' }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1,
        }}
      />

      {/* Third overlay - soft charcoal */}
      <motion.div
        className="fixed inset-0 z-[98] origin-left pointer-events-none"
        style={{ backgroundColor: '#2C2C2C' }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2,
        }}
      />

      {/* Page content with smooth fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
