"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

/**
 * A fixed left-edge rail that reads like an editor's gutter: a hairline
 * track fills with the accent color as the page scrolls, and the active
 * section is named in mono type — the page's own "line number".
 * Progress and active section are both derived from real scroll state,
 * not decorative, so the numbering is honest.
 */
export default function ScrollIndex() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const sectionEls = SECTIONS.map((s) => document.getElementById(s.id));

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);

        let current = 0;
        sectionEls.forEach((el, i) => {
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
            current = i;
          }
        });
        setActiveIndex(current);

        ticking.current = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:flex lg:items-center lg:gap-4"
    >
      <div className="relative h-56 w-px bg-border-strong">
        <div
          className="absolute left-0 top-0 w-px bg-accent transition-[height] duration-150 ease-out"
          style={{ height: `${Math.min(progress * 100, 100)}%` }}
        />
      </div>
      <span className="font-mono text-xs tracking-tight text-text-muted">
        {String(activeIndex + 1).padStart(2, "0")} / {SECTIONS[activeIndex].label}
      </span>
    </div>
  );
}
