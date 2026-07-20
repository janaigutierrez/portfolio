"use client";

import { useState, useEffect, useCallback } from "react";

export function useScrollProgress(sectionIds: string[]) {
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const update = useCallback(() => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    setProgress(Math.min(Math.max(current, 0), 1));

    const mid = window.innerHeight / 2;
    let found = 0;
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid) found = i;
      }
    });
    setActiveIdx(found);
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return { progress, activeIdx };
}