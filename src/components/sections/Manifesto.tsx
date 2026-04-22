'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const paragraph = `Мы верим, что за каждым великим продуктом стоит простая идея. Наша задача — взять эту идею и превратить её в код, который работает.`;

const features = [
  'Сильная команда',
  'Полный цикл',
  'Абсолютный контроль',
];

function Word({
  word,
  index,
  total,
  progress,
  isHighlight,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isHighlight: boolean;
}) {
  const start = (index / total) * 0.8;
  const end = start + 0.06;

  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.3em] ${isHighlight ? 'text-accent' : 'text-foreground'}`}
    >
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.15'],
  });

  const words = paragraph.split(/\s+/);

  const actualHighlightStart = words.indexOf('идею') + 1;

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background" aria-labelledby="manifesto-heading">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Word-by-word scroll reveal */}
          <h2
            id="manifesto-heading"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-snug text-center"
          >
            {words.map((word, index) => (
              <Word
                key={index}
                word={word}
                index={index}
                total={words.length}
                progress={scrollYProgress}
                isHighlight={index >= actualHighlightStart}
              />
            ))}
          </h2>

          {/* Features */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
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

function FeatureItem({
  feature,
  index,
  progress,
}: {
  feature: string;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.85 + index * 0.04;
  const end = start + 0.06;

  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="flex items-center gap-2 text-muted"
    >
      <span className="w-2 h-2 bg-accent rounded-full" />
      <span>{feature}</span>
    </motion.div>
  );
}
