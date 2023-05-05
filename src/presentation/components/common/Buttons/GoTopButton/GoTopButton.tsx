import { ArrowUp } from "phosphor-react";

import { BaseButton } from "../BaseButton";
import { changeDistanceToTopOfPage } from "@/shared/helpers/change-distance-to-top-of-page";

export const GoTopButton = () => (
	<BaseButton
		type="button"
		variants="square"
		title="Ir para o topo"
		onClick={() => changeDistanceToTopOfPage(0)}
	>
		<ArrowUp size={24} />
	</BaseButton>
);
