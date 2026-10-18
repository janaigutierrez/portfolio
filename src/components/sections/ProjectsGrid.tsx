"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

type Review = { name: string; role: string; text: string };

type ClientProject = {
  key: string;
  name: string;
  category: string;
  challenge: string;
  result: string;
  image: string;
  liveUrl: string;
  review: Review;
};

function VisitLink({ href, label, name }: { href: string; label: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${name}`}
      className="inline-flex items-center gap-1 text-sm font-semibold text-pen underline decoration-2 underline-offset-[6px] hover:text-pen-deep transition-colors duration-150"
    >
      {label}
      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

function ProjectText({ project, visitLabel }: { project: ClientProject; visitLabel: string }) {
  const { name, category, challenge, result, liveUrl, review } = project;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-sm text-pencil mb-1">{category}</p>
        <h3 className="font-display text-2xl text-ink leading-snug">{name}</h3>
      </div>
      <p className="text-ink-soft leading-relaxed max-w-[52ch]">{challenge}</p>
      <p className="text-ink font-medium leading-relaxed max-w-[52ch]">{result}</p>
      {/* L'opinió del client, com una nota escrita a mà en tinta blava */}
      <figure>
        <blockquote className="font-hand text-pen text-[1.7rem] leading-[1.15] -rotate-1 max-w-[34ch]">
          &ldquo;{review.text}&rdquo;
        </blockquote>
        <figcaption className="text-sm text-pencil mt-3">
          {review.name}, {review.role.toLowerCase()}
        </figcaption>
      </figure>
      <div>
        <VisitLink href={liveUrl} label={visitLabel} name={name} />
      </div>
    </div>
  );
}

function ProjectImage({ src, alt, sizes, priority }: { src: string; alt: string; sizes: string; priority?: boolean }) {
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-card border border-rule bg-paper-deep">
      <Image src={src} alt={alt} fill className="object-cover object-top" sizes={sizes} priority={priority} />
    </div>
  );
}

export default function ProjectsGrid() {
  const { t } = useTranslation();

  const clientProjects: ClientProject[] = [
    {
      key: "iseo",
      name: t.projects.iseoName,
      category: t.projects.iseoCategory,
      challenge: t.projects.iseoChallenge,
      result: t.projects.iseoResult,
      image: "/projects/iseo1.jpg",
      liveUrl: t.projects.iseoUrl,
      review: t.testimonials.iseo,
    },
    {
      key: "canCarerac",
      name: t.projects.canCareracName,
      category: t.projects.canCareracCategory,
      challenge: t.projects.canCareracChallenge,
      result: t.projects.canCareracResult,
      image: "/projects/carerac1.jpg",
      liveUrl: "https://cancarerac.netlify.app",
      review: t.testimonials.canCarerac,
    },
    {
      key: "wedding",
      name: t.projects.weddingName,
      category: t.projects.weddingCategory,
      challenge: t.projects.weddingChallenge,
      result: t.projects.weddingResult,
      image: "/projects/boda1.jpg",
      liveUrl: "https://bodaenmodocata.es",
      review: t.testimonials.boda,
    },
  ];

  const personalProjects = [
    { key: "nest", name: t.projects.nestName, tag: t.projects.nestTag, desc: t.projects.nestDesc, image: "/projects/nestapp1.jpg", liveUrl: "https://nest-app.surge.sh" },
    { key: "mosset", name: t.projects.mossetName, tag: t.projects.mossetTag, desc: t.projects.mossetDesc, image: "/projects/mosset1.jpg", liveUrl: "https://mosset.vercel.app" },
    { key: "geocat", name: t.projects.geocatName, tag: t.projects.geocatTag, desc: t.projects.geocatDesc, image: "/projects/geocat1.jpg", liveUrl: "https://geocat.netlify.app" },
    { key: "desastredecajon", name: t.projects.desastredecajonName, tag: t.projects.desastredecajonTag, desc: t.projects.desastredecajonDesc, image: "/projects/viatge1.jpg", liveUrl: t.projects.desastredecajonUrl },
  ];

  const [featured, ...rest] = clientProjects;

  return (
    <section id="projectes" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-20">
      <h2 className="font-display text-3xl sm:text-4xl text-ink mb-14 max-w-[20ch]">
        {t.projects.clientTitle}
      </h2>

      {/* Projecte destacat: imatge gran + text al costat */}
      <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
        <div className="lg:col-span-7">
          <ProjectImage src={featured.image} alt={featured.name} sizes="(max-width: 1024px) 100vw, 640px" />
        </div>
        <div className="lg:col-span-5 lg:pt-4">
          <ProjectText project={featured} visitLabel={t.projects.visitProject} />
        </div>
      </article>

      {/* La resta de clients, en dues columnes */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-24">
        {rest.map((project) => (
          <article key={project.key} className="flex flex-col gap-6">
            <ProjectImage src={project.image} alt={project.name} sizes="(max-width: 768px) 100vw, 540px" />
            <ProjectText project={project} visitLabel={t.projects.visitProject} />
          </article>
        ))}
      </div>

      {/* Projectes personals: llista compacta */}
      <h3 className="font-display text-xl text-ink mb-6">{t.projects.personalTitle}</h3>
      <ul className="grid md:grid-cols-2 gap-x-12 border-t border-rule">
        {personalProjects.map(({ key, name, tag, desc, image, liveUrl }) => (
          <li key={key} className="border-b border-rule">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 py-5"
            >
              <div className="relative w-28 sm:w-32 aspect-video shrink-0 overflow-hidden rounded-control border border-rule bg-paper-deep">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="128px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg text-ink leading-snug group-hover:text-pen transition-colors duration-150">
                  {name}
                </p>
                <p className="text-sm text-pencil mb-1">{tag}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>
              </div>
              <ArrowUpRight
                size={18}
                strokeWidth={1.75}
                className="shrink-0 text-pencil group-hover:text-pen transition-colors duration-150"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
