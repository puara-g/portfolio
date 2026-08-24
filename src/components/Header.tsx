import Link from "next/link";
import { profile } from "@/data/profile";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href="#top"
          className="font-mono text-sm tracking-tight text-text hover:text-accent transition-colors"
        >
          {profile.name}
        </Link>

        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow hover:text-text transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent/90"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
