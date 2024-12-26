"use client";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineContent,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function EducationSection() {

    const educationData = [
        {
            startYear: "Jan 2023",
            endYear: "Present",
            degree: "Advanced Level in Software Development",
            institution: "College George Fox",
            description: "Focused on advanced topics in software development, including programming languages, software design, and project management. Gained hands-on experience building software projects and collaborating on team-based assignments, emphasizing practical skills and industry relevance.",
        },
        {
            startYear: "Jan 2019",
            endYear: "Sept 2022",
            degree: "Ordinary Level in Math, Physics, ICT, and Literature",
            institution: "Saint Bernadette",
            description: "Studied a well-rounded curriculum combining analytical subjects such as mathematics, physics, and ICT with critical thinking and communication skills from literature. Built a strong foundation in logical problem-solving and technical concepts.",
        },
    ];
    
    return (
        <Timeline>
            {educationData.map((education, idx) => (
                <TimelineItem key={idx} >
                    {idx !== educationData.length - 1 && (
                        <TimelineConnector />
                    )}
                    <TimelineHeader>
                        <div className={cn(idx == 0 ? "bg-primary border-primary" : "bg-secondary border-secondary", "-ml-5 -mt-5 grow-0 shrink-0 rounded-full h-14 w-14 border z-10 p-1 overflow-hidden flex items-center")}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <AcademicCapIcon className="h-full object-cover rounded-full bg-white text-primary p-1" />
                        </div>
                        <div className="space-y-1 pb-2">
                            <span className="text-muted-fg font-semibold space-x-1 text-xs">
                                <time>{education.startYear}</time>
                                <span aria-hidden="true">·</span>
                                <time>{education.endYear}</time>
                            </span>
                            <h3 className="font-bold text-lg leading-none tracking-tight text-secondary-foreground">
                                {education.degree}
                            </h3>
                            <div className="font-semibold flex text-balance text-sm">
                                {education.institution}
                            </div>
                        </div>
                    </TimelineHeader>
                    <TimelineContent>
                        <p className="text-sm text-muted-fg max-w-xl">
                            {education.description}
                        </p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}