import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950 text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-zinc-600" />
          <p>
            © {new Date().getFullYear()} {portfolioData.name}. Tüm hakları saklıdır.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="hover:text-white transition-colors"
          >
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
}
