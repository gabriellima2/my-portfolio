import "@/shared/styles/globals.css";

import type { AppProps } from "next/app";
import { Providers } from "@/shared/contexts/providers";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	);
}

export default MyApp;
