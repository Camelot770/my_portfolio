export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'ios' | 'telegram' | 'web';
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

// Используем placeholder изображение пока не добавлены реальные
const placeholderImage = '/images/preview.jpg';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'lull',
    title: 'Lull',
    category: 'ios',
    categoryLabel: 'iOS-приложение',
    shortDescription: 'Приложение для отслеживания женского цикла',
    fullDescription: 'Lull — интуитивное iOS-приложение для отслеживания менструального цикла, овуляции и сопутствующих симптомов. Минималистичный дизайн и умные прогнозы на основе данных пользователя.',
    client: 'Собственный проект',
    year: '2024',
    link: 'https://apps.apple.com',
    challenge: 'Создать приложение для трекинга цикла, которое было бы одновременно информативным и простым в использовании, без перегруженности функциями.',
    solution: 'Разработал минималистичный интерфейс с фокусом на главном — календаре и прогнозах. Реализовал алгоритм предсказания на основе исторических данных пользователя.',
    result: 'Приложение опубликовано в App Store. Пользователи отмечают простоту интерфейса и точность прогнозов.',
    images: {
      preview: placeholderImage,
      hero: placeholderImage,
      gallery: [placeholderImage, placeholderImage, placeholderImage],
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
    shortDescription: 'Приложение для улучшения коммуникации в паре',
    fullDescription: 'LoveExplore помогает парам улучшить коммуникацию через интерактивные вопросы, игры и совместные активности. Идеально для свиданий и укрепления отношений.',
    client: 'Собственный проект',
    year: '2024',
    challenge: 'Создать приложение, которое поможет парам находить темы для общения и проводить время вместе качественнее.',
    solution: 'Разработал систему карточек с вопросами разной глубины, интерактивные игры для двоих и функцию совместного планирования.',
    result: 'Приложение используется парами для свиданий и ежедневного общения. Положительные отзывы о разнообразии контента.',
    images: {
      preview: placeholderImage,
      hero: placeholderImage,
      gallery: [placeholderImage, placeholderImage],
    },
    technologies: ['Swift', 'SwiftUI', 'CloudKit'],
    featured: true,
  },
  {
    id: '3',
    slug: 'floating-studio',
    title: 'Telegram Mini App для студии флоатинга',
    category: 'telegram',
    categoryLabel: 'Telegram Mini App',
    shortDescription: 'Система онлайн-записи для спа-студии',
    fullDescription: 'Полноценная система записи на услуги флоатинга прямо в Telegram. Выбор даты, времени, мастера и онлайн-оплата без необходимости устанавливать отдельное приложение.',
    client: 'Студия флоатинга',
    year: '2024',
    challenge: 'Автоматизировать процесс записи клиентов, уменьшить нагрузку на администраторов и снизить количество пропущенных визитов.',
    solution: 'Создал Telegram Mini App с удобным интерфейсом выбора услуг, интеграцией с календарём студии и автоматическими напоминаниями.',
    result: 'Время на обработку записи сократилось с 5 минут до 30 секунд. Клиенты получают автоматические напоминания.',
    images: {
      preview: placeholderImage,
      hero: placeholderImage,
      gallery: [placeholderImage, placeholderImage],
    },
    technologies: ['React', 'TypeScript', 'Telegram Bot API', 'Node.js'],
    featured: true,
  },
  {
    id: '4',
    slug: 'bubble-tea',
    title: 'Bubble Tea Mini App',
    category: 'telegram',
    categoryLabel: 'Telegram Mini App',
    shortDescription: 'Сервис заказа баббл-чая с системой лояльности',
    fullDescription: 'Первый коммерческий проект — полноценный сервис для заказа баббл-чая через Telegram. Каталог напитков, корзина, онлайн-оплата и программа лояльности с бонусами.',
    client: 'Точка баббл-чая',
    year: '2023',
    challenge: 'Создать удобный канал продаж для точки баббл-чая без затрат на разработку и поддержку отдельного приложения.',
    solution: 'Разработал Telegram Mini App с полным циклом заказа: от каталога до оплаты. Добавил систему бонусов для повторных клиентов.',
    result: 'Сервис обрабатывает реальные транзакции. Увеличение повторных заказов благодаря программе лояльности.',
    images: {
      preview: placeholderImage,
      hero: placeholderImage,
      gallery: [placeholderImage, placeholderImage],
    },
    technologies: ['React', 'TypeScript', 'Telegram Bot API', 'PostgreSQL'],
    featured: false,
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
