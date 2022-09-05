import { AppProps } from "next/app";
import { parseCookies } from "nookies";

import { Seo } from "../components/Infra/Seo";

import { ThemeContextProvider, Themes } from "../contexts/ThemeContext";

import { CurrentTheme } from "../types";
import { globalStyles } from "../styles/globalStyles";

function getThemeInCookies(): CurrentTheme | undefined {
	const { ["theme"]: theme } = parseCookies();

	if (!theme || (theme != Themes.light && theme != Themes.dark)) return;

	return theme;
}

function MyApp({ Component, pageProps }: AppProps) {
	const currentTheme: CurrentTheme = getThemeInCookies() || Themes.light;
	globalStyles();

	return (
		<>
			<Seo />
			<ThemeContextProvider initialTheme={currentTheme}>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</>
	);
}

export default MyApp;
