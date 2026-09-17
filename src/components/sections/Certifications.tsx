import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { certifications, site } from "@/lib/site";

function Badge({ code }: { code: string }) {
  return (
    <svg viewBox="0 0 88 96" className="h-[112px] w-[102px] shrink-0" aria-hidden>
      <path
        d="M44 3 82 25v46L44 93 6 71V25z"
        fill="var(--color-surface)"
        stroke="var(--color-line-strong)"
        strokeWidth="1.2"
      />
      <path
        d="M44 11 75 29v38L44 85 13 67V29z"
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <text
        x="44"
        y="53"
        textAnchor="middle"
        className="mono"
        fontSize="17"
        fill="var(--color-accent)"
        letterSpacing="0.5"
      >
        {code}
      </text>
      <text x="44" y="68" textAnchor="middle" className="mono" fontSize="8.5" fill="var(--color-dim)">
        certified
      </text>
    </svg>
  );
}

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHead
        label="certifications"
        title="Certified by Google Cloud, twice."
        note="Both exams cover the work directly: architecting on Google Cloud, and operating what you ship."
      />

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.code} delay={i * 0.08} className="bg-bg p-7 sm:p-10">
            <div className="flex items-start gap-7">
              <Badge code={cert.code} />
              <div>
                <div className="flex items-center gap-2 text-muted">
                  <TechIcon name="googlecloud" className="h-4 w-4" />
                  <span className="mono text-[12px]">{cert.issuer}</span>
                </div>
                <h3 className="mt-3 text-[1.3rem] font-semibold leading-tight tracking-[-0.025em]">
                  {cert.name}
                </h3>
                <p className="mt-3 max-w-[38ch] text-[14.5px] leading-relaxed text-muted pretty">
                  {cert.detail}
                </p>
              </div>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6">
              {cert.topics.map((topic) => (
                <li
                  key={topic}
                  className="mono rounded-full border border-line px-3 py-1 text-[11.5px] text-dim"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-5 text-[13.5px] text-dim">
        Credentials are listed on{" "}
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
        >
          LinkedIn
        </a>
        .
      </Reveal>
    </Section>
  );
}
