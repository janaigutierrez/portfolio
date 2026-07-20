"use client";

import { Quote } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    t.testimonials.boda,
    t.testimonials.iseo,
    t.testimonials.canCarerac,
  ];

  return (
    <section
      id="opinions"
      style={{ backgroundColor: "var(--olive)" }}
      className="px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest mb-3"
           style={{ color: "rgba(238,242,239,0.6)" }}>
          {t.testimonials.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl mb-12"
            style={{ color: "var(--paper)" }}>
          {t.testimonials.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ name, role, project, text }) => (
            <div
              key={name}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
              }}
            >
              <Quote
                size={20}
                strokeWidth={1.5}
                style={{ color: "var(--amber)" }}
                aria-hidden="true"
              />
              <p className="leading-relaxed text-sm flex-1"
                 style={{ color: "var(--paper)" }}>
                &ldquo;{text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-sm" style={{ color: "var(--paper)" }}>
                  {name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest mt-0.5"
                   style={{ color: "rgba(238,242,239,0.65)" }}>
                  {role} · {project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}