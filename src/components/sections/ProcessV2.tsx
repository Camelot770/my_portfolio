'use client';

import { useEffect, useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { processSteps } from '@/data/services';

export function ProcessV2() {
  const rootRef = useRef<HTMLElement>(null);
  const { copy } = useCopy();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll('.r-fade, .r-mask');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="process" id="process" ref={rootRef}>
      <div className="process__wrap">
        <div className="process__head">
          <div className="sec__tag">{copy.process.tag}</div>
          <h2 className="sec__head r-mask">
            <span className="r-in">
              {copy.process.headPre} <em>{copy.process.headEm}</em>
              {copy.process.headPost}
            </span>
          </h2>
          <p className="process__lead">{copy.process.lead}</p>
        </div>
        <div className="steps">
          {processSteps.map((s) => (
            <div className="step r-fade" key={s.number}>
              <div className="step__n">{s.number}</div>
              <div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__p">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
