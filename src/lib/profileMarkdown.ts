import { SITE_URL, type Profile } from "@/data/profile";

export function profileToMarkdown(p: Profile): string {
  const out: string[] = [];
  const push = (...l: string[]) => out.push(...l);

  push(`# ${p.name}`, "", `> ${p.tagline}`, "", p.availability, "", `Site: ${SITE_URL}`, `Email: ${p.email}`);
  for (const l of p.links) push(`${l.label}: ${l.url}`);
  push("", "Machine-readable: this file, " + `${SITE_URL}/profile.md` + ", and JSON at " + `${SITE_URL}/api/profile` + ".");

  push("", "## For agents", "");
  for (const h of p.forAgents) push(`- ${h}`);

  push("", "## Stack", "");
  for (const [k, v] of Object.entries(p.stack)) push(`- ${k === "ai" ? "AI" : k[0].toUpperCase() + k.slice(1)}: ${v.join(", ")}`);

  push("", "## Highlights", "");
  for (const h of p.highlights) push(`- ${h}`);

  push("", "## Work");
  for (const w of p.work) {
    push("", `### ${w.company} — ${w.role} (${w.period})`, "", w.summary);
    if (w.companyUrl) push(`Company: ${w.companyUrl}`);
    if (w.description?.length) push("", ...w.description.map((d) => `- ${d}`));
    if (w.stack?.length) push("", `Stack: ${w.stack.join(", ")}`);
  }

  push("", "## Open source", "", `Every pull request, with status: ${p.contributionsRepo}`);
  for (const o of p.openSource) {
    push("", `### ${o.project} — ${o.title} (${o.prs} PRs)`, `Project: ${o.projectUrl}`, `Pull requests: ${p.contributionsRepo}#${o.anchor}`);
    if (o.description) push("", o.description);
    if (o.stack?.length) push(`Stack: ${o.stack.join(", ")}`);
  }

  push("", "## Featured projects");
  for (const pr of p.projects) {
    push("", `### ${pr.title}`, "", pr.description);
    if (pr.liveUrl) push(`Live: ${pr.liveUrl}`);
    if (pr.repoUrl) push(`Code: ${pr.repoUrl}`);
    if (pr.techStack?.length) push(`Stack: ${pr.techStack.join(", ")}`);
  }

  push("", "## Other projects", "");
  for (const o of p.otherProjects) push(`- ${o.name}: ${o.note} — ${o.href}`);

  push("", "## Writing", "");
  for (const b of p.writing) push(`- ${b.title} (${b.date}, ${b.readTimeMinutes} min): ${b.blogUrl}`);

  push("", "## Recommendations");
  for (const r of p.recommendations) {
    const org = "org" in r && r.org ? r.org : "";
    push("", `> ${r.text}`, "", `— ${r.name}, ${r.role}${org}`);
  }

  return out.join("\n") + "\n";
}
