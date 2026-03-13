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

  return (
    <Link
      href={href}
      className="group inline-flex items-center rounded-full overflow-hidden"
    >
      {/* Left arrow — hidden by default, slides in on hover, points RIGHT (toward button) */}
      <div
        className={`
          relative w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0
          -ml-14 opacity-0 group-hover:ml-0 group-hover:opacity-100
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isLight
            ? 'bg-foreground text-background'
            : 'bg-dark text-foreground'
          }
        `}
      >
        <ArrowRight />
      </div>

      {/* Text */}
      <span
        className={`
          inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-wider
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isLight
            ? 'bg-foreground text-background group-hover:bg-dark-secondary group-hover:text-foreground'
            : 'bg-dark text-foreground group-hover:bg-foreground group-hover:text-background'
          }
        `}
      >
        {children}
      </span>

      {/* Right arrow — visible by default, points LEFT (toward button), slides out on hover */}
      <div
        className={`
          relative w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0
          mr-0 opacity-100 group-hover:-mr-14 group-hover:opacity-0
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isLight
            ? 'bg-foreground text-background'
            : 'bg-dark text-foreground'
          }
        `}
      >
        <ArrowLeft />
      </div>
    </Link>
  );
}
