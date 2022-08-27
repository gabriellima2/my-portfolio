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

export const Links = styled("div", {
	flexCenter: "row",
	gap: "30px",

	marginTop: "40px",
});
