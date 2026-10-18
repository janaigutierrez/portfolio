"use client";

import { motion } from "motion/react";
import { TestimonialMarquee } from "@/components/ui/testimonial-marquee";
import { useTranslation } from "@/context/TranslationContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const { t } = useTranslation();

  const reviews = [
    t.testimonials.boda,
    t.testimonials.iseo,
    t.testimonials.canCarerac,
  ];

  const items = reviews.map(({ name, role, project, text }) => ({
    author: { name, role: `${role} · ${project}` },
    text,
  }));

  return (
    <section
      id="opinions"
      style={{ backgroundColor: "var(--olive)" }}
      className="py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-display text-3xl sm:text-4xl mb-12"
          style={{ color: "var(--paper)" }}
        >
          {t.testimonials.title}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      >
        <TestimonialMarquee testimonials={items} duration={36} />
      </motion.div>
    </section>
  );
}
