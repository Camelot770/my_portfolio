import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'О нас — команда разработки Mini Apps и ботов для MAX',
  description:
    'StackLab — инженерная студия полного цикла. Архитектура, разработка и запуск Mini Apps, чат-ботов для MAX, iOS-приложений и веб-сервисов.',
  alternates: {
    canonical: 'https://stacklab.su/about',
  },
  openGraph: {
    title: 'О StackLab — команда разработки Mini Apps и ботов для MAX',
    description:
      'Инженерная студия полного цикла. Mini Apps и чат-боты для MAX, iOS и веб. Архитектура, разработка, релиз.',
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
