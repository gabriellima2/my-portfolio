import { KeyboardEvent, useEffect, useRef, type MutableRefObject } from "react";

import { useNavigationMenuContext } from "../../../contexts/NavigationMenuContext";
import { changeFocusEl } from "../../../utils/changeFocusEl";

type NavigationElement = HTMLDivElement;

type UseNavigationMenuReturn = {
	isOpen: boolean;
	navigationMenuRef: MutableRefObject<null | NavigationElement>;
	handleKeyDown: (e: KeyboardEvent<NavigationElement>) => void;
	handleDisable: () => void;
	handleActive: () => void;
};

const TAILWIND_CLASS_TO_HIDE_HORIZONTAL_OVERFLOW = "overflow-x-hidden";
let lastFocusableElementBeforeOpenMenu: Element;

export function useNavigationMenu(): UseNavigationMenuReturn {
	const { isOpen, handleDisable, handleActive } = useNavigationMenuContext();
	const navigationMenuRef = useRef<null | NavigationElement>(null);

	const handleFocus = (e: KeyboardEvent<NavigationElement>) => {
		if (!navigationMenuRef.current) return;

		const focusableEls =
			navigationMenuRef.current.querySelectorAll("a[href], button");
		const firstFocusableEl = focusableEls[0];
		const currentFocusabelEl = document.activeElement;
		const lastFocusableEl = focusableEls[focusableEls.length - 1];

		if (e.shiftKey && currentFocusabelEl === lastFocusableEl) return;
		if (
			e.shiftKey &&
			e.key === "Tab" &&
			currentFocusabelEl === firstFocusableEl
		) {
			changeFocusEl(lastFocusableEl);
			return e.preventDefault();
		}
		if (currentFocusabelEl === lastFocusableEl) {
			changeFocusEl(firstFocusableEl);
			return e.preventDefault();
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Tab" || e.key === "Shift") return handleFocus(e);
		if (e.key === "Escape") return handleDisable();
	};

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

	const handleFirstFocusableElement = () => {
		const closeButton = document.querySelector("button[title='Fechar Menu']");
		if (!closeButton) return;
		changeFocusEl(closeButton);
	};

	const handleLastFocusableElement = () => {
		const currentFocusabelEl = document.activeElement;

		if (isOpen) {
			if (currentFocusabelEl) {
				lastFocusableElementBeforeOpenMenu = currentFocusabelEl;
			}
			return handleFirstFocusableElement();
		}

		if (!lastFocusableElementBeforeOpenMenu) return;
		changeFocusEl(lastFocusableElementBeforeOpenMenu);
	};

	useEffect(() => {
		handlePageOverflow();
		handleLastFocusableElement();
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
		navigationMenuRef,
		handleKeyDown,
		handleDisable,
		handleActive,
	};
}
