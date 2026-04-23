'use client';

import { useEffect, useRef } from 'react';

export function useMagnet(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.25;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);
}

export function MagneticButton({
  as: Tag = 'a',
  children,
  className,
  ...rest
}: {
  as?: 'a' | 'button';
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  useMagnet(ref);
  const Comp = Tag as unknown as React.ElementType;
  return (
    <Comp ref={ref} className={className} data-magnet {...rest}>
      {children}
    </Comp>
  );
}
