import { createContext, useEffect, useState } from "react";

import { THEME_CLASSNAME } from "../constants";
import { theme } from "../utils/theme";

import type { CurrentTheme, WithChildren } from "../types";

interface ThemeContextProperties {
	currentTheme: CurrentTheme;
	changeCurrentTheme: () => void;
}

interface ThemeContextProviderProps {
	initialTheme: CurrentTheme;
}

export const ThemeContext = createContext({} as ThemeContextProperties);

export const ThemeContextProvider = ({
	children,
	initialTheme,
}: WithChildren<ThemeContextProviderProps>) => {
	const [currentTheme, setCurrentTheme] = useState<CurrentTheme>(initialTheme);

	const changeCurrentTheme = () => {
		if (currentTheme === "light") return setCurrentTheme("dark");

		return setCurrentTheme("light");
	};

	useEffect(() => {
		const html = document.documentElement;
		theme.persist(currentTheme);

		// Para mudar o tema, adiciona classes correspondentes
		if (currentTheme === "dark" && !html.classList.contains(THEME_CLASSNAME)) {
			return html.classList.add(THEME_CLASSNAME);
		}

		if (currentTheme === "light" && html.classList.contains(THEME_CLASSNAME)) {
			return html.classList.remove(THEME_CLASSNAME);
		}
	}, [currentTheme]);

	return (
		<ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
