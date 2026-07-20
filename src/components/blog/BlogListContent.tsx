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

export default function BlogListContent({ posts }: { posts: PostMeta[] }) {
  const { t, lang } = useTranslation();

  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      <p className="font-mono text-xs uppercase tracking-widest text-stone mb-3">
        {t.blog.eyebrow}
      </p>
      <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4">
        {t.blog.title}
      </h1>
      <p className="text-ink-soft mb-14 max-w-xl">{t.blog.subtitle}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="bg-bg-card border border-line rounded-2xl p-6 flex flex-col gap-3 h-full hover:border-amber transition-colors duration-200">
              <p className="font-mono text-[9px] uppercase tracking-widest text-stone">
                {post.category}
              </p>
              <h2 className="font-display text-xl text-ink leading-snug group-hover:text-amber transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-ink-soft text-sm leading-relaxed flex-1">
                {post.description}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-line mt-auto">
                <p className="font-mono text-[9px] uppercase tracking-widest text-stone">
                  {formatDate(post.date, lang)}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber">
                  {t.blog.readMore} →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
