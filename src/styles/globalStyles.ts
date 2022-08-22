import { globalCss } from "../../stitches.config";

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},

	body: {
		color: "$font",
		fontFamily: "$font__main",
		backgroundColor: "$main",
	},

	ul: {
		listStyle: "none",
	},

	a: {
		textDecoration: "none",
		color: "$font",
	},
});
