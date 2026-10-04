import Link from "next/link";
import { site } from "@/data/portfolio";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section, { Chips } from "@/components/Section";
import ExternalLink from "@/components/ExternalLink";
import IdentityCard from "@/components/IdentityCard";

export default function Home() {
  const { home } = site;

  return (
    <>
      <SiteHeader current="home" />

      <main className="mx-auto w-full max-w-5xl px-6">
        {/* Hero */}
        <div className="grid items-center gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:pt-28">
          <div className="rise">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
              Bankacılık & Sigortacılık · FiveM
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-4 font-serif text-3xl leading-tight text-fg/90 sm:text-4xl">
              {home.tagline.plain} <span className="italic text-subtle">{home.tagline.accent}</span>
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">{home.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-fg px-5 py-2.5 font-medium text-bg shadow-[0_0_0_1px_rgb(255_255_255/0.1),0_8px_30px_-8px_rgb(255_255_255/0.35)] transition hover:-translate-y-px hover:shadow-[0_0_0_1px_rgb(255_255_255/0.2),0_12px_36px_-8px_rgb(255_255_255/0.45)]"
              >
                E-posta gönder
              </a>
              <ExternalLink href={site.linkedin} className="text-muted hover:text-fg">
                LinkedIn
              </ExternalLink>
              {site.cvUrl && (
                <ExternalLink href={site.cvUrl} className="text-muted hover:text-fg">
                  Özgeçmiş (PDF)
                </ExternalLink>
              )}
            </div>
          </div>

          <div className="rise" style={{ "--d": "150ms" } as React.CSSProperties}>
            <IdentityCard />
          </div>
        </div>

        <Section index="01" label="Eğitim" delay={80}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-lg font-medium text-fg">{home.education.program}</p>
            <p className="font-mono text-xs text-subtle">{home.education.year}. sınıf · devam ediyor</p>
          </div>
          <p className="mt-1">{home.education.school}</p>
        </Section>

        <Section index="02" label="Yetenekler" delay={140}>
          <div className="space-y-5">
            {home.skills.map((g) => (
              <div key={g.title} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <p className="pt-1 text-sm text-subtle">{g.title}</p>
                <Chips items={g.items} />
              </div>
            ))}
          </div>
        </Section>

        <Section index="03" label="Boş zamanlarım" delay={200}>
          <p>{home.hobbyTeaser}</p>
          <Link href="/hobi/" className="link group mt-4 inline-flex items-center gap-1.5">
            Hobi sayfası
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
