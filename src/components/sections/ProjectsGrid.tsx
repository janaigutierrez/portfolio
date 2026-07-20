"use client";

import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/context/TranslationContext";

const INITIAL_COUNT = 4;

export default function ProjectsGrid() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const clientProjects = [
    {
      key: "iseo",
      name: t.projects.iseoName,
      category: t.projects.iseoCategory,
      challenge: t.projects.iseoChallenge,
      result: t.projects.iseoResult,
      image: "/projects/iseo1.jpg",
      liveUrl: t.projects.iseoUrl,
      status: t.projects.statusComplete,
    },
    {
      key: "canCarerac",
      name: t.projects.canCareracName,
      category: t.projects.canCareracCategory,
      challenge: t.projects.canCareracChallenge,
      result: t.projects.canCareracResult,
      image: null as string | null,
      liveUrl: null as string | null,
      status: t.projects.statusDev,
    },
    {
      key: "wedding",
      name: t.projects.weddingName,
      category: t.projects.weddingCategory,
      challenge: t.projects.weddingChallenge,
      result: t.projects.weddingResult,
      image: "/projects/boda1.jpg",
      liveUrl: null as string | null,
      status: t.projects.statusComplete,
    },
  ];

  const personalProjects = [
    {
      key: "nest",
      name: t.projects.nestName,
      tag: t.projects.nestTag,
      desc: t.projects.nestDesc,
      image: "/projects/nestapp1.jpg",
      liveUrl: "https://nest-app.surge.sh",
    },
    {
      key: "mosset",
      name: t.projects.mossetName,
      tag: t.projects.mossetTag,
      desc: t.projects.mossetDesc,
      image: "/projects/mosset1.jpg",
      liveUrl: "https://mosset.vercel.app",
    },
    {
      key: "geocat",
      name: t.projects.geocatName,
      tag: t.projects.geocatTag,
      desc: t.projects.geocatDesc,
      image: "/projects/geocat1.jpg",
      liveUrl: "https://geocat.netlify.app",
    },
    {
      key: "desastredecajon",
      name: t.projects.desastredecajonName,
      tag: t.projects.desastredecajonTag,
      desc: t.projects.desastredecajonDesc,
      image: null as string | null,
      liveUrl: t.projects.desastredecajonUrl,
    },
  ];

  return (
    <section id="projectes" className="px-6 py-20 max-w-6xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-widest text-stone mb-3">
        {t.projects.eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-ink mb-10">
        {t.projects.clientTitle}
      </h2>

      {/* Grid projectes client */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {clientProjects.map(({ key, name, category, challenge, result, image, liveUrl, status }) => (
          <article
            key={key}
            className="bg-bg-card border border-line rounded-2xl overflow-hidden flex flex-col group"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-olive-soft">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-stone">
                    {t.projects.noImage}
                  </span>
                </div>
              )}
              <span
                className={`absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-full backdrop-blur-sm ${status === t.projects.statusComplete
                    ? "bg-paper/80 text-olive border border-olive/30"
                    : "bg-paper/80 text-stone border border-line"
                  }`}
              >
                {status}
              </span>
            </div>

            <div className="p-5 flex flex-col gap-3 flex-1">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-stone mb-1">
                  {category}
                </p>
                <h3 className="font-display text-xl text-ink leading-snug">{name}</h3>
              </div>

              <div className="flex flex-col gap-2.5 flex-1">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-stone mb-1">
                    {t.projects.challenge}
                  </p>
                  <p className="text-ink-soft text-sm leading-relaxed">{challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-amber mb-1">
                    {t.projects.result}
                  </p>
                  <p className="text-ink text-sm leading-relaxed font-medium">{result}</p>
                </div>
              </div>

              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-amber hover:text-amber-deep transition-colors mt-1"
                >
                  {t.projects.visitProject}
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Separador + projectes personals */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-line" />
        <p className="font-mono text-[10px] uppercase tracking-widest text-stone whitespace-nowrap px-2">
          {t.projects.personalTitle}
        </p>
        <div className="flex-1 h-px bg-line" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {personalProjects.map(({ key, name, tag, desc, image, liveUrl }, index) => {
          const isHidden = !showAll && index >= INITIAL_COUNT;
          return (
            <article
              key={key}
              className={`bg-bg-card border border-line rounded-xl overflow-hidden flex flex-col group transition-all duration-300 ${isHidden ? "hidden" : index >= INITIAL_COUNT ? "animate-fade-in" : ""
                }`}
            >
              <div className="relative aspect-video overflow-hidden bg-olive-soft">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-stone">
                      {t.projects.noImage}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-stone">{tag}</p>
                <h3 className="font-display text-base text-ink leading-snug">{name}</h3>
                <p className="text-stone text-xs leading-relaxed flex-1">{desc}</p>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-stone hover:text-amber transition-colors mt-1"
                  >
                    {t.projects.visitProject}
                    <ExternalLink size={10} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {personalProjects.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone hover:text-ink border border-line hover:border-ink-soft rounded-full px-5 py-2.5 transition-colors duration-200"
          >
            {showAll ? t.projects.showLess : t.projects.showAll}
            {showAll ? <ChevronUp size={13} aria-hidden="true" /> : <ChevronDown size={13} aria-hidden="true" />}
          </button>
        </div>
      )}
    </section>
  );
}