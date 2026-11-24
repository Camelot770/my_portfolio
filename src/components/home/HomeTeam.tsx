'use client';

import Image from 'next/image';
import { useCopy } from '@/components/CopyProvider';
import { StationHead, useContactHours } from '@/components/line/kit';

export function HomeTeam() {
  const { copy } = useCopy();
  const f = copy.founder;
  const h = copy.home;
  const q = f.quote;
  // «На связи» is a claim about now: make it only inside the promised hours.
  const open = useContactHours();

  return (
    <section className="sec" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <div className="sec__body">
          <StationHead id="team-title" title={h.teamTitle} />
          <div className="team__grid">
            {f.profiles.map((p) => (
              <article key={p.name} className="person">
                <div className="person__photo">
                  <Image
                    src={p.photoSrc}
                    alt={p.photoAlt}
                    fill
                    sizes="(max-width: 599px) 92vw, (max-width: 1099px) 46vw, 28vw"
                  />
                  {open !== null && (
                    <span className={`person__line${open ? '' : ' is-off'}`}>
                      <i aria-hidden="true" />
                      {open ? h.teamOnline : h.teamOffline}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="t-h3">{p.name}</h3>
                  <p className="person__role">{p.signRole}</p>
                </div>
                <ul className="person__tags">
                  {p.signMeta1.split(' · ').map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="team__side">
              <blockquote className="quote">
                {q.lead}
                {q.verb1}
                {q.mid}
                {q.verb2}
                {q.tail}
              </blockquote>
              <dl className="timetable">
                {f.rows.map((r) => (
                  <div key={r.b}>
                    <dt>{r.b}</dt>
                    <dd className="t-num">{r.rest}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
