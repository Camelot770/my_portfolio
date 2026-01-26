'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { faqItems } from '@/data/faq';
import { Accordion } from '@/components/ui/Accordion';

export function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const accordionItems = faqItems.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section ref={ref} className="section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
            <h2 className="text-display-3 font-heading font-bold">
              Частые вопросы
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl">
              Ответы на вопросы, которые чаще всего задают клиенты
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-3xl">
            <Accordion items={accordionItems} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
