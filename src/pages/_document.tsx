import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../../stitches.config";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700;900&family=Noto+Sans:wght@400;500;600;700;900&display=swap"
						rel="stylesheet"
					/>

					<style
						id="stitches"
						dangerouslySetInnerHTML={{ __html: getCssText() }}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
