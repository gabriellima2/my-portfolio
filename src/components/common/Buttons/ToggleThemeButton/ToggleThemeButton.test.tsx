import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ToggleThemeButton } from "./ToggleThemeButton";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { simulateClick } from "@/__mocks__/simulate-click";

type Props = {
	currentTheme?: "dark" | "light";
};

const handleToggleTheme = vi.fn();
const defaultProps: Props = { currentTheme: "dark" };

const renderComponent = (props: Props = defaultProps) => {
	const { currentTheme = "dark" } = props;
	render(
		<WithThemeProvider value={{ currentTheme, handleToggleTheme }}>
			<ToggleThemeButton />
		</WithThemeProvider>
	);
};

describe("<ToggleThemeButton />", () => {
	describe("Render", () => {
		it("should render correctly with dark theme", () => {
			renderComponent();

			const button = screen.getByRole("button");

			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute("aria-label", "Tema atual dark");
		});
		it("should render correctly with light theme", () => {
			renderComponent({ currentTheme: "light" });

			const button = screen.getByRole("button");

			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute("aria-label", "Tema atual light");
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			describe("HandleToggleTheme", () => {
				it("should call the handle-toggle-theme function when clicked", async () => {
					renderComponent();

					const button = screen.getByRole("button");
					await simulateClick(button);

					expect(handleToggleTheme).toHaveBeenCalled();
				});
			});
		});
	});
});
