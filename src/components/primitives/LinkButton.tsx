import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-aqua)] text-[var(--color-ink)] hover:bg-[var(--color-aqua-deep)] hover:text-[var(--color-bone)]",
  secondary:
    "border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bone)]",
  ghost:
    "text-[var(--color-ink)] underline-offset-8 decoration-1 hover:underline hover:decoration-[var(--color-aqua-deep)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-body-sm",
  md: "h-12 px-6 text-body-md",
  lg: "h-14 px-8 text-body-md",
};

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size; children: ReactNode }) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 tracking-tight transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
