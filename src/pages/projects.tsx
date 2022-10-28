import type { GetStaticProps, NextPage } from "next";

import { MyProjects } from "../components/MyProjects";

import { CommomLayout } from "../layouts/CommonLayout";

import { UserProjects } from "../utils/UserProjects";
import type { ProjectsData } from "../types";

interface ProjectProps extends ProjectsData {}

const Project: NextPage<ProjectProps> = (props) => {
	return (
		<CommomLayout title="Projetos">
			<MyProjects projects={props.projects} />
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
