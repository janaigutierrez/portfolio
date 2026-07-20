"use client";

import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";
import type { PostMeta } from "@/lib/blog";

function formatDate(dateStr: string, lang: string): string {
  return new Date(dateStr).toLocaleDateString(
    lang === "ca" ? "ca-ES" : lang === "es" ? "es-ES" : "en-GB",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export default function BlogPostLayout({
  meta,
  children,
}: {
  meta: PostMeta;
  children: React.ReactNode;
}) {
  const { t, lang } = useTranslation();

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-widest text-stone hover:text-amber transition-colors inline-block mb-14"
      >
        {t.blog.backToBlog}
      </Link>

      <article className="max-w-2xl mx-auto">
        <header className="mb-10">
          <p className="font-mono text-[9px] uppercase tracking-widest text-stone mb-3">
            {meta.category}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-ink leading-snug mb-4">
            {meta.title}
          </h1>
          <p className="text-ink-soft leading-relaxed mb-4">{meta.description}</p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-stone">
            {t.blog.publishedOn} {formatDate(meta.date, lang)}
          </p>
        </header>

        <div className="blog-prose">{children}</div>
      </article>
    </main>
  );
}
