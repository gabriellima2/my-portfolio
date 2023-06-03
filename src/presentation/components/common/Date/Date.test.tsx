import { render, screen } from "@testing-library/react";
import { Date, type DateProps } from "./Date";

const renderComponent = (props: DateProps) => render(<Date {...props} />);

describe("<Date />", () => {
	describe("Render", () => {
		it("should render correctly when passed valid date format", () => {
			renderComponent({ date: "2023-06-17" });
			expect(screen.getByText("17 Jun 2023")).toBeInTheDocument();
		});
		it("should not render when passed invalid date format", () => {
			renderComponent({ date: "2023 06 17" });
			expect(screen.queryByText("17 Jun 2023")).not.toBeInTheDocument();
		});
	});
});
