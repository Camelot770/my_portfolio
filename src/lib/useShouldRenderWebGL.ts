'use client';

import { useEffect, useState } from 'react';

export function useShouldRenderWebGL(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /^(slow-2g|2g|3g)$/.test(conn.effectiveType)) return;

    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return;

    try {
      const probe = document.createElement('canvas');
      const gl =
        probe.getContext('webgl2') ||
        probe.getContext('webgl') ||
        probe.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    setEnabled(true);
  }, []);

  return enabled;
}
