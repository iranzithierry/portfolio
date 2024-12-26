import { Metadata } from "next";
import { Suspense } from "react";
import ArticlesSection, { ArticlesSectionLoadingSkeleton } from "@/components/sections/articles-section";

export const metadata: Metadata = {
    title: "Article",
}

export const dynamic = "force-dynamic"
export default function Page() {
    return (
        <div className='space-y-3 sm:space-y-6'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Some cool stuffs I&apos;ve wrote</h1>
            <Suspense fallback={<ArticlesSectionLoadingSkeleton/>}>
                <ArticlesSection />
            </Suspense>
        </div>
    )
}