/**
 * Sayfadaki her bölümün tek yerleşimi: masaüstünde solda numaralı etiket,
 * sağda içerik; mobilde alt alta. Kutu/kart yok — ayrım ince bir çizgiyle.
 */
export default function Section({
  index,
  label,
  children,
  delay = 0,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <section
      className="rise grid gap-4 border-t border-line py-10 sm:grid-cols-[11rem_1fr] sm:gap-10"
      style={{ "--d": `${delay}ms` } as React.CSSProperties}
    >
      <h2 className="flex items-baseline gap-3 text-sm text-fg">
        <span className="font-mono text-xs text-subtle">{index}</span>
        {label}
      </h2>
      <div className="min-w-0 text-[15px] leading-relaxed text-muted">{children}</div>
    </section>
  );
}

/** Küçük etiket listesi (yetenekler, araçlar). */
export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-white/[0.02] px-3 py-1 text-[13px] text-fg/85 transition-colors hover:border-line-strong hover:text-fg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
