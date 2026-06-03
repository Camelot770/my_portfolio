// Two language modes for the site copy.
// `ru` — Russian, formal/business voice (default).
// `en` — English translation of the same copy.
//
// The user can switch via the RU / EN toggle in the nav.

export type CopyMode = 'ru' | 'en';

export const COPY_MODE_STORAGE_KEY = 'stacklab-locale';

interface HeroCopy {
  kicker: string;
  // Title is split into lines for the staggered letter animation.
  // Each line: { text, italic? }
  title: Array<{ text: string; italic?: boolean }>;
  lead: string; // Text before the emphasised fragment
  leadEm: string; // The italicised fragment inside the lead
  leadTail: string; // Text after the emphasised fragment
  metaLocationLabel: string;
  metaLocationLine1: string;
  metaLocationLine2: string;
  metaPortfolioLabel: string;
  metaPortfolioLine1: string;
  metaPortfolioLine2: string;
  scroll: string;
}

interface AboutCopy {
  tag: string;
  // Manifesto is HTML — `<em>` allowed, animated word by word.
  manifestoHtml: string;
  cells: Array<{ k: string; vMain: string; vEm: string; p: string }>;
}

interface WorksCopy {
  tag: string;
  headPlain: string;
  headEm: string;
  description: string;
  hintDrag: string;
  hintCount: (count: number) => string;
}

interface StackCopy {
  tag: string;
  headPlain: string;
  headTitle: string;
  items: Array<{ labelEm: string; labelRest: string; meta: string }>;
}

interface ProcessCopy {
  tag: string;
  headPre: string;
  headEm: string;
  headPost: string;
  lead: string;
}

interface FounderCopy {
  badge: string;
  signRole: string;
  signMeta1: string;
  signMeta2: string;
  tag: string;
  // Quote with two emphasised verbs
  quote: { lead: string; verb1: string; mid: string; verb2: string; tail: string };
  rows: Array<{ b: string; rest: string }>;
}

interface CtaCopy {
  tag: string;
  headPlain: string;
  headEm: string;
  p: string;
  primary: string;
}

interface FaqCopy {
  tag: string;
  headPlain: string;
  headEm: string;
  lead: string;
}

interface FooterCopy {
  desc: string;
  contactsHeading: string;
  directionsHeading: string;
  navHeading: string;
  directions: { ios: string; max: string; tg: string; web: string };
  navLinks: { portfolio: string; about: string; contact: string; privacy: string };
  signature: string;
}

interface NavCopy {
  links: { about: string; works: string; stack: string; process: string; contact: string };
  cta: string;
}

interface ContactPageCopy {
  tag: string;
  titlePlain: string;
  titleEm: string;
  lead: string;
  channels: Array<{ k: string; v: string; p: string }>;
  closingTitle: string;
  closingP: string;
}

interface AboutPageCopy {
  tag: string;
  titlePlain: string;
  titleEm: string;
  titleSuffix: string;
  lead: string;
  values: Array<{ num: string; title: string; description: string }>;
  cellsLead: string;
  closingPre: string;
  closingEm: string;
  ctaLabel: string;
}

interface ServicesPageCopy {
  tag: string;
  titlePre: string;
  titleEm: string;
  titleSuffix: string;
  lead: string;
  includesLabel: string;
  forWhomLabel: string;
  processTag: string;
  processHeadPre: string;
  processHeadEm: string;
  closingPre: string;
  closingEm: string;
  closingSuffix: string;
  ctaLabel: string;
}

export interface SiteCopy {
  hero: HeroCopy;
  about: AboutCopy;
  works: WorksCopy;
  stack: StackCopy;
  process: ProcessCopy;
  founder: FounderCopy;
  cta: CtaCopy;
  faq: FaqCopy;
  footer: FooterCopy;
  nav: NavCopy;
  contact: ContactPageCopy;
  aboutPage: AboutPageCopy;
  services: ServicesPageCopy;
}

// ─────────────────────────────────────────────────────────────────────────
// RU — Russian, formal/business voice (default)
// ─────────────────────────────────────────────────────────────────────────
export const RU_COPY: SiteCopy = {
  hero: {
    kicker: 'Студия разработки · Москва и вся Россия',
    title: [
      { text: 'Создаём' },
      { text: 'цифровые', italic: true },
      { text: 'продукты для' },
      { text: 'бизнеса.' },
    ],
    lead: 'Мобильные приложения, мини-приложения для MAX и Telegram, а также веб-сервисы. ',
    leadEm: 'Полный цикл',
    leadTail: ' разработки — от проектирования до запуска и сопровождения.',
    metaLocationLabel: 'Расположение',
    metaLocationLine1: 'Москва · вся Россия',
    metaLocationLine2: 'RU / EN',
    metaPortfolioLabel: 'Портфолио',
    metaPortfolioLine1: '18 запущенных проектов',
    metaPortfolioLine2: 'iOS · MAX · Telegram · Веб',
    scroll: 'Прокрутить ↓',
  },
  about: {
    tag: '01 · О компании',
    manifestoHtml:
      'StackLab — студия разработки <em>полного цикла</em>. Проектирование, дизайн, разработка, инфраструктура и сопровождение — внутри одной команды. Опыт реализации проектов для МАХ, Telegram, iOS и веб-платформ. Работаем по договору, с прозрачными сроками и предсказуемым результатом.',
    cells: [
      { k: 'К · 01', vMain: '18', vEm: 'проектов', p: 'Запущенные продукты в MAX, Telegram, App Store и вебе. Часть — под NDA.' },
      { k: 'К · 02', vMain: '3+', vEm: 'лет', p: 'Средний опыт команды в промышленной разработке. Senior-уровень во всех слоях стека.' },
      { k: 'К · 03', vMain: '100%', vEm: 'довольных', p: 'Сдаём проект только после полного согласования с заказчиком. Стандарты качества и тестирования — единые на всех проектах.' },
      { k: 'К · 04', vMain: 'от 1', vEm: 'недели', p: 'Срок до публикации — от одной недели, в зависимости от объёма работ.' },
    ],
  },
  works: {
    tag: '02 · Проекты',
    headPlain: 'Реализованные',
    headEm: 'проекты',
    description: 'Продукты, запущенные за последние два года. Каждый — реальный коммерческий запуск, не концепт.',
    hintDrag: 'Перетащите → или прокрутите колесом',
    hintCount: (n) => `${String(n).padStart(2, '0')} проектов · 2025—2026`,
  },
  stack: {
    tag: '03 · Технологии',
    headPlain: 'Технологии,',
    headTitle: 'с которыми работаем',
    items: [
      { labelEm: 'iOS', labelRest: ' / Swift и SwiftUI', meta: 'Нативные приложения · App Store' },
      { labelEm: 'MAX', labelRest: ' Mini Apps и боты', meta: 'Приоритетная платформа' },
      { labelEm: 'Telegram', labelRest: ' Mini Apps и боты', meta: 'Mini Apps · приём платежей' },
      { labelEm: 'Next.js', labelRest: ' и React', meta: 'Веб-сервисы · TypeScript' },
      { labelEm: 'Node.js', labelRest: ' / Python / FastAPI', meta: 'API · интеграции' },
      { labelEm: 'PostgreSQL', labelRest: ' / Prisma / SQLite', meta: 'Базы данных · хранилища' },
      { labelEm: 'ЮKassa', labelRest: ' и 1С-МИС', meta: 'Платежи · интеграции' },
    ],
  },
  process: {
    tag: '04 · Процесс',
    headPre: 'Как мы',
    headEm: 'работаем',
    headPost: '',
    lead: 'Прозрачный процесс с регулярными показами промежуточных результатов и фиксированными сроками.',
  },
  founder: {
    badge: 'Основатель · на связи',
    signRole: 'Основатель · технический руководитель',
    signMeta1: 'iOS · MAX · Веб',
    signMeta2: 'Полный цикл',
    tag: '05 · Команда',
    quote: {
      lead: '«Мы строим компанию вокруг инженерных стандартов: каждый проект ',
      verb1: 'проектируется',
      mid: ' командой и ',
      verb2: 'доводится',
      tail: ' до релиза собственными силами — без посредников и субподрядчиков».',
    },
    rows: [
      { b: 'Часы связи', rest: '09:00 – 22:00 МСК · Telegram, MAX, e-mail' },
      { b: 'Время ответа', rest: 'до 30 минут в рабочие часы' },
      { b: 'Полный цикл', rest: 'От идеи до публикации и сопровождения' },
      { b: 'Уровень', rest: 'Архитектор, iOS-, веб- и backend-разработка' },
    ],
  },
  cta: {
    tag: '07 · Контакты',
    headPlain: 'Обсудить',
    headEm: 'проект',
    p: 'Опишите задачу в свободной форме. В рабочие часы (МСК) ответим в течение 30 минут с предварительной оценкой объёма, стоимости и сроков.',
    primary: 'Написать в Telegram →',
  },
  faq: {
    tag: '06 · Вопросы и ответы',
    headPlain: 'Частые',
    headEm: 'вопросы',
    lead: 'Кратко о стоимости, сроках, документации и формате работы. Если ответа на вопрос нет в списке — напишите, мы ответим лично.',
  },
  footer: {
    desc: 'Студия разработки полного цикла. Мобильные приложения, мини-приложения для MAX и Telegram, веб-сервисы. Проектирование, разработка и запуск — внутри одной команды.',
    contactsHeading: 'Контакты',
    directionsHeading: 'Направления',
    navHeading: 'Навигация',
    directions: {
      ios: 'Мобильные iOS-приложения',
      max: 'Mini Apps и боты для MAX',
      tg: 'Mini Apps и боты для Telegram',
      web: 'Веб-разработка',
    },
    navLinks: {
      portfolio: 'Портфолио',
      about: 'О компании',
      contact: 'Контакты',
      privacy: 'Политика конфиденциальности',
    },
    signature: 'V2 · сигнал-частота 60 Гц',
  },
  nav: {
    links: { about: 'О компании', works: 'Проекты', stack: 'Технологии', process: 'Процесс', contact: 'Контакты' },
    cta: 'Обсудить проект',
  },
  contact: {
    tag: 'Контакты',
    titlePlain: 'Связаться',
    titleEm: 'с нами',
    lead: 'Опишите задачу в свободной форме. В рабочие часы (МСК) ответим в течение 30 минут с предварительной оценкой объёма, стоимости и сроков.',
    channels: [
      { k: 'Канал · 01', v: 'Telegram', p: '@Naum0 — основной канал связи в рабочие часы.' },
      { k: 'Канал · 02', v: 'E-mail', p: 'stacklab@mail.ru — для подробного брифа.' },
      { k: 'Канал · 03', v: 'MAX', p: 'Официальный аккаунт StackLab в мессенджере MAX.' },
    ],
    closingTitle: 'Что нужно для старта?',
    closingP: 'Достаточно описать идею и ожидаемый результат. Техническое задание не обязательно: мы поможем структурировать требования и оформим всё документально.',
  },
  aboutPage: {
    tag: 'О компании',
    titlePlain: '',
    titleEm: 'Студия разработки',
    titleSuffix: ' полного цикла',
    lead: 'StackLab — команда специалистов, реализующая проекты для MAX, Telegram, iOS и веб-платформ. Опыт сопровождения продуктов на всех этапах: от проектирования архитектуры до запуска и поддержки.',
    values: [
      { num: '01', title: 'Инженерный подход', description: 'Архитектурные и продуктовые решения принимают специалисты с опытом промышленной разработки. Меньше согласований — выше качество результата.' },
      { num: '02', title: 'Индивидуальная разработка', description: 'Каждый проект разрабатывается под конкретную задачу заказчика. Не используем шаблонные решения.' },
      { num: '03', title: 'Ответственность за результат', description: 'Проект считается завершённым после согласования результата с заказчиком, а не по истечении сроков или часов.' },
      { num: '04', title: 'Скорость без потерь качества', description: 'Тщательная проработка архитектуры до старта разработки. Делаем правильно с первого раза — это ускоряет результат.' },
    ],
    cellsLead: '',
    closingPre: 'Готовы обсудить ',
    closingEm: 'ваш проект',
    ctaLabel: 'Написать →',
  },
  services: {
    tag: 'Услуги',
    titlePre: 'Полный',
    titleEm: 'цикл',
    titleSuffix: ' разработки',
    lead: 'От проектирования до запуска и сопровождения. Мобильные iOS-приложения, мини-приложения и боты для MAX и Telegram, веб-сервисы для бизнеса и государственных организаций.',
    includesLabel: 'Что входит',
    forWhomLabel: 'Для кого',
    processTag: 'Процесс',
    processHeadPre: 'Как проходит',
    processHeadEm: 'работа',
    closingPre: 'Готовы',
    closingEm: 'начать',
    closingSuffix: '?',
    ctaLabel: 'Обсудить проект →',
  },
};

// ─────────────────────────────────────────────────────────────────────────
// EN — English translation
// ─────────────────────────────────────────────────────────────────────────
export const EN_COPY: SiteCopy = {
  hero: {
    kicker: 'Development studio · Moscow and all of Russia',
    title: [
      { text: 'We build' },
      { text: 'digital', italic: true },
      { text: 'products for' },
      { text: 'business.' },
    ],
    lead: 'Mobile apps, mini apps for MAX and Telegram, and web services. ',
    leadEm: 'Full-cycle',
    leadTail: ' development — from design to launch and support.',
    metaLocationLabel: 'Location',
    metaLocationLine1: 'Moscow · all of Russia',
    metaLocationLine2: 'RU / EN',
    metaPortfolioLabel: 'Portfolio',
    metaPortfolioLine1: '18 shipped projects',
    metaPortfolioLine2: 'iOS · MAX · Telegram · Web',
    scroll: 'Scroll ↓',
  },
  about: {
    tag: '01 · About',
    manifestoHtml:
      'StackLab is a <em>full-cycle</em> development studio. Design, code, infrastructure and support — all within one team. Proven track record on MAX, Telegram, iOS and the web. We work under contract, with transparent timelines and predictable outcomes.',
    cells: [
      { k: 'M · 01', vMain: '18', vEm: 'projects', p: 'Shipped products on MAX, Telegram, App Store and the web. Some under NDA.' },
      { k: 'M · 02', vMain: '3+', vEm: 'years', p: 'Average team experience in production engineering. Senior level across the stack.' },
      { k: 'M · 03', vMain: '100%', vEm: 'happy clients', p: 'A project ships only once the client signs off. The same quality and testing standards apply on every project.' },
      { k: 'M · 04', vMain: 'from 1', vEm: 'week', p: 'Time to publish — from one week, depending on scope.' },
    ],
  },
  works: {
    tag: '02 · Projects',
    headPlain: 'Shipped',
    headEm: 'projects',
    description: 'Products launched over the past two years. Each one a real commercial release — not a concept.',
    hintDrag: 'Drag → or scroll with the wheel',
    hintCount: (n) => `${String(n).padStart(2, '0')} projects · 2025—2026`,
  },
  stack: {
    tag: '03 · Stack',
    headPlain: 'Technologies',
    headTitle: 'we work with',
    items: [
      { labelEm: 'iOS', labelRest: ' / Swift and SwiftUI', meta: 'Native apps · App Store' },
      { labelEm: 'MAX', labelRest: ' Mini Apps and bots', meta: 'Priority platform' },
      { labelEm: 'Telegram', labelRest: ' Mini Apps and bots', meta: 'Mini Apps · payments' },
      { labelEm: 'Next.js', labelRest: ' and React', meta: 'Web services · TypeScript' },
      { labelEm: 'Node.js', labelRest: ' / Python / FastAPI', meta: 'APIs · integrations' },
      { labelEm: 'PostgreSQL', labelRest: ' / Prisma / SQLite', meta: 'Databases · storage' },
      { labelEm: 'YooKassa', labelRest: ' and 1C-MIS', meta: 'Payments · integrations' },
    ],
  },
  process: {
    tag: '04 · Process',
    headPre: 'How we',
    headEm: 'work',
    headPost: '',
    lead: 'A transparent process with regular demos of intermediate results and fixed timelines.',
  },
  founder: {
    badge: 'Founder · available',
    signRole: 'Founder · Technical lead',
    signMeta1: 'iOS · MAX · Web',
    signMeta2: 'Full cycle',
    tag: '05 · Team',
    quote: {
      lead: '"We build the company around engineering standards: every project is ',
      verb1: 'designed',
      mid: ' by the team and ',
      verb2: 'delivered',
      tail: ' to release in-house — no middlemen, no subcontractors."',
    },
    rows: [
      { b: 'Hours', rest: '09:00 – 22:00 MSK · Telegram, MAX, e-mail' },
      { b: 'Response time', rest: 'within 30 minutes during work hours' },
      { b: 'Full cycle', rest: 'From idea to launch and support' },
      { b: 'Level', rest: 'Architecture, iOS, web and backend development' },
    ],
  },
  cta: {
    tag: '07 · Contact',
    headPlain: 'Discuss your',
    headEm: 'project',
    p: 'Describe your task in free form. During work hours (MSK) we respond within 30 minutes with an initial estimate of scope, cost and timeline.',
    primary: 'Message on Telegram →',
  },
  faq: {
    tag: '06 · FAQ',
    headPlain: 'Frequently',
    headEm: 'asked',
    lead: 'Briefly on pricing, timelines, documentation and how we work. If your question is not on the list — get in touch and we will answer directly.',
  },
  footer: {
    desc: 'A full-cycle development studio. Mobile apps, mini apps for MAX and Telegram, web services. Design, development and launch — all within one team.',
    contactsHeading: 'Contact',
    directionsHeading: 'Services',
    navHeading: 'Navigation',
    directions: {
      ios: 'iOS mobile apps',
      max: 'Mini Apps and bots for MAX',
      tg: 'Mini Apps and bots for Telegram',
      web: 'Web development',
    },
    navLinks: {
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy policy',
    },
    signature: 'V2 · signal frequency 60 Hz',
  },
  nav: {
    links: { about: 'About', works: 'Projects', stack: 'Stack', process: 'Process', contact: 'Contact' },
    cta: 'Discuss a project',
  },
  contact: {
    tag: 'Contact',
    titlePlain: 'Get in',
    titleEm: 'touch',
    lead: 'Describe your task in free form. During work hours (MSK) we respond within 30 minutes with an initial estimate of scope, cost and timeline.',
    channels: [
      { k: 'Channel · 01', v: 'Telegram', p: '@Naum0 — primary channel during work hours.' },
      { k: 'Channel · 02', v: 'E-mail', p: 'stacklab@mail.ru — for a detailed brief.' },
      { k: 'Channel · 03', v: 'MAX', p: 'Official StackLab account on MAX messenger.' },
    ],
    closingTitle: 'What do we need to start?',
    closingP: 'Just describe the idea and the expected outcome. A technical spec is not required — we will help structure the requirements and put it all in writing.',
  },
  aboutPage: {
    tag: 'About',
    titlePlain: 'A ',
    titleEm: 'full-cycle',
    titleSuffix: ' development studio',
    lead: 'StackLab is a team of specialists delivering projects on MAX, Telegram, iOS and the web. We support products through every stage: from architecture design to launch and maintenance.',
    values: [
      { num: '01', title: 'Engineering approach', description: 'Architectural and product decisions are made by specialists with production experience. Fewer approvals — higher quality output.' },
      { num: '02', title: 'Custom development', description: 'Every project is built for a specific client task. We do not reuse template solutions.' },
      { num: '03', title: 'Accountable for the result', description: 'A project is complete when the client signs off on the result — not when the hours run out or the deadline passes.' },
      { num: '04', title: 'Speed without losing quality', description: 'Architecture is worked through carefully before development begins. We get it right the first time — that is what makes it fast.' },
    ],
    cellsLead: '',
    closingPre: 'Ready to discuss ',
    closingEm: 'your project',
    ctaLabel: 'Get in touch →',
  },
  services: {
    tag: 'Services',
    titlePre: 'Full-cycle',
    titleEm: 'development',
    titleSuffix: '',
    lead: 'From design to launch and support. iOS mobile apps, mini apps and bots for MAX and Telegram, web services for business and government organisations.',
    includesLabel: 'What is included',
    forWhomLabel: 'For whom',
    processTag: 'Process',
    processHeadPre: 'How the',
    processHeadEm: 'work goes',
    closingPre: 'Ready to',
    closingEm: 'start',
    closingSuffix: '?',
    ctaLabel: 'Discuss a project →',
  },
};

export const COPY: Record<CopyMode, SiteCopy> = {
  ru: RU_COPY,
  en: EN_COPY,
};
