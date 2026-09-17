import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[14px] font-medium tracking-[-0.01em] transition-colors duration-200 disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-fg text-bg hover:bg-white px-5 h-11",
  outline: "border border-line-strong text-fg hover:border-fg/40 hover:bg-white/[0.04] px-5 h-11",
  ghost: "text-muted hover:text-fg px-2 h-9",
};

export function ActionLink({
  children,
  variant = "outline",
  className,
  icon,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; icon?: ReactNode }) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {icon}
      {children}
    </a>
  );
}
