import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCardProps } from './ProjectCard.types';

export const ProjectCard = ({ title, description, imageUrl, liveUrl, repoUrl }: ProjectCardProps) => {
  const href = liveUrl ?? repoUrl;
  return (
    <article className="group">
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border bg-surface dark:[&_img]:brightness-90">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 90vw, 480px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </a>
      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-medium">{title}</h3>
          <div className="flex gap-3 text-[13px] text-subtle">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 hover:text-foreground">
                live <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 hover:text-foreground">
                code <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-1 text-muted">{description}</p>
      </div>
    </article>
  );
};
