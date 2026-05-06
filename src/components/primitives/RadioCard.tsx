import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function RadioCard({
  selected,
  onSelect,
  title,
  description,
  meta,
  children,
}: {
  selected: boolean;
  onSelect: () => void;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "w-full text-left p-5 hairline transition-colors",
        "flex items-start justify-between gap-4",
        selected
          ? "border-l-4 border-l-[var(--color-aqua-deep)] bg-[var(--color-aqua-mist)]"
          : "border-l-4 border-l-transparent hover:bg-[var(--color-paper)]",
      )}
    >
      <div className="flex-1">
        <div className="text-heading-md text-[var(--color-ink)]">{title}</div>
        {description ? (
          <div className="text-body-sm text-[var(--color-ink)]/70 mt-1">{description}</div>
        ) : null}
        {children}
      </div>
      {meta ? <div className="text-mono text-[var(--color-ink)]/70 shrink-0">{meta}</div> : null}
    </button>
  );
}
