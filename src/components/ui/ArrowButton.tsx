'use client';

import Link from 'next/link';

interface ArrowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

function ArrowLeft() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export function ArrowButton({
  href,
  children,
  variant = 'light',
}: ArrowButtonProps) {
  const isLight = variant === 'light';

  // Colors
  const btnBg = isLight ? 'bg-foreground' : 'bg-dark';
  const btnText = isLight ? 'text-background' : 'text-foreground';
  const btnHoverBg = isLight ? 'group-hover:bg-dark-secondary' : 'group-hover:bg-foreground';
  const btnHoverText = isLight ? 'group-hover:text-foreground' : 'group-hover:text-background';
  const circleBg = isLight ? 'bg-foreground text-background' : 'bg-dark text-foreground';

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 relative"
    >
      {/* Left arrow circle — hidden, appears on hover */}
      <div
        className={`
          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
          ${circleBg}
          absolute -left-14 opacity-0
          group-hover:left-0 group-hover:opacity-100
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        `}
      >
        <ArrowRight />
      </div>

      {/* Text pill */}
      <span
        className={`
          inline-flex items-center justify-center px-8 py-4 rounded-full
          text-sm font-medium uppercase tracking-wider
          ${btnBg} ${btnText} ${btnHoverBg} ${btnHoverText}
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:ml-14
        `}
      >
        {children}
      </span>

      {/* Right arrow circle — visible by default, disappears on hover */}
      <div
        className={`
          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
          ${circleBg}
          opacity-100 translate-x-0
          group-hover:translate-x-8 group-hover:opacity-0
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        `}
      >
        <ArrowLeft />
      </div>
    </Link>
  );
}
