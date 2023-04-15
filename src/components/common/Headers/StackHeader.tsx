import { GoBackButton, ToggleThemeButton } from "../Buttons";
import { BaseHeader } from "./BaseHeader";

export const StackHeader = () => {
	return (
		<BaseHeader className="gap-4">
			<GoBackButton />
			<ToggleThemeButton />
		</BaseHeader>
	);
};
