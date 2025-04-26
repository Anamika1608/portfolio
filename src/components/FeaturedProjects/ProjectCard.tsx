import Image from 'next/image';
import Link from 'next/link';
import { FiGlobe, FiGithub } from 'react-icons/fi';
import { ProjectCardProps } from './ProjectCard.types';

export const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  liveUrl,
  repoUrl,
  size
}: ProjectCardProps) => {
  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden
      ${size === 'small' ? 'col-span-1' : 'col-span-2 row-span-2'}`}
    >
      <div className="relative overflow-hidden group">
        {/* Overlay with project details that appears on hover */}
        <div className="relative">
          <div className="aspect-video w-full">
            <Image 
              src={imageUrl} 
              alt={title} 
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Dark overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Project details that slide up on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-2">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs bg-white/20 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {liveUrl && (
              <Link 
                href={liveUrl} 
                target="_blank"
                className="flex items-center gap-1 bg-white/90 hover:bg-white text-black px-3 py-1.5 rounded-full text-sm transition font-medium"
              >
                <FiGlobe className="text-lg" />
                <span>Live Demo</span>
              </Link>
            )}
            {repoUrl && (
              <Link 
                href={repoUrl} 
                target="_blank"
                className="flex items-center gap-1 bg-black/40 hover:bg-black/60 text-white px-3 py-1.5 rounded-full text-sm transition"
              >
                <FiGithub className="text-lg" />
                <span>Code</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

