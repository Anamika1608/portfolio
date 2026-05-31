// components/FeaturedProjects/ProjectCard.types.ts
export type ProjectVariant = 'small' | 'medium' | 'large' | 'wide' | 'tall' | 'default';

export interface ProjectCardProps {
  title: string;
  category?: string;
  role?: string;
  description: string;
  techStack: string[];
  proofPoints?: string[];
  focusAreas?: string[];
  featuredMetric?: string;
  images?: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  variant: ProjectVariant;
}
