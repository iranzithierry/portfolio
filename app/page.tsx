import React, { Suspense } from "react";
import Image from "next/image";
import SocialIcons from "@/components/social-icons";
import AboutSection from "@/components/sections/about-section";
import ArticlesSection, {
  ArticlesSectionLoadingSkeleton,
} from "@/components/sections/articles-section";
import ProjectsSection from "@/components/sections/projects-section";
import Link from "next/link";

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
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold">Latest projects</h1>
        <ProjectsSection />
        <p className="font-medium text-sm mt-3">
          See a list of all my projects On my{" "}
          <Link className="text-primary font-semibold" href="/projects">
            projects page
          </Link>
        </p>
      </div>
      <div className="grid lg:grid-cols-5 gap-4 lg:gap-12 items-stretch">
        <main className="flex-1 lg:col-span-3">
          <div className="my-10 sm:my-14">
            <h2 className="mb-5 text-2xl sm:text-3xl font-semibold text-fg">Latest Articles</h2>
            <Suspense fallback={<ArticlesSectionLoadingSkeleton />}>
              <ArticlesSection />
            </Suspense>
          </div>
        </main>
        {/* <aside className="lg:col-span-2 flex flex-col-reverse lg:block overflow-y-auto lg:space-y-4">
          SOMETHING
        </aside> */}
      </div>
    </>
  );
}
