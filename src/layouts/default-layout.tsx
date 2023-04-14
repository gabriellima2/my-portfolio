import { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const DefaultLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
};
