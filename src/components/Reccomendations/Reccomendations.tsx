"use client"

import React from 'react';
import { motion } from 'framer-motion';

function Reccomendations() {
    return (
        <div className="site-container mb-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start transition-transform duration-700 ease-out mt-12 mb-4"
            >
                <div className="border border-black rounded-full px-3 sm:px-4 py-1 transition-all duration-700 ease-out">
                    <h2 className="text-xl sm:text-2xl font-crimson font-medium">
                        Words of Appreciation
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
                        className="w-full h-auto rounded-xl block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4
                        }}
                        style={{ display: 'block' }}
                    />
                </motion.div>

                {/* Consul and IABTM Recommendations */}
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
                    <motion.div
                        className="rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6
                        }}
                    >
                        <img
                            src="/reccomendations/consul-purple.png"
                            alt="Consul Recommendation"
                            className="w-full h-auto rounded-xl mt-5 shadow-sm block"
                            style={{ display: 'block' }}
                        />
                    </motion.div>
                    <motion.div
                        className="rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8
                        }}
                    >
                        <img
                            src="/reccomendations/iabtm-green.png"
                            alt="IABTM Recommendation"
                            className="w-full h-auto rounded-xl mt-10 shadow-sm block"
                            style={{ display: 'block' }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Reccomendations;