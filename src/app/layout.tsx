import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/data/portfolio";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

// latin-ext: ğ, ş, ı, İ gibi Türkçe karakterler için gerekli.
const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
});

// Başlıklardaki italik vurgu için.
const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
});

const description =
  "Ramazan Akyol — İstanbul Nişantaşı Üniversitesi Bankacılık ve Sigortacılık öğrencisi.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description,
  },
  twitter: {
    card: "summary",
    title: site.name,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-dvh bg-bg font-sans text-fg antialiased">
        <Spotlight />
        <div className="relative z-10 flex min-h-dvh flex-col">{children}</div>
      </body>
    </html>
  );
}
