"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/site";
import { Glyph } from "@/components/ui/Glyph";
import { cn } from "@/lib/utils";

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="shell flex justify-center pt-4 sm:pt-5">
        <nav
          aria-label="Sections"
          className={cn(
            "pointer-events-auto flex w-full max-w-3xl items-center gap-1 rounded-full border px-2 py-2 transition-all duration-300",
            lifted
              ? "border-line-strong bg-bg/80 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2 rounded-full pl-2 pr-3 py-1.5 text-[14px] font-semibold tracking-[-0.02em]"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-ok" />
              {reduced ? null : (
                <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-60" />
              )}
            </span>
            Ahmed Benhmida
          </a>

          <ul className="mx-auto hidden items-center gap-0.5 md:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-3 py-1.5 text-[13.5px] transition-colors",
                    active === item.id ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {active === item.id ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.cv}
            target="_blank"
            rel="noreferrer"
            className="ml-auto hidden h-9 shrink-0 items-center gap-2 rounded-full bg-fg px-4 text-[13.5px] font-medium text-bg transition-colors hover:bg-white md:inline-flex"
          >
            <Glyph name="north" />
            CV
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-muted md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed inset-0 top-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex h-full flex-col justify-center gap-1 pb-16">
              {nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  className="border-b border-line py-4 text-2xl font-medium tracking-[-0.02em]"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={site.cv}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * nav.length, duration: 0.35 }}
                className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-fg text-[15px] font-medium text-bg"
              >
                <Glyph name="north" />
                View CV
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
