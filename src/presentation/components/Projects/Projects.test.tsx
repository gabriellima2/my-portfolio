import { render, screen } from "@testing-library/react";

import { Projects } from "./Projects";
import { ProjectEntity } from "@/core/domain/entities";

const projects: ProjectEntity[] = [
	{
		href: "any_href",
		id: "0",
		title: "any_title_1",
		description: "any_description",
		techs: ["any_tech"],
	},
];

const renderComponent = () => render(<Projects projects={projects} />);

describe("<Projects />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			projects.forEach((project) => {
				const projectEl = screen.getByTitle(`Visitar projeto ${project.title}`);

				expect(projectEl).toHaveAttribute("href", project.href);
				expect(screen.getByText(project.title)).toBeInTheDocument();
				expect(screen.getByText(project.techs[0])).toBeInTheDocument();
				expect(screen.getByText(project.description)).toBeInTheDocument();
			});
		});
	});
});
