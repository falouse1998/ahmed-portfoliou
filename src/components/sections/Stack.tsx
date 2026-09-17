"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { stack } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Stack() {
  const [activeId, setActiveId] = useState(stack[0].id);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const reduced = useReducedMotion();

  const activeIndex = stack.findIndex((group) => group.id === activeId);
  const active = stack[activeIndex];

  const onKeyDown = (event: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = map[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (activeIndex + step + stack.length) % stack.length;
    setActiveId(stack[next].id);
    tabsRef.current[next]?.focus();
  };

  return (
    <Section id="stack" grid>
      <SectionHead
        label="stack"
        title="The tools, grouped by what they are for."
        note="Everything here has run in production, not only in a lab."
      />

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Technology categories"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="flex gap-px overflow-x-auto bg-line lg:col-span-4 lg:flex-col lg:overflow-visible"
        >
          {stack.map((group, i) => {
            const selected = group.id === activeId;
            return (
              <button
                key={group.id}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                role="tab"
                id={`tab-${group.id}`}
                aria-selected={selected}
                aria-controls={`panel-${group.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(group.id)}
                className={cn(
                  "relative shrink-0 bg-bg px-5 py-4 text-left transition-colors lg:px-6 lg:py-[1.35rem]",
                  selected ? "text-fg" : "text-muted hover:bg-surface hover:text-fg",
                )}
              >
                {selected ? (
                  <motion.span
                    layoutId="stack-active"
                    className="absolute inset-0 bg-surface"
                    transition={
                      reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 36 }
                    }
                  />
                ) : null}
                <span className="relative flex items-center gap-3 whitespace-nowrap">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors",
                      selected ? "bg-accent" : "bg-line-strong",
                    )}
                    aria-hidden
                  />
                  <span className="text-[15px] font-medium tracking-[-0.01em]">{group.label}</span>
                  <span className="mono ml-auto hidden text-[11.5px] text-dim lg:block">
                    {group.items.length}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="bg-bg p-6 sm:p-8 lg:col-span-8"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-muted">{active.note}</p>

              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, delay: reduced ? 0 : i * 0.035 }}
                    className="group flex items-center gap-3.5 rounded-lg border border-line bg-surface/50 px-4 py-4 transition-colors hover:border-line-strong"
                  >
                    <TechIcon
                      name={item.icon}
                      className="h-5 w-5 text-dim transition-colors group-hover:text-accent"
                    />
                    <span className="text-[14.5px] leading-tight">{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Reveal delay={0.1} className="mono mt-5 text-[12px] text-dim">
        also deployed and supported: kafka, mongodb, node.js and react services
      </Reveal>
    </Section>
  );
}
