'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

const AboutScene = dynamic(
  () => import('@/components/scenes/WebGLScenes').then((m) => m.AboutScene),
  { ssr: false }
);

const TEXT_HTML = `Мы не агентство. Не интегратор. Не конвейер лендингов. StackLab — инженерная студия, в которой вы общаетесь <em>напрямую</em> с теми, кто принимает архитектурные решения и пишет продакшн-код. Без цепочки менеджеров, без переводов. Только инженеры, код и <em>запуски</em>.`;

const CELLS = [
  {
    k: 'К · 01',
    v: (
      <>
        8 <em>запусков</em>
      </>
    ),
    p: 'Работающие продукты в MAX, Telegram, App Store и вебе — от госзаказчиков до малого бизнеса.',
  },
  {
    k: 'К · 02',
    v: (
      <>
        0 <em>прокси</em>
      </>
    ),
    p: 'Вы общаетесь с теми, кто пишет код и принимает решения. Без цепочки менеджеров.',
  },
  {
    k: 'К · 03',
    v: (
      <>
        100% <em>довольных</em>
      </>
    ),
    p: 'Не закрываем проект, пока клиент не доволен. Правки и корректировки по ходу — норма.',
  },
  {
    k: 'К · 04',
    v: (
      <>
        4–12 <em>недель</em>
      </>
    ),
    p: 'Средний цикл от первого контакта до запуска продукта — в зависимости от объёма.',
  },
];

export function AboutV2() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const container = textRef.current;
    if (!container) return;
    const words = container.querySelectorAll<HTMLSpanElement>('.w');
    if (!words.length) return;

    const onScroll = () => {
      const r = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - r.top / (vh * 0.5)));
      const cut = Math.floor(progress * words.length);
      words.forEach((w, i) => {
        if (i > cut) w.classList.add('dim');
        else w.classList.remove('dim');
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const html = TEXT_HTML.split(/(\s+)/)
    .map((w) => (/^\s+$/.test(w) ? w : `<span class="w">${w}</span>`))
    .join('');

  return (
    <section className="about" id="about">
      <div className="about__canvas">
        <AboutScene />
      </div>
      <div className="about__content">
        <div className="sec__tag">01 · Манифест</div>
        <p
          className="about__text"
          ref={textRef}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="about__grid">
          {CELLS.map((c, i) => (
            <div className="about__cell" key={i}>
              <div className="k">{c.k}</div>
              <div className="v">{c.v}</div>
              <div className="p">{c.p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
