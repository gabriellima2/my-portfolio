import Image from "next/image";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

import { IconLink } from "../Links";

import { projects } from "../../mocks";

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
} from "./styles";

type Project = typeof projects[0];

interface ProjectsProps {
	projects: Project[];
}

type ProjectTextInfoProps = Omit<Project, "image" | "id">;

type ProjectImageInfoProps = Pick<Project, "image" | "name">;

const ProjectTextInfo = (props: ProjectTextInfoProps) => (
	<ContainerText>
		<Name>{props.name}</Name>
		<Description>{props.description}</Description>

		<Links>
			<IconLink href={props.url} icon={{ element: BsGithub, label: "" }} />
			<IconLink
				href={props.doc}
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
		<Image
			src={props.image}
			alt={`Image do projeto ${props.name}`}
			layout="fill"
		/>
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
