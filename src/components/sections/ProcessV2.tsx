'use client';

import { useEffect, useRef } from 'react';
import { processSteps } from '@/data/services';

export function ProcessV2() {
  const rootRef = useRef<HTMLElement>(null);

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
          <div className="sec__tag">04 · Процесс</div>
          <h2 className="sec__head r-mask">
            <span className="r-in">
              От <em>сигнала</em> до запуска
            </span>
          </h2>
          <p className="process__lead">
            Прозрачный цикл: вы видите промежуточные результаты, правите
            курс по ходу, без «потом решим».
          </p>
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
