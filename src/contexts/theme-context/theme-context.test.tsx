import { TWithChildren } from "@/@types/TWithChildren";
import { ThemeContext } from "./theme-context";
import { Themes } from "./@types/Themes";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonWithSpecificTheme } from "./mocks/button-with-specific-theme";
import { useState } from "react";

type ThemeProviderProps = TWithChildren & {
	initialTheme: Themes;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	const handleToggleTheme = () => {
		if (currentTheme === "dark") return setCurrentTheme("light");
		setCurrentTheme("dark");
	};

	return (
		<ThemeContext.Provider
			value={{
				currentTheme,
				handleToggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

enum ThemeNames {
	dark = "dark",
	light = "light",
}

const renderComponent = (
	props: Pick<Parameters<typeof ThemeProvider>[0], "initialTheme">
) =>
	render(
		<ThemeProvider initialTheme={props.initialTheme}>
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
				it("should change theme from light to dark when clicked", async () => {
					renderComponent({ initialTheme: ThemeNames.light });

					const button = screen.getByRole("button");
					await act(async () => {
						await userEvent.click(button);
					});

					expect(screen.getByText(ThemeNames.dark)).toBeInTheDocument();
				});
				it("should change theme from dark to light when clicked", async () => {
					renderComponent({ initialTheme: ThemeNames.dark });

					const button = screen.getByRole("button");
					await act(async () => {
						await userEvent.click(button);
					});

					expect(screen.getByText(ThemeNames.light)).toBeInTheDocument();
				});
			});
		});
	});
});
