import { ToggleThemeButton } from "../Buttons";
import { BaseHeader } from "./BaseHeader";
import { Anchors } from "../Anchors";

type HeaderProps = Pick<Parameters<typeof Anchors>[0], "anchors">;

export const Header = (props: HeaderProps) => {
	const { anchors } = props;
	return (
		<BaseHeader className="gap-11 overflow-x-auto">
			<ToggleThemeButton />
			<nav>
				<Anchors anchors={anchors} />
			</nav>
		</BaseHeader>
	);
};
