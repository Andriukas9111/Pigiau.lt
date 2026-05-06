"use client";

import { MinusIcon, PlusIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export function NumberStepper({
  value,
  min = 1,
  max = 9999,
  step = 1,
  onChange,
  unit,
  className,
}: {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
  className?: string;
}) {
  const clamp = (n: number) => Math.max(min, Math.min(max, n));

  return (
    <div className={cn("flex items-stretch hairline", className)}>
      <button
        type="button"
        aria-label="Decrease"
        className="px-4 hover:bg-[var(--color-paper)] transition-colors"
        onClick={() => onChange(clamp(value - step))}
      >
        <MinusIcon />
      </button>
      <input
        type="number"
        inputMode="numeric"
        className="flex-1 text-center text-heading-md py-3 bg-transparent outline-none"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          const next = Number(e.target.value);
          if (!Number.isNaN(next)) onChange(clamp(next));
        }}
      />
      {unit ? <div className="px-3 self-center text-mono text-[var(--color-ink)]/60">{unit}</div> : null}
      <button
        type="button"
        aria-label="Increase"
        className="px-4 hover:bg-[var(--color-paper)] transition-colors"
        onClick={() => onChange(clamp(value + step))}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
