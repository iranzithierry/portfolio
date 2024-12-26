"use client"

import * as React from "react"
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as NextThemesProvider } from "next-themes"

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "always"
  })
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <PostHogProvider client={posthog}>
        {children}
      </PostHogProvider>
    </NextThemesProvider>
  )
}
