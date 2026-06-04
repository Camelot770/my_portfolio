'use client';

import Image from 'next/image';
import { useCopy } from '@/components/CopyProvider';

export function FounderV2() {
  const { copy } = useCopy();
  const f = copy.founder;
  return (
    <section className="founder">
      <div className="founder__photos">
        {f.profiles.map((p, i) => (
          <div className="founder__img" key={i}>
            {i === 0 && (
              <div className="founder__badge">
                <span className="d" />
                {f.badge}
              </div>
            )}
            <Image
              src={p.photoSrc}
              alt={p.photoAlt}
              fill
              sizes="(max-width: 768px) 50vw, 22vw"
              style={{ objectFit: 'cover' }}
            />
            <div className="founder__sig">
              <span>
                <b>{p.name}</b>
                {p.signRole}
              </span>
            </div>
          </div>
        ))}
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
