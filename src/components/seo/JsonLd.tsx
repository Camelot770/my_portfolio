export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'StackLab',
    url: 'https://stacklab.su',
    logo: 'https://stacklab.su/images/logo.png',
    description:
      'Студия разработки Mini Apps и чат-ботов для MAX, iOS-приложений и веб-сервисов. Полный цикл: от идеи до запуска.',
    email: 'stacklab@mail.ru',
    areaServed: {
      '@type': 'Country',
      name: 'Россия',
    },
    knowsAbout: [
      'Разработка Mini Apps для MAX',
      'Разработка чат-ботов для MAX',
      'MAX WebApp разработка',
      'iOS-разработка',
      'Telegram Mini Apps',
      'Веб-разработка',
      'React',
      'Next.js',
      'Swift',
      'SwiftUI',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги разработки',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Разработка Mini Apps и ботов для MAX',
            description:
              'Мини-приложения и чат-боты для мессенджера MAX: e-commerce, бронирование, CRM, автоматизация бизнес-процессов, интеграции с платёжными системами.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Разработка iOS-приложений',
            description:
              'Нативные iOS-приложения на Swift и SwiftUI. От проектирования до публикации в App Store.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Веб-разработка',
            description:
              'Сайты и веб-сервисы на Next.js и React. Лендинги, корпоративные сайты, веб-приложения.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StackLab',
    url: 'https://stacklab.su',
    description:
      'Разработка Mini Apps и чат-ботов для MAX, iOS-приложений и веб-сервисов',
    inLanguage: 'ru-RU',
    publisher: {
      '@type': 'Organization',
      name: 'StackLab',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `https://stacklab.su${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItemData {
  question: string;
  answer: string;
}

export function FAQPageJsonLd({ items }: { items: FAQItemData[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProjectJsonLdProps {
  name: string;
  description: string;
  url: string;
  image: string;
  category: string;
  technologies: string[];
  datePublished: string;
}

export function ProjectJsonLd({
  name,
  description,
  url,
  image,
  category,
  technologies,
  datePublished,
}: ProjectJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: `https://stacklab.su${url}`,
    image: `https://stacklab.su${image}`,
    applicationCategory: category,
    operatingSystem: category === 'iOS-приложение' ? 'iOS' : undefined,
    author: {
      '@type': 'Organization',
      name: 'StackLab',
    },
    datePublished,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'RUB',
    },
    keywords: technologies.join(', '),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
