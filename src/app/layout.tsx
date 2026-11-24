import type { Metadata, Viewport } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const golos = Golos_Text({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-golos',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://stacklab.su'),
  title: {
    default: 'StackLab — Mini Apps для MAX, ИИ-интеграции, iOS и веб',
    template: '%s | StackLab',
  },
  description:
    'Инженерная студия StackLab. Mini Apps и чат-боты для MAX и Telegram, ИИ-интеграции в сайты, боты и бизнес-процессы, нативные iOS-приложения и веб-сервисы. Полный цикл: архитектура, код, инфраструктура, релиз.',
  keywords: [
    'разработка mini app MAX',
    'ИИ-интеграция',
    'внедрение ИИ в бизнес',
    'ИИ-ассистент для сайта',
    'чат-бот с ИИ',
    'чат-боты MAX',
    'MAX messenger mini app',
    'iOS разработка',
    'Telegram Mini App',
    'боты Telegram',
    'веб-разработка',
    'студия разработки',
    'разработка мобильных приложений',
  ],
  authors: [{ name: 'StackLab' }],
  creator: 'StackLab',
  publisher: 'StackLab',
  alternates: { canonical: 'https://stacklab.su' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://stacklab.su',
    siteName: 'StackLab',
    title: 'StackLab — Инженерная студия',
    description:
      'Mini Apps для MAX и Telegram, ИИ-интеграции, нативный iOS, веб-сервисы на Next.js. Архитектура, разработка и релиз — внутри одной команды.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StackLab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackLab — Инженерная студия',
    description:
      'Mini Apps для MAX и Telegram, ИИ-интеграции, нативный iOS, веб-сервисы. Инженерная студия полного цикла.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={golos.variable}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
