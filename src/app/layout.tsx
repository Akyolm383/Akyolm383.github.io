import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramazan Akyol — Bankacılık & Sigortacılık | FiveM Hobi Geliştiricisi",
  description: "Ramazan Akyol kişisel web sitesi. Bankacılık ve Sigortacılık öğrencisi, finans meraklısı ve FiveM Lua hobi geliştiricisi.",
  keywords: ["Ramazan Akyol", "Bankacılık ve Sigortacılık", "Finans", "FiveM", "Lua", "Portfolio", "CV"],
  authors: [{ name: "Ramazan Akyol" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-[#08090c] text-zinc-100 antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
