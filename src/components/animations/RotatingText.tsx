'use client';

import { motion } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  radius?: number;
  className?: string;
}

export function RotatingText({ words, radius = 120, className = '' }: RotatingTextProps) {
  const text = words.join(' • ');
  const characters = text.split('');
  const totalCharacters = characters.length;

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {characters.map((char, index) => {
        const angle = (index / totalCharacters) * 360;
        return (
          <span
            key={index}
            className="absolute left-1/2 font-medium text-sm tracking-wider uppercase"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              transformOrigin: '0 0',
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}
