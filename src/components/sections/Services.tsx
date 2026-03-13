'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { services } from '@/data/services';
import { Accordion } from '@/components/ui/Accordion';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const accordionItems = services.map((service, index) => ({
    id: service.id,
    number: String(index + 1).padStart(2, '0'),
    title: service.title,
    content: (
      <div className="space-y-4 pl-0 md:pl-16">
        <p>{service.shortDescription}</p>
        <div>
          <h4 className="font-semibold text-white mb-2">Что входит:</h4>
          <ul className="list-disc list-inside space-y-1 text-white/70">
            {service.includes.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <p className="text-accent font-medium">{service.result}</p>
      </div>
    ),
  }));

  return (
    <section ref={ref} className="section bg-dark text-white">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="mb-12 md:mb-16">
            <AnimatedHeading
              className="text-display-3 font-heading font-bold"
              inView={isInView}
            >
              Услуги
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-lg text-white/60 max-w-2xl"
            >
              Полный цикл разработки: от идеи до работающего продукта
            </motion.p>
          </div>

          <motion.div variants={fadeInUp}>
            <Accordion
              items={accordionItems}
              variant="numbered"
              className="[&_button]:text-white [&_button]:border-white/20 [&_span]:text-white/60"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <a href="/services" className="btn btn-accent">
              Все услуги
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
