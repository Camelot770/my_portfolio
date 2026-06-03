'use client';

import { useCopy } from '@/components/CopyProvider';

export function CopyToggle() {
  const { mode, setMode } = useCopy();
  return (
    <div
      className="copy-toggle"
      role="group"
      aria-label="Language / Язык"
    >
      <button
        type="button"
        className={`copy-toggle__btn${mode === 'ru' ? ' is-active' : ''}`}
        aria-pressed={mode === 'ru'}
        aria-label="Русский"
        lang="ru"
        onClick={() => setMode('ru')}
      >
        RU
      </button>
      <span aria-hidden="true" className="copy-toggle__sep">/</span>
      <button
        type="button"
        className={`copy-toggle__btn${mode === 'en' ? ' is-active' : ''}`}
        aria-pressed={mode === 'en'}
        aria-label="English"
        lang="en"
        onClick={() => setMode('en')}
      >
        EN
      </button>
    </div>
  );
}
