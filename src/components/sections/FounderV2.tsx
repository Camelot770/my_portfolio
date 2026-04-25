'use client';

import { useCopy } from '@/components/CopyProvider';

export function FounderV2() {
  const { copy } = useCopy();
  const f = copy.founder;
  return (
    <section className="founder">
      <div className="founder__img">
        <div className="founder__badge">
          <span className="d" />
          {f.badge}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/my_photo.jpg" alt="Наум Коган — основатель StackLab" />
        <div className="founder__sig">
          <span>
            <b>Наум Коган</b>
            {f.signRole}
          </span>
          <span>
            {f.signMeta1}
            <br />
            {f.signMeta2}
          </span>
        </div>
      </div>
      <div className="founder__body">
        <div className="sec__tag">{f.tag}</div>
        <blockquote className="founder__quote">
          {f.quote.lead}
          <em>{f.quote.verb1}</em>
          {f.quote.mid}
          <em>{f.quote.verb2}</em>
          {f.quote.tail}
        </blockquote>
        <div className="founder__meta">
          {f.rows.map((r, i) => (
            <div className="row" key={i}>
              <b>{r.b}</b>
              {r.rest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
