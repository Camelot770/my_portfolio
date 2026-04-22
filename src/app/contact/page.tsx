import { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Контакты — обсудить разработку Mini App или бота для MAX',
  description:
    'Свяжитесь с StackLab для обсуждения разработки Mini App и чат-ботов для MAX, iOS-приложений и веб-сервисов. Пишите в Telegram или MAX — ответим в течение рабочего дня.',
  alternates: {
    canonical: 'https://stacklab.su/contact',
  },
  openGraph: {
    title: 'Контакты — StackLab',
    description:
      'Обсудим разработку Mini App и чат-ботов для MAX, iOS-приложений и веб-сервисов. Пишите в Telegram или MAX.',
    url: 'https://stacklab.su/contact',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакты — StackLab',
    description:
      'Обсудим разработку Mini App и чат-ботов для MAX, iOS-приложений и веб-сервисов.',
    images: ['/images/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
