import React from "react";
import { site } from "@/data/portfolio";
import ExternalLink from "@/components/ExternalLink";

export default function SocialConnectCard() {
  const instagramUrl = site.instagram || "https://instagram.com/akyolm383";

  return (
    <div className="bento-card min-w-0 p-6 sm:p-7 flex flex-col justify-between group border-line bg-surface/75 hover:bg-surface/95 hover:border-zinc-700/80 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] transition-all duration-300">
      <div className="space-y-4">
        {/* Üst Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span>DİJİTAL AĞ & İLETİŞİM</span>
          </div>

          <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Açık</span>
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            Bağlantı Kurun
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
            Staj, finansal analitik iş birlikleri veya FiveM mekanikleri için ulaşabilirsiniz.
          </p>
        </div>

        {/* Bağlantı Listesi */}
        <div className="space-y-2 pt-1">
          {/* LinkedIn Linki */}
          <ExternalLink
            href={site.linkedin}
            className="flex items-center justify-between p-3 rounded-xl bg-surface border border-line hover:border-sky-500/40 hover:bg-sky-950/15 group/item transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-800/40 text-[#0A66C2] group-hover/item:text-sky-300 transition-colors shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium text-white group-hover/item:text-sky-300 transition-colors">
                  LinkedIn
                </div>
                <div className="text-[11px] font-mono text-subtle truncate">
                  in/ramazan-akyol-6b58a3302
                </div>
              </div>
            </div>
            <span className="text-subtle group-hover/item:text-sky-300 text-xs transition-colors shrink-0 font-mono">
              ↗
            </span>
          </ExternalLink>

          {/* Instagram Linki */}
          <ExternalLink
            href={instagramUrl}
            className="flex items-center justify-between p-3 rounded-xl bg-surface border border-line hover:border-pink-500/40 hover:bg-pink-950/15 group/item transition-all"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-lg bg-pink-950/40 border border-pink-800/40 text-[#E1306C] group-hover/item:text-pink-300 transition-colors shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium text-white group-hover/item:text-pink-300 transition-colors">
                  Instagram
                </div>
                <div className="text-[11px] font-mono text-subtle truncate">
                  @akyolm383
                </div>
              </div>
            </div>
            <span className="text-subtle group-hover/item:text-pink-300 text-xs transition-colors shrink-0 font-mono">
              ↗
            </span>
          </ExternalLink>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-xs">
        <span className="text-subtle font-mono text-[11px]">E-Posta</span>
        <a
          href={`mailto:${site.email}`}
          className="text-zinc-300 hover:text-white font-mono text-xs transition-colors truncate"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}
