import Section from "./Section";
import { profile } from "@/data/profile";

// TODO: 본인의 강점을 드러내는 3~4개 항목으로 교체하세요.
const HIGHLIGHTS = [
  {
    title: "핵심 역량 1",
    description: "이 역량을 어떤 경험을 통해 갖췄는지 설명하세요.",
  },
  {
    title: "핵심 역량 2",
    description: "구체적인 프로젝트나 수치를 곁들이면 설득력이 높아집니다.",
  },
  {
    title: "핵심 역량 3",
    description: "협업, 문제 해결 등 소프트 스킬도 좋습니다.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="소개"
      description={profile.description}
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {HIGHLIGHTS.map((item, i) => (
          <div
            key={item.title}
            className="rounded-lg border border-border bg-bg-elevated p-6"
          >
            <span className="font-mono text-xs text-text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-medium text-text">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
