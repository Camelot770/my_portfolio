import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="footer" id="site-footer">
      <div>
        <div className="footer__brand">
          stacklab<em>/</em>
        </div>
        <div className="footer__desc">
          Инженерная студия. Mini Apps и чат-боты для MAX и Telegram, нативный
          iOS, веб-сервисы на Next.js. Работаем напрямую — без менеджеров
          между вами и кодом.
        </div>
      </div>
      <div className="footer__col">
        <h5>Связь</h5>
        <a href="mailto:stacklab@mail.ru">stacklab@mail.ru</a>
        <a
          href="https://t.me/Naum0"
          target="_blank"
          rel="noopener noreferrer"
        >
          t.me/Naum0
        </a>
        <a
          href="https://max.ru/u/f9LHodD0cOLGKi7i1KndiYLJAU1rf7OCpsTt2VCnnAAN7qe3VUEjR99azyg"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAX — StackLab
        </a>
      </div>
      <div className="footer__col">
        <h5>Направления</h5>
        <Link href="/services#ios-apps">iOS-приложения</Link>
        <Link href="/services#telegram-max-apps">MAX Mini Apps и боты</Link>
        <Link href="/services#telegram-max-apps">Telegram Mini Apps</Link>
        <Link href="/services#web-development">Веб на Next.js</Link>
      </div>
      <div className="footer__col">
        <h5>Навигация</h5>
        <Link href="/portfolio">Портфолио</Link>
        <Link href="/about">О студии</Link>
        <Link href="/contact">Контакты</Link>
        <Link href="/privacy">Политика</Link>
      </div>
      <div className="footer__foot">
        <span>© StackLab 2024—{new Date().getFullYear()}</span>
        <span>V2 · сигнал-частота 60 Гц</span>
      </div>
    </footer>
  );
}
