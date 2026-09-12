import React from 'react';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from './ProjectCard';
import { ProjectCardProps } from './ProjectCard.types';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <Section title="Featured projects">
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {projects.slice(0, 4).map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </Section>
);
