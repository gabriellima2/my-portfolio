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

export const Section = styled("section", {
	background: "$transparent__main",
	backdropFilter: "blur(22px)",
});

export const Content = styled("div", {
	width: "100%",
	height: "85vh",

	padding: "20px",

	flexCenter: "column",

	"@bp0.5": {
		padding: "10px 40px",
	},
});

export const Subtitle = styled("h2", {
	fontSize: "$font__default",
	textAlign: "center",
	fontWeight: 600,
	color: "$util__accent",

	margin: "5px 0px 20px 0px",

	"@bp0.5": {
		width: "100%",
		maxWidth: "420px",
	},

	"@bp1": {
		maxWidth: "500px",
		fontSize: "$font__large",

		margin: "6px 0px 25px 0px",
	},
});

export const Links = styled("div", {
	flexCenter: "row",
	gap: "15px",
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
