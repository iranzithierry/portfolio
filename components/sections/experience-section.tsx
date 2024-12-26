"use client";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineContent,
} from "@/components/ui/timeline";

export default function ExperienceSection() {
    const experienceData = [
        {
            companyName: 'Blockchain Tech Solutions',
            companyImageSrc: '/images/companies/bts.png',
            companyRole: 'Senior Fullstack Developer',
            startYear: '2024',
            endYear: 'Present',
            site: "London - England",
        },
        {
            companyName: 'Uruti Hub',
            companyImageSrc: '/images/companies/uruti-hub.png',
            companyRole: 'Frontend Developer',
            startYear: '2023',
            endYear: '2024',
            site: "Kigali - Rwanda",
        },

    ]
    return (
        <Timeline>
            {experienceData.map((experience, idx) => (
                <TimelineItem key={idx} >
                    {idx !== experienceData.length - 1 && (
                        <TimelineConnector />
                    )}
                    <TimelineHeader>
                        <div className={"-ml-5 -mt-5 grow-0 shrink-0 rounded-full h-14 w-14 bg-secondary border border:theme(colors.secondary.fg/15%) z-10 p-1 overflow-hidden flex items-center"}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt="" className="h-full object-cover rounded-full bg-white p-1" src={experience.companyImageSrc} />
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam neque, rerum quaerat nisi corrupti deleniti molestiae eius repellat praesentium ad voluptas velit, nesciunt maxime reprehenderit soluta. Quia repellendus consequatur ullam.
                        </p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}