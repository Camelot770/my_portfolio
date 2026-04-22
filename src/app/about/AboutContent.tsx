'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

// --- Data ---

const stats = [
  { number: '15+', label: 'Проектов' },
  { number: '100%', label: 'Довольных клиентов' },
  { number: '0', label: 'Посредников между вами и командой' },
];

const values = [
  {
    num: '01',
    title: 'Прямая коммуникация',
    description:
      'Никаких менеджеров между вами и разработчиками. Вы говорите с теми, кто пишет код. Это быстрее, точнее и честнее.',
    colSpan: 'lg:col-span-2',
    rowSpan: '',
  },
  {
    num: '02',
    title: 'Качество без шаблонов',
    description:
      'Каждый проект — с нуля под конкретную задачу. Мы не используем готовые шаблоны для воплощения ваших идей.',
    colSpan: '',
    rowSpan: 'lg:row-span-2',
  },
  {
    num: '03',
    title: 'Ответственность до конца',
    description:
      'Проект не заканчивается, пока вы не довольны результатом. Не пока закончились часы. Не пока вышли сроки.',
    colSpan: '',
    rowSpan: '',
  },
  {
    num: '04',
    title: 'Скорость без суеты',
    description:
      'Математический подход к разработке: сначала продумать, потом писать. Меньше переделок, быстрее результат.',
    colSpan: '',
    rowSpan: '',
  },
];

const orbits = [
  {
    radius: 100,
    duration: 30,
    items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data'],
  },
  {
    radius: 170,
    duration: 40,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
  },
  {
    radius: 240,
    duration: 50,
    items: ['PostgreSQL', 'Supabase', 'REST API', 'Bot API', 'Mini Apps', 'GraphQL'],
  },
];

// --- Components ---

function AnimatedStat({
  stat,
  inView,
}: {
  stat: (typeof stats)[number];
  inView: boolean;
}) {
  const numericValue = parseInt(stat.number) || 0;
  const suffix = stat.number.replace(/\d+/, '');
  const display = useCountUp({
    target: numericValue,
    duration: numericValue === 0 ? 0.5 : 2,
    inView,
  });

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <span className="text-display-2 font-heading font-bold text-accent">
        {display}
        {suffix}
      </span>
      <p className="mt-2 text-white/60">{stat.label}</p>
    </motion.div>
  );
}

function BentoCard({
  value,
}: {
  value: (typeof values)[number];
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`relative group ${value.colSpan} ${value.rowSpan}`}
    >
      {/* Static border (hidden on hover) */}
      <div className="absolute inset-0 rounded-2xl border border-border transition-opacity duration-500 group-hover:opacity-0" />
      {/* Gradient border (shown on hover) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-peach opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Content */}
      <div className="relative m-[1px] h-[calc(100%-2px)] bg-dark-secondary rounded-[calc(1rem-1px)] p-8">
        <span className="text-4xl font-heading font-bold text-accent/20 block mb-4">
          {value.num}
        </span>
        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
        <p className="text-muted">{value.description}</p>
      </div>
    </motion.div>
  );
}

function OrbitRing({
  orbit,
  orbitIndex,
  containerSize,
}: {
  orbit: (typeof orbits)[number];
  orbitIndex: number;
  containerSize: number;
}) {
  const center = containerSize / 2;
  return (
    <>
      {/* Dashed circle ring */}
      <div
        className="absolute rounded-full border border-dashed border-border/60"
        style={{
          width: orbit.radius * 2,
          height: orbit.radius * 2,
          top: center - orbit.radius,
          left: center - orbit.radius,
        }}
      />
      {/* Rotating group */}
      <motion.div
        className="absolute"
        style={{
          width: orbit.radius * 2,
          height: orbit.radius * 2,
          top: center - orbit.radius,
          left: center - orbit.radius,
        }}
        animate={{ rotate: orbitIndex % 2 === 0 ? 360 : -360 }}
        transition={{
          duration: orbit.duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {orbit.items.map((item, itemIndex) => {
          const angle = (itemIndex / orbit.items.length) * Math.PI * 2;
          const x = orbit.radius + orbit.radius * Math.cos(angle);
          const y = orbit.radius + orbit.radius * Math.sin(angle);
          return (
            <div
              key={item}
              className="absolute"
              style={{
                left: x,
                top: y,
              }}
            >
              {/* Counter-rotate to keep text upright */}
              <motion.div
                className="-translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: orbitIndex % 2 === 0 ? -360 : 360 }}
                transition={{
                  duration: orbit.duration,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <span className="px-3 py-1.5 bg-dark-secondary border border-border rounded-full text-sm text-muted whitespace-nowrap">
                  {item}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

// --- Main Component ---

export function AboutContent() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="pt-32">
      {/* Animated Stats */}
      <section ref={statsRef} className="py-16 bg-dark text-white">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} inView={statsInView} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Values */}
      <section ref={valuesRef} className="py-16 md:py-20">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
              <h2 className="text-display-3 font-heading font-bold">
                Ценности
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <BentoCard key={index} value={value} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orbiting Tech Stack */}
      <section ref={skillsRef} className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
              <h2 className="text-display-3 font-heading font-bold">
                Технологии
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl">
                Инструменты, которые мы используем для создания продуктов
              </p>
            </motion.div>

            {/* Desktop: Orbit visualization (client-only to avoid hydration mismatch from Math.cos/sin) */}
            {mounted && (
              <motion.div variants={fadeInUp} className="hidden md:flex justify-center items-center py-10">
                <div className="relative" style={{ width: 560, height: 560 }}>
                  {/* Central logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-24 h-24 rounded-full bg-dark-secondary border border-border flex items-center justify-center p-3">
                      <Image
                        src="/images/logo.png"
                        alt="StackLab"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* Orbit rings */}
                  {orbits.map((orbit, orbitIndex) => (
                    <OrbitRing
                      key={orbitIndex}
                      orbit={orbit}
                      orbitIndex={orbitIndex}
                      containerSize={560}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Mobile: Grid fallback */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={skillsInView ? 'visible' : 'hidden'}
              className="md:hidden grid grid-cols-2 gap-3"
            >
              {orbits.flatMap((orbit) => orbit.items).map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  className="px-4 py-3 bg-dark-secondary border border-border rounded-xl text-center text-sm text-muted"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-white bg-gradient-brand">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-3 font-heading font-bold mb-6">
              Давайте создадим что&#8209;то&nbsp;вместе
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Расскажите о своей идее — обсудим, как превратить её в работающий
              продукт
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-dark-secondary text-foreground border border-border hover:border-accent transition-all duration-300"
            >
              Написать
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
