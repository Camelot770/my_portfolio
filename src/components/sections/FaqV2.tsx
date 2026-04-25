'use client';

import { useState } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { faqItems } from '@/data/faq';

export function FaqV2() {
  const [open, setOpen] = useState<string | null>(faqItems[0]?.id ?? null);
  const { copy } = useCopy();

  return (
    <section className="faq" id="faq">
      <div className="faq__wrap">
        <div className="faq__head">
          <div className="sec__tag">{copy.faq.tag}</div>
          <h2 className="sec__head">
            {copy.faq.headPlain} <em>{copy.faq.headEm}</em>
          </h2>
          <p className="faq__lead">{copy.faq.lead}</p>
        </div>
        <div className="faq__list" role="list">
          {faqItems.map((it) => {
            const isOpen = open === it.id;
            return (
              <div
                className={`faq__item${isOpen ? ' open' : ''}`}
                key={it.id}
                role="listitem"
              >
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? null : it.id)}
                  aria-expanded={isOpen}
                >
                  <span>{it.question}</span>
                  <span className="sign" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq__a">{it.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
