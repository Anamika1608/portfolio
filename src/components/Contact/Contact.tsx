import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';

const links = [
  { href: 'mailto:anamikaagg18@gmail.com', label: 'anamikaagg18@gmail.com' },
  { href: 'https://cal.com/anamikaagg', label: 'Book a call' },
  { href: 'https://github.com/Anamika1608', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anamikaaggarwal12', label: 'LinkedIn' },
  { href: 'https://x.com/anamika_agg', label: 'X' },
  { href: 'https://medium.com/@anamikagg07', label: 'Medium' },
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
              rel="noopener noreferrer"
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
