import type { ExperienceItem } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="section-pad bg-section"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Career"
          title="Work experience"
          description="Roles, ownership, and outcomes"
        />
        <h2 id="experience-heading" className="sr-only">
          Work experience
        </h2>

        <ol className="relative space-y-6 border-l border-app pl-6 sm:pl-8">
          {items.map((item) => (
            <li key={item.id} className="relative">
              <span
                className="absolute top-2 -left-[1.9rem] h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-accent sm:-left-[2.4rem]"
                aria-hidden="true"
              />
              <article className="rounded-2xl border border-app bg-elevated p-5 shadow-panel sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-accent">{item.company}</p>
                  </div>
                  <p className="font-mono text-xs text-muted">
                    {item.startDate} — {item.endDate}
                    <span className="divider-soft mx-2">·</span>
                    {item.location}
                  </p>
                </div>

                <p className="mt-4 text-sm text-muted sm:text-base">{item.summary}</p>

                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm text-app-soft">
                      <span className="text-accent" aria-hidden="true">
                        ▹
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`${item.role} technologies`}
                >
                  {item.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
