import { ThemeButton } from "../Buttons/ThemeButton";
import { NavigationMenu } from "./NavigationMenu";
import { Logo } from "./Logo";

import { styled } from "../../../stitches.config";

const Container = styled("header", {
	display: "flex",
	alignItems: "center",

	padding: "20px 40px",

	"@bp1": {
		justifyContent: "space-between",
	},
});

const UserInteractions = styled("section", {
	width: "100%",
	flexCenter: "row",
	justifyContent: "flex-end",
	gap: "20px",

	"@bp1": {
		justifyContent: "space-between",
		gap: "0px",
	},
});

export const Header = () => {
	return (
		<Container>
			<Logo />
			<UserInteractions>
				<NavigationMenu />
				<ThemeButton />
			</UserInteractions>
		</Container>
	);
};
