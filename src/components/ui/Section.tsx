import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
  grid = false,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt relative rule-top", className)}>
      {grid ? (
        <div
          aria-hidden
          className="blueprint pointer-events-none absolute inset-0 opacity-[0.45] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
        />
      ) : null}
      <div className="shell relative py-20 sm:py-28 lg:py-32">{children}</div>
    </section>
  );
}

/**
 * Section headers share one anatomy: a lowercase machine label, the heading,
 * and an optional line of orientation. The label is set in mono because it
 * names a route on the page, not because small text should look technical.
 */
export function SectionHead({
  label,
  title,
  note,
  className,
}: {
  label: string;
  title: ReactNode;
  note?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-line-strong" aria-hidden />
        <span className="mono text-[13px] text-accent">{label}</span>
      </div>
      <h2 className="mt-5 text-[length:var(--text-h2)] font-semibold leading-[1.08] tracking-[-0.03em] balance">
        {title}
      </h2>
      {note ? <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted pretty">{note}</p> : null}
    </Reveal>
  );
}
