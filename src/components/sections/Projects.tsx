"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MiniFlow } from "@/components/visuals/MiniFlow";
import { Glyph } from "@/components/ui/Glyph";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0].slug);
  const reduced = useReducedMotion();

  return (
    <Section id="work">
      <SectionHead
        label="work"
        title="Three platforms, and what it took to run them."
        note="Each of these is production infrastructure someone depends on. Open one to see the problem, the decisions and what changed."
      />

      <div className="mt-14 space-y-5">
        {projects.map((project, index) => {
          const isOpen = open === project.slug;
          const panelId = `project-${project.slug}`;

          return (
            <Reveal key={project.slug} delay={index * 0.06}>
              <article
                className={cn(
                  "ticked border bg-surface/40 transition-colors duration-300",
                  isOpen ? "border-line-strong bg-surface/70" : "border-line hover:border-line-strong",
                )}
              >
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="mono text-[11.5px] text-accent">{project.kind}</span>
                      <span className="mono text-[11.5px] text-dim">{project.period}</span>
                    </div>

                    <h3 className="mt-4 text-[1.8rem] font-semibold leading-none tracking-[-0.035em] sm:text-[2.15rem]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted">{project.role}</p>

                    <p className="mt-5 max-w-[56ch] text-[15.5px] leading-relaxed text-muted pretty">
                      {project.summary}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="mono rounded-full border border-line-strong px-3 py-1 text-[11.5px] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-lg border border-line bg-bg/60 p-3">
                      <MiniFlow kind={project.diagram} />
                    </div>
                  </div>
                </div>

                <div className="border-t border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : project.slug)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-white/[0.02] sm:px-8"
                  >
                    <span className="text-[14.5px] font-medium">
                      {isOpen ? "Hide the detail" : "How it was built"}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line-strong text-muted">
                      <Glyph name={isOpen ? "minus" : "plus"} className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        key="panel"
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 border-t border-line px-6 py-8 sm:px-8 lg:grid-cols-12">
                          <div className="lg:col-span-4">
                            <h4 className="mono text-[11.5px] text-dim">the problem</h4>
                            <p className="mt-3 text-[14.5px] leading-relaxed text-muted pretty">
                              {project.problem}
                            </p>
                            <h4 className="mono mt-7 text-[11.5px] text-dim">the outcome</h4>
                            <p className="mt-3 text-[14.5px] leading-relaxed text-fg pretty">
                              {project.outcome}
                            </p>
                          </div>

                          <div className="lg:col-span-8">
                            <h4 className="mono text-[11.5px] text-dim">what I built</h4>
                            <ul className="mt-3 space-y-3.5">
                              {project.work.map((item) => (
                                <li key={item} className="flex gap-3.5">
                                  <span
                                    className="mt-[9px] h-px w-4 shrink-0 bg-accent/60"
                                    aria-hidden
                                  />
                                  <span className="text-[14.5px] leading-relaxed text-muted pretty">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
