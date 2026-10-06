import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "Hobi — FiveM & Ducks Community",
  description: "Ramazan Akyol — FiveM script geliştirme, rol yapma sistemleri ve Ducks Community.",
};

export default function Hobby() {
  const { hobby } = site;
  const { community } = hobby;

  return (
    <>
      <SiteHeader current="hobby" />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="rise pb-16 pt-16 sm:pt-24 lg:pt-28">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-wider text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block animate-pulse shrink-0" />
            <span>Boş Zamanlarım</span>
            <span className="text-zinc-600">·</span>
            <span>FiveM & Scripting</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">
            FiveM ve{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-purple-300">
              Ducks Community
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
            {hobby.lead}
          </p>
        </div>

        {/* Ducks Community Motto & Atmosfer Vitrini */}
        <figure
          className="rise relative overflow-hidden rounded-2xl border border-line bg-surface/80 p-8 sm:p-12 shadow-2xl"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-purple-500/[0.08] blur-3xl"
          />

          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-purple-300 bg-purple-950/80 border border-purple-800/60 px-3 py-1 rounded-full">
                Los Santos Hard Roleplay
              </span>

              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Sunucu Aktif
              </span>
            </div>

            <blockquote className="font-serif text-3xl leading-tight text-fg sm:text-5xl max-w-3xl">
              “{community.motto.plain}{" "}
              <span className="italic text-purple-300">{community.motto.accent}</span>”
            </blockquote>

            <p className="text-sm text-muted leading-relaxed max-w-2xl">
              {community.summary}
            </p>

            <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs text-subtle font-mono block">PROJE ROLÜM</span>
                <p className="text-sm text-zinc-200">{community.role}</p>
              </div>

              <ExternalLink
                href={community.url}
                className="px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md"
              >
                <span>{community.urlLabel}</span>
              </ExternalLink>
            </div>
          </div>
        </figure>

        {/* Detay Kartları */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 rise" style={{ "--d": "160ms" } as React.CSSProperties}>
          {/* Kart 1: Ekip & Görev Dağılımı */}
          <div className="bento-card p-7 space-y-4">
            <div className="text-xs font-mono text-subtle uppercase">
              01 · ÇALIŞMA ALANLARIM
            </div>
            <h2 className="text-xl font-semibold text-white">
              Script Geliştirme & Yönetim
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Oyun içi mekanikler, ekonomi dengeleri ve sunucu tarafı optimizasyonlarında aktif olarak Lua scriptleri kodluyor ve topluluğun yönetim süreçlerini yürütüyorum.
            </p>
            <div className="pt-4 border-t border-line flex flex-wrap gap-1.5">
              {community.roles.map((r) => (
                <span key={r} className="px-3 py-1 rounded-lg text-xs bg-surface border border-line text-zinc-200 font-medium">
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Kart 2: Teknolojiler & Stack */}
          <div className="bento-card p-7 space-y-4">
            <div className="text-xs font-mono text-subtle uppercase">
              02 · KULLANDIĞIM ARAÇLAR
            </div>
            <h2 className="text-xl font-semibold text-white">
              Teknoloji Yığını
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              FiveM ekosisteminde oyun içi scriptler ve modern NUI arayüzleri geliştirirken kullandığım araçlar:
            </p>
            <div className="pt-4 border-t border-line flex flex-wrap gap-2">
              {hobby.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-surface border border-line text-zinc-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Geri Dönüş Linki */}
        <div className="mt-14 pt-8 border-t border-line flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Hakkımda sayfasına dön
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
