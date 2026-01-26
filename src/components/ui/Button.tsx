'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { hoverScale, tapScale } from '@/lib/animations';
import { clsx } from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  external?: boolean;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-foreground text-background hover:bg-dark-secondary',
    secondary: 'bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background',
    accent: 'bg-accent text-white hover:bg-accent-hover',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const buttonClasses = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <motion.div whileHover={hoverScale} whileTap={tapScale}>
        <Link href={href} className={buttonClasses} {...linkProps}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : hoverScale}
      whileTap={disabled ? undefined : tapScale}
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
