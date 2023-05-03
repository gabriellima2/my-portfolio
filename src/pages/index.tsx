import { type GetStaticProps } from "next";
import { useMemo } from "react";

import { makeGetProjectsController } from "@/core/main/factories/controllers/project-controllers/make-get-projects-controller";
import type { ProjectEntity } from "@/core/domain/entities";
import { EmptyDataError } from "@/core/domain/errors";

import {
	ArrowRightLink,
	Article,
	ArticlePreview,
	ComingSoon,
	GradientBackground,
	HandleError,
	Projects,
	TextGroup,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts/default-layout";

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
		<GradientBackground>
			<DefaultLayout>
				<Article>
					<div className="max-w-[587px]">
						<TextGroup
							title="Gabriel Lima"
							paragraphs={[
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
							]}
						/>
						<ArrowRightLink href="/sobre" className="mt-21">
							Saber Mais
						</ArrowRightLink>
					</div>
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
