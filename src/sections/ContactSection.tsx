import type { ContactContent, SocialLink } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ButtonLink } from '../components/ButtonLink';
import { SocialLinks } from '../components/SocialLinks';

interface ContactSectionProps {
  content: ContactContent;
  social: SocialLink[];
}

/**
 * Contact section with mailto + resume CTAs.
 * The note about forms is intentional — wiring a backend is left to the owner.
 */
export function ContactSection({ content, social }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="section-pad bg-section"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-app bg-elevated shadow-panel">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-6 sm:p-10">
              <SectionHeading
                eyebrow="Contact"
                title={content.heading}
                description={content.description}
              />
              <h2 id="contact-heading" className="sr-only">
                {content.heading}
              </h2>

              <dl className="space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-mono text-xs tracking-wide text-muted uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${content.email}`}
                      className="text-accent underline-offset-4 hover:underline"
                    >
                      {content.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs tracking-wide text-muted uppercase">
                    Location
                  </dt>
                  <dd className="mt-1 text-app">{content.location}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`mailto:${content.email}`} variant="primary">
                  Email me
                </ButtonLink>
                <ButtonLink href={content.resumeUrl} variant="secondary">
                  Download resume
                </ButtonLink>
              </div>

              <p className="mt-6 max-w-md text-sm text-muted">{content.formNote}</p>
            </div>

            <aside className="border-t border-app bg-section p-6 sm:p-10 lg:border-t-0 lg:border-l">
              <h3 className="font-display text-lg font-semibold">Elsewhere</h3>
              <p className="mt-2 mb-6 text-sm text-muted">
                Find me on the following platforms:
              </p>
              <SocialLinks links={social} />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
