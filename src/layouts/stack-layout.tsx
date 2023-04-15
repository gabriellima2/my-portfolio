import { MaxWidthContainer, StackHeader } from "@/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const StackLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<MaxWidthContainer>
			<StackHeader />
			<main>{children}</main>
			<footer></footer>
		</MaxWidthContainer>
	);
};
