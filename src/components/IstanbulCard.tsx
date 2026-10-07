"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import LocalTime from "@/components/LocalTime";

interface WeatherData {
  temp: number;
  text: string;
  isDay: boolean;
  code: number;
}

export default function IstanbulCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m,weather_code,is_day",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        if (!mounted || !data?.current) return;

        const code = Number(data.current.weather_code);
        const temp = Math.round(Number(data.current.temperature_2m));
        const isDay = Number(data.current.is_day) === 1;

        let text = "Açık";
        if (code === 0) text = isDay ? "Güneşli" : "Açık (Gece)";
        else if (code <= 3) text = "Parçalı Bulutlu";
        else if (code === 45 || code === 48) text = "Sisli";
        else if (code >= 51 && code <= 67) text = "Yağmurlu";
        else if (code >= 71 && code <= 77) text = "Karlı";
        else if (code >= 80 && code <= 82) text = "Sağanak";
        else if (code >= 95) text = "Fırtına";

        setWeather({ temp, text, isDay, code });
      } catch {
        // Gerçek veri çekilemezse uydurma veri gösterme
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600_000); // 10 dakikada bir güncelle
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const renderWeatherIcon = () => {
    if (!weather) return null;

    // Yağmur / Sağanak
    if ((weather.code >= 51 && weather.code <= 67) || (weather.code >= 80 && weather.code <= 82)) {
      return (
        <svg
          className="w-3.5 h-3.5 text-cyan-400 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="m9.2 16.5-1.4 3" />
          <path d="m14.2 16.5-1.4 3" />
        </svg>
      );
    }

    // Kar
    if (weather.code >= 71 && weather.code <= 77) {
      return (
        <svg
          className="w-3.5 h-3.5 text-blue-200 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m10 14.5-5 5" />
          <path d="m14 9.5 5-5" />
          <path d="m14 14.5 5 5" />
          <path d="m10 9.5-5-5" />
          <path d="M12 3v18" />
          <path d="M3 12h18" />
        </svg>
      );
    }

    // Bulutlu
    if (weather.code > 0 && weather.code <= 3) {
      return (
        <svg
          className="w-3.5 h-3.5 text-slate-300 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    }

    // Gece Açık (Hilal / Ay)
    if (!weather.isDay) {
      return (
        <svg
          className="w-3.5 h-3.5 text-indigo-300 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      );
    }

    // Gündüz Açık (Güneş)
    return (
      <svg
        className="w-3.5 h-3.5 text-amber-400 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  };

  return (
    <div className="bento-card h-full min-w-0 p-6 sm:p-7 flex flex-col justify-between group border-line bg-surface/75 hover:bg-surface/95 hover:border-cyan-500/40 hover:shadow-[inset_0_0_40px_-10px_rgba(6,182,212,0.18),0_20px_50px_-20px_rgba(6,182,212,0.15)] transition-all duration-300">
      <div className="space-y-4">
        {/* Üst Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-subtle">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-zinc-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>KONUM & DURUM</span>
          </div>
          <span className="text-emerald-400 font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            CANLI
          </span>
        </div>

        {/* Şehir & Canlı Saat */}
        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            İstanbul, Türkiye
          </h3>

          <div className="mt-2.5 flex items-baseline gap-2.5">
            <div className="font-mono text-3xl font-medium tracking-tight text-zinc-100">
              <LocalTime />
            </div>
            <span className="text-xs font-mono text-subtle">GMT+3 (TSİ)</span>
          </div>
        </div>

        {/* Canlı Hava Durumu & Koordinat Rozeti */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-line text-xs font-mono text-zinc-300">
            {loading ? (
              <span className="flex items-center gap-1.5 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Hava durumu alınıyor...</span>
              </span>
            ) : weather ? (
              <>
                {renderWeatherIcon()}
                <span>
                  {weather.temp}°C · {weather.text}
                </span>
              </>
            ) : (
              <span className="text-zinc-500">Hava durumu kapalı</span>
            )}
          </div>

          <span
            title="WGS84 Koordinatları (İstanbul)"
            className="px-2.5 py-1.5 rounded-lg bg-surface/60 border border-line/60 text-[11px] font-mono text-subtle"
          >
            41.0082° N, 28.9784° E
          </span>
        </div>

        <p className="text-xs text-muted leading-relaxed">
          Türkiye finans ve bankacılık sektörünün merkezinde; akademik çalışmalarımı ve projelerimi sürdürüyorum.
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-line flex items-center justify-between text-xs font-mono text-subtle">
        <span>ZAMAN DİLİMİ</span>
        <span className="text-cyan-400 font-medium">GMT+3 (TSİ)</span>
      </div>
    </div>
  );
}
