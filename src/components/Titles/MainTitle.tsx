import { styled } from "../../../stitches.config";
import { WithChildren } from "../../types";

const Title = styled("h1", {
	flexCenter: "column",
	alignItems: "flex-start",

	fontFamily: "$font__util",
	fontSize: "2.6rem",
	fontWeight: 900,
	textAlign: "center",
	letterSpacing: "1px",
	wordBreak: "break-word",

	background: "linear-gradient(to bottom right, $green 0%, $pink 100%)",
	setupGradientText: "black",

	"@bp0.5": {
		wordBreak: "normal",
		maxWidth: "550px",
		fontSize: "3rem",
	},

	"@bp2": {
		maxWidth: "750px",
		fontSize: "4rem",
	},

	"@bp4": {
		maxWidth: "1000px",
		fontSize: "4.5rem",
	},
});

export const MainTitle = (props: WithChildren) => (
	<Title>{props.children}</Title>
);
