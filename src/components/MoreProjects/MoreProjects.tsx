import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { otherProjects as projects } from './otherProjectsData';


function MoreProjects() {
  return (
    <Section title="Other projects">
      <ul className="divide-y divide-border">
        {projects.map((p) => (
          <li key={p.name} className="flex items-baseline justify-between gap-6 py-3 first:pt-0 last:pb-0">
            <span>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline underline-offset-4">
                {p.name}
              </a>
              <span className="text-muted"> · {p.note}</span>
            </span>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="shrink-0 font-mono text-[13px] text-subtle hover:text-foreground inline-flex items-center gap-0.5">
              code <ArrowUpRight className="h-3 w-3" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default MoreProjects;
