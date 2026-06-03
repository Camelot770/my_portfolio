import { Metadata } from 'next';
import { PrivacyContent } from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности студии StackLab. Сбор, хранение и обработка персональных данных.',
  alternates: { canonical: 'https://stacklab.su/privacy' },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
