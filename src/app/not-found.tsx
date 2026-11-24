'use client';

import { useCopy } from '@/components/CopyProvider';
import { BrokenLine } from '@/components/line/BrokenLine';
import { Arrow, TLink } from '@/components/line/kit';

export default function NotFound() {
  const { copy } = useCopy();
  const nf = copy.notFound;
  return (
    <section className="lost" aria-labelledby="lost-title">
      <div className="wrap">
        <h1 id="lost-title" className="t-h1">
          {nf.titlePre}
          {nf.titleEm}
        </h1>
        <p className="t-lead muted" style={{ marginTop: 20 }}>
          {nf.body}
        </p>
        <BrokenLine />
        <div className="lost__actions">
          <TLink href="/" className="btn btn--lg">
            {nf.ctaHome}
            <Arrow />
          </TLink>
          <TLink href="/portfolio" className="btn btn--lg btn--ghost">
            {nf.ctaPortfolio}
          </TLink>
        </div>
      </div>
    </section>
  );
}
