import type { SocialLink } from '../types/portfolio';

interface SocialLinksProps {
  links: SocialLink[];
  compact?: boolean;
}

/** Inline SVG icons keep the dependency graph free of icon packages. */
function SocialIcon({ icon }: { icon: SocialLink['icon'] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (icon) {
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 2.3 15 3.8a11.4 11.4 0 0 0-6 0C6.5 2.3 5.3 2.8 5.3 2.8a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...common}>
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case 'email':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Renders social / profile links with accessible names.
 * External destinations open in a new tab; mailto stays in-place.
 */
export function SocialLinks({ links, compact = false }: SocialLinksProps) {
  return (
    <ul
      className={`flex flex-wrap items-center ${compact ? 'gap-2' : 'gap-3'}`}
      aria-label="Social and profile links"
    >
      {links.map((link) => {
        const isMail = link.href.startsWith('mailto:');
        return (
          <li key={link.label}>
            <a
              href={link.href}
              className="inline-flex items-center gap-2 rounded-md border border-app bg-elevated px-3 py-2 text-sm text-muted transition hover:border-[var(--accent)] hover:text-app"
              {...(!isMail
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : undefined)}
              aria-label={link.label}
            >
              <SocialIcon icon={link.icon} />
              {!compact ? <span>{link.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
