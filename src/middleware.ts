import { NextResponse, type NextRequest } from "next/server";
import { acceptsHtml, prefersMarkdown } from "@/lib/accept";

// Paths that exist. Anything else that is not a static asset is a 404.
const KNOWN = new Set(["/", "/llms.txt", "/profile.md", "/robots.txt", "/sitemap.xml", "/og.png", "/favicon.ico"]);
const KNOWN_PREFIXES = ["/api/", "/_next/", "/blogs/", "/featured-projects/", "/hero/", "/work-experience/"];

function withVary(res: NextResponse): NextResponse {
  res.headers.set("Vary", "Accept");
  return res;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accept = request.headers.get("accept");

  if (pathname === "/" && prefersMarkdown(accept)) {
    return withVary(NextResponse.rewrite(new URL("/llms.txt", request.url)));
  }

  const known = KNOWN.has(pathname) || KNOWN_PREFIXES.some((p) => pathname.startsWith(p));
  if (!known && !acceptsHtml(accept)) {
    const url = new URL("/api/not-found", request.url);
    url.searchParams.set("path", pathname);
    return withVary(NextResponse.rewrite(url));
  }

  return withVary(NextResponse.next());
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
