import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden hairline-top hairline-bottom py-6">
      <div className="marquee-track whitespace-nowrap">
        <div className="flex gap-12 pr-12">{children}</div>
        <div className="flex gap-12 pr-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
