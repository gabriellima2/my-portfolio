import { useNavigationMenu } from "./hooks/useNavigationMenu";

import { Navigation, NavigationMenuButton } from "../Navigation";

export const NavigationMenu = () => {
	const { isOpen, navigationMenuRef, handleKeyDown } = useNavigationMenu();

	return (
		<>
			{isOpen && (
				<nav
					className="flex items-center justify-center absolute left-0 top-0 z-40 transition-colors w-screen h-screen bg-main/90 dark:bg-mainDark/90 backdrop-blur"
					ref={navigationMenuRef}
					onKeyDown={handleKeyDown}
				>
					<NavigationMenuButton
						action="close"
						className="absolute top-6 right-[68px] md:left-8 md:top-32 z-[2000]"
					/>
					<Navigation />
				</nav>
			)}
		</>
	);
};
