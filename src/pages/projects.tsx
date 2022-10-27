import type { GetStaticProps, NextPage } from "next";

import { MyProjects } from "../components/MyProjects";

import { CustomizedLayout } from "../layouts/CustomizedLayout";

import { UserProjects } from "../utils/UserProjects";
import type { ProjectsData } from "../types";

interface ProjectProps extends ProjectsData {}

const Project: NextPage<ProjectProps> = (props) => {
	return (
		<CustomizedLayout>
			<main className="flex flex-col gap-16 items-center justify-center lg:gap-2 lg:mt-4 lg:flex-row lg:items-center lg:justify-evenly">
				<h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl lg:order-last">
					Projetos
				</h1>
				<section className="flex items-center justify-center">
					<MyProjects projects={props.projects} />
				</section>
			</main>
		</CustomizedLayout>
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
