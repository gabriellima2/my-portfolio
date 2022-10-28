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

		<Layout.Content>{props.children}</Layout.Content>

		<Copyright />
	</Layout.Container>
);
