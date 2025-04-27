
// components/FeaturedProjects/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ProjectCardProps } from './ProjectCard.types';

export const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  liveUrl,
  repoUrl,
  variant
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      {/* Tech stack pills at the top */}
      <div className="p-3 flex gap-2 flex-wrap">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Project image - adjusted for better proportions */}
      <div className="px-3 pt-1">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ height: '175px' }}>
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>
      
      {/* Content section */}
      <div className="p-3 pt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Links */}
        <div className="flex gap-3">
          {liveUrl && (
            <Link 
              href={liveUrl} 
              target="_blank"
              className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition"
            >
              <FiExternalLink className="text-sm" />
              <span>Live</span>
            </Link>
          )}
          {repoUrl && (
            <Link 
              href={repoUrl} 
              target="_blank"
              className="flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition"
            >
              <FiGithub className="text-sm" />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};