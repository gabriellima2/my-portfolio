import { CardLink } from "../Links";
import type { ProjectEntity } from "@/core/domain/entities";

type ProjectsProps = {
	projects: ProjectEntity[];
};

export const Projects = (props: ProjectsProps) => {
	const { projects } = props;
	return (
		<>
			{projects.map((project) => (
				<CardLink
					key={project.id}
					title={project.title}
					description={project.description}
					tags={project.tags}
					href={project.href}
					linkTitle={`Visitar projeto ${project.title}`}
				/>
			))}
		</>
	);
};
