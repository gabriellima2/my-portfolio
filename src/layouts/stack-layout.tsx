import { MaxWitdthContainer } from "@/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const StackLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<>
			<header></header>
			<main>
				<MaxWitdthContainer>{children}</MaxWitdthContainer>
			</main>
			<footer></footer>
		</>
	);
};
