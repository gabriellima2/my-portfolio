import { TWithChildren } from "@/@types/TWithChildren";
import { ThemeContext } from "./theme-context";
import { Themes } from "./@types/Themes";
import { render, screen } from "@testing-library/react";
import { ButtonWithSpecificTheme } from "./mocks/button-with-specific-theme";
import { useEffect, useState } from "react";
import { vi } from "vitest";
import { simulateClick } from "../../__mocks__/simulate-click";

type ThemeProviderProps = TWithChildren & {
	initialTheme: Themes;
	documentClassName: string;
	persistor?: (theme: Themes) => Promise<void> | void;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { initialTheme, documentClassName, persistor, children } = props;
	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	const handlePersistUserPreference = () => {
		if (!persistor) return;
		persistor(currentTheme);
	};

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
		handlePersistUserPreference();
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
