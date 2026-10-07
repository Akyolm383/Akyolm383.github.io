import { site } from "@/data/portfolio";

/**
 * Kimlik kartı: kişiyi bir Lua tablosu olarak gösterir — finans + FiveM'i
 * tek bakışta birleştiren imza parça. Değerler portfolio.ts'den gelir.
 */

type Tok = { t: string; c?: "key" | "str" | "num" | "kw" | "dim" };
type Line = Tok[];

const str = (s: string): Tok => ({ t: `"${s}"`, c: "str" });
const indent = (n = 1): Tok => ({ t: "  ".repeat(n) });

function buildLines(): Line[] {
  const { education } = site.home;
  return [
    [{ t: "local", c: "kw" }, { t: " ramazan = {" }],
    [indent(), { t: "odak", c: "key" }, { t: " = " }, str("Finans & Bankacılık"), { t: "," }],
    [indent(), { t: "okul", c: "key" }, { t: " = " }, str(education.schoolShort), { t: "," }],
    [indent(), { t: "bolum", c: "key" }, { t: " = " }, str(education.program), { t: "," }],
    [indent(), { t: "sinif", c: "key" }, { t: " = " }, { t: String(education.year), c: "num" }, { t: "," }],
    [indent(), { t: "sehir", c: "key" }, { t: " = " }, str(site.city), { t: "," }],
    [
      indent(),
      { t: "hobi", c: "key" },
      { t: " = { " },
      str("FiveM Scripting"),
      { t: ", " },
      str("Ducks Community"),
      { t: " }," },
    ],
    [{ t: "}" }],
    [],
    [{ t: "-- finansı okuyorum, kodu hobi olarak yazıyorum", c: "dim" }],
    [{ t: "return", c: "kw" }, { t: " ramazan" }],
  ];
}

const color: Record<NonNullable<Tok["c"]>, string> = {
  key: "text-code-key",
  str: "text-code-str",
  num: "text-code-num",
  kw: "text-code-kw",
  dim: "text-code-dim italic",
};

export default function IdentityCard() {
  const lines = buildLines();
  return (
    <figure
      aria-label="Ramazan Akyol hakkında özet, Lua kodu biçiminde"
      className="relative w-full max-w-full min-w-0 overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] backdrop-blur-sm"
    >
      {/* Üst kenarda ince ışık çizgisi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <figcaption className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="ml-2 font-mono text-xs text-subtle">ramazan.lua</span>
      </figcaption>
      <pre className="w-full max-w-full overflow-x-auto px-4 py-5 font-mono text-[12px] leading-6 text-muted sm:px-5 sm:text-[13px]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="flex">
              <span aria-hidden="true" className="mr-4 w-4 shrink-0 select-none text-right text-code-dim/70">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.map((tok, j) => (
                  <span key={j} className={tok.c ? color[tok.c] : undefined}>
                    {tok.t}
                  </span>
                ))}
                {i === lines.length - 1 && (
                  <span aria-hidden="true" className="caret ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] bg-fg/70" />
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
