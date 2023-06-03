import { render, screen } from "@testing-library/react";
import { Date, type DateProps } from "./Date";

const LABEL = "Data de publicação";
const renderComponent = (props: DateProps) => render(<Date {...props} />);

describe("<Date />", () => {
	describe("Render", () => {
		it("should render correctly when passed valid date format", () => {
			renderComponent({ date: "2023-06-17", label: LABEL });
			expect(screen.getByLabelText(LABEL)).toBeInTheDocument();
		});
		it("should not render when passed invalid date format", () => {
			renderComponent({ date: "2023 06 17", label: LABEL });
			expect(screen.queryByLabelText(LABEL)).not.toBeInTheDocument();
		});
	});
});
