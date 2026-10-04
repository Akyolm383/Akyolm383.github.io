"use client";

import { useEffect, useState } from "react";

/** İstanbul saatini gösterir. Sunucu çıktısında "--:--" yazar, tarayıcıda dolar. */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Istanbul",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time ?? "--:--"}</span>;
}
