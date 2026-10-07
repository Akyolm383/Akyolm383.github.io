"use client";

import React from "react";
import { site } from "@/data/portfolio";
import { useLanyard } from "@/hooks/useLanyard";

export default function DiscordCard() {
  const { data, loading } = useLanyard(site.discordId);

  // Status mapping
  const status = data?.discord_status || "offline";
  const isOnline = status !== "offline";

  const statusConfig = {
    online: { label: "Çevrimiçi", color: "bg-emerald-400", text: "text-emerald-400" },
    idle: { label: "Boşta", color: "bg-amber-400", text: "text-amber-400" },
    dnd: { label: "Rahatsız Etmeyin", color: "bg-rose-500", text: "text-rose-400" },
    offline: { label: "Çevrimdışı", color: "bg-zinc-600", text: "text-zinc-500" },
  }[status];

  const username = data?.discord_user?.username || "akyolm383";
  const displayName =
    data?.discord_user?.global_name ||
    data?.discord_user?.username ||
    "Akyolm383";
  const avatarUrl = data?.discord_user?.avatar
    ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=128`
    : null;

  // Find non-Spotify activity
  const gameActivity = data?.activities?.find((a) => a.type !== 2 && a.type !== 4);
  const customStatus = data?.activities?.find((a) => a.type === 4);

  const activeDevice = data?.active_on_discord_desktop
    ? "Masaüstü Aktif"
    : data?.active_on_discord_mobile
    ? "Mobil Aktif"
    : data?.active_on_discord_web
    ? "Web Aktif"
    : isOnline
    ? "İstemci Aktif"
    : "Bağlantı Yok";

  return (
    <div className="bento-card h-full min-w-0 p-6 sm:p-7 flex flex-col justify-between group border-line bg-surface/75 hover:bg-surface/95 hover:border-[#5865F2]/45 hover:shadow-[inset_0_0_40px_-10px_rgba(88,101,242,0.2),0_20px_50px_-20px_rgba(88,101,242,0.18)] transition-all duration-300">
      <div className="space-y-4">
        {/* Üst Başlık */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <svg
              className="w-4 h-4 text-[#5865F2]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>DISCORD</span>
          </div>

          <span className={`flex items-center gap-1.5 text-xs font-mono shrink-0 ${statusConfig.text}`}>
            <span
              className={`w-2 h-2 rounded-full ${statusConfig.color} ${
                isOnline ? "animate-pulse" : ""
              }`}
            />
            <span>{loading ? "Bağlanıyor..." : statusConfig.label}</span>
          </span>
        </div>

        {/* Profil ve Bilgi */}
        <div className="flex items-center gap-3 pt-1">
          <div className="relative shrink-0">
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarUrl}
                alt={displayName}
                className="w-11 h-11 rounded-full border border-line bg-zinc-800 object-cover"
              />
            ) : (
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center font-mono text-base font-bold text-white border border-line">
                R
              </div>
            )}
            <span
              className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-surface ${statusConfig.color}`}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-white truncate">
              {displayName}
            </div>
            <div className="text-xs font-mono text-subtle truncate">
              @{username}
            </div>
          </div>
        </div>

        {/* Canlı Aktivite / Durum Kutusu */}
        <div className="rounded-xl bg-surface/90 border border-line p-3 space-y-1.5">
          {gameActivity ? (
            <>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 flex items-center gap-1.5 truncate">
                  <svg
                    className="w-3 h-3 text-purple-400 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="truncate">{gameActivity.name}</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 shrink-0">Oynuyor</span>
              </div>
              {gameActivity.details && (
                <p className="text-xs font-medium text-zinc-200 truncate">
                  {gameActivity.details}
                </p>
              )}
              {gameActivity.state && (
                <p className="text-[11px] text-muted truncate">
                  {gameActivity.state}
                </p>
              )}
            </>
          ) : customStatus ? (
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-subtle block uppercase">Özel Durum</span>
              <p className="text-xs font-medium text-zinc-200 truncate">
                {customStatus.state}
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-2.5 py-0.5">
              <div className="w-8 h-8 rounded-lg bg-surface border border-line flex items-center justify-center text-zinc-500 shrink-0">
                <svg
                  className="w-4 h-4 text-zinc-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-zinc-300 truncate">
                  {isOnline ? "Şu an oyun/uygulama açık değil" : "Discord çevrimdışı"}
                </p>
                <p className="text-[11px] text-subtle truncate">
                  {isOnline ? "İstemci arka planda çalışıyor" : "Bağlantı bekleniyor"}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Canlı Telemetri Rozetleri */}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[11px] font-mono">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface border border-line text-zinc-300">
            <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-emerald-400" : "bg-zinc-600"}`} />
            <span>{activeDevice}</span>
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-surface border border-line text-subtle truncate">
            Topluluk: Ducks
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-subtle">
        <span>LANYARD SOCKET</span>
        <span className="text-[#7983f5] font-medium">{isOnline ? "Canlı Senkronize" : "Bağlantı Hazır"}</span>
      </div>
    </div>
  );
}
