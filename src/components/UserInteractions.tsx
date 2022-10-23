import { ThemeButton } from "./Buttons/ThemeButton";
import { Contacts } from "./Contacts";

export const UserInteractions = () => (
	<aside className="h-12 px-8 flex flex-row justify-between items-end md:h-[78%] md:flex-col md:w-18 md:mt-32">
		<div className="w-full flex justify-end md:block md:w-auto order-last md:order-first">
			<span className="h-[1px] w-1/2 max-w-[192px] block bg-white/30 md:max-w-none md:w-[1px] md:h-48" />
		</div>
		<div className="flex flex-row items-center gap-2 md:flex-col">
			<Contacts className="flex flex-row gap-2 md:flex-col" />
			<ThemeButton />
		</div>
	</aside>
);