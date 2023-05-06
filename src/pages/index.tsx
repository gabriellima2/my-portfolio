import { type GetStaticProps } from "next";
import { useMemo } from "react";
import { motion } from "framer-motion";

import { makeGetProjectsController } from "@/core/main/factories/controllers";
import type { ProjectEntity } from "@/core/domain/entities";
import { EmptyDataError } from "@/core/domain/errors";

import {
	ArrowRightLink,
	Article,
	ArticlePreview,
	ComingSoon,
	GradientBackground,
	HandleError,
	Head,
	Projects,
	TextGroup,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import type { IAsyncData } from "@/shared/interfaces/IAsyncData";

type HomeProps = {
	projects: IAsyncData<ProjectEntity[]>;
};

export default function Home(props: HomeProps) {
	const { projects } = props;
	const errorForEmptyProjects = useMemo(
		() => (!projects.data ? new EmptyDataError().message : null),
		[projects.data]
	);

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
						<HandleError error={projects.error || errorForEmptyProjects}>
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
						<ComingSoon />
					</ArticlePreview>
				</DefaultLayout>
			</GradientBackground>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const getProjectsController = makeGetProjectsController();
	const projectsResponse = await getProjectsController.execute(3);
	const hasErrorMessageInProjectsResponse =
		typeof projectsResponse.body === "string";

	return {
		props: {
			projects: hasErrorMessageInProjectsResponse
				? { data: null, error: projectsResponse.body }
				: { data: projectsResponse.body },
		},
		revalidate: 10,
	};
};
