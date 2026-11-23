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
          {project.award && (
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-yellow-300 px-3 py-1 text-sm font-bold text-yellow-950">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
                <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
              </svg>
              {project.award.title} 수상
            </p>
          )}
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
