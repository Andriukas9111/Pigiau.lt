import type { CSSProperties } from "react";

/**
 * Renders hello@nordwash.lt with the `@` and `.` as HTML entities so the
 * address survives naive email-obfuscation rewriters while still displaying
 * as plain text (brief hard requirement #8).
 */
export function Email({ style }: { style?: CSSProperties }) {
  // Static constant (no user input → XSS-safe); entities must reach the rendered
  // HTML to defeat naive obfuscators, which plain JSX text cannot do.
  // biome-ignore lint/security/noDangerouslySetInnerHtml: static literal, intentional per brief #8
  return <span style={style} dangerouslySetInnerHTML={{ __html: "hello&#64;nordwash&#46;lt" }} />;
}
