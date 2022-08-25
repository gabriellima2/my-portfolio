import { styled } from "../../../stitches.config";
import { WithChildren } from "../../types";

const Title = styled("h1", {
	flexCenter: "column",
	alignItems: "flex-start",

	fontSize: "2.8rem",
	fontWeight: 900,
	textAlign: "center",

	background: "linear-gradient(to bottom right, $green 0%, $pink 100%)",
	setGradientText: "black",

	"@bp0.5": {
		fontSize: "3rem",
	},

	"@bp1": {
		fontSize: "4rem",
	},
});

export const MainTitle = (props: WithChildren) => (
	<Title>{props.children}</Title>
);
