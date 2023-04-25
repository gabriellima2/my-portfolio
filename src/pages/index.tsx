import { ArrowRight } from "phosphor-react";

import {
	Article,
	ArticlePreview,
	BaseButton,
	TextGroup,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

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
				<BaseButton
					as="a"
					href="/sobre"
					rightIcon={() => <ArrowRight />}
					className="mt-21"
				>
					Saber Mais
				</BaseButton>
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
