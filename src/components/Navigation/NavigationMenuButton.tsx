import { useNavigationMenuContext } from "../../contexts/NavigationMenuContext";

export const NavigationMenuButton = () => {
	const { isOpen, handleToggle } = useNavigationMenuContext();

	return (
		<button
			onClick={handleToggle}
			className="z-[2000] md:-rotate-90 w-[48px] max-w-[48px] md:w-[44px] md:max-w-[44px]"
		>
			{isOpen ? "Fechar" : "Menu"}
		</button>
	);
};
