'use client';

import { useCopy } from '@/components/CopyProvider';
import { Arrow, CONTACTS, StationHead } from '@/components/line/kit';

/** Every channel is a station on the same red route; the last one is the terminal. */
export function ContactLines() {
  const { copy } = useCopy();
  const c = copy.home.channels;
  const rows = [
    { key: 'telegram' as const, href: CONTACTS.telegram, external: true },
    { key: 'max' as const, href: CONTACTS.max, external: true },
    { key: 'mail' as const, href: CONTACTS.mail, external: false },
  ];
  return (
    <ul className="chan">
      {rows.map((r) => (
        <li key={r.key}>
          <a href={r.href} {...(r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            <span className="chan__st" aria-hidden="true">
              <Arrow className="" />
            </span>
            <span className="chan__txt">
              <span className="chan__name">{c[r.key].name}</span>
              <span className="chan__note">{c[r.key].note}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HomeContact() {
  const { copy } = useCopy();
  const h = copy.home;

  return (
    <section className="sec" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="sec__body">
          <div className="cta__grid">
            <StationHead id="contact-title" title={h.contactTitle} lead={copy.cta.p}>
              <ul className="legend cta__hours t-meta">
                <li>{h.hours}</li>
                <li>{h.reply}</li>
              </ul>
            </StationHead>
            <ContactLines />
          </div>
        </div>
      </div>
    </section>
  );
}
