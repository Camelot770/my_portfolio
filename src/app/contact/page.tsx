import { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Контакты — обсудить разработку Mini App или бота для MAX',
  description:
    'Свяжитесь с StackLab для обсуждения разработки Mini App, чат-бота для MAX, iOS-приложения или веб-сервиса. Email: naum_kogan@inbox.ru, Telegram: @Naum0',
  alternates: {
    canonical: 'https://stacklab.su/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
