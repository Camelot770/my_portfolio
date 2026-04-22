import { Metadata } from 'next';
import { PortfolioContent } from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Портфолио — Mini Apps, боты для MAX, iOS и Telegram проекты',
  description:
    'Кейсы StackLab: MAX WebApp для медцентров, чат-боты для госструктур, e-commerce Mini Apps, iOS-приложения и Telegram Mini Apps. Реальные проекты для бизнеса.',
  alternates: {
    canonical: 'https://stacklab.su/portfolio',
  },
  openGraph: {
    title: 'Портфолио StackLab — кейсы Mini Apps и ботов для MAX',
    description:
      'Реальные проекты: MAX WebApp, чат-боты, Telegram Mini Apps, iOS-приложения и веб-сервисы для бизнеса и госструктур.',
    url: 'https://stacklab.su/portfolio',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Портфолио StackLab',
    description: 'Кейсы Mini Apps и чат-ботов для MAX, iOS и веб-проекты.',
    images: ['/images/og-image.jpg'],
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
