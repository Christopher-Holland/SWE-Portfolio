import type { SocialLink } from '../types/portfolio';
import { SocialLinks } from '../components/SocialLinks';

interface FooterProps {
  copyrightName: string;
  social: SocialLink[];
}

export function Footer({ copyrightName, social }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-app section-pad !py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold">
            <span className="text-accent">◆</span> {copyrightName}
          </p>
          <p className="mt-2 text-sm text-muted">
            © {year} {copyrightName}. Built with React, TypeScript, and Vite.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <SocialLinks links={social} compact />
          <a href="#top" className="text-sm text-muted hover:text-app">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
