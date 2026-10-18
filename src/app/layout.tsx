import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/layout/StickyHeader";
import StreetNav from "@/components/layout/StreetNav";
import { TranslationProvider } from "@/context/TranslationContext";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Janai Gutierrez — Webs per a negocis locals",
  description:
    "Dissenyo webs per a cafeteries, botigues i allotjaments a Catalunya. Sense tecnicismes. Sense sorpreses. Que et trobin. Que et truquin.",
  keywords: [
    "crear pàgina web negoci local",
    "web per a cafeteria",
    "disseny web Caldes de Montbui",
    "disseny web Barcelona",
    "web per a negoci local Catalunya",
    "web per a allotjament rural",
  ],
  authors: [{ name: "Janai Gutierrez" }],
  openGraph: {
    title: "Janai Gutierrez — Webs per a negocis locals",
    description:
      "Que et trobin. Que et truquin. Webs per a cafeteries, botigues i allotjaments, sense tecnicismes.",
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
  name: "Janai Gutierrez — Disseny web",
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
    "Dissenyo webs per a cafeteries, botigues i allotjaments a Catalunya. Sense tecnicismes. Sense sorpreses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${bricolageGrotesque.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <TranslationProvider>
          <StickyHeader />
          <main className="flex-1">{children}</main>
          <StreetNav />
        </TranslationProvider>
      </body>
    </html>
  );
}