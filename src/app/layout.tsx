import type { Metadata } from 'next';
import { Unbounded, Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { SiteShell } from '@/components/layout/SiteShell';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stacklab.su'),
  title: {
    default: 'StackLab — Инженерная студия. Mini Apps для MAX, Telegram, iOS и веб',
    template: '%s | StackLab',
  },
  description:
    'Инженерная студия StackLab. Разработка Mini Apps и чат-ботов для MAX, Telegram, нативных iOS-приложений и веб-сервисов. Полный инженерный цикл: архитектура, код, инфраструктура, релиз.',
  keywords: [
    'разработка mini app MAX',
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
      'Mini Apps для MAX и Telegram, нативный iOS, веб-сервисы на Next.js. Архитектура, разработка и релиз — внутри одной команды.',
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
      'Mini Apps для MAX и Telegram, нативный iOS, веб-сервисы. Инженерная студия полного цикла.',
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
    <html
      lang="ru"
      className={`${display.variable} ${serif.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      style={
        {
          '--font-sans': 'var(--font-geist-sans)',
          '--font-mono': 'var(--font-geist-mono)',
        } as React.CSSProperties
      }
    >
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-md"
        >
          Перейти к основному контенту
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
