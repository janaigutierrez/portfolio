"use client";

import { useTranslation } from "@/context/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
        <p className="font-display text-base text-ink">{t.footer.tagline}</p>
        <p className="text-xs text-pencil">
          © {year} janai.dev. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
