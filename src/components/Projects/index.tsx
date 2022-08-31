import Image from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

import { IconLink } from "../Links";

import {
	Container,
	Project,
	Name,
	Description,
	Links,
	Mac,
	Header,
	Circle,
	ContainerText,
	ContainerImage,
} from "./styles";

import { ProjectContent } from "../../lib/getProjects";
import { Overlay } from "../Infra/Overlay";

interface ProjectsProps {
	projects: ProjectContent[];
}

type ProjectTextInfoProps = Omit<ProjectContent, "image" | "id">;

type ProjectImageInfoProps = Pick<ProjectContent, "image" | "name">;

const ProjectTextInfo = (props: ProjectTextInfoProps) => (
	<ContainerText>
		<Name
			css={{
				background: `linear-gradient(to bottom right, ${props.textColor.hex} 0%, $font 100%)`,
				setupGradientText: "",
			}}
		>
			{props.name}
		</Name>
		<Description>{props.description}</Description>

		<Links>
			<IconLink href={props.doc} icon={{ element: BsGithub, label: "" }} />
			<IconLink
				href={props.url}
				icon={{ element: BsBoxArrowUpRight, label: "" }}
			/>
		</Links>
	</ContainerText>
);

const ProjectImageInfo = (props: ProjectImageInfoProps) => (
	<Mac>
		<Header>
			<Circle />
		</Header>
		<ContainerImage>
			<Image
				src={props.image.url}
				alt={`Image do projeto ${props.name}`}
				layout="fill"
				style={{ borderRadius: "5px 5px 15px 15px" }}
			/>
		</ContainerImage>
	</Mac>
);

export const Projects = ({ projects }: ProjectsProps) => (
	<Container>
		{projects.map((project) => (
			<Project key={project.id}>
				<ProjectTextInfo {...project} />
				<ProjectImageInfo {...project} />
			</Project>
		))}
	</Container>
);
