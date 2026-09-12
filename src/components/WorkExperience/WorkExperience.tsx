import React from "react";
import { Section } from "@/components/ui/Section";
import { WorkExperienceItem } from "./types";

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => (
  <Section title="Work">
    <div className="divide-y divide-border">
      {experiences.map((experience) => (
        <article
          key={experience.id}
          className="grid gap-1.5 py-6 first:pt-0 last:pb-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
        >
          <p className="whitespace-nowrap font-mono text-[13px] text-subtle sm:pt-1">{experience.period}</p>

          <div>
            <h3 className="font-medium">
              {experience.companyUrl ? (
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
              <span className="text-muted font-normal"> · {experience.role}</span>
            </h3>
            <p className="mt-1 text-muted">{experience.summary}</p>

            {experience.description && (
              <ul className="mt-3 space-y-1.5">
                {experience.description.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85">
                    <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {experience.stack && (
              <p className="mt-3 font-mono text-[13px] text-subtle">{experience.stack.join(" · ")}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default WorkExperience;
