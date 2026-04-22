import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'О нас — команда разработки Mini Apps и ботов для MAX',
  description:
    'StackLab — студия разработки полного цикла. Создаём Mini Apps, чат-ботов и сервисы для MAX, iOS-приложения и веб-продукты. Прямая коммуникация, без посредников.',
  alternates: {
    canonical: 'https://stacklab.su/about',
  },
  openGraph: {
    title: 'О StackLab — команда разработки Mini Apps и ботов для MAX',
    description:
      'Студия разработки полного цикла. Mini Apps и чат-боты для MAX, iOS и веб. Прямая коммуникация, без посредников.',
    url: 'https://stacklab.su/about',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О StackLab',
    description: 'Студия разработки Mini Apps и ботов для MAX, iOS и веб.',
    images: ['/images/og-image.jpg'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
