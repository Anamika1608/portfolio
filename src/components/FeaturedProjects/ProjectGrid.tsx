import { ProjectCard } from './ProjectCard';
import { ProjectCardProps } from './ProjectCard.types';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const displayProjects = projects.slice(0, 5);

  return (
    <section className="pt-8 bg-gray-50 rounded-3xl mx-10">
      <div className="flex justify-start mb-4 ml-5 lg:ml-20">
        <div className="border border-black rounded-full px-4 py-1">
          <h2 className="text-2xl font-crimson font-medium">Featured Projects</h2>
        </div>
      </div>
      <div className="max-w-7xl mx-20 mt-8">
        {/* Modified grid to make the layout more consistent */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* First row: two equal cards */}
          <div className="md:col-span-6">
            <ProjectCard {...displayProjects[0]} variant="default" />
          </div>
          <div className="md:col-span-6">
            <ProjectCard {...displayProjects[1]} variant="default" />
          </div>

          {/* Second row: three equal cards */}
          <div className="md:col-span-4">
            <ProjectCard {...displayProjects[2]} variant="default" />
          </div>
          <div className="md:col-span-4">
            <ProjectCard {...displayProjects[3]} variant="default" />
          </div>
          <div className="md:col-span-4">
            <ProjectCard {...displayProjects[4]} variant="default" />
          </div>
        </div>
      </div>
    </section>
  );
};