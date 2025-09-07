// components/FeaturedProjects/ProjectCard.types.ts
export type ProjectVariant = 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'default';

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  images?: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  variant: ProjectVariant;
}