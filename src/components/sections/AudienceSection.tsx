"use client";

import { Coffee, ShoppingBag, TreePine, User } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "@/context/TranslationContext";

const icons = [Coffee, ShoppingBag, TreePine, User];
const EASE = [0.16, 1, 0.3, 1] as const;

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
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-3xl sm:text-4xl text-ink mb-12"
        >
          {t.audience.title}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              whileHover={{ y: -4 }}
              className="bg-bg border border-line rounded-2xl p-5 flex flex-col gap-3 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-olive-soft flex items-center justify-center">
                <Icon size={18} strokeWidth={1.5} className="text-olive" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg text-ink mb-1.5">{title}</h3>
                <p className="text-ink-soft leading-relaxed text-sm">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
