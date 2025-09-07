"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import LinkSection from './LinkSection';

interface Props {
  githubUrl: string;
  docUrl: string;
  index: number;
}

const ContributionLinksCard = ({ githubUrl, docUrl, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative p-4 overflow-hidden rounded-3xl shadow-lg"
    >
      {/* Background Glow Effect */}
      <div
        className="absolute inset-0 [background:linear-gradient(to_bottom,#ededed_0%,#ededed_55%,rgba(237,237,237,0.6)_70%,transparent_90%),linear-gradient(to_right,#c4e8c1_0%,#c4e8c1_50%,#f7c797_70%,#fbe499_100%)] opacity-75 blur-2xl -z-10"
        aria-hidden="true"
      />

      {/* Main Card Content */}
      <div className="flex flex-col justify-center items-center gap-8 p-6 rounded-2xl">

        <LinkSection
          href={githubUrl}
          title="All my code and contributions"
          linkText="View on GitHub"
          icon={<FaGithub size={18} />}
          variant="primary" // Dark button style
        />

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <LinkSection
          href={docUrl}
          title="My SEO, AEO and AIO analysis for cilium"
          linkText="Read Analysis"
          icon={<CgFileDocument size={18} />}
          variant="secondary" // Light button style
        />

      </div>
    </motion.div>
  );
};

export default ContributionLinksCard;