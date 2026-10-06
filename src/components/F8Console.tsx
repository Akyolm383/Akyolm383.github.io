"use client";

import React, { useState, useEffect, useRef } from "react";
import { site } from "@/data/portfolio";

interface F8ConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: "system" | "user" | "success" | "error" | "info";
  text: string;
}

export default function F8Console({ isOpen, onClose }: F8ConsoleProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "system", text: "FiveM Client Console v2.4 initialized." },
    { type: "system", text: "Connected to session: Ramazan Akyol (İstanbul)." },
    { type: "info", text: "Komut listesini görmek için 'help' yazın. Kapatmak için F8 veya ESC tuşuna basın." },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Autofocus when console opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Scroll to bottom when logs change
  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs, isOpen]);

  // Escape key closes console
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    // Add user command to log
    const newLogs: LogEntry[] = [...logs, { type: "user", text: `> ${trimmed}` }];
    const cmd = trimmed.toLowerCase();

    if (cmd === "help") {
      newLogs.push({
        type: "info",
        text: "Kullanılabilir komutlar:\n  whoami    - Profil ve biyografi\n  ducks     - Ducks Community hakkında bilgi\n  skills    - Bildiğim teknolojiler ve araçlar\n  contact   - İletişim bilgileri (E-posta & LinkedIn)\n  matrix    - Eğlenceli siber akış\n  clear/cls - Konsol ekranını temizle\n  exit/quit - Konsolu kapat",
      });
    } else if (cmd === "whoami" || cmd === "info") {
      newLogs.push({
        type: "success",
        text: `Kullanıcı: ${site.name}\nBölüm: ${site.home.education.school} - ${site.home.education.program} (${site.home.education.year}. Sınıf)\nHobi: FiveM Script Developer & Ducks Community Yönetimi\nKonum: ${site.city}, Türkiye`,
      });
    } else if (cmd === "ducks") {
      newLogs.push({
        type: "success",
        text: `Ducks Community: ${site.hobby.community.motto.plain} ${site.hobby.community.motto.accent}\nRol: Geliştirici ekibi & 10 kişilik komite (Scripting & Yönetim)\nWeb: ${site.hobby.community.url}`,
      });
    } else if (cmd === "skills") {
      newLogs.push({
        type: "info",
        text: `Yazılım & FiveM: Lua, FiveM API, QBCore, HTML, CSS, JavaScript, Git\nOkul & Araçlar: MS Excel, MS Word, Sunucu Yönetimi`,
      });
    } else if (cmd === "contact") {
      newLogs.push({
        type: "success",
        text: `E-posta: ${site.email}\nLinkedIn: ${site.linkedin}`,
      });
    } else if (cmd === "matrix") {
      newLogs.push({
        type: "success",
        text: "01000110 01101001 01110110 01100101 01001101 00100000 01001100 01110101 01100001\n>> Los Santos'ta rol yapılmaz. Yaşanır. <<\n[STATUS: SYSTEM ONLINE]",
      });
    } else if (cmd === "clear" || cmd === "cls") {
      setLogs([]);
      setInput("");
      return;
    } else if (cmd === "exit" || cmd === "quit") {
      onClose();
      setInput("");
      return;
    } else {
      newLogs.push({
        type: "error",
        text: `Bilinmeyen komut: '${trimmed}'. Komut listesi için 'help' yazın.`,
      });
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(history[nextIndex]);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed flex flex-col max-h-[85vh]">
        {/* Konsol Üst Barı */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80 select-none">
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </span>
            <span className="text-zinc-400 font-medium ml-1 flex items-center gap-2">
              <span className="text-emerald-400 font-semibold">[FiveM Console]</span>
              <span className="text-zinc-500 text-[11px] hidden sm:inline">client-side / v2.4</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-zinc-500 hidden sm:inline">Kapatmak için: F8 / ESC</span>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white px-2 py-0.5 rounded hover:bg-zinc-800 transition-colors"
              aria-label="Konsolu Kapat"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Konsol Çıktı Alanı */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2 select-text">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                log.type === "system"
                  ? "text-zinc-500"
                  : log.type === "user"
                  ? "text-white font-semibold"
                  : log.type === "success"
                  ? "text-emerald-400"
                  : log.type === "error"
                  ? "text-rose-400"
                  : "text-zinc-300"
              }`}
            >
              {log.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Konsol Komut Girişi */}
        <div className="p-3 bg-zinc-900/50 border-t border-zinc-800 flex items-center gap-2">
          <span className="text-emerald-400 font-bold select-none">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDownInput}
            placeholder="Bir komut yazın (örn: help, ducks, whoami)..."
            className="flex-1 bg-transparent text-white outline-none border-none placeholder:text-zinc-600 font-mono text-xs sm:text-[13px]"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={() => handleCommand(input)}
            className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded text-xs transition-colors"
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
}
