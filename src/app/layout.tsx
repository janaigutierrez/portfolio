import type { Metadata } from "next";
import { Schibsted_Grotesk, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";
import { TranslationProvider } from "@/context/TranslationContext";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

// Lletra manuscrita de les opinions dels clients (es pot substituir per la font pròpia del Janai)
const handTemp = Nanum_Pen_Script({
  variable: "--font-hand-temp",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://janai.dev"),
  title: "Janai Gutierrez - Webs i solucions digitals per a negocis",
  description:
    "Webs i eines digitals per a negocis i empreses que volen ser trobats a internet i estalviar-se feina. Des de Caldes de Montbui, per a tot Catalunya.",
  keywords: [
    "disseny web per a empreses",
    "pàgina web per a negocis",
    "solucions digitals per a negocis",
    "disseny web Caldes de Montbui",
    "disseny web Barcelona",
    "eines digitals a mida",
  ],
  authors: [{ name: "Janai Gutierrez" }],
  openGraph: {
    title: "Janai Gutierrez - Webs i solucions digitals per a negocis",
    description:
      "Webs i eines digitals per a negocis i empreses que volen ser trobats i estalviar-se feina.",
    url: "https://janai.dev",
    siteName: "janai.dev",
    locale: "ca_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Janai Gutierrez - Webs i solucions digitals",
  url: "https://janai.dev",
  email: "janaigs97@gmail.com",
  areaServed: {
    "@type": "State",
    name: "Catalunya",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Caldes de Montbui",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  priceRange: "€€",
  description:
    "Webs i eines digitals per a negocis i empreses que volen ser trobats a internet i estalviar-se feina. Des de Caldes de Montbui, per a tot Catalunya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${schibsted.variable} ${handTemp.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <TranslationProvider>
          <StickyHeader />
          <main className="flex-1">{children}</main>
        </TranslationProvider>
      </body>
    </html>
  );
}