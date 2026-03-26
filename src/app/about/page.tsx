import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'О нас — команда разработки Mini Apps и ботов для MAX',
  description:
    'StackLab — студия разработки полного цикла. Создаём Mini Apps, чат-ботов и сервисы для MAX, iOS-приложения и веб-продукты. Прямая коммуникация, без посредников.',
  alternates: {
    canonical: 'https://stacklab.su/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
