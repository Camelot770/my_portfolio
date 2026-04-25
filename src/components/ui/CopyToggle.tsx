'use client';

import { useCopy } from '@/components/CopyProvider';

export function CopyToggle() {
  const { mode, setMode } = useCopy();
  return (
    <div
      className="copy-toggle"
      role="group"
      aria-label="Тон голоса сайта"
    >
      <button
        type="button"
        className={`copy-toggle__btn${mode === 'pro' ? ' is-active' : ''}`}
        aria-pressed={mode === 'pro'}
        onClick={() => setMode('pro')}
      >
        PRO
      </button>
      <span aria-hidden="true" className="copy-toggle__sep">/</span>
      <button
        type="button"
        className={`copy-toggle__btn${mode === 'dev' ? ' is-active' : ''}`}
        aria-pressed={mode === 'dev'}
        onClick={() => setMode('dev')}
      >
        DEV
      </button>
    </div>
  );
}
