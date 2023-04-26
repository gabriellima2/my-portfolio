import { ArrowUp } from "phosphor-react";
import { changeDistanceToTopOfPage } from "@/shared/helpers/change-distance-to-top-of-page";

export const GoTopButton = () => (
	<button
		type="button"
		title="Ir para o topo"
		onClick={() => changeDistanceToTopOfPage(0)}
	>
		<ArrowUp />
	</button>
);
