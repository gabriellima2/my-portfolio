import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { WithChildren } from "../types";

interface IMenuNavigationContext {
	isOpen: boolean;
	handleToggle: () => void;
	handleDisable: () => void;
}

export const MenuNavigationContext = createContext(
	{} as IMenuNavigationContext
);

const HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS = "overflow-x-hidden";

export const MenuNavigationProvider = ({ children }: WithChildren) => {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => setIsOpen((prevState) => !prevState);

	const handleDisable = () => setIsOpen(false);

	const handlePageOverflow = () => {
		const body = document.body;
		const html = document.documentElement;

		if (!isOpen) {
			body.classList.remove(HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS);
			return html.classList.remove(HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS);
		}

		if (
			isOpen &&
			(!body.classList.contains(HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS) ||
				!html.classList.contains(HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS))
		) {
			body.classList.add(HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS);
			return html.classList.add(HORIZONTAL_OVERFLOW_HIDDEN_TAILWIND_CLASS);
		}
	};

	useEffect(() => handlePageOverflow(), [isOpen]);

	useEffect(() => {
		window.addEventListener("scroll", handleDisable);
		return () => window.removeEventListener("scroll", handleDisable);
	});

	useEffect(() => handleDisable(), [pathname]);

	return (
		<MenuNavigationContext.Provider
			value={{ isOpen, handleToggle, handleDisable }}
		>
			{children}
		</MenuNavigationContext.Provider>
	);
};

export const useMenuNavigationContext = () => useContext(MenuNavigationContext);
