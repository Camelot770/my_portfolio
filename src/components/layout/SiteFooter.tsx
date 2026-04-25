'use client';

import Link from 'next/link';
import { useCopy } from '@/components/CopyProvider';

export function SiteFooter() {
  const { copy } = useCopy();
  const f = copy.footer;
  return (
    <footer className="footer" id="site-footer">
      <div>
        <div className="footer__brand">
          stacklab<em>/</em>
        </div>
        <div className="footer__desc">{f.desc}</div>
      </div>
      <div className="footer__col">
        <h5>{f.contactsHeading}</h5>
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
        <h5>{f.directionsHeading}</h5>
        <Link href="/services#ios-apps">{f.directions.ios}</Link>
        <Link href="/services#telegram-max-apps">{f.directions.max}</Link>
        <Link href="/services#telegram-max-apps">{f.directions.tg}</Link>
        <Link href="/services#web-development">{f.directions.web}</Link>
      </div>
      <div className="footer__col">
        <h5>{f.navHeading}</h5>
        <Link href="/portfolio">{f.navLinks.portfolio}</Link>
        <Link href="/about">{f.navLinks.about}</Link>
        <Link href="/contact">{f.navLinks.contact}</Link>
        <Link href="/privacy">{f.navLinks.privacy}</Link>
      </div>
      <div className="footer__foot">
        <span>© StackLab 2024—{new Date().getFullYear()}</span>
        <span>{f.signature}</span>
      </div>
    </footer>
  );
}
