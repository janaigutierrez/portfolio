"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--ink)" }} className="px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-base" style={{ color: "rgba(238,242,239,0.75)" }}>
          {t.footer.tagline}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(238,242,239,0.55)" }}>
          © {year} janai.dev · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}