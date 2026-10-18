"use client";

import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { href: "/#projectes", label: t.nav.projectes },
    { href: "/#faq", label: t.nav.faq },
    { href: "/blog", label: t.nav.blog },
    { href: `mailto:${t.contact.infoEmail}`, label: t.contact.infoEmail },
    { href: "https://wa.me/34623065244", label: "WhatsApp", external: true },
  ];

  return (
    <footer className="border-t border-rule pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-display text-2xl text-ink max-w-[20ch]">{t.footer.tagline}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {links.map(({ href, label, external }) => (
              <li key={href}>
                <Link
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-ink-soft hover:text-ink transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-pencil">
          © {year} janai.dev. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
