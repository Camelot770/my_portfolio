'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMagnet } from '@/components/ui/MagneticButton';

export function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useMagnet(ctaRef as React.RefObject<HTMLElement>);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 200 && y > lastY) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const link = (anchor: string, label: string) =>
    isHome ? (
      <a href={`#${anchor}`}>{label}</a>
    ) : (
      <Link href={`/#${anchor}`}>{label}</Link>
    );

  return (
    <nav className={`nav${hidden ? ' hidden' : ''}`}>
      <Link href="/" className="nav__logo">
        stacklab<em>/</em>
        <span className="r">RU·26</span>
      </Link>
      <div className="nav__menu">
        {link('about', 'Студия')}
        {link('works', 'Работы')}
        {link('stack', 'Стек')}
        {link('process', 'Процесс')}
        {link('contact', 'Контакт')}
      </div>
      <a
        ref={ctaRef}
        href={isHome ? '#contact' : '/#contact'}
        className="nav__cta"
        data-cur="link"
      >
        <span className="dot" />
        Заказать проект
      </a>
    </nav>
  );
}
