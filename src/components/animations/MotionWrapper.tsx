'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface MotionWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function MotionWrapper({
  children,
  variants = defaultVariants,
  className = '',
  delay = 0,
  once = true,
}: MotionWrapperProps) {
  const [ref, isInView] = useInView({ triggerOnce: once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
