'use client';

import { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { GradientBlobs } from '@/components/ui/GradientBlobs';
import { ArrowButton } from '@/components/ui/ArrowButton';

const revealWords = ['iOS-приложения', 'MAX и Telegram Mini Apps', 'Веб-продукты'];

function MagneticButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.25,
          y: (e.clientY - rect.top - rect.height / 2) * 0.25,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      {children}
    </motion.a>
  );
}

// Generate circle points for clip-path polygon
function generateCircleHoleClipPath(
  cx: number,
  cy: number,
  r: number
): string {
  const points = 36;
  const circlePoints: string[] = [];

  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2 - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    circlePoints.push(`${x}px ${y}px`);
  }

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
  const outerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollStarted, setScrollStarted] = useState(false);

  // Scroll progress: 0 when outer top hits viewport top, 1 when outer bottom hits viewport top
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start start', 'end start'],
  });

  // Detect when scroll has started — freezes mouse-driven circle
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setScrollStarted(v > 0.02);
    });
  }, [scrollYProgress]);

  // Check for mobile on mount
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial mouse positions (higher on screen)
  const defaultPosition = isMobile ? { x: 80, y: 140 } : { x: 120, y: 220 };

  const [mousePosition, setMousePosition] = useState(defaultPosition);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Initial animation: center -> left
  useEffect(() => {
    const initialPos = isMobile ? { x: 100, y: 180 } : { x: 680, y: 260 };
    setMousePosition(initialPos);

    const timer = setTimeout(() => {
      const targetPos = isMobile ? { x: 80, y: 140 } : { x: 120, y: 220 };
      setMousePosition(targetPos);
      setHasAnimatedIn(true);
    }, 800);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Freeze mouse tracking once scroll begins
      if (
        heroRef.current &&
        isHovering &&
        hasAnimatedIn &&
        !scrollStarted
      ) {
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
  }, [isHovering, hasAnimatedIn, scrollStarted]);

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hasAnimatedIn && !scrollStarted) {
      setMousePosition(defaultPosition);
    }
  };

  // Base circle radius (small, interactive). Grows with scroll progress.
  const baseRadius = isMobile ? 110 : 160;

  // Scroll-driven radius: base → huge (covers entire viewport and beyond)
  const scrollRadius = useTransform(
    scrollYProgress,
    [0, 0.7],
    [baseRadius, 2400]
  );

  // Foreground content (h1, p, buttons) fades + slides up
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);

  // Scroll indicator fades quickly
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0]
  );

  // Revealed text layer parallax + end-fade
  const revealedTextY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const revealedTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const revealedTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.92],
    [1, 1, 0]
  );

  // Clip-path templates driven by motion values
  const cxMV = useMotionValue(mousePosition.x);
  const cyMV = useMotionValue(mousePosition.y);

  // Sync React state position → motion values
  useEffect(() => {
    cxMV.set(mousePosition.x);
    cyMV.set(mousePosition.y);
  }, [mousePosition, cxMV, cyMV]);

  const revealClipPath = useMotionTemplate`circle(${scrollRadius}px at ${cxMV}px ${cyMV}px)`;

  // Generate repeated text lines to fill the screen
  const generateTextLines = () => {
    const lines = [];
    const lineCount = isMobile ? 20 : 45;
    const repeatCount = isMobile ? 3 : 8;
    for (let i = 0; i < lineCount; i++) {
      lines.push(
        <div
          key={i}
          className="whitespace-nowrap text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-heading font-bold leading-[1.3] tracking-tight"
        >
          {[...Array(repeatCount)].map((_, repeatIndex) =>
            revealWords.map((word, wordIndex) => (
              <span key={`${repeatIndex}-${wordIndex}`}>
                {word}
                <span className="mx-3 md:mx-5 opacity-60">•</span>
              </span>
            ))
          )}
        </div>
      );
    }
    return lines;
  };

  // Static hole polygon only when interactive (before scroll begins)
  const clipPathWithHole =
    isHovering && !scrollStarted
      ? generateCircleHoleClipPath(
          mousePosition.x,
          mousePosition.y,
          baseRadius
        )
      : 'none';

  return (
    <div
      ref={outerRef}
      className="relative"
      style={{ height: '200vh' }}
    >
      <section
        ref={heroRef}
        data-hero
        className="sticky top-0 h-screen overflow-hidden bg-background"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated gradient blobs */}
        <GradientBlobs />

        {/* Revealed gradient text layer — grows with scroll */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            clipPath: revealClipPath,
            background: 'linear-gradient(135deg, #1F2F6A, #E3B7A0)',
            willChange: 'clip-path',
            opacity: revealedTextOpacity,
          }}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              y: revealedTextY,
              scale: revealedTextScale,
            }}
          >
            <div
              className="text-white select-none"
              style={{
                transform: 'rotate(-12deg) scale(1.5)',
                transformOrigin: 'center center',
              }}
            >
              {generateTextLines()}
            </div>
          </motion.div>
        </motion.div>

        {/* Main content overlay — fades + slides up on scroll */}
        <motion.div
          className="relative z-10 min-h-screen flex flex-col justify-end pb-20 md:pb-32 pt-32"
          style={{
            clipPath: clipPathWithHole,
            opacity: contentOpacity,
            y: contentY,
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
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted max-w-2xl mb-8"
              >
                Разработка Mini Apps, чат-ботов и сервисов для MAX — для бизнеса, госструктур и стартапов. Полный цикл: от идеи до запуска.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <ArrowButton href="/contact">
                  Обсудить проект
                </ArrowButton>
                <MagneticButton href="/portfolio" className="btn btn-secondary">
                  Смотреть работы
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator — fades quickly on scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          style={{
            opacity: scrollIndicatorOpacity,
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
    </div>
  );
}
