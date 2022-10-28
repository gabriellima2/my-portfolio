import { UserInteractions } from "../components/UserInteractions";
import { Copyright } from "../components/Copyright";
import { Layout } from "../components/Layout";

import type { LayoutProps } from "../types";

export const DefaultLayout = (props: LayoutProps) => (
	<Layout.Container className={`${props.className} h-screen min-h-full`}>
		<UserInteractions showContacts={props.showContacts} />
		<Layout.Content>{props.children}</Layout.Content>

		<Copyright />
	</Layout.Container>
);
