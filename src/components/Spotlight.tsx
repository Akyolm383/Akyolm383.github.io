"use client";

import { useEffect, useRef } from "react";

/**
 * İmleci takip eden yumuşak ışık. Sadece ince imleçli (mouse) cihazlarda ve
 * hareket azaltma tercihi kapalıyken çalışır. Görsel süs; içerik buna bağlı değil.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        el.dataset.on = "true";
      });
    };
    const onLeave = () => {
      el.dataset.on = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden="true" />;
}
