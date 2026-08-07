import type { AboutContent } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="About"
          title={content.heading}
          description="Who I am and what I do"
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <h2 id="about-heading" className="sr-only">
              {content.heading}
            </h2>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <aside className="rounded-2xl border border-app bg-elevated p-6 shadow-panel">
            <dl className="space-y-5">
              <div>
                <dt className="font-mono text-xs tracking-wide text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-1 text-app">{content.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wide text-muted uppercase">
                  Experience
                </dt>
                <dd className="mt-1 text-app">{content.yearsExperience}</dd>
              </div>
            </dl>

            <h3 className="mt-8 mb-3 font-display text-lg font-semibold">Highlights</h3>
            <ul className="space-y-3">
              {content.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
