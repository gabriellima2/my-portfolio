import { styled } from "../../../stitches.config";
import { LinkProps } from "../../types";

type TextLinkProps = LinkProps;

const Container = styled("a", {
	fontSize: "$font__default",
	fontWeight: 600,
	color: "$util__accent",

	position: "relative",
	defaultTransition: "all",

	"&::after": {
		afterOrBefore: "block",

		width: "60%",
		height: "2px",

		borderRadius: "10px",

		bottom: "-5px",
		background: "$util__accent",
		opacity: 0.5,
		defaultTransition: "all",
	},

	"&:hover, &:focus": {
		opacity: 0.6,

		"&::after": {
			width: "100%",
			opacity: 0.9,
		},
	},
});

export const TextLink = ({ children, ...props }: TextLinkProps) => (
	<Container {...props}>{children}</Container>
);
