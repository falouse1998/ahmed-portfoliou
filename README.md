# Ahmed Benhmida — portfolio

A recruiter-facing portfolio for a DevOps & Cloud Infrastructure Engineer. Next.js 16 (App Router),
TypeScript, Tailwind v4 and Motion. Every route is statically prerendered.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where the content lives

All copy, roles, projects, stack and certifications sit in one file:

**`src/lib/site.ts`**

| Export           | Drives                                                        |
| ---------------- | ------------------------------------------------------------- |
| `site`           | Name, email, LinkedIn, CV path, location, canonical URL        |
| `nav`            | The nav items and the section ids they scroll to               |
| `metrics`        | The four figures under the hero                                |
| `projects`       | Project cards, including the expandable detail and diagram key |
| `experience`     | The timeline                                                   |
| `stack`          | The tabbed technology groups                                   |
| `certifications` | The certification cards                                        |
| `education`, `languages` | The side column in About                               |

Editing that file is enough for almost every content change — no component needs touching.

### Before going live

1. Set `site.url` in `src/lib/site.ts` to the real domain. It feeds the canonical tag, the sitemap,
   `robots.txt` and the Open Graph tags.
2. Replace `public/Ahmed-Benhmida-DevOps-Cloud-Engineer-CV.pdf` when the CV changes (keep the
   filename, or update `site.cv`).
3. Replace `public/ahmed-benhmida.jpg` to change the portrait (portrait crop, ~1000×1250).

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, Person JSON-LD
    page.tsx              section composition
    globals.css           design tokens + base styles
    opengraph-image.tsx   generated 1200×630 social card
    icon.svg              favicon
    sitemap.ts robots.ts
  components/
    layout/    Nav, Footer
    sections/  Hero, About, Projects, Experience, Stack, Certifications, Contact
    ui/        Section, Reveal, Button, Glyph, TechIcon
    visuals/   Topology (hero diagram), MiniFlow (project diagrams)
  lib/
    site.ts    all content
    icons.ts   brand mark paths (generated from simple-icons, CC0)
    utils.ts
```

## Design notes

- **Tokens** are defined once in `@theme` in `globals.css`: `bg`, `surface`, `line`, `fg`, `muted`,
  `dim`, `accent`, `ok`. Use them rather than raw hex values.
- **Type** is Instrument Sans throughout, with IBM Plex Mono (`.mono`) reserved for machine data —
  versions, dates, counts, technology names, diagram labels.
- **Diagrams** (`Topology`, `MiniFlow`) are hand-built SVG sharing one drawing language: hairline
  links, rounded chips, dashed frames for boundaries. `MiniFlow` takes a graph definition, so a new
  project diagram means adding an entry to `graphs` — no new component.
- **Motion** is deliberate: one orchestrated hero sequence on load, traffic along the topology links,
  and after that only motion that answers an interaction. Every animated component checks
  `useReducedMotion()`, and `globals.css` neutralises CSS animation under
  `prefers-reduced-motion: reduce`.

## Accessibility

Single `h1`, ordered headings, landmark regions, a skip link, visible focus rings, real
`tablist`/`tabpanel` semantics with arrow-key support in the stack section, `aria-expanded` on the
project accordions, and a described hero diagram.

## Deploying

Push to a Git remote and import the repository on Vercel — no configuration needed. Any Node host
works too: `npm run build && npm start`.
