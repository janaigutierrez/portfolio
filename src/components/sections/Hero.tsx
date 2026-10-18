"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useTranslation } from "@/context/TranslationContext";

type Screenshot = {
  src: string;
  alt: string;
  rotation: number;
  top: number;
  left: number;
  zIndex: number;
  depth: number;
};

// Mides de la pila a escala 1 (escriptori); en pantalles petites s'escala sencera
const STACK_W = 470;
const STACK_H = 370;

function ParallaxPhoto({
  shot,
  index,
  progress,
  reduce,
}: {
  shot: Screenshot;
  index: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const parallaxY = useTransform(progress, [0, 1], [0, reduce ? 0 : shot.depth]);

  return (
    <motion.div
      style={{ top: shot.top, left: shot.left, zIndex: shot.zIndex, rotate: shot.rotation, y: parallaxY }}
      className="absolute"
      whileHover={reduce ? undefined : { scale: 1.04 }}
    >
      <div
        className="animate-rise relative overflow-hidden rounded-card border border-rule bg-sheet"
        style={{ width: 330, height: 220, ["--delay" as string]: `${150 + index * 100}ms`, ["--rise" as string]: "24px" }}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover object-top"
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
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const screenshots: Screenshot[] = [
    { src: "/projects/carerac1.jpg", alt: t.projects.canCareracName, rotation: -5, top: 0,   left: 0,   zIndex: 3, depth: 40 },
    { src: "/projects/boda1.jpg",    alt: t.projects.weddingName,    rotation:  3, top: 75,  left: 70,  zIndex: 2, depth: 70 },
    { src: "/projects/nestapp1.jpg", alt: t.projects.nestName,       rotation: -2, top: 150, left: 140, zIndex: 1, depth: 100 },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  // Retard de l'entrada CSS (.animate-rise) per esglaonar titular, text i botons
  const enter = (delayMs: number) => ({
    style: { ["--delay" as string]: `${delayMs}ms` },
  });

  return (
    <section
      ref={sectionRef}
      id="inici"
      className="px-6 pt-12 pb-16 lg:pt-20 lg:pb-24 max-w-6xl mx-auto scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
        <div>
          <h1
            {...enter(0)}
            className="animate-rise font-display text-4xl sm:text-5xl lg:text-[3.25rem] text-ink leading-[1.08] mb-5 max-w-[16ch]"
          >
            {t.hero.title}
          </h1>
          <p
            {...enter(80)}
            className="animate-rise text-lg text-ink-soft leading-relaxed mb-9 max-w-[42ch]"
          >
            {t.hero.subtitle}
          </p>
          <div {...enter(160)} className="animate-rise flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projectes")}
              className="px-6 py-3 rounded-full bg-ink text-sheet text-sm font-medium hover:bg-ink-soft transition active:scale-[0.97] duration-200"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => scrollTo("contacte")}
              className="px-6 py-3 rounded-full border border-rule text-ink text-sm font-medium hover:border-pen hover:text-pen transition active:scale-[0.97] duration-200"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Pila de captures: la mateixa composició a totes les mides, escalada */}
        <div
          className="relative mx-auto lg:mx-0 h-[230px] sm:h-[315px] lg:h-[400px] w-[292px] sm:w-[400px] lg:w-[470px]"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-0 origin-top-left scale-[0.62] sm:scale-[0.85] lg:scale-100"
            style={{ width: STACK_W, height: STACK_H }}
          >
            {screenshots.map((shot, i) => (
              <ParallaxPhoto
                key={shot.src}
                shot={shot}
                index={i}
                progress={scrollYProgress}
                reduce={reduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
