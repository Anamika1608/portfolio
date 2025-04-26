"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/Button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="outline"
            size="sm"
            className="rounded-full w-[75px] h-[32px] bg-background hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    )
}
