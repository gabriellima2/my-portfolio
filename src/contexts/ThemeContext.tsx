import { setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

import { darkTheme } from "../../stitches.config";
import { CurrentTheme, WithChildren } from "../types";

export enum Themes {
	dark = "dark",
	light = "light",
}

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
		if (currentTheme === Themes.light) return setCurrentTheme(Themes.dark);

		return setCurrentTheme(Themes.light);
	};

	useEffect(() => {
		const html = document.documentElement;

		// Persisitir a preferência de tema nos Cookies.
		setCookie(null, "theme", currentTheme, {
			maxAge: 60 * 60, // 1 Hora
			sameSite: "strict",
			path: "/",
		});

		// Para mudar o tema, adiciona classes correspondentes
		if (html.classList.contains(Themes.dark)) {
			html.classList.remove(darkTheme);
		}

		if (currentTheme === Themes.dark) return html.classList.add(darkTheme);
	}, [currentTheme]);

	return (
		<ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
