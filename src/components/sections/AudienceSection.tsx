"use client";

import { Coffee, ShoppingBag, TreePine, User } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

const icons = [Coffee, ShoppingBag, TreePine, User];

export default function AudienceSection() {
  const { t } = useTranslation();

  const items = [
    { Icon: icons[0], title: t.audience.item1title, text: t.audience.item1text },
    { Icon: icons[1], title: t.audience.item2title, text: t.audience.item2text },
    { Icon: icons[2], title: t.audience.item3title, text: t.audience.item3text },
    { Icon: icons[3], title: t.audience.item4title, text: t.audience.item4text },
  ];

  return (
    <section id="clients" className="px-6 py-16" style={{ backgroundColor: "var(--paper)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-stone mb-3">
          {t.audience.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-ink mb-12">
          {t.audience.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-bg border border-line rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-olive-soft flex items-center justify-center">
                <Icon size={18} strokeWidth={1.5} className="text-olive" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg text-ink mb-1.5">{title}</h3>
                <p className="text-ink-soft leading-relaxed text-sm">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}