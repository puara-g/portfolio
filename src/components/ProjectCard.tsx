import Link from "next/link";
import { ProjectSummary } from "@/data/types";
import ProjectActions from "./ProjectActions";

export default function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-bg-elevated p-6 transition-colors hover:border-accent/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="text-lg font-medium text-text hover:text-accent transition-colors"
          >
            {project.name}
          </Link>
          <p className="eyebrow mt-1 normal-case tracking-normal">
            {project.team}
          </p>
        </div>
        <span className="eyebrow shrink-0 pt-1 text-text-faint">
          {project.period}
        </span>
      </div>

      <p className="text-sm text-text-muted">{project.tagline}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="eyebrow rounded-md border border-border px-2 py-1 normal-case tracking-normal"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <ProjectActions links={project.links} images={project.images} />
        <Link
          href={`/projects/${project.slug}`}
          className="eyebrow shrink-0 font-bold text-accent transition-colors hover:text-accent/80"
        >
          상세 보기 →
        </Link>
      </div>
    </div>
  );
}
