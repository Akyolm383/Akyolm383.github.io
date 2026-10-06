"use client";

import { useEffect, useState } from "react";

export interface LanyardActivity {
  id: string;
  name: string;
  type: number;
  state?: string;
  details?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
}

export interface LanyardSpotify {
  track_id: string;
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  timestamps: {
    start: number;
    end: number;
  };
}

export interface LanyardData {
  discord_status: "online" | "idle" | "dnd" | "offline";
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name?: string;
  };
  activities: LanyardActivity[];
  listening_to_spotify: boolean;
  spotify: LanyardSpotify | null;
}

export function useLanyard(userId: string | undefined) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    let ws: WebSocket | null = null;
    let heartbeatTimer: NodeJS.Timeout | null = null;

    // 1. İlk yükleme için anında REST çağrısı
    fetch(`https://api.lanyard.rest/v1/users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        if (isMounted && json?.success && json?.data) {
          setData(json.data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    // 2. Canlı anlık güncellemeler için WebSocket
    const connectWS = () => {
      try {
        const socket = new WebSocket("wss://api.lanyard.rest/socket");
        ws = socket;

        socket.onmessage = (event) => {
          if (!isMounted) return;
          try {
            const msg = JSON.parse(event.data);

            if (msg.op === 1) {
              // Hello -> heartbeat başlat ve subscribe ol
              const interval = msg.d.heartbeat_interval;
              if (heartbeatTimer) clearInterval(heartbeatTimer);
              heartbeatTimer = setInterval(() => {
                if (socket.readyState === WebSocket.OPEN) {
                  socket.send(JSON.stringify({ op: 3 }));
                }
              }, interval);

              socket.send(
                JSON.stringify({
                  op: 2,
                  d: { subscribe_to_id: userId },
                })
              );
            } else if (msg.t === "INIT_STATE" || msg.t === "PRESENCE_UPDATE") {
              if (msg.d) {
                setData(msg.d);
                setLoading(false);
              }
            }
          } catch {
            // JSON parse hatası
          }
        };

        socket.onerror = () => {
          socket.close();
        };

        socket.onclose = () => {
          if (heartbeatTimer) clearInterval(heartbeatTimer);
          if (isMounted) {
            // 5 saniye sonra yeniden bağlanmayı dene
            setTimeout(connectWS, 5000);
          }
        };
      } catch {
        // WS bağlantı hatası
      }
    };

    connectWS();

    return () => {
      isMounted = false;
      if (heartbeatTimer) clearInterval(heartbeatTimer);
      if (ws) ws.close();
    };
  }, [userId]);

  return { data, loading };
}
