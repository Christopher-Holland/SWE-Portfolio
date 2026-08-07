import type { SkillCategory } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBar } from '../components/SkillBar';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

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
          description="Grouped by how they show up in day-to-day delivery"
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
              <h3 className="font-display text-xl font-semibold">{category.title}</h3>
              <p className="mt-2 mb-5 text-sm text-muted">{category.description}</p>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
