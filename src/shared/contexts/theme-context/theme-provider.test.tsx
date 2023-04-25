import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { ThemeProvider } from ".";

import { ButtonWithSpecificTheme } from "./mocks/button-with-specific-theme";
import { simulateClick } from "@/__mocks__/simulate-click";

const PERSISTOR = vi.fn();
const DOCUMENT_CLASSNAME = "any_class";
enum ThemeNames {
	dark = "dark",
	light = "light",
}

const renderComponent = (
	props: Pick<Parameters<typeof ThemeProvider>[0], "initialTheme">
) =>
	render(
		<ThemeProvider
			initialTheme={props.initialTheme}
			documentClassName={DOCUMENT_CLASSNAME}
			persistor={PERSISTOR}
		>
			<ButtonWithSpecificTheme />
		</ThemeProvider>
	);

describe("<ThemeProvider />", () => {
	describe("Render", () => {
		it("should render correctly with dark as initial theme", () => {
			renderComponent({ initialTheme: ThemeNames.dark });

			expect(screen.getByText(ThemeNames.dark)).toBeInTheDocument();
		});
		it("should render correctly with light as initial theme", () => {
			renderComponent({ initialTheme: ThemeNames.light });

			expect(screen.getByText(ThemeNames.light)).toBeInTheDocument();
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			describe("HandleToggleTheme", () => {
				const html = document.documentElement;
				it("should change theme from light to dark when clicked", async () => {
					renderComponent({ initialTheme: ThemeNames.light });

					const button = screen.getByRole("button");
					await simulateClick(button);

					expect(PERSISTOR).toHaveBeenCalledWith(ThemeNames.dark);
					expect(html).toHaveAttribute("class", DOCUMENT_CLASSNAME);
					expect(screen.getByText(ThemeNames.dark)).toBeInTheDocument();
				});
				it("should change theme from dark to light when clicked", async () => {
					renderComponent({ initialTheme: ThemeNames.dark });

					const button = screen.getByRole("button");
					await simulateClick(button);

					expect(PERSISTOR).toHaveBeenCalledWith(ThemeNames.light);
					expect(html).not.toHaveAttribute("class", DOCUMENT_CLASSNAME);
					expect(screen.getByText(ThemeNames.light)).toBeInTheDocument();
				});
			});
		});
	});
});
