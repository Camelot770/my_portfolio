'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useInView } from '@/hooks/useInView';

const stats = [
  { number: '15+', label: 'Проектов' },
  { number: '100%', label: 'Довольных клиентов' },
  { number: '0', label: 'Посредников между вами и командой' },
];

const skills = [
  { category: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'HealthKit', 'CloudKit'] },
  { category: 'MAX и Telegram', items: ['Telegram Bot API', 'MAX Bot API', 'Mini Apps', 'Payments API'] },
  { category: 'Web', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
  { category: 'Backend', items: ['PostgreSQL', 'Supabase', 'REST API', 'GraphQL'] },
];

const values = [
  {
    title: 'Прямая коммуникация',
    description:
      'Никаких менеджеров между вами и разработчиками. Вы говорите с теми, кто пишет код. Это быстрее, точнее и честнее.',
  },
  {
    title: 'Качество без шаблонов',
    description:
      'Каждый проект — с нуля под конкретную задачу. Мы не используем готовые шаблоны для воплощения ваших идей.',
  },
  {
    title: 'Ответственность до конца',
    description:
      'Проект не заканчивается, пока вы не довольны результатом. Не пока закончились часы. Не пока вышли сроки.',
  },
  {
    title: 'Скорость без суеты',
    description:
      'Математический подход к разработке: сначала продумать, потом писать. Меньше переделок, быстрее результат.',
  },
];

export function AboutContent() {
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });

  return (
    <div className="pt-32">
      {/* Stats */}
      <section ref={statsRef} className="py-16 bg-dark text-white">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <span className="text-display-2 font-heading font-bold text-accent">
                  {stat.number}
                </span>
                <p className="mt-2 text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-8 bg-white rounded-2xl border border-border"
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <h3 className="text-lg font-bold mb-4 text-accent">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-accent text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-3 font-heading font-bold mb-6">
              Давайте создадим что&#8209;то&nbsp;вместе
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Расскажите о своей идее — обсудим, как превратить её в работающий продукт
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-white text-accent hover:bg-white/90 transition-all duration-300"
            >
              Написать
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
