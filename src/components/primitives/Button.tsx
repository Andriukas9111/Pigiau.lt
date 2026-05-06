import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        variant !== "ghost" && "rounded-none",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
