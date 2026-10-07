import React from "react";
import { site } from "@/data/portfolio";

export default function SkillsCard() {
  const { skills } = site.home;

  return (
    <div className="bento-card h-full min-w-0 p-6 sm:p-8 flex flex-col justify-between group border-line bg-surface/75 hover:bg-surface/95 hover:border-emerald-500/40 hover:shadow-[inset_0_0_45px_-10px_rgba(16,185,129,0.16),0_20px_50px_-20px_rgba(16,185,129,0.12)] transition-all duration-300">
      <div className="space-y-5">
        {/* Üst Başlık */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-emerald-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m9 8 6 4-6 4Z" />
            </svg>
            <span>YETENEKLER & ARAÇLAR</span>
          </div>
          <span className="text-emerald-400 font-medium">AKTİF PRATİK</span>
        </div>

        {/* Gruplar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div key={group.title} className="space-y-2">
              <span className="text-xs text-subtle font-mono uppercase tracking-wider block">
                {group.title}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-surface border border-line text-zinc-200 group-hover:border-zinc-700/80 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-xs font-mono text-subtle">
        <span>KAPASİTE & YETKİNLİK</span>
        <span className="text-zinc-400">Sürekli Gelişim</span>
      </div>
    </div>
  );
}
