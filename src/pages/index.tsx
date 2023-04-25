import { type GetStaticProps } from "next";
import { ArrowRight } from "phosphor-react";

import { makeGetProjectsController } from "@/core/main/factories/controllers/project-controllers/make-get-projects-controller";
import type { ProjectEntity } from "@/core/domain/entities";

import {
	Article,
	ArticlePreview,
	BaseButton,
	Projects,
	TextGroup,
	Typography,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

type HomeProps = {
	projects: {
		data: ProjectEntity[] | null;
		error?: string | null;
	};
};

export default function Home(props: HomeProps) {
	const { projects } = props;
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
				{projects.data && (
					<ul className="grid grid-rows-3 gap-6">
						<Projects projects={projects.data} />
					</ul>
				)}
				{projects.error && (
					<Typography.Title>{projects.error}</Typography.Title>
				)}
			</ArticlePreview>
			<ArticlePreview title="Blog">
				<p>Aqui</p>
			</ArticlePreview>
		</DefaultLayout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const getProjectsController = makeGetProjectsController();
	const projectsResponse = await getProjectsController.execute(3);
	const hasErrorInProjectsResponse = typeof projectsResponse === "string";

	return {
		props: {
			projects: hasErrorInProjectsResponse
				? { data: null, error: projectsResponse }
				: { data: projectsResponse.body.projects },
		},
		revalidate: 10,
	};
};
