"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { blogData } from './BlogData'; // Assuming BlogData is in the same directory
import BlogListItem from './BlogListItem';

function Blogs() {
    return (
        <div className="site-container tracking-tight leading-snug flex flex-col lg:flex-row lg:gap-20"> {/* Adjusted max-width and gap */}

            {/* ====== Left Column: Title ====== */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-8" // Added right padding for spacing
            >
                <h2 className="text-5xl font-semibold font-crimson text-[#2C2C2C] sticky top-28">
                    Most Recent
                    <br />
                    Blogs I wrote
                </h2>
            </motion.div>

            {/* ====== Right Column: Blog List ====== */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="lg:w-2/3"
            >
                <div>
                    {blogData.map((blog) => (
                        <div key={blog.id} className="border-b border-gray-200 last:border-b-0">
                            <BlogListItem
                                title={blog.title}
                                description={blog.description}
                                imageUrl={blog.imageUrl}
                                blogUrl={blog.blogUrl}
                                date={blog.date}
                                readTimeMinutes={blog.readTimeMinutes}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Blogs;