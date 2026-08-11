"use client";

import { useState } from "react";
import { ProjectLinks } from "@/data/types";
import { IconDoc, IconExternal, IconGithub, IconImage, IconPlay } from "./icons";
import ImageGalleryModal from "./ImageGalleryModal";

const pillClass =
  "eyebrow inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 normal-case tracking-normal text-text-muted transition-colors hover:border-accent hover:text-accent";

export default function ProjectActions({
  links,
  images,
}: {
  links?: ProjectLinks;
  images?: string[];
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasImages = !!images && images.length > 0;

  const hasAnyAction =
    hasImages || links?.readme || links?.video || links?.live || links?.github;

  if (!hasAnyAction) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links?.readme && (
        <a
          href={links.readme}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={pillClass}
        >
          <IconDoc className="h-3.5 w-3.5" />
          README
        </a>
      )}

      {hasImages && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setGalleryOpen(true);
          }}
          className={pillClass}
        >
          <IconImage className="h-3.5 w-3.5" />
          이미지
        </button>
      )}

      {links?.video && (
        <a
          href={links.video}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={pillClass}
        >
          <IconPlay className="h-3.5 w-3.5" />
          영상
        </a>
      )}

      {links?.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={pillClass}
        >
          <IconExternal className="h-3.5 w-3.5" />
          배포
        </a>
      )}

      {links?.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={pillClass}
        >
          <IconGithub className="h-3.5 w-3.5" />
          GitHub
        </a>
      )}

      {galleryOpen && images && (
        <ImageGalleryModal images={images} onClose={() => setGalleryOpen(false)} />
      )}
    </div>
  );
}
