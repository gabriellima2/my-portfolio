import { styled } from "../../../stitches.config";
import { WithChildren } from "../../types";

const Title = styled("h1", {
	color: "$font",
	fontFamily: "$font__util",
	fontSize: "1.9rem",
	fontWeight: 900,
	textAlign: "center",

	"@bp0.5": {
		fontSize: "2.2rem",
	},

	"@bp1": {
		fontSize: "2.7rem",
	},

	"@bp2": {
		maxWidth: "990px",
		fontSize: "3.2rem",
	},

	"@bp4": {
		maxWidth: "1280px",
		fontSize: "4.4rem",
	},
});

export const MainTitle = (props: WithChildren) => (
	<Title>{props.children}</Title>
);
