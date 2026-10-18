"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const prices = [
    { label: t.faq.priceSimpleLabel, price: t.faq.priceSimple, time: t.faq.priceSimpleTime },
    { label: t.faq.priceFullLabel, price: t.faq.priceFull, time: t.faq.priceFullTime },
  ];

  const items = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
  ];

  return (
    <section id="faq" className="bg-paper-deep scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-12">{t.faq.title}</h2>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          {/* Preus visibles: és el que més es busca, no s'amaga en un desplegable */}
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {prices.map(({ label, price, time }) => (
                <div key={label} className="rounded-card bg-sheet border border-rule p-6">
                  <p className="text-ink-soft mb-2">{label}</p>
                  <p className="font-display text-4xl text-ink tracking-tight mb-2">{price}</p>
                  <p className="text-sm text-pencil">{time}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-soft leading-relaxed mt-5 max-w-[46ch]">{t.faq.priceNote}</p>
          </div>

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
