"use client";

import { useEffect, useState } from "react";
import { IconChevron, IconClose } from "./icons";

export default function ImageGalleryModal({
  images,
  onClose,
}: {
  images: string[];
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-text/70 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="닫기"
        className="absolute right-6 top-6 rounded-full border border-white/30 p-2 text-white transition-colors hover:border-white"
      >
        <IconClose className="h-4 w-4" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="이전 이미지"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 text-white transition-colors hover:border-white sm:left-8"
          >
            <IconChevron className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="다음 이미지"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 p-2 text-white transition-colors hover:border-white sm:right-8"
          >
            <IconChevron className="h-4 w-4" />
          </button>
        </>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element -- 사용자 제공 임의 경로/외부 URL을 그대로 표시하기 위해 next/image 대신 사용 */}
      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full rounded-md object-contain"
      />

      {images.length > 1 && (
        <span className="absolute bottom-6 font-mono text-xs text-white/70">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  );
}
