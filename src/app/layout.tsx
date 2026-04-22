import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header, Footer, CookieBanner } from '@/components/layout';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { MorphBackground } from '@/components/ui/MorphBackground';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stacklab.su'),
  title: {
    default: 'StackLab — Разработка Mini Apps и чат-ботов для MAX, iOS-приложений и веб-сервисов',
    template: '%s | StackLab — студия разработки',
  },
  description:
    'Разработка Mini Apps и чат-ботов для MAX, iOS-приложений и веб-продуктов. Полный цикл: от идеи до запуска. Сервисы для бизнеса, госструктур и стартапов в экосистеме MAX.',
  keywords: [
    'разработка mini app MAX',
    'разработка mini apps MAX',
    'разработка ботов MAX',
    'чат-боты для MAX',
    'MAX messenger mini app',
    'разработка приложений для MAX',
    'MAX для бизнеса',
    'iOS разработка',
    'Telegram Mini App',
    'боты Telegram',
    'веб-разработка',
    'студия разработки',
    'разработка мобильных приложений',
    'MAX WebApp разработка',
  ],
  authors: [{ name: 'StackLab' }],
  creator: 'StackLab',
  publisher: 'StackLab',
  alternates: {
    canonical: 'https://stacklab.su',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://stacklab.su',
    siteName: 'StackLab',
    title: 'StackLab — Разработка Mini Apps и ботов для MAX, iOS и веб',
    description:
      'Студия разработки полного цикла. Mini Apps и чат-боты для MAX, iOS-приложения, Telegram Mini Apps и веб-сервисы для бизнеса и госструктур.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StackLab — разработка Mini Apps и ботов для MAX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackLab — Разработка Mini Apps и ботов для MAX',
    description:
      'Mini Apps и чат-боты для MAX, iOS-приложения, Telegram Mini Apps и веб-сервисы. Полный цикл разработки для бизнеса и госструктур.',
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className="font-body antialiased bg-background text-foreground cursor-none"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md"
        >
          Перейти к основному контенту
        </a>
        <MorphBackground />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
