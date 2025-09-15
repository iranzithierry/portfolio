import { Metadata } from "next";
import SkillsSection from "@/components/sections/skills-section";
import EducationSection from "@/components/sections/educations-section";
import ExperienceSection from "@/components/sections/experience-section";
import ToolsSection from "@/components/sections/tools-section";
import LanguageSection from "@/components/sections/languages-section";

export const metadata: Metadata = {
    title: "Resume",
}
export default function Page() {
    return (
        <div className='flex flex-col gap-4'>
                <h1 className='text-5xl font-bold'>My resume</h1>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                    This page gives you a quick overview of my professional background, from my work experience and education history to the technical skills and tools I use daily.
                    <br/>
                    <br/>
                    It&apos;s everything you&apos;d want to know about how I work and what I bring to the table.
                </p>

                <div>
                    <h3 className="text-fg text-2xl font-semibold">Work Experience</h3>
                    <div className="py-5">
                        <ExperienceSection />
                    </div>
                </div>
                <div>
                    <h3 className="text-fg text-2xl font-semibold">Education</h3>
                    <div className="py-5">
                        <EducationSection />
                    </div>
                </div>
        </div>
    )
}