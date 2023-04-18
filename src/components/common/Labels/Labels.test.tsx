import { render, screen } from "@testing-library/react";
import { Labels } from "./Labels";

const ITEMS = ["any_label_1", "any_label_2"];

const renderComponent = () => render(<Labels items={ITEMS} />);

describe("<Labels />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			ITEMS.forEach((item) =>
				expect(screen.getByText(item)).toBeInTheDocument()
			);
		});
	});
});
