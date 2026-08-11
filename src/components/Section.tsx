import { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-text-muted">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
