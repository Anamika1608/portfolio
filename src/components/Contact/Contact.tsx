import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, rel: undefined as 'me' | undefined },
  ...profile.links
    .filter((l) => l.label !== 'Resume')
    .map((l) => ({ href: l.url, label: l.label, rel: l.rel })),
];

function Contact() {
  return (
    <Section title="Contact">
      <p className="max-w-xl text-muted">
        Open to backend and infrastructure roles. Email is the fastest way to reach me.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.rel ? `me noopener noreferrer` : 'noopener noreferrer'}
              className="inline-flex items-center gap-0.5 text-foreground no-underline hover:underline underline-offset-4"
            >
              {l.label} <ArrowUpRight className="h-3 w-3 text-subtle" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-16 font-mono text-[13px] text-subtle">© {new Date().getFullYear()} Anamika Aggarwal</p>
    </Section>
  );
}

export default Contact;
