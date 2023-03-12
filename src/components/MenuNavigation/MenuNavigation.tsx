import { useEffect } from "react";

import { useMenuNavigationContext } from "../../contexts/MenuNavigationContext";
import { Navigation } from "../Navigation";

export const MenuNavigation = () => {
	const { isOpen, handleDisable } = useMenuNavigationContext();

	useEffect(() => {
		return () => handleDisable();
	}, []);

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
