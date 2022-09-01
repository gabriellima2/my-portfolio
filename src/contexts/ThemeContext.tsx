import { createContext, useEffect, useState } from "react";

import { darkTheme } from "../../stitches.config";
import { WithChildren } from "../types";

export type CurrentTheme = "light" | "dark";

interface ThemeContextProperties {
	currentTheme: CurrentTheme;
	changeCurrentTheme: () => void;
}

interface ThemeContextProviderProps {
	specificTheme: CurrentTheme;
}

export const ThemeContext = createContext({} as ThemeContextProperties);

export const ThemeContextProvider = ({
	children,
	specificTheme,
}: WithChildren<ThemeContextProviderProps>) => {
	const [currentTheme, setCurrentTheme] = useState<CurrentTheme>(specificTheme);

	const changeCurrentTheme = () => {
		if (currentTheme === "light") return setCurrentTheme("dark");

		return setCurrentTheme("light");
	};

	useEffect(() => {
		const html = document.documentElement;

		if (html.classList.contains("dark")) {
			html.classList.remove(darkTheme);
		}

		if (currentTheme === "dark") return html.classList.add(darkTheme);
	}, [currentTheme]);

	return (
		<ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
