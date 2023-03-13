import { motion } from "framer-motion";

import { NavigationBar, NavigationMenuButton } from "../components/Navigation";
import { HomeLink } from "../components/Links/HomeLink";
import { Copyright } from "../components/Copyright";
import { Layout } from "../components/Layout";

import type { LayoutProps } from "../types";

export const CustomizedLayout = (props: LayoutProps) => (
	<Layout.Container className={props.className}>
		<NavigationBar showContacts={props.showContacts}>
			<NavigationMenuButton />
			<HomeLink />
		</NavigationBar>

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

const defaultProps: Pick<LayoutProps, "showContacts"> = {
	showContacts: true,
};

CustomizedLayout.defaultProps = defaultProps;
