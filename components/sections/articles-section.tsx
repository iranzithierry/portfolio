import ArticlesClientSection from "./articles";
import { Skeleton } from "@/components/ui/skeleton"
import { getAllArticles } from "@/app/actions/article";

export default async function ArticlesSection() {
    const articles = await getAllArticles()
    return (<ArticlesClientSection articles={articles} />)
}

export function ArticlesSectionLoadingSkeleton() {
    return (
        <div className="space-y-8">
            {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="space-y-3">
                    <div className="space-y-1">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-7 w-3/4" />
                    </div>
                    <Skeleton className="h-20 w-full" />
                </div>
            ))}
        </div>
    )
}

