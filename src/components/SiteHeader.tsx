import Link from "next/link";
import { site } from "@/data/portfolio";
import LocalTime from "@/components/LocalTime";

type Page = "home" | "hobby";

const links: { href: string; label: string; page: Page }[] = [
  { href: "/", label: "Hakkımda", page: "home" },
  { href: "/hobi/", label: "Hobi", page: "hobby" },
];

export default function SiteHeader({ current }: { current: Page }) {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 pt-7 sm:pt-9">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-fg transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <span className="hidden items-center gap-2 font-mono text-xs text-subtle sm:inline-flex">
          <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
          {site.city} <LocalTime />
        </span>
      </div>

      <nav aria-label="Ana menü" className="flex items-center gap-1 text-sm">
        {links.map((l) => {
          const active = l.page === current;
          return (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-3 py-1.5 transition-colors ${
                active ? "bg-white/[0.06] text-fg" : "text-subtle hover:text-fg"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        <a
          href={`mailto:${site.email}`}
          className="rounded-full px-3 py-1.5 text-subtle transition-colors hover:text-fg"
        >
          İletişim
        </a>
      </nav>
    </header>
  );
}
