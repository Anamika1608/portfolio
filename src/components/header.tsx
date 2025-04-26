"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
    return (
        <header className="flex items-center justify-between w-full py-6 px-6 md:px-12">
            <div className="flex items-center space-x-2">
                <Link href="/" className="text-2xl">
                    <span role="img" aria-label="Emoji" className="text-3xl">A</span>
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <ThemeToggle />
                <Link href="/contact" className="text-sm font-jakarta hover:text-accent transition-colors">
                    Get in touch
                </Link>

            </div>
        </header>
    )
}

