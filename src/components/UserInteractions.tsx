import { ThemeButton } from "./Buttons/ThemeButton";
import { Contacts } from "./Contacts";

import type { WithChildren } from "../types";

export const UserInteractions = ({ children }: WithChildren) => (
	<aside className="h-12 px-8 flex flex-row justify-between items-end md:h-[78%] md:flex-col md:w-18 md:mt-32 md:fixed">
		<div className="w-full flex justify-end items-center order-last gap-4 md:flex-col md:justify-start md:gap-8 md:order-first">
			{children}
			<span className="h-[1px] w-1/2 max-w-[192px] block bg-white/30 order-first md:order-last md:max-w-none md:w-[1px] md:h-48" />
		</div>
		<div className="flex flex-row items-center gap-2 md:flex-col">
			<Contacts className="flex flex-row gap-2 md:flex-col" />
			<ThemeButton />
		</div>
	</aside>
);
