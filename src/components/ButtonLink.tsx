import type { ReactNode } from 'react';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
}

/**
 * Anchor styled as a button.
 * Prefer this over a <button> when navigation is the actual action —
 * keeps semantics correct for screen readers and keyboard users.
 */
export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonLinkProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3';

  const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
    primary:
      'bg-accent text-ink-950 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-[var(--accent)]',
    secondary:
      'border border-app bg-elevated text-app hover:-translate-y-0.5 hover:border-[var(--accent)] focus-visible:outline-[var(--accent)]',
    ghost:
      'text-muted underline-offset-4 hover:text-app hover:underline focus-visible:outline-[var(--accent)]',
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : undefined)}
    >
      {children}
    </a>
  );
}
