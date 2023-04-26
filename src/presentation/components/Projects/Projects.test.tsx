import { render, screen } from "@testing-library/react";

import { Projects } from "./Projects";
import { projectsMock } from "@/__mocks__/projects-mock";

const renderComponent = () => render(<Projects projects={projectsMock} />);

describe("<Projects />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			projectsMock.forEach((project) => {
				const projectEl = screen.getByTitle(`Visitar projeto ${project.title}`);

				expect(projectEl).toHaveAttribute("href", project.href);
				expect(screen.getByText(project.title)).toBeInTheDocument();
				expect(screen.getByText(project.techs[0])).toBeInTheDocument();
				expect(screen.getByText(project.description)).toBeInTheDocument();
			});
		});
	});
});
