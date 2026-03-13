'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const lines = [
  { text: 'Мы верим, что за каждым великим', highlight: false },
  { text: 'продуктом стоит простая идея.', highlight: false },
  { text: 'Наша задача — взять эту идею', highlight: false },
  { text: 'и превратить её в код,', highlight: true },
  { text: 'который работает.', highlight: true },
];

const features = [
  'Сильная команда',
  'Полный цикл',
  'Абсолютный контроль',
];

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'start 0.1'],
  });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-background min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Main text with scroll-based line reveal */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-relaxed text-center">
            {lines.map((line, index) => (
              <Line
                key={index}
                text={line.text}
                isHighlight={line.highlight}
                index={index}
                total={lines.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

          {/* Features with delayed appearance */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature}
                feature={feature}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  text,
  isHighlight,
  index,
  total,
  progress,
}: {
  text: string;
  isHighlight: boolean;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  // Each line appears in sequence
  const lineStart = (index / total) * 0.7;
  const lineEnd = lineStart + 0.2;

  const opacity = useTransform(progress, [lineStart, lineEnd], [0, 1]);
  const y = useTransform(progress, [lineStart, lineEnd], [-30, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`block ${isHighlight ? 'text-accent' : 'text-foreground'}`}
    >
      {text}
    </motion.div>
  );
}

function FeatureItem({
  feature,
  index,
  progress,
}: {
  feature: string;
  index: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = 0.75 + index * 0.06;
  const end = start + 0.12;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [-20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="flex items-center gap-2 text-muted"
    >
      <span className="w-2 h-2 bg-accent rounded-full" />
      <span>{feature}</span>
    </motion.div>
  );
}
