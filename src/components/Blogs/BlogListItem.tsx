"use client";
import React from 'react';
import Image from 'next/image';


type BlogListItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  blogUrl: string;
  date: string;
  readTimeMinutes: number;
};

const BlogListItem = ({ title, description, imageUrl, blogUrl, date, readTimeMinutes }: BlogListItemProps) => {
  return (
    <a
      href={blogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group py-6 first:pt-0 last:pb-0"
    >
      {/* Default to a column layout, but switch to a row on screens 'sm' (640px) and wider */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        
        {/* ====== Image ====== */}
        {/* On mobile, it's full-width with a fixed height. On larger screens, it's a fixed size. */}
        <div className="relative w-full h-40 sm:w-40 sm:h-24 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={`Thumbnail for ${title}`}
            fill
            sizes="(max-width: 640px) 90vw, 160px"
            className="rounded-sm border border-border object-cover object-top dark:brightness-90"
          />
        </div>
        
        {/* ====== Text Content ====== */}
        {/* The top margin here only applies on mobile to create space below the image. */}
        <div className="flex-1 mt-4 sm:mt-0">
          <h3 className="font-medium mb-1 group-hover:underline underline-offset-4">
            {title}
          </h3>
          <p className="text-muted">
            {description}
          </p>
          <div className="mt-2 font-mono text-[13px] text-subtle flex items-center gap-2">
            <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })}</span>
            <span>•</span>
            <span>{readTimeMinutes} min read</span>
          </div>
        </div>

      </div>
    </a>
  );
};

export default BlogListItem;