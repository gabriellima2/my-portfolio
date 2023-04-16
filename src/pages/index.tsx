import { Article, ArticlePreview, BaseLink, TextGroup } from "@/components";
import { DefaultLayout } from "@/layouts/default-layout";
import { ArrowRight } from "phosphor-react";

export default function Home() {
	return (
		<DefaultLayout>
			<Article>
				<TextGroup
					title="Gabriel Lima"
					paragraphs={[
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					]}
				/>
				<BaseLink
					href="/sobre"
					rightIcon={() => <ArrowRight />}
					className="mt-21"
				>
					Saber Mais
				</BaseLink>
			</Article>
			<ArticlePreview title="Projetos">
				<p>Aqui</p>
			</ArticlePreview>
			<ArticlePreview title="Blog">
				<p>Aqui</p>
			</ArticlePreview>
		</DefaultLayout>
	);
}
