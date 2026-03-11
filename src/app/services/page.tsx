import { Metadata } from 'next';
import { ServicesContent } from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги',
  description:
    'iOS-приложения, Max и Telegram Mini Apps, боты и веб-разработка. Полный цикл разработки: от идеи до работающего продукта.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
