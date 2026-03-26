import { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги — разработка Mini Apps, ботов для MAX, iOS и веб',
  description:
    'Разработка Mini Apps и чат-ботов для MAX, iOS-приложений и веб-сервисов. Сервисы для бизнеса, госструктур и стартапов: e-commerce, автоматизация, личные кабинеты, интеграции в экосистеме MAX.',
  alternates: {
    canonical: 'https://stacklab.su/services',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
