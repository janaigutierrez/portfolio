"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function AudienceSection() {
  const { t } = useTranslation();

  const items = [
    { title: t.audience.item1title, text: t.audience.item1text },
    { title: t.audience.item2title, text: t.audience.item2text },
    { title: t.audience.item3title, text: t.audience.item3text },
    { title: t.audience.item4title, text: t.audience.item4text },
  ];

  return (
    <section id="clients" className="py-20 bg-sheet border-y border-rule">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
          {t.audience.title}
        </h2>

        <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {items.map(({ title, text }) => (
            <div key={title} className="border-t border-ink pt-4">
              <dt className="font-display text-xl text-ink mb-2">{title}</dt>
              <dd className="text-ink-soft leading-relaxed max-w-[38ch]">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
