import type { CopyMode } from '@/lib/copy';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'ios' | 'telegram' | 'max' | 'web';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  client: string;
  year: string;
  link?: string;
  challenge: string;
  solution: string;
  result: string;
  images: {
    preview: string;
    hero: string;
    gallery: string[];
  };
  // 'cover' (default) crops to fill the card; 'contain' fits the whole image
  // inside with padding — use for square logos.
  previewMode?: 'cover' | 'contain';
  technologies: string[];
  featured: boolean;
}

// Shared technology lists — identical across languages
const TECH = {
  zdorovie: ['TypeScript', 'React', 'Zustand', 'Python', 'FastAPI', '1С МИС', 'MAX WebApp API'],
  zabota: ['JavaScript', 'Node.js', 'MAX Bot API', 'Python'],
  roza: ['TypeScript', 'React', 'Zustand', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'SQLite', 'ЮKassa', 'MAX WebApp API'],
  kitap: ['JavaScript', 'Node.js', 'MAX Bot API'],
  lull: ['Swift', 'SwiftUI', 'Core Data', 'HealthKit'],
  love: ['Swift', 'SwiftUI', 'CloudKit'],
  pelikan: ['React', 'TypeScript', 'Telegram Bot API', 'Node.js'],
  pinkPurple: ['React', 'TypeScript', 'Telegram Bot API', 'PostgreSQL'],
};

const RU_PROJECTS: Project[] = [
  {
    id: '6',
    slug: 'zdorovie-semyi',
    title: 'Здоровье семьи',
    category: 'max',
    categoryLabel: 'MAX WebApp',
    shortDescription: 'MAX WebApp для записи к врачу в сеть медцентров Казани',
    fullDescription: 'Цифровая регистратура для сети из 10 медицинских центров «Здоровье семьи» прямо в MAX. Два сценария записи: от специализации к врачу и от филиала к специалисту. Расписание в реальном времени из 1С МИС, свободные слоты с группировкой по клиникам, расчёт стоимости, управление записями — просмотр предстоящих визитов и отмена. Авторизация автоматически через MAX, без паролей и регистрации.',
    client: 'Сеть медицинских лечебно-диагностических центров «Здоровье семьи», Казань',
    year: '2026',
    challenge: 'Дать пациентам быстрый и понятный инструмент для записи к врачу, который объединяет все филиалы, специализации и расписания сети «Здоровье семьи» в едином интерфейсе без необходимости звонить или устанавливать отдельное приложение.',
    solution: 'Разработали MAX WebApp с двумя сценариями записи: от специализации к врачу и от филиала к специалисту. Приложение в реальном времени получает расписание из медицинской информационной системы 1С, показывает свободные слоты с группировкой по клиникам, рассчитывает стоимость приёма и позволяет управлять записями. Авторизация происходит автоматически через MAX, без паролей и регистрации.',
    result: 'Компактный медицинский сервис, который заменяет звонок в регистратуру, сокращает путь от выбора врача до подтверждения записи до 30 секунд и делает доступными 10 филиалов сети с десятками специалистов в одном окне мессенджера.',
    images: { preview: '/images/ZdorovieSemyi.png', hero: '/images/ZdorovieSemyi.png', gallery: [] },
    previewMode: 'contain',
    technologies: TECH.zdorovie,
    featured: true,
  },
  {
    id: '7',
    slug: 'zabota-o-svoih',
    title: 'Забота о СВОих',
    category: 'max',
    categoryLabel: 'MAX Чат-бот',
    shortDescription: 'Чат-бот MAX для поддержки участников СВО и их семей в Татарстане',
    fullDescription: 'Республиканский проект «Забота о СВОих» — государственная инициатива, объединяющая все меры поддержки участников СВО, ветеранов и их семей в одном месте. Многоуровневая навигация по разделам: выплаты, льготы, медицинская, юридическая и психологическая помощь, образование, трудоустройство, санаторно-курортное лечение. Бот зарегистрирован с официальным кастомным юзернеймом через организацию.',
    client: 'АНО «Диалог Регионы», Республика Татарстан',
    year: '2026',
    challenge: 'Перенести инфраструктуру существующего Telegram-бота на платформу MAX, восполнить недостающие разделы и запустить бота с официальным юзернеймом под эгидой организации.',
    solution: 'Разработали чат-бота под API мессенджера MAX с нуля. Выстроили многоуровневую навигацию по разделам — выплаты, льготы, медицинская, юридическая и психологическая помощь, образование, трудоустройство, санаторно-курортное лечение. Дополнили контент, которого не хватало в оригинале, и зарегистрировали бота с кастомным юзернеймом через организацию.',
    result: 'Государственный сервис поддержки участников СВО теперь живёт в главном российском мессенджере. Тысячи семей получили простой и быстрый доступ к информации, которая им действительно нужна.',
    images: { preview: '/images/ZabotaOSvoih.jpg', hero: '/images/ZabotaOSvoih.jpg', gallery: [] },
    technologies: TECH.zabota,
    featured: true,
  },
  {
    id: '8',
    slug: 'roza-tsvetov',
    title: 'Роза цветов',
    category: 'max',
    categoryLabel: 'MAX WebApp',
    shortDescription: 'MAX WebApp — интернет-магазин стабилизированной флористики',
    fullDescription: 'Полноценный цветочный e-commerce в мессенджере MAX. Каталог с фильтрацией по категориям, детальные карточки букетов, корзина, оформление заказа с выбором даты, времени и способа получения, онлайн-оплата через ЮKassa, личный кабинет с историей заказов и бонусным балансом. Админ-панель с управлением каталогом, заказами, аналитикой продаж и рассылками. Авторизация автоматически через MAX, без паролей и регистрации.',
    client: 'Интернет-магазин стабилизированной флористики «Роза цветов»',
    year: '2026',
    challenge: 'Дать клиентам быстрый и удобный инструмент для выбора и заказа стабилизированных букетов, который объединяет каталог, оформление доставки, онлайн-оплату и программу лояльности в едином интерфейсе без необходимости звонить, писать в чат или устанавливать отдельное приложение.',
    solution: 'Разработали MAX WebApp с полным циклом покупки: каталог с фильтрацией по категориям, детальные карточки букетов, корзина, оформление заказа с выбором даты, времени и способа получения (доставка или самовывоз), онлайн-оплата через ЮKassa и личный кабинет с историей заказов и бонусным балансом. Бот автоматически уведомляет клиента о каждом этапе — от подтверждения заказа до доставки. Параллельно работает админ-панель с управлением каталогом, заказами, аналитикой продаж и рассылками.',
    result: 'Компактный цветочный e-commerce, который заменяет и сайт, и телефон, сокращает путь от выбора букета до оплаты до 30 секунд и даёт студии стабилизированной флористики полноценный онлайн-канал продаж с кэшбэком 5%, push-уведомлениями о статусе заказа и конструктором индивидуальных композиций — в одном окне мессенджера.',
    images: { preview: '/images/RozaTsvetov.png', hero: '/images/RozaTsvetov.png', gallery: [] },
    previewMode: 'contain',
    technologies: TECH.roza,
    featured: true,
  },
  {
    id: '5',
    slug: 'kitapkhane',
    title: 'Китапханә',
    category: 'max',
    categoryLabel: 'MAX Bot',
    shortDescription: 'MAX-бот для Национальной электронной библиотеки Татарстана',
    fullDescription: 'Цифровой библиотечный сервис в MAX: мгновенный доступ к читательскому билету, генерация штрих-кода Code128, быстрый вход в каталог, коллекции, заказ документов и справочные сервисы kitap.tatar.ru. Бот принимает номер Единого читательского билета, проверяет формат, нормализует ввод и генерирует штрих-код.',
    client: 'Национальная электронная библиотека Республики Татарстан',
    year: '2025',
    challenge: 'Собрать ключевые функции библиотеки в одном понятном интерфейсе и сократить путь пользователя до нужного действия до пары кликов.',
    solution: 'Разработали MAX-бота, который принимает номер Единого читательского билета, проверяет формат, нормализует ввод и мгновенно генерирует штрих-код Code128. Бот стал быстрой точкой входа в экосистему kitap.tatar.ru: каталог, коллекции, заказ документов и справочные сервисы.',
    result: 'Компактный цифровой сервис, который убирает лишние шаги, ускоряет доступ к библиотечным услугам и превращает разрозненные функции в единый пользовательский опыт.',
    images: { preview: '/images/Kitapkhane.jpg', hero: '/images/Kitapkhane.jpg', gallery: [] },
    technologies: TECH.kitap,
    featured: true,
  },
  {
    id: '1',
    slug: 'lull',
    title: 'Lull',
    category: 'ios',
    categoryLabel: 'iOS-приложение',
    shortDescription: 'iOS-приложение для женского здоровья',
    fullDescription: 'Трекер менструального цикла и беременности с AI-прогнозами и персональной аналитикой. Отслеживание цикла с прогнозом месячных и овуляции, режим беременности с календарём по неделям и ПДР, дневник настроения, симптомов и самочувствия, трекер шевелений, схваток, давления и веса.',
    client: 'Собственный проект',
    year: '2025',
    challenge: 'Создать приложение, которое помогает женщинам лучше понимать своё тело — от планирования до беременности.',
    solution: 'Разработали приложение с AI-прогнозами на основе персональных данных, режимом отслеживания цикла и режимом беременности, дневником симптомов и персональными советами.',
    result: 'Полноценный продукт в App Store с продуманным UX, мягким визуальным стилем и функционалом, который работает каждый день.',
    images: { preview: '/images/LullPhotoNew.jpg', hero: '/images/LullPhotoNew.jpg', gallery: [] },
    technologies: TECH.lull,
    featured: true,
  },
  {
    id: '2',
    slug: 'love-explore',
    title: 'LoveExplore',
    category: 'ios',
    categoryLabel: 'iOS-приложение',
    shortDescription: 'iOS-приложение для пар',
    fullDescription: 'Приложение, которое помогает парам узнать друг друга глубже, укрепить связь и вернуть искру в отношения. 150+ вопросов для глубоких разговоров, 36 вопросов для влюблённости по методике Артура Арона, идеи для свиданий, игры на двоих и система мотивации.',
    client: 'Собственный проект',
    year: '2025',
    challenge: 'Дать парам инструмент для настоящего общения — не про быт, а про чувства, мечты и друг друга.',
    solution: 'Разработали приложение с 150+ вопросами для глубоких разговоров, методикой 36 вопросов для влюблённости, идеями для свиданий, играми на двоих и системой очков и streak для мотивации.',
    result: 'Готовое приложение в App Store. Тёмная тема, яркие акценты, интуитивный интерфейс. Продукт, который пары используют вместе.',
    images: { preview: '/images/LoveExplore.jpeg', hero: '/images/LoveExplore.jpeg', gallery: [] },
    technologies: TECH.love,
    featured: true,
  },
  {
    id: '3',
    slug: 'pelikan',
    title: 'Пеликан',
    category: 'telegram',
    categoryLabel: 'Telegram Mini App',
    shortDescription: 'Telegram Mini App для флоатинг-студии',
    fullDescription: 'Мини-приложение для записи на сеансы флоатинга и покупки подарочных сертификатов прямо в Telegram. Онлайн-запись с выбором даты и времени, просмотр услуг и цен, покупка подарочных сертификатов, интеграция с платёжной системой и уведомления через бота.',
    client: 'Флоатинг-студия Пеликан',
    year: '2025',
    challenge: 'Дать клиентам студии простой способ записаться на флоатинг — без звонков, без сайтов, прямо там, где они уже общаются.',
    solution: 'Разработали Telegram Mini App с онлайн-записью, выбором даты и времени, покупкой подарочных сертификатов и интеграцией с платёжной системой.',
    result: 'Работающий сервис внутри Telegram. Клиенты записываются и оплачивают в пару кликов. Студия получает заявки автоматически.',
    images: { preview: '/images/Floating_Pelican.jpeg', hero: '/images/Floating_Pelican.jpeg', gallery: [] },
    technologies: TECH.pelikan,
    featured: true,
  },
  {
    id: '4',
    slug: 'pink-purple',
    title: 'Pink Purple',
    category: 'telegram',
    categoryLabel: 'Telegram Mini App',
    shortDescription: 'Telegram Mini App для кафе баббл-чая',
    fullDescription: 'Мини-приложение для заказа баббл-чая с предоплатой, бонусной системой и играми прямо в Telegram. Меню с выбором напитков, топпингов и размеров, предзаказ с оплатой онлайн, бонусная программа и мини-игры.',
    client: 'Кафе Pink Purple',
    year: '2025',
    challenge: 'Сделать заказ баббл-чая быстрым и удобным — без очередей, без ожидания, с элементом игры.',
    solution: 'Разработали Telegram Mini App с меню напитков, предзаказом с онлайн-оплатой, бонусной программой, мини-играми и уведомлениями о готовности.',
    result: 'Полноценный сервис внутри Telegram. Гости заказывают, платят и играют. Кафе получает предоплаченные заказы и лояльных клиентов.',
    images: { preview: '/images/PinkPurple.jpeg', hero: '/images/PinkPurple.jpeg', gallery: [] },
    technologies: TECH.pinkPurple,
    featured: true,
  },
];

const EN_PROJECTS: Project[] = [
  {
    id: '6',
    slug: 'zdorovie-semyi',
    title: 'Zdorovie Semyi',
    category: 'max',
    categoryLabel: 'MAX WebApp',
    shortDescription: 'MAX WebApp for booking doctor appointments at a Kazan medical-centre network',
    fullDescription: 'A digital reception desk for the 10-clinic Zdorovie Semyi medical network — right inside MAX. Two booking flows: from specialty to doctor and from clinic to specialist. Real-time schedule from the 1C medical IS, free slots grouped by clinic, cost calculation, appointment management — view upcoming visits and cancel. Auto-authentication via MAX, no passwords or sign-up.',
    client: 'Zdorovie Semyi medical-diagnostic clinic network, Kazan',
    year: '2026',
    challenge: 'Give patients a fast and clear tool for booking appointments that unifies every clinic, specialty and schedule of the Zdorovie Semyi network in a single interface — without phone calls or a separate app.',
    solution: 'We built a MAX WebApp with two booking flows: from specialty to doctor and from clinic to specialist. The app pulls schedules in real time from the 1C medical information system, shows free slots grouped by clinic, calculates the cost of the appointment and lets the user manage bookings. Authentication happens automatically through MAX — no passwords, no sign-up.',
    result: 'A compact medical service that replaces a call to reception, cuts the path from picking a doctor to confirming the booking to 30 seconds, and brings 10 clinics with dozens of specialists into one messenger window.',
    images: { preview: '/images/ZdorovieSemyi.png', hero: '/images/ZdorovieSemyi.png', gallery: [] },
    previewMode: 'contain',
    technologies: TECH.zdorovie,
    featured: true,
  },
  {
    id: '7',
    slug: 'zabota-o-svoih',
    title: 'Care for Our Own',
    category: 'max',
    categoryLabel: 'MAX Chatbot',
    shortDescription: 'A MAX chatbot offering support information for veterans and their families in Tatarstan',
    fullDescription: 'A regional government project bringing together every support measure for veterans and their families in one place. Multi-level navigation across payments, benefits, medical, legal and psychological help, education, employment and sanatorium treatment. The bot is registered with an official custom username on behalf of the organisation.',
    client: 'ANO Dialog Regions, Republic of Tatarstan',
    year: '2026',
    challenge: 'Move the existing Telegram bot infrastructure onto the MAX platform, fill the missing sections, and launch the bot with an official username under the organisation’s auspices.',
    solution: 'We built a MAX chatbot from scratch on top of the MAX messenger API. We designed multi-level navigation across payments, benefits, medical, legal and psychological help, education, employment and sanatorium treatment. We filled in the content gaps that were missing in the original bot and registered the bot with a custom username through the organisation.',
    result: 'A government support service now lives in the main Russian messenger. Thousands of families gained a simple and fast path to the information they actually need.',
    images: { preview: '/images/ZabotaOSvoih.jpg', hero: '/images/ZabotaOSvoih.jpg', gallery: [] },
    technologies: TECH.zabota,
    featured: true,
  },
  {
    id: '8',
    slug: 'roza-tsvetov',
    title: 'Roza Tsvetov',
    category: 'max',
    categoryLabel: 'MAX WebApp',
    shortDescription: 'MAX WebApp — online store for preserved flower arrangements',
    fullDescription: 'A complete flower e-commerce experience inside the MAX messenger. Catalog with category filters, detailed bouquet cards, cart, checkout with delivery date, time and method, online payment via YooKassa, personal account with order history and bonus balance. An admin panel handles catalog, orders, sales analytics and broadcasts. Auto-authentication via MAX — no passwords or sign-up.',
    client: 'Roza Tsvetov preserved-floristry online store',
    year: '2026',
    challenge: 'Give customers a fast and convenient way to pick and order preserved-flower bouquets, combining catalog, delivery booking, online payment and the loyalty program in a single interface — without phone calls, chat threads or a separate app.',
    solution: 'We built a MAX WebApp covering the full purchase cycle: a category-filterable catalog, detailed bouquet pages, cart, checkout with date, time and delivery-or-pickup option, online payment via YooKassa, and a personal account with order history and bonus balance. The bot automatically notifies the customer at every step — from order confirmation to delivery. In parallel, an admin panel handles catalog, orders, sales analytics and broadcast campaigns.',
    result: 'A compact flower e-commerce experience that replaces both website and phone, cuts the path from picking a bouquet to payment to 30 seconds, and gives the preserved-floristry studio a full online sales channel with 5% cashback, push notifications on order status and a custom-arrangement builder — all in one messenger window.',
    images: { preview: '/images/RozaTsvetov.png', hero: '/images/RozaTsvetov.png', gallery: [] },
    previewMode: 'contain',
    technologies: TECH.roza,
    featured: true,
  },
  {
    id: '5',
    slug: 'kitapkhane',
    title: 'Kitapkhane',
    category: 'max',
    categoryLabel: 'MAX Bot',
    shortDescription: 'A MAX bot for the National Electronic Library of Tatarstan',
    fullDescription: 'A digital library service inside MAX: instant access to a reader card, Code128 barcode generation, fast entry into the catalog, collections, document requests and the reference services of kitap.tatar.ru. The bot takes a Unified Reader Card number, validates the format, normalises the input and generates the barcode.',
    client: 'National Electronic Library of the Republic of Tatarstan',
    year: '2025',
    challenge: 'Bring the library’s key features together in a single clear interface and cut the user’s path to the action they need down to a couple of clicks.',
    solution: 'We built a MAX bot that accepts a Unified Reader Card number, validates the format, normalises the input and instantly generates a Code128 barcode. The bot became a fast entry point into the kitap.tatar.ru ecosystem: catalog, collections, document requests and reference services.',
    result: 'A compact digital service that removes extra steps, speeds up access to library services and turns scattered features into a single user experience.',
    images: { preview: '/images/Kitapkhane.jpg', hero: '/images/Kitapkhane.jpg', gallery: [] },
    technologies: TECH.kitap,
    featured: true,
  },
  {
    id: '1',
    slug: 'lull',
    title: 'Lull',
    category: 'ios',
    categoryLabel: 'iOS app',
    shortDescription: 'iOS app for women’s health',
    fullDescription: 'A menstrual-cycle and pregnancy tracker with AI predictions and personal analytics. Cycle tracking with period and ovulation forecasts, pregnancy mode with a week-by-week calendar and due date, a mood, symptom and well-being journal, and trackers for kicks, contractions, blood pressure and weight.',
    client: 'Own product',
    year: '2025',
    challenge: 'Build an app that helps women understand their body better — from planning through pregnancy.',
    solution: 'We built the app with AI predictions based on personal data, a cycle-tracking mode and a pregnancy mode, a symptom journal and personalised tips.',
    result: 'A complete product on the App Store with a thoughtful UX, a soft visual style and a feature set that works every day.',
    images: { preview: '/images/LullPhotoNew.jpg', hero: '/images/LullPhotoNew.jpg', gallery: [] },
    technologies: TECH.lull,
    featured: true,
  },
  {
    id: '2',
    slug: 'love-explore',
    title: 'LoveExplore',
    category: 'ios',
    categoryLabel: 'iOS app',
    shortDescription: 'iOS app for couples',
    fullDescription: 'An app that helps couples learn each other more deeply, strengthen their connection and bring back the spark. 150+ questions for deep conversations, the 36 questions for falling in love based on Arthur Aron’s method, date ideas, two-player games and a motivation system.',
    client: 'Own product',
    year: '2025',
    challenge: 'Give couples a tool for real conversation — not about chores, but about feelings, dreams and each other.',
    solution: 'We built the app with 150+ questions for deep conversations, the 36-questions method for falling in love, date ideas, two-player games and a points-and-streak motivation system.',
    result: 'A finished app on the App Store. Dark theme, bold accents, an intuitive interface. A product that couples use together.',
    images: { preview: '/images/LoveExplore.jpeg', hero: '/images/LoveExplore.jpeg', gallery: [] },
    technologies: TECH.love,
    featured: true,
  },
  {
    id: '3',
    slug: 'pelikan',
    title: 'Pelican',
    category: 'telegram',
    categoryLabel: 'Telegram Mini App',
    shortDescription: 'Telegram Mini App for a floating studio',
    fullDescription: 'A mini app for booking float sessions and buying gift certificates straight from Telegram. Online booking with date and time selection, services and pricing, gift certificate purchase, payment integration and bot notifications.',
    client: 'Pelican floating studio',
    year: '2025',
    challenge: 'Give the studio’s clients an easy way to book a float — no phone calls, no separate website, right where they already chat.',
    solution: 'We built a Telegram Mini App with online booking, date and time selection, gift certificate purchase and payment integration.',
    result: 'A working service inside Telegram. Customers book and pay in a couple of clicks. The studio receives requests automatically.',
    images: { preview: '/images/Floating_Pelican.jpeg', hero: '/images/Floating_Pelican.jpeg', gallery: [] },
    technologies: TECH.pelikan,
    featured: true,
  },
  {
    id: '4',
    slug: 'pink-purple',
    title: 'Pink Purple',
    category: 'telegram',
    categoryLabel: 'Telegram Mini App',
    shortDescription: 'Telegram Mini App for a bubble-tea cafe',
    fullDescription: 'A mini app for ordering bubble tea with prepayment, a bonus system and games — all inside Telegram. A menu with drinks, toppings and sizes, pre-ordering with online payment, a bonus program and mini-games.',
    client: 'Pink Purple cafe',
    year: '2025',
    challenge: 'Make ordering bubble tea fast and convenient — no queues, no waiting, with a touch of play.',
    solution: 'We built a Telegram Mini App with a drinks menu, pre-ordering with online payment, a bonus program, mini-games and ready-order notifications.',
    result: 'A complete service inside Telegram. Guests order, pay and play. The cafe gets pre-paid orders and loyal customers.',
    images: { preview: '/images/PinkPurple.jpeg', hero: '/images/PinkPurple.jpeg', gallery: [] },
    technologies: TECH.pinkPurple,
    featured: true,
  },
];

export const projectsByLocale: Record<CopyMode, Project[]> = {
  ru: RU_PROJECTS,
  en: EN_PROJECTS,
};

// Backwards-compatible default export (RU) for SSR / static params generation.
export const projects: Project[] = RU_PROJECTS;

// ─── Locale-aware getters ──────────────────────────────────────────────────

export const getProjectBySlugForLocale = (slug: string, mode: CopyMode): Project | undefined =>
  projectsByLocale[mode].find((p) => p.slug === slug);

export const getFeaturedProjectsForLocale = (mode: CopyMode): Project[] =>
  projectsByLocale[mode].filter((p) => p.featured);

export const getProjectsByCategoryForLocale = (category: string, mode: CopyMode): Project[] => {
  const list = projectsByLocale[mode];
  if (category === 'all') return list;
  return list.filter((p) => p.category === category);
};

export const getAdjacentProjectsForLocale = (currentSlug: string, mode: CopyMode) => {
  const list = projectsByLocale[mode];
  const currentIndex = list.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? list[currentIndex - 1] : list[list.length - 1];
  const nextProject = currentIndex < list.length - 1 ? list[currentIndex + 1] : list[0];
  return { prevProject, nextProject };
};

// ─── Backwards-compatible RU getters (used at SSR time) ───────────────────

export const getProjectBySlug = (slug: string): Project | undefined =>
  getProjectBySlugForLocale(slug, 'ru');

export const getFeaturedProjects = (): Project[] => getFeaturedProjectsForLocale('ru');

export const getProjectsByCategory = (category: string): Project[] =>
  getProjectsByCategoryForLocale(category, 'ru');

export const getAdjacentProjects = (currentSlug: string) =>
  getAdjacentProjectsForLocale(currentSlug, 'ru');
