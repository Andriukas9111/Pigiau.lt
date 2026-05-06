"use client";

import { cn } from "@/lib/cn";
import { type ReactNode, useState } from "react";

export function Tabs({
  tabs,
  defaultIndex = 0,
}: {
  tabs: { label: string; content: ReactNode }[];
  defaultIndex?: number;
}) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div>
      <div role="tablist" className="flex flex-wrap gap-2 hairline-bottom">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "px-5 py-3 text-body-md tracking-tight transition-colors",
              active === i
                ? "border-b-2 border-[var(--color-aqua-deep)] text-[var(--color-ink)]"
                : "border-b-2 border-transparent text-[var(--color-ink)]/60 hover:text-[var(--color-ink)]",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-8">{tabs[active]?.content}</div>
    </div>
  );
}
