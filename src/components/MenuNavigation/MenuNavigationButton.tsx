import { useMenuNavigationContext } from "../../contexts/MenuNavigationContext";

export const MenuNavigationButton = () => {
	const { isOpen, handleToggle } = useMenuNavigationContext();

	return (
		<button
			onClick={handleToggle}
			className="z-[2000] md:-rotate-90 w-[48px] max-w-[48px] md:w-[44px] md:max-w-[44px]"
		>
			{isOpen ? "Fechar" : "Menu"}
		</button>
	);
};
