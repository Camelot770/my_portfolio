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
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
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
    solution: 'Разработал приложение с AI-прогнозами на основе персональных данных, режимом отслеживания цикла и режимом беременности, дневником симптомов и персональными советами.',
    result: 'Полноценный продукт в App Store с продуманным UX, мягким визуальным стилем и функционалом, который работает каждый день.',
    images: {
      preview: '/images/LullPhotoNew.jpg',
      hero: '/images/LullPhotoNew.jpg',
      gallery: [],
    },
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'HealthKit'],
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
    solution: 'Разработал приложение с 150+ вопросами для глубоких разговоров, методикой 36 вопросов для влюблённости, идеями для свиданий, играми на двоих и системой очков и streak для мотивации.',
    result: 'Готовое приложение в App Store. Тёмная тема, яркие акценты, интуитивный интерфейс. Продукт, который пары используют вместе.',
    images: {
      preview: '/images/LoveExplore.jpeg',
      hero: '/images/LoveExplore.jpeg',
      gallery: [],
    },
    technologies: ['Swift', 'SwiftUI', 'CloudKit'],
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
    solution: 'Разработал Telegram Mini App с онлайн-записью, выбором даты и времени, покупкой подарочных сертификатов и интеграцией с платёжной системой.',
    result: 'Работающий сервис внутри Telegram. Клиенты записываются и оплачивают в пару кликов. Студия получает заявки автоматически.',
    images: {
      preview: '/images/Floating_Pelican.jpeg',
      hero: '/images/Floating_Pelican.jpeg',
      gallery: [],
    },
    technologies: ['React', 'TypeScript', 'Telegram Bot API', 'Node.js'],
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
    solution: 'Разработал Telegram Mini App с меню напитков, предзаказом с онлайн-оплатой, бонусной программой, мини-играми и уведомлениями о готовности.',
    result: 'Полноценный сервис внутри Telegram. Гости заказывают, платят и играют. Кафе получает предоплаченные заказы и лояльных клиентов.',
    images: {
      preview: '/images/PinkPurple.jpeg',
      hero: '/images/PinkPurple.jpeg',
      gallery: [],
    },
    technologies: ['React', 'TypeScript', 'Telegram Bot API', 'PostgreSQL'],
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
    images: {
      preview: '/images/Kitapkhane.jpg',
      hero: '/images/Kitapkhane.jpg',
      gallery: [],
    },
    technologies: ['JavaScript', 'Node.js', 'MAX Bot API'],
    featured: true,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getAdjacentProjects = (currentSlug: string) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];
  return { prevProject, nextProject };
};
