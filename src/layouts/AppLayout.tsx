import { UserInteractions } from "../components/UserInteractions";
import { Copyright } from "../components/Copyright";

import type { WithChildren } from "../types";

export const AppLayout = ({ children }: WithChildren) => (
	<div className="flex flex-col gap-12 h-screen min-h-full md:gap-0 md:flex-row">
		<UserInteractions />
		<div className="w-screen flex justify-center md:flex md:items-center md:justify-center">
			<main className="w-full p-6 pl-10 flex flex-col justify-center gap-6 lg:gap-0 lg:flex-row lg:items-center lg:justify-between lg:p-16 xl:max-w-[1500px]">
				{children}
			</main>
		</div>

		<Copyright />
	</div>
);
