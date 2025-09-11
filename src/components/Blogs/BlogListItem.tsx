"use client";
import React from 'react';
import Image from 'next/image';

const BlogListItem = ({ title, description, imageUrl, blogUrl }) => {
  return (
    <a
      href={blogUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group py-8"
    >
      {/* Default to a column layout, but switch to a row on screens 'sm' (640px) and wider */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        
        {/* ====== Image ====== */}
        {/* On mobile, it's full-width with a fixed height. On larger screens, it's a fixed size. */}
        <div className="relative w-full h-48 sm:w-48 sm:h-32 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={`Thumbnail for ${title}`}
            layout="fill"
            objectFit="contain" // This ensures your image is never cropped
            className="rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* ====== Text Content ====== */}
        {/* The top margin here only applies on mobile to create space below the image. */}
        <div className="flex-1 mt-4 sm:mt-0">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </a>
  );
};

export default BlogListItem;