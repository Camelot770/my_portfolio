'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useMagnet } from '@/components/ui/MagneticButton';

const CtaScene = dynamic(
  () => import('@/components/scenes/WebGLScenes').then((m) => m.CtaScene),
  { ssr: false }
);

export function CtaV2() {
  const primaryRef = useRef<HTMLAnchorElement>(null);
  const altRef = useRef<HTMLAnchorElement>(null);
  useMagnet(primaryRef as React.RefObject<HTMLElement>);
  useMagnet(altRef as React.RefObject<HTMLElement>);

  return (
    <section className="cta" id="contact">
      <div className="cta__canvas">
        <CtaScene />
      </div>
      <div className="cta__inner">
        <div
          className="sec__tag"
          style={{ justifyContent: 'center', display: 'inline-flex' }}
        >
          07 · Контакт
        </div>
        <h2 className="cta__big">
          Передайте <em>сигнал</em>.
        </h2>
        <p className="cta__p">
          Опишите задачу в одном абзаце — вернёмся в течение 30 минут в
          рабочие часы MSK с ответом: берёмся, сколько, когда.
        </p>
        <div className="cta__btns">
          <a
            ref={primaryRef}
            href="https://t.me/Naum0"
            target="_blank"
            rel="noopener noreferrer"
            className="cta__btn"
            data-cur="link"
          >
            <span className="d" />
            Написать в Telegram →
          </a>
          <a
            ref={altRef}
            href="mailto:stacklab@mail.ru"
            className="cta__btn alt"
            data-cur="link"
          >
            <span className="d" />
            stacklab@mail.ru
          </a>
        </div>
      </div>
    </section>
  );
}
