"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <main className="px-6 pt-20 pb-28 max-w-6xl mx-auto">
      <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">{t.blog.title}</h1>
      <p className="text-lg text-ink-soft mb-16 max-w-[52ch]">{t.blog.subtitle}</p>

      <ul className="border-t border-ink">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-rule">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid md:grid-cols-[12rem_1fr_auto] gap-x-10 gap-y-2 py-8 items-start"
            >
              <div className="text-sm text-pencil md:pt-1.5">
                <p>{formatDate(post.date, lang)}</p>
                <p>{post.category}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl text-ink leading-snug mb-2 group-hover:text-pen transition-colors duration-150">
                  {post.title}
                </h2>
                <p className="text-ink-soft leading-relaxed max-w-[60ch]">{post.description}</p>
              </div>
              <span className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-pen pt-2">
                {t.blog.readMore}
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
