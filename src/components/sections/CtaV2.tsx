'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { useCopy } from '@/components/CopyProvider';
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
  const { copy } = useCopy();

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
          {copy.cta.tag}
        </div>
        <h2 className="cta__big">
          {copy.cta.headPlain} <em>{copy.cta.headEm}</em>.
        </h2>
        <p className="cta__p">{copy.cta.p}</p>
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
            {copy.cta.primary}
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
