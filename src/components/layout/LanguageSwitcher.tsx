"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  return (
    <div role="group" aria-label="Language" className="flex items-center gap-2 text-mono uppercase">
      {routing.locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 ? (
            <span aria-hidden className="text-[var(--color-ink)]/30">
              ·
            </span>
          ) : null}
          <button
            type="button"
            onClick={() =>
              router.replace(
                // @ts-expect-error pathname/params are typed against the static map; runtime is fine
                { pathname, params },
                { locale: l },
              )
            }
            className={cn(
              "transition-colors",
              l === locale
                ? "text-[var(--color-aqua-deep)] underline underline-offset-4"
                : "text-[var(--color-ink)]/70 hover:text-[var(--color-ink)]",
            )}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
