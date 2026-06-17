import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Ensures every page path carries a locale prefix. Unprefixed paths (e.g. "/"
 * or "/services") redirect to the default Lithuanian locale ("/lt", "/lt/services").
 * API, Next internals, assets and metadata files are left untouched.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the API, and anything with a file extension (assets, og.png, etc.)
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
