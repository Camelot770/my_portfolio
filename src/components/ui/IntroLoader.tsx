'use client';

import { useEffect, useRef, useState } from 'react';

export function IntroLoader({ onDone }: { onDone?: () => void }) {
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLElement>(null);

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
      n += Math.max(1, Math.round((100 - n) * 0.06));
      if (n > 100) n = 100;
      if (countRef.current) {
        countRef.current.textContent = String(n).padStart(3, '0');
      }
      if (barRef.current) {
        barRef.current.style.background = `linear-gradient(to right, var(--accent) ${n}%, #1a1a1c ${n}%)`;
      }
      if (n < 100) {
        timer = setTimeout(step, 30 + Math.random() * 40);
      } else {
        timer = setTimeout(() => {
          setDone(true);
          sessionStorage.setItem('sl-intro-done', '1');
          setTimeout(() => {
            setShow(false);
            onDone?.();
          }, 900);
        }, 400);
      }
    };

    const startT = setTimeout(step, 300);

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
          МОСКВА · САНКТ-ПЕТЕРБУРГ
          <br />
          ШИРОТА 55.75 · ДОЛГОТА 37.61
        </div>
        <div className="intro__count" ref={countRef}>
          000
        </div>
        <div className="intro__bar" ref={barRef} />
        <div className="intro__labels">
          <span>
            <b>КАЛИБРОВКА СИГНАЛА</b>
          </span>
          <span>STACKLAB · ИЗД. 07 · 2026</span>
          <span>
            <b>ЗАГРУЗКА / ИНИЦИАЛИЗАЦИЯ</b>
          </span>
        </div>
      </div>
    </div>
  );
}
