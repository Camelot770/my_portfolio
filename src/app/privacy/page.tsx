import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description:
    'Политика конфиденциальности студии StackLab. Сбор, хранение и обработка персональных данных.',
  alternates: { canonical: 'https://stacklab.su/privacy' },
};

const SECTIONS: Array<{ n: string; title: string; content: React.ReactNode }> = [
  {
    n: '01',
    title: 'Какие данные мы собираем',
    content: (
      <>
        <p>
          Сайт носит информационный характер. Мы не собираем персональные данные
          посетителей автоматически.
        </p>
        <p>Мы не используем:</p>
        <ul>
          <li>Формы обратной связи с автоматической обработкой</li>
          <li>Системы аналитики</li>
          <li>Сторонние сервисы отслеживания</li>
        </ul>
        <p>
          Единственный способ передать нам данные — связаться напрямую по
          электронной почте или в мессенджерах.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'Данные при добровольном обращении',
    content: (
      <>
        <p>Если вы связываетесь с нами по email или в мессенджерах, мы можем получить:</p>
        <ul>
          <li>Имя</li>
          <li>Контактные данные (email, номер, username)</li>
          <li>Содержание сообщения</li>
        </ul>
        <p>Эти данные используются только для ответа на запрос и обсуждения сотрудничества.</p>
      </>
    ),
  },
  {
    n: '03',
    title: 'Как мы используем данные',
    content: (
      <>
        <p>Данные используются для:</p>
        <ul>
          <li>Ответа на вопросы</li>
          <li>Обсуждения деталей проекта</li>
          <li>Подготовки коммерческого предложения</li>
        </ul>
        <p>Мы не передаём данные третьим лицам, не продаём и не используем в маркетинге.</p>
      </>
    ),
  },
  {
    n: '04',
    title: 'Хранение данных',
    content: (
      <>
        <p>
          Храним переписку и контакты только на время, необходимое для
          коммуникации и выполнения обязательств. По запросу удалим все данные.
        </p>
      </>
    ),
  },
  {
    n: '05',
    title: 'Ваши права',
    content: (
      <>
        <p>Вы имеете право:</p>
        <ul>
          <li>Запросить информацию о хранящихся данных</li>
          <li>Потребовать исправления неточных данных</li>
          <li>Потребовать удаления данных</li>
          <li>Отозвать согласие на обработку</li>
        </ul>
        <p>
          Для реализации — напишите на{' '}
          <a href="mailto:naum_kogan@inbox.ru" style={{ color: 'var(--accent)' }}>
            naum_kogan@inbox.ru
          </a>
          .
        </p>
      </>
    ),
  },
  {
    n: '06',
    title: 'Безопасность и cookies',
    content: (
      <>
        <p>
          Мы принимаем разумные меры для защиты информации от несанкционированного
          доступа, изменения или уничтожения. Сайт не использует cookies для
          отслеживания пользователей.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <header className="page">
        <div className="page__tag">Политика</div>
        <h1 className="page__title">
          Политика <em>конфиденциальности</em>
        </h1>
        <p className="page__lead">
          Дата вступления в силу:{' '}
          {new Date().toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          .
        </p>
      </header>

      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 38px 160px',
        }}
      >
        {SECTIONS.map((s) => (
          <div
            key={s.n}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: 40,
              padding: '50px 0',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(40px, 3.5vw, 54px)',
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: 'var(--accent)',
              }}
            >
              {s.n}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(24px, 2.4vw, 34px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: 20,
                }}
              >
                {s.title}
              </h2>
              <div
                style={{
                  color: 'var(--fg-dim)',
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
                className="privacy-prose"
              >
                {s.content}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
