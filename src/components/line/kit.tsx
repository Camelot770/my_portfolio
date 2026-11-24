'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from 'react';

/* ---------- Facts shared across the site ---------- */

export const CONTACTS = {
  telegram: 'https://t.me/Naum0',
  max: 'https://max.ru/u/f9LHodD0cOLGKi7i1KndiYLJAU1rf7OCpsTt2VCnnAAN7qe3VUEjR99azyg',
  mail: 'mailto:stacklab@mail.ru',
} as const;

export type LineKey = 'max' | 'ai' | 'web' | 'ios';

/** Every platform rides one of the four service lines; MAX and Telegram share red. */
export function lineFor(category: string): string {
  if (category === 'ai') return 'var(--violet)';
  if (category === 'web') return 'var(--blue)';
  if (category === 'ios') return 'var(--green)';
  return 'var(--red)';
}

export const lineStyle = (color: string) => ({ '--line': color }) as CSSProperties;

/** Contact hours promised on the site: 09:00–22:00 Moscow time (UTC+3, no DST). */
function inMoscowHours(now = new Date()) {
  const h = (now.getUTCHours() + 3) % 24;
  return h >= 9 && h < 22;
}

/**
 * Whether the team is inside its promised contact hours right now.
 * `null` until mounted: a prerendered page cannot know the visitor's moment.
 */
export function useContactHours(): boolean | null {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    const tick = () => setOpen(inMoscowHours());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  return open;
}

/* ---------- Icons: one stroke, one weight ---------- */

export function Arrow({ className = 'ico' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      ) : (
        <path d="M4 9h16M4 15h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      )}
    </svg>
  );
}

/* ---------- Station heading: every section hangs off the route ---------- */

export function StationHead({
  title,
  lead,
  id,
  level = 2,
  children,
}: {
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  level?: 1 | 2;
  children?: ReactNode;
}) {
  const Tag = level === 1 ? 'h1' : 'h2';
  return (
    <div className="st-head">
      <Tag id={id} className={`st-title ${level === 1 ? 't-h1' : 't-h2'}`}>
        <span className="st-ring" data-station aria-hidden="true" />
        {title}
      </Tag>
      {lead ? <p className="t-lead muted">{lead}</p> : null}
      {children}
    </div>
  );
}

/* ---------- View transitions between pages ---------- */

type Nav = (href: string) => void;
const NavContext = createContext<Nav | null>(null);

type DocWithVT = Document & {
  startViewTransition?: (cb: () => Promise<void>) => unknown;
};

export function ViewTransitions({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pending = useRef<(() => void) | null>(null);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!window.location.hash) {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      root.style.scrollBehavior = prev;
    }
    const done = pending.current;
    pending.current = null;
    done?.();
  }, [pathname]);

  const nav = useCallback<Nav>(
    (href) => {
      const doc = document as DocWithVT;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!doc.startViewTransition || reduce) {
        router.push(href);
        return;
      }
      doc.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            let settled = false;
            const finish = () => {
              if (settled) return;
              settled = true;
              resolve();
            };
            pending.current = finish;
            router.push(href);
            window.setTimeout(finish, 1600);
          })
      );
    },
    [router]
  );

  return <NavContext.Provider value={nav}>{children}</NavContext.Provider>;
}

export function useNav(): Nav | null {
  return useContext(NavContext);
}

/** Returns true when a click should be handed to the view-transition router. */
export function shouldIntercept(e: MouseEvent<Element>, href: string): string | null {
  if (e.defaultPrevented) return null;
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname) return null;
  return url.pathname + url.search + url.hash;
}

export function TLink({ href, onClick, ...rest }: ComponentProps<typeof Link> & { href: string }) {
  const nav = useNav();
  return (
    <Link
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (!nav) return;
        const target = shouldIntercept(e, href);
        if (!target) return;
        e.preventDefault();
        nav(target);
      }}
    />
  );
}
