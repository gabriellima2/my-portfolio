import { TWithChildren } from "@/@types/TWithChildren";
import { ThemeContext } from "./theme-context";
import { Themes } from "./@types/Themes";
import { render, screen } from "@testing-library/react";
import { ButtonWithSpecificTheme } from "./mocks/button-with-specific-theme";

type ThemeProviderProps = TWithChildren & {
	initialTheme: Themes;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, children } = props;
	return (
		<ThemeContext.Provider
			value={{
				currentTheme: initialTheme,
				handleToggleTheme: () => null,
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
});
