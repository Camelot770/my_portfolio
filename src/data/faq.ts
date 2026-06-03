import type { CopyMode } from '@/lib/copy';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const RU_FAQ: FAQItem[] = [
  {
    id: '1',
    question: 'Сколько стоит разработка?',
    answer:
      'Зависит от сложности проекта. Простой бот для MAX или Telegram и большое iOS-приложение — разные объёмы работы. Напишите с описанием задачи, и мы дадим конкретную оценку.',
  },
  {
    id: '2',
    question: 'Сколько времени займёт проект?',
    answer:
      'Ориентировочно: от 1 до 3 недель для бота или Mini App, от 2 до 4 недель для веб-сервиса, от 1 до 2 месяцев для iOS-приложения. Точные сроки обсуждаем после знакомства с задачей.',
  },
  {
    id: '3',
    question: 'Нужно ли вам готовое техническое задание?',
    answer:
      'Нет. Достаточно описать идею своими словами. Мы поможем структурировать требования и переведём их на язык разработки.',
  },
  {
    id: '4',
    question: 'Что если мне не понравится результат?',
    answer:
      'Работаем итерациями. На каждом этапе показываем результаты и согласовываем направление с вашими ожиданиями. К финалу продукт уже точно соответствует задаче — без сюрпризов.',
  },
  {
    id: '5',
    question: 'Можно ли доработать существующий проект?',
    answer:
      'Да, если код позволяет. Нужно посмотреть на текущее состояние проекта и оценить возможность доработки.',
  },
  {
    id: '6',
    question: 'Работаете ли вы по договору?',
    answer:
      'Да. Официальное оформление, прозрачные условия, фиксированные договорённости.',
  },
];

const EN_FAQ: FAQItem[] = [
  {
    id: '1',
    question: 'How much does development cost?',
    answer:
      'It depends on the complexity of the project. A simple bot for MAX or Telegram and a large iOS app are very different in scope. Send us a description of your task and we will give you a concrete estimate.',
  },
  {
    id: '2',
    question: 'How long will the project take?',
    answer:
      'Roughly: 1 to 3 weeks for a bot or Mini App, 2 to 4 weeks for a web service, 1 to 2 months for an iOS app. Exact timelines are agreed after we understand the task.',
  },
  {
    id: '3',
    question: 'Do you need a finished technical specification?',
    answer:
      'No. It is enough to describe the idea in your own words. We will help structure the requirements and translate them into engineering terms.',
  },
  {
    id: '4',
    question: 'What if I do not like the result?',
    answer:
      'We work in iterations. At each stage we show results and align the direction with your expectations. By the end the product matches the task — no surprises.',
  },
  {
    id: '5',
    question: 'Can you build on top of an existing project?',
    answer:
      'Yes, if the codebase allows it. We need to review the current state of the project and assess what can be extended.',
  },
  {
    id: '6',
    question: 'Do you work under contract?',
    answer:
      'Yes. Formal paperwork, transparent terms, fixed agreements.',
  },
];

export const faqItemsByLocale: Record<CopyMode, FAQItem[]> = {
  ru: RU_FAQ,
  en: EN_FAQ,
};

// Backwards-compatible default export (RU) so non-localised callers still work.
export const faqItems: FAQItem[] = RU_FAQ;
