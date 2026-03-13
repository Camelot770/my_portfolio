'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const revealWords = ['iOS-приложения', 'MAX и Telegram Mini Apps', 'Веб-продукты'];

// Generate circle points for clip-path polygon
function generateCircleHoleClipPath(
  cx: number,
  cy: number,
  r: number
): string {
  const points = 36; // Number of points for circle approximation
  const circlePoints: string[] = [];

  // Generate circle points (clockwise from top)
  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    circlePoints.push(`${x}px ${y}px`);
  }

  // Create polygon: outer rectangle -> to circle start -> around circle -> back to rectangle
  return `polygon(
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 0,
    ${cx}px 0,
    ${circlePoints.join(', ')},
    ${cx}px 0
  )`;
}

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Positions - different for mobile (moved more to the left)
  const centerPosition = isMobile ? { x: 100, y: 250 } : { x: 680, y: 400 };
  const defaultPosition = isMobile ? { x: 80, y: 200 } : { x: 120, y: 380 };

  const [mousePosition, setMousePosition] = useState(centerPosition);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Initial animation: center -> left
  useEffect(() => {
    // Set initial position based on mobile state (more to the left on mobile)
    const initialPos = isMobile ? { x: 100, y: 250 } : { x: 680, y: 400 };
    setMousePosition(initialPos);

    const timer = setTimeout(() => {
      const targetPos = isMobile ? { x: 80, y: 200 } : { x: 120, y: 380 };
      setMousePosition(targetPos);
      setHasAnimatedIn(true);
    }, 800); // Start moving after 800ms

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && isHovering && hasAnimatedIn) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovering, hasAnimatedIn]);

  // Reset to default position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hasAnimatedIn) {
      setMousePosition(defaultPosition);
    }
  };

  // Smaller circle on mobile
  const circleSize = isMobile ? 220 : 320;

  // Generate repeated text lines to fill the screen
  const generateTextLines = () => {
    const lines = [];
    for (let i = 0; i < 45; i++) {
      lines.push(
        <div
          key={i}
          className="whitespace-nowrap text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-heading font-bold leading-[1.3] tracking-tight"
        >
          {[...Array(8)].map((_, repeatIndex) => (
            revealWords.map((word, wordIndex) => (
              <span key={`${repeatIndex}-${wordIndex}`}>
                {word}
                <span className="mx-3 md:mx-5 opacity-60">•</span>
              </span>
            ))
          ))}
        </div>
      );
    }
    return lines;
  };

  const clipPathWithHole = isHovering
    ? generateCircleHoleClipPath(
        mousePosition.x,
        mousePosition.y,
        circleSize / 2
      )
    : 'none';

  return (
    <section
      ref={heroRef}
      data-hero
      className="relative min-h-screen overflow-hidden bg-background"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hidden text layer - only visible through the circle */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          clipPath: `circle(${circleSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px)`,
          background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
          willChange: 'clip-path',
          transition: isHovering ? 'none' : 'clip-path 2s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-white select-none"
            style={{
              transform: 'rotate(-12deg) scale(1.5)',
              transformOrigin: 'center center',
            }}
          >
            {generateTextLines()}
          </div>
        </div>
      </div>

      {/* Main content overlay - with circle hole cut out */}
      <div
        className="relative z-10 min-h-screen flex flex-col justify-end pb-20 md:pb-32 pt-32"
        style={{
          clipPath: clipPathWithHole,
        }}
      >
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6 text-foreground"
              style={{ letterSpacing: '-0.02em' }}
            >
              Превращаем идеи в работающие продукты: от iOS-приложений до MAX и Telegram Mini Apps и веб-сервисов
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/contact" className="btn btn-primary">
                Обсудить проект
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                Смотреть работы
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          clipPath: clipPathWithHole,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-foreground/50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
