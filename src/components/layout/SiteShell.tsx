'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { CopyProvider, useCopy } from '@/components/CopyProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Grain } from '@/components/ui/Grain';
import { IntroLoader } from '@/components/ui/IntroLoader';
import { Nav } from './Nav';
import { SiteFooter } from './SiteFooter';

function SkipLink() {
  const { copy } = useCopy();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-md"
    >
      {copy.nav.skipLink}
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  const showIntro = pathname === '/';

  return (
    <CopyProvider>
      <SkipLink />
      {showIntro && <IntroLoader />}
      <Grain />
      <CustomCursor />
      <Nav />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </CopyProvider>
  );
}
