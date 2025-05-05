import { Metadata } from "next";
import { Suspense } from "react";
import ArticlesSection, { ArticlesSectionLoadingSkeleton } from "@/components/sections/articles-section";

export const metadata: Metadata = {
    title: "Article",
}

export default function Page() {
    return (
        <div className='space-y-3 sm:space-y-6'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Some cool stuffs I&apos;ve wrote</h1>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
            A collection of ideas, insights, and in-depth analyses of things I&apos;ve discovered while developing products, resolving challenging issues, or investigating novel technologies. As I like my dev notes, these articles are intended to be honest, helpful, and sometimes opinionated.
            </p>
            <Suspense fallback={<ArticlesSectionLoadingSkeleton/>}>
                <ArticlesSection />
            </Suspense>
        </div>
    )
}