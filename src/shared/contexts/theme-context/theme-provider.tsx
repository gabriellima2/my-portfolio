import { useEffect, useState } from "react";

import { ThemeContext } from "./theme-context";

import type { TWithChildren } from "@/@types/TWithChildren";
import type { Themes } from "./@types/Themes";

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
