import { Header, MaxWidthContainer } from "@/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const DefaultLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<MaxWidthContainer>
			<Header />
			<main className="py-6 sm:py-11 md:py-16 lg:py-21">{children}</main>
			<footer></footer>
		</MaxWidthContainer>
	);
};
