"use client";

import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";

const LANGS = ["ca", "es", "en"] as const;

export default function StickyHeader() {
  const { t, lang, setLang } = useTranslation();

  const scrollToContact = () => {
    document.getElementById("contacte")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-bg/80 border-b border-line">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-body text-lg font-semibold text-ink tracking-tight hover:text-amber transition-colors duration-150">
          {t.header.logo}
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-widest text-stone hover:text-ink transition-colors hidden sm:block"
          >
            {t.nav.blog}
          </Link>
          {/* Selector d'idioma */}
          <div className="flex items-center gap-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded transition-colors duration-150 ${
                  lang === l
                    ? "text-amber font-medium"
                    : "text-stone hover:text-ink-soft"
                }`}
                aria-label={`Canviar idioma a ${l.toUpperCase()}`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-amber text-paper hover:bg-amber-deep transition-colors duration-200"
          >
            {t.header.cta}
          </button>
        </div>
      </div>
    </header>
  );
}