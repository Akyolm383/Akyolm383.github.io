import Link from "next/link";
import { site } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ExternalLink from "@/components/ExternalLink";
import IdentityCard from "@/components/IdentityCard";
import IstanbulCard from "@/components/IstanbulCard";
import DiscordCard from "@/components/DiscordCard";
import SpotifyCard from "@/components/SpotifyCard";
import LinkedInCard from "@/components/LinkedInCard";
import InstagramCard from "@/components/InstagramCard";

export default function Home() {
  const { home, hobby } = site;
  const { community } = hobby;

  return (
    <>
      <SiteHeader current="home" />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* 1. Hero Başlığı */}
        <div className="rise pb-14 pt-16 sm:pt-24 lg:pt-28">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-wider text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0" />
            <span>Bankacılık & Sigortacılık</span>
            <span className="text-zinc-600">·</span>
            <span>FiveM Geliştirici</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          <p className="mt-4 font-serif text-2xl leading-tight text-fg/90 sm:text-4xl">
            {home.tagline.plain} <span className="italic text-subtle">{home.tagline.accent}</span>
          </p>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
            {home.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-fg px-5 py-2.5 font-medium text-bg shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_8px_30px_-8px_rgb(255_255_255/0.35)] transition-all hover:-translate-y-px hover:shadow-[0_0_0_1px_rgb(255_255_255/0.2),0_12px_36px_-8px_rgb(255_255_255/0.45)]"
            >
              E-posta gönder
            </a>

            <ExternalLink href={site.linkedin} className="text-muted hover:text-fg text-sm">
              LinkedIn
            </ExternalLink>


            {site.cvUrl && (
              <ExternalLink href={site.cvUrl} className="text-muted hover:text-fg text-sm">
                Özgeçmiş (PDF)
              </ExternalLink>
            )}
          </div>
        </div>

        {/* 2. Bento Grid Alanı */}
        <div className="rise space-y-5" style={{ "--d": "100ms" } as React.CSSProperties}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 min-w-0">
            
            {/* Bento Kart 1: Ducks Community (Geniş Öne Çıkan Kart) */}
            <div className="lg:col-span-8 min-w-0 bento-card p-6 sm:p-8 flex flex-col justify-between group border-purple-500/25 hover:border-purple-400/40 shadow-[inset_0_0_35px_-10px_rgba(168,85,247,0.18),0_0_20px_-10px_rgba(168,85,247,0.12)] hover:shadow-[inset_0_0_45px_-8px_rgba(168,85,247,0.25),0_0_25px_-8px_rgba(168,85,247,0.2)] transition-all">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/60 border border-purple-800/50 text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    <span>Aktif Ekip Projesi (3 Kişi)</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                    <span>Whitelist Kapalı</span>
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {community.name}
                  </h2>
                  <p className="mt-2 font-serif text-lg sm:text-xl text-zinc-300 leading-snug">
                    “{community.motto.plain} <span className="italic text-purple-300">{community.motto.accent}</span>”
                  </p>
                </div>

                <p className="text-sm text-muted leading-relaxed max-w-2xl">
                  {community.summary} 3 kişilik çekirdek geliştirici ekibi olarak sunucunun scriptlerini ve yönetimini birlikte yürütüyoruz.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2 text-xs">
                  {community.roles.map((r) => (
                    <span key={r} className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-300">
                      {r}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-400">Lua</span>
                  <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-400">QBCore</span>
                </div>

                <ExternalLink
                  href={community.url}
                  className="inline-flex items-center gap-1 text-sm font-medium text-white group-hover:text-purple-300"
                >
                  <span>{community.urlLabel}</span>
                </ExternalLink>
              </div>
            </div>

            {/* Bento Kart 2: İstanbul Card */}
            <div className="lg:col-span-4 min-w-0 flex">
              <div className="w-full min-w-0">
                <IstanbulCard />
              </div>
            </div>

            {/* Bento Kart 3: Discord Canlı Durumu */}
            <div className="lg:col-span-4 min-w-0 flex">
              <div className="w-full min-w-0">
                <DiscordCard />
              </div>
            </div>

            {/* Bento Kart 4: Spotify Çalan Parça / Vibe */}
            <div className="lg:col-span-4 min-w-0 flex">
              <div className="w-full min-w-0">
                <SpotifyCard />
              </div>
            </div>

            {/* Bento Kart 5: Üniversite & Eğitim */}
            <div className="lg:col-span-4 min-w-0 bento-card p-6 sm:p-7 flex flex-col justify-between group border-amber-500/20 hover:border-amber-400/35 shadow-[inset_0_0_35px_-10px_rgba(245,158,11,0.14),0_0_20px_-10px_rgba(245,158,11,0.08)] hover:shadow-[inset_0_0_45px_-8px_rgba(245,158,11,0.2),0_0_25px_-8px_rgba(245,158,11,0.15)] transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-subtle">
                  <span>AKADEMİK GEÇMİŞ</span>
                  <span className="px-2 py-0.5 rounded text-[11px] bg-white/[0.05] border border-line text-zinc-300">
                    {home.education.year}. Sınıf
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {home.education.program}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {home.education.school}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Bankacılık ve sigortacılık temelleri, finansal okuryazarlık ve piyasa mekanizmalarını öğreniyorum.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-1.5 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-line text-zinc-300">Temel Bankacılık</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-line text-zinc-300">Sigorta Esasları</span>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-line text-zinc-300">MS Excel</span>
              </div>
            </div>

            {/* Bento Kart 6: LinkedIn Kartı */}
            <div className="lg:col-span-6 min-w-0 flex">
              <div className="w-full min-w-0">
                <LinkedInCard />
              </div>
            </div>

            {/* Bento Kart 7: Instagram Kartı */}
            <div className="lg:col-span-6 min-w-0 flex">
              <div className="w-full min-w-0">
                <InstagramCard />
              </div>
            </div>

            {/* Bento Kart 8: Beceriler & Araçlar (Geniş 3 Sütunlu) */}
            <div className="lg:col-span-12 min-w-0 bento-card p-6 sm:p-8 border-emerald-500/15 hover:border-emerald-400/30 shadow-[inset_0_0_40px_-15px_rgba(16,185,129,0.12),0_0_20px_-10px_rgba(16,185,129,0.06)] hover:shadow-[inset_0_0_50px_-10px_rgba(16,185,129,0.18),0_0_25px_-8px_rgba(16,185,129,0.12)] transition-all">
              <div className="flex items-center justify-between text-xs font-mono text-subtle mb-6">
                <span>02 · YETENEKLER & ARAÇLAR</span>
                <span className="text-emerald-400">AKTİF KULLANIM</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {home.skills.map((group) => (
                  <div key={group.title} className="space-y-2.5">
                    <span className="text-xs text-subtle font-mono uppercase tracking-wider block">{group.title}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface border border-line text-zinc-200 transition-colors hover:border-line-strong hover:bg-zinc-800/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Kart 7: ramazan.lua (İmza Kod Kartı) */}
            <div className="lg:col-span-12 min-w-0">
              <IdentityCard />
            </div>

          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
