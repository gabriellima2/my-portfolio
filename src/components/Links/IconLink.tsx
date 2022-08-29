import React from "react";
import { IconType } from "react-icons";

import { styled, Property } from "../../../stitches.config";
import { LinkProps } from "../../types";

interface IconLinkProps extends LinkProps {
	icon: {
		element: IconType;
		label: string;
		size?: Property.FontSize;
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

	"@bp1": {
		fontSize: "$font__large",
	},
});

export const IconLink = ({ icon, ...props }: IconLinkProps) => (
	<Container css={{ fontSize: icon.size }} {...props}>
		<i aria-label={icon.label}>{React.createElement(icon.element)}</i>
	</Container>
);
