import { ThemeButton } from "../Buttons/ThemeButton";
import { NavigationMenu } from "./NavigationMenu";
import { Logo } from "./Logo";

import { styled } from "../../../stitches.config";

const Container = styled("header", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	padding: "20px 40px",
});

export const Header = () => {
	return (
		<Container>
			<Logo />
			<NavigationMenu />
			<ThemeButton />
		</Container>
	);
};
