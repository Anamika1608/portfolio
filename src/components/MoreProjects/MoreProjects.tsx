import React from 'react'
import { ExtraProjectGrid } from './ExtraProjectGrid'
import { projectData } from '../FeaturedProjects/FeaturedProjects'

function MoreProjects() {
    return (
        <div>
            <div className="site-container font-ibm-plex text-3xl sm:text-2xl font-medium mt-12 mb-6 flex items-center">
                <div className="w-3 h-3 bg-black mr-2 rounded-xs"></div>
                More stuff I made
            </div>
            <ExtraProjectGrid projects={projectData} />
        </div>
    )
}

export default MoreProjects
