/** Yeni sekmede açılan link + küçük ok. Ok ekran okuyuculardan gizli, yerine metin var. */
export default function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 transition-colors ${className}`}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="size-3 opacity-60 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
      <span className="sr-only">(yeni sekmede açılır)</span>
    </a>
  );
}
