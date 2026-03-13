'use client';

import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

interface UseCountUpOptions {
  target: number;
  duration?: number;
  inView: boolean;
}

export function useCountUp({ target, duration = 2, inView }: UseCountUpOptions): string {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const rounded = useTransform(spring, (latest) => Math.round(latest).toString());
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) {
      motionValue.set(target);
    }
  }, [inView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return display;
}
