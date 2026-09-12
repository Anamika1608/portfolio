import { profile } from "@/data/profile";
import { profileToMarkdown } from "@/lib/profileMarkdown";

export const dynamic = "force-static";

export function GET() {
  return new Response(profileToMarkdown(profile), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
