import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-gradient flex min-h-[92vh] flex-col justify-center px-6 pt-14 sm:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="eyebrow mb-4">{profile.role}</p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-6xl">
          {profile.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-base text-text-muted sm:text-lg">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {profile.coreStack.map((tech) => (
            <span
              key={tech}
              className="eyebrow rounded-full border border-border px-3 py-1.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
