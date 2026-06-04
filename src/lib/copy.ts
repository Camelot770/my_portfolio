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
  lead: string;
  leadEm: string;
  leadTail: string;
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

interface FounderProfile {
  name: string;
  signRole: string;
  signMeta1: string;
  signMeta2: string;
  photoSrc: string;
  photoAlt: string;
}

interface FounderCopy {
  badge: string;
  tag: string;
  quote: { lead: string; verb1: string; mid: string; verb2: string; tail: string };
  rows: Array<{ b: string; rest: string }>;
  profiles: FounderProfile[];
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
  skipLink: string;
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
  techHeading: string;
  valuesPrefix: string;
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
  numberPrefix: string;
}

interface PortfolioPageCopy {
  tag: string;
  titlePlain: string;
  titleEm: string;
  lead: (shown: number) => string;
  filters: { all: string; max: string; telegram: string; ios: string; web: string };
}

interface ProjectDetailCopy {
  client: string;
  year: string;
  stack: string;
  blocks: { challenge: string; solution: string; result: string; description: string };
  prev: string;
  next: string;
}

interface PrivacySection {
  n: string;
  title: string;
  body: Array<
    | { kind: 'p'; text: string }
    | { kind: 'ul'; items: string[] }
    | { kind: 'pWithMail'; before: string; mail: string; after: string }
  >;
}

interface PrivacyCopy {
  tag: string;
  titlePlain: string;
  titleEm: string;
  effectiveLabel: string;
  dateLocale: string;
  sections: PrivacySection[];
}

interface IntroCopy {
  geo1: string;
  geo2Lat: string;
  geo2Lon: string;
  label1: string;
  label2: string;
  label3: string;
}

interface NotFoundCopy {
  titlePre: string;
  titleEm: string;
  body: string;
  ctaHome: string;
  ctaPortfolio: string;
}

interface ErrorCopy {
  tag: string;
  titlePre: string;
  titleEm: string;
  body: string;
  ctaRetry: string;
  ctaHome: string;
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
  portfolioPage: PortfolioPageCopy;
  projectDetail: ProjectDetailCopy;
  privacy: PrivacyCopy;
  intro: IntroCopy;
  notFound: NotFoundCopy;
  error: ErrorCopy;
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
    badge: 'Основатели · на связи',
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
    profiles: [
      {
        name: 'Наум Коган',
        signRole: 'Сооснователь · технический руководитель',
        signMeta1: 'iOS · MAX · Веб',
        signMeta2: 'Полный цикл',
        photoSrc: '/images/my_photo.jpg',
        photoAlt: 'Наум Коган — сооснователь StackLab',
      },
      {
        name: 'Камиль Исхаков',
        signRole: 'Сооснователь · директор по развитию',
        signMeta1: 'Маркетинг · Продажи · Партнёрства',
        signMeta2: 'Полный цикл',
        photoSrc: '/images/kamil_photo.jpg',
        photoAlt: 'Камиль Исхаков — сооснователь StackLab',
      },
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
    skipLink: 'Перейти к основному контенту',
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
    techHeading: 'Технологии',
    valuesPrefix: 'Ц',
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
    numberPrefix: '№',
  },
  portfolioPage: {
    tag: 'Портфолио',
    titlePlain: 'Работы ',
    titleEm: 'в материале',
    lead: (shown) =>
      `18 запущенных продуктов для бизнеса, госструктур и стартапов. MAX Mini Apps и боты, iOS-приложения, Telegram Mini Apps, веб-сервисы. Ниже — ${shown} кейсов, которые можем показать публично; остальные под NDA.`,
    filters: { all: 'Все', max: 'MAX', telegram: 'Telegram', ios: 'iOS', web: 'Веб' },
  },
  projectDetail: {
    client: 'Клиент',
    year: 'Год',
    stack: 'Стек',
    blocks: { challenge: 'Задача', solution: 'Решение', result: 'Результат', description: 'Описание' },
    prev: '← Предыдущий',
    next: 'Следующий →',
  },
  privacy: {
    tag: 'Политика',
    titlePlain: 'Политика ',
    titleEm: 'конфиденциальности',
    effectiveLabel: 'Дата вступления в силу: ',
    dateLocale: 'ru-RU',
    sections: [
      {
        n: '01',
        title: 'Какие данные мы собираем',
        body: [
          { kind: 'p', text: 'Сайт носит информационный характер. Мы не собираем персональные данные посетителей автоматически.' },
          { kind: 'p', text: 'Мы не используем:' },
          { kind: 'ul', items: ['Формы обратной связи с автоматической обработкой', 'Системы аналитики', 'Сторонние сервисы отслеживания'] },
          { kind: 'p', text: 'Единственный способ передать нам данные — связаться напрямую по электронной почте или в мессенджерах.' },
        ],
      },
      {
        n: '02',
        title: 'Данные при добровольном обращении',
        body: [
          { kind: 'p', text: 'Если вы связываетесь с нами по email или в мессенджерах, мы можем получить:' },
          { kind: 'ul', items: ['Имя', 'Контактные данные (email, номер, username)', 'Содержание сообщения'] },
          { kind: 'p', text: 'Эти данные используются только для ответа на запрос и обсуждения сотрудничества.' },
        ],
      },
      {
        n: '03',
        title: 'Как мы используем данные',
        body: [
          { kind: 'p', text: 'Данные используются для:' },
          { kind: 'ul', items: ['Ответа на вопросы', 'Обсуждения деталей проекта', 'Подготовки коммерческого предложения'] },
          { kind: 'p', text: 'Мы не передаём данные третьим лицам, не продаём и не используем в маркетинге.' },
        ],
      },
      {
        n: '04',
        title: 'Хранение данных',
        body: [
          { kind: 'p', text: 'Храним переписку и контакты только на время, необходимое для коммуникации и выполнения обязательств. По запросу удалим все данные.' },
        ],
      },
      {
        n: '05',
        title: 'Ваши права',
        body: [
          { kind: 'p', text: 'Вы имеете право:' },
          { kind: 'ul', items: ['Запросить информацию о хранящихся данных', 'Потребовать исправления неточных данных', 'Потребовать удаления данных', 'Отозвать согласие на обработку'] },
          { kind: 'pWithMail', before: 'Для реализации — напишите на ', mail: 'stacklab@mail.ru', after: '.' },
        ],
      },
      {
        n: '06',
        title: 'Безопасность и cookies',
        body: [
          { kind: 'p', text: 'Мы принимаем разумные меры для защиты информации от несанкционированного доступа, изменения или уничтожения. Сайт не использует cookies для отслеживания пользователей.' },
        ],
      },
    ],
  },
  intro: {
    geo1: 'МОСКВА · САНКТ-ПЕТЕРБУРГ',
    geo2Lat: 'ШИРОТА 55.75',
    geo2Lon: 'ДОЛГОТА 37.61',
    label1: 'КАЛИБРОВКА СИГНАЛА',
    label2: 'STACKLAB · ИЗД. 07 · 2026',
    label3: 'ЗАГРУЗКА / ИНИЦИАЛИЗАЦИЯ',
  },
  notFound: {
    titlePre: 'Сигнал ',
    titleEm: 'потерян',
    body: 'Страница была перемещена, удалена или никогда не существовала. Попробуйте начать с главной.',
    ctaHome: 'На главную',
    ctaPortfolio: 'Портфолио',
  },
  error: {
    tag: 'Ошибка 500',
    titlePre: 'Что-то пошло ',
    titleEm: 'не так',
    body: 'Страница недоступна. Обновите её или вернитесь на главную.',
    ctaRetry: 'Повторить',
    ctaHome: 'На главную',
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
    badge: 'Founders · available',
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
    profiles: [
      {
        name: 'Naum Kogan',
        signRole: 'Co-founder · Technical lead',
        signMeta1: 'iOS · MAX · Web',
        signMeta2: 'Full cycle',
        photoSrc: '/images/my_photo.jpg',
        photoAlt: 'Naum Kogan — StackLab co-founder',
      },
      {
        name: 'Kamil Iskhakov',
        signRole: 'Co-founder · Growth Lead',
        signMeta1: 'Marketing · Sales · Partnerships',
        signMeta2: 'Full cycle',
        photoSrc: '/images/kamil_photo.jpg',
        photoAlt: 'Kamil Iskhakov — StackLab co-founder',
      },
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
    skipLink: 'Skip to main content',
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
    techHeading: 'Stack',
    valuesPrefix: 'V',
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
    numberPrefix: 'No.',
  },
  portfolioPage: {
    tag: 'Portfolio',
    titlePlain: 'Work ',
    titleEm: 'in production',
    lead: (shown) =>
      `18 shipped products for business, government and startups. MAX Mini Apps and bots, iOS apps, Telegram Mini Apps, web services. Below — ${shown} cases we can share publicly; the rest are under NDA.`,
    filters: { all: 'All', max: 'MAX', telegram: 'Telegram', ios: 'iOS', web: 'Web' },
  },
  projectDetail: {
    client: 'Client',
    year: 'Year',
    stack: 'Stack',
    blocks: { challenge: 'Challenge', solution: 'Solution', result: 'Result', description: 'Description' },
    prev: '← Previous',
    next: 'Next →',
  },
  privacy: {
    tag: 'Privacy',
    titlePlain: 'Privacy ',
    titleEm: 'policy',
    effectiveLabel: 'Effective date: ',
    dateLocale: 'en-GB',
    sections: [
      {
        n: '01',
        title: 'What data we collect',
        body: [
          { kind: 'p', text: 'This site is informational. We do not collect personal data from visitors automatically.' },
          { kind: 'p', text: 'We do not use:' },
          { kind: 'ul', items: ['Contact forms with automatic processing', 'Analytics systems', 'Third-party tracking services'] },
          { kind: 'p', text: 'The only way to share data with us is to reach out directly by e-mail or via a messenger.' },
        ],
      },
      {
        n: '02',
        title: 'Data shared voluntarily',
        body: [
          { kind: 'p', text: 'If you contact us by e-mail or via a messenger, we may receive:' },
          { kind: 'ul', items: ['Name', 'Contact details (e-mail, phone, username)', 'Message contents'] },
          { kind: 'p', text: 'This data is used only to answer your request and discuss potential cooperation.' },
        ],
      },
      {
        n: '03',
        title: 'How we use data',
        body: [
          { kind: 'p', text: 'Data is used for:' },
          { kind: 'ul', items: ['Answering questions', 'Discussing project details', 'Preparing a commercial proposal'] },
          { kind: 'p', text: 'We do not share data with third parties, do not sell it, and do not use it for marketing.' },
        ],
      },
      {
        n: '04',
        title: 'Data retention',
        body: [
          { kind: 'p', text: 'We keep correspondence and contact details only for as long as needed for communication and to honour our obligations. Upon request we will delete all data.' },
        ],
      },
      {
        n: '05',
        title: 'Your rights',
        body: [
          { kind: 'p', text: 'You have the right to:' },
          { kind: 'ul', items: ['Request information about the data we hold', 'Request corrections to inaccurate data', 'Request data deletion', 'Withdraw consent to processing'] },
          { kind: 'pWithMail', before: 'To exercise these rights — write to ', mail: 'stacklab@mail.ru', after: '.' },
        ],
      },
      {
        n: '06',
        title: 'Security and cookies',
        body: [
          { kind: 'p', text: 'We take reasonable measures to protect information from unauthorised access, alteration or destruction. The site does not use cookies to track users.' },
        ],
      },
    ],
  },
  intro: {
    geo1: 'MOSCOW · SAINT PETERSBURG',
    geo2Lat: 'LAT 55.75',
    geo2Lon: 'LON 37.61',
    label1: 'SIGNAL CALIBRATION',
    label2: 'STACKLAB · ED. 07 · 2026',
    label3: 'LOADING / INITIALIZATION',
  },
  notFound: {
    titlePre: 'Signal ',
    titleEm: 'lost',
    body: 'The page was moved, deleted, or never existed. Try starting from the home page.',
    ctaHome: 'Home',
    ctaPortfolio: 'Portfolio',
  },
  error: {
    tag: 'Error 500',
    titlePre: 'Something went ',
    titleEm: 'wrong',
    body: 'This page is unavailable. Refresh it or go back to the home page.',
    ctaRetry: 'Retry',
    ctaHome: 'Home',
  },
};

export const COPY: Record<CopyMode, SiteCopy> = {
  ru: RU_COPY,
  en: EN_COPY,
};
