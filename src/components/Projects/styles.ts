import { styled } from "../../../stitches.config";

export const Container = styled("ul", {
	width: "100%",

	flexCenter: "column",
	gap: "40px",

	margin: "40px 0px 15px 0px",
});

export const Project = styled("li", {
	display: "grid",
	gridTemplateColumns: "1fr",
	gridTemplateRows: "minmax(auto, 350px) 1fr",
	placeItems: "center",
	gap: "5px",

	"@bp1": {
		gridTemplateRows: "minmax(auto, 600px) 1fr",
	},

	"@bp4": {
		maxWidth: "1200px",

		gridTemplateColumns: "repeat(2, 1fr)",
	},
});

export const ContainerText = styled("section", {
	justifySelf: "start",
	width: "100%",
	height: "fit-content",

	order: 1,

	display: "flex",
	alignItems: "flex-start",
	justifyContent: "center",
	flexDirection: "column",
	gap: "10px",

	padding: "20px 10px",

	"@bp1": {
		width: "fit-content",

		border: "5px solid $util__default",
		borderRadius: "5px",

		padding: "20px",

		background: "$transparent__main",
		transform: "translate(30px, -80px)",
		zIndex: 1000,
	},

	"@bp4": {
		justifySelf: "end",
		order: 0,
		transform: "translateX(50px)",
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
});

export const Links = styled("div", {
	alignSelf: "flex-end",
	flexCenter: "row",
	gap: "5px",
});

export const Mac = styled("section", {
	width: "90vw",
	height: "100%",

	border: "5px solid $util__default",
	borderRadius: "15px",

	"@bp3": {
		width: "800px",
		height: "600px",
	},
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

	"&::before, &::after": {
		afterOrBefore: "block",
		left: "20px",

		width: "inherit",
		padding: "inherit",
		background: "inherit",
		borderRadius: "inherit",
	},

	"&::after": {
		left: "40px",
	},
});

export const ContainerImage = styled("div", {
	width: "100%",
	height: "89%",

	position: "relative",

	"@bp1": {
		height: "94%",
	},
});
