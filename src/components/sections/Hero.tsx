"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useTranslation } from "@/context/TranslationContext";

const EASE = [0.16, 1, 0.3, 1] as const;

type Screenshot = {
  src: string;
  rotation: number;
  top: number;
  left: number;
  zIndex: number;
  depth: number;
};

function ParallaxPhoto({
  shot,
  index,
  progress,
}: {
  shot: Screenshot;
  index: number;
  progress: MotionValue<number>;
}) {
  const parallaxY = useTransform(progress, [0, 1], [0, shot.depth]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: shot.rotation }}
      animate={{ opacity: 1, y: 0, rotate: shot.rotation }}
      transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: EASE }}
      style={{ top: shot.top, left: shot.left, zIndex: shot.zIndex, y: parallaxY }}
      className="absolute cursor-default"
      whileHover={{ scale: 1.04 }}
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-warm-lg transition-shadow duration-300"
        style={{
          width: 330,
          height: 220,
          border: "1.5px solid rgba(255,255,255,0.55)",
        }}
      >
        <Image
          src={shot.src}
          alt=""
          fill
          className="object-cover"
          sizes="330px"
          priority={index === 0}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const screenshots: Screenshot[] = [
    { src: "/projects/iseo1.jpg",   rotation: -5, top: 0,   left: 0,   zIndex: 3, depth: 40 },
    { src: "/projects/boda1.jpg",   rotation:  3, top: 75,  left: 70,  zIndex: 2, depth: 70 },
    { src: "/projects/mosset1.jpg", rotation: -2, top: 150, left: 140, zIndex: 1, depth: 100 },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="hero" className="px-6 pt-8 pb-16 max-w-6xl mx-auto scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Contingut esquerre */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-mono text-[10px] uppercase tracking-widest text-stone mb-5"
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-2"
          >
            {t.hero.title1}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-amber leading-tight mb-10"
          >
            {t.hero.title2}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("projectes")}
              className="px-6 py-3 rounded-full bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition active:scale-[0.97] duration-200"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => scrollTo("contacte")}
              className="px-6 py-3 rounded-full border border-line text-ink text-sm font-medium hover:border-amber hover:text-amber transition active:scale-[0.97] duration-200"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>
        </div>

        {/* Pila de captures — oculta en mòbil */}
        <div
          className="relative hidden lg:block"
          style={{ height: 420 }}
          aria-hidden="true"
        >
          <div
            className="absolute"
            style={{
              width: 500, height: 360,
              top: -15, left: -25, zIndex: 0,
              backgroundColor: "var(--olive-soft)",
              borderRadius: "50%",
              filter: "blur(60px)",
              opacity: 0.85,
            }}
          />
          {screenshots.map((shot, i) => (
            <ParallaxPhoto key={shot.src} shot={shot} index={i} progress={scrollYProgress} />
          ))}
        </div>

      </div>
    </section>
  );
}
