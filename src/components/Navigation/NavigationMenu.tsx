import { useNavigationMenu } from "./hooks/useNavigationMenu";

import { Navigation } from "../Navigation";

export const NavigationMenu = () => {
	const { isOpen } = useNavigationMenu();

	return (
		<>
			{isOpen && (
				<nav className="flex items-center justify-center absolute left-0 top-0 z-40 transition-colors w-screen h-screen bg-main/90 dark:bg-mainDark/90 backdrop-blur">
					<Navigation />
				</nav>
			)}
		</>
	);
};
