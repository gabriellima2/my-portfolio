import type { AppProps } from "next/app";

import { Seo } from "../components/Infra/Seo";
import { ThemeContextProvider } from "../contexts/ThemeContext";

import { globalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return (
		<>
			<Seo />
			<ThemeContextProvider>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</>
	);
}

export default MyApp;
