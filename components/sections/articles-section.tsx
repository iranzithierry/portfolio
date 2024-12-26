import ArticlesClientSection from "./articles";
import { getAllArticles } from "@/app/actions/article";

export default async function ArticlesSection() {
    const articles = await getAllArticles()
    return (<ArticlesClientSection articles={articles}/>)
}