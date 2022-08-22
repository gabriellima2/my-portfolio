import type { AppProps } from "next/app";

import { Seo } from "../components/Infra/Seo";

import { globalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	return (
		<>
			<Seo />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
