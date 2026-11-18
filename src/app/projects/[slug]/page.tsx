import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectActions from "@/components/ProjectActions";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-32 sm:px-10">
      <Link
        href="/#projects"
        className="eyebrow inline-flex items-center gap-2 text-text-muted transition-colors hover:text-accent"
      >
        ← Projects
      </Link>

      <header className="mt-8 border-b border-border pb-10">
        <p className="eyebrow">{project.team}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-text-muted">{project.tagline}</p>

        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <dt className="eyebrow">기간</dt>
            <dd className="mt-1 text-sm text-text">{project.period}</dd>
          </div>
          <div>
            <dt className="eyebrow">역할</dt>
            <dd className="mt-1 text-sm text-text">{project.role}</dd>
          </div>
        </dl>

        {project.award && (
          <div className="mt-6 rounded-lg border border-accent/50 bg-accent/10 px-4 py-3">
            <p className="eyebrow font-bold text-accent">
              {project.award.title} 수상
              {project.award.date && ` · ${project.award.date}`}
            </p>
            <p className="mt-1 text-sm text-text">{project.award.contest}</p>
          </div>
        )}

        <div className="mt-6">
          <ProjectActions links={project.links} images={project.images} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="eyebrow rounded-md border border-border px-2.5 py-1 normal-case tracking-normal"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-10">
        <h2 className="eyebrow mb-3">문제</h2>
        <p className="leading-relaxed text-text-muted">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="eyebrow mb-3">접근 방식</h2>
        <ul className="space-y-3">
          {project.approach.map((point, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="eyebrow mb-3">결과</h2>
        <p className="leading-relaxed text-text-muted">{project.result}</p>
      </section>
    </article>
  );
}
