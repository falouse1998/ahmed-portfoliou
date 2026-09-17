"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ActionLink } from "@/components/ui/Button";
import { Glyph } from "@/components/ui/Glyph";
import { site } from "@/lib/site";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <Section id="contact" grid>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden />
              <span className="mono text-[13px] text-accent">contact</span>
            </div>
            <h2 className="mt-5 text-[length:var(--text-h2)] font-semibold leading-[1.06] tracking-[-0.035em] balance">
              Need someone who can build the infrastructure and stay on call for it?
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-muted pretty">
              I read every message. Tell me what you are running, what is breaking or what you want to
              build, and I will tell you straight whether I am the right engineer for it.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-9 flex flex-wrap items-center gap-3">
            <ActionLink href={`mailto:${site.email}`} variant="solid" icon={<Glyph name="mail" />}>
              Send an email
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
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <div className="ticked border border-line bg-surface/50">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="mono text-[11.5px] text-muted">availability</span>
                <span className="mono flex items-center gap-1.5 text-[11px] text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden />
                  open
                </span>
              </div>

              <dl className="divide-y divide-line">
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <dt className="mono text-[12px] text-dim">based in</dt>
                  <dd className="text-[14px]">{site.location}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <dt className="mono text-[12px] text-dim">open to</dt>
                  <dd className="text-right text-[14px]">Remote roles and relocation</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 px-5 py-4">
                  <dt className="mono text-[12px] text-dim">focus</dt>
                  <dd className="text-right text-[14px]">Cloud platforms, Kubernetes, delivery</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={copy}
                aria-label={`Copy email address ${site.email}`}
                className="group flex w-full items-center justify-between gap-4 border-t border-line px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
              >
                <span className="mono truncate text-[13px] text-fg">{site.email}</span>
                <span
                  aria-live="polite"
                  className="mono flex shrink-0 items-center gap-1.5 text-[11.5px] text-dim group-hover:text-fg"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="flex items-center gap-1.5 text-ok"
                      >
                        <Glyph name="check" className="h-3.5 w-3.5" />
                        copied
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18 }}
                        className="flex items-center gap-1.5"
                      >
                        <Glyph name="copy" className="h-3.5 w-3.5" />
                        copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
