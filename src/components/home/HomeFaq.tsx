'use client';

import { useState } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { Plus, StationHead } from '@/components/line/kit';
import { faqItemsByLocale } from '@/data/faq';

export function HomeFaq() {
  const { copy, mode } = useCopy();
  const items = faqItemsByLocale[mode];
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="sec__body">
          <StationHead
            id="faq-title"
            title={`${copy.faq.headPlain} ${copy.faq.headEm}`.trim()}
            lead={copy.faq.lead}
          />
          <ul className="faq">
            {items.map((item) => {
              const isOpen = open === item.id;
              return (
                <li key={item.id} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                  <h3 style={{ margin: 0 }}>
                    <button
                      type="button"
                      className="faq__q"
                      id={`faq-q-${item.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${item.id}`}
                      onClick={() => setOpen(isOpen ? null : item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="faq__icon" aria-hidden="true">
                        <Plus />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq__a"
                    id={`faq-a-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-q-${item.id}`}
                    hidden={false}
                  >
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
