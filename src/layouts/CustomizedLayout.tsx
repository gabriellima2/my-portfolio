import { motion } from "framer-motion";

import { UserInteractions } from "../components/UserInteractions";
import { HomeLink } from "../components/Links/HomeLink";
import { Copyright } from "../components/Copyright";
import { Layout } from "../components/Layout";

import type { LayoutProps } from "../types";

export const CustomizedLayout = (props: LayoutProps) => (
	<Layout.Container className={props.className}>
		<UserInteractions showContacts={props.showContacts}>
			<HomeLink />
		</UserInteractions>

		<Layout.Content>
			<motion.div
				initial={{ translateY: "-25px", opacity: 0, visibility: "hidden" }}
				animate={{ translateY: "0px", opacity: 1, visibility: "visible" }}
				transition={{ duration: 1 }}
			>
				{props.children}
			</motion.div>
		</Layout.Content>

		<Copyright />
	</Layout.Container>
);
