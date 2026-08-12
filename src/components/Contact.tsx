import Section from "./Section";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="06 · Contact"
      title="연락하기"
      description="협업 제안이나 궁금한 점이 있다면 편하게 연락 주세요."
    >
      <div className="flex flex-col items-start gap-6 rounded-lg border border-border bg-bg-elevated p-8 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${profile.email}`}
          className="text-2xl font-medium text-text transition-colors hover:text-accent sm:text-3xl"
        >
          {profile.email}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90"
        >
          이메일 보내기
        </a>
      </div>
    </Section>
  );
}
