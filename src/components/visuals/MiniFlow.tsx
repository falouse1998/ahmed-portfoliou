type Node = { x: number; y: number; w: number; h?: number; label: string; tone?: "default" | "accent" };
type Frame = { x: number; y: number; w: number; h: number; label: string };
type Graph = { nodes: Node[]; edges: string[]; frames?: Frame[] };

/**
 * Compact architecture sketches, one per project. Same drawing language as the
 * hero topology so the page reads as a single set of drawings.
 */
const graphs: Record<string, Graph> = {
  gke: {
    frames: [{ x: 8, y: 74, w: 324, h: 126, label: "gke cluster" }],
    nodes: [
      { x: 8, y: 12, w: 98, label: "gitlab ci", tone: "accent" },
      { x: 121, y: 12, w: 98, label: "kaniko" },
      { x: 234, y: 12, w: 98, label: "registry" },
      { x: 24, y: 106, w: 88, h: 28, label: "ingress" },
      { x: 126, y: 106, w: 88, h: 28, label: "service" },
      { x: 24, y: 158, w: 88, h: 28, label: "pod" },
      { x: 126, y: 158, w: 88, h: 28, label: "pod" },
      { x: 228, y: 158, w: 88, h: 28, label: "pod" },
    ],
    edges: [
      "M106 27 H121",
      "M219 27 H234",
      "M283 42 V74",
      "M112 120 H126",
      "M214 120 H228 V146 H68 M170 146 V158 M272 146 V158 M68 146 V158",
    ],
  },
  delivery: {
    frames: [{ x: 8, y: 8, w: 118, h: 134, label: "team tracks" }],
    nodes: [
      { x: 18, y: 34, w: 98, h: 26, label: "platform" },
      { x: 18, y: 70, w: 98, h: 26, label: "services" },
      { x: 18, y: 106, w: 98, h: 26, label: "release" },
      { x: 158, y: 70, w: 86, h: 30, label: "pipeline", tone: "accent" },
      { x: 262, y: 70, w: 70, h: 30, label: "prod" },
      { x: 158, y: 150, w: 174, h: 26, label: "decisions written down" },
    ],
    edges: [
      "M116 47 H138 V85 H158",
      "M116 83 H158",
      "M116 119 H138 V85",
      "M244 85 H262",
      "M201 100 V150",
    ],
  },
  industrial: {
    frames: [{ x: 8, y: 8, w: 324, h: 150, label: "docker compose" }],
    nodes: [
      { x: 22, y: 34, w: 86, h: 28, label: "sensors" },
      { x: 126, y: 34, w: 86, h: 28, label: "kafka", tone: "accent" },
      { x: 230, y: 34, w: 86, h: 28, label: "node api" },
      { x: 22, y: 106, w: 86, h: 28, label: "rpi agent" },
      { x: 126, y: 106, w: 86, h: 28, label: "mongodb" },
      { x: 230, y: 106, w: 86, h: 28, label: "react ui" },
      { x: 22, y: 172, w: 294, h: 24, label: "gitlab ci/cd publishes the images" },
    ],
    edges: ["M108 48 H126", "M212 48 H230", "M169 62 V106", "M273 62 V106", "M108 120 H126"],
  },
};

export function MiniFlow({ kind }: { kind: keyof typeof graphs | string }) {
  const graph = graphs[kind] ?? graphs.gke;

  return (
    <svg viewBox="0 0 340 208" className="w-full" role="presentation" aria-hidden>
      {graph.frames?.map((frame) => (
        <g key={frame.label}>
          <rect
            x={frame.x}
            y={frame.y}
            width={frame.w}
            height={frame.h}
            rx={8}
            fill="rgba(255,255,255,0.014)"
            stroke="var(--color-line-strong)"
            strokeDasharray="3 4"
          />
          <text x={frame.x + 12} y={frame.y + 18} className="mono" fontSize={10} fill="var(--color-dim)">
            {frame.label}
          </text>
        </g>
      ))}

      {graph.edges.map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--color-line-strong)" strokeWidth={1} />
      ))}

      {graph.nodes.map((node) => {
        const h = node.h ?? 30;
        return (
          <g key={`${node.x}-${node.y}-${node.label}`}>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={h}
              rx={6}
              fill="var(--color-surface)"
              stroke={node.tone === "accent" ? "var(--color-accent)" : "var(--color-line-strong)"}
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + h / 2 + 3.5}
              textAnchor="middle"
              className="mono"
              fontSize={10.5}
              fill={node.tone === "accent" ? "var(--color-accent)" : "var(--color-fg)"}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
