import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'О нас',
  description:
    'StackLab — студия разработки полного цикла. Наум Коган и Камиль Исхаков — два разработчика, которые ведут проект от первого разговора до публикации.',
};

export default function AboutPage() {
  return <AboutContent />;
}
