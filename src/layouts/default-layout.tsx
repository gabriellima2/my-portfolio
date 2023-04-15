import { Header, MaxWitdthContainer } from "@/components/common";
import type { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const DefaultLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<MaxWitdthContainer>
			<Header />
			<main className="py-21">{children}</main>
			<footer></footer>
		</MaxWitdthContainer>
	);
};
