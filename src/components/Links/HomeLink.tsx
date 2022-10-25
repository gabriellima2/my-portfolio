import { BsHouseFill } from "react-icons/bs";

import { MainLink } from "./MainLink";

export const HomeLink = () => (
	<MainLink.Text
		title="Início"
		href="/"
		className="font-light text-xl hover:animate-pulse"
	>
		<BsHouseFill />
	</MainLink.Text>
);
