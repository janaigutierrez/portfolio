"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
  ];

  return (
    <section
      id="faq"
      className="px-6 py-20"
      style={{ backgroundColor: "var(--olive-soft)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-stone mb-3">
          {t.faq.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-10">
          {t.faq.title}
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col divide-y divide-line">
          {items.map(({ q, a }, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg text-ink">{q}</span>
                  {isOpen ? (
                    <Minus size={16} strokeWidth={1.5} className="text-amber shrink-0" aria-hidden="true" />
                  ) : (
                    <Plus size={16} strokeWidth={1.5} className="text-stone shrink-0" aria-hidden="true" />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-5 text-ink-soft leading-relaxed text-sm">{a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}