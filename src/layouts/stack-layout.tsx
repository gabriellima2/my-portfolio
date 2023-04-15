import { MaxWidthContainer } from "@/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const StackLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<MaxWidthContainer>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</MaxWidthContainer>
	);
};
