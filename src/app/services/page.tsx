import { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги',
  description:
    'iOS-приложения, Telegram Mini Apps и веб-разработка. Полный цикл разработки: от идеи до работающего продукта.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
