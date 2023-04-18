import { render, screen } from "@testing-library/react";
import { Labels } from "./Labels";

const LABELS = ["any_label_1", "any_label_2"];

const renderComponent = () => render(<Labels labels={LABELS} />);

describe("<Labels />", () => {
	describe("Render", () => {
		it("should render correclty", () => {
			renderComponent();

			LABELS.forEach((label) =>
				expect(screen.getByText(label)).toBeInTheDocument()
			);
		});
	});
});
