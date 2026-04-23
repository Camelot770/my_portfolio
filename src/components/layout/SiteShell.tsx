'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Grain } from '@/components/ui/Grain';
import { IntroLoader } from '@/components/ui/IntroLoader';
import { Nav } from './Nav';
import { SiteFooter } from './SiteFooter';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  const showIntro = pathname === '/';

  return (
    <>
      {showIntro && <IntroLoader />}
      <Grain />
      <CustomCursor />
      <Nav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </>
  );
}
