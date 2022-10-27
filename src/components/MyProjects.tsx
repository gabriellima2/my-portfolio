import { BsBoxArrowInUpRight } from "react-icons/bs";
import type { ProjectInfo, ProjectsData } from "../types";
import { ResponsiveImage } from "./ResponsiveImage";

interface MyProjectsProps extends ProjectsData {}

const Project = ({ image, ...props }: ProjectInfo) => (
	<li className="border border-transparent dark:border-white/10 rounded-sm">
		<a
			href={props.url}
			title={`Visitar projeto ${props.name}`}
			className="relative"
		>
			<i className="text-main text-lg absolute z-10 top-2 right-2">
				<BsBoxArrowInUpRight />
			</i>
			<ResponsiveImage
				src={image.url}
				alt={`Demonstração do projeto ${props.name}`}
				layer
				className="rounded-sm"
				containerStyle="w-[80vw] h-[60vw] md:w-[300px] md:h-[220px] lg:w-[260px] lg:h-[190px] xl:w-[300px] xl:h-[220px]"
			/>
		</a>
	</li>
);

export const MyProjects = ({ projects }: MyProjectsProps) => (
	<ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
		{projects.map((project) => (
			<Project {...project} key={project.id} />
		))}
	</ul>
);
