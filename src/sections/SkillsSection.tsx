import type { SkillCategory, SkillProficiency } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

const PROFICIENCY_ORDER: SkillProficiency[] = [
  'daily',
  'comfortable',
  'learning',
];

const PROFICIENCY_LABELS: Record<SkillProficiency, string> = {
  daily: 'Daily',
  comfortable: 'Comfortable',
  learning: 'Learning',
};

/**
 * Skills as named chips grouped by honest usage bands —
 * Daily / Comfortable / Learning — instead of fake percentage bars.
 */
export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="section-pad bg-section"
      aria-labelledby="skills-heading"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills and technologies"
          description="Grouped by how often I use them: daily in current work, comfortable building with, or actively learning."
        />
        <h2 id="skills-heading" className="sr-only">
          Skills and technologies
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-app bg-elevated p-6 shadow-panel"
            >
              <h3 className="font-display text-xl font-semibold">
                {category.title}
              </h3>
              <p className="mt-2 mb-5 text-sm text-muted">
                {category.description}
              </p>

              <div className="space-y-4">
                {PROFICIENCY_ORDER.map((band) => {
                  const skills = category.skills.filter(
                    (skill) => skill.proficiency === band,
                  );
                  if (skills.length === 0) return null;

                  return (
                    <div key={band}>
                      <p className="mb-2 font-mono text-xs tracking-wide text-muted uppercase">
                        {PROFICIENCY_LABELS[band]}
                      </p>
                      <ul
                        className="flex flex-wrap gap-2"
                        aria-label={`${category.title} — ${PROFICIENCY_LABELS[band]}`}
                      >
                        {skills.map((skill) => (
                          <li
                            key={skill.name}
                            className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-app"
                          >
                            {skill.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
