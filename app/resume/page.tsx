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
        <div className='flex flex-col md:flex-row gap-4'>
            <div className="md:w-[75%] space-y-6 ">
                <h1 className='text-5xl font-bold'>My resume</h1>
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
            <div className="md:w-[25%] space-y-5">
                <SkillsSection />
                <ToolsSection />
                <LanguageSection />
            </div>
        </div>
    )
}