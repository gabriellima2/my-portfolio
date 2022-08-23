import { createContext, useEffect, useState } from "react";

import { darkTheme } from "../../stitches.config";
import { WithChildren } from "../types";

type CurrentTheme = "light" | "dark";

interface ThemeContextProperties {
	currentTheme: CurrentTheme;
	changeCurrentTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProperties);

export const ThemeContextProvider = ({ children }: WithChildren) => {
	const [currentTheme, setCurrentTheme] = useState<CurrentTheme>("light");

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
