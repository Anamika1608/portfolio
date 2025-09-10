"use client"

import React from 'react';
import { motion } from 'framer-motion';

function Reccomendations() {
    return (
        <div className="mx-5 lg:ml-5 xl:ml-20 px-2 sm:px-6 md:px-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start transition-transform duration-700 ease-out mt-12 mb-4"
            >
                <div className="border border-black rounded-full px-3 sm:px-4 py-1 transition-all duration-700 ease-out hover:shadow-md">
                    <h2 className="text-xl sm:text-2xl font-crimson font-medium">
                        What people are saying
                    </h2>
                </div>
            </motion.div>

            {/* Recommendations Flex Container */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
                {/* TUF Recommendation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.2
                    }}
                    className="flex-1 relative overflow-hidden rounded-xl shadow-lg"
                >
                    <motion.img
                        src="/reccomendations/tuf-beige.png"
                        alt="TUF Recommendation"
                        className="w-full h-auto rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>

                {/* Consul Recommendation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.4
                    }}
                    
                    className="flex-1 relative overflow-hidden rounded-xl"
                >
                    <motion.img
                        src="/reccomendations/consul-purple.png"
                        alt="Consul Recommendation"
                        className="w-full h-auto rounded-xl mt-8 shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6
                        }}
                    />
                     <motion.img
                        src="/reccomendations/iabtm-green.png"
                        alt="IABTM Recommendation"
                        className="w-full h-auto rounded-xl mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Reccomendations;