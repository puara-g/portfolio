import Section from "./Section";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 · Skills" title="기술 스택">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
        {skills.map((category) => (
          <div key={category.title} className="bg-bg p-6">
            <h3 className="text-base font-medium text-text">
              {category.title}
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              {category.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="eyebrow rounded-md border border-border px-2.5 py-1 normal-case tracking-normal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
