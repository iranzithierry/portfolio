import ArticlesSection from "@/components/sections/articles-section";
import { Suspense } from "react";

export const dynamic = "force-dynamic"
export default function Page() {
    return (
        <div className='space-y-3 sm:space-y-6'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Some cool stuffs I&apos;ve wrote</h1>
            <Suspense fallback={<h1>Loading articles....</h1>}>
                <ArticlesSection />
            </Suspense>
        </div>
    )
}