import React from 'react'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
import SocialIcons from './social-icons'
import { DownloadIcon } from '@radix-ui/react-icons'
import { AcademicCapIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from './ui/badge'

export default function Profile() {
    return (
        <>
            <div className='py-4'>
                <div className="flex items-center gap-x-3">
                    <div className="shrink-0 hidden lg:block">
                        <Image width={500} height={500} className="shrink-0 size-16 rounded-full" src="/images/logo.png" alt="Avatar" />
                    </div>

                    <div className="grow">
                        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                            Iranzi Thierry
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Software Engineer, DevOps
                        </p>
                    </div>
                </div>
                <About />
                <SocialIcons />
            </div>
            <div className="grid lg:grid-cols-5 gap-4 lg:gap-12 items-stretch overflow-hidden">
                <main className="flex-1 overflow-y-auto lg:col-span-3">
                    <Testimonials />
                    <Education />
                    <Skills />
                    <Articles />
                </main>
                <aside className="lg:col-span-2 flex flex-col flex-col-reverse lg:block overflow-y-auto lg:space-y-4">
                    <SignUpNewsLetter />
                    <Experience />
                </aside>
            </div>
        </>
    )
}

function About() {
    return (
        <div className="mt-8 max-w-xl">
            <p className="text-sm text-gray-600 dark:text-neutral-400">
                As a passionate software engineer and DevOps with over four years of experience.
                I specialize in developing robust and scalable solutions.
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                I am deeply committed to creating high-performance applications that meet client expectations,
                while ensuring optimal scalability and functionality across diverse technological landscapes.
            </p>
        </div>
    )
}

function Experience() {
    const experienceData = [
        {
            companyName: 'Uruti Hub',
            companyImageSrc: '/images/companies/uruti-hub.png',
            companyRole: 'Frontend Developer',
            startYear: '2023',
            endYear: 'Present',
        }
    ]
    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex items-center'>
                    <BriefcaseIcon className="h-5 w-5 flex-none" />
                    <span className="ml-2">Experience</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <ol className="space-y-4">
                    {experienceData.map((experience, idx) => (
                        <li key={idx} className="flex gap-4">
                            <div className="relative overflow-hidden mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image alt="" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="w-full h-full" src={experience.companyImageSrc} />
                            </div>
                            <dl className="flex flex-auto flex-wrap gap-x-2">
                                <dt className="sr-only">Company</dt>
                                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{experience.companyName}</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="text-xs text-zinc-500 dark:text-zinc-400">{experience.companyRole}</dd>
                                <dt className="sr-only">Date</dt>
                                <dd className="ml-auto space-x-1 text-xs text-zinc-400 dark:text-zinc-500">
                                    <time>{experience.startYear}</time>
                                    <span aria-hidden="true">—</span>
                                    <time>{experience.endYear}</time>
                                </dd>
                            </dl>
                        </li>
                    ))}
                </ol>
            </CardContent>
            <CardFooter>
                <Button variant={'outline'} size={'sm'} className='w-full'>
                    <span>Download CV </span>
                    <DownloadIcon className='h-4 w-4' />
                </Button>
            </CardFooter>
        </Card>
    )
}
function SignUpNewsLetter() {
    return (
        <Card className="mt-4 lg:mt-0">
            <CardHeader>
                <CardTitle className='flex items-center'>
                    <EnvelopeIcon className="h-5 w-5 flex-none" />
                    <span className="ml-2">Stay up to date</span>
                </CardTitle>
                <CardDescription>
                    Get notified when I publish something new, and unsubscribe at any time.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex space-x-1">
                    <Input
                        name="email-address"
                        type="email"
                        autoComplete="email"
                        required
                        className='flex-grow'
                        placeholder="Email address"
                    />
                    <Button className='inline-flex' size={'xs'}>
                        Notify me
                    </Button>
                </form>
            </CardContent>
        </Card>

    )
}
function Articles() {
    const articlesData = [
        {
            date: "Jun 21, 2024",
            title: "How to Integrate Stripe in Next.js",
            description: "Stripe is a powerful payment processing platform, and combining it with Next.js enables you to create a seamless checkout experience.",
            link: "#",
        },
        {
            date: "May 12, 2024",
            title: "Creating a JavaScript Collision Detection System",
            description: "Collision detection is a fundamental aspect of game development and interactive animations. It involves determining when two or more objects in a digital space intersect or come into contact. In this blog, we'll explore a simple approach to implementing collision detection using JavaScript. We'll create a basic example to detect collisions between circles on a canvas.",
            link: "#",
        }
    ]
    return (
        <div className="my-10 sm:my-14">
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                Articles
            </h2>
            <ul className="space-y-10">
                {articlesData.map((article, index) => (
                    <li key={index}>
                        <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                            {article.date}
                        </p>
                        <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                            {article.title}
                        </h5>
                        <p className="mt-1 text-sm line-clamp-4 text-gray-500 dark:text-neutral-500">
                            {article.description}
                        </p>
                        <p className="mt-1">
                            <a className="text-sm text-primary hover:text-primary/80 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href={article.link}>
                                Read Article {">"}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
function Testimonials() {
    const testimonialData = [
        {
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus maiores ipsum exercitationem excepturi. Possimus necessitatibus maiores.",
            author: {
                name: "Iranzi Thierry",
                avatar: "/images/logo.png"
            }
        },
        {
            quote: "Necessitatibus eius tenetur quisquam error natus, earum iste ut, neque vel hic amet adipisci, nemo fugit explicabo temporibus minus ducimus delectus perspiciatis.",
            author: {
                name: "Iranzi Thierry",
                avatar: "/images/logo.png"
            }
        }
    ]
    return (
        <div className="mt-10 sm:mt-14">
            <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                {testimonialData.map((testmony, idx) => (
                    <div key={idx} className="sm:-ms-4 py-6 sm:px-4">
                        <blockquote>
                            <p className="text-sm text-gray-800 dark:text-neutral-200">
                                {testmony.quote}
                            </p>
                            <footer className="mt-3">
                                <div className="flex items-center gap-x-2">
                                    <Image height={320} width={320} className="shrink-0 size-5 rounded-full" src={testmony.author.avatar} alt="Avatar" />
                                    <div className="grow">
                                        <div className="text-xs text-gray-500 dark:text-neutral-500">
                                            {testmony.author.name}
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    )
}
function Education() {

    const educationData = [
        {
            period: "Jan 2023 - Present",
            degree: "Advanced Level In Software Development",
            institution: "College Geoge Fox"
        },
        {
            period: "Jan 2019 - Sept 2022",
            degree: "Ordinary Level In Math, Physics, ICT and Literature",
            institution: "Saint Bernadette"
        }
    ]
    return (
        <div className="mt-10 sm:mt-14">
            <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
                Education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
                        <AcademicCapIcon className="shrink-0 size-10 mb-3 text-gray-700" width="400" height="400" />

                        <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                            {item.period}
                        </h3>
                        <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                            {item.degree}
                        </p>
                        <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            {item.institution}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
function Skills() {

    const skills = [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Python",
        "Php",
        "Postgres",
        "Mysql",
        "Docker",
        "Nginx",
        "Linux",
        "Git",
    ];
    return (
        <div className="mt-10 sm:mt-14">
            <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
                Skills
            </h2>
            <div className="flex min-h-0 flex-col gap-y-3">
                <div className="flex flex-wrap gap-1">
                    {skills.map((skill, id) => (
                        <Badge key={skill}>{skill}</Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}