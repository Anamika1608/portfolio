import { ProjectCard } from './ProjectCard';
import { ProjectCardProps } from './ProjectCard.types';
import { Button } from '../ui/Button';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <section className="py-16  mx-10 ">
     
      <div className="container mx-auto px-4 bg-[#f8f8f8] rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

