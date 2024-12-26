import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export async function markdownToHTML(markdown: string) {
    const p = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, {
            theme: "one-dark-pro",
            keepBackground: true,
        })
        .use(rehypeStringify)
        .process(markdown);

    return p.toString();
}
type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    description: string;
    image?: string;
};

const articlesPath = path.join(process.cwd(), `resources/articles`)

export async function getArticle(slug: string) {
    const filePath = `${articlesPath}/${slug}.mdx`
    let source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    return {
        source: content,
        metadata: metadata as Metadata,
        slug,
    };
}
function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
export async function getAllArticles() {
    let mdxFiles = getMDXFiles(articlesPath);
    return Promise.all(
        mdxFiles.map(async (file) => {
            let slug = path.basename(file, path.extname(file));
            let { metadata, source } = await getArticle(slug);
            return {
                metadata,
                slug,
                source,
            };
        })
    );
}
