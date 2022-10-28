import { motion } from "framer-motion";

import { ThemeButton } from "./Buttons/ThemeButton";
import { MyContacts } from "./MyContacts";
import { Line } from "./Line";

import type { WithChildren } from "../types";

export interface UserInteractionsProps extends WithChildren {
	showContacts?: boolean;
}

export const UserInteractions = (props: UserInteractionsProps) => (
	<motion.aside
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 1.4 }}
		className="h-12 px-8 flex flex-row justify-between items-end md:h-[78%] md:flex-col md:w-18 md:mt-32 md:fixed"
	>
		<div className="w-full flex justify-end items-center order-last gap-4 md:flex-col md:justify-start md:gap-8 md:order-first">
			{props.children}
			<Line />
		</div>
		<div className="flex flex-row items-center gap-2 md:flex-col">
			{props.showContacts && (
				<MyContacts.Quick className="flex flex-row gap-2 md:flex-col" />
			)}
			<ThemeButton />
		</div>
	</motion.aside>
);

const defaultProps: Pick<UserInteractionsProps, "showContacts"> = {
	showContacts: true,
};

UserInteractions.defaultProps = defaultProps;
