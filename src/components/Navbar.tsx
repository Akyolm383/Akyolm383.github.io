"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  activeTab: "career" | "hobby";
  setActiveTab: (tab: "career" | "hobby") => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            setActiveTab("career");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 font-medium text-white transition-opacity hover:opacity-80 text-left"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
          <span className="tracking-tight text-sm font-semibold uppercase">
            {portfolioData.name.split(" ")[0]}
            <span className="text-zinc-500 font-normal ml-1">
              {portfolioData.name.split(" ")[1]}
            </span>
          </span>
        </button>

        {/* Dual Mode Switcher (Centered Pill) */}
        <div className="flex items-center p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-medium">
          <button
            onClick={() => {
              setActiveTab("career");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`relative px-3.5 py-1.5 rounded-lg transition-colors ${
              activeTab === "career" ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
            }`}
          >
            {activeTab === "career" && (
              <motion.div
                layoutId="navTabIndicator"
                className="absolute inset-0 bg-white rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>🏛️ Kariyer</span>
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab("hobby");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`relative px-3.5 py-1.5 rounded-lg transition-colors ${
              activeTab === "hobby" ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
            }`}
          >
            {activeTab === "hobby" && (
              <motion.div
                layoutId="navTabIndicator"
                className="absolute inset-0 bg-white rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>🕹️ Hobi</span>
            </span>
          </button>
        </div>

        {/* Right CTA (CV button) */}
        <div className="flex items-center gap-3">
          <a
            href={portfolioData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-white text-xs font-medium transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  );
}
