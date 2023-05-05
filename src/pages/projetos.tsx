import { type GetStaticProps } from "next";
import { useMemo } from "react";

import { makeGetProjectsController } from "@/core/main/factories/controllers";
import type { ProjectEntity } from "@/core/domain/entities";
import { EmptyDataError } from "@/core/domain/errors";

import {
	Projects as ProjectList,
	Article,
	TextGroup,
	HandleError,
	Head,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import type { IAsyncData } from "@/shared/interfaces/IAsyncData";

type ProjectsProps = {
	projects: IAsyncData<ProjectEntity[]>;
};

export default function Projects(props: ProjectsProps) {
	const { projects } = props;
	const errorForEmptyProjects = useMemo(
		() => (!projects.data ? new EmptyDataError().message : null),
		[projects.data]
	);

	return (
		<>
			<Head
				keywords="Sites, Profissionais, Criativas, Aprimorar, Desenvolver, Aplicativos, Typescript, ReactJS, NextJS, VueJS, React Native, Redux"
				path="Projetos"
				description="Confira os sites profissionais e pessoais que desenvolvi, bem como a documentação dos aplicativos que criei..."
			/>
			<DefaultLayout>
				<Article>
					<TextGroup
						title="Projetos"
						paragraphs={[
							"Confira os sites profissionais e pessoais que desenvolvi, bem como a documentação dos aplicativos que criei. Me concentro em tecnologias que quero me aprimorar para desenvolver aplicações criativas com essas tecnologias.",
						]}
					/>
				</Article>
				<section className="border-b-2 border-b-util-secondary py-21 dark:border-b-util-secondary-dark">
					<HandleError error={projects.error || errorForEmptyProjects}>
						<ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
							<ProjectList projects={projects.data!} />
						</ul>
					</HandleError>
				</section>
			</DefaultLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const getProjectsController = makeGetProjectsController();
	const projectsResponse = await getProjectsController.execute();
	const hasErrorMessageInProjectsResponse =
		typeof projectsResponse.body === "string";

	return {
		props: {
			projects: hasErrorMessageInProjectsResponse
				? { data: null, error: projectsResponse.body }
				: { data: projectsResponse.body },
		},
		revalidate: 15,
	};
};
