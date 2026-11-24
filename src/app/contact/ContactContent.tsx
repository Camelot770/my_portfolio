'use client';

import { useCopy } from '@/components/CopyProvider';
import { ContactLines } from '@/components/home/HomeContact';
import { StationHead } from '@/components/line/kit';

export function ContactContent() {
  const { copy } = useCopy();
  const c = copy.contact;
  const h = copy.home;

  return (
    <>
      <section className="sec page-top" aria-labelledby="contact-page-title">
        <div className="wrap">
          <div className="sec__body cta__grid">
            <StationHead level={1} id="contact-page-title" title={`${c.titlePlain} ${c.titleEm}`} lead={c.lead}>
              <ul className="legend cta__hours t-meta">
                <li>{h.hours}</li>
                <li>{h.reply}</li>
              </ul>
            </StationHead>
            <ContactLines />
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="contact-start">
        <div className="wrap">
          <div className="sec__body">
            <StationHead id="contact-start" title={c.closingTitle} lead={c.closingP} />
          </div>
        </div>
      </section>
    </>
  );
}
