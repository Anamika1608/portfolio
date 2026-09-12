import { notFoundMarkdown } from "@/lib/notFoundMarkdown";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const path = new URL(request.url).searchParams.get("path") ?? "/";
  return new Response(notFoundMarkdown(path), {
    status: 404,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "X-Robots-Tag": "noindex",
    },
  });
}
