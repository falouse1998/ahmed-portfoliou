import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0c0f",
          backgroundImage:
            "linear-gradient(to right, #14191f 1px, transparent 1px), linear-gradient(to bottom, #14191f 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          padding: "72px",
          color: "#e9edf2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 10, height: 10, borderRadius: 10, background: "#4ed39a" }} />
          <div style={{ fontSize: 22, color: "#8a94a3" }}>Open to remote roles and relocation</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            Ahmed Benhmida
          </div>
          <div style={{ marginTop: 26, fontSize: 36, color: "#e9edf2", letterSpacing: "-0.02em" }}>
            DevOps &amp; Cloud Infrastructure Engineer
          </div>
          <div style={{ marginTop: 14, fontSize: 26, color: "#5b9dff" }}>
            Google Cloud certified — Kubernetes, Terraform, GitLab CI/CD
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, color: "#5d6672" }}>Tunis, Tunisia</div>
          <div style={{ fontSize: 22, color: "#5d6672" }}>{site.linkedinLabel}</div>
        </div>
      </div>
    ),
    size,
  );
}
