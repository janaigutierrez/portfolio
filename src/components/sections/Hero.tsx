"use client";

import Image from "next/image";
import { useTranslation } from "@/context/TranslationContext";

export default function Hero() {
  const { t } = useTranslation();

  const screenshots = [
    { src: "/projects/iseo1.jpg",   label: t.projects.iseoName,    rotation: -5, top: 0,   left: 0,   zIndex: 3 },
    { src: "/projects/boda1.jpg",   label: t.projects.weddingName, rotation:  3, top: 75,  left: 70,  zIndex: 2 },
    { src: "/projects/mosset1.jpg", label: t.projects.mossetName,  rotation: -2, top: 150, left: 140, zIndex: 1 },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="px-6 pt-8 pb-16 max-w-6xl mx-auto scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Contingut esquerre */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-stone mb-5">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-2">
            {t.hero.title1}
          </h1>
          <h2 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-amber leading-tight mb-10">
            {t.hero.title2}
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projectes")}
              className="px-6 py-3 rounded-full bg-ink text-paper text-sm font-medium hover:bg-ink-soft transition-colors duration-200"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              onClick={() => scrollTo("contacte")}
              className="px-6 py-3 rounded-full border border-line text-ink text-sm font-medium hover:border-amber hover:text-amber transition-colors duration-200"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Pila de captures — oculta en mòbil */}
        <div
          className="relative hidden lg:block"
          style={{ height: 420 }}
          aria-hidden="true"
        >
          {/* Blob difuminat de fons */}
          <div
            className="absolute"
            style={{
              width: 500,
              height: 360,
              top: -15,
              left: -25,
              zIndex: 0,
              backgroundColor: "var(--olive-soft)",
              borderRadius: "50%",
              filter: "blur(60px)",
              opacity: 0.9,
            }}
          />

          {screenshots.map(({ src, rotation, top, left, zIndex }) => (
            <div
              key={src}
              className="absolute transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.04] cursor-default"
              style={{ top, left, zIndex }}
            >
              <div
                className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                style={{
                  width: 330,
                  height: 220,
                  transform: `rotate(${rotation}deg)`,
                  border: "1.5px solid rgba(255,255,255,0.55)",
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="330px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}