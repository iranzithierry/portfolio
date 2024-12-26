"use client";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineContent,
} from "@/components/ui/timeline";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

export default function EducationSection() {

    const educationData = [
        {
            startYear: "Jan 2023",
            endYear: " Present",
            degree: "Advanced Level In Software Development",
            institution: "College George Fox",
            description: ""
        },
        {
            startYear: "Jan 2019",
            endYear: "Sept 2022",
            degree: "Ordinary Level In Math, Physics, ICT and Literature",
            institution: "Saint Bernadette",
            description: ""
        }
    ]
    return (
        <Timeline>
            {educationData.map((education, idx) => (
                <TimelineItem key={idx} >
                    {idx !== educationData.length - 1 && (
                        <TimelineConnector />
                    )}
                    <TimelineHeader>
                        <div className={"-ml-5 -mt-5 rounded-full shrink-0 h-14 w-14 bg-secondary border border:theme(colors.secondary.fg/15%) z-10 p-1 overflow-hidden flex items-center"}>
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam neque, rerum quaerat nisi corrupti deleniti molestiae eius repellat praesentium ad voluptas velit, nesciunt maxime reprehenderit soluta. Quia repellendus consequatur ullam.
                        </p>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}