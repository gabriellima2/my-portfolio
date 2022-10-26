import type { AppProps } from "next/app";

import { ThemeContextProvider } from "../contexts/ThemeContext";
import { getPreferenceTheme } from "../utils/getPreferenceTheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider initialTheme={getPreferenceTheme()}>
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
}

export default MyApp;
