import { styled } from "../../../stitches.config";

export const Container = styled("ul", {
	width: "100%",

	flexCenter: "column",
	gap: "40px",

	marginTop: "40px",
});

export const Project = styled("li", {
	width: "100%",

	display: "grid",
	gridTemplateColumns: "1fr",
	gridTemplateRows: "300px 0.5fr",
	placeItems: "center",
	gap: "30px",

	"@bp1": {
		gridTemplateRows: "350px 0.5fr",
	},

	"@bp2": {
		gridTemplateColumns: "auto 0.8fr",
		gridTemplateRows: "300px",
		gap: "20px",
	},

	"@bp3": {
		gridTemplateColumns: "auto minmax(auto, 600px)",
		gridTemplateRows: "400px",
	},
});

export const ContainerText = styled("section", {
	justifySelf: "center",
	width: "100%",

	order: 1,

	display: "flex",
	alignItems: "flex-start",
	justifyContent: "center",
	flexDirection: "column",
	gap: "10px",

	"@bp0.5": {
		justifySelf: "start",
	},

	"@bp2": {
		order: 0,

		width: "fit-content",
	},

	"@bp4": {
		justifySelf: "center",
	},
});

export const Name = styled("h3", {
	fontFamily: "$font__util",
	fontWeight: 600,
	color: "$font",
	textTransform: "capitalize",
});

export const Description = styled("p", {
	fontWeight: 500,
	color: "$util__accent",
	fontSize: "$font__default",

	"@bp2": {
		maxWidth: "320px",
	},

	"@bp3": {
		maxWidth: "400px",
	},

	"@bp4": {
		maxWidth: "500px",
	},
});

export const Links = styled("div", {
	alignSelf: "flex-end",
	flexCenter: "row",
	gap: "5px",
});

export const Mac = styled("section", {
	width: "100%",
	height: "100%",

	position: "relative",

	border: "5px solid $util__default",
	borderRadius: "15px",
});

export const Header = styled("header", {
	borderBottom: "inherit",
	height: "35px",

	display: "flex",
	alignItems: "center",

	paddingLeft: "10px",
});

export const Circle = styled("span", {
	width: "fit-content",
	display: "block",
	padding: "7px",

	borderRadius: "100%",
	background: "$util__accent",

	position: "relative",

	"&::before": {
		afterOrBefore: "block",
		left: "20px",

		width: "inherit",

		padding: "inherit",
		background: "inherit",
		borderRadius: "inherit",
	},

	"&::after": {
		afterOrBefore: "block",
		left: "40px",

		width: "inherit",
		padding: "inherit",
		background: "inherit",
		borderRadius: "inherit",
	},
});
