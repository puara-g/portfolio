import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="프로젝트"
      description="카드를 클릭하면 상세 페이지로 이동합니다."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
