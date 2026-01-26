'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp } from '@/lib/animations';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionTitleProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-display-3 font-heading font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
