import { render, screen } from "@testing-library/react";

export const ToggleThemeButton = () => {
	return (
		<button type="button" title="Mudar tema">
			Tema
		</button>
	);
};

const renderComponent = () => render(<ToggleThemeButton />);

describe("<ToggleThemeButton />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			expect(screen.getByRole("button")).toBeInTheDocument();
		});
	});
});
