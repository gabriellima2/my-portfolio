import type { GetStaticProps, NextPage } from "next";

import { MyProjects } from "../components/MyProjects";
import { Seo } from "../components/Seo";

import { CommomLayout } from "../layouts/CommonLayout";

import { UserProjects } from "../utils/UserProjects";
import type { ProjectsInfo } from "../types";

interface ProjectProps {
	projects: ProjectsInfo | undefined;
}

const Project: NextPage<ProjectProps> = ({ projects }) => {
	if (!projects) return <p>Error</p>;

	return (
		<CommomLayout title="Projetos">
			<Seo title="Gabriel Lima - Projetos" />

			<MyProjects projects={projects} />
		</CommomLayout>
	);
};

export default Project;

export const getStaticProps: GetStaticProps = async () => {
	const userProjects = new UserProjects();
	await userProjects.execute();

	return {
		props: {
			projects: userProjects.data,
		},
		revalidate: 60,
	};
};
