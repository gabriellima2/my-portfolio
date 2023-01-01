import type { AppProps } from "next/app";

import { ThemeContextProvider } from "../contexts/ThemeContext";
import { theme } from "../utils/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const preferenceTheme = theme.getPreference();

	return (
		<ThemeContextProvider initialTheme={preferenceTheme}>
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
}

export default MyApp;
