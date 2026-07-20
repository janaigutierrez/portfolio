"use client";

import {
  Home,
  Users,
  Grid2x2,
  MessageSquare,
  HelpCircle,
  Mail,
} from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useTranslation } from "@/context/TranslationContext";
import { LucideIcon } from "lucide-react";

const sectionIds = ["inici", "clients", "projectes", "opinions", "faq", "contacte"];
const icons: LucideIcon[] = [Home, Users, Grid2x2, MessageSquare, HelpCircle, Mail];

export default function StreetNav() {
  const { progress, activeIdx } = useScrollProgress(sectionIds);
  const { t } = useTranslation();

  const labels = [
    t.nav.inici,
    t.nav.clients,
    t.nav.projectes,
    t.nav.opinions,
    t.nav.faq,
    t.nav.contacte,
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Navegació de seccions"
      className="fixed bottom-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-md border-t border-line"
    >
      {/* Barra de progrés */}
      <div className="relative h-0.5 bg-line overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-amber transition-[width] duration-75 ease-linear"
          style={{ width: `${progress * 100}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        {sectionIds.map((id, i) => {
          const Icon = icons[i];
          const label = labels[i];
          const isActive = activeIdx === i;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors duration-200 ${
                isActive ? "text-amber" : "text-stone hover:text-ink-soft"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} aria-hidden="true" />
              <span className="hidden sm:block font-mono text-[9px] uppercase tracking-widest leading-none">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}