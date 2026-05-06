export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[1000] focus:bg-[var(--color-ink)] focus:text-[var(--color-bone)] focus:px-4 focus:py-2"
    >
      {label}
    </a>
  );
}
