import type { HeroContent } from '../types/portfolio';
import { ButtonLink } from '../components/ButtonLink';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionClass = prefersReducedMotion ? '' : 'reveal';

  return (
    <section
      id="top"
      className="relative overflow-hidden section-pad hero-glow surface-grid"
      aria-labelledby="hero-heading"
    >
      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p
            className={`mb-4 font-mono text-xs tracking-[0.18em] text-accent uppercase ${motionClass}`}
          >
            {content.greeting}
          </p>
          <h1
            id="hero-heading"
            className={`font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl ${motionClass} ${prefersReducedMotion ? '' : 'reveal-delay-1'}`}
          >
            {content.name}
          </h1>
          <p
            className={`mt-3 text-lg font-medium text-accent sm:text-xl ${motionClass} ${prefersReducedMotion ? '' : 'reveal-delay-2'}`}
          >
            {content.title}
          </p>
          <p
            className={`mt-5 max-w-xl text-base text-muted sm:text-lg ${motionClass} ${prefersReducedMotion ? '' : 'reveal-delay-3'}`}
          >
            {content.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </ButtonLink>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-app bg-elevated px-3 py-1.5 text-sm text-muted">
            <span
              className="inline-block h-2 w-2 rounded-full bg-accent"
              aria-hidden="true"
            />
            {content.availability}
          </p>
        </div>

        {/* Abstract visual plane — brand-first atmosphere without stock photography */}
        <aside
          className="relative hidden min-h-[320px] overflow-hidden rounded-3xl border border-app bg-elevated p-6 shadow-panel lg:block"
          aria-hidden="true"
        >
          <div className="absolute inset-0 surface-grid opacity-70" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="space-y-3">
              <div className="h-3 w-24 rounded-full bg-accent-faint" />
              <div className="h-3 w-40 rounded-full bg-muted" />
              <div className="h-3 w-32 rounded-full bg-muted" />
            </div>
            <div className="rounded-2xl border border-app bg-[var(--bg)] p-4 font-mono text-xs leading-relaxed text-muted">
              <p className="text-accent">// delivery checklist</p>
              <p>strict types · accessible UI</p>
              <p>measurable outcomes · clean PRs</p>
              <p className="mt-3 text-app">status: ready to collaborate</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['API', 'UI', 'CI'].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-app bg-muted px-3 py-4 text-center font-mono text-xs tracking-wide"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
