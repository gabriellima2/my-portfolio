import { BsBoxArrowInUpRight } from "react-icons/bs";

import { ResponsiveImage } from "./ResponsiveImage";
import type { ProjectInfo, ProjectsInfo } from "../types";

interface MyProjectsProps {
	projects: ProjectsInfo;
}

const Project = ({ image, ...props }: ProjectInfo) => (
	<li className="border border-transparent dark:border-white/10 rounded-sm relative">
		<a href={props.url} title={`Visitar projeto ${props.name}`}>
			<i
				aria-label="Ícone de seta"
				className="text-black text-lg absolute z-10 top-2 right-2 bg-white/70 p-1 rounded"
			>
				<BsBoxArrowInUpRight />
			</i>
			<ResponsiveImage
				src={image.url}
				alt={`Demonstração do projeto ${props.name}`}
				layer
				className="rounded-sm"
				containerStyle="w-[90vw] h-[66vw] md:w-[300px] md:h-[220px] lg:w-[260px] lg:h-[190px] xl:w-[300px] xl:h-[220px]"
			/>
		</a>
	</li>
);

export const MyProjects = ({ projects }: MyProjectsProps) => (
	<ul className="w-full md:max-h-[55vh] md:pr-2 md:overflow-y-auto md:overflow-x-hidden grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
		{projects.map((project) => (
			<Project {...project} key={project.id} />
		))}
	</ul>
);
