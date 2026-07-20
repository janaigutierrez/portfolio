"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import ca, { Translations } from "@/data/translations/ca";
import es from "@/data/translations/es";
import en from "@/data/translations/en";

type Language = "ca" | "es" | "en";

const translations: Record<Language, Translations> = { ca, es, en };

interface TranslationContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextValue>({
  lang: "ca",
  setLang: () => {},
  t: ca,
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ca");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <TranslationContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}