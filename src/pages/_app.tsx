import type { AppProps } from "next/app";

import { ThemeContextProvider } from "../contexts/ThemeContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider initialTheme="dark">
			<Component {...pageProps} />
		</ThemeContextProvider>
	);
}

export default MyApp;
