"use client";

import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { type ReactNode, useState } from "react";

export function AccordionItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="hairline-bottom">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-heading-md">{question}</span>
        <ChevronDownIcon
          className={cn("transition-transform duration-300", open && "rotate-180")}
          size={22}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-10 text-body-md text-[var(--color-ink)]/80">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="hairline-top">{children}</div>;
}
