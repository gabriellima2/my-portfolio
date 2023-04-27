import {
	Footer,
	Header,
	MaxWidthContainer,
} from "@/presentation/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

import { defaultAnchors } from "@/shared/assets";
import { IAnchor } from "@/shared/interfaces/IAnchor";

type DefaultLayoutProps = LayoutDefaultProps & {
	anchors?: IAnchor[];
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
	const { children, anchors = defaultAnchors } = props;
	return (
		<MaxWidthContainer>
			<Header anchors={anchors} />
			<main>{children}</main>
			<Footer />
		</MaxWidthContainer>
	);
};
