'use client';

import { useEffect } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { BrokenLine } from '@/components/line/BrokenLine';
import { Arrow, TLink } from '@/components/line/kit';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { copy } = useCopy();
  const e = copy.error;

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="lost" aria-labelledby="error-title">
      <div className="wrap">
        <h1 id="error-title" className="t-h1">
          {e.titlePre}
          {e.titleEm}
        </h1>
        <p className="t-lead muted" style={{ marginTop: 20 }}>
          {e.body}
        </p>
        <BrokenLine />
        <div className="lost__actions">
          <button type="button" className="btn btn--lg" onClick={() => reset()}>
            {e.ctaRetry}
            <Arrow />
          </button>
          <TLink href="/" className="btn btn--lg btn--ghost">
            {e.ctaHome}
          </TLink>
        </div>
      </div>
    </section>
  );
}
