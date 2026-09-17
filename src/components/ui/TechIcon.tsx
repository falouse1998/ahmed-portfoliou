import { iconPaths } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const path = iconPaths[name] ?? iconPaths.box;
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      className={cn("h-4 w-4 shrink-0 fill-current", className)}
    >
      <path d={path} />
    </svg>
  );
}
