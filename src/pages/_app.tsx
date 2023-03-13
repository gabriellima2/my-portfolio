import type { AppProps } from "next/app";

import { NavigationMenuProvider } from "../contexts/NavigationMenuContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

import { NavigationMenu } from "../components/Navigation/NavigationMenu";

import { theme } from "../utils/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const preferenceTheme = theme.getPreference();

	return (
		<ThemeContextProvider initialTheme={preferenceTheme}>
			<NavigationMenuProvider>
				<NavigationMenu />
				<Component {...pageProps} />
			</NavigationMenuProvider>
		</ThemeContextProvider>
	);
}

export default MyApp;
