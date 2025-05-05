import React from 'react'
import { Metadata } from "next";
import ProjectsSection from '@/components/sections/projects-section'
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: "Projects",
}
export default function Page() {
  return (
    <div className='space-y-3 sm:space-y-6'>
      <h1 className='text-3xl sm:text-5xl font-bold'>Some cool stuff I&apos;ve built</h1>
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        I&apos;ve worked on a range of projects over the years, some of which were experimental and others of which were finished goods. One such example is
        <a className='ml-1 underline underline-offset-2' href="https://cognova.io">Cognova AI</a>  which was successfully acquired.
        &nbsp;Every project demonstrates my commitment to creating solutions that are useful and significant.
      </p>

      <ProjectsSection />
    </div>
  )
}
