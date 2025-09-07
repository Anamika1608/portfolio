"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronUp, Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkExperienceItem } from "./types";

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
  title?: string;
  displayStyle?: 'bullets' | 'cards' | 'timeline' | 'tags';
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  experiences,
  title = "Work Experience",
  displayStyle = 'bullets'
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id);
    } else {
      newExpandedItems.add(id);
    }
    setExpandedItems(newExpandedItems);
  };

  const renderBulletStyle = (description: string[]) => (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border-l-4 border-blue-200">
      <ul className="space-y-3">
        {description.map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-sm text-gray-700 flex items-start group hover:text-gray-900 transition-colors"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors"></span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );

  const renderCardStyle = (description: string[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {description.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
        >
          <div className="flex items-start space-x-2">
            <Award className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
            <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTimelineStyle = (description: string[]) => (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
      <div className="space-y-4">
        {description.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative pl-10"
          >
            <div className="absolute left-2.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderTagStyle = (description: string[]) => (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex flex-wrap gap-2">
        {description.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );

  const renderContent = (description: string[]) => {
    switch (displayStyle) {
      case 'cards':
        return renderCardStyle(description);
      case 'timeline':
        return renderTimelineStyle(description);
      case 'tags':
        return renderTagStyle(description);
      default:
        return renderBulletStyle(description);
    }
  };

  return (
    <div className="mx-5 lg:ml-5 xl:ml-20 px-2 sm:px-6 md:px-12 mt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-start transition-transform duration-700 ease-out"
      >
        <div className="border border-black rounded-full px-3 sm:px-4 py-1 transition-all duration-700 ease-out hover:shadow-md">
          <h2 className="text-xl sm:text-2xl font-crimson font-medium">
            {title}
          </h2>
        </div>
      </motion.div>

      <div className="space-y-4 mr-4 sm:mr-8 lg:mr-16">
        {experiences.map((exp, index) => {
          const isExpanded = expandedItems.has(exp.id);
          const hasDescription = exp.description && exp.description.length > 0;

          return (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-200 mt-4"
            >
              <div
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between ${
                  hasDescription ? 'cursor-pointer hover:bg-gray-50' : ''
                } p-1 rounded-lg transition-all duration-200 group`}
                onClick={hasDescription ? () => toggleExpanded(exp.id) : undefined}
              >
                {/* Role - Full width on mobile, flex-1 on larger screens */}
                <div className="w-full sm:flex-1 mb-2 sm:mb-0">
                  <div className="font-normal text-lg sm:text-xl text-gray-900 transition-colors">
                    {exp.role}
                  </div>
                </div>

                {/* Company info - Responsive layout */}
                <div className="flex items-center justify-start sm:justify-center space-x-3 w-full sm:flex-1 mb-2 sm:mb-0">
                  {exp.companyLogo && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative flex-shrink-0">
                      <Image
                        src={exp.companyLogo}
                        alt={`${exp.company} logo`}
                        fill
                        className="rounded object-contain"
                      />
                    </div>
                  )}
                  <span className="text-lg sm:text-xl font-normal text-gray-700 transition-colors">
                    {exp.company}
                  </span>
                </div>

                {/* Period and chevron - Right aligned */}
                <div className="flex items-center justify-between sm:justify-end space-x-2 w-full sm:flex-1">
                  <div className="flex items-center space-x-2 text-gray-500">
                    {/* <Calendar className="w-4 h-4" /> */}
                    <span className="text-sm sm:text-lg font-normal">
                      {exp.period}
                    </span>
                  </div>
                  {hasDescription && (
                    <motion.div 
                      className="ml-2"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400 transition-colors" />
                    </motion.div>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {hasDescription && isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: "auto",
                      transition: {
                        height: { duration: 0.4, ease: "easeOut" },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeIn" },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 px-3">
                      {renderContent(exp.description || [])}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;