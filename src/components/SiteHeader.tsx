"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/data/portfolio";
import LocalTime from "@/components/LocalTime";
import F8Console from "@/components/F8Console";

type Page = "home" | "hobby";

const links: { href: string; label: string; page: Page }[] = [
  { href: "/", label: "Hakkımda", page: "home" },
  { href: "/hobi/", label: "Hobi", page: "hobby" },
];

export default function SiteHeader({ current }: { current: Page }) {
  const [consoleOpen, setConsoleOpen] = useState(false);

  // Global F8 / Tilde key listener to toggle console
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = e.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(e.target.tagName);
      if (e.key === "F8" || (e.key === "`" && !isInput)) {
        e.preventDefault();
        setConsoleOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Secret double-tap listener for mobile/touch on status dot
  const lastTapRef = React.useRef(0);
  const handleSecretTap = (e: React.SyntheticEvent) => {
    const now = Date.now();
    if (now - lastTapRef.current < 450) {
      e.preventDefault();
      setConsoleOpen((prev) => !prev);
      lastTapRef.current = 0;
    } else {
      lastTapRef.current = now;
    }
  };

  return (
    <>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-4 sm:px-6 pt-6 sm:pt-9 relative z-40">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              onClick={handleSecretTap}
              onTouchEnd={handleSecretTap}
              title=""
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 inline-block animate-pulse cursor-pointer select-none"
            />
            <Link
              href="/"
              className="text-xs sm:text-sm font-medium tracking-tight text-fg transition-opacity hover:opacity-70"
            >
              <span>{site.name}</span>
            </Link>
          </div>
          <span className="hidden items-center gap-2 font-mono text-xs text-subtle sm:inline-flex">
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            {site.city} <LocalTime />
          </span>
        </div>

        <nav aria-label="Ana menü" className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          {links.map((l) => {
            const active = l.page === current;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 transition-colors ${
                  active ? "bg-white/[0.08] text-fg font-medium" : "text-subtle hover:text-fg"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <a
            href={`mailto:${site.email}`}
            className="rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-subtle transition-colors hover:text-fg"
          >
            İletişim
          </a>
        </nav>
      </header>

      {/* F8 Console Modal */}
      <F8Console isOpen={consoleOpen} onClose={() => setConsoleOpen(false)} />
    </>
  );
}
