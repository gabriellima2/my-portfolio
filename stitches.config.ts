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
			transparent__main: "#eff6fbeb",
			glassmorphism: "#25252518",

			util: "#D8E2E8",
			util__default: "#DFEAF1",
			util__accent: "#53758E",

			blue: "#0E95F6",
			green: "#15EEC7",
			pink: "#df36d1",

			overlay: "#f5f5f5ac",

			font: "#131414",
			font__accent: "#53758E",
		},
		fonts: {
			font__main: "'Noto Sans', 'Lato', sans-serif",
			font__util: "'Lato', 'Noto Sans', sans-serif",
		},
		fontSizes: {
			font__3xSmall: "0.6rem",
			font__2xSmall: "0.7rem",
			font__xSmall: "0.8rem",
			font__small: "0.9rem",

			font__default: "1rem",

			font__large: "1.2rem",
			font__xLarge: "1.4rem",
			font__2xLarge: "1.6rem",
			font__3xLarge: "1.8rem",
			font__4xLarge: "2rem",
		},
	},
	media: {
		"bp0.5": "(min-width: 480px)",
		bp1: "(min-width: 640px)",
		bp2: "(min-width: 768px)",
		bp3: "(min-width: 1024px)",
		bp4: "(min-width: 1468px)",
		bp5: "(min-width: 1740px)",
	},
	utils: {
		afterOrBefore: (display: Stitches.PropertyValue<"display">) => ({
			content: "",
			display,

			position: "absolute",
			bottom: 0,
			left: 0,
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
		setGradientText: (contrastColor: Stitches.PropertyValue<"color">) => ({
			backgroundClip: "text",
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			color: contrastColor,
		}),
		absoluteCenter: () => ({
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, 50%)",
		}),
	},
});

export const darkTheme = createTheme("dark", {
	colors: {
		main: "#0a0a0a",
		transparent__main: "#0a0a0af5",
		glassmorphism: "#dddddd18",

		util: "#101111",
		util__default: "#202020",
		util__accent: "#798A97",

		blue: "#0E95F6",
		green: "#15EEC7",

		overlay: "#121313ac",

		font: "#DFEAF1",
		font__accent: "#B2C7D7",
	},
});
