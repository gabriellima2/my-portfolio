import React from "react";
import { IconType } from "react-icons";

import { styled } from "../../../stitches.config";
import { LinkProps } from "../../types";

interface IconLinkProps extends LinkProps {
	icon: {
		element: IconType;
		label: string;
	};
}

const Container = styled("a", {
	fontSize: "$font__default",
	color: "$util__accent",

	padding: "5px",

	defaultTransition: "opacity",

	"&:hover": {
		opacity: 0.6,
	},
});

export const IconLink = ({ icon, ...props }: IconLinkProps) => (
	<Container {...props}>
		<i aria-label={icon.label}>{React.createElement(icon.element)}</i>
	</Container>
);
