import { LayoutDefaultProps } from "./@types/LayoutDefaultProps";

export const StackLayout = (props: LayoutDefaultProps) => {
	const { children } = props;
	return (
		<>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</>
	);
};
