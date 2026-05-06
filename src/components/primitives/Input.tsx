import { cn } from "@/lib/cn";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldBase =
  "w-full bg-transparent border-b border-[var(--color-ink)]/15 px-0 py-3 text-body-md outline-none focus:border-[var(--color-aqua-deep)] transition-colors";

export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...rest} />;
}

export function Textarea({ className, ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, "min-h-32 resize-y", className)} {...rest} />;
}

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-mono uppercase text-[var(--color-ink)]/60">{label}</span>
      {children}
      {error ? <span className="block text-body-sm text-[var(--color-danger)] mt-1">{error}</span> : null}
    </label>
  );
}
