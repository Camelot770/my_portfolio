'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { COPY, COPY_MODE_STORAGE_KEY, CopyMode, SiteCopy } from '@/lib/copy';

interface CopyContextValue {
  mode: CopyMode;
  setMode: (mode: CopyMode) => void;
  toggleMode: () => void;
  copy: SiteCopy;
}

const CopyContext = createContext<CopyContextValue | null>(null);

export function CopyProvider({ children }: { children: React.ReactNode }) {
  // Default to formal `pro` voice. We hydrate from localStorage on mount.
  const [mode, setModeState] = useState<CopyMode>('pro');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(COPY_MODE_STORAGE_KEY);
      if (stored === 'pro' || stored === 'dev') setModeState(stored);
    } catch {
      // ignore — localStorage may be blocked
    }
  }, []);

  const setMode = useCallback((next: CopyMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(COPY_MODE_STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prev) => {
      const next: CopyMode = prev === 'pro' ? 'dev' : 'pro';
      try {
        window.localStorage.setItem(COPY_MODE_STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo<CopyContextValue>(
    () => ({ mode, setMode, toggleMode, copy: COPY[mode] }),
    [mode, setMode, toggleMode]
  );

  return <CopyContext.Provider value={value}>{children}</CopyContext.Provider>;
}

export function useCopy(): CopyContextValue {
  const ctx = useContext(CopyContext);
  if (!ctx) {
    throw new Error('useCopy must be used inside <CopyProvider>');
  }
  return ctx;
}
