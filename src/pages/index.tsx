import { type GetStaticProps } from "next";
import { motion } from "framer-motion";

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
	SeeMoreLink,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";
import { WithFakeLoading } from "@/presentation/hocs";

import { makePostServices, makeProjectServices } from "@/core/main/factories";
import { POSTS_LIMIT, PROJECTS_LIMIT } from "@/shared/constants";
import { getData } from "@/shared/helpers/get-data";
import { REVALIDATE } from "@/shared/constants";

import type {
	GetPostsPreviewProtocol,
	GetProjectsProtocol,
} from "@/core/domain/protocols";
import type {
	FetchEntity,
	PostPreviewEntity,
	ProjectEntity,
} from "@/core/domain/entities";

type HomeProps = {
	projects: FetchEntity<ProjectEntity[]>;
	posts: FetchEntity<PostPreviewEntity[]>;
};

export default WithFakeLoading((props: HomeProps) => {
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
								<Projects
									className="grid grid-rows-3 gap-6"
									projects={projects.data!}
								/>
								<SeeMoreLink href="/projetos" />
							</section>
						</HandleError>
					</ArticlePreview>
					<ArticlePreview title="Blog">
						<HandleError error={posts.error}>
							<section>
								<Posts
									className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
									posts={posts.data!}
								/>
								{posts.data && posts.data.length >= POSTS_LIMIT && (
									<SeeMoreLink href="/blog" />
								)}
							</section>
						</HandleError>
					</ArticlePreview>
				</DefaultLayout>
			</GradientBackground>
		</>
	);
});

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const projectServices = makeProjectServices();
	const postServices = makePostServices();

	const projects = await getData<ProjectEntity[], GetProjectsProtocol.Response>(
		() => projectServices.getAll.bind(projectServices)(PROJECTS_LIMIT),
		"projects"
	);
	const posts = await getData<
		PostPreviewEntity[],
		GetPostsPreviewProtocol.Response
	>(() => postServices.getAll.bind(postServices)(POSTS_LIMIT), "posts");

	return { props: { projects, posts }, revalidate: REVALIDATE };
};
