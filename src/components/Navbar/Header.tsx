"use client"

import Link from "next/link"
import { useState } from "react"

export function Header() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <header className="sticky top-0 z-50">
            <div
                className="absolute inset-0 backdrop-blur-[2px] "
                style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
            ></div>

            <div className="relative flex items-center justify-between mx-24 mr-36 py-4">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    {/* <img
                        decoding="async"
                        sizes="107px"
                        srcSet="https://framerusercontent.com/images/3lYPMe8OoTsaZYercDHn5VshvGs.gif?scale-down-to=512 512w,https://framerusercontent.com/images/3lYPMe8OoTsaZYercDHn5VshvGs.gif 747w"
                        src="https://framerusercontent.com/images/3lYPMe8OoTsaZYercDHn5VshvGs.gif"
                        alt="Logo"
                        className=""
                    /> */}
                </div>

                {/* Right side - Navigation */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="relative">
                        {/* Video Background */}
                        <div 
                            className={`absolute inset-0 rounded-full overflow-hidden transition-opacity duration-300 ${
                                isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ zIndex: -1 }}
                        >
                            
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        </div>

                        <Link
                            href="https://cal.com/anamikaagg"
                            className={`relative text-sm font-jakarta transition-all duration-300 px-6 py-3 rounded-full flex items-center group ${
                                isHovered 
                                    ? 'text-white shadow-2xl transform scale-105' 
                                    : 'bg-black text-white hover:bg-gray-900'
                            }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="relative z-10">Get in touch</span>
                            
                            <svg 
                                className={`transition-all duration-300 transform ${
                                    isHovered ? 'w-4 h-4 opacity-100 translate-x-1 scale-110 ml-2' : 'opacity-0 w-0 ml-0'
                                }`}
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}