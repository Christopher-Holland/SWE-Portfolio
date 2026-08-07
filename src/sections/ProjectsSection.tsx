import type { Project } from '../types/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-pad" aria-labelledby="projects-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A collection of projects that I've worked on and are currently working on."
        />
        <h2 id="projects-heading" className="sr-only">
          Featured projects
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
