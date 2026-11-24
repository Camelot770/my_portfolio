'use client';

import Image from 'next/image';
import { useCopy } from '@/components/CopyProvider';
import { CONTACTS, TLink, lineStyle } from '@/components/line/kit';

export function SiteFooter() {
  const { copy } = useCopy();
  const f = copy.footer;
  const h = copy.home;

  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div className="ftr__brand">
            <TLink href="/" aria-label="StackLab">
              <Image src="/images/logo-trim.png" alt="StackLab" width={344} height={215} />
            </TLink>
            <p>{f.desc}</p>
          </div>

          <div>
            <h2>{f.directionsHeading}</h2>
            <ul>
              <li>
                <TLink href="/services#telegram-max-apps" className="badge" style={lineStyle('var(--red)')}>
                  <i />
                  {f.directions.max}
                </TLink>
              </li>
              <li>
                <TLink href="/services#telegram-max-apps" className="badge" style={lineStyle('var(--red)')}>
                  <i />
                  {f.directions.tg}
                </TLink>
              </li>
              <li>
                <TLink href="/services#ai-integration" className="badge" style={lineStyle('var(--violet)')}>
                  <i />
                  {f.directions.ai}
                </TLink>
              </li>
              <li>
                <TLink href="/services#web-development" className="badge" style={lineStyle('var(--blue)')}>
                  <i />
                  {f.directions.web}
                </TLink>
              </li>
              <li>
                <TLink href="/services#ios-apps" className="badge" style={lineStyle('var(--green)')}>
                  <i />
                  {f.directions.ios}
                </TLink>
              </li>
            </ul>
          </div>

          <div>
            <h2>{f.navHeading}</h2>
            <ul>
              <li><TLink href="/portfolio">{h.nav.projects}</TLink></li>
              <li><TLink href="/services">{h.nav.services}</TLink></li>
              <li><TLink href="/about">{h.nav.about}</TLink></li>
              <li><TLink href="/contact">{h.nav.contact}</TLink></li>
            </ul>
          </div>

          <div>
            <h2>{f.contactsHeading}</h2>
            <ul>
              <li><a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer">Telegram · @Naum0</a></li>
              <li><a href={CONTACTS.max} target="_blank" rel="noopener noreferrer">MAX · StackLab</a></li>
              <li><a href={CONTACTS.mail}>stacklab@mail.ru</a></li>
              <li className="muted">{h.hours}</li>
            </ul>
          </div>
        </div>

        <div className="ftr__base">
          <span className="t-num">© StackLab 2024–{new Date().getFullYear()} · {h.rights}</span>
          <TLink href="/privacy" className="link">{f.navLinks.privacy}</TLink>
        </div>
      </div>
    </footer>
  );
}
