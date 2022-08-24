import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { Overlay } from "../Overlay";

import {
	AnchorText,
	List,
	Button,
	Hamburguer,
	AsideContainer,
	ListItem,
	Container,
} from "./styles";

import { anchors } from "../../../mocks";
import { changeFocusEl } from "../../../utils/changeFocusEl";

interface MobileNavigationMenuButtonProps {
	isActive: boolean;
	toggleMenu: () => void;
}

const MobileNavigationMenuButton = ({
	isActive,
	...props
}: MobileNavigationMenuButtonProps) => (
	<Button
		onClick={props.toggleMenu}
		title={isActive ? "Fechar menu" : "Abrir menu"}
	>
		<Hamburguer format={isActive ? "customized" : "default"} />
	</Button>
);

export const NavigationMenu = () => {
	const navigationMenuRef = useRef<null | HTMLDivElement>(null);
	const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

	let lastFocusableElementBeforeOpenMenu: Element;

	const handleFocus = (e: KeyboardEvent<HTMLDivElement>) => {
		if (!navigationMenuRef.current) return;

		const focusableEls =
			navigationMenuRef.current.querySelectorAll("a[href], button");

		const firstFocusableEl = focusableEls[0];
		const currentFocusabelEl = document.activeElement;
		const lastFocusableEl = focusableEls[focusableEls.length - 1];

		/*
			Com o foco voltando e o elemento ativo for o último, retorna, assim
			mantendo o comportamento padrão de voltar ao anterior
		*/
		if (e.shiftKey && currentFocusabelEl === lastFocusableEl) return;

		/* [shiftKey] Foco voltando e estiver no primeiro elemento, vai para o último */
		if (e.shiftKey && currentFocusabelEl === firstFocusableEl) {
			changeFocusEl(lastFocusableEl);
			return e.preventDefault();
		}

		/* TAB: Para o foco sair do último para o primeiro elemento */
		if (currentFocusabelEl === lastFocusableEl) {
			changeFocusEl(firstFocusableEl);
			return e.preventDefault();
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Tab" || e.key === "Shift") return handleFocus(e);

		if (e.key === "Escape") return setMobileMenuIsActive(false);
	};

	useEffect(() => {
		const html = document.documentElement;
		const currentFocusabelEl = document.activeElement;

		if (mobileMenuIsActive) {
			// Guardar o elemento atual com foco, antes de abrir o menu e mudar o elemento.
			if (currentFocusabelEl) {
				lastFocusableElementBeforeOpenMenu = currentFocusabelEl;
			}

			return html.classList.add("menu-active");
		}

		if (lastFocusableElementBeforeOpenMenu) {
			changeFocusEl(lastFocusableElementBeforeOpenMenu);
		}
		html.classList.remove("menu-active");
	}, [mobileMenuIsActive]);

	useEffect(() => {
		const handleResize = () => setMobileMenuIsActive(false);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<Overlay
				isActive={mobileMenuIsActive}
				disableDialog={() => setMobileMenuIsActive(false)}
			/>
			<Container ref={navigationMenuRef} onKeyDown={handleKeyDown}>
				<MobileNavigationMenuButton
					isActive={mobileMenuIsActive}
					toggleMenu={() => setMobileMenuIsActive((prevState) => !prevState)}
				/>
				<nav aria-label="Menu de navegação">
					<AsideContainer
						visibility={mobileMenuIsActive ? "visible" : "hidden"}
					/>

					<List visibility={mobileMenuIsActive ? "visible" : "hidden"}>
						{anchors.map((anchor) => (
							<ListItem key={anchor.name}>
								<AnchorText className="anchors" href={anchor.idBy}>
									{anchor.name}
								</AnchorText>
							</ListItem>
						))}
					</List>
				</nav>
			</Container>
		</>
	);
};
