"use client";
import { rgbDataURL } from "@/components/styled-image";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import dynamic from 'next/dynamic';
import { useState } from "react";

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });


export default function Projects() {
    const projects = [
        {
            name: 'Kinyarwanda youth dialogue datasets',
            imageUrl: '/projects/kaggle.png',
            websiteUrl: 'https://www.kaggle.com/datasets/iranzidev/kinyarwanda-conversation-datasets/',
            links: ['datrue.pythonanywhere/prompt', 'API'],
            domain: 'kaggle.com',
            techStacks: ['python', 'react'],
            description:
                'A collection of dialogues involving young individuals from Rwanda, and it has been prepared or processed using Python. Additionally, the mention of "sequence-to-sequence" suggests that the dataset may be suitable for tasks involving sequence-based modeling, such as language modeling or natural language processing.',
        },
        {
            name: 'iBot',
            imageUrl: '/projects/ibot.png',
            websiteUrl: 'https://github.com/Iranzithierry/ibot-mobile-app/',
            domain: 'github.com',
            techStacks: ['react', 'javascript', 'tailwindcss', 'python'],
            description:
                'The iBot is  Chatbot application developed with React Native, tailored specifically to facilitate conversations in the Kinyarwanda language. This innovative chatbot harnesses the power of a self API derived from a comprehensive Kinyarwanda dialogue dataset',
        },


        {
            name: 'StateMula',
            imageUrl: '/projects/statemula.png',
            websiteUrl: 'https://statemula.com/',
            domain: 'statemula.com',
            techStacks: ['laravel', 'php', 'kaggle', 'javascript', 'heroku', 'mysql'],
            description:
                'A platform s for Kenyan users to generate income through affiliate marketing and has attracted a user base of around 15,000 individuals..',
        },
        {
            name: 'Huggingface Chat',
            imageUrl: '/projects/hugging.svg',
            websiteUrl: 'https://hugging-face-next-js-three.vercel.app/',
            domain: 'vercel.app',
            techStacks: ['react', 'nextjs', 'typescript'],
            description:
                'The Chat UI is a sophisticated user interface crafted with React and Next.js, offering a seamless and dynamic user experience. Leveraging the power of the Hugging Face Open Assistant API,',
        },
        {
            name: 'eSound',
            imageUrl: '/projects/e-sound.png',
            websiteUrl: 'https://e-sound.onrender.com/',
            domain: 'e-sound.onrender.com',
            techStacks: ['python', 'flask', 'bootstrap', 'javascript'],
            description:
                'Python-powered music downloader and player efficiently crawls user-provided YouTube links, extracting and converting audio into MP3 format, offering a user-friendly interface for downloading and playing music, with scalability to accommodate up to 1K users concurrently.',
        },
        {
            name: 'eVideo',
            imageUrl: '/projects/e-video.png',
            websiteUrl: 'https://e-video.onrender.com/',
            domain: 'e-video.onrender.com',
            techStacks: ['python', 'flask', 'javascript'],
            description:
                'The latest version of eSound introduces video conversion capabilities, enabling video  format and enjoy their audio content in video format',
        },
    ];

    return (
        <main className="max-w-2xl lg:max-w-5xl mt-16 sm:mt-32 mx-auto">
            <div className="max-w-2xl mx-5 sm:mx-0">
                <h1 className="text-4xl tracking-tighter text-zinc-800 sm:text-5xl font-bold">
                    Projects That Reflect My Efforts to Make a Difference in the World.
                </h1>
                <p className="mt-6 text-base text-zinc-600">
                    Throughout the years, I&apos;ve dedicated myself to various projects, and here are some that hold a special place in my heart. Many of them are open-source, so feel free to explore the code and contribute if you have ideas on how they can be enhanced.
                </p>
            </div>

            <div className="my-20 mx-5 sm:mx-0">
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => {
                        const [fallbackSrc, setFallbackSrc] = useState({ url: '', index: -1 });

                        return (
                            <li key={index} className="group relative flex flex-col items-start">
                                <Image
                                    width={100}
                                    height={100}
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL(0, 105, 255)}
                                    decoding='async'
                                    src={project.imageUrl}
                                    alt={`${project.name} Logo`}
                                    className="h-8 w-8 relative z-10 rounded-md"
                                />
                                <h2 className="mt-6 text-base font-semibold text-zinc-800">
                                    <div
                                        className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl">
                                    </div>
                                    <a target="_blank" rel="noreferrer noopener" href={project.websiteUrl}>
                                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                        <span className="relative z-10">{project.name}</span>
                                    </a>
                                </h2>
                                <p className="relative z-10 mt-2 text-sm text-zinc-600">{project.description}</p>
                                <span className="bg-zinc-100 rounded flex gap-2 px-2 py-1 z-10 mt-2 text-sm text-zinc-600">
                                    {project.techStacks.map((name, techIndex) => (
                                        <DynamicImage
                                            placeholder="blur"
                                            blurDataURL={rgbDataURL(0, 105, 255)}
                                            decoding='async'
                                            onError={() => {
                                                setFallbackSrc({ url: `https://www.svgrepo.com/show/503406/language-xml.svg`, index: techIndex });
                                            }}
                                            key={techIndex}
                                            src={`${fallbackSrc.index === techIndex ? fallbackSrc.url : `https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${name}-colored.svg`}`}
                                            width="16" height="16" alt={name.toUpperCase()} />
                                    ))}
                                </span>
                                <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                    </svg>
                                    <span className="ml-2">{project.domain}</span></p>
                                {project.links && (
                                    <p className="relative z-10 flex items-center text-xs font-medium text-zinc-400 transition group-hover:text-teal-500">
                                        <DynamicImage
                                            className="h-4 w-4"
                                            src='/icons/api.svg'
                                            width="16" height="16" alt='API Icon' />
                                        <span className="ml-2">{project.links[1]} {project.links[0]}</span></p>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}