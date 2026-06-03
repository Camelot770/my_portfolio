'use client';

import { useEffect, useRef, useState } from 'react';
import { useCopy } from '@/components/CopyProvider';

export function IntroLoader({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLElement>(null);
  const { copy } = useCopy();
  const i = copy.intro;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('sl-intro-done') === '1') {
      setShow(false);
      onDone?.();
      return;
    }

    let n = 0;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      n += Math.max(2, Math.round((100 - n) * 0.18));
      if (n > 100) n = 100;
      if (countRef.current) {
        countRef.current.textContent = String(n).padStart(3, '0');
      }
      if (barRef.current) {
        barRef.current.style.background = `linear-gradient(to right, var(--accent) ${n}%, #1a1a1c ${n}%)`;
      }
      if (n < 100) {
        timer = setTimeout(step, 14 + Math.random() * 18);
      } else {
        timer = setTimeout(() => {
          setDone(true);
          sessionStorage.setItem('sl-intro-done', '1');
          setTimeout(() => {
            setShow(false);
            onDone?.();
          }, 380);
        }, 180);
      }
    };

    const startT = setTimeout(step, 120);

    const clock = clockRef.current;
    let clockInterval: ReturnType<typeof setInterval> | null = null;
    if (clock) {
      const updateClock = () => {
        const d = new Date();
        const hh = String(d.getUTCHours()).padStart(2, '0');
        const mm = String(d.getUTCMinutes()).padStart(2, '0');
        const ss = String(d.getUTCSeconds()).padStart(2, '0');
        clock.textContent = `${hh}:${mm}:${ss} UTC`;
      };
      updateClock();
      clockInterval = setInterval(updateClock, 1000);
    }

    return () => {
      clearTimeout(startT);
      clearTimeout(timer);
      if (clockInterval) clearInterval(clockInterval);
    };
  }, [onDone]);

  if (!show) return null;

  return (
    <div className={`intro${done ? ' done' : ''}`}>
      <div className="intro__inner">
        <div className="intro__logo">
          stacklab<em>/</em>engineering<span className="r">RU</span>
        </div>
        <div className="intro__clock">
          <b ref={clockRef}>00:00:00 UTC</b>
          {i.geo1}
          <br />
          {i.geo2Lat} · {i.geo2Lon}
        </div>
        <div className="intro__count" ref={countRef}>
          000
        </div>
        <div className="intro__bar" ref={barRef} />
        <div className="intro__labels">
          <span>
            <b>{i.label1}</b>
          </span>
          <span>{i.label2}</span>
          <span>
            <b>{i.label3}</b>
          </span>
        </div>
      </div>
    </div>
  );
}
