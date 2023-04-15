import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ToggleThemeButton } from "./ToggleThemeButton";

import { WithThemeProvider } from "@/__mocks__/with-theme-provider";
import { simulateClick } from "@/__mocks__/simulate-click";

const handleToggleTheme = vi.fn();

const renderComponent = () =>
	render(
		<WithThemeProvider value={{ currentTheme: "dark", handleToggleTheme }}>
			<ToggleThemeButton />
		</WithThemeProvider>
	);

describe("<ToggleThemeButton />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			expect(screen.getByRole("button")).toBeInTheDocument();
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
