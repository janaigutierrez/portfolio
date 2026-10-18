"use client";

import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";

const LANGS = ["ca", "es", "en"] as const;

export default function StickyHeader() {
  const { t, lang, setLang } = useTranslation();

  const links = [
    { href: "/#projectes", label: t.nav.projectes },
    { href: "/#faq", label: t.nav.faq },
    { href: "/blog", label: t.nav.blog },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-sm border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-display text-lg text-ink hover:text-pen transition-colors duration-150">
          {t.header.logo}
        </Link>

        <nav aria-label="Principal" className="flex items-center gap-6 text-sm">
          <ul className="hidden md:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-ink-soft hover:text-ink transition-colors duration-150">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-pencil" role="group" aria-label="Idioma">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                <button
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  aria-label={`Canviar idioma a ${l.toUpperCase()}`}
                  className={`transition-colors duration-150 ${
                    lang === l ? "text-ink font-semibold" : "hover:text-ink"
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>

          <Link
            href="/#contacte"
            className="font-semibold text-pen underline decoration-2 underline-offset-[6px] hover:text-pen-deep transition-colors duration-150"
          >
            {t.header.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
