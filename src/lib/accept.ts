// Minimal Accept-header parsing (RFC 9110 q-values) for markdown negotiation.
type Entry = { type: string; q: number };

export function parseAccept(header: string | null): Entry[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [type, ...params] = part.trim().split(";").map((s) => s.trim());
      const qParam = params.find((p) => p.startsWith("q="));
      const q = qParam ? Number(qParam.slice(2)) : 1;
      return { type: type.toLowerCase(), q: Number.isFinite(q) ? q : 0 };
    })
    .filter((e) => e.type);
}

function weight(entries: Entry[], type: string): number {
  const exact = entries.find((e) => e.type === type);
  if (exact) return exact.q;
  const [major] = type.split("/");
  const partial = entries.find((e) => e.type === `${major}/*`);
  if (partial) return partial.q;
  const any = entries.find((e) => e.type === "*/*");
  return any ? any.q : 0;
}

// Only an explicit text/markdown entry counts; */* alone keeps HTML.
export function prefersMarkdown(header: string | null): boolean {
  const entries = parseAccept(header);
  const md = entries.find((e) => e.type === "text/markdown");
  if (!md || md.q <= 0) return false;
  return md.q >= weight(entries, "text/html");
}

export function acceptsHtml(header: string | null): boolean {
  return weight(parseAccept(header), "text/html") > 0;
}
