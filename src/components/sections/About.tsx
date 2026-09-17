import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { education, languages, site } from "@/lib/site";

const capabilities = [
  {
    title: "Cloud platforms",
    body: "Google Cloud footprints written in Terraform — VPC, IAM, GKE node pools, remote state — so an environment is a file, not a memory.",
  },
  {
    title: "Delivery",
    body: "GitLab pipelines that take a commit to production: build, test, image, rollout, health check. No manual steps in the middle.",
  },
  {
    title: "Operations",
    body: "Linux, hosting, DNS, SSL and mail in production, and the incident response that goes with them at the hour it breaks.",
  },
  {
    title: "Leadership",
    body: "Technical direction for small teams: choosing the deployment model, writing the decisions down, reviewing the changes.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 lg:col-start-6 lg:row-start-1">
          <SectionHead
            label="about"
            title="Production is the only environment that counts."
            className="max-w-xl"
          />

          <Reveal delay={0.08} className="mt-8 space-y-5 text-[16px] leading-[1.7] text-muted pretty">
            <p>
              I build and operate the infrastructure other engineers deploy to. In practice that means
              Google Cloud described in Terraform, workloads running on GKE, pipelines in GitLab that
              carry a commit all the way to production, and secrets that live in Vault instead of a
              repository.
            </p>
            <p>
              I came to cloud work through Linux operations, and I think that is the right order. Before
              GKE there were production servers and 100+ client sites — DNS records, certificate
              renewals, mail deliverability, migrations run at night, and incidents where service has to
              come back first and the root cause second. That work sets your standard for what{" "}
              <span className="text-fg">ready</span> means.
            </p>
            <p>
              On DeepSocial and Agent4All I led the technical side: choosing how things get deployed,
              writing those decisions down so they outlast me, reviewing infrastructure changes, and
              keeping the team unblocked when production has an opinion of its own.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i} className="bg-bg p-6">
                <h3 className="text-[15px] font-medium tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-dim pretty">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:row-start-1">
          <Reveal>
            <figure className="ticked relative border border-line">
              <Image
                src={site.photo}
                alt="Ahmed Benhmida"
                width={1000}
                height={1250}
                sizes="(min-width: 1024px) 460px, 100vw"
                className="w-full object-cover"
              />
              <figcaption className="flex items-center justify-between border-t border-line bg-surface px-4 py-3">
                <span className="mono text-[11.5px] text-fg">ahmed benhmida</span>
                <span className="mono text-[11px] text-dim">tunis, tn</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 border-t border-line pt-6">
            <h3 className="mono text-[12px] text-dim">education</h3>
            <ul className="mt-3 space-y-3">
              {education.map((item) => (
                <li key={item.school} className="flex gap-4">
                  <span className="mono shrink-0 pt-0.5 text-[12px] text-accent">{item.year}</span>
                  <span className="text-[14px] leading-snug">
                    <span className="block text-fg">{item.award}</span>
                    <span className="block text-[13px] text-dim">{item.school}</span>
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mono mt-6 text-[12px] text-dim">languages</h3>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="text-[14px]">
                  {lang.name} <span className="text-dim">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

      </div>
    </Section>
  );
}
