import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	html: {
		scrollBehavior: "smooth",
	},

	body: {
		color: "$font",
		fontFamily: "$font__main",
		backgroundColor: "$main",

		overflowX: "hidden",
	},

	ul: {
		listStyle: "none",
	},

	a: {
		textDecoration: "none",
		color: "$font",
	},
});
