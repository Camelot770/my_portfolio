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
            <span className="text-accent font-medium tracking-wide uppercase">
              О студии
            </span>
            <h2 className="text-display-3 font-heading font-bold mt-4 mb-6">
              StackLab — студия, где каждый проект создаётся с нуля под вашу задачу
            </h2>
            <p className="text-lg text-muted mb-6">
              Команда, которая работает напрямую с клиентом. Между вами и вашим продуктом нет посредников, менеджеров и потерянных в переводе требований.
            </p>
            <p className="text-lg text-muted mb-8">
              Вы говорите напрямую с теми, кто пишет код. Решения принимаются быстро. Правки вносятся сразу. Результат — в срок.
            </p>
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
