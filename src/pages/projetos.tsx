import { type GetStaticProps } from "next";

import type { ProjectEntity } from "@/core/domain/entities";

import {
	Projects as ProjectList,
	Article,
	TextGroup,
	HandleError,
	Head,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import { makeProjectServices } from "@/shared/factories";
import type { IAsyncData } from "@/shared/interfaces/IAsyncData";

type ProjectsProps = {
	projects: IAsyncData<ProjectEntity[]>;
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
	try {
		const projectsResponse = await makeProjectServices().getAll();
		return {
			props: { projects: { data: projectsResponse.body.projects } },
			revalidate: 10,
		};
	} catch (err) {
		return {
			props: { projects: { data: null, error: (err as Error).message } },
		};
	}
};
