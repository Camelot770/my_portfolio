import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности студии разработки StackLab. Информация о сборе, хранении и обработке персональных данных.',
  alternates: {
    canonical: 'https://stacklab.su/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-display-3 font-heading font-bold mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted mb-8">
              <strong>Дата вступления в силу:</strong> {new Date().toLocaleDateString('ru-RU')}
            </p>

            <p className="text-muted mb-6">
              Настоящая Политика конфиденциальности описывает, как StackLab (далее — «мы», «нас», «наш») обрабатывает информацию при использовании нашего веб-сайта (далее — «Сайт»).
            </p>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">1. Какие данные мы собираем</h2>
              <p className="text-muted mb-4">
                Наш Сайт носит информационный характер. Мы не собираем персональные данные посетителей автоматически.
              </p>
              <p className="text-muted mb-4">Мы не используем:</p>
              <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                <li>Формы обратной связи с автоматической обработкой</li>
                <li>Системы аналитики</li>
                <li>Сторонние сервисы отслеживания</li>
              </ul>
              <p className="text-muted">
                Единственный способ передать нам свои данные — связаться с нами напрямую по электронной почте или в мессенджерах.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">2. Данные при добровольном обращении</h2>
              <p className="text-muted mb-4">
                Если вы связываетесь с нами по email или через мессенджеры, мы можем получить:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                <li>Ваше имя</li>
                <li>Контактные данные (email, номер телефона, username)</li>
                <li>Содержание вашего сообщения</li>
              </ul>
              <p className="text-muted">
                Эти данные используются исключительно для ответа на ваш запрос и обсуждения потенциального сотрудничества.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">3. Как мы используем данные</h2>
              <p className="text-muted mb-4">
                Данные, полученные при добровольном обращении, используются для:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                <li>Ответа на ваши вопросы</li>
                <li>Обсуждения деталей проекта</li>
                <li>Подготовки коммерческого предложения</li>
              </ul>
              <p className="text-muted">
                Мы не передаём ваши данные третьим лицам, не продаём и не используем в маркетинговых целях.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">4. Хранение данных</h2>
              <p className="text-muted mb-4">
                Мы храним переписку и контактные данные только на время, необходимое для ведения коммуникации и выполнения обязательств.
              </p>
              <p className="text-muted">
                По вашему запросу мы удалим все данные, связанные с вами.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">5. Ваши права</h2>
              <p className="text-muted mb-4">Вы имеете право:</p>
              <ul className="list-disc list-inside text-muted space-y-2 mb-4">
                <li>Запросить информацию о данных, которые мы храним</li>
                <li>Потребовать исправления неточных данных</li>
                <li>Потребовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
              <p className="text-muted">
                Для реализации любого из этих прав напишите нам:{' '}
                <a href="mailto:naum_kogan@inbox.ru" className="text-accent hover:underline">
                  naum_kogan@inbox.ru
                </a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">6. Безопасность</h2>
              <p className="text-muted">
                Мы принимаем разумные меры для защиты полученной информации от несанкционированного доступа, изменения или уничтожения.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">7. Cookies</h2>
              <p className="text-muted mb-4">
                Наш сайт не использует cookies для отслеживания пользователей.
              </p>
              <p className="text-muted">
                Мы не устанавливаем аналитические, рекламные или какие-либо другие cookies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-heading-2 font-bold mb-4">8. Изменения политики</h2>
              <p className="text-muted">
                Мы можем обновлять данную Политику конфиденциальности. Актуальная версия всегда доступна на этой странице.
              </p>
            </section>

            <section>
              <h2 className="text-heading-2 font-bold mb-4">9. Контакты</h2>
              <p className="text-muted">
                По всем вопросам, связанным с обработкой персональных данных:{' '}
                <a href="mailto:naum_kogan@inbox.ru" className="text-accent hover:underline">
                  naum_kogan@inbox.ru
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
