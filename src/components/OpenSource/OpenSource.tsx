import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { contributionsRepo, openSourceContributions } from './OpenSourceData';

function OpenSource() {
  return (
    <Section title="Open source">
      <div className="divide-y divide-border">
        {openSourceContributions.map((c) => (
          <article key={c.id} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="min-w-0">
              <h3 className="font-medium">
                <a href={c.projectUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                  {c.project}
                </a>
                <span className="text-muted font-normal"> · {c.title}</span>
              </h3>
              {c.description && (
                <p className="mt-1 text-muted">{c.description}</p>
              )}
            </div>
            <a
              href={`${contributionsRepo}#${c.anchor}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-0.5 font-mono text-[13px] text-subtle hover:text-foreground"
            >
              {c.prs} PRs <ArrowUpRight className="h-3 w-3" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-muted">
        Every pull request, with status, is listed in{' '}
        <a href={contributionsRepo} target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 decoration-subtle hover:decoration-foreground">
          one place
        </a>
        .
      </p>
    </Section>
  );
}

export default OpenSource;
