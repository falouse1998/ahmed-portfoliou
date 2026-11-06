import { site } from "@/lib/site";
import { Glyph } from "@/components/ui/Glyph";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rule-top">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[14.5px] font-medium tracking-[-0.01em]">{site.name}</p>
          <p className="mono mt-1 text-[12px] text-dim">
            {site.role.toLowerCase()} — {site.location.toLowerCase()}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${site.email}`}
            className="mono text-[12.5px] text-muted transition-colors hover:text-fg"
          >
            email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mono text-[12.5px] text-muted transition-colors hover:text-fg"
          >
            linkedin
          </a>
          <a
            href={site.cv}
            target="_blank"
            rel="noreferrer"
            className="mono text-[12.5px] text-muted transition-colors hover:text-fg"
          >
            cv
          </a>
          <a
            href="#top"
            className="mono flex items-center gap-1.5 text-[12.5px] text-muted transition-colors hover:text-fg"
          >
            <Glyph name="north" className="h-3.5 w-3.5" />
            top
          </a>
        </div>

        <p className="mono text-[12px] text-dim">© {year}</p>
      </div>
    </footer>
  );
}
