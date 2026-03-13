import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'О нас',
  description:
    'StackLab — студия разработки полного цикла. Ведём проект от первого разговора до публикации: iOS-приложения, MAX и Telegram Mini Apps, боты и веб-сервисы.',
};

export default function AboutPage() {
  return <AboutContent />;
}
