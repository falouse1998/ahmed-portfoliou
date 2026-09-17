"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/site";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <Section id="experience">
      <SectionHead
        label="experience"
        title="Four years of production, in order."
        note="From hosting operations to cloud platforms — each role added a layer without dropping the one underneath."
      />

      <div ref={trackRef} className="relative mt-16">
        {/* the rail */}
        <div className="absolute left-0 top-2 hidden h-full w-px bg-line sm:block" aria-hidden>
          <motion.div
            className="h-full w-px origin-top bg-accent/70"
            style={{ scaleY: reduced ? 1 : progress }}
          />
        </div>

        <ol className="space-y-16 sm:pl-10">
          {experience.map((role, index) => (
            <Reveal as="li" key={role.company} delay={index * 0.05} className="relative">
              <span
                className="absolute -left-10 top-[9px] hidden h-2 w-2 -translate-x-[3.5px] rounded-full border border-accent bg-bg sm:block"
                aria-hidden
              />

              <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="mono text-[12px] text-accent">{role.period}</p>
                  <h3 className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-[-0.025em]">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-[14.5px] text-fg">{role.title}</p>
                  <p className="mono mt-2 text-[12px] text-dim">{role.location}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <li
                        key={tag}
                        className="mono rounded border border-line px-2 py-1 text-[11px] text-dim"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-8">
                  <p className="max-w-[58ch] text-[16px] leading-relaxed text-fg pretty">{role.lead}</p>
                  <ul className="mt-5 space-y-3">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3.5">
                        <span className="mt-[9px] h-px w-4 shrink-0 bg-line-strong" aria-hidden />
                        <span className="max-w-[62ch] text-[14.5px] leading-relaxed text-muted pretty">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
