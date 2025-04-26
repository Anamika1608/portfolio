export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  size: 'small' | 'large';
}
