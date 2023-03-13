import { useNavigationMenuContext } from "../../contexts/NavigationMenuContext";

interface NavigationMenuButtonProps {
	className?: string;
}

export const NavigationMenuButton = (props: NavigationMenuButtonProps) => {
	const { isOpen, handleDisable, handleActive } = useNavigationMenuContext();

	return (
		<button
			onClick={isOpen ? handleDisable : handleActive}
			className={`${props.className} md:-rotate-90 w-[48px] max-w-[48px] md:w-[44px] md:max-w-[44px]`}
		>
			{isOpen ? "Fechar" : "Menu"}
		</button>
	);
};
