import { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Свяжитесь с нами для обсуждения вашего проекта. Email: naum_kogan@inbox.ru, Telegram: @Naum0',
};

export default function ContactPage() {
  return <ContactContent />;
}
