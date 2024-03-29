import { type GetStaticProps } from "next";

import {
	Projects as ProjectList,
	Article,
	TextGroup,
	HandleError,
	Head,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import { makeProjectServices } from "@/core/main/factories";
import { getData } from "@/shared/helpers/get-data";
import { REVALIDATE } from "@/shared/constants";

import type { GetProjectsProtocol } from "@/core/domain/protocols";
import type { FetchEntity, ProjectEntity } from "@/core/domain/entities";

type ProjectsProps = {
	projects: FetchEntity<ProjectEntity[]>;
};

export default function Projects(props: ProjectsProps) {
	const { projects } = props;

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
					<HandleError error={projects.error}>
						<ProjectList
							className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3"
							projects={projects.data!}
						/>
					</HandleError>
				</section>
			</DefaultLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
	const projectServices = makeProjectServices();
	const projects = await getData<ProjectEntity[], GetProjectsProtocol.Response>(
		projectServices.getAll.bind(projectServices),
		"projects"
	);

	return { props: { projects }, revalidate: REVALIDATE };
};
