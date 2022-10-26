import { setCookie } from "nookies";
import { createContext, useEffect, useState, useCallback } from "react";

import { THEME_CLASSNAME, THEME_ID_COOKIES } from "../constants";
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

	// Persisitir a preferência de tema nos Cookies.
	const handleThemePersistence = useCallback(() => {
		setCookie(null, THEME_ID_COOKIES, currentTheme, {
			maxAge: 60 * 60, // 1 Hora
			sameSite: "strict",
			path: "/",
		});
	}, [currentTheme]);

	useEffect(() => {
		const html = document.documentElement;
		handleThemePersistence();

		// Para mudar o tema, adiciona classes correspondentes
		if (currentTheme === "dark" || !html.classList.contains(THEME_CLASSNAME)) {
			return html.classList.add(THEME_CLASSNAME);
		}

		html.classList.remove(THEME_CLASSNAME);
	}, [currentTheme]);

	return (
		<ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
