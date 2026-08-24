import { profile } from "@/data/profile";
import { IconDoc, IconGithub } from "./icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-gradient flex min-h-[92vh] flex-col justify-center px-6 pt-14 sm:px-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-6xl">
          {profile.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-base text-text-muted sm:text-lg">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {profile.links.notion && (
            <a
              href={profile.links.notion}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-accent hover:bg-accent-dim hover:text-accent"
            >
              <IconDoc className="h-3.5 w-3.5" />
              Notion
            </a>
          )}
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="eyebrow inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-accent hover:bg-accent-dim hover:text-accent"
            >
              <IconGithub className="h-3.5 w-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
