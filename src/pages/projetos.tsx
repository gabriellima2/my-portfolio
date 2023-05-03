import { type GetStaticProps } from "next";
import { useMemo } from "react";

import { makeGetProjectsController } from "@/core/main/factories/controllers/project-controllers/make-get-projects-controller";
import type { ProjectEntity } from "@/core/domain/entities";
import { EmptyDataError } from "@/core/domain/errors";

import {
	Projects as ProjectList,
	Article,
	TextGroup,
	HandleError,
	Head,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

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
				description="Possuo diversos projetos desde pessoais até freelances. Sites para negócios, sites educacionais e aplicativos. Veja e teste essas aplicações!"
				keywords="Sites, Aplicativos, Typescript, ReactJS, NextJS, VueJS, React Native"
				path="Projetos"
			/>
			<DefaultLayout>
				<Article>
					<TextGroup
						title="Projetos"
						paragraphs={[
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
