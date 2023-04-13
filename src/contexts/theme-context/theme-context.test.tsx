import { TWithChildren } from "@/@types/TWithChildren";
import { ThemeContext } from "./theme-context";
import { Themes } from "./@types/Themes";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonWithSpecificTheme } from "./mocks/button-with-specific-theme";
import { useEffect, useState } from "react";

type ThemeProviderProps = TWithChildren & {
	initialTheme: Themes;
	documentClassName: string;
	persistor?: (newTheme: Themes) => Promise<void> | void;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, documentClassName, children } = props;
	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	const handleDocumentClassNameChange = () => {
		const html = document.documentElement;
		if (currentTheme === "dark" && !html.classList.contains(documentClassName))
			return html.classList.add(documentClassName);

		if (currentTheme === "light" && html.classList.contains(documentClassName))
			return html.classList.remove(documentClassName);
	};

	const handleToggleTheme = () => {
		if (currentTheme === "dark") return setCurrentTheme("light");
		setCurrentTheme("dark");
	};

	useEffect(() => {
		handleDocumentClassNameChange();
	}, [currentTheme]);

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
					await act(async () => {
						await userEvent.click(button);
					});

					expect(html).toHaveAttribute("class", DOCUMENT_CLASSNAME);
					expect(screen.getByText(ThemeNames.dark)).toBeInTheDocument();
				});
				it("should change theme from dark to light when clicked", async () => {
					renderComponent({ initialTheme: ThemeNames.dark });

					const button = screen.getByRole("button");
					await act(async () => {
						await userEvent.click(button);
					});

					expect(html).not.toHaveAttribute("class", DOCUMENT_CLASSNAME);
					expect(screen.getByText(ThemeNames.light)).toBeInTheDocument();
				});
			});
		});
	});
});
