import { useEffect, useState } from "react";
import type { SpyId } from "@/components/island/chapters";

// Tracks which [data-chapter] element crosses the middle of the viewport, and
// whether any see-through [data-backdrop] block is on screen (so the 3D island
// only renders while it can actually be seen).
export const useChapterSpy = () => {
  const [active, setActive] = useState<SpyId>("hero");
  const [backdropVisible, setBackdropVisible] = useState(true);

  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.chapter as SpyId);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    const onScreen = new Set<Element>();
    const backdrop = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target);
        else onScreen.delete(e.target);
      }
      setBackdropVisible(onScreen.size > 0);
    });

    document.querySelectorAll("[data-chapter]").forEach((el) => spy.observe(el));
    document.querySelectorAll("[data-backdrop]").forEach((el) => backdrop.observe(el));
    return () => {
      spy.disconnect();
      backdrop.disconnect();
    };
  }, []);

  return { active, backdropVisible };
};
