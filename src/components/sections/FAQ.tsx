"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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
    <section id="faq" className="bg-paper-deep scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">{t.faq.title}</h2>

          <div className="border-t border-ink">
            {items.map(({ q, a }, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} className="border-b border-rule">
                  <h3>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                    >
                      <span className="font-display text-lg text-ink">{q}</span>
                      <Plus
                        size={18}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        className={`shrink-0 transition-[transform,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? "rotate-45 text-pen" : "text-pencil"
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 text-ink-soft leading-relaxed max-w-[60ch]">{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
