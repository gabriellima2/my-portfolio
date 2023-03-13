import { useEffect } from "react";

import { useNavigationMenuContext } from "../../../contexts/NavigationMenuContext";

const TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW = "overflow-x-hidden";

export function useNavigationMenu() {
	const { isOpen, handleDisable, ...rest } = useNavigationMenuContext();

	const handlePageOverflow = () => {
		const body = document.body;
		const html = document.documentElement;

		if (!isOpen) {
			body.classList.remove(TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW);
			return html.classList.remove(TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW);
		}

		if (
			isOpen &&
			(!body.classList.contains(TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW) ||
				!html.classList.contains(TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW))
		) {
			body.classList.add(TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW);
			return html.classList.add(TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW);
		}
	};

	useEffect(() => {
		handlePageOverflow();
	}, [isOpen]);

	useEffect(() => {
		window.addEventListener("resize", handleDisable);
		window.addEventListener("scroll", handleDisable);

		return () => {
			window.removeEventListener("resize", handleDisable);
			window.removeEventListener("scroll", handleDisable);
			handleDisable();
		};
	}, []);

	return {
		isOpen,
		...rest,
	};
}
