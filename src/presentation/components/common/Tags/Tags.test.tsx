import { render, screen } from "@testing-library/react";
import { Tags } from "./Tags";

const ITEMS = ["any_label_1", "any_label_2"];

const renderComponent = () => render(<Tags items={ITEMS} />);

describe("<Tags />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			ITEMS.forEach((item) =>
				expect(screen.getByText(item)).toBeInTheDocument()
			);
		});
	});
});
