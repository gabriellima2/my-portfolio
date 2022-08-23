import { CSS } from "@stitches/react/types/css-util";
import { styled } from "../../../../stitches.config";

const LIST_DEFAULT_STYLE: CSS = {
	position: "static",
	flexCenter: "row",
	transform: "translate(0%, 0%)",
};

const LINES_DEFAULT_STYLE: CSS = {
	width: "25px",
	height: "2px",

	position: "absolute",

	borderRadius: "5px",
	backgroundColor: "$util__accent",
};

export const AsideContainer = styled("aside", {
	display: "block",

	width: "0vw",

	position: "absolute",
	top: "0",
	right: "0",

	transition: "all 0.4s ease",
	background: "$util__default",
	opacity: "0.9",

	variants: {
		visibility: {
			visible: {
				width: "100vw",
				opacity: "0.9",
				height: "50vh",
			},
			hidden: {
				opacity: "0",
				height: "0vh",
			},
		},
	},

	"@bp1": {
		display: "none",
	},
});

export const List = styled("ul", {
	width: "100%",

	display: "flex",
	flexDirection: "column",
	gap: "15px",

	padding: "0px 40px",

	position: "absolute",
	right: "0",
	top: "10%",

	variants: {
		visibility: {
			visible: {
				display: "flex",
				"@bp1": {
					...LIST_DEFAULT_STYLE,
				},
			},
			hidden: {
				display: "none",

				"@bp1": {
					display: "flex",
					...LIST_DEFAULT_STYLE,
				},
			},
		},
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

	color: "$util__accent",
	fontWeight: 500,
	fontSize: "$font__default",
	padding: "20px",

	borderRadius: "10px",
	background: "linear-gradient(to right, #D8E2E8 0%, $util__default 100%)",

	"&:hover, &:focus": {
		background: "$util__default",
	},

	"&::after": {
		afterOrBefore: "block",

		width: "3px",
		height: "100%",

		position: "absolute",
		bottom: "0",
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

		"&:hover, &:focus": {
			background: "none",
			opacity: 0.7,
		},

		"&::after": {
			width: 0,
			height: "3px",

			bottom: "-8px",

			transition: "width 0.3s ease-in-out",
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

	zIndex: "1000",
	cursor: "pointer",

	padding: "5px",
	position: "relative",

	"@bp1": {
		display: "none",
	},
});

export const Hamburguer = styled("span", {
	display: "block",

	"&::after": {
		...LINES_DEFAULT_STYLE,
		afterOrBefore: "block",

		bottom: "12px",
		transition: "all 0.4s ease",
	},

	"&::before": {
		...LINES_DEFAULT_STYLE,
		afterOrBefore: "block",

		top: "12px",
		transition: "all 0.5s ease",
	},

	variants: {
		format: {
			customized: {
				"&::after": {
					transform: "rotate(55deg) translate(-7px, -5px)",
				},
				"&::before": {
					transform: "rotate(-55deg)",
				},
			},
			default: {},
		},
	},
});
