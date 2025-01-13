import {getArticles, filterArticles, getArticle, Article} from "@chtc/web-components";

export async function generateStaticParams() {
	const articles = await getArticles("CHTC", "Articles", "main")
	return filterArticles(articles, "osg", "news")
}

async function getMarkdownFile(slug: string[]){
	return getArticle("CHTC", "Articles", slug.join("-") + ".md", "main")
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
	const slug = (await params).slug
	const markdownData = await getMarkdownFile(slug)

	return (
		<Article article={markdownData} />
	)
}
