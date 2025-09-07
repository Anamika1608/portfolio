"use client"

import React from 'react'
import { motion } from 'framer-motion';
import ContributionCard from './ContributionCard';
import { openSourceContributions } from './OpenSourceData';

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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {openSourceContributions.map((contribution, index) => (
          <ContributionCard
            key={contribution.id}
            contribution={contribution}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default OpenSource