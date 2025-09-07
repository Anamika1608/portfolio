import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react'; // Using lucide-react for icons
import { OpenSourceContribution } from './OpenSourceData';


interface ContributionCardProps {
    contribution: OpenSourceContribution;
    index: number;
}

const ContributionCard: React.FC<ContributionCardProps> = ({ contribution, index }) => {
    const {
        title,
        description,
        technologies,
        logo 
    } = contribution;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative w-full max-w-md p-4" // Added horizontal padding
        >
            {/* Background/Border Card with the company image */}
            <div className="absolute inset-x-4 bottom-0 top-[24px] bg-white rounded-2xl shadow-md overflow-hidden"> {/* Adjusted inset to account for padding */}
                {/* Company Image at the top of this background card */}
                <div
                    className="h-40 w-full bg-gray-50 flex items-center justify-center rounded-t-2xl"
                >
                    <img
                        src={logo}
                        alt={title}
                        className="max-w-full max-h-full object-contain p-6 scale-90"
                        onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 text-lg font-semibold">${title.charAt(0)}</div>`;
                        }}
                    />
                </div>
            </div>

            {/* Main Foreground Card - This is the white card with all the text content */}
            <div className="relative mt-40 mx-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">

                {/* Content Section */}
                <div className="p-5 pb-4"> {/* Adjusted padding */}


                    {/* Title and Description */}
                    <h3 className="font-semibold text-lg text-gray-900">{title}</h3> {/* Adjusted font size/weight */}
                    <p className="text-gray-600 text-sm mt-1 leading-snug">
                        {description || 'Your AI helper for reading, organizing, and responding to emails.'} {/* Use actual description */}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {technologies.map((tech, techIndex) => ( // Only show first 2 tags to match image
                            <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">

                        <div className="flex items-center gap-2 bg-gray-50 text-gray-600 rounded-full px-3 py-1">
                            <CalendarDays className="h-4 w-4 text-gray-400" />
                            <span className="text-xs font-medium">
                                {contribution.period}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContributionCard;