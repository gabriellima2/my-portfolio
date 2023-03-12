import type { AppProps } from "next/app";

import { MenuNavigationProvider } from "../contexts/MenuNavigationContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

import { MenuNavigation } from "../components/MenuNavigation/MenuNavigation";

import { theme } from "../utils/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const preferenceTheme = theme.getPreference();

	return (
		<ThemeContextProvider initialTheme={preferenceTheme}>
			<MenuNavigationProvider>
				<MenuNavigation />
				<Component {...pageProps} />
			</MenuNavigationProvider>
		</ThemeContextProvider>
	);
}

export default MyApp;
