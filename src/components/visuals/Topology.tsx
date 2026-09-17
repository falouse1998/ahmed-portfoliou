"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The hero's one bold element: the delivery path Ahmed actually builds —
 * commit to pipeline to registry to a GKE cluster, with Terraform provisioning
 * it, Vault feeding it secrets and Prometheus watching it. Chips fade in on
 * load; after that the only motion is traffic along the links.
 */

type ChipProps = {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  tone?: "default" | "accent" | "solid";
};

const H = 36;

function Chip({ x, y, w, h = H, label, tone = "default" }: ChipProps) {
  const fill = tone === "solid" ? "var(--color-elevated)" : "var(--color-surface)";
  const stroke = tone === "accent" ? "var(--color-accent)" : "var(--color-line-strong)";
  const text = tone === "accent" ? "var(--color-accent)" : "var(--color-fg)";
  return (
    <motion.g variants={itemVariants}>
      <rect x={x} y={y} width={w} height={h} rx={7} fill={fill} stroke={stroke} strokeWidth={1} />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        fill={text}
        className="mono"
        fontSize={12}
      >
        {label}
      </text>
    </motion.g>
  );
}

function Link({ d, delay = 0, flow = true }: { d: string; delay?: number; flow?: boolean }) {
  return (
    <g>
      <path d={d} fill="none" stroke="var(--color-line-strong)" strokeWidth={1} />
      {flow ? (
        <path
          d={d}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={1.4}
          strokeLinecap="round"
          className="flow-line"
          style={{ animationDelay: `${delay}s` }}
        />
      ) : null}
    </g>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Topology() {
  const reduced = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 520 412"
      role="img"
      aria-label="Delivery path: a git push runs a GitLab pipeline, Kaniko builds the image into Artifact Registry, and the rollout lands on a GKE cluster where an ingress routes traffic through a service to pods. Terraform provisions the cluster, Vault issues its secrets, and Prometheus collects its metrics."
      className="w-full"
      variants={containerVariants}
      initial={reduced ? "show" : "hidden"}
      animate="show"
    >

      {/* pipeline */}
      <Chip x={8} y={16} w={140} label="git push" />
      <Link d="M148 34 H182" delay={0} />
      <Chip x={182} y={16} w={148} label="GitLab CI" tone="accent" />
      <Link d="M330 34 H364" delay={0.2} />
      <Chip x={364} y={16} w={148} label="kaniko build" />

      <Link d="M438 52 V76" delay={0.4} />
      <Chip x={364} y={76} w={148} h={34} label="registry" />
      <Link d="M438 110 V134" delay={0.6} />
      <motion.text
        variants={itemVariants}
        x={430}
        y={128}
        textAnchor="end"
        className="mono"
        fontSize={10}
        fill="var(--color-dim)"
      >
        rollout
      </motion.text>

      {/* cluster */}
      <motion.g variants={itemVariants}>
        <rect
          x={8}
          y={134}
          width={504}
          height={204}
          rx={10}
          fill="rgba(255,255,255,0.012)"
          stroke="var(--color-line-strong)"
          strokeWidth={1}
          strokeDasharray="4 5"
        />
        <text x={24} y={159} className="mono" fontSize={11} fill="var(--color-muted)">
          GKE cluster
        </text>
        <text
          x={496}
          y={159}
          textAnchor="end"
          className="mono hide-sm"
          fontSize={10}
          fill="var(--color-dim)"
        >
          vpc / private nodes
        </text>
        <path d="M8 172 H512" stroke="var(--color-line)" strokeWidth={1} />
      </motion.g>

      <Chip x={28} y={192} w={120} label="ingress" />
      <Link d="M148 210 H188" delay={0.1} />
      <Chip x={188} y={192} w={120} label="service" />
      <Link d="M308 210 H348" delay={0.3} />
      <Chip x={348} y={192} w={136} label="deployment" tone="solid" />

      {/* rollout bus into the pods */}
      <Link d="M416 228 V246 H72 M182 246 V264 M292 246 V264 M402 246 V264 M72 246 V264" delay={0.5} flow={false} />

      {[28, 138, 248, 358].map((x, i) => (
        <motion.g key={x} variants={itemVariants}>
          <rect
            x={x}
            y={264}
            width={88}
            height={46}
            rx={7}
            fill="var(--color-surface)"
            stroke="var(--color-line-strong)"
          />
          <circle cx={x + 16} cy={281} r={3} fill="var(--color-ok)">
            {reduced ? null : (
              <animate
                attributeName="opacity"
                values="1;0.35;1"
                dur="2.8s"
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
          <text x={x + 26} y={285} className="mono" fontSize={11} fill="var(--color-fg)">
            pod
          </text>
          <text x={x + 16} y={301} className="mono hide-sm" fontSize={9.5} fill="var(--color-dim)">
            ready 1/1
          </text>
        </motion.g>
      ))}

      {/* supporting systems */}
      <Link d="M83 372 V340" delay={0.2} flow={false} />
      <Link d="M260 372 V340" delay={0.4} flow={false} />
      <Link d="M437 340 V372" delay={0.6} flow={false} />

      <Chip x={8} y={372} w={150} h={34} label="terraform" />
      <Chip x={185} y={372} w={150} h={34} label="vault" />
      <Chip x={362} y={372} w={150} h={34} label="prometheus" />

      <motion.g variants={itemVariants} fill="var(--color-dim)" fontSize={9.5} className="mono">
        <text x={90} y={358}>
          provisions
        </text>
        <text x={267} y={358}>
          secrets
        </text>
        <text x={430} y={358} textAnchor="end">
          metrics
        </text>
      </motion.g>
    </motion.svg>
  );
}
