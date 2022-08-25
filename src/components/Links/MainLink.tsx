import { styled } from "../../../stitches.config";
import { LinkProps, WithChildren } from "../../types";

type MainLinkProps = LinkProps;

const Container = styled("a", {
	background: "$util__default",

	color: "$util__accent",
	fontWeight: 600,
	fontSize: "$font__small",
	textTransform: "capitalize",

	padding: "20px 20px",
	borderRadius: "10px",

	position: "relative",
	transition: "color 0.7s ease",

	"&::before": {
		afterOrBefore: "block",

		width: 0,
		height: "100%",

		borderRadius: "10px",

		opacity: "0.3",
		transition: "width 0.5s ease",
		background: "linear-gradient(to left, $pink 0%, $blue 100%)",
	},

	"&:hover::before, &:focus::before": {
		width: "100%",
	},

	"&:hover, &:focus": {
		color: "$font",
	},

	"@bp0.5": {
		fontSize: "$font__default",
		padding: "20px 25px",
	},

	"@bp1": {
		padding: "21px 30px",
	},
});

export const MainLink = ({
	children,
	...props
}: WithChildren<MainLinkProps>) => <Container {...props}>{children}</Container>;
