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
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {/* Tech stack pills at the top */}
      <div className="p-3 flex gap-2 flex-wrap">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project image - fixed ratio container */}
      <div className="px-2">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
            // style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-300 "
          />
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-jakarta tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center gap-1 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition"
            >
              <FiExternalLink className="text-sm" />
              <span>Live</span>
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="flex items-center gap-1 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition"
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