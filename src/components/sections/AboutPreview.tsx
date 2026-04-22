'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/Button';

export function AboutPreview() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="section bg-background">
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

            {/* Mini-stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-border">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">15+</div>
                <div className="text-sm text-muted mt-1">Проектов</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">100%</div>
                <div className="text-sm text-muted mt-1">Доведено до запуска</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">0</div>
                <div className="text-sm text-muted mt-1">Посредников</div>
              </div>
            </div>

            <Button href="/about" variant="secondary">
              Подробнее о нас
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/preview.jpg"
                alt="StackLab"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
