import { KeyboardEvent, useEffect, useRef, useState } from "react";

import { Overlay } from "../Overlay";

import {
	AnchorText,
	List,
	Button,
	Hamburguer,
	Navigation,
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

	const disableMobileMenu = () => setMobileMenuIsActive(false);

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

		if (e.key === "Escape") return disableMobileMenu();
	};

	// Ativa/Desativa menu de maneira visual e acessivel
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

	// Lidar com eventos do usuário desativando o menu
	useEffect(() => {
		window.addEventListener("scroll", disableMobileMenu);
		window.addEventListener("resize", disableMobileMenu);

		return () => {
			window.removeEventListener("scroll", disableMobileMenu);
			window.removeEventListener("resize", disableMobileMenu);
		};
	}, []);

	return (
		<>
			<Overlay
				isActive={mobileMenuIsActive}
				disableDialog={disableMobileMenu}
			/>
			<Container ref={navigationMenuRef} onKeyDown={handleKeyDown}>
				<MobileNavigationMenuButton
					isActive={mobileMenuIsActive}
					toggleMenu={() => setMobileMenuIsActive((prevState) => !prevState)}
				/>
				<Navigation
					aria-label="Menu de navegação"
					visibility={mobileMenuIsActive ? "visible" : "hidden"}
				>
					<List>
						{anchors.map((anchor, index) => (
							<ListItem key={anchor.name}>
								<AnchorText
									onClick={() => {
										if (mobileMenuIsActive) {
											disableMobileMenu();
										}
									}}
									className="anchors"
									href={anchor.idBy}
								>
									{anchor.name}
								</AnchorText>
							</ListItem>
						))}
					</List>
				</Navigation>
			</Container>
		</>
	);
};
