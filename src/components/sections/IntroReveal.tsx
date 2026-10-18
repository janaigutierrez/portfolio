"use client";

import { motion } from "motion/react";
import { useTranslation } from "@/context/TranslationContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function IntroReveal() {
  const { t } = useTranslation();

  const lines = [
    { text: t.intro.line1 },
    {
      before: t.intro.line2before,
      highlight: t.intro.line2highlight,
      after: t.intro.line2after,
    },
    { text: t.intro.line3 },
  ];

  return (
    <section
      id="inici"
      className="relative flex flex-col justify-center px-6 py-10 sm:py-14"
      style={{
        background: "linear-gradient(180deg, var(--olive-soft) 0%, var(--bg) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto w-full">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.16, ease: EASE }}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-snug mb-5"
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
          </motion.p>
        ))}
      </div>
    </section>
  );
}
