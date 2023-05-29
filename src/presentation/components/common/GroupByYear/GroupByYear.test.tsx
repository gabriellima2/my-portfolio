import { render, screen } from "@testing-library/react";
import { GroupByYear } from ".";

const YEAR = 2023;
const CONTENT = "any_content";

const renderComponent = () =>
	render(
		<GroupByYear year={YEAR}>
			<p>{CONTENT}</p>
		</GroupByYear>
	);

describe("<GroupByYear />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			expect(screen.getByText(YEAR)).toBeInTheDocument();
			expect(screen.getByText(CONTENT)).toBeInTheDocument();
		});
	});
});
