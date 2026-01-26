'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/Button';

const stats = [
  { number: '3+', label: 'Года в разработке' },
  { number: '10+', label: 'Проектов' },
  { number: '100%', label: 'Довольных клиентов' },
];

const skills = [
  { category: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'HealthKit', 'CloudKit'] },
  { category: 'Telegram', items: ['Telegram Bot API', 'Mini Apps', 'Payments API'] },
  { category: 'Web', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
  { category: 'Backend', items: ['PostgreSQL', 'Supabase', 'REST API', 'GraphQL'] },
];

const values = [
  {
    title: 'Прямая коммуникация',
    description:
      'Никаких менеджеров между вами и разработчиком. Вы говорите с тем, кто пишет код. Это быстрее, точнее и честнее.',
  },
  {
    title: 'Качество без шаблонов',
    description:
      'Каждый проект — с нуля под конкретную задачу. Мы не натягиваем готовые решения на вашу идею.',
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
      {/* Hero */}
      <section className="pb-section">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <motion.div variants={fadeInLeft}>
              <span className="text-accent font-medium tracking-wide uppercase">
                Обо мне
              </span>
              <h1 className="text-display-2 font-heading font-bold mt-4 mb-6">
                Привет, я создаю цифровые продукты
              </h1>
              <div className="space-y-4 text-lg text-muted">
                <p>
                  Всё началось с математики. Университетские годы, формулы, доказательства, поиск элегантных решений для сложных задач. В какой-то момент стало ясно: программирование — это та же математика, только результат можно увидеть и потрогать.
                </p>
                <p>
                  Первый коммерческий проект — Telegram Mini App для заказа баббл-чая. Полноценный сервис с предоплатой, системой бонусов и интеграциями. Не учебный проект. Реальный бизнес, реальные пользователи, реальные транзакции.
                </p>
                <p>
                  Этот опыт определил всё дальнейшее: работать напрямую с заказчиком, отвечать за результат лично, делать каждый проект как свой собственный продукт.
                </p>
                <p className="font-semibold text-foreground">
                  Так появился StackLab.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/preview.jpg"
                  alt="StackLab"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
      <section ref={valuesRef} className="section">
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
                Принципы, которыми руководствуюсь в работе
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
      <section ref={skillsRef} className="section bg-background">
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
                Инструменты, которые использую для создания продуктов
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
              Давайте создадим что-то вместе
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Расскажите о своей идее — обсудим, как превратить её в работающий продукт
            </p>
            <Button
              href="/contact"
              className="bg-white text-accent hover:bg-white/90"
            >
              Написать
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
