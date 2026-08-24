import Section from "./Section";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <Section id="certificates" eyebrow="04 · Certificates" title="자격증">
      <ul className="flex flex-col divide-y divide-border border-t border-border">
        {certificates.map((cert) => (
          <li
            key={cert.name}
            className="flex items-center justify-between py-5"
          >
            <span className="text-base font-medium text-text">
              {cert.name}
            </span>
            <span className="eyebrow">{cert.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
