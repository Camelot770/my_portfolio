'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';

const projectTypes = [
  'iOS-приложение',
  'Telegram Mini App',
  'Веб-сайт',
  'Другое',
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-section">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left Column - Info */}
          <motion.div variants={fadeInLeft}>
            <span className="text-accent font-medium tracking-wide uppercase">
              Контакты
            </span>
            <h1 className="text-display-2 font-heading font-bold mt-4 mb-6">
              Давайте работать вместе
            </h1>
            <p className="text-xl text-muted mb-10">
              Расскажите о своей идее — обсудим, как превратить её в работающий продукт. Отвечаю в течение 24 часов.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:naum_kogan@inbox.ru"
                  className="text-lg text-accent hover:underline"
                >
                  naum_kogan@inbox.ru
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Telegram</h3>
                <a
                  href="https://t.me/Naum0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-accent hover:underline"
                >
                  @Naum0
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-background rounded-2xl">
              <h3 className="font-semibold mb-2">Что нужно, чтобы начать?</h3>
              <p className="text-muted">
                Просто напишите. Расскажите идею, опишите задачу — разберёмся вместе.
                Техническое задание не обязательно: достаточно описать идею своими словами.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={fadeInUp}>
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8"
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
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Сообщение отправлено!</h3>
                  <p className="text-muted">
                    Спасибо за обращение. Я свяжусь с вами в ближайшее время.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-accent transition-colors"
                    placeholder="Как вас зовут?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium mb-2"
                  >
                    Тип проекта
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Выберите тип проекта</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Расскажите о вашей идее..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>

                <p className="text-sm text-muted text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-accent hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
