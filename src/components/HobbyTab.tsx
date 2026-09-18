"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Gamepad2, ArrowUpRight, Terminal, ArrowLeft, Users2, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface HobbyTabProps {
  onSwitchToCareer: () => void;
}

export default function HobbyTab({ onSwitchToCareer }: HobbyTabProps) {
  const { hobby, socials } = portfolioData;
  const { featuredCommunity } = hobby;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* 1. Header & Context */}
      <div className="space-y-6 max-w-3xl">
        <button
          onClick={onSwitchToCareer}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white mb-2 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Öğrenci & Kariyer Profiline Dön</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-900/50 bg-purple-950/20 text-xs text-purple-300">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>{hobby.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          {hobby.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {hobby.intro}
        </p>

        {/* GitHub link */}
        <div className="pt-2 flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-white text-sm font-medium transition-all hover:border-zinc-700"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profilim (@Akyolm383)</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>

      {/* 2. Flagship Collaborative Project (Ducks Community) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <Users2 className="w-4 h-4 text-purple-400" />
          <span>Üzerinde Çalıştığım Aktif Ekip Projesi</span>
        </div>

        <div className="relative overflow-hidden p-7 sm:p-9 rounded-2xl border border-purple-900/40 bg-gradient-to-b from-purple-950/20 via-zinc-900/30 to-zinc-950/60 space-y-6 hover:border-purple-800/60 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-purple-300 bg-purple-950/80 border border-purple-800/60 px-3 py-1 rounded-full">
                <Sparkles className="w-3 h-3" />
                {featuredCommunity.role}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                {featuredCommunity.name}
              </h3>
              <p className="text-sm text-purple-200/90 font-medium italic">
                “{featuredCommunity.tagline}”
              </p>
            </div>

            <a
              href={featuredCommunity.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-lg shadow-purple-950/50"
            >
              <span>Siteyi Ziyaret Et</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
            {featuredCommunity.description}
          </p>

          <div className="pt-4 border-t border-zinc-800/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-3">
              Proje Özellikleri & Standartlar
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {featuredCommunity.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Technologies & Tools */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <Terminal className="w-4 h-4 text-zinc-400" />
          <span>Kullandığım Araçlar & Kütüphaneler</span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {hobby.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:border-zinc-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Own Open Source Scripts & Tools */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <Gamepad2 className="w-4 h-4 text-zinc-400" />
          <span>Geliştirdiğim Açık Kaynak Scriptler & Sistemler</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobby.projects.slice(1).map((proj, idx) => (
            <div
              key={proj.title}
              className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 flex flex-col justify-between space-y-5 hover:border-zinc-700 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>{proj.category}</span>
                  {proj.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-950/80 text-purple-300 border border-purple-800/60 font-sans font-medium">
                      {proj.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-800/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200 transition-colors ml-auto font-medium"
                    >
                      <span>{proj.linkLabel || "İncele"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Switch back banner */}
      <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/40 text-center space-y-3">
        <p className="text-sm text-zinc-300">
          Asıl eğitim ve akademik profilimi incelemek için:
        </p>
        <button
          onClick={onSwitchToCareer}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all"
        >
          <span>Öğrenci & Kariyer Sayfasına Geç</span>
        </button>
      </div>
    </motion.div>
  );
}
