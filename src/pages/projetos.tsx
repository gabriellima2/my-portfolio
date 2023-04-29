import { GetStaticProps } from "next";

import { makeGetProjectsController } from "@/core/main/factories/controllers/project-controllers/make-get-projects-controller";
import type { ProjectEntity } from "@/core/domain/entities";

import {
	Typography,
	Projects as ProjectList,
	Article,
	TextGroup,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

type ProjectsProps = {
	projects: {
		data: ProjectEntity[] | null;
		error?: string | null;
	};
};

export default function Projects(props: ProjectsProps) {
	const { projects } = props;
	return (
		<DefaultLayout>
			<Article>
				<TextGroup
					title="Projetos"
					paragraphs={[
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					]}
				/>
			</Article>
			<section className="py-21 border-b-2 border-b-util-secondary dark:border-b-util-secondary-dark">
				{projects.data && (
					<ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
						<ProjectList projects={projects.data} />
					</ul>
				)}
				{projects.error && (
					<Typography.Title>{projects.error}</Typography.Title>
				)}
			</section>
		</DefaultLayout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const getProjectsController = makeGetProjectsController();
	const projectsResponse = await getProjectsController.execute();
	const hasErrorInProjectsResponse = typeof projectsResponse === "string";

	return {
		props: {
			projects: hasErrorInProjectsResponse
				? { data: null, error: projectsResponse }
				: { data: projectsResponse.body.projects },
		},
		revalidate: 15,
	};
};