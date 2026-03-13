'use client';

import { motion } from 'framer-motion';

const lines = [
  'iOS-ПРИЛОЖЕНИЯ',
  'MAX И TELEGRAM MINI APPS',
  'ЧАТБОТЫ И АВТОМАТИЗАЦИЯ',
  'ВЕБ-СЕРВИСЫ И ЛЕНДИНГИ',
];

function MarqueeLine({ text, reverse, speed = 20 }: { text: string; reverse?: boolean; speed?: number }) {
  // Repeat the text enough times to fill the screen seamlessly
  const repeated = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="flex items-center gap-8 shrink-0">
      <span>{text}</span>
      <span className="w-3 h-3 bg-accent rounded-full shrink-0" />
    </span>
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap py-1.5 md:py-2">
      <motion.div
        className="flex items-center gap-8"
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {repeated}
      </motion.div>
    </div>
  );
}

export function FounderSection() {
  return (
    <section className="bg-[#1a1a2e] text-white relative overflow-hidden py-10 md:py-14">
      <div className="flex flex-col gap-1 md:gap-2">
        {lines.map((line, index) => (
          <div
            key={line}
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold tracking-tight text-white/90"
          >
            <MarqueeLine
              text={line}
              reverse={index % 2 === 1}
              speed={25 + index * 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
