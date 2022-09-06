import { CSS } from "@stitches/react/types/css-util";
import { styled } from "../../../../stitches.config";

const LINES_DEFAULT_STYLE: CSS = {
	afterOrBefore: "block",

	width: "25px",
	height: "2px",

	zIndex: 0,
	defaultTransition: "all",

	borderRadius: "5px",
	backgroundColor: "$util__accent",
};

export const Container = styled("div", {
	width: "fit-content",
	order: 1,

	"@bp1": {
		width: "100%",
		order: 0,
		flexCenter: "row",
	},
});

export const Navigation = styled("nav", {
	width: "90vw",
	height: "fit-content",

	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, 50%)",

	borderRadius: "5px",
	padding: "15px 0px",

	background: "$glassmorphism",
	backdropFilter: "blur(10px)",

	variants: {
		visibility: {
			visible: {
				display: "block",
			},
			hidden: {
				display: "none",

				"@bp1": {
					width: "fit-content",

					display: "block",
					position: "static",
					transform: "translate(0, 0)",

					backdropFilter: "none",
					background: "none",
					padding: 0,
				},
			},
		},
	},
});

export const List = styled("ul", {
	width: "100%",

	display: "flex",
	flexDirection: "column",
	gap: "15px",

	padding: "0px 40px",

	"@bp1": {
		width: "fit-content",

		alignItems: "center",
		flexDirection: "row",
		padding: "5px",
	},
});

export const ListItem = styled("li", {
	width: "100%",
});

export const AnchorText = styled("a", {
	display: "block",
	width: "100%",

	textTransform: "capitalize",
	position: "relative",

	color: "$font",
	fontWeight: 400,
	fontSize: "$font__default",
	padding: "20px",

	"&:hover, &:focus": {
		opacity: 0.7,
	},

	"&::after": {
		afterOrBefore: "block",

		width: "3px",
		height: "100%",

		left: "1px",

		opacity: "0",
		borderRadius: "5px",
		transition: "all 0.6s ease",
	},

	"&:hover::after": {
		opacity: "1",
		background: "linear-gradient(to bottom, $green 0%, $blue 100%)",
	},

	"@bp1": {
		padding: "10px",
		background: "none",
		border: "none",

		"&::after": {
			width: 0,
			height: "3px",

			bottom: "-8px",

			defaultTransition: "width",
		},

		"&:hover::after": {
			width: "100%",
			background: "$util__default",
		},
	},
});

export const Button = styled("button", {
	display: "block",

	width: "35px",
	height: "35px",

	background: "none",
	border: "none",

	zIndex: 10000,
	cursor: "pointer",

	padding: "5px",
	position: "relative",

	"@bp1": {
		display: "none",
	},
});

export const Hamburguer = styled("span", {
	"&::after": {
		...LINES_DEFAULT_STYLE,

		bottom: "12px",
	},

	"&::before": {
		...LINES_DEFAULT_STYLE,
		defaultTransition: "all",
		afterOrBefore: "block",

		top: "12px",
	},

	variants: {
		format: {
			customized: {
				"&::after": {
					transform: "rotate(55deg) translate(-2px, -5px)",
				},
				"&::before": {
					transform: "rotate(-55deg) translate(-2px, 5px)",
				},
			},
			default: {
				display: "block",
			},
		},
	},
});
