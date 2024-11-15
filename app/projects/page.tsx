"use client";
import { Badge } from '@/components/ui/badge';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Page() {
    const projects = [
        {
            name: 'Cognova AI',
            image: '/images/projects/cognova-ai.png',
            video: '',
            href: 'https://app.cognova.io',
            links: [
                {
                  type: "Website",
                  href: "https://app.cognova.io",
                  icon: <Globe className="size-2.5" />,
                },
              ],
            dates: "October 2024 - Present",
            active: true,
            tags: ['Next.JS', 'FastAPI', 'Prisma', 'Cloudflare AI Worker', 'Neon Postgres','pgVector', 'Appwrite'],
            description:
                'Cognova AI is an AI-driven chat platform that helps businesses provide instant responses to customer inquiries across various channels, such as websites and WhatsApp. It learns from business documents and data to deliver accurate and relevant information, while also offering advanced analytics and knowledge base management.',
        },
        {
            name: 'Movo+',
            image: '/images/projects/movo+.svg',
            video: '',
            href: 'https://movoplus.com/vendors',
            links: [
                {
                  type: "Website",
                  href: "https://movoplus.com",
                  icon: <Globe className="size-2.5" />,
                },
              ],
            dates: "Jun 2024 - Sept 2024",
            active: true,
            tags: ['Next.JS', 'Django', 'Tailwindcss', 'Shadcn UI','Typescript', 'Stripe'],
            description:
                'Global marketplace for sellers of T-shirts & Shoes this platform was built to help the sellers who want to receive payments of their products all around world online using Stripe payment',
        },
        {
            name: 'Definitive+',
            image: '/images/projects/definitive+.png',
            video: '',
            href: 'https://definitiveplus.vercel.app/',
            links: [
                {
                  type: "Website",
                  href: "https://definitiveplus.vercel.app/",
                  icon: <Globe className="size-2.5" />,
                },
              ],
            dates: "Sept 2024 - Present",
            active: true,
            tags: ['Next.JS',  'Prisma', 'Tailwindcss', 'Shadcn UI','Typescript', 'Redis', 'Postgresql'],
            description:
                'Definitive+ was created to assist users from Rwanda in securing driving test spots. Simply select the district where you would like to take the test, and the system continuously monitors availability in that area. Once a slot becomes available, The user receives a message guiding them to book their spot on the official Irembo platform (irembo.gov.rw).',
        },
        {
            name: 'Jeezy',
            image: '/images/projects/jeezy.svg',
            video: '',
            href: 'https://jeezy.vercel.app',
            links: [
                {
                    type: "Website",
                    href: "https://jeezy.vercel.app",
                    icon: <Globe className="size-2.5" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/iranzithierry/jeezy",
                    icon: <GitHubLogoIcon className="size-2.5" />,
                  },
            ],
            dates: "",
            active: true,
            tags: ['Next.JS', 'Django', 'Shadcn UI', 'Typescript', 'Tailwindcss',],
            description:
                'Jeezy is a hosting platform similar to Vercel, allowing users to deploy their websites for free from github repositories.',
        },
        {
            name: 'iBot',
            image: '/images/projects/ibot.png',
            video: '',
            href: 'https://github.com/Iranzithierry/ibot-mobile-app/',
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Iranzithierry/ibot-mobile-app/",
                    icon: <GitHubLogoIcon className="size-2.5" />,
                },
            ],
            dates: "",
            active: true,
            tags: ['React Native', 'Tailwindcss', 'Flask'],
            description:
                'The iBot is  Chatbot application developed with React Native, tailored specifically to facilitate conversations in the Kinyarwanda language. This innovative chatbot harnesses the power of a self API derived from a comprehensive Kinyarwanda dialogue dataset',
        },
        {
            name: 'eSound',
            image: '/images/projects/e-sound.png',
            video: '',
            href: 'https://e-sound.onrender.com/',
            links: [
                {
                    type: "Website",
                    href: "https://e-sound.onrender.com/",
                    icon: <Globe className="size-2.5" />,
                },
            ],
            dates: "",
            active: true,
            tags: ['Python', 'Flask', 'Bootstrap', 'Javascript'],
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
                            src={project.image}
                            alt={`${project.name} Logo`}
                            className="relative z-10 w-8 h-8 rounded-md"
                        />
                        <h2 className="mt-6 text-base font-semibold text-zinc-800">
                            <a target="_blank" rel="noreferrer noopener" href={project.href}>
                                <span className="relative z-10 dark:text-gray-200">{project.name}</span>
                            </a>
                        </h2>
                        <p className="relative line-clamp-5 z-10 mt-2 text-sm text-zinc-600 dark:text-gray-400 transition-all ease-in-out duration-100">
                            {project.description}
                        </p>
                        {project.tags && project.tags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                                {project.tags?.map((tag) => (
                                    <Badge
                                        className="px-1.5 py-0 text-[10px]"
                                        variant="secondary"
                                        key={tag}
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                        {project.links && project.links.length > 0 && (
                            <div className="flex flex-row flex-wrap items-start gap-1 mt-4">
                                {project.links?.map((link, idx) => (
                                    <Link href={link?.href} key={idx} target="_blank">
                                        <Badge key={idx} className="flex items-center gap-1 px-2 py-1 text-[10px]">
                                            {link.icon}
                                            {link.type}
                                        </Badge>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}
