import type { Project } from '../types/portfolio';
import { ButtonLink } from './ButtonLink';

interface ProjectCardProps {
  project: Project;
}

/**
 * Featured project card.
 * Image is always present via shipped SVG placeholders so builds never depend
 * on remote assets or unfinished screenshot files.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-app bg-elevated shadow-panel transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
      <div className="relative overflow-hidden border-b border-app bg-muted">
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {project.featured ? (
          <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wide text-ink-950 uppercase">
            Featured
          </span>
        ) : null}

        {project.inProgress ? (
          <span className="absolute top-3 left-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wide text-ink-950 uppercase">
            In Progress
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted sm:text-base">
            {project.shortDescription}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-app-soft">{project.longSummary}</p>

        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.liveUrl ? (
            <ButtonLink href={project.liveUrl} variant="primary" external>
              Live demo
            </ButtonLink>
          ) : null}
          <ButtonLink
            href={project.githubUrl}
            variant={project.liveUrl ? 'secondary' : 'primary'}
            external
          >
            Repository
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
