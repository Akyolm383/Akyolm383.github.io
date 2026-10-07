import React from "react";
import Link from "next/link";
import { site } from "@/data/portfolio";
import ExternalLink from "@/components/ExternalLink";

export default function DucksCommunityCard() {
  const { community } = site.hobby;

  return (
    <div className="bento-card h-full min-w-0 p-6 sm:p-8 flex flex-col justify-between group border-line bg-surface/75 hover:bg-surface/95 hover:border-purple-500/40 hover:shadow-[inset_0_0_45px_-10px_rgba(168,85,247,0.18),0_20px_50px_-20px_rgba(168,85,247,0.12)] transition-all duration-300">
      <div className="space-y-4">
        {/* Üst Rozet Barı */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/40 border border-purple-800/40 text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>Okul Dışı Proje · FiveM</span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
            <span>Whitelist Kapalı</span>
          </span>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-purple-200/90 transition-colors">
            {community.name}
          </h2>
          <p className="mt-1.5 font-serif text-base sm:text-lg text-zinc-300 leading-snug">
            “{community.motto.plain} <span className="italic text-purple-300">{community.motto.accent}</span>”
          </p>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          {community.summary}
        </p>

        {/* Roller & Teknolojiler */}
        <div className="pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-subtle block mb-2">
            Roller & Altyapı
          </span>
          <div className="flex flex-wrap gap-1.5 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-300 font-medium">
              Geliştirici Ekibi
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-300 font-medium">
              10 Kişilik Komite
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-400">
              Lua
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-400">
              QBCore
            </span>
          </div>
        </div>
      </div>

      {/* Alt Linkler */}
      <div className="mt-6 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <Link
          href="/hobi/"
          className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
        >
          <span>Hobi Detayları</span>
          <span aria-hidden="true">→</span>
        </Link>

        <ExternalLink
          href={community.url}
          className="text-purple-300 hover:text-purple-200 font-medium inline-flex items-center gap-1"
        >
          <span>{community.urlLabel}</span>
          <span aria-hidden="true">↗</span>
        </ExternalLink>
      </div>
    </div>
  );
}
