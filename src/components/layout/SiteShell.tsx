'use client';

import { CopyProvider, useCopy } from '@/components/CopyProvider';
import { RouteRail } from '@/components/line/RouteRail';
import { ViewTransitions } from '@/components/line/kit';
import { Nav } from './Nav';
import { SiteFooter } from './SiteFooter';

function SkipLink() {
  const { copy } = useCopy();
  return (
    <a href="#main-content" className="skip">
      {copy.nav.skipLink}
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CopyProvider>
      <ViewTransitions>
        <SkipLink />
        <Nav />
        <main id="main-content" tabIndex={-1}>
          <RouteRail />
          {children}
        </main>
        <SiteFooter />
      </ViewTransitions>
    </CopyProvider>
  );
}
