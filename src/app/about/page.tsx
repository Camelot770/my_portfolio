import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: 'Обо мне',
  description:
    'StackLab — студия разработки полного цикла. Один разработчик с математическим бэкграундом, который ведёт проект от первого разговора до публикации.',
};

export default function AboutPage() {
  return <AboutContent />;
}
