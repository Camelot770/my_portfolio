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
    // Log to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-32">
      <div className="text-center max-w-lg">
        <h1 className="text-display-2 font-heading font-bold mb-4">
          Что-то пошло не так
        </h1>
        <p className="text-lg text-muted mb-8">
          Страница недоступна. Обновите её или вернитесь на главную.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn btn-primary"
            data-no-cursor-fill
          >
            Попробовать снова
          </button>
          <Link href="/" className="btn btn-secondary" data-no-cursor-fill>
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
