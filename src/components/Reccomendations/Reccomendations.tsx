import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { recommendations as quotes } from './recommendationsData';


function Reccomendations() {
    return (
        <Section title="Recommendations">
            <div className="divide-y divide-border">
                {quotes.map((q) => (
                    <figure key={q.name} className="py-6 first:pt-0 last:pb-0">
                        <blockquote className="font-crimson text-[17px] leading-[1.55] text-foreground/90">
                            “{q.text}”
                        </blockquote>
                        <figcaption className="mt-3 text-[13px] text-muted">
                            <span className="text-foreground">{q.name}</span> · {q.role}
                            {q.org && (
                                <a href={q.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-4 decoration-subtle">
                                    {q.org}
                                </a>
                            )}
                            {q.href && (
                                <a href={q.href} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-0.5 hover:text-foreground">
                                    {q.hrefLabel} <ArrowUpRight className="h-3 w-3" />
                                </a>
                            )}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </Section>
    );
}

export default Reccomendations;
