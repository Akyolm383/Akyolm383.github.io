import React from "react";
import { site } from "@/data/portfolio";
import ExternalLink from "@/components/ExternalLink";

export default function InstagramCard() {
  const instagramUrl = site.instagram || "https://instagram.com/akyolm383";

  return (
    <div className="bento-card min-w-0 p-6 sm:p-7 flex flex-col justify-between group border-[#E1306C]/30 hover:border-[#E1306C]/55 shadow-[inset_0_0_35px_-10px_rgba(225,48,108,0.22),0_0_20px_-10px_rgba(225,48,108,0.15)] hover:shadow-[inset_0_0_45px_-8px_rgba(225,48,108,0.32),0_0_25px_-8px_rgba(225,48,108,0.25)] transition-all">
      <div className="space-y-4">
        {/* Üst Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#E1306C]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>INSTAGRAM</span>
          </div>

          <span className="flex items-center gap-1.5 text-xs font-mono text-pink-400">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            <span>Sosyal</span>
          </span>
        </div>

        {/* Profil Bilgisi */}
        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-pink-300 transition-colors">
            {site.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-mono">
            @akyolm383
          </p>
          <p className="mt-2 text-xs text-muted leading-relaxed">
            Kişisel paylaşımlar, anlar ve sosyal bağlantı profili.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between text-xs">
        <span className="text-subtle font-mono text-[11px]">Sosyal Medya</span>
        <ExternalLink
          href={instagramUrl}
          className="text-pink-400 hover:text-pink-300 font-medium font-mono text-xs inline-flex items-center gap-1"
        >
          <span>Profili Gör</span>
          <span aria-hidden="true">↗</span>
        </ExternalLink>
      </div>
    </div>
  );
}
