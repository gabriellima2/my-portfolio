import { styled } from "../../stitches.config";

const Container = styled("div", {
	flexCenter: "column",
	gap: "15px",

	marginRight: "20px",

	"@bp1": {
		marginRight: "30px",
	},
});

const Text = styled("p", {
	fontFamily: "$font__util",
	letterSpacing: "0.5px",
	fontSize: "$font__xSmall",
	textTransform: "uppercase",
	color: "$util__accent",

	opacity: 0.8,

	"@bp1": {
		fontSize: "$font__small",
	},
});

const Line = styled("span", {
	display: "block",

	width: "2px",
	height: "80px",

	background: "$util__accent",
	opacity: 0.5,
});

export const ScrollIndicator = () => (
	<Container>
		<Text>Scroll</Text>
		<Line />
	</Container>
);
