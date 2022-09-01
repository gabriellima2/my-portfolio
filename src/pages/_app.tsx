import { NextPageContext } from "next";
import type { AppProps } from "next/app";
import nookies from "nookies";

import { Seo } from "../components/Infra/Seo";
import { CurrentTheme, ThemeContextProvider } from "../contexts/ThemeContext";

import { globalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps, ...props }: AppProps) {
	const currentTheme: CurrentTheme = "light";
	globalStyles();

	return (
		<>
			<Seo />
			<ThemeContextProvider specificTheme={currentTheme}>
				<Component {...pageProps} />
			</ThemeContextProvider>
		</>
	);
}

export default MyApp;

MyApp.getInitialProps = async (ctx: NextPageContext) => {
	const { ["theme"]: cookie } = nookies.get(ctx);

	return {
		preferenceTheme: cookie,
	};
};
