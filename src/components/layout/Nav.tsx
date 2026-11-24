'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { Arrow, MenuIcon, TLink } from '@/components/line/kit';

function LangSwitch() {
  const { mode, setMode, copy } = useCopy();
  return (
    <div className="lang" role="group" aria-label={copy.home.nav.lang}>
      <button type="button" lang="ru" aria-pressed={mode === 'ru'} onClick={() => setMode('ru')}>
        RU
      </button>
      <button type="button" lang="en" aria-pressed={mode === 'en'} onClick={() => setMode('en')}>
        EN
      </button>
    </div>
  );
}

export function Nav() {
  const { copy } = useCopy();
  const t = copy.home.nav;
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const items = [
    { href: '/portfolio', label: t.projects },
    { href: '/services', label: t.services },
    { href: '/about', label: t.about },
    { href: '/contact', label: t.contact },
  ];
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const ctaHref = pathname === '/' ? '#contact' : '/contact';

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        setSolid(y > 8);
        if (y > 260 && y > lastY + 4) setHidden(true);
        else if (y < lastY - 4 || y <= 260) setHidden(false);
        lastY = y;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const sheet = sheetRef.current as (HTMLDivElement & { inert?: boolean }) | null;
    if (sheet) sheet.inert = !open;
    const root = document.documentElement;
    if (!open) {
      root.style.overflow = '';
      return;
    }
    root.style.overflow = 'hidden';
    const first = sheet?.querySelector<HTMLElement>('a, button');
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      root.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`hdr${solid ? ' is-solid' : ''}${hidden && !open ? ' is-hidden' : ''}`}>
        <div className="wrap hdr__in">
          <TLink href="/" className="hdr__logo" aria-label="StackLab">
            <Image src="/images/logo-trim.png" alt="StackLab" width={344} height={215} priority />
          </TLink>

          <div className="hdr__right">
            <nav aria-label={t.home}>
              <ul className="strip">
                {items.map((item) => (
                  <li key={item.href}>
                    <TLink href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                      <span className="strip__ring" aria-hidden="true" />
                      {item.label}
                    </TLink>
                  </li>
                ))}
              </ul>
            </nav>
            <LangSwitch />
            <TLink href={ctaHref} className="btn btn--sm hdr__cta">
              {t.cta}
            </TLink>
            <button
              ref={menuBtnRef}
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="site-sheet"
              aria-label={open ? t.close : t.menu}
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <div id="site-sheet" ref={sheetRef} className={`sheet${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="sheet__top">
          <TLink href="/" className="hdr__logo" aria-label="StackLab" onClick={() => setOpen(false)}>
            <Image src="/images/logo-trim.png" alt="StackLab" width={344} height={215} style={{ height: 36, width: 'auto' }} />
          </TLink>
          <button
            type="button"
            className="menu-btn"
            style={{ display: 'inline-flex' }}
            aria-label={t.close}
            onClick={() => {
              setOpen(false);
              menuBtnRef.current?.focus();
            }}
          >
            <MenuIcon open />
          </button>
        </div>
        <nav aria-label={t.home}>
          <ul className="sheet__list">
            <li className={pathname === '/' ? 'is-current' : undefined}>
              <TLink href="/" onClick={() => setOpen(false)}>
                {t.home}
              </TLink>
            </li>
            {items.map((item) => (
              <li key={item.href} className={isCurrent(item.href) ? 'is-current' : undefined}>
                <TLink href={item.href} onClick={() => setOpen(false)} aria-current={isCurrent(item.href) ? 'page' : undefined}>
                  {item.label}
                </TLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sheet__foot">
          <LangSwitch />
          <TLink href={ctaHref} className="btn btn--lg" onClick={() => setOpen(false)}>
            {t.cta}
            <Arrow />
          </TLink>
        </div>
      </div>
    </>
  );
}
