import type { EducationItem } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface EducationSectionProps {
  items: EducationItem[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id="education" className="section-pad" aria-labelledby="education-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning"
          title="Education"
          description="Formal education and professional learning paths. Swap in your schools and dates."
        />
        <h2 id="education-heading" className="sr-only">
          Education
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-app bg-elevated p-6 shadow-panel"
            >
              <p className="font-mono text-xs text-muted">
                {item.startDate} — {item.endDate}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{item.degree}</h3>
              <p className="mt-1 text-accent">
                {item.school}
                <span className="mx-2 text-muted">·</span>
                <span className="text-muted">{item.location}</span>
              </p>
              <p className="mt-4 text-sm text-muted">{item.details}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-app-soft">
                    <span className="text-accent" aria-hidden="true">
                      ▹
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
