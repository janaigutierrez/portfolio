"use client";

import { Store, Building2, BriefcaseBusiness, PencilRuler, type LucideIcon } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function AudienceSection() {
  const { t } = useTranslation();

  const items: { title: string; text: string; Icon: LucideIcon }[] = [
    { title: t.audience.item1title, text: t.audience.item1text, Icon: Store },
    { title: t.audience.item2title, text: t.audience.item2text, Icon: Building2 },
    { title: t.audience.item3title, text: t.audience.item3text, Icon: BriefcaseBusiness },
    { title: t.audience.item4title, text: t.audience.item4text, Icon: PencilRuler },
  ];

  return (
    <section id="clients" className="py-20 bg-paper-deep border-y border-rule">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight mb-10">
          {t.audience.title}
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ title, text, Icon }) => (
            <li
              key={title}
              className="relative isolate overflow-hidden rounded-card bg-sheet border border-rule p-6 pb-20 sm:min-h-60"
            >
              {/* Icona gran com a fons del bloc, no com a etiqueta davant del títol */}
              <Icon
                aria-hidden="true"
                strokeWidth={1}
                className="absolute -right-6 -bottom-6 -z-10 size-40 text-pen opacity-[0.13] -rotate-6"
              />
              <h3 className="font-display text-xl text-ink mb-3">{title}</h3>
              <p className="text-ink-soft leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
