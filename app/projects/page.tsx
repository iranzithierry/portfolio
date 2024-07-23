"use client";
import Container from '@/components/container'
import Image from 'next/image';
import React, { useState } from 'react'

export default function Page() {
    const projects = [
        {
            name: 'Movo+',
            imageUrl: '/images/projects/movo+.svg',
            websiteUrl: 'https://movo-plus.vercel.app/',
            domain: 'movo-plus.vercel.app',
            techStacks: ['react', 'typescript', 'tailwindcss', 'django'],
            description:
                'Global marketplace for sellers of T-shirts & Shoes this platform was built to help the sellers who want to receive payments of their products all around world online using Stripe payment',
        },
        {
            name: 'Jeezy',
            imageUrl: '/images/projects/jeezy.svg',
            websiteUrl: 'https://jeezy.vercel.app',
            domain: 'jeezy.vercel.app',
            techStacks: ['react', 'typescript', 'tailwindcss', 'django'],
            description:
                'Jeezy is a hosting platform similar to Vercel, allowing users to deploy their websites for free from github repositories.',
        },
        {
            name: 'iBot',
            imageUrl: '/images/projects/ibot.png',
            websiteUrl: 'https://github.com/Iranzithierry/ibot-mobile-app/',
            domain: 'github.com',
            techStacks: ['react', 'javascript', 'tailwindcss', 'python'],
            description:
                'The iBot is  Chatbot application developed with React Native, tailored specifically to facilitate conversations in the Kinyarwanda language. This innovative chatbot harnesses the power of a self API derived from a comprehensive Kinyarwanda dialogue dataset',
        },
        {
            name: 'eSound',
            imageUrl: '/images/projects/e-sound.png',
            websiteUrl: 'https://e-sound.onrender.com/',
            domain: 'e-sound.onrender.com',
            techStacks: ['python', 'flask', 'bootstrap', 'javascript'],
            description:
                'Python-powered music downloader and player efficiently crawls user-provided YouTube links, extracting and converting audio into MP3 format, offering a user-friendly interface for downloading and playing music, with scalability to accommodate up to 1K users concurrently.',
        },
    ];
    return (
            <ul role="list" className="grid grid-cols-1 gap-x-12 pt-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => {
                    return (
                        <li key={index} className="relative flex flex-col items-start">
                            <Image
                                width={100}
                                height={100}
                                decoding='async'
                                src={project.imageUrl}
                                alt={`${project.name} Logo`}
                                className="relative z-10 w-8 h-8 rounded-md"
                            />
                            <h2 className="mt-6 text-base font-semibold text-zinc-800">
                                <a target="_blank" rel="noreferrer noopener" href={project.websiteUrl}>
                                    <span className="relative z-10 dark:text-gray-200">{project.name}</span>
                                </a>
                            </h2>
                            <p className="relative line-clamp-3 max-h-[5em] z-10 mt-2 text-sm text-zinc-600 dark:text-gray-400 transition-all ease-in-out duration-100">
                                {project.description}
                            </p>
                            <span className="z-10 flex gap-2 px-2 py-1 mt-2 text-sm rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600">
                                {project.techStacks.map((name, techIndex) => (
                                    <Image
                                        decoding='async'
                                        key={techIndex}
                                        src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${name}-colored.svg`}
                                        width="16" height="16" alt={name.toUpperCase()} />
                                ))}
                            </span>
                            <p className="relative z-10 flex items-center mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </svg>
                                <span className="ml-2">{project.domain}</span></p>
                        </li>
                    )
                })}
            </ul>
    )
}
