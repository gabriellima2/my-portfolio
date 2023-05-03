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
	withoutFooter?: boolean;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
	const { children, anchors = defaultAnchors, withoutFooter = false } = props;
	return (
		<MaxWidthContainer>
			<Header anchors={anchors} />
			<main>{children}</main>
			{!withoutFooter && <Footer />}
		</MaxWidthContainer>
	);
};
