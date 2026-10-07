import React from "react";
import { site } from "@/data/portfolio";

export default function EducationCard() {
  const { education } = site.home;

  const highlights = [
    "Temel Bankacılık",
    "Sigorta Esasları",
    "Finansal Piyasalar",
    "MS Excel (Modelleme)",
    "Risk Analitiği",
    "Finansal Matematik",
  ];

  return (
    <div className="bento-card min-w-0 p-6 sm:p-8 flex flex-col justify-between group border-line bg-surface/75 hover:bg-surface/95 hover:border-amber-500/40 hover:shadow-[inset_0_0_45px_-10px_rgba(245,158,11,0.18),0_20px_50px_-20px_rgba(245,158,11,0.12)] transition-all duration-300">
      <div className="space-y-5">
        {/* Üst Rozet Barı */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-amber-950/40 border border-amber-800/40 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Ana Odak · Lisans Eğitimi</span>
          </span>

          <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-line text-xs font-mono text-zinc-300">
            {education.year}. Sınıf
          </span>
        </div>

        {/* Başlık & Bölüm */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight group-hover:text-amber-200/90 transition-colors">
            {education.program}
          </h2>
          <p className="mt-1.5 text-base sm:text-lg text-zinc-300 font-medium">
            {education.school}
          </p>
        </div>

        {/* Açıklama */}
        <p className="text-sm text-muted leading-relaxed max-w-2xl">
          Bankacılık ve sigortacılık temelleri, finansal okuryazarlık, piyasa mekanizmaları ve risk analitiğini öğreniyorum. Analitik düşünce yapısını ve disiplinli veri takibini kariyerimin merkezine alıyorum.
        </p>

        {/* Yetkinlik / Ders Başlıkları */}
        <div className="pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-subtle block mb-2.5">
            Akademik Odak & Araçlar
          </span>
          <div className="flex flex-wrap gap-1.5">
            {highlights.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-surface border border-line text-zinc-200 group-hover:border-zinc-700/80 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-8 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-subtle">
        <span>ÖĞRENİM DURUMU: AKTİF</span>
        <span className="text-zinc-400">İstanbul, Türkiye</span>
      </div>
    </div>
  );
}
