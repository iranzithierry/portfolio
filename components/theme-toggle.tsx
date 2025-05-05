"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            appearance="plain"
            shape="circle"
            intent="secondary"
            size="square-petite"
            onPress={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun className="text-gray-500 dark:text-gray-300 h-4 w-4 dark:hidden" />
            <Moon className="text-gray-500 dark:text-gray-300 hidden h-4 w-4 dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
