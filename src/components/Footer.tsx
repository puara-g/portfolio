import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p className="font-mono text-xs text-text-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="eyebrow hover:text-accent transition-colors"
            >
              GitHub
            </a>
          )}
          {profile.links.notion && (
            <a
              href={profile.links.notion}
              target="_blank"
              rel="noreferrer"
              className="eyebrow hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
