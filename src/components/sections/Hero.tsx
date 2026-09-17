"use client";

import { motion, useReducedMotion } from "motion/react";
import { metrics, site } from "@/lib/site";
import { Topology } from "@/components/visuals/Topology";
import { Glyph } from "@/components/ui/Glyph";
import { ActionLink } from "@/components/ui/Button";

const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.85, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.35 + 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const reduced = useReducedMotion();
  const state = reduced ? "show" : undefined;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(90%_70%_at_20%_0%,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
      />

      <div className="shell relative grid gap-14 pb-16 pt-32 sm:pt-36 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-44">
        <div className="lg:col-span-7">
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface/70 py-1.5 pl-3 pr-4 backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inset-0 rounded-full bg-ok" />
              {reduced ? null : (
                <span className="absolute inset-0 animate-ping rounded-full bg-ok opacity-70" />
              )}
            </span>
            <span className="mono text-[12.5px] text-muted">{site.availability}</span>
          </motion.div>

          <h1 className="mt-7 text-[length:var(--text-display)] font-semibold leading-[0.95] tracking-[-0.045em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                variants={line}
                custom={0}
                initial="hidden"
                animate={state ?? "show"}
              >
                Ahmed
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                variants={line}
                custom={1}
                initial="hidden"
                animate={state ?? "show"}
              >
                Benhmida
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fade}
            custom={0}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mt-6 text-[length:var(--text-h3)] font-medium leading-snug tracking-[-0.02em] text-fg"
          >
            DevOps &amp; Cloud Infrastructure Engineer, and technical lead.
          </motion.p>

          <motion.ul
            variants={fade}
            custom={1}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mono mt-5 flex flex-wrap items-center gap-2 text-[12px] text-accent"
          >
            {["google cloud", "kubernetes", "terraform", "gitlab ci/cd", "vault"].map((item) => (
              <li
                key={item}
                className="rounded-full border border-accent/25 bg-accent/[0.06] px-2.5 py-1"
              >
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fade}
            custom={2}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mt-6 max-w-[54ch] text-[16.5px] leading-relaxed text-muted pretty"
          >
            {site.summary}
          </motion.p>

          <motion.div
            variants={fade}
            custom={3}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <ActionLink href="#work" variant="solid">
              View projects
            </ActionLink>
            <ActionLink href={site.cv} download variant="outline" icon={<Glyph name="download" />}>
              Download CV
            </ActionLink>
            <ActionLink
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              icon={<Glyph name="linkedin" />}
            >
              LinkedIn
            </ActionLink>
          </motion.div>

          <motion.p
            variants={fade}
            custom={4}
            initial={reduced ? false : "hidden"}
            animate="show"
            className="mono mt-8 flex items-center gap-2 text-[12.5px] text-dim"
          >
            <Glyph name="pin" className="h-3.5 w-3.5" />
            {site.location}
          </motion.p>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 lg:pt-6"
        >
          <figure className="ticked border border-line bg-surface/50 backdrop-blur-sm">
            <figcaption className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="mono text-[11.5px] text-muted">delivery path</span>
              <span className="mono flex items-center gap-1.5 text-[11px] text-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
                healthy
              </span>
            </figcaption>
            <div className="p-4">
              <Topology />
            </div>
          </figure>
        </motion.div>
      </div>

      <div className="shell relative">
        <dl className="grid grid-cols-2 gap-px overflow-hidden border-y border-line bg-line lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
              className="group bg-bg px-5 py-7 transition-colors hover:bg-surface"
            >
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block text-[2.1rem] font-semibold leading-none tracking-[-0.04em]">
                  {metric.value}
                </span>
                <span className="mt-2.5 block text-[13.5px] text-fg">{metric.label}</span>
                <span className="mt-1 block text-[12.5px] leading-snug text-dim">{metric.detail}</span>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
