import { motion } from "framer-motion";

import { CardLink } from "../Links";
import { Tags } from "../common";

import type { ProjectEntity } from "@/core/domain/entities";

type ProjectsProps = {
	projects: ProjectEntity[];
};

export const Projects = (props: ProjectsProps) => {
	const { projects } = props;
	return (
		<>
			{projects.map((project) => (
				<motion.li
					key={project.id}
					initial={{ opacity: 0, translateY: 35 }}
					whileInView={{ opacity: 1, translateY: -0 }}
				>
					<CardLink
						title={project.title}
						description={project.description}
						additional={() => <Tags items={project.techs} />}
						href={project.href}
						linkTitle={`Visitar projeto ${project.title}`}
						withTargetBlank
					/>
				</motion.li>
			))}
		</>
	);
};
