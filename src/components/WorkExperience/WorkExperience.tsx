"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { WorkExperienceItem } from "./types";

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
  title?: string;
}

const tagStyles = [
  "bg-[#E9FFD9] text-[#2B7500] border-[#CFEFBD]",
  "bg-[#DAF0FF] text-[#003CAE] border-[#BBDDF9]",
  "bg-[#FFF3DA] text-[#A85800] border-[#F0D6A8]",
  "bg-[#F0FDFA] text-[#0F766E] border-[#B8E6DE]",
];

const getInitials = (company: string) =>
  company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const WorkExperience: React.FC<WorkExperienceProps> = ({
  experiences,
  title = "Work Experience",
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const reduceMotion = useReducedMotion();

  const toggleExpanded = (id: string) => {
    setExpandedItems((currentItems) => {
      const nextItems = new Set(currentItems);
      if (nextItems.has(id)) {
        nextItems.delete(id);
      } else {
        nextItems.add(id);
      }
      return nextItems;
    });
  };

  return (
    <div className="site-container mt-10">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        className="flex justify-start transition-transform duration-700 ease-out"
      >
        <div className="border border-black rounded-full px-3 sm:px-4 py-1 transition-all duration-700 ease-out hover:shadow-md">
          <h2 className="text-xl sm:text-2xl font-crimson font-medium">
            {title}
          </h2>
        </div>
      </motion.div>

      <div className="mt-5">
        {experiences.map((experience, index) => {
          const isExpanded = expandedItems.has(experience.id);
          const hasDescription =
            experience.description && experience.description.length > 0;
          const isExpandable = experience.isExpandable ?? hasDescription;
          const panelId = `experience-panel-${experience.id}`;
          const buttonId = `experience-trigger-${experience.id}`;

          return (
            <motion.article
              key={experience.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="relative"
            >
              <button
                type="button"
                id={buttonId}
                aria-expanded={isExpandable ? isExpanded : undefined}
                aria-controls={isExpandable ? panelId : undefined}
                disabled={!isExpandable}
                onClick={() =>
                  isExpandable && toggleExpanded(experience.id)
                }
                className="group w-full text-left py-4 sm:py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black disabled:cursor-default"
              >
                <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-center lg:relative">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-[#FBFAF4] font-ibm-plex text-xs font-semibold text-black/60">
                      {experience.companyLogo ? (
                        <Image
                          src={experience.companyLogo}
                          alt={`${experience.company} logo`}
                          fill
                          className="object-contain p-1.5"
                        />
                      ) : (
                        <span aria-hidden="true">
                          {getInitials(experience.company)}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-crimson text-xl font-medium leading-tight text-[#1f1f1f] sm:text-2xl">
                        {experience.role}
                      </h3>
                      <p className="font-ibm-plex text-sm text-black/55">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:col-span-2 sm:row-start-2 sm:justify-start lg:absolute lg:left-1/2 lg:top-1/2 lg:col-span-1 lg:row-start-1 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:justify-center">
                    {(experience.tags ?? []).slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`rounded-md border px-2.5 py-1 font-ibm-plex text-[11px] font-medium uppercase tracking-[0.12em] ${
                          tagStyles[tagIndex % tagStyles.length]
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 sm:col-start-2 sm:row-start-1">
                    <span className="whitespace-nowrap font-ibm-plex text-sm text-black/50 sm:text-base">
                      {experience.period}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      animate={
                        reduceMotion
                          ? undefined
                          : { rotate: isExpanded ? 180 : 0 }
                      }
                      transition={{ duration: 0.2 }}
                      className={`flex h-8 w-8 items-center justify-center text-black/45 group-hover:text-black ${
                        isExpandable ? "" : "invisible"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpandable && isExpanded && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            height: "auto",
                            transition: {
                              height: { duration: 0.34, ease: "easeOut" },
                              opacity: { duration: 0.22, delay: 0.06 },
                            },
                          }
                    }
                    exit={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 0,
                            height: 0,
                            transition: {
                              height: { duration: 0.24, ease: "easeIn" },
                              opacity: { duration: 0.16 },
                            },
                          }
                    }
                    className="overflow-hidden"
                  >
                    <div className="pb-5 sm:pb-6">
                      <div className="border border-black/10 bg-[#FDFBF5] p-4 sm:p-5">
                        {experience.summary && (
                          <p className="max-w-3xl font-crimson text-xl leading-snug text-[#2C2C2C] sm:text-2xl">
                            {experience.summary}
                          </p>
                        )}

                        <div className="mt-5 grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
                          <aside className="border-b border-black/10 pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
                            <p className="font-ibm-plex text-[11px] font-semibold uppercase tracking-[0.2em] text-black/45">
                              Stack
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {(experience.stack ?? []).map((tool) => (
                                <span
                                  key={tool}
                                  className="border border-black/10 bg-white px-2.5 py-1 font-ibm-plex text-xs text-black/65"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </aside>

                          <ol className="space-y-4">
                            {experience.description?.map((item, itemIndex) => (
                              <motion.li
                                key={item}
                                initial={
                                  reduceMotion ? false : { opacity: 0, y: 12 }
                                }
                                animate={
                                  reduceMotion
                                    ? undefined
                                    : { opacity: 1, y: 0 }
                                }
                                transition={{ delay: itemIndex * 0.05 }}
                                className="pt-2 first:pt-0"
                              >
                                <p className="text-base leading-relaxed text-black/75 sm:text-[17px]">
                                  {item}
                                </p>
                              </motion.li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
