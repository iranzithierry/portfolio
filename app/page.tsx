import React, { Suspense } from "react";
import Image from "next/image";
import SocialIcons from "@/components/social-icons";
import AboutSection from "@/components/sections/about-section";

export default function Page() {
  return (
    <>
      <div className="py-4">
        <div className="flex items-center gap-x-3">
          <div className="shrink-0 hidden lg:block">
            <Image
              width={500}
              height={500}
              className="shrink-0 size-16 rounded-full"
              src="/images/iranzithierry.jpg"
              alt="Avatar"
            />
          </div>

          <div className="grow">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-neutral-200">
              Iranzi Thierry
            </h1>
            <p className="text-sm text-gray-600 dark:text-neutral-400">Software Engineer</p>
          </div>
        </div>
        <AboutSection />
        <SocialIcons />
      </div>
    </>
  );
}
