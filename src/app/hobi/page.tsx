import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section, { Chips } from "@/components/Section";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "Hobi",
  description: "Ramazan Akyol — FiveM scriptleri ve Ducks Community.",
};

export default function Hobby() {
  const { hobby } = site;
  const { community } = hobby;

  return (
    <>
      <SiteHeader current="hobby" />

      <main className="mx-auto w-full max-w-5xl px-6">
        <div className="rise pb-20 pt-16 sm:pt-24 lg:pt-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">Boş zamanlarım</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">
            FiveM ve{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em]">Ducks Community</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">{hobby.lead}</p>
        </div>

        {/* Motto bandı */}
        <figure
          className="rise relative overflow-hidden rounded-2xl border border-line bg-surface/60 px-6 py-12 sm:px-12 sm:py-16"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/[0.04] blur-3xl"
          />
          <blockquote className="relative font-serif text-3xl leading-tight text-fg sm:text-5xl">
            “{community.motto.plain}{" "}
            <span className="italic text-subtle">{community.motto.accent}</span>”
          </blockquote>
          <figcaption className="relative mt-5 font-mono text-xs text-subtle">
            — {community.name} sloganı
          </figcaption>
        </figure>

        <div className="mt-16">
          <Section index="01" label={community.name} delay={160}>
            <p>{community.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm text-subtle">Rolüm:</span>
              <Chips items={community.roles} />
            </div>
            <p className="mt-5">{community.role}</p>
            <ExternalLink href={community.url} className="link mt-5">
              {community.urlLabel}
            </ExternalLink>
          </Section>

          <Section index="02" label="Kullandıklarım" delay={220}>
            <Chips items={hobby.tools} />
          </Section>
        </div>

        <div className="pt-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Hakkımda
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
