import React, { ReactNode } from "react";
import { IconType } from "react-icons";

import { styled, Property } from "../../../stitches.config";
import { LinkProps } from "../../types";

interface IconLinkProps extends LinkProps {
	icon: {
		element: IconType;
		label: string;
		size?: Property.FontSize;
	};
	children?: ReactNode;
}

const Container = styled("a", {
	flexCenter: "row",
	gap: "10px",

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

const Icon = styled("i", {
	flexCenter: "row",
});

export const IconLink = ({ icon, children, ...props }: IconLinkProps) => (
	<Container css={{ fontSize: icon.size }} {...props}>
		<Icon aria-label={icon.label}>{React.createElement(icon.element)}</Icon>
		{children}
	</Container>
);
