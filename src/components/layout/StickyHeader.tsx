"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

const LANGS = ["ca", "es", "en"] as const;

export default function StickyHeader() {
  const { t, lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#projectes", label: t.nav.projectes },
    { href: "/#faq", label: t.nav.faq },
    { href: "/blog", label: t.nav.blog },
  ];

  const langSwitch = (
    <div className="flex items-center gap-2 text-pencil" role="group" aria-label="Idioma">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden="true">/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            aria-label={`Canviar idioma a ${l.toUpperCase()}`}
            className={`py-1 transition-colors duration-150 ${
              lang === l ? "text-ink font-semibold" : "hover:text-ink"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-sm border-b border-rule">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg text-ink hover:text-pen transition-colors duration-150"
        >
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

          <div className="hidden md:block">{langSwitch}</div>

          <Link
            href="/#contacte"
            onClick={() => setOpen(false)}
            className="font-semibold text-pen underline decoration-2 underline-offset-[6px] hover:text-pen-deep transition-colors duration-150"
          >
            {t.header.cta}
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobil"
            aria-label={t.nav.menu}
            className="md:hidden -mr-2 p-2 text-ink"
          >
            {open ? <X size={22} strokeWidth={1.75} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.75} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      {/* Menú de mòbil: enllaços + idioma */}
      {open && (
        <div id="menu-mobil" className="md:hidden border-t border-rule bg-paper">
          <ul className="px-6 py-2">
            {links.map(({ href, label }) => (
              <li key={href} className="border-b border-rule last:border-b-0">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-xl text-ink"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-5 text-base">{langSwitch}</div>
        </div>
      )}
    </header>
  );
}
