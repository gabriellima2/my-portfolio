import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export { Stitches };

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	theme: {
		colors: {
			main: "#EFF6FB",
			util: "#D8E2E8",
			util__default: "#DFEAF1",
			util__accent: "#53758E",

			blue: "#0E95F6",
			green: "#15EEC7",

			overlay: "#f5f5f5ac",

			font: "#131414",
			font__accent: "#53758E",
		},
		fonts: {
			font__main: "'Noto Sans', 'Lato', sans-serif",
			font__util: "'Lato', 'Noto Sans', sans-serif",
		},
		fontSizes: {
			"font__3x-small": "0.6rem",
			"font__2x-small": "0.7rem",
			"font__x-small": "0.8rem",
			font__small: "0.9rem",

			font__default: "1rem",

			font__large: "1.2rem",
			"font__x-large": "1.4rem",
			"font__2x-large": "1.6rem",
			"font__3x-large": "1.8rem",
			"font__4x-large": "2rem",
		},
	},
	media: {
		bp1: "(min-width: 640px)",
		bp2: "(min-width: 768px)",
		bp3: "(min-width: 1024px)",
	},
	utils: {
		afterOrBefore: (display: Stitches.PropertyValue<"display">) => ({
			content: "",
			display,
		}),
		flexCenter: (direction: Stitches.PropertyValue<"flexDirection">) => ({
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: direction,
		}),
		defaultTransition: (
			property: Stitches.PropertyValue<"transitionProperty">
		) => ({
			transition: `${property} 0.3s ease-in-out`,
		}),
	},
});

export const darkTheme = createTheme("dark", {
	colors: {
		main: "#131414",
		util: "#151616",
		util__default: "#1C1E1E",
		util__accent: "#798A97",

		blue: "#0E95F6",
		green: "#15EEC7",

		overlay: "#121313ac",

		font: "#DFEAF1",
		font__accent: "#B2C7D7",
	},
});
