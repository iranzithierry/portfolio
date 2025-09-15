"use client";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineContent,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
    const experienceData = [
        {
            companyName: 'Siebenberge GmbH',
            companyImageSrc: '/images/companies/siebenberge.png',
            companyRole: 'Software Engineer',
            roleDescription: "As a Software Engineer, I'm responsible for developing and maintaining software applications. I'm also responsible for designing and implementing new features and functionality.",
            startYear: 'August 2025',
            endYear: 'Present',
            site: "Zurich - Switzerland",
        },
        {
            companyName: 'Blockchain Tech Solutions',
            companyImageSrc: '/images/companies/bts.png',
            companyRole: 'Senior Fullstack Developer',
            roleDescription: "As Senior Fullstack Developer I was responsible for designing and developing Telegram web applications and mini-games, integrating features like NFTs, minting, and wallet transactions. Built and maintained dashboards with real-time analytics, ensuring optimal performance and scalability for applications handling 100K user events per minute. Implemented efficient rendering techniques to display events in real-time, enhancing user experience.",
            startYear: 'July 2024',
            endYear: 'August 2025',
            site: "London - England",
        },
        {
            companyName: 'Uruti Hub',
            companyImageSrc: '/images/companies/uruti-hub.png',
            companyRole: 'Frontend Developer',
            roleDescription: "As a Frontend Developer I gained hands-on experience by collaborating with senior developers and building web applications.",
            startYear: '2023',
            endYear: '2024',
            site: "Kigali - Rwanda",
        },
        {
            companyName: 'Freelancer',
            companyImageSrc: '/images/companies/freelancer.png',
            companyRole: 'Fullstack Developer',
            roleDescription: "Collaborated with various clients on diverse projects through platforms like Discord, LinkedIn, and Twitter, delivering fullstack solutions tailored to their needs.",
            startYear: '2020',
            endYear: '2023',
            site: "Kigali - Rwanda",
        }
        
    ];
    
    
    return (
        <Timeline>
            {experienceData.map((experience, idx) => (
                <TimelineItem key={idx} >
                    {idx !== experienceData.length - 1 && (
                        <TimelineConnector />
                    )}
                    <TimelineHeader>
                        <div className={cn(idx == 0 ? "bg-info border-info" : "bg-secondary border-secondary", "-ml-5 -mt-5 grow-0 shrink-0 rounded-full h-14 w-14 border z-10 p-1 overflow-hidden flex items-center")}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt={experience.companyName} className="h-full object-cover rounded-full bg-white p-1" src={experience.companyImageSrc} />
                        </div>
                        <div className="space-y-1 pb-2">
                            <span className="text-muted-fg font-semibold space-x-1 text-xs">
                                <time>{experience.startYear}</time>
                                <span aria-hidden="true">·</span>
                                <time>{experience.endYear}</time>
                            </span>
                            <h3 className="font-bold text-lg leading-none tracking-tight text-secondary-foreground">{experience.companyRole}</h3>
                            <div className="font-semibold flex flex-col sm:flex-row text-balance text-sm">
                                {experience.companyName}
                                <div className="px-2 hidden sm:block">·</div>
                                <span className="sm:text-sm text-muted-fg sm:text-fg text-xs">{experience.site}</span>
                            </div>
                        </div>
                    </TimelineHeader>
                    <TimelineContent>
                        <p className="text-sm text-muted-fg max-w-xl">
                           {experience.roleDescription}
                        </p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}