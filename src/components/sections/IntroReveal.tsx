"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "@/context/TranslationContext";

export default function IntroReveal() {
  const { t } = useTranslation();
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const lines = [
    { text: t.intro.line1 },
    {
      before: t.intro.line2before,
      highlight: t.intro.line2highlight,
      after: t.intro.line2after,
    },
    { text: t.intro.line3 },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      lineRefs.current.forEach((el) => {
        if (el) { el.style.opacity = "1"; el.style.transform = "none"; }
      });
      return;
    }

    const observers: IntersectionObserver[] = [];
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.7s ease ${i * 0.22}s, transform 0.7s ease ${i * 0.22}s`;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "none";
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section
      id="inici"
      className="relative min-h-[50vh] flex flex-col justify-center px-6 py-16"
      style={{
        background:
          "linear-gradient(180deg, var(--olive-soft) 0%, var(--bg) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto w-full">
        {lines.map((line, i) => (
          <p
            key={i}
            ref={(el) => { lineRefs.current[i] = el; }}
            className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ink leading-snug mb-5"
          >
            {"highlight" in line ? (
              <>
                {line.before}
                <span className="text-amber">{line.highlight}</span>
                {line.after}
              </>
            ) : (
              line.text
            )}
          </p>
        ))}
      </div>
    </section>
  );
}