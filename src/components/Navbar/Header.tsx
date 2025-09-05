"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/Navbar/ThemeToggle"

export function Header() {
    return (
        <header className="sticky top-0 z-50">
            <div
                className="absolute inset-0 backdrop-blur-[2px] "
                style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
            ></div>


            <div className="relative flex items-center justify-between mx-24 py-4">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    <img
                        decoding="async"
                        sizes="107px"
                        srcSet="https://framerusercontent.com/images/3lYPMe8OoTsaZYercDHn5VshvGs.gif?scale-down-to=512 512w,https://framerusercontent.com/images/3lYPMe8OoTsaZYercDHn5VshvGs.gif 747w"
                        src="https://framerusercontent.com/images/3lYPMe8OoTsaZYercDHn5VshvGs.gif"
                        alt="Logo"
                        className=""
                    />
                </div>

                {/* Right side - Navigation */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="text-sm font-jakarta hover:text-accent transition-colors duration-200"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </header>
    )
}