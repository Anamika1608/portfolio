import { ProjectCard } from './ProjectCard';
import { ProjectCardProps } from './ProjectCard.types';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  // Show up to 5 projects, or all if less than 5
  const displayProjects = projects.slice(0, 5);

  return (
    <section className="pt-6 sm:pt-8 bg-[#f8f8f8] rounded-xl sm:rounded-3xl mx-4 sm:mx-6 md:mx-10">
      {/* Responsive section header */}
      <div className="flex justify-start mb-3 sm:mb-4 ml-4 md:ml-5 lg:ml-10 xl:ml-20">
        <div className="border border-black rounded-full px-3 sm:px-4 py-1">
          <h2 className="text-xl sm:text-2xl font-crimson font-medium">Featured Projects</h2>
        </div>
      </div>

      {/* Responsive container with proper margins */}
      <div className="px-4 md:px-6 lg:px-10 xl:px-20 pb-8 sm:pb-10">
        {/* Custom grid for specific breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* First project - spans 1 column on mobile, 1 column on md (800-1095px), 1 column on lg */}
          <div className="col-span-1">
            {displayProjects[0] && (
              <ProjectCard {...displayProjects[0]} variant="default" />
            )}
          </div>

          {/* Second project */}
          <div className="col-span-1">
            {displayProjects[1] && (
              <ProjectCard {...displayProjects[1]} variant="default" />
            )}
          </div>

          {/* Third project - spans 1 column on mobile, 1 column on md (800-1095px), 1 column on lg */}
          <div className="col-span-1">
            {displayProjects[2] && (
              <ProjectCard {...displayProjects[2]} variant="default" />
            )}
          </div>

          {/* Fourth project */}
          <div className="col-span-1">
            {displayProjects[3] && (
              <ProjectCard {...displayProjects[3]} variant="default" />
            )}
          </div>

          {/* Fifth project - spans full width on mobile, 2 columns on md (800-1095px), 1 column on lg */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            {displayProjects[4] && (
              <ProjectCard {...displayProjects[4]} variant="default" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};