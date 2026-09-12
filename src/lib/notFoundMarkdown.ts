import { SITE_URL } from "@/data/profile";

export function notFoundMarkdown(path: string): string {
  return [
    "# 404 — not found",
    "",
    `There is nothing at \`${path}\` on ${SITE_URL}.`,
    "",
    "Where to look next:",
    "",
    `- Home (HTML): ${SITE_URL}/`,
    `- Profile as markdown: ${SITE_URL}/llms.txt (same content at ${SITE_URL}/profile.md)`,
    `- Profile as JSON: ${SITE_URL}/api/profile`,
    `- Sitemap: ${SITE_URL}/sitemap.xml`,
    `- Resume: ${SITE_URL}/resume`,
    "",
    "Send `Accept: text/markdown` to any page URL to receive markdown.",
    "",
  ].join("\n");
}
