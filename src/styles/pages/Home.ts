import { styled } from "../../../stitches.config";

export const BackgroundDetails = styled("div", {
	width: "100vw",

	background: "url(/bg-details-mobile.svg)",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",

	"@bp5": {
		background: "url(/bg-details-desktop.svg)",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
});

export const Glassmorphism = styled("section", {
	background: "$transparent__main",
});

export const Content = styled("div", {
	width: "100%",
	height: "85vh",

	padding: "20px",

	flexCenter: "column",
	gap: "35px",

	"@bp0.5": {
		padding: "10px 40px",
		gap: "60px",
	},
});

export const Text = styled("div", {
	width: "full",
	flexCenter: "column",
	gap: "40px",
});

export const SectionFooter = styled("footer", {
	width: "100%",

	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",

	padding: "0px 40px",

	"@bp1": {
		padding: "0px 60px",
	},
});

export const Small = styled("small", {
	color: "$util__accent",
	fontWeight: 600,
	fontSize: "$font__default",
	marginBottom: "-25px",

	"@bp0.5": {
		fontSize: "$font__large",
		marginBottom: "0px",
	},
});

export const GradientText = styled("span", {
	background: "linear-gradient(to right, $green 0%, $pink 100%)",
	setupGradientText: "black",
});

export const Hello = styled("span", {
	fontSize: "$font__large",

	"@bp0.5": {
		fontSize: "$font__2xLarge",
	},
});

export const Section = styled("section", {
	padding: "30px",

	"@bp1": {
		padding: "60px",
	},
});

export const About = styled("p", {
	maxWidth: "800px",
	marginTop: "30px",

	textAlign: "left",
	fontSize: "$font__small",
	fontWeight: 500,

	"@bp1": {
		textAlign: "center",
		fontSize: "$font__default",
	},
});

export const Conclusion = styled("div", {
	flexCenter: "column",
	alignItems: "flex-start",
	gap: "30px",

	"@bp1": {
		alignItems: "center",
	},
});
