'use client';

import { useCopy } from '@/components/CopyProvider';
import { ContactLines } from '@/components/home/HomeContact';
import { HomeTeam } from '@/components/home/HomeTeam';
import { StationHead } from '@/components/line/kit';

export function AboutContent() {
  const { copy } = useCopy();
  const a = copy.aboutPage;
  const facts = copy.about.cells;

  return (
    <>
      <section className="sec page-top" aria-labelledby="about-title">
        <div className="wrap">
          <div className="sec__body">
            <StationHead
              level={1}
              id="about-title"
              title={`${a.titlePlain}${a.titleEm}${a.titleSuffix}`.trim()}
              lead={a.lead}
            />
            <dl className="timetable" style={{ marginTop: 'clamp(40px, 5vw, 72px)', maxWidth: 980 }}>
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="t-num">
                    {f.vMain} {f.vEm}
                  </dt>
                  <dd>{f.p}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="values-title">
        <div className="wrap">
          <div className="sec__body">
            <StationHead id="values-title" title={copy.home.valuesTitle} />
            <ul className="values">
              {a.values.map((v) => (
                <li key={v.num}>
                  <h3>{v.title}</h3>
                  <p>{v.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <HomeTeam />

      <section className="sec" aria-labelledby="tech-title">
        <div className="wrap">
          <div className="sec__body">
            <StationHead id="tech-title" title={a.techHeading} />
            <dl className="timetable" style={{ marginTop: 'clamp(40px, 5vw, 72px)', maxWidth: 980 }}>
              {copy.stack.items.map((t) => (
                <div key={t.labelEm}>
                  <dt>
                    {t.labelEm}
                    {t.labelRest}
                  </dt>
                  <dd>{t.meta}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="about-close">
        <div className="wrap">
          <div className="sec__body cta__grid">
            <StationHead id="about-close" title={`${a.closingPre}${a.closingEm}`} lead={copy.cta.p} />
            <ContactLines />
          </div>
        </div>
      </section>
    </>
  );
}
