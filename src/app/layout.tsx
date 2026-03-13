import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header, Footer, CookieBanner } from '@/components/layout';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

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
  metadataBase: new URL('https://stacklab.dev'),
  title: {
    default: 'StackLab — Разработка iOS, MAX и Telegram Mini Apps и веб-продуктов',
    template: '%s | StackLab',
  },
  description:
    'Студия разработки полного цикла. iOS-приложения, MAX и Telegram Mini Apps, боты и веб-продукты для стартапов и малого бизнеса. От идеи до публикации.',
  keywords: [
    'разработка приложений',
    'iOS разработка',
    'MAX Mini App',
    'Telegram Mini App',
    'боты MAX',
    'боты Telegram',
    'веб-разработка',
    'мобильная разработка',
    'стартап',
    'студия разработки',
  ],
  authors: [{ name: 'StackLab' }],
  creator: 'StackLab',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://stacklab.dev',
    siteName: 'StackLab',
    title: 'StackLab — Разработка iOS, MAX и Telegram Mini Apps и веб-продуктов',
    description:
      'Студия разработки полного цикла. iOS-приложения, MAX и Telegram Mini Apps, боты и веб-продукты для стартапов и малого бизнеса.',
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
    title: 'StackLab — Разработка iOS, MAX и Telegram Mini Apps и веб-продуктов',
    description:
      'Студия разработки полного цикла. iOS-приложения, MAX и Telegram Mini Apps, боты и веб-продукты для стартапов и малого бизнеса.',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body
        className="font-body antialiased bg-background text-foreground cursor-none"
      >
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
