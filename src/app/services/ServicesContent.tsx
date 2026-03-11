'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useInView } from '@/hooks/useInView';
import { services, processSteps } from '@/data/services';

const serviceIcons: Record<string, JSX.Element> = {
  phone: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  telegram: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
  messenger: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  web: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
};

export function ServicesContent() {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="pb-section">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeInUp}
              className="text-accent font-medium tracking-wide uppercase"
            >
              Услуги
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-display-2 font-heading font-bold mt-4 mb-6"
            >
              Полный цикл разработки
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted">
              От идеи до работающего продукта. iOS-приложения, Telegram и Max Mini Apps, боты и веб-сайты для стартапов и малого бизнеса.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section ref={servicesRef} className="section bg-background">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start p-8 md:p-12 bg-white rounded-3xl"
              >
                <div>
                  <div className="w-16 h-16 flex items-center justify-center bg-accent/10 text-accent rounded-2xl mb-6">
                    {serviceIcons[service.icon]}
                  </div>
                  <h2 className="text-heading-1 font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted mb-6">
                    {service.fullDescription}
                  </p>
                  <p className="font-semibold text-accent">{service.result}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">Что входит:</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted">
                          <svg
                            className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Для кого:</h3>
                    <p className="text-muted">{service.forWhom}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef} className="section">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
              <h2 className="text-display-3 font-heading font-bold">
                Как проходит работа
              </h2>
              <p className="mt-4 text-lg text-muted max-w-2xl">
                Прозрачный процесс от первого разговора до запуска продукта
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <span className="text-6xl font-bold text-accent/20">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
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
              Готовы начать?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Расскажите о своей задаче — обсудим решение и дам оценку
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-white text-[#4169E1] hover:bg-white/90 transition-all duration-300"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
