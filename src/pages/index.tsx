import { type GetStaticProps } from "next";
import { motion } from "framer-motion";

import type {
	FetchEntity,
	PostEntity,
	ProjectEntity,
} from "@/core/domain/entities";
import { makePostServices, makeProjectServices } from "@/core/main/factories";

import {
	ArrowRightLink,
	Article,
	ArticlePreview,
	Posts,
	GradientBackground,
	HandleError,
	Head,
	Projects,
	TextGroup,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import { getData } from "@/shared/helpers/get-data";

type HomeProps = {
	projects: FetchEntity<ProjectEntity[]>;
	posts: FetchEntity<Omit<PostEntity, "tags">[]>;
};

export default function Home(props: HomeProps) {
	const { projects, posts } = props;

	return (
		<>
			<Head
				keywords="Desenvolvedor, Front-end, Criativo, Experiência, Sites, Aplicativos, Clientes, Problemas, Facilitar, Design, Codificação, Deploy, Mobile, React Native, ReactJS, Typescript, Redux"
				description="Sou um desenvolvedor front-end criativo com experiência em criar sites modernos para clientes que desejam aumentar sua visibilidade online. Além disso, gosto de criar projetos pessoais..."
			/>
			<GradientBackground>
				<DefaultLayout>
					<Article>
						<motion.div
							className="max-w-[587px]"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
						>
							<TextGroup
								title="Gabriel Lima"
								paragraphs={[
									"Sou um desenvolvedor front-end criativo com experiência em criar sites modernos para clientes que desejam aumentar sua visibilidade online. Além disso, gosto de criar projetos pessoais resolvendo problemas que encontro diariamente, focando em facilitar a experiência e a vida das pessoas.",
								]}
							/>
							<ArrowRightLink href="/sobre" className="mt-21">
								Saber Mais
							</ArrowRightLink>
						</motion.div>
					</Article>
					<ArticlePreview title="Projetos">
						<HandleError error={projects.error}>
							<section>
								<ul className="grid grid-rows-3 gap-6">
									<Projects projects={projects.data!} />
								</ul>
								<ArrowRightLink href="/projetos" className="mt-16">
									Ver Todos
								</ArrowRightLink>
							</section>
						</HandleError>
					</ArticlePreview>
					<ArticlePreview title="Blog">
						<HandleError error={posts.error}>
							<section>
								<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
									<Posts posts={posts.data!} />
								</ul>
								<ArrowRightLink href="/projetos" className="mt-16">
									Ver Todos
								</ArrowRightLink>
							</section>
						</HandleError>
					</ArticlePreview>
				</DefaultLayout>
			</GradientBackground>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const projects = await getData(
		makeProjectServices(),
		"getWithLimit",
		"projects"
	);
	const posts = await getData(makePostServices(), "getWithLimit", "posts");
	return {
		props: {
			projects,
			posts,
		},
	};
};
