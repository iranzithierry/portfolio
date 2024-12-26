import { getArticle } from "@/app/actions/article";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function Page({ params }: { params: { articleSlug: string } }) {
    let post = await getArticle(params.articleSlug);

    if (!post) {
        notFound();
    }

    return (
        <section id="blog">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        author: {
                            "@type": "Person",
                            name: "iranzithierry",
                        },
                    }),
                }}
            />
            <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
                {post.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
                <Suspense fallback={<p className="h-5" />}>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {formatDate(post.metadata.publishedAt)}
                    </p>
                </Suspense>
            </div>
            <article
                className="prose dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: post.source }}
            ></article>
        </section>
    );
}