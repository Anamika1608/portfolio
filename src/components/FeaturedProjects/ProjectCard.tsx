import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { ProjectCardProps } from './ProjectCard.types';

export const ProjectCard = ({
  title,
  category,
  role,
  description,
  techStack,
  proofPoints = [],
  focusAreas = [],
  featuredMetric,
  imageUrl,
  liveUrl,
  repoUrl,
}: ProjectCardProps) => {
  const visibleTech = techStack.slice(0, 6);
  const hiddenTechCount = Math.max(techStack.length - visibleTech.length, 0);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-[#FDFBF5] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="p-2">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md border border-black/5 bg-white">
          {featuredMetric && (
            <div className="absolute left-3 top-3 z-10 rounded-md border border-black/10 bg-white/90 px-2.5 py-1 font-ibm-plex text-[11px] font-medium text-black/70 backdrop-blur">
              {featuredMetric}
            </div>
          )}
          {liveUrl ? (
            <Link href={liveUrl} target="_blank">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>
          ) : (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          )}
        </div>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-4 pt-3 sm:p-5 sm:pt-4">
        <div>
          {category && (
            <p className="mb-1 font-ibm-plex text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
              {category}
            </p>
          )}
          <h3 className="font-crimson text-2xl font-medium leading-tight text-[#1f1f1f]">
            {title}
          </h3>
          {role && (
            <p className="mt-1 font-ibm-plex text-xs text-black/55">
              {role}
            </p>
          )}
        </div>

        <p className="font-ibm-plex text-sm leading-relaxed text-black/65">
          {description}
        </p>

        {proofPoints.length > 0 && (
          <ul className="space-y-2">
            {proofPoints.slice(0, 2).map((point) => (
              <li
                key={point}
                className="flex gap-2 font-ibm-plex text-sm leading-relaxed text-black/70"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/35" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {focusAreas.length > 0 && (
          <div className="flex flex-wrap gap-x-2 gap-y-1 font-ibm-plex text-xs text-black/45">
            {focusAreas.map((area, index) => (
              <span key={area}>
                {area}
                {index < focusAreas.length - 1 ? " /" : ""}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto space-y-4">
          <div className="flex flex-wrap gap-2">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-black/10 bg-white px-2.5 py-1 font-ibm-plex text-[11px] text-black/65"
              >
                {tech}
              </span>
            ))}
            {hiddenTechCount > 0 && (
              <span className="rounded-md border border-black/10 bg-white px-2.5 py-1 font-ibm-plex text-[11px] text-black/45">
                +{hiddenTechCount}
              </span>
            )}
          </div>

          <div className="flex gap-3">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="flex items-center gap-1 rounded-md border border-black/10 bg-white px-3 py-1.5 font-ibm-plex text-sm font-medium text-black/75 transition hover:border-black/25 hover:text-black"
            >
              <FiExternalLink className="text-sm" />
              <span>Live</span>
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="flex items-center gap-1 rounded-md border border-black/10 bg-white px-3 py-1.5 font-ibm-plex text-sm font-medium text-black/75 transition hover:border-black/25 hover:text-black"
            >
              <FiGithub className="text-sm" />
              <span>Code</span>
            </Link>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
