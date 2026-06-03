'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCopy } from '@/components/CopyProvider';

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
    <div
      style={{
        minHeight: '80vh',
        display: 'grid',
        placeItems: 'center',
        padding: '180px 38px 80px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 640 }}>
        <div className="sec__tag" style={{ justifyContent: 'center' }}>
          {e.tag}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 7vw, 120px)',
            fontWeight: 300,
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
          }}
        >
          {e.titlePre}
          <em style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontStyle: 'italic' }}>
            {e.titleEm}
          </em>
        </h1>
        <p
          style={{
            marginTop: 24,
            color: 'var(--fg-dim)',
            fontSize: 18,
            lineHeight: 1.5,
          }}
        >
          {e.body}
        </p>
        <div
          style={{
            marginTop: 40,
            display: 'inline-flex',
            gap: 14,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <button onClick={reset} className="cta__btn" data-cur="link">
            <span className="d" />
            {e.ctaRetry}
          </button>
          <Link href="/" className="cta__btn alt" data-cur="link">
            <span className="d" />
            {e.ctaHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
