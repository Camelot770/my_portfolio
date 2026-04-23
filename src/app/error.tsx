'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          Ошибка 500
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
          Что-то пошло <em style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontStyle: 'italic' }}>не так</em>
        </h1>
        <p
          style={{
            marginTop: 24,
            color: 'var(--fg-dim)',
            fontSize: 18,
            lineHeight: 1.5,
          }}
        >
          Страница недоступна. Обновите её или вернитесь на главную.
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
            Повторить
          </button>
          <Link href="/" className="cta__btn alt" data-cur="link">
            <span className="d" />
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
