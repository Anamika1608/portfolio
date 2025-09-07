"use client"

import React from 'react';
import { motion } from 'framer-motion';
import ContributionCard from './ContributionCard';
import { openSourceContributions } from './OpenSourceData';
import ContributionLinksCard from './ContributionLinksCard'; 

function OpenSource() {
  return (
    <div className="mx-5 lg:ml-5 xl:ml-20 px-2 sm:px-6 md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-start transition-transform duration-700 ease-out mt-12 mb-8"
      >
        <div className="border border-black rounded-full px-3 sm:px-4 py-1 transition-all duration-700 ease-out hover:shadow-md">
          <h2 className="text-xl sm:text-2xl font-crimson font-medium">
            Open Source
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 -ml-3">
        {openSourceContributions.map((contribution, index) => (
          <React.Fragment key={contribution.id}>
            <ContributionCard
              contribution={contribution}
              index={index}
            />
            
            {index === 0 && (
              <ContributionLinksCard
                githubUrl="https://github.com/Anamika1608/my-oss-contributions" 
                docUrl="https://docs.google.com/document/d/1Rnlqb7fQ8YahFWe1r-_R1ufJh5j8e6CJzo4phvOBpGg/edit?usp=sharing"
                index={index + 0.5} 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default OpenSource;
