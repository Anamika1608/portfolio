"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard } from '../FeaturedProjects/ProjectCard';
import { ProjectCardProps } from '../FeaturedProjects/ProjectCard.types';

interface ProjectGridProps {
    projects: ProjectCardProps[];
}

export const ExtraProjectGrid = ({ projects }: ProjectGridProps) => {
    const displayProjects = projects.slice(0, 4); // Changed to 4 projects for bento layout
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isStacked, setIsStacked] = useState(false);
    const [stackProgress, setStackProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start stacking when container reaches the top of viewport
            const stackThreshold = windowHeight * 0.3;

            // Only be sticky while we're within the container bounds
            const isInStackZone = containerRect.top <= stackThreshold &&
                containerRect.bottom > windowHeight * 0.7 &&
                sectionRect.top <= stackThreshold;

            setIsStacked(isInStackZone);

            // Calculate stack progress based on container scroll position
            if (isInStackZone) {
                const containerHeight = containerRect.height;
                const scrollableArea = containerHeight - windowHeight;
                const scrolled = Math.max(0, stackThreshold - containerRect.top);
                const progress = Math.max(0, Math.min(1, scrolled / Math.max(scrollableArea * 0.3, 100)));
                setStackProgress(progress);
            } else {
                setStackProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bento grid layout configuration
    const bentoLayouts = [
        {
            // Project 1 - Large card (spans 2 columns on desktop)
            className: "col-span-2 row-span-2 md:col-span-2 lg:col-span-2",
            transform: 3
        },
        {
            // Project 2 - Medium card (top right)
            className: "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
            transform: 6
        },
        {
            // Project 3 - Medium card (bottom right)
            className: "col-span-1 row-span-1 md:col-span-1 lg:col-span-1",
            transform: 4
        },
        {
            // Project 4 - Wide card (bottom, spans full width on mobile, 2 cols on desktop)
            className: "col-span-2 row-span-1 md:col-span-2 lg:col-span-2",
            transform: 7
        }
    ];

    return (
        <div
            ref={containerRef}
            className="relative"
        >
            {/* Sticky section with stacking effect */}
            <section
                ref={sectionRef}
                className={`
          ${isStacked ? 'sticky top-0 z-10' : 'relative'} 
          transition-all duration-700 ease-out
          ${isStacked ? 'transform-gpu' : ''}
        `}
                style={{
                    transform: `
            translateY(${stackProgress * 10}px) 
            scale(${1 - stackProgress * 0.02})
            rotateX(${stackProgress * 2}deg)
          `,
                    transformOrigin: 'center top',
                    filter: `brightness(${1 - stackProgress * 0.1})`,
                }}
            >
                {/* Background with smooth reveal animation */}
                <div
                    className="pt-6 sm:pt-8 mx-4 sm:mx-6 md:mx-10 
                     transition-all duration-700 ease-out relative overflow-hidden"

                >

                    {/* Responsive container with proper margins */}
                    <div
                        className="px-4 md:px-6 lg:px-10 xl:px-20 pb-8 sm:pb-10
                       transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateY(${stackProgress * 8}px)`,
                        }}
                    >
                        {/* Video container - positioned on the left with original dimensions */}
                        <div className="mb-6 sm:mb-8 flex justify-start">
                            <video
                                src="/featured-projects/jivika.mp4"
                                className="max-w-md w-auto h-auto rounded-xl shadow-lg"
                                autoPlay
                                loop
                                muted
                            />
                        </div>
                        
                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-2 auto-rows-[12rem] sm:auto-rows-[14rem] md:auto-rows-[16rem] lg:auto-rows-[18rem] gap-4 sm:gap-6">
                            {/* Projects with bento layout and staggered animations */}
                            {displayProjects.map((project, index) => {
                                const layout = bentoLayouts[index];

                                return (
                                    <div
                                        key={index}
                                        className={`${layout.className} transition-all duration-700 ease-out`}
                                        style={{
                                            transform: `translateY(${stackProgress * layout.transform}px)`,
                                            opacity: 1 - stackProgress * 0.1,
                                        }}
                                    >
                                        {/* <div className="w-full h-full">
                      <ProjectCard {...project} variant="default" />
                    </div> */}



                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};