'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface GradientBlobsProps {
  className?: string;
}

export function GradientBlobs({ className = '' }: GradientBlobsProps) {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // On mobile OR reduced motion: static blobs, no animation, smaller blur
  if (isMobile || prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      >
        <div
          className="absolute w-[250px] h-[250px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #1F2F6A 0%, transparent 70%)',
            filter: 'blur(40px)',
            top: '-10%',
            left: '-5%',
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #E3B7A0 0%, transparent 70%)',
            filter: 'blur(40px)',
            top: '20%',
            right: '-5%',
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #1F2F6A 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '-10%',
          left: '-5%',
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #E3B7A0 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '20%',
          right: '-5%',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #1F2F6A 0%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '10%',
          left: '30%',
        }}
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
