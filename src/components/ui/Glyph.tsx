import { cn } from "@/lib/utils";

const glyphs = {
  download: "M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
  mail: "M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Zm1 .5 8 5.5L20 8",
  linkedin:
    "M5.5 8.5v10M5.5 4.8v.02M10.5 18.5v-10m0 3.2c0-1.8 1.3-3.2 3-3.2s3 1.4 3 3.2v6.8",
  copy: "M9 9V6.5A1.5 1.5 0 0 1 10.5 5h7A1.5 1.5 0 0 1 19 6.5v7a1.5 1.5 0 0 1-1.5 1.5H15M5 10.5A1.5 1.5 0 0 1 6.5 9h7a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 13.5 19h-7A1.5 1.5 0 0 1 5 17.5v-7Z",
  check: "m5 12.5 4.5 4.5L19 7",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  pin: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5.2-1.8L21 21",
  north: "M7 17 17 7M9 7h8v8",
} as const;

export type GlyphName = keyof typeof glyphs;

export function Glyph({ name, className }: { name: GlyphName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      className={cn("h-[1.05em] w-[1.05em] shrink-0", className)}
    >
      <path d={glyphs[name]} />
    </svg>
  );
}
