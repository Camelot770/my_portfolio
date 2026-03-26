import { Metadata } from 'next';
import { PortfolioContent } from './PortfolioContent';

export const metadata: Metadata = {
  title: 'Портфолио — Mini Apps, боты для MAX, iOS и Telegram проекты',
  description:
    'Кейсы StackLab: MAX WebApp для медцентров, чат-боты для госструктур, e-commerce Mini Apps, iOS-приложения и Telegram Mini Apps. Реальные проекты для бизнеса.',
  alternates: {
    canonical: 'https://stacklab.su/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
