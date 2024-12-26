"use client";
import Link from "next/link";
import { Tabs } from "../ui/tabs"
import { getAllArticles } from "@/app/actions/article";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { formatDate } from "@/lib/utils";


export default function ArticlesClientSection({ articles }: { articles: Awaited<ReturnType<typeof getAllArticles>>}) {
    return (
        <Tabs>
            <ScrollArea>
                <Tabs.List>
                    <Tabs.Tab id={"latest"}>Latest</Tabs.Tab>
                </Tabs.List>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <Tabs.Panel key={"latest"} id="latest">
                <ul className="space-y-6">
                    {articles.map((article, index) => (
                        <li key={index}>
                            <p className="text-xs text-muted-fg">
                                {formatDate(article.metadata.publishedAt)}
                            </p>
                            <Link href={`/articles/${article.slug}`} className="font-semibold text-wrap sm:text-xl text-base text-fg truncate hover:text-primary">
                                {article.metadata.title}
                            </Link>
                            <p className="mt-1 text-wrap text-sm line-clamp-4 text-gray-500 dark:text-neutral-500">
                                {article.metadata.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </Tabs.Panel>
        </Tabs>
    )
}