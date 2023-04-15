import { Header, MaxWidthContainer } from "@/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

import { defaultAnchors } from "@/assets";
import { IAnchor } from "@/interfaces/IAnchor";

type DefaultLayoutProps = LayoutDefaultProps & {
	anchors?: IAnchor[];
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
	const { children, anchors = defaultAnchors } = props;
	return (
		<MaxWidthContainer>
			<Header anchors={anchors} />
			<main>{children}</main>
			<footer></footer>
		</MaxWidthContainer>
	);
};
