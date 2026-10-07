import Link from "next/link";
import { site } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ExternalLink from "@/components/ExternalLink";
import EducationCard from "@/components/EducationCard";
import DucksCommunityCard from "@/components/DucksCommunityCard";
import IstanbulCard from "@/components/IstanbulCard";
import DiscordCard from "@/components/DiscordCard";
import SpotifyCard from "@/components/SpotifyCard";
import SkillsCard from "@/components/SkillsCard";
import SocialConnectCard from "@/components/SocialConnectCard";
import IdentityCard from "@/components/IdentityCard";

export default function Home() {
  const { home } = site;

  return (
    <>
      <SiteHeader current="home" />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        {/* 1. Hero Başlığı */}
        <div className="rise pb-12 pt-14 sm:pt-20 lg:pt-24">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs uppercase tracking-wider text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse shrink-0" />
            <span>Bankacılık &amp; Sigortacılık</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">FiveM Geliştirici (Hobi)</span>
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          <p className="mt-4 font-serif text-2xl leading-tight text-fg/90 sm:text-4xl">
            {home.tagline.plain}{" "}
            <span className="italic text-subtle font-normal">{home.tagline.accent}</span>
          </p>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
            {home.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-fg px-5 py-2.5 font-medium text-bg shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_8px_30px_-8px_rgb(255_255_255/0.35)] transition-all hover:-translate-y-px hover:shadow-[0_0_0_1px_rgb(255_255_255/0.2),0_12px_36px_-8px_rgb(255_255_255/0.45)]"
            >
              E-posta gönder
            </a>

            <ExternalLink
              href={site.linkedin}
              className="rounded-full border border-line bg-surface/60 px-4 py-2 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-mono"
            >
              LinkedIn ↗
            </ExternalLink>

            {site.instagram && (
              <ExternalLink
                href={site.instagram}
                className="rounded-full border border-line bg-surface/60 px-4 py-2 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-mono"
              >
                Instagram ↗
              </ExternalLink>
            )}

            {site.cvUrl && (
              <ExternalLink href={site.cvUrl} className="text-muted hover:text-fg text-sm ml-2">
                Özgeçmiş (PDF)
              </ExternalLink>
            )}
          </div>
        </div>

        {/* 2. Redesigned Bento Grid Alanı */}
        <div className="rise space-y-5 pb-16" style={{ "--d": "100ms" } as React.CSSProperties}>
          {/* 1. Sıra: İki Ana Sütun (Akademik Kariyer 7 cols + Ducks Community Hobi 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-w-0">
            <div className="lg:col-span-7 min-w-0 flex">
              <div className="w-full min-w-0">
                <EducationCard />
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0 flex">
              <div className="w-full min-w-0">
                <DucksCommunityCard />
              </div>
            </div>
          </div>

          {/* 2. Sıra: Canlı Telemetri / Live Pulse (3 x 4 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 min-w-0">
            <div className="lg:col-span-4 min-w-0 flex">
              <div className="w-full min-w-0">
                <IstanbulCard />
              </div>
            </div>

            <div className="lg:col-span-4 min-w-0 flex">
              <div className="w-full min-w-0">
                <DiscordCard />
              </div>
            </div>

            <div className="lg:col-span-4 min-w-0 flex">
              <div className="w-full min-w-0">
                <SpotifyCard />
              </div>
            </div>
          </div>

          {/* 3. Sıra: Yetenekler & Araçlar (7 cols) + Dijital Ağ & İletişim (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-w-0">
            <div className="lg:col-span-7 min-w-0 flex">
              <div className="w-full min-w-0">
                <SkillsCard />
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0 flex">
              <div className="w-full min-w-0">
                <SocialConnectCard />
              </div>
            </div>
          </div>

          {/* 4. Sıra: ramazan.lua (İmza Kod Kartı) (12 cols) */}
          <div className="min-w-0">
            <IdentityCard />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
