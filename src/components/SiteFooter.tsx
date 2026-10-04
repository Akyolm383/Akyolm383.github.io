import { site } from "@/data/portfolio";
import ExternalLink from "@/components/ExternalLink";

/** Sayfa sonu: büyük iletişim çağrısı + alt bilgi. */
export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-5xl px-6 pb-10 pt-28">
      <div className="rise border-t border-line pt-14">
        <p className="text-sm text-subtle">Bir sorun, bir fikrin ya da bir teklifin mi var?</p>
        <a
          href={`mailto:${site.email}`}
          className="group mt-4 inline-block font-serif text-4xl leading-[1.05] tracking-tight text-fg sm:text-6xl"
        >
          <span className="italic">Bana yaz</span>
          <span
            aria-hidden="true"
            className="ml-3 inline-block text-subtle transition-transform duration-300 group-hover:translate-x-2 group-hover:text-fg"
          >
            →
          </span>
        </a>
        <p className="mt-3 font-mono text-sm text-muted">{site.email}</p>
      </div>

      <div className="mt-16 flex flex-col gap-3 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="flex items-center gap-5">
          <ExternalLink href={site.linkedin} className="hover:text-fg">
            LinkedIn
          </ExternalLink>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
            E-posta
          </a>
        </div>
      </div>
    </footer>
  );
}
