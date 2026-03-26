'use client';

import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
  inView?: boolean;
}

export function AnimatedHeading({
  children,
  className = '',
  tag = 'h2',
  inView = true,
}: AnimatedHeadingProps) {
  const words = children.split(' ');
  const Tag = tag;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const wordVariant = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ perspective: 600 }}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            className="inline-block mr-[0.3em]"
            style={{ transformOrigin: 'bottom center' }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
