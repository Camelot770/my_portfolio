'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/Button';

function AnimatedStat({
  target,
  suffix,
  label,
  inView,
}: {
  target: number;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const value = useCountUp({ target, duration: 2, inView });
  return (
    <div>
      <div className="text-3xl md:text-4xl font-heading font-bold text-accent tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}

export function AboutPreview() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax on image: moves up slower than scroll
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section ref={ref} className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <motion.div variants={fadeInLeft} className="order-2 lg:order-1">
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm">
              Кто мы
            </span>
            <h2 className="text-display-3 font-heading font-bold mt-4 mb-6">
              StackLab: проекты под вас,<br />разработчики на связи
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              Команда работает напрямую с клиентом. Между вами и продуктом нет посредников, менеджеров и потерянных в переводе требований.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Вы говорите с теми, кто пишет код. Решения принимаются быстро, правки вносятся сразу, результат — в срок.
            </p>

            {/* Animated stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
              <AnimatedStat target={15} suffix="+" label="Проектов" inView={isInView} />
              <AnimatedStat target={100} suffix="%" label="Доведено до запуска" inView={isInView} />
              <AnimatedStat target={0} label="Посредников" inView={isInView} />
            </div>

            <Button href="/about" variant="secondary">
              Подробнее о нас
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2" ref={parallaxRef}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{ y: imageY, scale: imageScale }}
              >
                <Image
                  src="/images/preview.jpg"
                  alt="StackLab"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
