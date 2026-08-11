import Section from "./Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 · Experience" title="경력">
      <div className="flex flex-col divide-y divide-border border-t border-border">
        {experience.map((entry) => (
          <article
            key={`${entry.company}-${entry.period}`}
            className="grid gap-4 py-10 sm:grid-cols-[220px_1fr]"
          >
            <div>
              <h3 className="text-lg font-medium text-text">
                {entry.company}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{entry.role}</p>
              <p className="eyebrow mt-3">{entry.period}</p>
              {entry.location && (
                <p className="mt-1 text-xs text-text-faint">
                  {entry.location}
                </p>
              )}
            </div>

            <div>
              <p className="text-text-muted">{entry.summary}</p>
              <ul className="mt-4 space-y-2">
                {entry.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <span
                    key={tech}
                    className="eyebrow rounded-md border border-border px-2.5 py-1 normal-case tracking-normal"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
