import { styled } from "../../../stitches.config";
import { WithChildren } from "../../types";

const Container = styled("h2", {
	maxWidth: "270px",

	fontWeight: 700,
	textAlign: "left",
	fontSize: "$font__default",

	"bp0.5": {
		maxWidth: "380px",
		fontSize: "$font__large",
	},

	"@bp1": {
		maxWidth: "450px",
		fontSize: "$font__2xLarge",
	},
});

export const Subtitle = (props: WithChildren) => (
	<Container>{props.children}</Container>
);
