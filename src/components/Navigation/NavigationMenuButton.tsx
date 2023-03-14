import { useMemo } from "react";
import { useNavigationMenuContext } from "../../contexts/NavigationMenuContext";

interface NavigationMenuButtonProps {
	action: "open" | "close";
	className?: string;
}

export const NavigationMenuButton = (props: NavigationMenuButtonProps) => {
	const { action, className } = props;
	const { handleDisable, handleActive } = useNavigationMenuContext();

	const actionIsForOpening = useMemo(() => action === "open", [action]);

	return (
		<button
			type="button"
			title={`${actionIsForOpening ? "Abrir" : "Fechar"} Menu`}
			onClick={actionIsForOpening ? handleActive : handleDisable}
			className={`${className} md:-rotate-90 w-[48px] max-w-[48px] md:w-[44px] md:max-w-[44px]`}
		>
			{actionIsForOpening ? "Menu" : "Fechar"}
		</button>
	);
};
