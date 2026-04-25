// Two voice modes for the site copy.
// `pro` — formal, business-oriented language for executives and decision-makers.
// `dev` — current expressive engineering voice with stack jargon.
//
// Default mode is `pro`. The user can switch via the toggle in the nav.

export type CopyMode = 'pro' | 'dev';

export const COPY_MODE_STORAGE_KEY = 'stacklab-copy-mode';

interface HeroCopy {
  kicker: string;
  // Title is split into lines for the staggered letter animation.
  // Each line: { text, italic? }
  title: Array<{ text: string; italic?: boolean }>;
  lead: string; // Plain text, with a single <em>...</em> wrap allowed (rendered manually)
  leadEm: string; // The italicised fragment inside the lead
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
// PRO — formal, business-friendly voice (default)
// ─────────────────────────────────────────────────────────────────────────
export const PRO_COPY: SiteCopy = {
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
      { k: 'К · 02', vMain: '5+', vEm: 'лет', p: 'Средний опыт команды в промышленной разработке. Senior-уровень во всех слоях стека.' },
      { k: 'К · 03', vMain: '100%', vEm: 'клиентов', p: 'Проект сдаём только после согласования результата с заказчиком.' },
      { k: 'К · 04', vMain: '4–12', vEm: 'недель', p: 'Срок от первого контакта до запуска — в зависимости от объёма работ.' },
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
      { num: '04', title: 'Скорость без потерь качества', description: 'Тщательная проработка задачи до старта разработки сокращает количество переделок и ускоряет результат.' },
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
// DEV — original engineering-flavoured voice
// ─────────────────────────────────────────────────────────────────────────
export const DEV_COPY: SiteCopy = {
  hero: {
    kicker: 'Инженерная студия · Москва и вся Россия',
    title: [
      { text: 'Мы строим' },
      { text: 'софт,', italic: true },
      { text: 'который хочется' },
      { text: 'обсуждать.' },
    ],
    lead: 'Mini Apps для MAX, Telegram и нативные iOS-приложения. ',
    leadEm: 'Инженерная',
    metaLocationLabel: 'Локация',
    metaLocationLine1: 'Москва · вся Россия',
    metaLocationLine2: 'RU / EN',
    metaPortfolioLabel: 'Портфолио',
    metaPortfolioLine1: '18 запущенных продуктов',
    metaPortfolioLine2: 'MAX · iOS · Telegram · веб · часть NDA',
    scroll: 'Скролл↓',
  },
  about: {
    tag: '01 · Манифест',
    manifestoHtml:
      'StackLab — <em>инженерная</em> студия полного цикла. Архитектура, продакшн-код, инфраструктура и релиз — внутри одной команды. Глубокая экспертиза в каждом слое: MAX, Telegram, iOS, веб, интеграции и платежи. Не процессы ради процессов — <em>инженерия</em>, которая доходит до запуска.',
    cells: [
      { k: 'К · 01', vMain: '18', vEm: 'запусков', p: 'Работающие продукты в MAX, Telegram, App Store и вебе. Часть проектов под NDA — в портфолио показываем только то, что можем.' },
      { k: 'К · 02', vMain: '5+', vEm: 'лет', p: 'Средний опыт инженеров в продакшне. Senior-уровень в iOS, MAX, вебе и backend.' },
      { k: 'К · 03', vMain: '100%', vEm: 'довольных', p: 'Не закрываем проект, пока клиент не доволен. Правки и корректировки по ходу — норма.' },
      { k: 'К · 04', vMain: '4–12', vEm: 'недель', p: 'Цикл от первого контакта до запуска продукта — в зависимости от объёма.' },
    ],
  },
  works: {
    tag: '02 · Избранное',
    headPlain: 'Случаи',
    headEm: 'в материале',
    description: 'Продукты, запущенные в последние два года. Каждый — с боевого запуска, не из концепт-витрины.',
    hintDrag: 'Тащите → или прокручивайте колесом',
    hintCount: (n) => `${String(n).padStart(2, '0')} проектов · 2025—2026`,
  },
  stack: {
    tag: '03 · Инструментарий',
    headPlain: 'Стек,',
    headTitle: 'который мы довели до автоматизма',
    items: [
      { labelEm: 'iOS', labelRest: ' / Swift + SwiftUI', meta: 'Нативно · AppStore' },
      { labelEm: 'MAX', labelRest: ' Mini Apps + боты', meta: 'Приоритетная платформа' },
      { labelEm: 'Telegram', labelRest: ' WebApp + Bot API', meta: 'Mini Apps · платежи' },
      { labelEm: 'Next.js', labelRest: ' + React', meta: 'SSR · Edge · TypeScript' },
      { labelEm: 'Node.js', labelRest: ' / Python / FastAPI', meta: 'API · интеграции' },
      { labelEm: 'Prisma', labelRest: ' + Postgres / SQLite', meta: 'OLTP · хранилища' },
      { labelEm: 'ЮKassa', labelRest: ' + 1С-МИС', meta: 'Платежи · интеграции' },
    ],
  },
  process: {
    tag: '04 · Процесс',
    headPre: 'От',
    headEm: 'сигнала',
    headPost: ' до запуска',
    lead: 'Прозрачный цикл: вы видите промежуточные результаты, правите курс по ходу, без «потом решим».',
  },
  founder: {
    badge: 'Основатель · на связи',
    signRole: 'Founder · Lead Engineer',
    signMeta1: 'iOS · MAX · Web',
    signMeta2: 'полный цикл',
    tag: '05 · Люди',
    quote: {
      lead: '«StackLab — про инженерию, а не про менеджмент. Архитектурные, продуктовые и технические решения ',
      verb1: 'принимаются',
      mid: ' и ',
      verb2: 'исполняются',
      tail: ' одной командой — от первого созвона до ночного хот-фикса.»',
    },
    rows: [
      { b: '09:00 – 22:00 MSK', rest: 'Прямой канал в Telegram / MAX' },
      { b: 'в течение 30 мин', rest: 'Ответ в рабочие часы' },
      { b: 'Полный цикл', rest: 'От идеи до публикации и поддержки' },
      { b: 'Senior-уровень', rest: 'Архитектура, iOS, MAX, веб — одна команда' },
    ],
  },
  cta: {
    tag: '07 · Контакт',
    headPlain: 'Передайте',
    headEm: 'сигнал',
    p: 'Опишите задачу в одном абзаце — вернёмся в течение 30 минут в рабочие часы MSK с ответом: берёмся, сколько, когда.',
    primary: 'Написать в Telegram →',
  },
  faq: {
    tag: '06 · Вопросы',
    headPlain: 'Частые',
    headEm: 'вопросы',
    lead: 'Коротко о цене, сроках, техзадании и формате работы. Если вопроса нет в списке — просто напишите.',
  },
  footer: {
    desc: 'Инженерная студия полного цикла. Mini Apps и чат-боты для MAX и Telegram, нативный iOS, веб-сервисы на Next.js. Архитектура, код и релиз — внутри одной команды.',
    contactsHeading: 'Связь',
    directionsHeading: 'Направления',
    navHeading: 'Навигация',
    directions: {
      ios: 'iOS-приложения',
      max: 'MAX Mini Apps и боты',
      tg: 'Telegram Mini Apps',
      web: 'Веб на Next.js',
    },
    navLinks: {
      portfolio: 'Портфолио',
      about: 'О студии',
      contact: 'Контакты',
      privacy: 'Политика',
    },
    signature: 'V2 · сигнал-частота 60 Гц',
  },
  nav: {
    links: { about: 'Студия', works: 'Работы', stack: 'Стек', process: 'Процесс', contact: 'Контакт' },
    cta: 'Заказать проект',
  },
  contact: {
    tag: 'Контакт',
    titlePlain: 'Передайте',
    titleEm: 'сигнал',
    lead: 'Опишите задачу в одном абзаце — вернёмся в течение 30 минут в рабочие часы MSK с ответом: берёмся, сколько, когда.',
    channels: [
      { k: 'Сигнал · 01', v: 'Telegram', p: '@Naum0 — прямой канал, отвечаю в рабочие часы.' },
      { k: 'Сигнал · 02', v: 'E-mail', p: 'stacklab@mail.ru — для подробного брифа.' },
      { k: 'Сигнал · 03', v: 'MAX', p: 'Официальный контакт StackLab в MAX.' },
    ],
    closingTitle: 'Что нужно, чтобы начать?',
    closingP: 'Просто напишите. Расскажите идею, опишите задачу — разберёмся вместе. Техническое задание не обязательно: достаточно описать идею своими словами.',
  },
  aboutPage: {
    tag: 'О студии',
    titlePlain: '',
    titleEm: 'Инженерная',
    titleSuffix: ' студия полного цикла.',
    lead: 'StackLab — команда инженеров, которая проектирует, пишет и запускает продукты для MAX, Telegram, iOS и веба. Глубокая экспертиза в каждом слое стека — от клиента до инфраструктуры.',
    values: [
      { num: '01', title: 'Инженерный подход', description: 'Архитектурные и продуктовые решения принимают инженеры с опытом в продакшне. Меньше согласований — больше качества кода.' },
      { num: '02', title: 'Качество без шаблонов', description: 'Каждый проект — с нуля под конкретную задачу. Не используем готовые шаблоны для воплощения ваших идей.' },
      { num: '03', title: 'Ответственность до конца', description: 'Проект не заканчивается, пока вы не довольны результатом. Не пока закончились часы. Не пока вышли сроки.' },
      { num: '04', title: 'Скорость без суеты', description: 'Математический подход: сначала продумать, потом писать. Меньше переделок, быстрее результат.' },
    ],
    cellsLead: '',
    closingPre: 'Давайте создадим ',
    closingEm: 'что-то вместе',
    ctaLabel: 'Написать →',
  },
  services: {
    tag: 'Услуги',
    titlePre: 'Полный',
    titleEm: 'цикл',
    titleSuffix: ' разработки',
    lead: 'От идеи до работающего продукта. iOS-приложения, MAX и Telegram Mini Apps, боты и веб-сервисы для стартапов, бизнеса и госструктур.',
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

export const COPY: Record<CopyMode, SiteCopy> = {
  pro: PRO_COPY,
  dev: DEV_COPY,
};
