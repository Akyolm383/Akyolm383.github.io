"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, ArrowUpRight, Download, Mail, CheckCircle2, Building2, BookOpen } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

interface CareerTabProps {
  onSwitchToHobby: () => void;
}

export default function CareerTab({ onSwitchToHobby }: CareerTabProps) {
  const { career, cvUrl, socials, email } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* 1. Hero & Summary */}
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>{career.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          {career.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {career.intro}
        </p>

        {/* Primary Actions */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 active:scale-95 transition-all shadow-lg shadow-white/10"
          >
            <Download className="w-4 h-4" />
            <span>Özgeçmişimi İncele / İndir</span>
            <ArrowUpRight className="w-4 h-4 opacity-50" />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 text-zinc-200 text-sm font-medium transition-all hover:border-zinc-700"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/60 text-zinc-200 text-sm font-medium transition-all hover:border-zinc-700"
          >
            <Mail className="w-4 h-4" />
            <span>İletişim</span>
          </a>
        </div>
      </div>

      {/* 2. Education & Academic Background */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <GraduationCap className="w-4 h-4 text-zinc-400" />
          <span>Eğitim Durumu</span>
        </div>

        <div className="space-y-6">
          {career.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl border border-zinc-800/90 bg-zinc-900/20 space-y-4 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.school}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {edu.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
                {edu.description}
              </p>

              <div className="pt-3 border-t border-zinc-800/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-2.5">
                  Dersler & Temel Konular
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-zinc-500" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Honest Student Focus Areas */}
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          <BookOpen className="w-4 h-4 text-zinc-400" />
          <span>Gelişim & İlgi Alanları</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {career.focusAreas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 space-y-4 hover:border-zinc-700 transition-colors"
            >
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase font-mono border-b border-zinc-800/70 pb-3">
                {area.title}
              </h4>
              <ul className="space-y-2.5 text-sm text-zinc-300">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Subtle Hobby Bridge */}
      <div className="p-6 sm:p-7 rounded-2xl border border-zinc-800/60 bg-zinc-950/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-white">
            Boş Zamanlarımda Ne Yapıyorum?
          </p>
          <p className="text-xs text-zinc-400">
            Ducks Community ve FiveBazaar projelerinde FiveM için Lua scriptleri ve sistemler kodluyorum.
          </p>
        </div>
        <button
          onClick={onSwitchToHobby}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-xl bg-zinc-900/80 transition-all flex-shrink-0"
        >
          <span>FiveM & Hobi Bölümünü Aç</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
