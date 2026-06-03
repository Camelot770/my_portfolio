import type { CopyMode } from '@/lib/copy';

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  forWhom: string;
  result: string;
  icon: string;
}

const RU_SERVICES: Service[] = [
  {
    id: '1',
    slug: 'ios-apps',
    title: 'iOS-приложения',
    shortDescription:
      'Разработка мобильных приложений для iPhone — от идеи до публикации в App Store.',
    fullDescription:
      'Создаём нативные iOS-приложения на Swift и SwiftUI. Полный цикл разработки: от проектирования архитектуры до публикации в App Store и дальнейшей поддержки.',
    includes: [
      'Проектирование архитектуры и логики приложения',
      'Дизайн интерфейса',
      'Разработка и тестирование',
      'Подготовка к публикации и релиз в App Store',
    ],
    forWhom:
      'Стартапы с идеей мобильного продукта. Бизнесы, которым нужен собственный инструмент для клиентов. Те, кто хочет перенести сервис в карман пользователя.',
    result: 'Готовое приложение в App Store, которое можно скачать и использовать.',
    icon: 'phone',
  },
  {
    id: '2',
    slug: 'telegram-max-apps',
    title: 'MAX и Telegram Mini Apps и чат-боты',
    shortDescription:
      'Разработка Mini Apps и чат-ботов для MAX и Telegram — e-commerce, автоматизация, CRM и сервисы для бизнеса прямо в мессенджере.',
    fullDescription:
      'Разрабатываем Mini Apps и чат-ботов для MAX и Telegram: интернет-магазины, системы бронирования, личные кабинеты, автоматизацию бизнес-процессов и интеграции с платёжными системами. Сервисы для бизнеса, госструктур и организаций в экосистеме MAX.',
    includes: [
      'Разработка Mini App для MAX и Telegram',
      'Чат-боты для MAX с навигацией и автоматизацией',
      'Подключение платёжных систем (ЮKassa и др.)',
      'Личные кабинеты, CRM и аналитика внутри мессенджера',
    ],
    forWhom:
      'Бизнес, которому нужен канал продаж в MAX. Госструктуры и организации, переносящие сервисы в мессенджер. Проекты с бронированием, доставкой и программами лояльности.',
    result:
      'Полноценный сервис внутри MAX или Telegram: заказы, оплата, бонусы, автоматизация — без отдельных приложений.',
    icon: 'messenger',
  },
  {
    id: '3',
    slug: 'web-development',
    title: 'Веб-разработка',
    shortDescription: 'Сайты, которые решают задачи бизнеса — от визиток до сложных сервисов.',
    fullDescription:
      'Создаём современные веб-сайты на Next.js и React. Быстрая загрузка, адаптивный дизайн, SEO-оптимизация. От лендингов до сложных веб-приложений.',
    includes: [
      'Проектирование структуры и логики',
      'Дизайн и вёрстка',
      'Разработка функционала',
      'Запуск и настройка хостинга',
    ],
    forWhom:
      'Компании, которым нужно присутствие в интернете. Стартапы, запускающие лендинг для продукта. Бизнесы, которым нужен работающий инструмент, а не просто страница.',
    result: 'Сайт, который загружается быстро, выглядит современно и делает то, что должен.',
    icon: 'web',
  },
];

const EN_SERVICES: Service[] = [
  {
    id: '1',
    slug: 'ios-apps',
    title: 'iOS apps',
    shortDescription:
      'iPhone app development — from idea to publication on the App Store.',
    fullDescription:
      'We build native iOS apps with Swift and SwiftUI. Full-cycle development: from architecture design to App Store release and ongoing support.',
    includes: [
      'Application architecture and logic design',
      'Interface design',
      'Development and testing',
      'Submission preparation and App Store release',
    ],
    forWhom:
      'Startups with a mobile product idea. Businesses that need a dedicated tool for their customers. Teams who want to bring their service into the user’s pocket.',
    result: 'A finished app on the App Store that users can download and use.',
    icon: 'phone',
  },
  {
    id: '2',
    slug: 'telegram-max-apps',
    title: 'MAX and Telegram Mini Apps and chatbots',
    shortDescription:
      'Mini Apps and chatbots for MAX and Telegram — e-commerce, automation, CRM and business services right inside the messenger.',
    fullDescription:
      'We build Mini Apps and chatbots for MAX and Telegram: online stores, booking systems, personal accounts, business-process automation and payment integrations. Services for business, government and organisations across the MAX ecosystem.',
    includes: [
      'Mini App development for MAX and Telegram',
      'MAX chatbots with navigation and automation',
      'Payment integrations (YooKassa and others)',
      'Personal accounts, CRM and analytics inside the messenger',
    ],
    forWhom:
      'Businesses that need a sales channel in MAX. Government organisations bringing services into the messenger. Projects with bookings, delivery and loyalty programs.',
    result:
      'A complete service inside MAX or Telegram: orders, payments, bonuses, automation — with no separate app needed.',
    icon: 'messenger',
  },
  {
    id: '3',
    slug: 'web-development',
    title: 'Web development',
    shortDescription:
      'Websites that solve business problems — from landing pages to complex services.',
    fullDescription:
      'We build modern websites on Next.js and React. Fast loading, responsive design, SEO-optimised. From landing pages to complex web applications.',
    includes: [
      'Information architecture and logic design',
      'Design and front-end implementation',
      'Feature development',
      'Launch and hosting setup',
    ],
    forWhom:
      'Companies that need an online presence. Startups launching a product landing page. Businesses that need a working tool — not just a page.',
    result: 'A site that loads fast, looks modern and does what it is meant to.',
    icon: 'web',
  },
];

export const servicesByLocale: Record<CopyMode, Service[]> = {
  ru: RU_SERVICES,
  en: EN_SERVICES,
};

// Backwards-compatible default export (RU).
export const services: Service[] = RU_SERVICES;

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const RU_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Знакомство',
    description:
      'Первичное обсуждение в удобном для вас формате — видеоконференция, электронная почта или личная встреча. Фиксируем задачу, цели и ключевые требования.',
  },
  {
    number: '02',
    title: 'Оценка и план',
    description:
      'Формируем понимание объёма работ, сроков и стоимости. Без скрытых платежей и неожиданных доплат.',
  },
  {
    number: '03',
    title: 'Разработка',
    description:
      'Работаем этапами, показываем промежуточные результаты. Вы видите, как продукт обретает форму, и согласовываете направление на каждом этапе.',
  },
  {
    number: '04',
    title: 'Тестирование',
    description:
      'Многоуровневая проверка: автотесты, крайние случаи, нагрузочные сценарии, проверка на реальных устройствах. К релизу продукт работает стабильно.',
  },
  {
    number: '05',
    title: 'Запуск',
    description:
      'Публикация в App Store, деплой сайта, запуск бота — доводим до момента, когда продуктом можно пользоваться.',
  },
  {
    number: '06',
    title: 'Поддержка',
    description:
      'Остаёмся на связи после запуска. Сопровождаем продукт и развиваем его вместе с вашим бизнесом.',
  },
];

const EN_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'An initial conversation in whatever format suits you — video call, e-mail or in person. We capture the task, the goals and the key requirements.',
  },
  {
    number: '02',
    title: 'Estimate and plan',
    description:
      'We shape a clear picture of scope, timeline and cost. No hidden fees or surprise charges.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We work in stages and show intermediate results. You watch the product take shape and agree on the direction at every step.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'Multi-layered checks: automated tests, edge cases, load scenarios and real-device validation. By release the product is stable.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'App Store publication, site deployment, bot launch — we take it through to the point where users can actually use the product.',
  },
  {
    number: '06',
    title: 'Support',
    description:
      'We stay in touch after launch. We maintain the product and grow it together with your business.',
  },
];

export const processStepsByLocale: Record<CopyMode, ProcessStep[]> = {
  ru: RU_STEPS,
  en: EN_STEPS,
};

// Backwards-compatible default export (RU).
export const processSteps: ProcessStep[] = RU_STEPS;
