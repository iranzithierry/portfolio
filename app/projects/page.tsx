import React from 'react'
import ProjectsSection from '@/components/sections/projects-section'

export default function Page() {
  return (
    <div className='space-y-3 sm:space-y-6'>
        <h1 className='text-3xl sm:text-5xl font-bold'>Some cool stuff I&apos;ve built</h1>
        <ProjectsSection />
      </div>
  )
}
