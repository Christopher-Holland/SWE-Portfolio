import { useEffect, useId, useState } from 'react';
import type { NavItem } from '../types/portfolio';
import type { Theme } from '../hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  items: NavItem[];
  brandName: string;
  theme: Theme;
  onToggleTheme: () => void;
}

/**
 * Sticky site navigation with an accessible mobile drawer.
 * Escape closes the menu; body scroll locks while open on small screens.
 */
export function Navbar({ items, brandName, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? 'border-app bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight sm:text-base"
          onClick={closeMenu}
        >
          <span className="text-accent">◆</span> {brandName}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="rounded-md px-3 py-2 text-sm text-muted transition hover:bg-muted hover:text-app"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-app bg-elevated lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`border-t border-app bg-elevated lg:hidden ${open ? 'block' : 'hidden'}`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
          {items.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="rounded-md px-3 py-3 text-base text-app hover:bg-muted"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
