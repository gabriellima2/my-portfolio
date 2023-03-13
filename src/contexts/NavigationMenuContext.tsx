import { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { useToggle } from "../hooks/useToggle";

import type { WithChildren } from "../types";

interface INavigationMenuContext {
	isOpen: boolean;
	handleToggle: () => void;
	handleDisable: () => void;
}

export const NavigationMenuContext = createContext(
	{} as INavigationMenuContext
);

export const NavigationMenuProvider = ({ children }: WithChildren) => {
	const { pathname } = useRouter();
	const { isOpen, handleToggle, handleDisable } = useToggle();

	useEffect(() => handleDisable(), [pathname]);

	return (
		<NavigationMenuContext.Provider
			value={{ isOpen, handleToggle, handleDisable }}
		>
			{children}
		</NavigationMenuContext.Provider>
	);
};

export const useNavigationMenuContext = () => useContext(NavigationMenuContext);
