"use client";

import React, { useEffect, useState } from "react";
import { site } from "@/data/portfolio";
import { useLanyard } from "@/hooks/useLanyard";
import ExternalLink from "@/components/ExternalLink";

function formatMs(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export default function SpotifyCard() {
  const { data, loading } = useLanyard(site.discordId);
  const spotify = data?.listening_to_spotify ? data.spotify : null;

  // Real-time ticking for progress bar
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (!spotify) return;

    const updateProgress = () => {
      const now = Date.now();
      const start = spotify.timestamps.start;
      const end = spotify.timestamps.end;
      const total = Math.max(1, end - start);
      const elapsed = Math.max(0, now - start);
      setCurrentProgress(Math.min(100, (elapsed / total) * 100));
    };

    updateProgress();
    const timer = setInterval(updateProgress, 1000);
    return () => clearInterval(timer);
  }, [spotify]);

  const elapsedMs = spotify ? Math.max(0, Date.now() - spotify.timestamps.start) : 0;
  const totalMs = spotify ? Math.max(1, spotify.timestamps.end - spotify.timestamps.start) : 0;

  return (
    <div className="bento-card min-w-0 p-6 sm:p-7 flex flex-col justify-between group border-[#1DB954]/30 hover:border-[#1DB954]/50 shadow-[inset_0_0_35px_-10px_rgba(29,185,84,0.22),0_0_20px_-10px_rgba(29,185,84,0.15)] hover:shadow-[inset_0_0_45px_-8px_rgba(29,185,84,0.3),0_0_25px_-8px_rgba(29,185,84,0.25)] transition-all">
      <div className="space-y-4">
        {/* Üst Başlık & Equalizer */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#1DB954]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span>{spotify ? "ŞU AN ÇALIYOR" : "SPOTIFY"}</span>
          </div>

          {/* Equalizer Çubukları */}
          <div className="flex items-end gap-1 h-4">
            <span
              className={`w-0.5 bg-[#1DB954] rounded-full ${
                spotify ? "equalizer-bar" : "h-1 opacity-40"
              }`}
            />
            <span
              className={`w-0.5 bg-[#1DB954] rounded-full ${
                spotify ? "equalizer-bar" : "h-1 opacity-40"
              }`}
            />
            <span
              className={`w-0.5 bg-[#1DB954] rounded-full ${
                spotify ? "equalizer-bar" : "h-1 opacity-40"
              }`}
            />
            <span
              className={`w-0.5 bg-[#1DB954] rounded-full ${
                spotify ? "equalizer-bar" : "h-1 opacity-40"
              }`}
            />
          </div>
        </div>

        {/* Albüm Kapağı & Şarkı Bilgisi */}
        {spotify ? (
          <>
            <div className="flex items-center gap-3.5 pt-1">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-900 flex-shrink-0 border border-line shadow-lg group-hover:scale-105 transition-transform">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={spotify.album_art_url}
                  alt={spotify.song}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white truncate group-hover:text-[#1DB954] transition-colors">
                  {spotify.song}
                </p>
                <p className="text-xs text-subtle truncate">{spotify.artist}</p>
              </div>
            </div>

            {/* İlerleme Çubuğu */}
            <div className="space-y-1 pt-1">
              <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1DB954] rounded-full transition-all duration-300"
                  style={{ width: `${currentProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>{formatMs(elapsedMs)}</span>
                <span>{formatMs(totalMs)}</span>
              </div>
            </div>
          </>
        ) : (
          <div className="py-2.5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-surface border border-line flex items-center justify-center text-zinc-600">
                <svg
                  className="w-5 h-5 text-zinc-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-300">
                  {loading ? "Bağlanıyor..." : "Şu an müzik dinlemiyor"}
                </p>
                <p className="text-xs text-subtle">Spotify kapalı veya duraklatıldı</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-subtle font-mono text-[11px]">
          {spotify ? "Canlı Yayın" : "Durum: Boşta"}
        </span>
        {spotify ? (
          <ExternalLink
            href={`https://open.spotify.com/track/${spotify.track_id}`}
            className="text-[#1DB954] hover:text-emerald-300 font-medium font-mono text-xs inline-flex items-center gap-1"
          >
            <span>Spotify'da Dinle</span>
            <span aria-hidden="true">↗</span>
          </ExternalLink>
        ) : (
          <ExternalLink
            href="https://open.spotify.com"
            className="text-subtle hover:text-fg font-mono text-xs inline-flex items-center gap-1"
          >
            <span>Spotify</span>
            <span aria-hidden="true">↗</span>
          </ExternalLink>
        )}
      </div>
    </div>
  );
}
