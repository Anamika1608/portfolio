"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectCardProps } from './ProjectCard.types';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const displayProjects = projects.slice(0, 5);
  const sectionRef = useRef<HTMLElement>(null);
  const [isStacked, setIsStacked] = useState(false);
  const [stackProgress, setStackProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start stacking when section reaches the top of viewport
      const stackThreshold = windowHeight * 0.3; 
      const isInStackZone = rect.top <= stackThreshold && rect.bottom > 0;
      
      setIsStacked(isInStackZone);
      
      // Calculate stack progress for smooth animations
      if (isInStackZone) {
        const progress = Math.max(0, Math.min(1, (stackThreshold - rect.top) / (windowHeight * 0.4)));
        setStackProgress(progress);
      } else {
        setStackProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer div to maintain layout flow */}
      <div className="" />
      
      {/* Sticky section with stacking effect */}
      <section
        ref={sectionRef}
        className={`
          sticky top-0 z-50 transition-all duration-700 ease-out
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
          className="pt-6 sm:pt-8 bg-[#f8f8f8] rounded-xl sm:rounded-3xl mx-4 sm:mx-6 md:mx-10 
                     transition-all duration-700 ease-out relative overflow-hidden"
          style={{
            boxShadow: isStacked 
              ? `0 ${20 + stackProgress * 30}px ${40 + stackProgress * 20}px rgba(0,0,0,${0.1 + stackProgress * 0.15})`
              : '0 10px 30px rgba(0,0,0,0.05)',
            borderRadius: `${12 + stackProgress * 12}px`,
          }}
        >
          {/* Animated background overlay for stacking effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent 
                       transition-opacity duration-700 ease-out pointer-events-none"
            style={{ opacity: stackProgress * 0.3 }}
          />
          
          {/* Responsive section header */}
          <div 
            className="flex justify-start mb-3 sm:mb-4 ml-4 md:ml-5 lg:ml-10 xl:ml-20
                       transition-transform duration-700 ease-out"
            style={{
              transform: `translateY(${stackProgress * 5}px)`,
            }}
          >
            <div 
              className="border border-black rounded-full px-3 sm:px-4 py-1 
                         transition-all duration-700 ease-out"
              style={{
                backgroundColor: `rgba(255,255,255,${stackProgress * 0.3})`,
                borderColor: `rgba(0,0,0,${1 - stackProgress * 0.2})`,
                transform: `scale(${1 - stackProgress * 0.05})`,
              }}
            >
              <h2 className="text-xl sm:text-2xl font-crimson font-medium">
                Featured Projects
              </h2>
            </div>
          </div>
          
          {/* Responsive container with proper margins */}
          <div 
            className="px-4 md:px-6 lg:px-10 xl:px-20 pb-8 sm:pb-10
                       transition-transform duration-700 ease-out"
            style={{
              transform: `translateY(${stackProgress * 8}px) scale(${1 - stackProgress * 0.03})`,
            }}
          >
            {/* Custom grid for specific breakpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* First project */}
              <div 
                className="col-span-1 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${stackProgress * 3}px)`,
                  opacity: 1 - stackProgress * 0.1,
                }}
              >
                {displayProjects[0] && (
                  <ProjectCard {...displayProjects[0]} variant="default" />
                )}
              </div>
              
              {/* Second project */}
              <div 
                className="col-span-1 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${stackProgress * 6}px)`,
                  opacity: 1 - stackProgress * 0.1,
                }}
              >
                {displayProjects[1] && (
                  <ProjectCard {...displayProjects[1]} variant="default" />
                )}
              </div>
              
              {/* Third project */}
              <div 
                className="col-span-1 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${stackProgress * 4}px)`,
                  opacity: 1 - stackProgress * 0.1,
                }}
              >
                {displayProjects[2] && (
                  <ProjectCard {...displayProjects[2]} variant="default" />
                )}
              </div>
              
              {/* Fourth project */}
              <div 
                className="col-span-1 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${stackProgress * 7}px)`,
                  opacity: 1 - stackProgress * 0.1,
                }}
              >
                {displayProjects[3] && (
                  <ProjectCard {...displayProjects[3]} variant="default" />
                )}
              </div>
              
              {/* Fifth project */}
              <div 
                className="col-span-1 md:col-span-2 lg:col-span-1 transition-all duration-700 ease-out"
                style={{
                  transform: `translateY(${stackProgress * 5}px)`,
                  opacity: 1 - stackProgress * 0.1,
                }}
              >
                {displayProjects[4] && (
                  <ProjectCard {...displayProjects[4]} variant="default" />
                )}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};