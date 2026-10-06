import React from "react";
import { site } from "@/data/portfolio";
import ExternalLink from "@/components/ExternalLink";

export default function LinkedInCard() {
  return (
    <div className="bento-card min-w-0 p-6 sm:p-7 flex flex-col justify-between group border-[#0A66C2]/30 hover:border-[#0A66C2]/55 shadow-[inset_0_0_35px_-10px_rgba(10,102,194,0.22),0_0_20px_-10px_rgba(10,102,194,0.15)] hover:shadow-[inset_0_0_45px_-8px_rgba(10,102,194,0.32),0_0_25px_-8px_rgba(10,102,194,0.25)] transition-all">
      <div className="space-y-4">
        {/* Üst Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#0A66C2]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LINKEDIN</span>
          </div>

          <span className="flex items-center gap-1.5 text-xs font-mono text-sky-400">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>Bağlantıya Açık</span>
          </span>
        </div>

        {/* Profil Bilgisi */}
        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-sky-300 transition-colors">
            {site.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-300">
            Bankacılık ve Sigortacılık · {site.home.education.schoolShort}
          </p>
          <p className="mt-2 text-xs text-muted leading-relaxed">
            Finans, risk yönetimi ve yazılım/topluluk geliştirme süreçleri için profesyonel profilim.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between text-xs">
        <span className="text-subtle font-mono text-[11px]">Kariyer & İletişim</span>
        <ExternalLink
          href={site.linkedin}
          className="text-sky-400 hover:text-sky-300 font-medium font-mono text-xs inline-flex items-center gap-1"
        >
          <span>Profili İncele</span>
          <span aria-hidden="true">↗</span>
        </ExternalLink>
      </div>
    </div>
  );
}
