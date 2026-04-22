import { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги — разработка Mini Apps, ботов для MAX, iOS и веб',
  description:
    'Разработка Mini Apps и чат-ботов для MAX, iOS-приложений и веб-сервисов. Сервисы для бизнеса, госструктур и стартапов: e-commerce, автоматизация, личные кабинеты, интеграции в экосистеме MAX.',
  alternates: {
    canonical: 'https://stacklab.su/services',
  },
  openGraph: {
    title: 'Услуги StackLab — разработка для MAX, iOS и веб',
    description:
      'Полный цикл разработки Mini Apps, чат-ботов для MAX, iOS-приложений и веб-сервисов для бизнеса, госструктур и стартапов.',
    url: 'https://stacklab.su/services',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Услуги StackLab',
    description: 'Разработка Mini Apps и ботов для MAX, iOS и веб-сервисов.',
    images: ['/images/og-image.jpg'],
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
